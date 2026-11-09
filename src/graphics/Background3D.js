import * as THREE from 'three';

/**
 * 60 FPS Three.js WebGL 3D background using the PPTX color palette,
 * featuring rotating 3D radar rings, floating 3D wireframe polyhedra,
 * and a dynamic 3D particle field with camera parallax on slide changes.
 * Automatically falls back to static CSS when WebGL is unavailable or context is lost.
 */
export class Background3D {
  constructor(container) {
    this.container = container;
    this.canvas = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.particles = null;
    this.ringsGroup = null;
    this.polyhedra = [];
    this.animFrameId = null;
    this.fallbackActive = false;
    this.clock = new THREE.Clock();

    this.targetCameraX = 0;
    this.targetCameraY = 0;
    this.targetCameraZ = 28;
    this.targetRotZ = 0;

    this._boundResize = this._onResize.bind(this);
    this._boundContextLost = this._onContextLost.bind(this);
    this._boundContextRestored = this._onContextRestored.bind(this);
  }

  init() {
    if (!this.container || typeof window === 'undefined') return;

    try {
      const canvas = document.createElement('canvas');
      canvas.id = 'webgl-bg-canvas';
      canvas.setAttribute('data-testid', 'webgl-canvas');
      canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;';

      // Probe WebGL context availability before creating Three.js WebGLRenderer
      const gl =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
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
      this.camera = new THREE.PerspectiveCamera(
        58,
        window.innerWidth / window.innerHeight,
        0.1,
        250
      );
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
    const paletteHex = [0x85AC7E, 0xD8973C, 0x5DA271, 0x11457E, 0xFFFFFF, 0xD7141A];

    // 1. Vivid 3D Particle Field
    const count = 280;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 76;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 48;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 4;

      const c = new THREE.Color(paletteHex[i % paletteHex.length]);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.72,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // 2. 3D Gyroscopic Radar Rings (Jet Lag radar/thermometer theme)
    this.ringsGroup = new THREE.Group();

    const torusGeo1 = new THREE.TorusGeometry(16.5, 0.08, 12, 90);
    const torusMat1 = new THREE.MeshBasicMaterial({
      color: 0x85AC7E,
      transparent: true,
      opacity: 0.42
    });
    const ring1 = new THREE.Mesh(torusGeo1, torusMat1);
    ring1.rotation.x = Math.PI * 0.32;
    this.ringsGroup.add(ring1);

    const torusGeo2 = new THREE.TorusGeometry(21.5, 0.09, 12, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0xD8973C,
      transparent: true,
      opacity: 0.36
    });
    const ring2 = new THREE.Mesh(torusGeo2, torusMat2);
    ring2.rotation.x = -Math.PI * 0.28;
    ring2.rotation.y = Math.PI * 0.18;
    this.ringsGroup.add(ring2);

    const gridRingGeo = new THREE.RingGeometry(11, 24, 36, 3);
    const gridRingMat = new THREE.MeshBasicMaterial({
      color: 0x5DA271,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const gridRing = new THREE.Mesh(gridRingGeo, gridRingMat);
    gridRing.rotation.x = -Math.PI * 0.38;
    this.ringsGroup.add(gridRing);

    this.scene.add(this.ringsGroup);

    // 3. Floating 3D Low-Poly Geometric Beacons around the viewport perimeter
    this.polyhedra = [];
    const beaconConfigs = [
      { x: -21, y: 11, z: -4, r: 2.6, color: 0x85AC7E, type: 'ico' },
      { x: 21, y: 11, z: -5, r: 2.4, color: 0xD8973C, type: 'oct' },
      { x: -22, y: -11, z: -3, r: 2.3, color: 0x5DA271, type: 'oct' },
      { x: 22, y: -10, z: -4, r: 2.7, color: 0x11457E, type: 'ico' },
      { x: 0, y: 14.5, z: -8, r: 2.0, color: 0x85AC7E, type: 'ico' },
      { x: 0, y: -14.5, z: -8, r: 2.0, color: 0xD8973C, type: 'oct' }
    ];

    beaconConfigs.forEach((cfg, idx) => {
      const geo =
        cfg.type === 'ico'
          ? new THREE.IcosahedronGeometry(cfg.r, 1)
          : new THREE.OctahedronGeometry(cfg.r, 0);
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        wireframe: true,
        transparent: true,
        opacity: 0.52
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      mesh.userData = {
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        speedX: 0.006 + idx * 0.0015,
        speedY: 0.009 + idx * 0.0012,
        phase: idx * 1.1
      };
      this.scene.add(mesh);
      this.polyhedra.push(mesh);
    });
  }

  onSlideChange(indexh = 0, indexv = 0) {
    this.targetCameraX = Math.sin(indexh * 0.55) * 4.5;
    this.targetCameraY = Math.cos(indexh * 0.4) * 2.4 - indexv * 1.8;
    this.targetCameraZ = 27 - (indexh % 4) * 1.6;
    this.targetRotZ = (indexh % 2 === 0 ? 1 : -1) * 0.06;
  }

  _animate() {
    if (this.fallbackActive || !this.renderer || !this.scene || !this.camera) return;

    this.animFrameId = requestAnimationFrame(() => this._animate());

    try {
      const elapsed = this.clock.getElapsedTime();

      this.camera.position.x += (this.targetCameraX - this.camera.position.x) * 0.05;
      this.camera.position.y += (this.targetCameraY - this.camera.position.y) * 0.05;
      this.camera.position.z += (this.targetCameraZ - this.camera.position.z) * 0.05;
      this.camera.rotation.z += (this.targetRotZ - this.camera.rotation.z) * 0.04;

      if (this.particles) {
        this.particles.rotation.y += 0.0018;
        this.particles.rotation.x += 0.0007;
      }

      if (this.ringsGroup) {
        this.ringsGroup.rotation.z += 0.0028;
        this.ringsGroup.rotation.y = Math.sin(elapsed * 0.45) * 0.32;
        this.ringsGroup.rotation.x = Math.cos(elapsed * 0.35) * 0.18;
      }

      for (const mesh of this.polyhedra) {
        const u = mesh.userData;
        mesh.rotation.x += u.speedX;
        mesh.rotation.y += u.speedY;
        mesh.position.y = u.baseY + Math.sin(elapsed * 1.3 + u.phase) * 1.15;
        mesh.position.x = u.baseX + Math.cos(elapsed * 0.9 + u.phase) * 0.75;
      }

      this.renderer.render(this.scene, this.camera);
    } catch {
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
      this.canvas.style.opacity = '0';
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
