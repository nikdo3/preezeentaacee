import {
  computeStateHash,
  validateState,
  createStatePayload,
  createInitialState,
  isStateNewer,
  isStateEqual,
  resolveStateConflict,
  isMasterMode,
  saveMasterStateToStorage,
  loadMasterStateFromStorage,
  parseStateFromUrl,
  isNavigationKeyEvent,
  isMasterShortcut
} from './stateMachine.js';

export class SyncEngine {
  /**
   * @param {object} [revealOrOptions] - Reveal.js instance or options object
   * @param {object} [maybeOptions] - Options object if Reveal passed as first argument
   */
  constructor(revealOrOptions = {}, maybeOptions = {}) {
    let reveal = null;
    let options = {};
    if (revealOrOptions && (typeof revealOrOptions.configure === 'function' || typeof revealOrOptions.on === 'function')) {
      reveal = revealOrOptions;
      options = maybeOptions || {};
    } else if (typeof revealOrOptions === 'object') {
      options = revealOrOptions || {};
      reveal = options.reveal || null;
    }

    this.reveal = reveal;
    this.roomId = options.roomId || options.room || 'jet-cesko';
    this.onStatusChange = options.onStatusChange || null;

    this.isMaster = options.isMaster !== undefined ? Boolean(options.isMaster) : isMasterMode();
    this.masterId = options.masterId || this._getOrCreateMasterId();
    this.seq = 0;
    this.viewersCount = 0;
    this.connected = false;
    this.isOnline = typeof navigator !== 'undefined' ? (navigator.onLine ?? true) : true;
    this.isApplyingRemoteState = false;
    this.destroyed = false;

    this.authoritativeState = null;
    this.ws = null;
    this.bc = null;
    this.peer = null;
    this.peerConnections = new Set();
    this.badgeElement = null;
    this.badgeTextElement = null;

    this._reconnectTimer = null;
    this._heartbeatTimer = null;
    this._pollTimer = null;

    this._boundKeyDown = this._handleKeyDown.bind(this);
    this._boundTouchStart = this._handleTouchEvent.bind(this);
    this._boundTouchMove = this._handleTouchEvent.bind(this);
    this._boundTouchEnd = this._handleTouchEvent.bind(this);
    this._boundWheel = this._handleWheelEvent.bind(this);
    this._boundHashChange = this._handleHashChange.bind(this);
    this._boundOnline = this._handleOnline.bind(this);
    this._boundOffline = this._handleOffline.bind(this);
    this._boundSlideChanged = this._handleRevealChange.bind(this);
    this._boundFragmentChanged = this._handleRevealChange.bind(this);
  }

  _getOrCreateMasterId() {
    try {
      const existing = sessionStorage.getItem('reveal_master_id');
      if (existing) return existing;
      const id = 'm_' + Math.random().toString(36).slice(2, 10);
      sessionStorage.setItem('reveal_master_id', id);
      return id;
    } catch {
      return 'm_default';
    }
  }

  init() {
    if (this.isMaster) {
      this._initMasterState();
    } else {
      this._initClientLock();
    }

    this._setupRevealListeners();
    this._setupNetworkListeners();
    this._setupBroadcastChannel();
    this._connectWebSocket();
    this._startPollingFallback();
    this._initPeerJSIfNeeded();
    this._startHeartbeat();
    this._emitStatus();
  }

