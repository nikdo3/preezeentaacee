import presentationData from '../data/presentation-data.json';

const STAGE_WIDTH = presentationData.metadata?.stageWidth || 960;
const STAGE_HEIGHT = presentationData.metadata?.stageHeight || 540;

// Safe dynamic/optional import of EDITABLE_SLIDES from src/data/editovatelne-texty.js
const editableMod = import.meta.glob('../data/editovatelne-texty.js', { eager: true })['../data/editovatelne-texty.js'];
export const EDITABLE_SLIDES = editableMod?.EDITABLE_SLIDES || editableMod?.default || {};

/**
 * Returns presenter notes for the given slide index, prioritizing EDITABLE_SLIDES overrides.
 */
export function getSlideNotes(slideIndex = 0) {
  const slides = presentationData.slides || [];
  const slide = slides[slideIndex];
  if (!slide) return '';
  const override = EDITABLE_SLIDES[slide.slideNumber];
  return override?.notes || slide.notes || '';
}

/**
 * Returns the title for the given slide index, prioritizing EDITABLE_SLIDES overrides.
 */
export function getSlideTitle(slideIndex = 0) {
  const slides = presentationData.slides || [];
  const slide = slides[slideIndex];
  if (!slide) return '';
  const override = EDITABLE_SLIDES[slide.slideNumber];
  return override?.title || slide.title || `Snímek ${slide.slideNumber}`;
}

/**
 * Extracts a dynamic color palette for a given slide index so that both the
 * ambient viewport background (#app-root) and the Three.js 3D scene dynamically adapt.
 */
export function getSlideThemePalette(slideIndex = 0) {
  const slides = presentationData.slides || [];
  const slide = slides[Math.max(0, Math.min(slideIndex, slides.length - 1))] || slides[0];
  if (!slide) {
    return {
      primary: '#2A4D14',
      secondary: '#11457E',
      accent: '#D8973C',
      glow: '#85AC7E'
    };
  }

  let primary = '#2A4D14';
  let secondary = '#11457E';
  let accent = '#D8973C';
  let glow = '#85AC7E';

  const bg = slide.bg;
  if (bg) {
    if (bg.type === 'linear' && Array.isArray(bg.stops) && bg.stops.length >= 2) {
      primary = bg.stops[0].color || '#D7141A';
      secondary = bg.stops[bg.stops.length - 1].color || '#11457E';
      accent = '#FFFFFF';
      glow = primary;
    } else if (bg.type === 'radial' && Array.isArray(bg.stops) && bg.stops.length >= 2) {
      const outer = bg.stops[bg.stops.length - 1].color || '#2A4D14';
      primary = outer;
      secondary = '#5DA271';
      accent = '#11457E';
      glow = '#85AC7E';
    } else if (bg.type === 'solid' && bg.color) {
      primary = bg.color;
      if (bg.color.toUpperCase() === '#2A4D14') {
        secondary = '#85AC7E';
        accent = '#D8973C';
        glow = '#5DA271';
      } else if (bg.color.toUpperCase() === '#85AC7E') {
        secondary = '#11457E';
        accent = '#D7141A';
        glow = '#5DA271';
      }
    }
  }

  if (Array.isArray(slide.layoutElements)) {
    for (const el of slide.layoutElements) {
      if (el.kind === 'sp' && el.fill && el.fill.type === 'solid' && el.fill.color) {
        secondary = el.fill.color;
        break;
      }
    }
  }

  const accentCycle = ['#D8973C', '#D7141A', '#11457E', '#5DA271'];
  if (bg?.type === 'solid' && bg.color?.toUpperCase() === '#85AC7E') {
    accent = accentCycle[slideIndex % accentCycle.length];
  }

  return { primary, secondary, accent, glow, slideIndex };
}

/**
 * Computes and applies uniform CSS scaling so the 960x540 (16:9) PPTX stage
 * fits any viewport with zero overflow while framing the 3D surroundings.
 */
