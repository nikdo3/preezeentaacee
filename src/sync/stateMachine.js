/**
 * Deterministic State Machine for Reveal.js Master-Client Sync.
 * Handles state payload generation, hash computation, conflict resolution,
 * Master reload persistence, and Client lock validation.
 */

export const STORAGE_KEY = 'reveal_master_state';

export const BLOCKED_NAVIGATION_KEYS = new Set([
  'ArrowRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'Space',
  ' ',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  'n',
  'p',
  'N',
  'P',
  'Enter',
  'k',
  'j',
  'h',
  'l'
]);

/**
 * Computes a deterministic state hash for slide indices (indexh, indexv, indexf).
 * Accepts either numbers (h, v, f) or an object containing { indexh, indexv, indexf }.
 *
 * @param {number|object} hOrObj - indexh or state object
 * @param {number} [v=0] - indexv
 * @param {number|null} [f=-1] - indexf (fragment index)
 * @returns {string} deterministic hash string e.g. "h0v0f-1_5f81e3a2"
 */
export function computeStateHash(hOrObj, v = 0, f = -1) {
  let h = 0;
  if (typeof hOrObj === 'object' && hOrObj !== null) {
    h = hOrObj.indexh ?? 0;
    v = hOrObj.indexv ?? 0;
    f = hOrObj.indexf ?? -1;
  } else {
    h = hOrObj ?? 0;
  }

  const normH = Number.isFinite(Number(h)) ? Math.max(0, Math.floor(Number(h))) : 0;
  const normV = Number.isFinite(Number(v)) ? Math.max(0, Math.floor(Number(v))) : 0;
  const normF = (f === undefined || f === null || Number(f) < 0) ? -1 : Math.floor(Number(f));

  // 32-bit FNV-1a hash
  const key = `${normH}:${normV}:${normF}`;
  let hash = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    hash ^= key.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hex = (hash >>> 0).toString(16).padStart(8, '0');
  return `h${normH}v${normV}f${normF}_${hex}`;
}

/**
 * Validates whether an object conforms to the State payload structure.
 *
 * @param {any} state
 * @returns {boolean}
 */
export function validateState(state) {
  if (!state || typeof state !== 'object') return false;
  const h = Number(state.indexh);
  const v = Number(state.indexv);
  const timestamp = Number(state.timestamp);
  const seq = Number(state.seq);

  if (!Number.isFinite(h) || h < 0) return false;
  if (!Number.isFinite(v) || v < 0) return false;
  if (!Number.isFinite(timestamp) || timestamp <= 0) return false;
  if (!Number.isFinite(seq) || seq < 0) return false;
  if (typeof state.stateHash !== 'string' || state.stateHash.length === 0) return false;

  return true;
}

/**
 * Creates an authoritative state payload.
 *
 * @param {object} params
 * @param {number} [params.indexh=0]
 * @param {number} [params.indexv=0]
 * @param {number|null} [params.indexf=-1]
 * @param {number} [params.timestamp=Date.now()]
 * @param {string|null} [params.masterId=null]
 * @param {number} [params.seq=0]
 * @returns {object} { indexh, indexv, indexf, timestamp, stateHash, masterId, seq }
 */
export function createStatePayload({
  indexh = 0,
  indexv = 0,
  indexf = -1,
  timestamp = Date.now(),
  masterId = null,
  seq = 0
} = {}) {
  const normH = Number.isFinite(Number(indexh)) ? Math.max(0, Math.floor(Number(indexh))) : 0;
  const normV = Number.isFinite(Number(indexv)) ? Math.max(0, Math.floor(Number(indexv))) : 0;
  const normF = (indexf === undefined || indexf === null || Number(indexf) < 0) ? -1 : Math.floor(Number(indexf));
  const normSeq = Number.isFinite(Number(seq)) ? Math.max(0, Math.floor(Number(seq))) : 0;
  const normTs = Number.isFinite(Number(timestamp)) ? Number(timestamp) : Date.now();

  return {
    indexh: normH,
    indexv: normV,
    indexf: normF,
    timestamp: normTs,
    stateHash: computeStateHash(normH, normV, normF),
    masterId: masterId ? String(masterId) : null,
    seq: normSeq
  };
}

/**
 * Creates the initial default state.
 *
 * @param {object} [options]
 * @returns {object}
 */
export function createInitialState(options = {}) {
  return createStatePayload({
    indexh: 0,
    indexv: 0,
    indexf: -1,
    timestamp: Date.now(),
    masterId: options.masterId || null,
    seq: 0
  });
}

/**
 * Checks whether candidateState is strictly newer than currentState.
 * Compares sequence number first, then timestamp as tiebreaker.
 *
 * @param {object|null} candidateState
 * @param {object|null} currentState
 * @returns {boolean}
 */
export function isStateNewer(candidateState, currentState) {
  if (!candidateState || !validateState(candidateState)) return false;
  if (!currentState || !validateState(currentState)) return true;

  const candSeq = candidateState.seq ?? 0;
  const currSeq = currentState.seq ?? 0;

  if (candSeq > currSeq) return true;
  if (candSeq < currSeq) return false;

  return (candidateState.timestamp ?? 0) > (currentState.timestamp ?? 0);
}

/**
 * Checks whether two states represent the exact same slide position.
 *
 * @param {object|null} a
 * @param {object|null} b
 * @returns {boolean}
 */
export function isStateEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  return a.stateHash === b.stateHash ||
    (Number(a.indexh) === Number(b.indexh) &&
     Number(a.indexv) === Number(b.indexv) &&
     (a.indexf ?? -1) === (b.indexf ?? -1));
}

