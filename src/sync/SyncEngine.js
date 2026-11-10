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
import { MqttSyncTransport } from './mqttTransport.js';

export class SyncEngine {
  /**
   * @param {object} [revealOrOptions] - Reveal.js instance or options object
   * @param {object} [maybeOptions] - Options object if Reveal passed as first argument
   */
  constructor(revealOrOptions = {}, maybeOptions = {}) {
    let reveal = null;
    let options = {};
    if (
      revealOrOptions &&
      (typeof revealOrOptions.configure === 'function' || typeof revealOrOptions.on === 'function')
    ) {
      reveal = revealOrOptions;
      options = maybeOptions || {};
    } else if (maybeOptions && typeof maybeOptions === 'object' && Object.keys(maybeOptions).length > 0) {
      reveal = revealOrOptions && typeof revealOrOptions.configure === 'function' ? revealOrOptions : null;
      options = maybeOptions;
    } else if (typeof revealOrOptions === 'object') {
      options = revealOrOptions || {};
      reveal = options.reveal || null;
    }

    this.reveal = reveal;
    this.roomId = options.roomId || options.room || 'jet-cesko';
    this.onStatusChange = options.onStatusChange || null;

    this.isMaster = options.isMaster !== undefined ? Boolean(options.isMaster) : isMasterMode();
    this.masterId = options.masterId || this._getOrCreateMasterId();
    this.clientId = options.clientId || this._getOrCreateClientId();
    this.seq = 0;
    this.viewersCount = 0;
    this.connected = false;
    this.isOnline = typeof navigator !== 'undefined' ? (navigator.onLine ?? true) : true;
    this.isApplyingRemoteState = false;
    this.hasUserNavigated = false;
    this.hasRestoredState = false;
    this.destroyed = false;

    this.authoritativeState = null;
    this.ws = null;
    this.bc = null;
    this.mqtt = null;
    this.peer = null;
    this.peerConnections = new Map();
    this.mqttViewers = new Map();
    this.badgeElement = null;
    this.badgeTextElement = null;

    this._reconnectTimer = null;
    this._heartbeatTimer = null;
    this._pollTimer = null;
    this._peerRetryTimer = null;
    this._lastSyncRequestTime = 0;

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
    this._boundPageHide = this._handlePageHide.bind(this);
  }

  _getOrCreateMasterId() {
    try {
      if (typeof sessionStorage !== 'undefined') {
        const existing = sessionStorage.getItem('reveal_master_id');
        if (existing) return existing;
        const id = 'm_' + Math.random().toString(36).slice(2, 10);
        sessionStorage.setItem('reveal_master_id', id);
        return id;
      }
    } catch {}
    return 'm_default';
  }

  _getOrCreateClientId() {
    try {
      if (typeof sessionStorage !== 'undefined') {
        const existing = sessionStorage.getItem('reveal_client_id');
        if (existing) return existing;
        const id = 'c_' + Math.random().toString(36).slice(2, 10);
        sessionStorage.setItem('reveal_client_id', id);
        return id;
      }
    } catch {}
    return 'c_' + Math.random().toString(36).slice(2, 10);
  }

  _handlePageHide() {
    if (!this.isMaster) {
      if (this.mqtt) {
        try {
          this.mqtt.publish('ctrl', { type: 'client_leave', clientId: this.clientId, role: 'client' }, false);
        } catch {}
      }
      if (this.ws) {
        try {
          this.ws.close();
        } catch {}
      }
    }
  }

  _isStaticHost() {
    if (typeof window === 'undefined') return false;
    const h = window.location.hostname;
    return h !== 'localhost' && h !== '127.0.0.1' && !h.startsWith('192.168.');
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
    this._initMqttTransport();
    this._initPeerJSIfNeeded();

    if (!this._isStaticHost()) {
      this._connectWebSocket();
      this._startPollingFallback();
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', this._boundPageHide);
      window.addEventListener('beforeunload', this._boundPageHide);
    }

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
      initialSeq = storedState.seq || 1;
      this.masterId = storedState.masterId || this.masterId;
      this.hasRestoredState = true;
    } else if (urlState) {
      targetH = urlState.indexh;
      targetV = urlState.indexv;
      targetF = urlState.indexf ?? -1;
      this.hasRestoredState = true;
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
        respondToHashChanges: false,
        mouseWheel: false
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
    const target = this.authoritativeState || createInitialState();
    this._applyStateToReveal(target, true);
    this._updateUrlSilently(target);
  }

