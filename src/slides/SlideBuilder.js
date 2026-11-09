import presentationData from '../data/presentation-data.json';

const STAGE_WIDTH = presentationData.metadata?.stageWidth || 960;
const STAGE_HEIGHT = presentationData.metadata?.stageHeight || 540;

/**
 * Extracts a dynamic color palette for a given slide index so that both the
 * ambient viewport background (#app-root) and the Three.js 3D scene (rings,
 * wireframe beacons, particles, and glow) dynamically adapt to the active slide!
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
      // e.g. Slide 2 & Slide 11: center #FFFFFF to edge #2A4D14
      const outer = bg.stops[bg.stops.length - 1].color || '#2A4D14';
      primary = outer;
      secondary = '#5DA271';
      accent = '#11457E';
      glow = '#85AC7E';
    } else if (bg.type === 'solid' && bg.color) {
      primary = bg.color;
      if (bg.color.toUpperCase() === '#2A4D14') {
        // Dark forest green section slides (e.g. Slide 6 Hideři, Slide 14 Seekři)
        secondary = '#85AC7E';
        accent = '#D8973C';
        glow = '#5DA271';
      } else if (bg.color.toUpperCase() === '#85AC7E') {
        // Sage green content slides: pair with the layout arch color (#11457E or #D7141A)
        secondary = '#11457E';
        accent = '#D7141A';
        glow = '#5DA271';
      }
    }
  }

  // Check layout arch color if present
  if (Array.isArray(slide.layoutElements)) {
    for (const el of slide.layoutElements) {
      if (el.kind === 'sp' && el.fill && el.fill.type === 'solid' && el.fill.color) {
        secondary = el.fill.color;
        break;
      }
    }
  }

  // Rotate accent slightly across slides so adjacent slides still trigger a visible background shift
  const accentCycle = ['#D8973C', '#D7141A', '#11457E', '#5DA271'];
  if (bg?.type === 'solid' && bg.color?.toUpperCase() === '#85AC7E') {
    accent = accentCycle[slideIndex % accentCycle.length];
  }

  return { primary, secondary, accent, glow, slideIndex };
}

/**
 * Computes and applies uniform CSS scaling so the 960x540 (16:9) PPTX stage
 * fits any viewport (mobile 375x667 up to 4K 3840x2160) with zero overflow
 * while leaving a subtle margin for the 3D WebGL background around the frame.
 */
export function updateStageScale() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const vw = window.innerWidth || 1920;
  const vh = window.innerHeight || 1080;

  const marginFactorW = vw < 600 ? 0.96 : 0.92;
  const marginFactorH = vh < 600 ? 0.94 : 0.90;

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
      return `rgba(${r}, ${g}, ${b}, 0.90)`;
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

function renderPicElement(el, slideIdx, elOrder) {
  const { box, src, crop, extraPhoto } = el;
  const wrapper = document.createElement('div');
  wrapper.className = extraPhoto ? 'pptx-el pptx-pic pptx-extra-photo' : 'pptx-el pptx-pic';
  wrapper.style.left = `${box.x}px`;
  wrapper.style.top = `${box.y}px`;
  wrapper.style.width = `${box.w}px`;
  wrapper.style.height = `${box.h}px`;
  wrapper.style.setProperty('--el-order', String(elOrder));

  const tf = buildTransformCss(box);
  if (tf) wrapper.style.transform = tf;

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

function renderSpElement(el, elOrder, globalPCountRef) {
  const { box, prst, fill, stroke, custPaths, anchor, paragraphs, phKey } = el;
  const div = document.createElement('div');
  div.className = `pptx-el pptx-sp pptx-prst-${prst || 'rect'}`;
  div.style.setProperty('--el-order', String(elOrder));
  if (phKey) {
    div.setAttribute('data-ph', phKey);
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

  if (paragraphs && paragraphs.length > 0) {
    const textWrap = document.createElement('div');
    textWrap.className = `pptx-txbody pptx-anchor-${anchor || 't'}`;

    for (const p of paragraphs) {
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

      for (const run of p.runs) {
        if (run.br) {
          runContainer.appendChild(document.createElement('br'));
          continue;
        }
        const span = document.createElement('span');
        span.className = 'pptx-run';
        span.textContent = run.text;
        const pxSize = +((run.sz || 16) * (4 / 3)).toFixed(2);
        span.style.fontSize = `${pxSize}px`;
        if (run.font) {
          span.style.fontFamily = `'${run.font}', 'Red Hat Text', sans-serif`;
        }
        if (run.b) span.style.fontWeight = '700';
        if (run.i) span.style.fontStyle = 'italic';
        if (run.u) span.style.textDecoration = 'underline';
        if (run.color) span.style.color = run.color;
        runContainer.appendChild(span);
      }

      textWrap.appendChild(pEl);
    }

    div.appendChild(textWrap);
  }

  return div;
}

function renderSceneElement(el, slideIdx, elOrder, globalPCountRef) {
  if (el.kind === 'pic') {
    return renderPicElement(el, slideIdx, elOrder);
  }
  if (el.kind === 'sp') {
    return renderSpElement(el, elOrder, globalPCountRef);
  }
  return null;
}

/**
 * Builds the 1:1 PPTX Reveal.js DOM hierarchy from presentation-data.json.
 * - Zero fake "Snímek X" or "#12" badges
 * - Zero per-bullet fragment clicks (1 click = 1 slide, all text immediately visible)
 * - Automatic choreographed entrance & continuous 3D motion on slide elements
 * - Exact 960x540 (16:9) PPTX layout, typography, colors, and cropped images
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
    stage.style.background = fillToCss(slide.bg, true);

    // Dynamic ambient light sheen layer inside the slide that reacts to 3D tilt/transitions
    const sheen = document.createElement('div');
    sheen.className = 'pptx-stage-sheen';
    stage.appendChild(sheen);

    let elOrder = 0;
    const globalPCountRef = { count: 0 };

    // 1. Render Slide Layout background elements (arches, border frames, decorative shapes)
    if (Array.isArray(slide.layoutElements)) {
      for (const el of slide.layoutElements) {
        const node = renderSceneElement(el, idx, elOrder++, globalPCountRef);
        if (node) {
          node.classList.add('pptx-layout-el');
          stage.appendChild(node);
        }
      }
    }

    // 2. Render Slide Foreground elements (photos, titles, cards, custom vectors, slide numbers)
    if (Array.isArray(slide.elements)) {
      for (const el of slide.elements) {
        const node = renderSceneElement(el, idx, elOrder++, globalPCountRef);
        if (node) {
          stage.appendChild(node);
        }
      }
    }

    stageOuter.appendChild(stage);
    section.appendChild(stageOuter);
    slidesContainer.appendChild(section);
  });
}
