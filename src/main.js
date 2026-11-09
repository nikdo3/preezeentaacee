import 'reveal.js/dist/reveal.css';
import './styles/main.css';
import Reveal from 'reveal.js';
import { buildSlides, getSlideThemePalette } from './slides/SlideBuilder.js';
import { SyncEngine } from './sync/SyncEngine.js';
import { isMasterMode } from './sync/stateMachine.js';
import { Background3D } from './graphics/Background3D.js';

async function bootstrap() {
  const appRoot = document.getElementById('app-root');
  const slidesContainer = document.getElementById('slides-container');
  const masterHud = document.getElementById('master-hud');
  const viewerCountEl = document.getElementById('viewer-count');
  const slidePosEl = document.getElementById('master-slide-pos');
  const syncDotEl = document.getElementById('sync-dot');

  // 1. Build DOM slides from PPTX JSON & normalized Lucie Brabencová assets
  buildSlides(slidesContainer);

  // 2. Initialize 60 FPS WebGL 3D background (with automatic fallback)
  const bg3d = new Background3D(appRoot);
  bg3d.init();
  bg3d.onSlideChange(0, 0, getSlideThemePalette(0));
  window.__bg3d = bg3d;

  // 3. Configure Reveal.js based on Master vs Client mode
  const master = isMasterMode();
  const reveal = new Reveal(document.querySelector('.reveal'), {
    disableLayout: true,
    center: false,
    controls: master,
    controlsTutorial: false,
    progress: master,
    keyboard: master,
    touch: master,
    overview: master,
    hash: false,
    respondToHashChanges: false,
    history: false,
    fragments: false,
    autoAnimate: false,
    transition: 'slide',
    transitionSpeed: 'fast',
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

  // 4. Initialize Master-Client Synchronization Engine
  const url = new URL(window.location.href);
  const roomId = url.searchParams.get('room') || 'jet-cesko';

  const syncEngine = new SyncEngine({
    reveal,
    roomId,
    onStatusChange: ({ isMaster, connected, viewersCount, state }) => {
      if (masterHud) {
        if (isMaster) {
          masterHud.classList.remove('hidden');
        } else {
          masterHud.classList.add('hidden');
        }
      }
      if (viewerCountEl) {
        viewerCountEl.textContent = String(viewersCount ?? 0);
      }
      if (slidePosEl && state) {
        slidePosEl.textContent = `${(state.indexh ?? 0) + 1} / 51`;
      }
      if (syncDotEl) {
        syncDotEl.classList.toggle('offline', !connected);
      }
    }
  });

  syncEngine.init();
  window.__syncEngine = syncEngine;

  // 5. Connect 3D background camera parallax & dynamic slide palette to Reveal slide changes
  reveal.on('slidechanged', (event) => {
    const idxH = event.indexh || 0;
    const idxV = event.indexv || 0;
    bg3d.onSlideChange(idxH, idxV, getSlideThemePalette(idxH));
  });
}

bootstrap().catch((err) => {
  console.error('[Presentation] Bootstrap error:', err);
});