  /**
   * Restores Master state from sessionStorage or URL before broadcasting,
   * ensuring F5 / page.reload() never resets clients to slide 0.
   */
  _initMasterState() {
    const storedState = loadMasterStateFromStorage();
    const urlState = parseStateFromUrl();

    let targetH = 0;
    let targetV = 0;
    let targetF = -1;
    let initialSeq = 1;

    if (storedState && validateState(storedState)) {
      targetH = storedState.indexh;
      targetV = storedState.indexv;
      targetF = storedState.indexf ?? -1;
      initialSeq = storedState.seq || 0;
      this.masterId = storedState.masterId || this.masterId;
    } else if (urlState) {
      targetH = urlState.indexh;
      targetV = urlState.indexv;
      targetF = urlState.indexf ?? -1;
    } else if (this.reveal) {
      const indices = this.reveal.getIndices();
      targetH = indices?.h ?? 0;
      targetV = indices?.v ?? 0;
      targetF = indices?.f ?? -1;
    }

    this.seq = initialSeq;
    this.authoritativeState = createStatePayload({
      indexh: targetH,
      indexv: targetV,
      indexf: targetF,
      timestamp: Date.now(),
      masterId: this.masterId,
      seq: this.seq
    });

    if (this.reveal) {
      this.reveal.configure({
        keyboard: true,
        touch: true,
        controls: true,
        progress: true,
        overview: true,
        hash: false,
        respondToHashChanges: false
      });
    }

    this._createMasterBadge();
    saveMasterStateToStorage(this.authoritativeState);
    this._applyStateToReveal(this.authoritativeState, true);
    this._updateUrlSilently(this.authoritativeState);
  }