  enableMasterMode() {
    if (this.isMaster) return;

    if (this.mqtt) {
      try {
        this.mqtt.publish('ctrl', { type: 'client_leave', clientId: this.clientId, role: 'client' }, false);
      } catch {}
    }
    if (this.ws) {
      try {
        this.ws.close();
      } catch {}
      this.ws = null;
    }

    this.isMaster = true;
    this.hasUserNavigated = true;
    this._removeClientLockListeners();

    if (!this._isStaticHost()) {
      this._connectWebSocket();
    }

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
      const target = this.authoritativeState || createInitialState();
      this._applyStateToReveal(target, true);
      return;
    }

    this.hasUserNavigated = true;
    const indices = this.reveal.getIndices();
    const indexh = indices?.h ?? 0;
    const indexv = indices?.v ?? 0;
    const indexf = indices?.f === undefined || indices?.f === null ? -1 : indices.f;

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
    const curF = indices?.f === undefined || indices?.f === null ? -1 : indices.f;

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
    if (typeof clientsCount === 'number' && !this.isMaster) {
      this.viewersCount = clientsCount;
    }

    if (!validateState(incomingState)) {
      this._emitStatus();
      return;
    }

    if (this.isMaster) {
      // Accept incoming state if:
      // 1. Same master session with higher seq, OR
      // 2. Another Master device is further ahead (seq > this.seq) or this Master was just opened at slide 0
      const isFreshAtZero =
        !this.hasUserNavigated &&
        !this.hasRestoredState &&
        (this.authoritativeState?.indexh ?? 0) === 0 &&
        incomingState.indexh > 0;

      const isRemoteMasterAhead =
        incomingState.masterId !== this.masterId &&
        (incomingState.seq > this.seq || isFreshAtZero);

      const isSameMasterAhead =
        incomingState.masterId === this.masterId &&
        isStateNewer(incomingState, this.authoritativeState);

      if (isSameMasterAhead || isRemoteMasterAhead) {
        this.authoritativeState = incomingState;
        this.seq = Math.max(this.seq, incomingState.seq || 0);
        saveMasterStateToStorage(incomingState);
        this._applyStateToReveal(incomingState, true);
        this._updateUrlSilently(incomingState);
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

    // 1. Local WebSocket relay (when running on Vite dev/preview server)
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(serialized);
      } catch {}
    }

    // 2. HTTP relay POST (when running on Vite dev/preview server)
    if (!this._isStaticHost()) {
      this._postStateHttp(state);
    }

    // 3. BroadcastChannel (same-browser tabs)
    if (this.bc) {
      try {
        this.bc.postMessage(msg);
      } catch {}
    }

    // 4. MQTT over WSS with RETAIN = true (cross-device sync + instant late-joiner state on GitHub Pages)
    if (this.mqtt) {
      this.mqtt.publish('state', msg, true);
    }

