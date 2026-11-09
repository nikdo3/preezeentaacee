import * as THREE from 'three';

/**
 * 60 FPS Three.js WebGL background using strictly the PPTX color palette,
 * with automatic fallback when WebGL is unavailable, context is lost,
 * or prefers-reduced-motion: reduce is active.
 */
export class Background3D {
  constructor(container) {
    this.container = container;
    this.canvas = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.particles = null;
    this.gridMesh = null;
    this.animFrameId = null;
    this.fallbackActive = false;
    this.reducedMotion = false;

    this.targetCameraX = 0;
    this.targetCameraY = 0;
    this.targetCameraZ = 28;

    this._boundResize = this._onResize.bind(this);
    this._boundContextLost = this._onContextLost.bind(this);
    this._boundContextRestored = this._onContextRestored.bind(this);
  }

  init() {
    if (!this.container || typeof window === 'undefined') return;

    try {
      const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotion = Boolean(mq && mq.matches);
    } catch {
      this.reducedMotion = false;
    }

    if (this.reducedMotion) {
      this._activateStaticFallback('reduced-motion');
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      canvas.id = 'webgl-bg-canvas';
      canvas.setAttribute('data-testid', 'webgl-canvas');
      canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';

      // Probe WebGL context availability before creating Three.js WebGLRenderer
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        this._activateStaticFallback('webgl-unavailable');
        return;
      }

      canvas.addEventListener('webglcontextlost', this._boundContextLost, false);
      canvas.addEventListener('webglcontextrestored', this._boundContextRestored, false);

      this.canvas = canvas;
      this.container.appendChild(canvas);

      this.renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
      this.camera.position.set(0, 0, 28);

      this._buildSceneObjects();
      window.addEventListener('resize', this._boundResize);
      this._animate();
      this.container.setAttribute('data-bg-mode', 'webgl');
    } catch (err) {
      console.warn('[Background3D] WebGL initialization failed, activating static fallback:', err);
      this._activateStaticFallback('webgl-error');
    }
  }

  _buildSceneObjects() {
    // Strictly extracted PPTX palette colors
    const paletteHex = [0x2A4D14, 0x11457E, 0xD8973C, 0x85AC7E, 0x5DA271];

    const count = 160;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const c = new THREE.Color(paletteHex[i % paletteHex.length]);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.55
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Subtle 3D wireframe terrain/radar ring representing Jet Lag map & radar zones
    const ringGeo = new THREE.RingGeometry(8, 18, 32, 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x85AC7E,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    this.gridMesh = new THREE.Mesh(ringGeo, ringMat);
    this.gridMesh.rotation.x = -Math.PI * 0.35;
    this.scene.add(this.gridMesh);
  }

  onSlideChange(indexh = 0, indexv = 0) {
    this.targetCameraX = ((indexh % 10) - 4.5) * 1.4;
    this.targetCameraY = -(indexv * 1.8);
    this.targetCameraZ = 28 - ((indexh % 3) * 1.5);
  }

  _animate() {
    if (this.fallbackActive || !this.renderer || !this.scene || !this.camera) return;

    this.animFrameId = requestAnimationFrame(() => this._animate());

    try {
      this.camera.position.x += (this.targetCameraX - this.camera.position.x) * 0.05;
      this.camera.position.y += (this.targetCameraY - this.camera.position.y) * 0.05;
      this.camera.position.z += (this.targetCameraZ - this.camera.position.z) * 0.05;

      if (this.particles) {
        this.particles.rotation.y += 0.0008;
        this.particles.rotation.x += 0.0003;
      }
      if (this.gridMesh) {
        this.gridMesh.rotation.z += 0.0012;
      }

      this.renderer.render(this.scene, this.camera);
    } catch (err) {
      this._activateStaticFallback('render-error');
    }
  }

  _onContextLost(event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    this._activateStaticFallback('context-lost');
  }

  _onContextRestored() {
    this.fallbackActive = false;
    if (this.container) {
      this.container.setAttribute('data-bg-mode', 'webgl');
      this.container.classList.remove('webgl-fallback-active');
    }
    this._animate();
  }

  _activateStaticFallback(reason = 'fallback') {
    this.fallbackActive = true;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.style. opacity = '0';
    }
    if (this.container) {
      this.container.setAttribute('data-bg-mode', `fallback-${reason}`);
      this.container.classList.add('webgl-fallback-active');
    }
  }

  _onResize() {
    if (!this.renderer || !this.camera || this.fallbackActive) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  destroy() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
    window.removeEventListener('resize', this._boundResize);
    if (this.canvas) {
      this.canvas.removeEventListener('webglcontextlost', this._boundContextLost);
      this.canvas.removeEventListener('webglcontextrestored', this._boundContextRestored);
    }
  }
}
