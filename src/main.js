import 'reveal.js/dist/reveal.css';
import './styles/main.css';
import Reveal from 'reveal.js';
import presentationData from './data/presentation-data.json';
import { buildSlides, getSlideThemePalette, getSlideNotes, getSlideTitle } from './slides/SlideBuilder.js';
import { SyncEngine } from './sync/SyncEngine.js';
import { isMasterMode } from './sync/stateMachine.js';
import { Background3D } from './graphics/Background3D.js';

async function bootstrap() {
  const appRoot = document.getElementById('app-root');
  const slidesContainer = document.getElementById('slides-container');
  const masterHud = document.getElementById('master-hud');
  const viewerCountEl = document.getElementById('viewer-count');
  const slidePosEl = document.getElementById('master-slide-pos');
  const slideInputEl = document.getElementById('master-slide-input');
  const slideTotalEl = document.getElementById('master-slide-total');
  const syncDotEl = document.getElementById('sync-dot');

  const fsBtn = document.getElementById('fullscreen-btn');
  const notesPanel = document.getElementById('presenter-notes-panel');
  const notesToggleBtn = document.getElementById('notes-toggle-btn');
  const notesCloseBtn = document.getElementById('notes-close-btn');

  const totalSlides = presentationData.slides?.length || 50;
  if (slideTotalEl) {
    slideTotalEl.textContent = `/ ${totalSlides}`;
  }

  function updateSlidePosition(slideNum1Based) {
    if (slideInputEl && document.activeElement !== slideInputEl) {
      slideInputEl.value = String(slideNum1Based);
    }
    if (slidePosEl) {
      slidePosEl.textContent = `${slideNum1Based} / ${totalSlides}`;
    }
  }

  // Presenter direct slide jump input handling
  if (slideInputEl) {
    const handleJump = () => {
      let target = parseInt(slideInputEl.value, 10);
      if (Number.isNaN(target) || target < 1) target = 1;
      if (target > totalSlides) target = totalSlides;
      slideInputEl.value = String(target);
      slideInputEl.blur();
      reveal.slide(target - 1);
    };

    slideInputEl.addEventListener('keydown', (e) => {
      e.stopPropagation(); // Avoid triggering Reveal keyboard handlers while typing numbers
      if (e.key === 'Enter') {
        e.preventDefault();
        handleJump();
      }
    });

    slideInputEl.addEventListener('change', () => {
      handleJump();
    });

    slideInputEl.addEventListener('focus', () => {
      slideInputEl.select();
    });
  }

  // 1. Build DOM slides from PPTX JSON & normalized Lucie Brabencová assets
  buildSlides(slidesContainer);

  // 2. Initialize 60 FPS WebGL 3D background (with perimeter photos and automatic fallback)
  const bg3d = new Background3D(appRoot);
  bg3d.init();
  bg3d.onSlideChange(0, 0, getSlideThemePalette(0));
  window.__bg3d = bg3d;

  // 3. Configure Reveal.js based on Master vs Client mode
  const initialMaster = isMasterMode();
  if (appRoot) {
    appRoot.classList.toggle('is-master', Boolean(initialMaster));
  }

  const reveal = new Reveal(document.querySelector('.reveal'), {
    disableLayout: true,
    center: false,
    controls: initialMaster,
    controlsTutorial: false,
    progress: initialMaster,
    keyboard: initialMaster,
    touch: initialMaster,
    overview: initialMaster,
    hash: false,
    respondToHashChanges: false,
    history: false,
    fragments: true, // Enabled for interactive step-animations (cards, maps, popups, zoombadges)
    autoAnimate: false,
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade'
  });

  await reveal.initialize();
  window.__reveal = reveal;

  // Sync initial slide theme palette in case Reveal restored or jumped to another slide
  const initialIndices = reveal.getIndices ? reveal.getIndices() : { h: 0, v: 0 };
  bg3d.onSlideChange(
    initialIndices.h || 0,
    initialIndices.v || 0,
    getSlideThemePalette(initialIndices.h || 0)
  );

  // 4. Presenter Notes Helper
  function updateNotes(slideIndex = 0) {
    if (!notesPanel) return;
    const titleEl = document.getElementById('notes-slide-title');
    const contentEl = document.getElementById('notes-content');
    if (titleEl) {
      titleEl.textContent = `${slideIndex + 1}. ${getSlideTitle(slideIndex)}`;
    }
    if (contentEl) {
      const notes = getSlideNotes(slideIndex);
      if (notes && notes.trim()) {
        contentEl.innerHTML = notes
          .split('\n\n')
          .map((p) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
          .join('');
      } else {
        contentEl.innerHTML = '<p class="notes-empty">K tomuto snímku zatím nejsou žádné poznámky přednášejícího.</p>';
      }
    }
  }

  if (notesToggleBtn && notesPanel) {
    notesToggleBtn.addEventListener('click', () => {
      const isHidden = notesPanel.classList.toggle('hidden');
      if (!isHidden) {
        const idx = reveal.getIndices ? reveal.getIndices().h : 0;
        updateNotes(idx);
      }
    });
  }

  if (notesCloseBtn && notesPanel) {
    notesCloseBtn.addEventListener('click', () => {
      notesPanel.classList.add('hidden');
    });
  }

  // 5. Fullscreen Button Wiring (available for both viewers and presenter, with iOS/WebKit fallback)
  if (fsBtn) {
    fsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const doc = document;
      const el = document.documentElement;
      const isFs = Boolean(doc.fullscreenElement || doc.webkitFullscreenElement);
      if (!isFs) {
        if (el.requestFullscreen) {
          el.requestFullscreen().catch(() => {});
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        }
      } else {
        if (doc.exitFullscreen) {
          doc.exitFullscreen().catch(() => {});
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        }
      }
    });

    const updateFsIcon = () => {
      const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
      fsBtn.querySelector('.fs-icon-enter')?.classList.toggle('hidden', isFs);
      fsBtn.querySelector('.fs-icon-exit')?.classList.toggle('hidden', !isFs);
      fsBtn.setAttribute('title', isFs ? 'Ukončit celou obrazovku' : 'Celá obrazovka (Fullscreen)');
    };

    document.addEventListener('fullscreenchange', updateFsIcon);
    document.addEventListener('webkitfullscreenchange', updateFsIcon);
  }

  // 6. Initialize Master-Client Synchronization Engine
  const url = new URL(window.location.href);
  const roomId = url.searchParams.get('room') || 'jet-cesko';

  const syncEngine = new SyncEngine({
    reveal,
    roomId,
    onStatusChange: ({ isMaster, connected, viewersCount, state }) => {
      if (appRoot) {
        appRoot.classList.toggle('is-master', Boolean(isMaster));
      }
      if (masterHud) {
        if (isMaster) {
          masterHud.classList.remove('hidden');
        } else {
          masterHud.classList.add('hidden');
          if (notesPanel) notesPanel.classList.add('hidden');
        }
      }
      if (viewerCountEl) {
        viewerCountEl.textContent = String(viewersCount ?? 0);
      }
      if (state) {
        updateSlidePosition((state.indexh ?? 0) + 1);
      }
      if (syncDotEl) {
        syncDotEl.classList.toggle('offline', !connected);
      }
    }
  });

  syncEngine.init();
  window.__syncEngine = syncEngine;

  // 7. Connect 3D background camera parallax & dynamic slide palette to Reveal slide changes
  reveal.on('slidechanged', (event) => {
    const idxH = event.indexh || 0;
    const idxV = event.indexv || 0;
    bg3d.onSlideChange(idxH, idxV, getSlideThemePalette(idxH));
    updateSlidePosition(idxH + 1);
    if (notesPanel && !notesPanel.classList.contains('hidden')) {
      updateNotes(idxH);
    }
  });
}

bootstrap().catch((err) => {
  console.error('[Presentation] Bootstrap error:', err);
});
