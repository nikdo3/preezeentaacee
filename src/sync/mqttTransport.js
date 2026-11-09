/**
 * Zero-dependency MQTT 3.1.1 over WebSocket (WSS) transport for serverless
 * multi-device presentation sync (e.g. on GitHub Pages).
 *
 * Uses multiple public WSS MQTT brokers simultaneously for instant (<100ms)
 * cross-device delivery and MQTT RETAINED messages so late-joining devices
 * immediately receive the current slide even without an active Master heartbeat.
 */

const DEFAULT_BROKERS = [
  'wss://broker.emqx.io:8084/mqtt',
  'wss://broker.hivemq.com:8884/mqtt',
  'wss://test.mosquitto.org:8081/mqtt'
];

function encodeRemainingLength(length) {
  const bytes = [];
  let x = length;
  do {
    let encodedByte = x % 128;
    x = Math.floor(x / 128);
    if (x > 0) {
      encodedByte |= 128;
    }
    bytes.push(encodedByte);
  } while (x > 0);
  return bytes;
}

function encodeUtf8String(str) {
  const encoder = new TextEncoder();
  const body = encoder.encode(str);
  const lenHi = (body.length >> 8) & 0xff;
  const lenLo = body.length & 0xff;
  const out = new Uint8Array(2 + body.length);
  out[0] = lenHi;
  out[1] = lenLo;
  out.set(body, 2);
  return out;
}

function buildConnectPacket(clientId) {
  const protoName = encodeUtf8String('MQTT');
  const protoLevel = 4; // MQTT 3.1.1
  const connectFlags = 0x02; // Clean session
  const keepAliveHi = 0;
  const keepAliveLo = 30;
  const clientPayload = encodeUtf8String(clientId);

  const remLen = protoName.length + 4 + clientPayload.length;
  const remBytes = encodeRemainingLength(remLen);

  const packet = new Uint8Array(1 + remBytes.length + remLen);
  let pos = 0;
  packet[pos++] = 0x10; // CONNECT
  for (const b of remBytes) packet[pos++] = b;
  packet.set(protoName, pos);
  pos += protoName.length;
  packet[pos++] = protoLevel;
  packet[pos++] = connectFlags;
  packet[pos++] = keepAliveHi;
  packet[pos++] = keepAliveLo;
  packet.set(clientPayload, pos);
  return packet;
}

function buildSubscribePacket(topicFilter, packetId = 1) {
  const topicBytes = encodeUtf8String(topicFilter);
  const remLen = 2 + topicBytes.length + 1;
  const remBytes = encodeRemainingLength(remLen);

  const packet = new Uint8Array(1 + remBytes.length + remLen);
  let pos = 0;
  packet[pos++] = 0x82; // SUBSCRIBE (QoS 1 header)
  for (const b of remBytes) packet[pos++] = b;
  packet[pos++] = (packetId >> 8) & 0xff;
  packet[pos++] = packetId & 0xff;
  packet.set(topicBytes, pos);
  pos += topicBytes.length;
  packet[pos++] = 0x00; // Requested QoS 0
  return packet;
}

function buildPublishPacket(topic, jsonString, retain = false) {
  const topicBytes = encodeUtf8String(topic);
  const encoder = new TextEncoder();
  const payloadBytes = encoder.encode(jsonString);

  const remLen = topicBytes.length + payloadBytes.length;
  const remBytes = encodeRemainingLength(remLen);

  const packet = new Uint8Array(1 + remBytes.length + remLen);
  let pos = 0;
  packet[pos++] = retain ? 0x31 : 0x30; // PUBLISH QoS 0, RETAIN = 1 or 0
  for (const b of remBytes) packet[pos++] = b;
  packet.set(topicBytes, pos);
  pos += topicBytes.length;
  packet.set(payloadBytes, pos);
  return packet;
}

export class MqttSyncTransport {
  constructor({ roomId, onMessage, onConnectChange, brokers = DEFAULT_BROKERS }) {
    this.roomId = roomId || 'jet-cesko';
    this.baseTopic = `preezeentaacee/v3/${this.roomId}`;
    this.onMessage = onMessage;
    this.onConnectChange = onConnectChange;
    this.brokers = brokers;
    this.clientId = 'prz_' + Math.random().toString(36).slice(2, 10) + '_' + (Date.now() % 10000);

    this.sockets = new Map();
    this.connectedBrokers = new Set();
    this.destroyed = false;
    this._pingTimer = null;
    this._reconnectTimers = new Map();
    this._wasConnected = false;
  }

  init() {
    if (this.destroyed || typeof WebSocket === 'undefined') return;
    for (const brokerUrl of this.brokers) {
      this._connectBroker(brokerUrl);
    }

    this._pingTimer = setInterval(() => {
      if (this.destroyed) return;
      const pingReq = new Uint8Array([0xc0, 0x00]);
      for (const ws of this.sockets.values()) {
        if (ws.readyState === WebSocket.OPEN) {
          try {
            ws.send(pingReq);
          } catch {}
        }
      }
    }, 20000);
  }

