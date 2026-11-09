import * as THREE from 'three';

function hexToRgbString(hex, fallback = '133, 172, 126') {
  if (!hex || typeof hex !== 'string') return fallback;
  const clean = hex.replace('#', '').trim();
  if (clean.length !== 6) return fallback;
  const num = parseInt(clean, 16);
  if (Number.isNaN(num)) return fallback;
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

const PHOTO_SETS = [
  // Phase 0: Úvod & Pravidla (slides 1-5)
  [
    './assets/team/lucie-1.png',
    './assets/slides/image2.png',
    './assets/slides/image3.png',
    './assets/team/lucie-2.png',
    './assets/slides/image1.png',
    './assets/slides/image10.png'
  ],
  // Phase 1: Hideři & Schovávání (slides 6-13)
  [
    './assets/slides/image11.png',
    './assets/slides/image13.png',
    './assets/slides/image16.png',
    './assets/slides/image17.jpg',
    './assets/team/lucie-3.png',
    './assets/slides/image18.png'
  ],
  // Phase 2: Seekři & Mapy (slides 14-24)
  [
    './assets/slides/image20.png',
    './assets/slides/image22.jpg',
    './assets/slides/image23.jpg',
    './assets/slides/image24.png',
    './assets/team/lucie-4.png',
    './assets/slides/image25.jpg'
  ],
  // Phase 3: Karty, Decky & Bonusy (slides 25-31)
  [
    './assets/slides/image27.png',
    './assets/slides/image33.jpg',
    './assets/slides/image35.jpg',
    './assets/slides/image37.png',
    './assets/team/lucie-5.png',
    './assets/slides/image40.png'
  ],
  // Phase 4: Fotografické výzvy (slides 32-41)
  [
    './assets/slides/image43.jpg',
    './assets/slides/image45.jpg',
    './assets/slides/image53.jpg',
    './assets/slides/image56.jpg',
    './assets/slides/image57.jpg',
    './assets/team/lucie-6.png'
  ],
  // Phase 5: Taktika, Filmování & Závěr (slides 42-50)
  [
    './assets/slides/image64.png',
    './assets/slides/image66.png',
    './assets/slides/image69.png',
    './assets/slides/image72.png',
    './assets/slides/image73.png',
    './assets/team/lucie-7.png'
  ]
];

const SLOT_CONFIGS = [
  { id: 'tl', label: 'top-left', rot: -4 },
  { id: 'ml', label: 'mid-left', rot: 3 },
  { id: 'bl', label: 'bottom-left', rot: -3 },
  { id: 'tr', label: 'top-right', rot: 4 },
  { id: 'mr', label: 'mid-right', rot: -2 },
  { id: 'br', label: 'bottom-right', rot: 3 }
];

/**
 * 60 FPS Three.js WebGL 3D background synchronized with each slide's color palette,
 * featuring rotating 3D radar rings, floating 3D wireframe polyhedra,
 * dynamic 3D particle field, perimeter floating photos framing the slide,
 * and interactive 3D stage parallax & smooth gradient transitions.
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
    this.particleSlots = null;
    this.ringsGroup = null;
    this.ringMeshes = [];
    this.polyhedra = [];
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

    // Dynamic palette colors (smoothly lerped per frame at 60 FPS)
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

    // Floating photos surroundings
    this.floatingPhotosContainer = null;
    this.floatingSlots = [];
    this.currentPhotoSetIdx = -1;

    this._boundResize = this._onResize.bind(this);
    this._boundPointerMove = this._onPointerMove.bind(this);
    this._boundContextLost = this._onContextLost.bind(this);
    this._boundContextRestored = this._onContextRestored.bind(this);
  }

  init() {
    if (!this.container || typeof window === 'undefined') return;

    window.addEventListener('pointermove', this._boundPointerMove, { passive: true });

    // Initialize the perimeter floating photos layer in the surroundings
    this._initFloatingPhotos();

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

  _initFloatingPhotos() {
    if (!this.container || typeof document === 'undefined') return;

    let el = this.container.querySelector('#ambient-floating-photos');
    if (!el) {
      el = document.createElement('div');
      el.id = 'ambient-floating-photos';
      el.setAttribute('data-testid', 'ambient-floating-photos');
      this.container.appendChild(el);
    }
    this.floatingPhotosContainer = el;
    this.floatingPhotosContainer.innerHTML = '';
    this.floatingSlots = [];

    SLOT_CONFIGS.forEach((cfg) => {
      const slotEl = document.createElement('div');
      slotEl.className = `floating-photo-slot slot-${cfg.id}`;
      slotEl.style.setProperty('--slot-rot', `${cfg.rot}deg`);

      const imgA = document.createElement('img');
      imgA.className = 'floating-photo-img active';
      imgA.alt = '';
      imgA.loading = 'lazy';

      const imgB = document.createElement('img');
      imgB.className = 'floating-photo-img inactive';
      imgB.alt = '';
      imgB.loading = 'lazy';

      slotEl.appendChild(imgA);
      slotEl.appendChild(imgB);
      this.floatingPhotosContainer.appendChild(slotEl);

      this.floatingSlots.push({
        slotEl,
        imgA,
        imgB,
        activeTarget: 'A',
        currentSrc: ''
      });
    });

    this._updateFloatingPhotos(0);
  }

  _getPhotoSetIndex(slideIndex = 0) {
    if (slideIndex <= 5) return 0;
    if (slideIndex <= 13) return 1;
    if (slideIndex <= 24) return 2;
    if (slideIndex <= 31) return 3;
    if (slideIndex <= 41) return 4;
    return 5;
  }

  _updateFloatingPhotos(slideIndex = 0) {
    const setIdx = this._getPhotoSetIndex(slideIndex);
    if (setIdx === this.currentPhotoSetIdx && this.currentPhotoSetIdx !== -1) return;
    this.currentPhotoSetIdx = setIdx;

    const photos = PHOTO_SETS[setIdx] || PHOTO_SETS[0];

    this.floatingSlots.forEach((slot, i) => {
      const newSrc = photos[i % photos.length];
      if (!newSrc || slot.currentSrc === newSrc) return;
      slot.currentSrc = newSrc;

      // Cross-fade between imgA and imgB
      if (slot.activeTarget === 'A') {
        slot.imgB.src = newSrc;
        slot.imgB.classList.remove('inactive');
        slot.imgB.classList.add('active');
        slot.imgA.classList.remove('active');
        slot.imgA.classList.add('inactive');
        slot.activeTarget = 'B';
      } else {
        slot.imgA.src = newSrc;
        slot.imgA.classList.remove('inactive');
        slot.imgA.classList.add('active');
        slot.imgB.classList.remove('active');
        slot.imgB.classList.add('inactive');
        slot.activeTarget = 'A';
      }
    });
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

    // 2. 3D Gyroscopic Radar Rings (Jet Lag radar/thermometer theme)
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

    // 3. Floating 3D Low-Poly Geometric Beacons around the viewport perimeter
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
  }

  _applyAmbientTheme(palette) {
    if (!this.container || !palette) return;
    this.container.setAttribute('data-slide-primary', palette.primary);
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

      // Smooth pointer parallax for both 3D camera, active slide stage, and surrounding photos
      this.smoothPointerX += (this.pointerX - this.smoothPointerX) * 0.08;
      this.smoothPointerY += (this.pointerY - this.smoothPointerY) * 0.08;

      if (this.container) {
        const waveTiltX = Math.sin(elapsed * 1.1) * 0.65 + this.transitionImpulse * 2.4;
        const waveTiltY = Math.cos(elapsed * 0.85) * 0.85 - this.transitionImpulse * 2.8;
        const tiltX = (-this.smoothPointerY * 2.6 + waveTiltX).toFixed(2);
        const tiltY = (this.smoothPointerX * 3.2 + waveTiltY).toFixed(2);
        const floatY = (Math.sin(elapsed * 1.45) * 3.5).toFixed(2);
        this.container.style.setProperty('--stage-tilt-x', `${tiltX}deg`);
        this.container.style.setProperty('--stage-tilt-y', `${tiltY}deg`);
        this.container.style.setProperty('--stage-float-y', `${floatY}px`);
      }

      // Smoothly interpolate active slide palette colors in 3D space & CSS at 60 FPS
      for (let s = 0; s < 4; s++) {
        this.currColors[s].lerp(this.targetColors[s], 0.06);
      }

      // Update ambient gradient CSS variables every frame for buttery-smooth 60 FPS transitions
      if (this.container) {
        const c0 = this.currColors[0];
        const c1 = this.currColors[1];
        const c2 = this.currColors[2];
        const c3 = this.currColors[3];
        const r0 = Math.round(c0.r * 255);
        const g0 = Math.round(c0.g * 255);
        const b0 = Math.round(c0.b * 255);
        const r1 = Math.round(c1.r * 255);
        const g1 = Math.round(c1.g * 255);
        const b1 = Math.round(c1.b * 255);
        const r2 = Math.round(c2.r * 255);
        const g2 = Math.round(c2.g * 255);
        const b2 = Math.round(c2.b * 255);
        const r3 = Math.round(c3.r * 255);
        const g3 = Math.round(c3.g * 255);
        const b3 = Math.round(c3.b * 255);

        this.container.style.setProperty('--ambient-primary-rgb', `${r0}, ${g0}, ${b0}`);
        this.container.style.setProperty('--ambient-secondary-rgb', `${r1}, ${g1}, ${b1}`);
        this.container.style.setProperty('--ambient-accent-rgb', `${r2}, ${g2}, ${b2}`);
        this.container.style.setProperty('--ambient-glow-rgb', `${r3}, ${g3}, ${b3}`);
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

      if (this.particles) {
        this.particles.rotation.y += 0.0018 * speedBoost;
        this.particles.rotation.x += 0.0007 * speedBoost;
        const colorAttr = this.particles.geometry.getAttribute('color');
        if (colorAttr && this.particleSlots) {
          const arr = colorAttr.array;
          for (let i = 0; i < this.particleSlots.length; i++) {
            const c = this.currColors[this.particleSlots[i]];
            arr[i * 3] = c.r;
            arr[i * 3 + 1] = c.g;
            arr[i * 3 + 2] = c.b;
          }
          colorAttr.needsUpdate = true;
        }
      }

      if (this.ringsGroup) {
        this.ringsGroup.rotation.z += 0.003 * speedBoost;
        this.ringsGroup.rotation.y = Math.sin(elapsed * 0.48) * 0.35 + this.smoothPointerX * 0.18;
        this.ringsGroup.rotation.x = Math.cos(elapsed * 0.36) * 0.2 + this.smoothPointerY * 0.14;
        const ringScale = 1 + this.transitionImpulse * 0.12;
        this.ringsGroup.scale.setScalar(ringScale);
      }

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
    window.removeEventListener('pointermove', this._boundPointerMove);
    if (this.canvas) {
      this.canvas.removeEventListener('webglcontextlost', this._boundContextLost);
      this.canvas.removeEventListener('webglcontextrestored', this._boundContextRestored);
    }
  }
}