  /**
   * Locks Client navigation completely: blocks keyboard, touch, wheel, and URL hash tampering.
   */
  _initClientLock() {
    if (this.reveal) {
      this.reveal.configure({
        keyboard: false,
        touch: false,
        controls: false,
        progress: false,
        overview: false,
        hash: false,
        respondToHashChanges: false
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this._boundKeyDown, { capture: true });
      window.addEventListener('keyup', this._boundKeyDown, { capture: true });
      window.addEventListener('keypress', this._boundKeyDown, { capture: true });
      window.addEventListener('touchstart', this._boundTouchStart, { capture: true, passive: false });
      window.addEventListener('touchmove', this._boundTouchMove, { capture: true, passive: false });
      window.addEventListener('touchend', this._boundTouchEnd, { capture: true, passive: false });
      window.addEventListener('wheel', this._boundWheel, { capture: true, passive: false });
      window.addEventListener('hashchange', this._boundHashChange, { capture: true });
      window.addEventListener('popstate', this._boundHashChange, { capture: true });
    }
  }

  _removeClientLockListeners() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this._boundKeyDown, { capture: true });
      window.removeEventListener('keyup', this._boundKeyDown, { capture: true });
      window.removeEventListener('keypress', this._boundKeyDown, { capture: true });
      window.removeEventListener('touchstart', this._boundTouchStart, { capture: true });
      window.removeEventListener('touchmove', this._boundTouchMove, { capture: true });
      window.removeEventListener('touchend', this._boundTouchEnd, { capture: true });
      window.removeEventListener('wheel', this._boundWheel, { capture: true });
      window.removeEventListener('hashchange', this._boundHashChange, { capture: true });
      window.removeEventListener('popstate', this._boundHashChange, { capture: true });
    }
  }

  _handleKeyDown(e) {
    if (isMasterShortcut(e)) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === 'keydown') {
        this.enableMasterMode();
      }
      return;
    }

    if (!this.isMaster && isNavigationKeyEvent(e)) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (this.authoritativeState) {
        this._applyStateToReveal(this.authoritativeState, true);
      }
    }
  }

  _handleTouchEvent(e) {
    if (this.isMaster) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (this.authoritativeState) {
      this._applyStateToReveal(this.authoritativeState, true);
    }
  }

  _handleWheelEvent(e) {
    if (this.isMaster) return;
    e.preventDefault();
    e.stopPropagation();
  }

  _handleHashChange(e) {
    if (this.isMaster) return;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    // Revert any manual URL hash manipulation back to Master's authoritative slide
    const target = this.authoritativeState || createInitialState();
    this._applyStateToReveal(target, true);
    this._updateUrlSilently(target);
  }

  enableMasterMode() {
    if (this.isMaster) return;
    this.isMaster = true;
    this._removeClientLockListeners();

    if (this.reveal) {
      this.reveal.configure({
        keyboard: true,
        touch: true,
        controls: true,
        progress: true,
        overview: true,
        hash: false,
        respondToHashChanges: false
      });
    }

    const url = new URL(window.location.href);
    url.searchParams.set('master', '1');
    window.history.replaceState(null, '', url.toString());

    const indices = this.reveal ? this.reveal.getIndices() : { h: 0, v: 0, f: -1 };
    this.seq += 1;
    this.authoritativeState = createStatePayload({
      indexh: indices.h ?? 0,
      indexv: indices.v ?? 0,
      indexf: indices.f ?? -1,
      timestamp: Date.now(),
      masterId: this.masterId,
      seq: this.seq
    });
    saveMasterStateToStorage(this.authoritativeState);
    this.broadcastState(this.authoritativeState);
    this._emitStatus();
  }

  _setupRevealListeners() {
    if (!this.reveal) return;
    this.reveal.on('slidechanged', this._boundSlideChanged);
    this.reveal.on('fragmentshown', this._boundFragmentChanged);
    this.reveal.on('fragmenthidden', this._boundFragmentChanged);
  }

  _handleRevealChange() {
    if (this.isApplyingRemoteState) return;

    if (!this.isMaster) {
      // Unauthorized local movement on Client -> snap back to Master state immediately
      if (this.authoritativeState) {
        this._applyStateToReveal(this.authoritativeState, true);
      }
      return;
    }

    const indices = this.reveal.getIndices();
    const indexh = indices?.h ?? 0;
    const indexv = indices?.v ?? 0;
    const indexf = (indices?.f === undefined || indices?.f === null) ? -1 : indices.f;

    this.seq += 1;
    const nextState = createStatePayload({
      indexh,
      indexv,
      indexf,
      timestamp: Date.now(),
      masterId: this.masterId,
      seq: this.seq
    });

    this.authoritativeState = nextState;
    saveMasterStateToStorage(nextState);
    this._updateUrlSilently(nextState);
    this.broadcastState(nextState);
    this._emitStatus();
  }

  _updateUrlSilently(state) {
    if (!state || typeof window === 'undefined') return;
    try {
      const url = new URL(window.location.href);
      const fPart = state.indexf >= 0 ? `/${state.indexf}` : '';
      const desiredHash = `#/${state.indexh}/${state.indexv}${fPart}`;
      if (url.hash !== desiredHash) {
        url.hash = desiredHash;
        window.history.replaceState(null, '', url.toString());
      }
    } catch {}
  }

  _applyStateToReveal(state, force = false) {
    if (!this.reveal || !validateState(state)) return;

    const indices = this.reveal.getIndices();
    const curH = indices?.h ?? 0;
    const curV = indices?.v ?? 0;
    const curF = (indices?.f === undefined || indices?.f === null) ? -1 : indices.f;

    const targetH = state.indexh;
    const targetV = state.indexv;
    const targetF = state.indexf ?? -1;

    if (!force && curH === targetH && curV === targetV && curF === targetF) {
      return;
    }

    this.isApplyingRemoteState = true;
    try {
      this.reveal.slide(targetH, targetV, targetF);
    } finally {
      this.isApplyingRemoteState = false;
    }
  }

  _handleIncomingState(incomingState, clientsCount) {
    if (typeof clientsCount === 'number') {
      this.viewersCount = clientsCount;
    }

    if (!validateState(incomingState)) {
      this._emitStatus();
      return;
    }

    if (this.isMaster) {
      // Master only accepts incoming state if it has no state yet or if it's from the same master with higher seq
      if (incomingState.masterId === this.masterId && isStateNewer(incomingState, this.authoritativeState)) {
        this.authoritativeState = incomingState;
        this.seq = Math.max(this.seq, incomingState.seq || 0);
        saveMasterStateToStorage(incomingState);
        this._applyStateToReveal(incomingState, true);
      }
      this._emitStatus();
      return;
    }

    // Client mode: always align to authoritative Master state
    const shouldApply =
      !this.authoritativeState ||
      isStateNewer(incomingState, this.authoritativeState) ||
      !isStateEqual(incomingState, this.authoritativeState);

    this.authoritativeState = incomingState;
    if (shouldApply) {
      this._applyStateToReveal(incomingState, true);
      this._updateUrlSilently(incomingState);
    } else {
      // Ensure Reveal DOM indices match authoritativeState even if equal
      this._applyStateToReveal(incomingState, false);
    }
    this._emitStatus();
  }

  broadcastState(state = this.authoritativeState) {
    if (!this.isMaster || !validateState(state)) return;

    const msg = {
      type: 'state',
      payload: state
    };
    const serialized = JSON.stringify(msg);

    // 1. WebSocket relay
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(serialized);
      } catch {}
    }

    // 2. HTTP relay POST (ensures relay state is always updated even if WS is reconnecting)
    this._postStateHttp(state);

    // 3. BroadcastChannel (same-browser tabs)
    if (this.bc) {
      try {
        this.bc.postMessage(msg);
      } catch {}
    }

    // 4. WebRTC PeerJS connections
    for (const conn of this.peerConnections) {
      try {
        if (conn.open) conn.send(msg);
      } catch {}
    }
  }

  _setupBroadcastChannel() {
    if (typeof BroadcastChannel === 'undefined') return;
    try {
      this.bc = new BroadcastChannel(`reveal_sync_${this.roomId}`);
      this.bc.onmessage = (ev) => {
        // Ignore BroadcastChannel when offline so Playwright context.setOffline(true) is respected
        if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
        const data = ev.data;
        if (!data) return;
        if (data.type === 'state' && data.payload) {
          this._handleIncomingState(data.payload);
        } else if (data.type === 'sync_request' && this.isMaster && this.authoritativeState) {
          this.bc.postMessage({ type: 'state', payload: this.authoritativeState });
        }
      };
      if (!this.isMaster) {
        this.bc.postMessage({ type: 'sync_request' });
      }
    } catch {}
  }

  _connectWebSocket() {
    if (this.destroyed || typeof WebSocket === 'undefined' || typeof window === 'undefined') return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;

    try {
      if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
        return;
      }

      const proto = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const role = this.isMaster ? 'master' : 'client';
      const wsUrl = `${proto}//${window.location.host}/__sync_ws?room=${encodeURIComponent(this.roomId)}&role=${role}`;

      const ws = new WebSocket(wsUrl);
      this.ws = ws;

      ws.onopen = () => {
        this.connected = true;
        if (this.isMaster && this.authoritativeState) {
          ws.send(JSON.stringify({ type: 'state', payload: this.authoritativeState }));
        } else {
          ws.send(JSON.stringify({ type: 'sync_request' }));
        }
        this._emitStatus();
      };

      ws.onmessage = (event) => {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'state' && data.payload) {
            this._handleIncomingState(data.payload, data.clientsCount);
          } else if (data.type === 'viewers_count') {
            this.viewersCount = data.count ?? 0;
            this._emitStatus();
          } else if (data.type === 'heartbeat_ack') {
            if (typeof data.clientsCount === 'number') {
              this.viewersCount = data.clientsCount;
              this._emitStatus();
            }
          }
        } catch {}
      };

      ws.onclose = () => {
        if (this.ws === ws) {
          this.connected = false;
          this._emitStatus();
          this._scheduleReconnect();
        }
      };

      ws.onerror = () => {
        try {
          ws.close();
        } catch {}
      };
    } catch {
      this._scheduleReconnect();
    }
  }

  _scheduleReconnect() {
    if (this.destroyed) return;
    clearTimeout(this._reconnectTimer);
    this._reconnectTimer = setTimeout(() => {
      this._connectWebSocket();
    }, 120);
  }

  async _postStateHttp(state) {
    if (typeof fetch === 'undefined' || !state) return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
    try {
      const res = await fetch(`/__sync_poll?room=${encodeURIComponent(this.roomId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'state', payload: state })
      });
      if (res.ok) {
        const data = await res.json();
        if (typeof data.clientsCount === 'number') {
          this.viewersCount = data.clientsCount;
          this._emitStatus();
        }
      }
    } catch {}
  }

  async _pollStateHttp() {
    if (this.destroyed || typeof fetch === 'undefined') return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
    try {
      const res = await fetch(`/__sync_poll?room=${encodeURIComponent(this.roomId)}`, {
        method: 'GET',
        cache: 'no-store'
      });
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.state) {
        this._handleIncomingState(data.state, data.clientsCount);
      } else if (data && typeof data.clientsCount === 'number') {
        this.viewersCount = data.clientsCount;
        this._emitStatus();
      }
    } catch {}
  }

  _startPollingFallback() {
    // Immediate hydration request + fast 120ms poll for instant recovery after context.setOffline(false)
    this._pollStateHttp();
    this._pollTimer = setInterval(() => {
      if (this.isMaster) {
        if (!this.connected && this.authoritativeState) {
          this._postStateHttp(this.authoritativeState);
        }
      } else {
        this._pollStateHttp();
      }
    }, 120);
  }

  _setupNetworkListeners() {
    if (typeof window === 'undefined') return;
    window.addEventListener('online', this._boundOnline);
    window.addEventListener('offline', this._boundOffline);
  }

  _handleOnline() {
    this.isOnline = true;
    this._connectWebSocket();
    if (this.isMaster && this.authoritativeState) {
      this.broadcastState(this.authoritativeState);
    } else {
      this.requestSync();
    }
  }

  _handleOffline() {
    this.isOnline = false;
    this.connected = false;
    if (this.ws) {
      try {
        this.ws.close();
      } catch {}
      this.ws = null;
    }
    this._emitStatus();
  }

  /**
   * Initializes PeerJS WebRTC DataChannel transport when hosted on static GitHub Pages
   * or when ?peer=1 is provided in URL.
   */
  async _initPeerJSIfNeeded() {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const isGitHubPages = window.location.hostname.endsWith('github.io');
    const forcePeer = url.searchParams.get('peer') === '1';
    if (!isGitHubPages && !forcePeer) return;

    try {
      const { Peer } = await import('peerjs');
      const masterPeerId = `preezeentaacee-${this.roomId}-master`;

      if (this.isMaster) {
        const peer = new Peer(masterPeerId);
        this.peer = peer;
        peer.on('open', () => {
          this.connected = true;
          this._emitStatus();
        });
        peer.on('connection', (conn) => {
          this.peerConnections.add(conn);
          conn.on('open', () => {
            this.viewersCount = this.peerConnections.size;
            if (this.authoritativeState) {
              conn.send({ type: 'state', payload: this.authoritativeState });
            }
            this._emitStatus();
          });
          conn.on('data', (data) => {
            if (data && data.type === 'sync_request' && this.authoritativeState) {
              conn.send({ type: 'state', payload: this.authoritativeState });
            }
          });
          conn.on('close', () => {
            this.peerConnections.delete(conn);
            this.viewersCount = this.peerConnections.size;
            this._emitStatus();
          });
        });
      } else {
        const peer = new Peer();
        this.peer = peer;
        peer.on('open', () => {
          const conn = peer.connect(masterPeerId, { reliable: true });
          conn.on('open', () => {
            this.connected = true;
            conn.send({ type: 'sync_request' });
            this._emitStatus();
          });
          conn.on('data', (data) => {
            if (data && data.type === 'state' && data.payload) {
              this._handleIncomingState(data.payload);
            }
          });
        });
      }
    } catch {}
  }

  _startHeartbeat() {
    this._heartbeatTimer = setInterval(() => {
      if (this.destroyed) return;
      if (this.isMaster && this.authoritativeState) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          try {
            this.ws.send(JSON.stringify({ type: 'heartbeat' }));
          } catch {}
        }
      }
    }, 1000);
  }

  getState() {
    return this.authoritativeState;
  }

  applyMasterState(incomingState, force = false) {
    if (!validateState(incomingState)) return false;
    if (this.isMaster && !force) return false;

    const winning = resolveStateConflict(this.authoritativeState, incomingState, this.isMaster);
    if (!force && winning !== incomingState) {
      return false;
    }

    this._handleIncomingState(incomingState);
    return true;
  }

  requestSync() {
    this._pollStateHttp();
    if (this.bc) {
      try { this.bc.postMessage({ type: 'sync_request' }); } catch {}
    }
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try { this.ws.send(JSON.stringify({ type: 'sync_request' })); } catch {}
    }
  }

  _createMasterBadge() {
    if (typeof document === 'undefined') return;
    if (!this.isMaster) return;

    let existingBadge = document.getElementById('master-status-badge');
    if (existingBadge) {
      this.badgeElement = existingBadge;
      this.badgeTextElement = document.getElementById('master-status-badge-text');
      return;
    }

    const badge = document.createElement('div');
    badge.id = 'master-status-badge';
    badge.setAttribute('role', 'status');
    badge.setAttribute('aria-live', 'polite');
    badge.style.cssText = [
      'position: fixed',
      'top: 14px',
      'right: 18px',
      'z-index: 9999',
      'display: inline-flex',
      'align-items: center',
      'gap: 8px',
      'padding: 6px 14px',
      'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      'font-size: 12px',
      'font-weight: 500',
      'letter-spacing: 0.02em',
      'color: #e2e8f0',
      'background: rgba(15, 23, 42, 0.85)',
      'backdrop-filter: blur(8px)',
      '-webkit-backdrop-filter: blur(8px)',
      'border: 1px solid rgba(255, 255, 255, 0.12)',
      'border-radius: 9999px',
      'box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3)',
      'pointer-events: none',
      'user-select: none',
      'transition: opacity 0.25s ease'
    ].join('; ');

    const dot = document.createElement('span');
    dot.style.cssText = [
      'display: inline-block',
      'width: 8px',
      'height: 8px',
      'border-radius: 50%',
      'background: #10b981',
      'box-shadow: 0 0 8px #10b981'
    ].join('; ');

    const text = document.createElement('span');
    text.id = 'master-status-badge-text';
    text.textContent = 'Master (0 viewers)';

    badge.appendChild(dot);
    badge.appendChild(text);
    if (document.body && typeof document.body.appendChild === 'function') {
      document.body.appendChild(badge);
    }

    this.badgeElement = badge;
    this.badgeTextElement = text;
  }

  _updateViewerBadge(count) {
    if (this.badgeTextElement) {
      const viewerLabel = count === 1 ? '1 viewer' : `${count} viewers`;
      this.badgeTextElement.textContent = `Master (${viewerLabel})`;
    }
  }

  _emitStatus() {
    this._updateViewerBadge(this.viewersCount);
    if (typeof this.onStatusChange === 'function') {
      this.onStatusChange({
        isMaster: this.isMaster,
        connected: this.connected,
        viewersCount: this.viewersCount,
        state: this.authoritativeState
      });
    }
  }

  destroy() {
    this.destroyed = true;
    clearTimeout(this._reconnectTimer);
    clearInterval(this._heartbeatTimer);
    clearInterval(this._pollTimer);
    this._removeClientLockListeners();
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this._boundOnline);
      window.removeEventListener('offline', this._boundOffline);
    }
    if (this.badgeElement && this.badgeElement.parentNode) {
      this.badgeElement.parentNode.removeChild(this.badgeElement);
    }
    if (this.ws) {
      try {
        this.ws.close();
      } catch {}
    }
    if (this.bc) {
      try {
        this.bc.close();
      } catch {}
    }
    if (this.peer) {
      try {
        this.peer.destroy();
      } catch {}
    }
  }
}
