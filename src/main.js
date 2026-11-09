import 'reveal.js/dist/reveal.css';
import './styles/main.css';
import Reveal from 'reveal.js';
import { buildSlides } from './slides/SlideBuilder.js';
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
  window.__bg3d = bg3d;

  // 3. Configure Reveal.js based on Master vs Client mode
  const master = isMasterMode();
  const reveal = new Reveal(document.querySelector('.reveal'), {
    disableLayout: true,
    center: false,
    controls: master,
    progress: master,
    keyboard: master,
    touch: master,
    overview: master,
    hash: false,
    respondToHashChanges: false,
    history: false,
    fragments: true,
    autoAnimate: true,
    autoAnimateDuration: 0.35,
    transition: 'convex',
    transitionSpeed: 'fast',
    backgroundTransition: 'fade'
  });

  await reveal.initialize();
  window.__reveal = reveal;

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
        const f = (state.indexf ?? -1) >= 0 ? `/${state.indexf}` : '';
        slidePosEl.textContent = `${state.indexh}/${state.indexv}${f}`;
      }
      if (syncDotEl) {
        syncDotEl.classList.toggle('offline', !connected);
      }
    }
  });

  syncEngine.init();
  window.__syncEngine = syncEngine;

  // 5. Connect 3D background camera parallax to Reveal slide changes
  reveal.on('slidechanged', (event) => {
    bg3d.onSlideChange(event.indexh || 0, event.indexv || 0);
  });
}

bootstrap().catch((err) => {
  console.error('[Presentation] Bootstrap error:', err);
});