  _connectBroker(brokerUrl) {
    if (this.destroyed || typeof WebSocket === 'undefined') return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;

    try {
      const existing = this.sockets.get(brokerUrl);
      if (existing && (existing.readyState === WebSocket.OPEN || existing.readyState === WebSocket.CONNECTING)) {
        return;
      }

      const ws = new WebSocket(brokerUrl, 'mqtt');
      ws.binaryType = 'arraybuffer';
      this.sockets.set(brokerUrl, ws);

      ws.onopen = () => {
        if (this.destroyed) {
          try { ws.close(); } catch {}
          return;
        }
        try {
          ws.send(buildConnectPacket(`${this.clientId}_${ this.brokers.indexOf(brokerUrl)}`));
        } catch {}
      };

      ws.onmessage = (event) => {
        if (this.destroyed) return;
        if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
        if (!(event.data instanceof ArrayBuffer)) return;
        this._parseIncomingBuffer(brokerUrl, ws, new Uint8Array(event.data));
      };

      ws.onclose = () => {
        this.connectedBrokers.delete(brokerUrl);
        this._notifyConnectionState();
        if (!this.destroyed) {
          const t = setTimeout(() => this._connectBroker(brokerUrl), 1500);
          this._reconnectTimers.set(brokerUrl, t);
        }
      };

      ws.onerror = () => {
        try { ws.close(); } catch {}
      };
    } catch {}
  }

  _parseIncomingBuffer(brokerUrl, ws, bytes) {
    const decoder = new TextDecoder();
    let offset = 0;

    while (offset < bytes.length) {
      const header = bytes[offset++];
      const packetType = header & 0xf0;
      const qos = (header & 0x06) >> 1;

      // Decode variable-length remaining length
      let multiplier = 1;
      let remLen = 0;
      let encodedByte = 0;
      do {
        if (offset >= bytes.length) return;
        encodedByte = bytes[offset++];
        remLen += (encodedByte & 127) * multiplier;
        multiplier *= 128;
      } while ((encodedByte & 128) !== 0);

      const packetEnd = offset + remLen;
      if (packetEnd > bytes.length) return;

      if (packetType === 0x20) {
        // CONNACK -> Subscribe to room wildcard topic
        this.connectedBrokers.add(brokerUrl);
        try {
          ws.send(buildSubscribePacket(`${this.baseTopic}/+`, 1));
        } catch {}
        this._notifyConnectionState();
      } else if (packetType === 0x30) {
        // PUBLISH packet
        let pPos = offset;
        if (pPos + 2 <= packetEnd) {
          const topicLen = (bytes[pPos] << 8) | bytes[pPos + 1];
          pPos += 2;
          if (pPos + topicLen <= packetEnd) {
            const topic = decoder.decode(bytes.subarray(pPos, pPos + topicLen));
            pPos += topicLen;
            if (qos > 0) {
              pPos += 2; // skip packet identifier
            }
            const jsonStr = decoder.decode(bytes.subarray(pPos, packetEnd));
            const subTopic = topic.startsWith(`${this.baseTopic}/`)
              ? topic.slice(this.baseTopic.length + 1)
              : topic;
            try {
              const parsed = JSON.parse(jsonStr);
              if (typeof this.onMessage === 'function') {
                this.onMessage(subTopic, parsed);
              }
            } catch {}
          }
        }
      }

      offset = packetEnd;
    }
  }

  publish(subTopic, payloadObj, retain = false) {
    if (this.destroyed) return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;

    const fullTopic = `${this.baseTopic}/${subTopic}`;
    const jsonStr = JSON.stringify(payloadObj);
    const packet = buildPublishPacket(fullTopic, jsonStr, retain);

    for (const brokerUrl of this.connectedBrokers) {
      const ws = this.sockets.get(brokerUrl);
      if (ws && ws.readyState === WebSocket.OPEN) {
        try {
          ws.send(packet);
        } catch {}
      }
    }
  }

  reconnectAll() {
    if (this.destroyed) return;
    for (const brokerUrl of this.brokers) {
      this._connectBroker(brokerUrl);
    }
  }

  disconnectAll() {
    this.connectedBrokers.clear();
    for (const ws of this.sockets.values()) {
      try { ws.close(); } catch {}
    }
    this.sockets.clear();
    this._notifyConnectionState();
  }

  _notifyConnectionState() {
    const isConnected = this.connectedBrokers.size > 0;
    if (this._wasConnected !== isConnected) {
      this._wasConnected = isConnected;
      if (typeof this.onConnectChange === 'function') {
        this.onConnectChange(isConnected);
      }
    }
  }

  destroy() {
    this.destroyed = true;
    clearInterval(this._pingTimer);
    for (const t of this._reconnectTimers.values()) {
      clearTimeout(t);
    }
    this._reconnectTimers.clear();
    this.disconnectAll();
  }
}