/**
 * Authoritative conflict resolution between local state and incoming state.
 * - In Master mode: Local state is authoritative unless incoming state is a newer recovery state.
 * - In Client mode: Authoritative incoming state from Master always wins if it is newer or hydrates uninitialized client.
 *
 * @param {object|null} localState
 * @param {object|null} incomingState
 * @param {boolean} isMaster
 * @returns {object|null} winning state
 */
export function resolveStateConflict(localState, incomingState, isMaster) {
  if (!incomingState || !validateState(incomingState)) {
    return localState;
  }

  if (!localState || !validateState(localState)) {
    return incomingState;
  }

  if (isMaster) {
    // If local instance is Master:
    // If incoming state is from the same master session with higher seq (e.g. reload restore), accept it.
    // Otherwise local master remains authoritative.
    if (incomingState.masterId === localState.masterId && isStateNewer(incomingState, localState)) {
      return incomingState;
    }
    return localState;
  }

  // Client mode: Master's incoming state overrides local client state if newer or equal
  if (isStateNewer(incomingState, localState)) {
    return incomingState;
  }

  return localState;
}

/**
 * Determines whether a given URL is in Master mode.
 * Master mode is active if ?master=<secret> has any non-empty value (e.g. ?master=1, ?master=secret).
 *
 * @param {string} [urlString]
 * @returns {boolean}
 */
export function isMasterMode(urlString = (typeof window !== 'undefined' ? window.location.href : '')) {
  try {
    const url = new URL(urlString, 'http://localhost');
    const masterParam = url.searchParams.get('master');
    return masterParam !== null && masterParam.trim() !== '';
  } catch {
    return false;
  }
}

/**
 * Saves authoritative Master state to sessionStorage.
 *
 * @param {object} state
 * @param {Storage} [storage]
 */
export function saveMasterStateToStorage(state, storage = (typeof sessionStorage !== 'undefined' ? sessionStorage : null)) {
  if (!storage || !validateState(state)) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('[SyncState] Failed to persist state to sessionStorage:', err);
  }
}

/**
 * Loads authoritative Master state from sessionStorage.
 *
 * @param {Storage} [storage]
 * @returns {object|null}
 */
export function loadMasterStateFromStorage(storage = (typeof sessionStorage !== 'undefined' ? sessionStorage : null)) {
  if (!storage) return null;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return validateState(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/**
 * Clears Master state from sessionStorage.
 *
 * @param {Storage} [storage]
 */
export function clearMasterStateStorage(storage = (typeof sessionStorage !== 'undefined' ? sessionStorage : null)) {
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEY);
  } catch {}
}

/**
 * Parses slide indices from URL hash or query string.
 * Supports "#/h/v/f", "#/h/v", "#/h", "?h=X&v=Y&f=Z".
 *
 * @param {string} [urlOrHash]
 * @returns {{ indexh: number, indexv: number, indexf: number }|null}
 */
export function parseStateFromUrl(urlOrHash = (typeof window !== 'undefined' ? window.location.href : '')) {
  try {
    const url = new URL(urlOrHash, 'http://localhost');
    const qH = url.searchParams.get('h');
    const qV = url.searchParams.get('v');
    const qF = url.searchParams.get('f');

    if (qH !== null) {
      return {
        indexh: Math.max(0, parseInt(qH, 10) || 0),
        indexv: Math.max(0, parseInt(qV, 10) || 0),
        indexf: qF !== null ? parseInt(qF, 10) : -1
      };
    }

    const hash = url.hash.replace(/^#\/?/, '');
    if (!hash) return null;

    const parts = hash.split('/');
    if (parts.length > 0 && /^\d+$/.test(parts[0])) {
      const h = parseInt(parts[0], 10);
      const v = parts.length > 1 && /^\d+$/.test(parts[1]) ? parseInt(parts[1], 10) : 0;
      const f = parts.length > 2 && /^-?\d+$/.test(parts[2]) ? parseInt(parts[2], 10) : -1;
      return { indexh: h, indexv: v, indexf: f };
    }
  } catch {}
  return null;
}

/**
 * Checks whether an incoming KeyboardEvent is an unauthorized navigation key on a Client.
 *
 * @param {KeyboardEvent} e
 * @returns {boolean}
 */
export function isNavigationKeyEvent(e) {
  if (!e || !e.key) return false;

  // Allow input editing if focus is in an input or textarea
  const target = e.target;
  if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
    return false;
  }

  // Check if it's the secret master toggle shortcut: Ctrl+Shift+M or Alt+M
  if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'm') ||
      (e.altKey && e.key.toLowerCase() === 'm')) {
    return false; // let shortcut handler process it
  }

  return BLOCKED_NAVIGATION_KEYS.has(e.key) ||
    BLOCKED_NAVIGATION_KEYS.has(e.code) ||
    e.keyCode === 37 || // Left
    e.keyCode === 38 || // Up
    e.keyCode === 39 || // Right
    e.keyCode === 40 || // Down
    e.keyCode === 32 || // Space
    e.keyCode === 33 || // PageUp
    e.keyCode === 34 || // PageDown
    e.keyCode === 35 || // End
    e.keyCode === 36;   // Home
}

/**
 * Checks whether an event is the secret shortcut to activate Master mode.
 * Shortcut: Ctrl+Shift+M or Alt+M.
 *
 * @param {KeyboardEvent} e
 * @returns {boolean}
 */
export function isMasterShortcut(e) {
  if (!e || !e.key) return false;
  return Boolean(
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'm') ||
    (e.altKey && e.key.toLowerCase() === 'm')
  );
}
