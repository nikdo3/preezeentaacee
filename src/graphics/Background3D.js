import * as THREE from 'three';

function hexToRgbString(hex, fallback = '133, 172, 126') {
  if (!hex || typeof hex !== 'string') return fallback;
  const clean = hex.replace('#', '').trim();
  if (clean.length !== 6) return fallback;
  const num = parseInt(clean, 16);
  if (Number.isNaN(num)) return fallback;
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

const PHOTO_PATHS = [
  './assets/photos/20241113_172411.jpg',
  './assets/photos/20241113_172443.jpg',
  './assets/photos/20241113_172444.jpg',
  './assets/photos/20250115_101442.jpg',
  './assets/photos/20250212_202843.jpg',
  './assets/photos/20250529_135654.jpg',
  './assets/photos/20251031_125837.jpg',
  './assets/photos/IMG_20230305_150733.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.17.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.30.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.33.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.35.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.38.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.40.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.43.jpg',
  './assets/photos/Lucie Brabencova - 2026-11-09 17.20.45.jpg',
  './assets/photos/PXL_20231101_131938790.jpg',
  './assets/photos/PXL_20231115_053341909.MP.jpg',
  './assets/photos/PXL_20240306_071324979.jpg',
  './assets/photos/PXL_20260710_112437392.jpg',
  './assets/photos/Screenshot_20250105_031945_Photos.jpg',
  './assets/photos/Screenshot_20260706_022523_Drive.jpg',
  './assets/photos/Screenshot_20260706_023829_Drive.jpg',
  './assets/photos/Screenshot_20260706_023907_Drive.jpg',
  './assets/photos/Screenshot_20260706_025046_Photos.jpg',
  './assets/photos/Screenshot_20260706_025503_Photos.jpg',
  './assets/photos/Screenshot_20260706_025733_Photos.jpg',
  './assets/photos/Screenshot_20260706_084004_Photos.jpg',
  './assets/photos/Screenshot_20260706_084111_Photos.jpg',
  './assets/photos/Screenshot_20260706_120516_Photos.jpg',
  './assets/photos/Screenshot_20260706_120653_Photos.jpg',
  './assets/photos/Screenshot_20260706_120843_Photos.jpg',
  './assets/photos/Screenshot_20260706_121011_Photos.jpg',
  './assets/photos/Screenshot_20260706_121056_Photos.jpg',
  './assets/photos/Screenshot_20260706_121249_Photos.jpg',
  './assets/photos/Screenshot_20260706_122757_Photos.jpg',
  './assets/photos/Screenshot_20260714_124114_Gallery.jpg',
  './assets/photos/Snapchat-1067852516.jpg',
  './assets/photos/Hnědý Prostý Koláž Post na Facebook_20260719_164950_0000.jpg',
  './assets/photos/Hnědý Prostý Koláž Post na Facebook_20260719_165347_0000.jpg',
  './assets/photos/White Minimalist Summer Aesthetic Grid Collage Instagram Story_20260718_233934_0000.jpg'
];

const PHOTO_SLOTS = [
  // Left perimeter slots framing the slide
  { x: -24.0, y: 12.0, z: 2.0, rotZ: -0.09, rotY: 0.16, ampX: 0.8, ampY: 1.1, speed: 0.65 },
  { x: -26.5, y: 0.5, z: 8.0, rotZ: 0.07, rotY: 0.22, ampX: 1.1, ampY: 0.9, speed: 0.75 },
  { x: -23.0, y: -11.5, z: -2.0, rotZ: -0.06, rotY: 0.14, ampX: 0.7, ampY: 1.2, speed: 0.60 },
  { x: -28.0, y: 6.5, z: 14.0, rotZ: 0.11, rotY: 0.25, ampX: 1.0, ampY: 0.8, speed: 0.80 },
  // Right perimeter slots framing the slide
  { x: 24.0, y: 12.0, z: 3.0, rotZ: 0.08, rotY: -0.16, ampX: 0.8, ampY: 1.1, speed: 0.70 },
  { x: 26.5, y: -0.5, z: 7.0, rotZ: -0.07, rotY: -0.22, ampX: 1.1, ampY: 0.9, speed: 0.60 },
  { x: 23.0, y: -11.5, z: -1.5, rotZ: 0.06, rotY: -0.14, ampX: 0.7, ampY: 1.2, speed: 0.75 },
  { x: 28.0, y: 6.5, z: 13.0, rotZ: -0.10, rotY: -0.25, ampX: 1.0, ampY: 0.8, speed: 0.65 },
  // Top framing perimeter slots
  { x: -9.5, y: 15.5, z: -3.0, rotZ: 0.05, rotY: 0.08, ampX: 0.9, ampY: 0.7, speed: 0.55 },
  { x: 10.5, y: 15.0, z: -2.0, rotZ: -0.05, rotY: -0.08, ampX: 0.9, ampY: 0.7, speed: 0.58 }
];

/**
 * High-performance 60 FPS Three.js WebGL 3D background.
 * Synchronized with each slide's color palette, featuring rotating 3D radar rings,
 * floating 3D wireframe polyhedra, dynamic 3D particle field,
 * true 3D floating photos drifting in space around the slide perimeter,
 * and butter-smooth camera parallax without touching the DOM.
 */
export class Background3D {
  constructor(container) {
    this.container = container;
    this.canvas = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.particles = null;
    this.particleSlots = null;
    this.ringsGroup = null;
    this.ringMeshes = [];
    this.polyhedra = [];
    this.photoMeshes = [];
    this.photoGeometry = null;
    this.textureLoader = null;
    this.textureCache = new Map();
    this.animFrameId = null;
    this.fallbackActive = false;
    this.clock = new THREE.Clock();

    this.targetCameraX = 0;
    this.targetCameraY = 0;
    this.targetCameraZ = 28;
    this.targetRotZ = 0;
    this.transitionImpulse = 0;

    this.pointerX = 0;
    this.pointerY = 0;
    this.smoothPointerX = 0;
    this.smoothPointerY = 0;

    // Dynamic palette colors for WebGL elements
    this.currColors = [
      new THREE.Color('#D7141A'),
      new THREE.Color('#11457E'),
      new THREE.Color('#D8973C'),
      new THREE.Color('#FFFFFF')
    ];
    this.targetColors = [
      new THREE.Color('#D7141A'),
      new THREE.Color('#11457E'),
      new THREE.Color('#D8973C'),
      new THREE.Color('#FFFFFF')
    ];

    this._boundResize = this._onResize.bind(this);
    this._boundPointerMove = this._onPointerMove.bind(this);
    this._boundContextLost = this._onContextLost.bind(this);
    this._boundContextRestored = this._onContextRestored.bind(this);
  }

  init() {
    if (!this.container || typeof window === 'undefined') return;

    window.addEventListener('pointermove', this._boundPointerMove, { passive: true });

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

  _getTexture(path) {
    if (!this.textureLoader) {
      this.textureLoader = new THREE.TextureLoader();
    }
    const encoded = encodeURI(path);
    if (!this.textureCache.has(encoded)) {
      const tex = this.textureLoader.load(encoded);
      if (THREE.SRGBColorSpace) {
        tex.colorSpace = THREE.SRGBColorSpace;
      }
      this.textureCache.set(encoded, tex);
    }
    return this.textureCache.get(encoded);
  }

  _buildSceneObjects() {
    // 1. Vivid 3D Particle Field
    const count = 300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    this.particleSlots = new Uint8Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 76;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 48;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 4;

      const slot = i % 4;
      this.particleSlots[i] = slot;
      const c = this.currColors[slot];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.78,
      vertexColors: true,
      transparent: true,
      opacity: 0.88
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // 2. 3D Gyroscopic Radar Rings
    this.ringsGroup = new THREE.Group();
    this.ringMeshes = [];

    const torusGeo1 = new THREE.TorusGeometry(16.5, 0.1, 12, 90);
    const torusMat1 = new THREE.MeshBasicMaterial({
      color: this.currColors[0].clone(),
      transparent: true,
      opacity: 0.48
    });
    const ring1 = new THREE.Mesh(torusGeo1, torusMat1);
    ring1.rotation.x = Math.PI * 0.32;
    this.ringsGroup.add(ring1);
    this.ringMeshes.push(ring1);

    const torusGeo2 = new THREE.TorusGeometry(21.5, 0.1, 12, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: this.currColors[2].clone(),
      transparent: true,
      opacity: 0.42
    });
    const ring2 = new THREE.Mesh(torusGeo2, torusMat2);
    ring2.rotation.x = -Math.PI * 0.28;
    ring2.rotation.y = Math.PI * 0.18;
    this.ringsGroup.add(ring2);
    this.ringMeshes.push(ring2);

    const gridRingGeo = new THREE.RingGeometry(11, 24.5, 36, 3);
    const gridRingMat = new THREE.MeshBasicMaterial({
      color: this.currColors[1].clone(),
      wireframe: true,
      transparent: true,
      opacity: 0.26
    });
    const gridRing = new THREE.Mesh(gridRingGeo, gridRingMat);
    gridRing.rotation.x = -Math.PI * 0.38;
    this.ringsGroup.add(gridRing);
    this.ringMeshes.push(gridRing);

    this.scene.add(this.ringsGroup);

    // 3. Floating 3D Low-Poly Geometric Beacons
    this.polyhedra = [];
    const beaconConfigs = [
      { x: -20.5, y: 10.5, z: -3.5, r: 2.7, slot: 0, type: 'ico' },
      { x: 20.5, y: 10.5, z: -4.5, r: 2.5, slot: 2, type: 'oct' },
      { x: -21.5, y: -10.5, z: -3.0, r: 2.4, slot: 1, type: 'oct' },
      { x: 21.5, y: -10.0, z: -3.8, r: 2.8, slot: 0, type: 'ico' },
      { x: 0, y: 14.2, z: -7.5, r: 2.1, slot: 2, type: 'ico' },
      { x: 0, y: -14.2, z: -7.5, r: 2.1, slot: 1, type: 'oct' }
    ];

    beaconConfigs.forEach((cfg, idx) => {
      const geo =
        cfg.type === 'ico'
          ? new THREE.IcosahedronGeometry(cfg.r, 1)
          : new THREE.OctahedronGeometry(cfg.r, 0);
      const mat = new THREE.MeshBasicMaterial({
        color: this.currColors[cfg.slot].clone(),
        wireframe: true,
        transparent: true,
        opacity: 0.58
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      mesh.userData = {
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        slot: cfg.slot,
        speedX: 0.006 + idx * 0.0015,
        speedY: 0.009 + idx * 0.0012,
        phase: idx * 1.1
      };
      this.scene.add(mesh);
      this.polyhedra.push(mesh);
    });

    // 4. True 3D Floating Photos drifting around the perimeter
    this.photoMeshes = [];
    this.photoGeometry = new THREE.PlaneGeometry(3.6, 2.7);

    PHOTO_SLOTS.forEach((cfg, idx) => {
      const initialPath = PHOTO_PATHS[idx % PHOTO_PATHS.length];
      const tex = this._getTexture(initialPath);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(this.photoGeometry, mat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      mesh.rotation.z = cfg.rotZ;
      mesh.rotation.y = cfg.rotY;

      mesh.userData = {
        baseRotZ: cfg.rotZ,
        baseRotY: cfg.rotY,
        currentBaseX: cfg.x,
        currentBaseY: cfg.y,
        currentBaseZ: cfg.z,
        targetBaseX: cfg.x,
        targetBaseY: cfg.y,
        targetBaseZ: cfg.z,
        ampX: cfg.ampX,
        ampY: cfg.ampY,
        speed: cfg.speed,
        phase: idx * 0.85,
        impulse: 0,
        currentPath: initialPath
      };

      this.scene.add(mesh);
      this.photoMeshes.push(mesh);
    });
  }

  _updateFloatingPhotos(slideIndex = 0) {
    if (!this.photoMeshes || this.photoMeshes.length === 0) return;

    const stride = 3;
    const startIdx = (slideIndex * stride) % PHOTO_PATHS.length;

    for (let i = 0; i < this.photoMeshes.length; i++) {
      const mesh = this.photoMeshes[i];
      const u = mesh.userData;
      const photoIdx = (startIdx + i) % PHOTO_PATHS.length;
      const photoPath = PHOTO_PATHS[photoIdx];

      if (u.currentPath !== photoPath) {
        u.currentPath = photoPath;
        mesh.material.map = this._getTexture(photoPath);
        mesh.material.needsUpdate = true;
      }

      const cfg = PHOTO_SLOTS[i];
      const driftX = Math.sin(slideIndex * 0.7 + i * 1.3) * 1.4;
      const driftY = Math.cos(slideIndex * 0.5 + i * 1.1) * 1.0;
      const driftZ = Math.sin(slideIndex * 0.9 + i * 0.8) * 1.6;

      u.targetBaseX = cfg.x + driftX;
      u.targetBaseY = cfg.y + driftY;
      u.targetBaseZ = cfg.z + driftZ;
      u.impulse = 1.0;
    }
  }

  _applyAmbientTheme(palette) {
    if (!palette || typeof document === 'undefined') return;
    if (this.container) {
      this.container.setAttribute('data-slide-primary', palette.primary || '#2A4D14');
    }

    const layerA = document.getElementById('ambient-bg-a');
    const layerB = document.getElementById('ambient-bg-b');
    if (!layerA || !layerB) return;

    const p = palette.primary || '#2A4D14';
    const s = palette.secondary || '#11457E';
    const a = palette.accent || '#D8973C';
    const g = palette.glow || p;

    const pRgb = hexToRgbString(p, '42, 77, 20');
    const sRgb = hexToRgbString(s, '17, 69, 126');
    const aRgb = hexToRgbString(a, '216, 151, 60');
    const gRgb = hexToRgbString(g, '133, 172, 126');

    const gradientCss = [
      `radial-gradient(circle at 16% 20%, rgba(${pRgb}, 0.85) 0%, transparent 60%)`,
      `radial-gradient(circle at 84% 80%, rgba(${sRgb}, 0.85) 0%, transparent 60%)`,
      `radial-gradient(circle at 80% 18%, rgba(${aRgb}, 0.55) 0%, transparent 50%)`,
      `radial-gradient(circle at 20% 82%, rgba(${gRgb}, 0.50) 0%, transparent 55%)`,
      `linear-gradient(135deg, rgba(${pRgb}, 0.65) 0%, rgba(10, 16, 22, 0.55) 50%, rgba(${sRgb}, 0.70) 100%)`
    ].join(', ');

    // On initial load, initialize both layers so the background immediately reflects the first slide
    if (!this._ambientInitialized) {
      this._ambientInitialized = true;
      layerA.style.background = gradientCss;
      layerB.style.background = gradientCss;
      layerA.classList.add('active');
      layerB.classList.remove('active');
      return;
    }

    // Smooth dual cross-fade: active layer fades out while target layer fades in
    const isAActive = layerA.classList.contains('active');
    const targetLayer = isAActive ? layerB : layerA;
    const currentLayer = isAActive ? layerA : layerB;

    targetLayer.style.background = gradientCss;
    targetLayer.classList.add('active');
    currentLayer.classList.remove('active');
  }

  onSlideChange(indexh = 0, indexv = 0, palette = null) {
    this.targetCameraX = Math.sin(indexh * 0.65) * 5.2;
    this.targetCameraY = Math.cos(indexh * 0.45) * 2.8 - indexv * 1.8;
    this.targetCameraZ = 26.8 - (indexh % 4) * 1.6;
    this.targetRotZ = (indexh % 2 === 0 ? 1 : -1) * 0.075;
    this.transitionImpulse = 1.0;

    if (palette) {
      this.targetColors[0].set(palette.primary || '#2A4D14');
      this.targetColors[1].set(palette.secondary || '#85AC7E');
      this.targetColors[2].set(palette.accent || '#D8973C');
      this.targetColors[3].set(palette.glow || '#FFFFFF');
      this._applyAmbientTheme(palette);

      // Update ambient palette CSS variables ONCE when slide changes
      if (this.container) {
        this.container.style.setProperty('--ambient-primary-rgb', hexToRgbString(palette.primary, '215, 20, 26'));
        this.container.style.setProperty('--ambient-secondary-rgb', hexToRgbString(palette.secondary, '17, 69, 126'));
        this.container.style.setProperty('--ambient-accent-rgb', hexToRgbString(palette.accent, '216, 151, 60'));
        this.container.style.setProperty('--ambient-glow-rgb', hexToRgbString(palette.glow, '215, 20, 26'));
      }

      // Update particle geometry colors ONCE when slide changes
      if (this.particles) {
        const colorAttr = this.particles.geometry.getAttribute('color');
        if (colorAttr && this.particleSlots) {
          const arr = colorAttr.array;
          for (let i = 0; i < this.particleSlots.length; i++) {
            const c = this.targetColors[this.particleSlots[i]];
            arr[i * 3] = c.r;
            arr[i * 3 + 1] = c.g;
            arr[i * 3 + 2] = c.b;
          }
          colorAttr.needsUpdate = true;
        }
      }
    }

    this._updateFloatingPhotos(indexh);
  }

  _onPointerMove(event) {
    if (typeof window === 'undefined') return;
    const nx = (event.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
    const ny = (event.clientY / Math.max(1, window.innerHeight)) * 2 - 1;
    this.pointerX = Math.max(-1, Math.min(1, nx));
    this.pointerY = Math.max(-1, Math.min(1, ny));
  }

  _animate() {
    if (this.fallbackActive || !this.renderer || !this.scene || !this.camera) return;

    this.animFrameId = requestAnimationFrame(() => this._animate());

    try {
      const elapsed = this.clock.getElapsedTime();

      // Decay slide transition impulse smoothly
      this.transitionImpulse *= 0.93;
      if (this.transitionImpulse < 0.001) this.transitionImpulse = 0;

      // Smooth pointer parallax strictly inside WebGL without touching DOM
      this.smoothPointerX += (this.pointerX - this.smoothPointerX) * 0.08;
      this.smoothPointerY += (this.pointerY - this.smoothPointerY) * 0.08;

      // Smoothly interpolate active slide palette colors in 3D materials
      for (let s = 0; s < 4; s++) {
        this.currColors[s].lerp(this.targetColors[s], 0.06);
      }

      if (this.ringMeshes.length === 3) {
        this.ringMeshes[0].material.color.copy(this.currColors[0]);
        this.ringMeshes[1].material.color.copy(this.currColors[2]);
        this.ringMeshes[2].material.color.copy(this.currColors[1]);
      }

      const camTargetX = this.targetCameraX + this.smoothPointerX * 2.2;
      const camTargetY = this.targetCameraY - this.smoothPointerY * 1.6;
      this.camera.position.x += (camTargetX - this.camera.position.x) * 0.06;
      this.camera.position.y += (camTargetY - this.camera.position.y) * 0.06;
      this.camera.position.z += (this.targetCameraZ - this.camera.position.z) * 0.06;
      this.camera.rotation.z += (this.targetRotZ - this.camera.rotation.z) * 0.05;

      const speedBoost = 1 + this.transitionImpulse * 5.5;

      // 1. Particle field rotation
      if (this.particles) {
        this.particles.rotation.y += 0.0018 * speedBoost;
        this.particles.rotation.x += 0.0007 * speedBoost;
      }

      // 2. Radar rings rotation & scaling
      if (this.ringsGroup) {
        this.ringsGroup.rotation.z += 0.003 * speedBoost;
        this.ringsGroup.rotation.y = Math.sin(elapsed * 0.48) * 0.35 + this.smoothPointerX * 0.18;
        this.ringsGroup.rotation.x = Math.cos(elapsed * 0.36) * 0.2 + this.smoothPointerY * 0.14;
        const ringScale = 1 + this.transitionImpulse * 0.12;
        this.ringsGroup.scale.setScalar(ringScale);
      }

      // 3. Polyhedra floating & rotation
      for (const mesh of this.polyhedra) {
        const u = mesh.userData;
        mesh.material.color.copy(this.currColors[u.slot]);
        mesh.rotation.x += u.speedX * speedBoost;
        mesh.rotation.y += u.speedY * speedBoost;
        mesh.position.y = u.baseY + Math.sin(elapsed * 1.35 + u.phase) * 1.25;
        mesh.position.x = u.baseX + Math.cos(elapsed * 0.95 + u.phase) * 0.85;
        const pulseScale = 1 + Math.sin(elapsed * 2.1 + u.phase) * 0.06 + this.transitionImpulse * 0.22;
        mesh.scale.setScalar(pulseScale);
      }

      // 4. True 3D Floating Photos drifting & gentle bobbing
      for (let i = 0; i < this.photoMeshes.length; i++) {
        const mesh = this.photoMeshes[i];
        const u = mesh.userData;

        // Smooth drift to target base positions
        u.currentBaseX += (u.targetBaseX - u.currentBaseX) * 0.04;
        u.currentBaseY += (u.targetBaseY - u.currentBaseY) * 0.04;
        u.currentBaseZ += (u.targetBaseZ - u.currentBaseZ) * 0.04;

        // Gentle sin/cos floating bobbing
        const bobX = Math.sin(elapsed * u.speed * 0.85 + u.phase) * u.ampX;
        const bobY = Math.cos(elapsed * u.speed * 1.1 + u.phase) * u.ampY;
        const bobZ = Math.sin(elapsed * 0.65 + u.phase) * 0.7;

        mesh.position.x = u.currentBaseX + bobX;
        mesh.position.y = u.currentBaseY + bobY;
        mesh.position.z = u.currentBaseZ + bobZ;

        // Subtle rotation with slight pointer parallax influence
        mesh.rotation.z = u.baseRotZ + Math.sin(elapsed * 0.75 + u.phase) * 0.05;
        mesh.rotation.y = u.baseRotY + Math.cos(elapsed * 0.55 + u.phase) * 0.08 + this.smoothPointerX * 0.10;
        mesh.rotation.x = Math.sin(elapsed * 0.5 + u.phase) * 0.05 - this.smoothPointerY * 0.08;

        // Slide transition impulse decay
        if (u.impulse > 0.001) {
          mesh.rotation.y += u.impulse * 0.035;
          u.impulse *= 0.93;
        }
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
      this.animFrameId = null;
    }
    window.removeEventListener('resize', this._boundResize);
    window.removeEventListener('pointermove', this._boundPointerMove);
    if (this.canvas) {
      this.canvas.removeEventListener('webglcontextlost', this._boundContextLost);
      this.canvas.removeEventListener('webglcontextrestored', this._boundContextRestored);
      if (this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
    }
    if (this.photoGeometry) {
      this.photoGeometry.dispose();
      this.photoGeometry = null;
    }
    for (const mesh of this.photoMeshes) {
      if (mesh.material) mesh.material.dispose();
    }
    this.photoMeshes = [];
    for (const tex of this.textureCache.values()) {
      tex.dispose();
    }
    this.textureCache.clear();
    for (const mesh of this.polyhedra) {
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) mesh.material.dispose();
    }
    this.polyhedra = [];
    for (const mesh of this.ringMeshes) {
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) mesh.material.dispose();
    }
    this.ringMeshes = [];
    if (this.particles) {
      if (this.particles.geometry) this.particles.geometry.dispose();
      if (this.particles.material) this.particles.material.dispose();
      this.particles = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
  }
}