export function updateStageScale() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const vw = window.innerWidth || 1920;
  const vh = window.innerHeight || 1080;

  const marginFactorW = vw < 600 ? 0.96 : 0.90;
  const marginFactorH = vh < 600 ? 0.94 : 0.88;

  const scaleX = (vw * marginFactorW) / STAGE_WIDTH;
  const scaleY = (vh * marginFactorH) / STAGE_HEIGHT;
  const scale = Math.max(0.2, Math.min(scaleX, scaleY));

  document.documentElement.style.setProperty('--pptx-stage-scale', scale.toFixed(4));
}

function fillToCss(fill, isSlideBg = false) {
  if (!fill || fill.type === 'none') return 'transparent';
  if (fill.type === 'solid') {
    if (isSlideBg && fill.color && fill.color.startsWith('#') && fill.color.length === 7) {
      const r = parseInt(fill.color.slice(1, 3), 16);
      const g = parseInt(fill.color.slice(3, 5), 16);
      const b = parseInt(fill.color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, 0.92)`;
    }
    return fill.color || 'transparent';
  }
  if (fill.type === 'linear' && Array.isArray(fill.stops) && fill.stops.length > 0) {
    const stopsCss = fill.stops.map((s) => `${s.color} ${s.pos}%`).join(', ');
    return `linear-gradient(${fill.angle ?? 90}deg, ${stopsCss})`;
  }
  if (fill.type === 'radial' && Array.isArray(fill.stops) && fill.stops.length > 0) {
    const stopsCss = fill.stops.map((s) => `${s.color} ${s.pos}%`).join(', ');
    return `radial-gradient(circle at 50% 50%, ${stopsCss})`;
  }
  return 'transparent';
}

function buildTransformCss(box) {
  const parts = [];
  if (box.rot) parts.push(`rotate(${box.rot}deg)`);
  if (box.flipH) parts.push('scaleX(-1)');
  if (box.flipV) parts.push('scaleY(-1)');
  return parts.length > 0 ? parts.join(' ') : '';
}

/**
 * Creates a crisp, stylized white line-art SVG of Prague & PID transit network for Slide 1.
 */
function createPragueSvg() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'pptx-prague-silhouette-svg');
  svg.setAttribute('viewBox', '0 0 400 400');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('aria-label', 'Praha – JET-PID mapa a silueta');

  svg.innerHTML = `
    <defs>
      <filter id="glow-prague" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="vltava-grad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.85" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.95" />
        <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.85" />
      </linearGradient>
    </defs>

    <!-- Outer Stylized Shield / Prague Emblem Frame -->
    <circle cx="200" cy="200" r="182" fill="none" stroke="rgba(255, 255, 255, 0.45)" stroke-width="2" stroke-dasharray="6 4" />
    <circle cx="200" cy="200" r="174" fill="none" stroke="rgba(255, 255, 255, 0.75)" stroke-width="2.5" />
    <circle cx="200" cy="200" r="162" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.2" />

    <!-- Administrative Prague Outline Boundary (Stylized polygon) -->
    <path d="M 125,70 L 195,52 L 275,64 L 335,115 L 358,185 L 342,270 L 295,335 L 205,358 L 115,335 L 62,265 L 50,175 L 82,108 Z"
          fill="rgba(17, 69, 126, 0.35)" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" filter="url(#glow-prague)" />

    <!-- Radar / Coordinate Grid Axis -->
    <line x1="200" y1="26" x2="200" y2="374" stroke="rgba(255, 255, 255, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
    <line x1="26" y1="200" x2="374" y2="200" stroke="rgba(255, 255, 255, 0.22)" stroke-width="1" stroke-dasharray="3 3" />

    <!-- Iconic Winding Vltava River Curve (South to North through Prague center with islands) -->
    <path d="M 215,355 C 220,310 205,280 185,250 C 165,220 162,188 180,165 C 200,140 248,142 260,118 C 272,94 250,68 252,54"
          fill="none" stroke="url(#vltava-grad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-prague)" />

    <!-- River Islands (Střelecký ostrov & Štvanice) -->
    <ellipse cx="178" cy="205" rx="3.5" ry="9" fill="#FFFFFF" stroke="none" transform="rotate(-15 178 205)" />
    <ellipse cx="232" cy="138" rx="4.5" ry="11" fill="#FFFFFF" stroke="none" transform="rotate(25 232 138)" />

    <!-- Pražský Hrad (Prague Castle) & St. Vitus Cathedral Spire Silhouette (West Bank) -->
    <g transform="translate(112, 142) scale(0.72)" stroke="#FFFFFF" stroke-width="2" fill="none">
      <!-- Hill base -->
      <path d="M 0,55 Q 35,42 70,55" stroke="rgba(255,255,255,0.6)" stroke-width="1.8" />
      <!-- Cathedral twin spires + central tower -->
      <path d="M 18,48 L 18,22 L 23,8 L 28,22 L 28,48" stroke="#FFFFFF" fill="rgba(255,255,255,0.2)" />
      <path d="M 42,48 L 42,16 L 47,2 L 52,16 L 52,48" stroke="#FFFFFF" fill="rgba(255,255,255,0.2)" />
      <path d="M 28,34 L 42,34" stroke="#FFFFFF" stroke-width="1.5" />
      <!-- Castle palace fortifications -->
      <path d="M 2,52 L 2,42 L 18,42 L 52,42 L 68,42 L 68,52" stroke="#FFFFFF" />
    </g>

    <!-- Karlův Most (Charles Bridge) with arches crossing the Vltava -->
    <g transform="translate(162, 196)" stroke="#FFFFFF" stroke-width="2" fill="none">
      <line x1="0" y1="8" x2="52" y2="4" stroke="#FFFFFF" stroke-width="3" />
      <!-- Arch spans -->
      <path d="M 4,8 Q 12,0 20,7" />
      <path d="M 20,7 Q 28,-1 36,6" />
      <path d="M 36,6 Q 44,-2 50,5" />
      <!-- Bridge Tower -->
      <path d="M 46,6 L 46,-8 L 50,-14 L 54,-8 L 54,6" fill="rgba(255,255,255,0.25)" />
    </g>

    <!-- PID / Metro Transit Hub Nodes along Prague corridors -->
    <!-- Line A (Green) -->
    <path d="M 98,198 L 175,202 L 245,188 L 310,165" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-dasharray="4 2" />
    <!-- Line B (Yellow) -->
    <path d="M 92,260 L 165,225 L 235,160 L 305,105" fill="none" stroke="#EAB308" stroke-width="2.5" stroke-dasharray="4 2" />
    <!-- Line C (Red) -->
    <path d="M 268,78 L 245,148 L 235,215 L 242,320" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="4 2" />

    <!-- Station Nodes (Dots) -->
    <circle cx="175" cy="202" r="4.5" fill="#FFFFFF" stroke="#11457E" stroke-width="2" />
    <circle cx="235" cy="160" r="4.5" fill="#FFFFFF" stroke="#11457E" stroke-width="2" />
    <circle cx="245" cy="188" r="4.5" fill="#FFFFFF" stroke="#11457E" stroke-width="2" />
    <circle cx="165" cy="225" r="4" fill="#FFFFFF" stroke="#11457E" stroke-width="1.8" />
    <circle cx="235" cy="215" r="4" fill="#FFFFFF" stroke="#11457E" stroke-width="1.8" />

    <!-- Badge Pills -->
    <g transform="translate(200, 318)">
      <rect x="-64" y="-14" width="128" height="26" rx="13" fill="#11457E" stroke="#FFFFFF" stroke-width="1.8" filter="url(#glow-prague)" />
      <text x="0" y="4" text-anchor="middle" font-family="'Red Hat Display', sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" letter-spacing="1.5">JET-PID PRAHA</text>
    </g>
  `;

  return svg;
}

function renderPicElement(el, slideIdx, elOrder, slide) {
  const { box, src, crop, extraPhoto } = el;
  const slideNum = slide?.slideNumber || slideIdx + 1;

  // Grounded check: if extra photo, touching any boundary, or on slides 19-24
  const touchesBoundary =
    box.y + box.h >= 460 || box.y <= 30 || box.x <= 30 || box.x + box.w >= 860;
  const isGroundedSlide = slideNum >= 19 && slideNum <= 24;

  const wrapper = document.createElement('div');
  wrapper.className = extraPhoto ? 'pptx-el pptx-pic pptx-extra-photo' : 'pptx-el pptx-pic';

  if (el.grounded || el.extraPhoto || touchesBoundary || isGroundedSlide) {
    wrapper.classList.add('pptx-pic-grounded');
  }

  // Slide 23: remove frame/border around lucie-8.png
  if (src && src.includes('lucie-8')) {
    wrapper.classList.remove('pptx-extra-photo');
    wrapper.style.border = 'none';
    wrapper.style.boxShadow = 'none';
    wrapper.style.borderRadius = '0';
  }

  // Slides 30 & 31: clean modal enlargement overlay shown ONLY on click/advance (NOT initially!)
  const isFragmentPopup =
    el.fragmentPopup ||
    (slideNum === 30 && src?.includes('image33')) ||
    (slideNum === 31 && src?.includes('image35'));

  if (isFragmentPopup) {
    const popup = document.createElement('div');
    popup.className = 'pptx-el pptx-clean-popup fragment';
    popup.setAttribute('data-fragment-index', '0');
    popup.style.left = '40px';
    popup.style.top = '25px';
    popup.style.width = '880px';
    popup.style.height = '490px';
    popup.style.zIndex = '50';

    const popImg = document.createElement('img');
    popImg.src = src;
    popImg.className = 'pptx-clean-popup-img';
    popImg.alt = 'Detail karet';
    popup.appendChild(popImg);

    return popup;
  }

  wrapper.style.left = `${box.x}px`;
  wrapper.style.top = `${box.y}px`;
  wrapper.style.width = `${box.w}px`;
  wrapper.style.height = `${box.h}px`;
  wrapper.style.setProperty('--el-order', String(elOrder));

  const tf = buildTransformCss(box);
  if (tf) wrapper.style.transform = tf;

  // Slides 33, 35, 39, 40: Detail Zoom Reveal
  // Crucial on Slide 35: ONLY the cropped photo zooms in on click; the base uncropped photo stays visible immediately!
  const isFragmentZoom =
    el.fragmentZoom ||
    (slideNum === 33 && src?.includes('image43')) ||
    (slideNum === 35 && Boolean(crop) && src?.includes('image53')) ||
    (slideNum === 39 && src?.includes('image59')) ||
    (slideNum === 40 && src?.includes('image58'));

  if (isFragmentZoom) {
    wrapper.classList.add('fragment', 'pptx-pic-zoom-reveal');
    wrapper.setAttribute('data-fragment-index', '0');
    wrapper.style.zIndex = '28';
  }

  const animInner = document.createElement('div');
  animInner.className = 'pptx-pic-motion';

  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.loading = slideIdx < 8 ? 'eager' : 'lazy';
  img.decoding = 'async';

  if (crop && (crop.l || crop.t || crop.r || crop.b)) {
    animInner.classList.add('pptx-pic-cropped');
    const visW = Math.max(0.05, 1 - (crop.l || 0) - (crop.r || 0));
    const visH = Math.max(0.05, 1 - (crop.t || 0) - (crop.b || 0));
    img.style.width = `${+(100 / visW).toFixed(3)}%`;
    img.style.height = `${+(100 / visH).toFixed(3)}%`;
    img.style.left = `${+(-(crop.l || 0) * 100 / visW).toFixed(3)}%`;
    img.style.top = `${+(-(crop.t || 0) * 100 / visH).toFixed(3)}%`;
  } else {
    img.className = 'pptx-pic-img';
  }

  animInner.appendChild(img);

  // If zoom reveal, append glowing viewfinder frame and badge
  if (isFragmentZoom) {
    const vf = document.createElement('div');
    vf.className = 'pptx-zoom-viewfinder';
    const badge = document.createElement('div');
    badge.className = 'pptx-zoom-badge';
    badge.textContent = el.zoomBadge || '🔍 DETAIL ZOOM';
    vf.appendChild(badge);
    animInner.appendChild(vf);
  }

  // Slides 34 & 41: Phone Screen Road Outline Overlays
  const isRoadOutline =
    el.fragmentRoadOutline ||
    (slideNum === 34 && src?.includes('image41') ? 'nearest' : null) ||
    (slideNum === 41 && src?.includes('image57') ? '1km' : null);

  if (isRoadOutline) {
    const roadOverlay = document.createElement('div');
    roadOverlay.className = 'fragment pptx-road-outline-overlay';
    roadOverlay.setAttribute('data-fragment-index', '0');

    const svgNS = 'http://www.w3.org/2000/svg';
    const roadSvg = document.createElementNS(svgNS, 'svg');
    roadSvg.setAttribute('class', 'pptx-road-svg');

    if (isRoadOutline === 'nearest' || isRoadOutline === true) {
      roadSvg.setAttribute('viewBox', '0 0 280 433');
      roadSvg.innerHTML = `
        <defs>
          <filter id="road-glow-nearest" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <!-- Obrys nejbližší cesty: přesně kopíruje silnici na image41.jpg -->
        <path class="pptx-road-path" d="M 72,425 C 70,390 60,350 60,300 C 60,260 72,230 95,190 C 115,160 135,140 148,115 C 160,90 155,65 142,45 C 138,30 150,15 165,5"
              fill="none" stroke="#4ADE80" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#road-glow-nearest)" />
        <circle cx="72" cy="425" r="7" fill="#FFFFFF" stroke="#22C55E" stroke-width="3" />
        <circle cx="165" cy="5" r="7" fill="#FFFFFF" stroke="#22C55E" stroke-width="3" />
        <rect x="75" y="16" width="180" height="26" rx="13" fill="rgba(14,22,28,0.9)" stroke="#4ADE80" stroke-width="1.5" />
        <text x="165" y="33" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Nejbližší cesta</text>
      `;
    } else {
      // 1 km route on Slide 41 (398x339 map image57.jpg)
      roadSvg.setAttribute('viewBox', '0 0 398 339');
      roadSvg.innerHTML = `
        <defs>
          <filter id="road-glow-1km" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <!-- Obrys trasy 1 km: plynule kopíruje reálný modrý okruh na mapě image57.jpg -->
        <path class="pptx-road-path" d="M 60,5 C 75,20 90,35 105,50 C 120,65 145,85 165,105 C 185,125 205,145 225,165 C 245,185 265,205 282,225 C 285,228 270,230 240,230 L 190,232 C 170,240 145,260 125,280 C 105,300 85,315 55,332"
              fill="none" stroke="#4ADE80" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" filter="url(#road-glow-1km)" />
        <circle cx="60" cy="5" r="6.5" fill="#FFFFFF" stroke="#22C55E" stroke-width="2.5" />
        <circle cx="55" cy="332" r="6.5" fill="#4ADE80" stroke="#11457E" stroke-width="2.5" />
        <rect x="115" y="15" width="170" height="24" rx="12" fill="rgba(14,22,28,0.9)" stroke="#4ADE80" stroke-width="1.5" />
        <text x="200" y="31" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Trasa +-1 km</text>
      `;
    }

    roadOverlay.appendChild(roadSvg);
    animInner.appendChild(roadOverlay);
  }

  wrapper.appendChild(animInner);
  return wrapper;
}

function renderCustGeomSvg(el) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'pptx-cust-svg');
  const firstPath = el.custPaths[0];
  const vbW = Math.max(1, firstPath.w || Math.round(el.box.w) || 100);
  const vbH = Math.max(1, firstPath.h || Math.round(el.box.h) || 100);
  svg.setAttribute('viewBox', `0 0 ${vbW} ${vbH}`);
  svg.setAttribute('preserveAspectRatio', 'none');

  for (const p of el.custPaths) {
    const pathEl = document.createElementNS(svgNS, 'path');
    pathEl.setAttribute('d', p.d);
    if (p.noFill || !el.fill || el.fill.type === 'none') {
      pathEl.setAttribute('fill', 'none');
    } else if (el.fill.type === 'solid') {
      pathEl.setAttribute('fill', el.fill.color || 'none');
    } else {
      pathEl.setAttribute('fill', 'none');
    }

    if (el.stroke && el.stroke.color) {
      pathEl.setAttribute('stroke', el.stroke.color);
      pathEl.setAttribute('stroke-width', String(el.stroke.width || 1.5));
      pathEl.setAttribute('vector-effect', 'non-scaling-stroke');
      pathEl.setAttribute('stroke-linecap', 'round');
      pathEl.setAttribute('stroke-linejoin', 'round');
    }
    svg.appendChild(pathEl);
  }
  return svg;
}

function createRunNode(run) {
  if (run.br) {
    return document.createElement('br');
  }
  const tag = run.hlink ? 'a' : 'span';
  const node = document.createElement(tag);
  node.className = run.hlink ? 'pptx-run pptx-link' : 'pptx-run';
  if (run.hlink) {
    node.href = run.hlink;
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
  }
  node.textContent = run.text;
  const pxSize = +((run.sz || 16) * (4 / 3)).toFixed(2);
  node.style.fontSize = `${pxSize}px`;
  if (run.font) {
    node.style.fontFamily = `'${run.font}', 'Red Hat Text', sans-serif`;
  }
  if (run.b) node.style.fontWeight = '700';
  if (run.i) node.style.fontStyle = 'italic';
  if (run.u) node.style.textDecoration = 'underline';
  if (run.color) node.style.color = run.color;
  return node;
}

function renderSpElement(el, elOrder, globalPCountRef, slide, slidePCountRef) {
  const { box, prst, fill, stroke, custPaths, anchor, paragraphs, phKey } = el;
  const div = document.createElement('div');
  div.className = `pptx-el pptx-sp pptx-prst-${prst || 'rect'}`;
  div.style.setProperty('--el-order', String(elOrder));
  if (phKey) {
    div.setAttribute('data-ph', phKey);
  }

  // Fragment animation support
  if (el.fragment) {
    div.classList.add('fragment');
    if (el.fragmentIndex !== undefined) {
      div.setAttribute('data-fragment-index', String(el.fragmentIndex));
    }
  }

  div.style.left = `${box.x}px`;
  div.style.top = `${box.y}px`;
  div.style.width = `${box.w}px`;
  div.style.height = `${box.h}px`;

  const tf = buildTransformCss(box);
  if (tf) div.style.transform = tf;

  if (custPaths && custPaths.length > 0) {
    div.classList.add('pptx-has-cust-svg');
    div.appendChild(renderCustGeomSvg(el));
  } else {
    if (fill && fill.type !== 'none') {
      div.style.background = fillToCss(fill, false);
    }
    if (stroke && stroke.color) {
      div.style.border = `${stroke.width || 1}px solid ${stroke.color}`;
    }
  }

  // Check editable text override for title
  const isTitleEl = phKey === 'title' || phKey === 'ctrTitle';
  const overrideTitle = slide ? EDITABLE_SLIDES[slide.slideNumber]?.title : null;

  if (paragraphs && paragraphs.length > 0) {
    const textWrap = document.createElement('div');
    textWrap.className = `pptx-txbody pptx-anchor-${anchor || 't'}`;

    for (let pIdx = 0; pIdx < paragraphs.length; pIdx++) {
      const p = paragraphs[pIdx];
      const pEl = document.createElement('div');
      pEl.className = 'pptx-p';
      pEl.style.setProperty('--p-idx', String(globalPCountRef.count++));
      pEl.style.textAlign =
        p.algn === 'ctr' ? 'center' :
        p.algn === 'r' ? 'right' :
        p.algn === 'just' ? 'justify' : 'left';
      pEl.style.lineHeight = String(p.lineHeight || 1.15);
      if (p.spcBefPx) pEl.style.marginTop = `${p.spcBefPx}px`;
      if (p.spcAftPx) pEl.style.marginBottom = `${p.spcAftPx}px`;

      let runContainer = pEl;
      if (p.bullet) {
        pEl.classList.add('pptx-p-bulleted');
        const bulletSpan = document.createElement('span');
        bulletSpan.className = 'pptx-bullet';
        bulletSpan.textContent = p.bullet;
        if (p.bulletColor) bulletSpan.style.color = p.bulletColor;
        const firstRunSz = p.runs.find((r) => r.sz)?.sz || 18;
        bulletSpan.style.fontSize = `${+(firstRunSz * (4 / 3) * 0.85).toFixed(2)}px`;
        pEl.appendChild(bulletSpan);

        runContainer = document.createElement('span');
        runContainer.className = 'pptx-p-content';
        pEl.appendChild(runContainer);
      }

      // Check editable paragraph override from src/data/editovatelne-texty.js
      const isSldNum = phKey === 'sldNum';
      const currPIdx = (!isSldNum && slidePCountRef) ? slidePCountRef.count++ : -1;
      const editablePText = (currPIdx >= 0 && slide) ? EDITABLE_SLIDES[slide.slideNumber]?.paragraphs?.[currPIdx] : null;

      // Title override support: only override if user explicitly customized it in editovatelne-texty.js
      const originalTitleText = (p.runs || []).map((r) => r.text || '').join('').trim();
      const hasCustomTitleOverride = isTitleEl && pIdx === 0 && overrideTitle &&
        overrideTitle.trim() !== (slide.title || '').trim() &&
        overrideTitle.trim() !== originalTitleText;

      if (hasCustomTitleOverride) {
        const span = document.createElement('span');
        span.className = 'pptx-run';
        span.textContent = overrideTitle;
        const firstRun = p.runs?.[0] || {};
        const pxSize = +((firstRun.sz || 28) * (4 / 3)).toFixed(2);
        span.style.fontSize = `${pxSize}px`;
        span.style.fontWeight = '700';
        if (firstRun.font) span.style.fontFamily = `'${firstRun.font}', 'Red Hat Display', sans-serif`;
        if (firstRun.color) span.style.color = firstRun.color;
        runContainer.appendChild(span);
      } else if (typeof editablePText === 'string') {
        const originalPText = p.runs.map((r) => r.text).join('');
        if (editablePText.trim() !== originalPText.trim()) {
          // User edited this paragraph in editovatelne-texty.js!
          const span = document.createElement('span');
          span.className = 'pptx-run';
          span.textContent = editablePText;
          const firstRun = p.runs?.[0] || {};
          const pxSize = +((firstRun.sz || 16) * (4 / 3)).toFixed(2);
          span.style.fontSize = `${pxSize}px`;
          if (firstRun.font) span.style.fontFamily = `'${firstRun.font}', 'Red Hat Text', sans-serif`;
          if (firstRun.b) span.style.fontWeight = '700';
          if (firstRun.i) span.style.fontStyle = 'italic';
          if (firstRun.u) span.style.textDecoration = 'underline';
          if (firstRun.color) span.style.color = firstRun.color;
          runContainer.appendChild(span);
        } else {
          // Paragraph unchanged: render exact original runs (with hlink support)
          for (const run of p.runs) {
            runContainer.appendChild(createRunNode(run));
          }
        }
      } else {
        for (const run of p.runs) {
          runContainer.appendChild(createRunNode(run));
        }
      }

      textWrap.appendChild(pEl);
    }

    div.appendChild(textWrap);
  }

  return div;
}

function renderSceneElement(el, slideIdx, elOrder, globalPCountRef, slide, slidePCountRef) {
  if (el.kind === 'prague-svg') {
    const wrapper = document.createElement('div');
    wrapper.className = 'pptx-el pptx-prague-svg-wrapper';
    wrapper.style.left = `${el.box.x}px`;
    wrapper.style.top = `${el.box.y}px`;
    wrapper.style.width = `${el.box.w}px`;
    wrapper.style.height = `${el.box.h}px`;
    wrapper.style.zIndex = '12';
    wrapper.appendChild(createPragueSvg());
    return wrapper;
  }
  if (el.kind === 'pic') {
    return renderPicElement(el, slideIdx, elOrder, slide);
  }
  if (el.kind === 'sp') {
    return renderSpElement(el, elOrder, globalPCountRef, slide, slidePCountRef);
  }
  return null;
}

/**
 * Slide 25: Clean map slot container with optional user image from editovatelne-texty.js.
 */
function createMapSlot(slideNumber = 25) {
  const container = document.createElement('div');
  container.className = 'pptx-el pptx-map-container';
  container.style.left = '240px';
  container.style.top = '50px';
  container.style.width = '660px';
  container.style.height = '440px';
  container.style.zIndex = '20';

  const mapOverride = EDITABLE_SLIDES[slideNumber]?.mapImage;

  if (mapOverride && typeof mapOverride === 'string' && mapOverride.trim().length > 0) {
    const img = document.createElement('img');
    img.src = mapOverride;
    img.alt = 'Herní mapa';
    img.className = 'pptx-map-img';
    container.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'pptx-map-placeholder-clean';
    placeholder.innerHTML = `
      <div class="map-badge-center">
        <div class="map-badge-icon">🗺️</div>
        <div class="map-badge-title">Místo připravené pro herní mapu</div>
        <div class="map-badge-sub">Pro vložení mapy zadejte <code>mapImage</code> do <code>src/data/editovatelne-texty.js</code> u snímku ${slideNumber}</div>
      </div>
    `;
    container.appendChild(placeholder);
  }

  return container;
}

/**
 * Builds the 1:1 PPTX Reveal.js DOM hierarchy from presentation-data.json.
 */
export function buildSlides(slidesContainer) {
  if (!slidesContainer) return;
  slidesContainer.innerHTML = '';

  updateStageScale();
  if (typeof window !== 'undefined' && !window.__pptxResizeBound) {
    window.__pptxResizeBound = true;
    window.addEventListener('resize', updateStageScale);
  }

  const slides = presentationData.slides || [];

  slides.forEach((slide, idx) => {
    const section = document.createElement('section');
    section.className = 'slide-section';
    section.setAttribute('data-slide-number', String(slide.slideNumber));

    const stageOuter = document.createElement('div');
    stageOuter.className = 'pptx-stage-outer';

    const stage = document.createElement('div');
    stage.className = 'pptx-stage';
    stage.style.width = `${STAGE_WIDTH}px`;
    stage.style.height = `${STAGE_HEIGHT}px`;

    // Dedicated Stage Background layer (behind all slide elements)
    const stageBg = document.createElement('div');
    stageBg.className = 'pptx-stage-bg';
    if (slide.bg?.type === 'image' && slide.bg?.src) {
      stageBg.style.background = `url("${slide.bg.src}") center / cover no-repeat`;
    } else {
      stageBg.style.background = fillToCss(slide.bg, true);
    }
    if (slide.bg?.breathe || slide.slideNumber === 2) {
      stageBg.classList.add('pptx-bg-breathe');
    }
    stage.appendChild(stageBg);

    // Dynamic ambient light sheen layer inside the slide
    const sheen = document.createElement('div');
    sheen.className = 'pptx-stage-sheen';
    stage.appendChild(sheen);

    let elOrder = 0;
    const globalPCountRef = { count: 0 };
    const slidePCountRef = { count: 0 };

    // 1. Render Slide Layout background elements (arches, border frames, decorative shapes)
    if (Array.isArray(slide.layoutElements)) {
      for (const el of slide.layoutElements) {
        const node = renderSceneElement(el, idx, elOrder++, globalPCountRef, slide, null);
        if (node) {
          node.classList.add('pptx-layout-el');
          stage.appendChild(node);
        }
      }
    }

    // 2. Render Slide Foreground elements
    if (Array.isArray(slide.elements)) {
      for (const el of slide.elements) {
        const node = renderSceneElement(el, idx, elOrder++, globalPCountRef, slide, slidePCountRef);
        if (node) {
          stage.appendChild(node);
          if (node.__extraOverlay) {
            stage.appendChild(node.__extraOverlay);
          }
        }
      }
    }

    // 3. Clean Map Slot on Slide 25
    if (slide.customLayout === 'map-placeholder' || slide.slideNumber === 25) {
      stage.appendChild(createMapSlot(slide.slideNumber));
    }

    stageOuter.appendChild(stage);
    section.appendChild(stageOuter);
    slidesContainer.appendChild(section);
  });
}
