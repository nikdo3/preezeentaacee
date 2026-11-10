import { describe, it, expect } from 'vitest';
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
  isNavigationKeyEvent
} from '../../src/sync/stateMachine.js';

describe('Sync State Machine Unit Tests', () => {
  it('computes deterministic stateHash for identical slide indices', () => {
    const h1 = computeStateHash(5, 0, 2);
    const h2 = computeStateHash({ indexh: 5, indexv: 0, indexf: 2 });
    const h3 = computeStateHash(5, 0, 1);

    expect(h1).toBe(h2);
    expect(h1).toMatch(/^h5v0f2_[0-9a-f]{8}$/);
    expect(h1).not.toBe(h3);
  });

  it('creates valid state payloads and validates schema', () => {
    const payload = createStatePayload({
      indexh: 4,
      indexv: 1,
      indexf: 2,
      timestamp: 1700000000000,
      masterId: 'master_1',
      seq: 7
    });

    expect(validateState(payload)).toBe(true);
    expect(payload.indexh).toBe(4);
    expect(payload.indexv).toBe(1);
    expect(payload.indexf).toBe(2);
    expect(payload.seq).toBe(7);
    expect(validateState(null)).toBe(false);
    expect(validateState({ indexh: -1 })).toBe(false);
  });

  it('compares state recency using sequence number and timestamp tiebreaker', () => {
    const s1 = createStatePayload({ indexh: 1, seq: 1, timestamp: 1000 });
    const s2 = createStatePayload({ indexh: 2, seq: 2, timestamp: 900 });
    const s3 = createStatePayload({ indexh: 3, seq: 2, timestamp: 1100 });

    expect(isStateNewer(s2, s1)).toBe(true);
    expect(isStateNewer(s1, s2)).toBe(false);
    expect(isStateNewer(s3, s2)).toBe(true);
  });

  it('resolves state conflicts authoritatively for Master vs Client', () => {
    const masterState = createStatePayload({ indexh: 5, indexv: 0, indexf: 2, seq: 10, masterId: 'm1' });
    const clientState = createStatePayload({ indexh: 0, indexv: 0, indexf: -1, seq: 1, masterId: 'm1' });

    const resolvedForClient = resolveStateConflict(clientState, masterState, false);
    expect(isStateEqual(resolvedForClient, masterState)).toBe(true);

    const staleIncoming = createStatePayload({ indexh: 1, seq: 2, masterId: 'other' });
    const resolvedForMaster = resolveStateConflict(masterState, staleIncoming, true);
    expect(isStateEqual(resolvedForMaster, masterState)).toBe(true);
  });

  it('detects Master mode URL parameter accurately', () => {
    expect(isMasterMode('http://localhost:5173/?master=secret123')).toBe(true);
    expect(isMasterMode('http://localhost:5173/?master=1')).toBe(true);
    expect(isMasterMode('http://localhost:5173/')).toBe(false);
    expect(isMasterMode('http://localhost:5173/?master=')).toBe(false);
  });

  it('persists and restores Master state in storage for reload survival', () => {
    const store = new Map();
    const mockStorage = {
      getItem: (k) => store.get(k) || null,
      setItem: (k, v) => store.set(k, v),
      removeItem: (k) => store.delete(k)
    };

    const state = createStatePayload({ indexh: 6, indexv: 1, indexf: 2, seq: 12, masterId: 'm1' });
    saveMasterStateToStorage(state, mockStorage);

    const loaded = loadMasterStateFromStorage(mockStorage);
    expect(loaded).not.toBeNull();
    expect(isStateEqual(loaded, state)).toBe(true);
    expect(loaded.seq).toBe(12);
  });

  it('parses slide state from URL hash and query parameters', () => {
    expect(parseStateFromUrl('http://localhost:5173/#/5/1/2')).toEqual({ indexh: 5, indexv: 1, indexf: 2 });
    expect(parseStateFromUrl('http://localhost:5173/?h=3&v=0&f=1')).toEqual({ indexh: 3, indexv: 0, indexf: 1 });
  });

  it('identifies navigation keys to block on Client', () => {
    expect(isNavigationKeyEvent({ key: 'ArrowRight', code: 'ArrowRight' })).toBe(true);
    expect(isNavigationKeyEvent({ key: ' ', code: 'Space' })).toBe(true);
    expect(isNavigationKeyEvent({ key: 'PageDown', code: 'PageDown' })).toBe(true);
    expect(isNavigationKeyEvent({ key: 'm', ctrlKey: true, shiftKey: true })).toBe(false);
  });

  it('detects secret Master shortcuts (Ctrl+Shift+M / Alt+M)', async () => {
    const { isMasterShortcut } = await import('../../src/sync/stateMachine.js');
    expect(isMasterShortcut({ key: 'm', ctrlKey: true, shiftKey: true })).toBe(true);
    expect(isMasterShortcut({ key: 'M', altKey: true })).toBe(true);
    expect(isMasterShortcut({ key: 'ArrowRight' })).toBe(false);
  });

  it('SyncEngine locks Client controls and configures unlocked controls for Master', async () => {
    const { SyncEngine } = await import('../../src/sync/SyncEngine.js');

    const mockRevealClient = {
      configure: (opts) => { mockRevealClient.options = opts; },
      on: () => {},
      getIndices: () => ({ h: 0, v: 0, f: -1 }),
      slide: () => {}
    };

    const clientEngine = new SyncEngine(mockRevealClient, { isMaster: false, roomId: 'unit-client' });
    await clientEngine.init();
    expect(mockRevealClient.options.keyboard).toBe(false);
    expect(mockRevealClient.options.touch).toBe(false);
    expect(mockRevealClient.options.controls).toBe(false);
    expect(clientEngine.badgeElement).toBeNull();
    clientEngine.destroy();

    const mockRevealMaster = {
      configure: (opts) => { mockRevealMaster.options = opts; },
      on: () => {},
      getIndices: () => ({ h: 0, v: 0, f: -1 }),
      slide: () => {}
    };

    const masterEngine = new SyncEngine(mockRevealMaster, { isMaster: true, roomId: 'unit-master' });
    await masterEngine.init();
    expect(mockRevealMaster.options.keyboard).toBe(true);
    expect(mockRevealMaster.options.touch).toBe(true);
    expect(mockRevealMaster.options.controls).toBe(true);
    masterEngine.destroy();
  });

  it('SyncEngine applies authoritative Master state to Reveal on Client', async () => {
    const { SyncEngine } = await import('../../src/sync/SyncEngine.js');

    let slidTo = null;
    const mockReveal = {
      configure: () => {},
      on: () => {},
      getIndices: () => ({ h: 0, v: 0, f: -1 }),
      slide: (h, v, f) => { slidTo = { h, v, f }; }
    };

    const clientEngine = new SyncEngine(mockReveal, { isMaster: false, roomId: 'unit-apply' });
    await clientEngine.init();

    const state = createStatePayload({ indexh: 4, indexv: 1, indexf: 2, seq: 10 });
    const applied = clientEngine.applyMasterState(state);

    expect(applied).toBe(true);
    expect(slidTo).toEqual({ h: 4, v: 1, f: 2 });
    expect(clientEngine.getState()).toEqual(state);

    clientEngine.destroy();
  });

  it('SyncEngine deduplicates Peer connections and prunes stale viewers in _recomputeStaticViewersCount', async () => {
    const { SyncEngine } = await import('../../src/sync/SyncEngine.js');

    const masterEngine = new SyncEngine({}, { isMaster: true, roomId: 'unit-dedup' });
    masterEngine.init();

    // 1. Map deduplication
    expect(masterEngine.peerConnections instanceof Map).toBe(true);

    const openConn1 = { open: true, destroyed: false, close: () => {} };
    const closedConn = { open: false, destroyed: false, close: () => {} };
    const openConn2 = { open: true, destroyed: false, close: () => {} };

    masterEngine.peerConnections.set('peer-A', { conn: openConn1, lastSeen: Date.now() });
    masterEngine.peerConnections.set('peer-B', { conn: closedConn, lastSeen: Date.now() });
    masterEngine.peerConnections.set('peer-C', { conn: openConn2, lastSeen: Date.now() });

    // Stale MQTT viewer vs active MQTT viewer
    masterEngine.mqttViewers.set('client-stale', Date.now() - 15000); // 15s ago (>10s)
    masterEngine.mqttViewers.set('client-active', Date.now() - 2000);  // 2s ago (<10s)

    masterEngine._recomputeStaticViewersCount();

    // Closed conn 'peer-B' should be pruned, 'peer-A' and 'peer-C' remain
    expect(masterEngine.peerConnections.has('peer-B')).toBe(false);
    expect(masterEngine.peerConnections.has('peer-A')).toBe(true);
    expect(masterEngine.peerConnections.has('peer-C')).toBe(true);

    // Stale MQTT viewer should be deleted
    expect(masterEngine.mqttViewers.has('client-stale')).toBe(false);
    expect(masterEngine.mqttViewers.has('client-active')).toBe(true);

    // viewersCount should be Math.max(activePeers (2), activeMqtt (1)) = 2
    expect(masterEngine.viewersCount).toBe(2);

    masterEngine.destroy();
  });

  it('SyncEngine client ignores local reveal navigation and reverts to authoritative state', async () => {
    const { SyncEngine } = await import('../../src/sync/SyncEngine.js');

    let slidTarget = null;
    let registeredCallback = null;
    const mockReveal = {
      configure: () => {},
      on: (evt, cb) => {
        if (evt === 'slidechanged') registeredCallback = cb;
      },
      getIndices: () => ({ h: 3, v: 0, f: -1 }),
      slide: (h, v, f) => { slidTarget = { h, v, f }; }
    };

    const clientEngine = new SyncEngine(mockReveal, { isMaster: false, roomId: 'unit-lock' });
    clientEngine.init();

    // Set an authoritative state at slide 1
    const authState = createStatePayload({ indexh: 1, indexv: 0, indexf: -1, seq: 5 });
    clientEngine.applyMasterState(authState);

    expect(slidTarget).toEqual({ h: 1, v: 0, f: -1 });

    // Simulate an accidental local slide change on client
    if (registeredCallback) {
      registeredCallback();
    }

    // Must snap back to authoritative state
    expect(slidTarget).toEqual({ h: 1, v: 0, f: -1 });

    clientEngine.destroy();
  });
});