    // 5. WebRTC PeerJS connections
    for (const { conn } of this.peerConnections.values()) {
      try {
        if (conn && conn.open) conn.send(msg);
      } catch {}
    }
  }

  _initMqttTransport() {
    if (typeof window === 'undefined' || typeof WebSocket === 'undefined') return;
    const url = new URL(window.location.href);
    const enableMqtt = this._isStaticHost() || url.searchParams.get('mqtt') === '1';
    if (!enableMqtt) return;

    this.mqtt = new MqttSyncTransport({
      roomId: this.roomId,
      onConnectChange: (isConnected) => {
        if (isConnected) {
          this.connected = true;
          if (this.isMaster) {
            if (this.hasRestoredState || this.hasUserNavigated) {
              this.mqtt.publish('state', { type: 'state', payload: this.authoritativeState }, true);
            } else {
              this.mqtt.publish('ctrl', { type: 'master_sync_request', masterId: this.masterId, role: 'master' }, false);
            }
          } else {
            const now = Date.now();
            if (now - this._lastSyncRequestTime > 2000) {
              this._lastSyncRequestTime = now;
              this.mqtt.publish('ctrl', { type: 'sync_request', clientId: this.clientId, role: 'client' }, false);
            }
          }
        } else if (this._isStaticHost() && this.peerConnections.size === 0) {
          this.connected = false;
        }
        this._emitStatus();
      },
      onMessage: (subTopic, data) => {
        if (!data) return;
        if (subTopic === 'state' && data.type === 'state' && data.payload) {
          this._handleIncomingState(data.payload, data.clientsCount);
        } else if (subTopic === 'ctrl') {
          if (data.type === 'client_leave') {
            if (this.isMaster && data.clientId) {
              this.mqttViewers.delete(data.clientId);
              this._recomputeStaticViewersCount();
            }
          } else if (data.type === 'viewers_count') {
            if (!this.isMaster && typeof data.count === 'number') {
              this.viewersCount = data.count;
              this._emitStatus();
            }
          } else if (data.type === 'sync_request' || data.type === 'client_ping') {
            if (this.isMaster && data.role === 'client' && typeof data.clientId === 'string' && data.clientId !== this.clientId) {
              this.mqttViewers.set(data.clientId, Date.now());
              this._recomputeStaticViewersCount();
            }
            if (
              data.type === 'sync_request' &&
              this.isMaster &&
              this.authoritativeState &&
              (this.hasUserNavigated || this.hasRestoredState || this.authoritativeState.indexh > 0)
            ) {
              this.mqtt.publish('state', { type: 'state', payload: this.authoritativeState, clientsCount: this.viewersCount }, true);
            }
          } else if (data.type === 'master_sync_request') {
            if (
              this.isMaster &&
              this.authoritativeState &&
              (this.hasUserNavigated || this.hasRestoredState || this.authoritativeState.indexh > 0)
            ) {
              this.mqtt.publish('state', { type: 'state', payload: this.authoritativeState, clientsCount: this.viewersCount }, true);
            }
          }
        }
      }
    });

    this.mqtt.init();
  }

  _recomputeStaticViewersCount() {
    if (!this.isMaster) {
      this._emitStatus();
      return;
    }

    const now = Date.now();
    for (const [cid, ts] of this.mqttViewers.entries()) {
      if (now - ts > 10000) {
        this.mqttViewers.delete(cid);
      }
    }

    let activePeerCount = 0;
    for (const [pid, entry] of this.peerConnections.entries()) {
      const conn = entry?.conn;
      if (!conn || !conn.open || conn.destroyed) {
        try {
          if (conn && typeof conn.close === 'function') conn.close();
        } catch {}
        this.peerConnections.delete(pid);
      } else {
        activePeerCount++;
      }
    }

    this.viewersCount = Math.max(this.mqttViewers.size, activePeerCount);
    this._emitStatus();

    // Broadcast viewersCount to clients via MQTT & PeerJS
    if (this.mqtt) {
      this.mqtt.publish('ctrl', { type: 'viewers_count', count: this.viewersCount }, false);
    }
    for (const { conn } of this.peerConnections.values()) {
      try {
        if (conn && conn.open) {
          conn.send({ type: 'viewers_count', count: this.viewersCount });
        }
      } catch {}
    }
  }

  _setupBroadcastChannel() {
    if (typeof BroadcastChannel === 'undefined') return;
    try {
      this.bc = new BroadcastChannel(`reveal_sync_${this.roomId}`);
      this.bc.onmessage = (ev) => {
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
      const wsUrl = `${proto}//${window.location.host}/__sync_ws?room=${encodeURIComponent(this.roomId)}&role=${role}&clientId=${encodeURIComponent(this.clientId)}`;

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
    if (this.destroyed || this._isStaticHost()) return;
    clearTimeout(this._reconnectTimer);
    this._reconnectTimer = setTimeout(() => {
      this._connectWebSocket();
    }, 120);
  }

  async _postStateHttp(state) {
    if (typeof fetch === 'undefined' || !state || this._isStaticHost()) return;
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
    if (this.destroyed || typeof fetch === 'undefined' || this._isStaticHost()) return;
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
    if (this._isStaticHost()) return;
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
    if (!this._isStaticHost()) {
      this._connectWebSocket();
    }
    if (this.mqtt) {
      this.mqtt.reconnectAll();
    }
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
    if (this.mqtt) {
      this.mqtt.disconnectAll();
    }
    this._emitStatus();
  }

  /**
   * Initializes PeerJS WebRTC DataChannel transport when hosted on static GitHub Pages
   * or when ?peer=1 is provided in URL, with automatic reconnect retry.
   */
  async _initPeerJSIfNeeded() {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const forcePeer = url.searchParams.get('peer') === '1';
    if (!this._isStaticHost() && !forcePeer) return;

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
          const peerId = conn.peer || conn.id || Math.random().toString(36).slice(2, 9);
          if (this.peerConnections.has(peerId)) {
            try {
              const old = this.peerConnections.get(peerId);
              if (old?.conn && old.conn !== conn) {
                old.conn.close();
              }
            } catch {}
          }
          this.peerConnections.set(peerId, { conn, lastSeen: Date.now() });

          conn.on('open', () => {
            this.peerConnections.set(peerId, { conn, lastSeen: Date.now() });
            this._recomputeStaticViewersCount();
            if (this.authoritativeState) {
              conn.send({
                type: 'state',
                payload: this.authoritativeState,
                clientsCount: this.viewersCount
              });
            }
          });
          conn.on('data', (data) => {
            if (this.peerConnections.has(peerId)) {
              this.peerConnections.get(peerId).lastSeen = Date.now();
            }
            if (data && data.type === 'sync_request' && this.authoritativeState) {
              conn.send({
                type: 'state',
                payload: this.authoritativeState,
                clientsCount: this.viewersCount
              });
            }
          });
          conn.on('close', () => {
            this.peerConnections.delete(peerId);
            this._recomputeStaticViewersCount();
          });
          conn.on('error', () => {
            this.peerConnections.delete(peerId);
            this._recomputeStaticViewersCount();
          });
        });
      } else {
        const peer = new Peer();
        this.peer = peer;
        let activeConn = null;
        let connectingSince = 0;

        const connectToMaster = () => {
          if (this.destroyed || !peer || peer.disconnected || peer.destroyed) return;
          if (activeConn) {
            if (activeConn.open) return;
            if (!activeConn.destroyed && Date.now() - connectingSince < 8000) return;
            try {
              activeConn.close();
            } catch {}
            activeConn = null;
          }
          try {
            connectingSince = Date.now();
            const conn = peer.connect(masterPeerId, { reliable: true });
            activeConn = conn;
            conn.on('open', () => {
              this.connected = true;
              conn.send({ type: 'sync_request', clientId: this.clientId });
              this._emitStatus();
            });
            conn.on('data', (data) => {
              if (data && data.type === 'state' && data.payload) {
                this._handleIncomingState(data.payload, data.clientsCount);
              } else if (data && data.type === 'viewers_count') {
                if (!this.isMaster && typeof data.count === 'number') {
                  this.viewersCount = data.count;
                  this._emitStatus();
                }
              }
            });
            conn.on('close', () => {
              activeConn = null;
            });
            conn.on('error', () => {
              activeConn = null;
            });
          } catch {}
        };

        peer.on('open', () => {
          connectToMaster();
          this._peerRetryTimer = setInterval(connectToMaster, 2500);
        });

        peer.on('error', () => {
          activeConn = null;
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
        if (this.mqtt) {
          this._recomputeStaticViewersCount();
        }
      } else if (!this.isMaster && this.mqtt) {
        this.mqtt.publish('ctrl', { type: 'client_ping', clientId: this.clientId, role: 'client' }, false);
      }
    }, 3000);
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
    if (!this._isStaticHost()) {
      this._pollStateHttp();
    }
    if (this.bc) {
      try {
        this.bc.postMessage({ type: 'sync_request' });
      } catch {}
    }
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({ type: 'sync_request' }));
      } catch {}
    }
    if (this.mqtt) {
      if (this.isMaster) {
        this.mqtt.publish('ctrl', { type: 'master_sync_request', masterId: this.masterId, role: 'master' }, false);
      } else {
        const now = Date.now();
        if (now - this._lastSyncRequestTime > 2000) {
          this._lastSyncRequestTime = now;
          this.mqtt.publish('ctrl', { type: 'sync_request', clientId: this.clientId, role: 'client' }, false);
        }
      }
    }
  }

  _emitStatus() {
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
    clearInterval(this._peerRetryTimer);
    this._removeClientLockListeners();
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this._boundOnline);
      window.removeEventListener('offline', this._boundOffline);
      window.removeEventListener('pagehide', this._boundPageHide);
      window.removeEventListener('beforeunload', this._boundPageHide);
    }
    if (this.badgeElement && this.badgeElement.parentNode) {
      this.badgeElement.parentNode.removeChild(this.badgeElement);
    }
    if (!this.isMaster && this.mqtt) {
      try {
        this.mqtt.publish('ctrl', { type: 'client_leave', clientId: this.clientId, role: 'client' }, false);
      } catch {}
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
    if (this.mqtt) {
      this.mqtt.destroy();
    }
    if (this.peer) {
      try {
        this.peer.destroy();
      } catch {}
    }
    for (const { conn } of this.peerConnections.values()) {
      try {
        if (conn && typeof conn.close === 'function') conn.close();
      } catch {}
    }
    this.peerConnections.clear();
  }
}
