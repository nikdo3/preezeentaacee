import { defineConfig } from 'vite';
import { WebSocketServer } from 'ws';

/**
 * Creates in-memory sync relay for local dev server & preview server.
 * Provides deterministic sub-50ms synchronization across isolated contexts
 * and handles context.setOffline(true/false) in Playwright tests.
 */
function createSyncRelay() {
  const rooms = new Map();

  function getRoom(roomId = 'default') {
    if (!rooms.has(roomId)) {
      rooms.set(roomId, {
        state: null,
        clients: new Set(),
        masterWs: null,
        lastHeartbeat: Date.now()
      });
    }
    return rooms.get(roomId);
  }

  return {
    setup(httpServer, middlewares) {
      if (!httpServer) return;

      const wss = new WebSocketServer({ noServer: true });

      httpServer.on('upgrade', (req, socket, head) => {
        try {
          const url = new URL(req.url, 'http://localhost');
          if (url.pathname === '/__sync_ws') {
            wss.handleUpgrade(req, socket, head, (ws) => {
              wss.emit('connection', ws, req);
            });
          }
        } catch (err) {
          console.error('[SyncRelay] Upgrade error:', err);
        }
      });

      wss.on('connection', (ws, req) => {
        try {
          const url = new URL(req.url, 'http://localhost');
          const roomId = url.searchParams.get('room') || 'default';
          const role = url.searchParams.get('role') || 'client';
          const room = getRoom(roomId);

          room.clients.add(ws);
          if (role === 'master') {
            room.masterWs = ws;
          }

          const getClientCount = () => {
            const hasMaster = room.masterWs && room.clients.has(room.masterWs);
            return Math.max(0, room.clients.size - (hasMaster ? 1 : 0));
          };

          const broadcastViewerCount = () => {
            const countMsg = JSON.stringify({ type: 'viewers_count', count: getClientCount() });
            for (const client of room.clients) {
              if (client.readyState === 1) { // 1 = OPEN
                client.send(countMsg);
              }
            }
          };

          broadcastViewerCount();

          // Immediately hydrate new connection with latest retained state
          if (room.state) {
            ws.send(JSON.stringify({
              type: 'state',
              payload: room.state,
              clientsCount: getClientCount()
            }));
          }

          ws.on('message', (data) => {
            try {
              const message = JSON.parse(data.toString());
              if (message.type === 'state' && message.payload) {
                room.state = message.payload;
                const clientCount = getClientCount();
                const outMsg = JSON.stringify({
                  type: 'state',
                  payload: message.payload,
                  clientsCount: clientCount
                });
                for (const client of room.clients) {
                  if (client !== ws && client.readyState === 1) {
                    client.send(outMsg);
                  }
                }
              } else if (message.type === 'sync_request') {
                if (room.state) {
                  ws.send(JSON.stringify({
                    type: 'state',
                    payload: room.state,
                    clientsCount: getClientCount()
                  }));
                }
              } else if (message.type === 'heartbeat') {
                ws.send(JSON.stringify({
                  type: 'heartbeat_ack',
                  clientsCount: getClientCount()
                }));
              }
            } catch (err) {
              console.error('[SyncRelay] Error handling message:', err);
            }
          });

          const cleanup = () => {
            room.clients.delete(ws);
            if (room.masterWs === ws) {
              room.masterWs = null;
            }
            broadcastViewerCount();
          };

          ws.on('close', cleanup);
          ws.on('error', cleanup);
        } catch (err) {
          console.error('[SyncRelay] Connection error:', err);
        }
      });

      // HTTP fallback endpoints
      middlewares.use('/__sync_poll', (req, res) => {
        try {
          const url = new URL(req.url, 'http://localhost');
          const roomId = url.searchParams.get('room') || 'default';
          const room = getRoom(roomId);

          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

          if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.end();
            return;
          }

          const hasMaster = room.masterWs && room.clients.has(room.masterWs);
          const clientCount = Math.max(0, room.clients.size - (hasMaster ? 1 : 0));

          if (req.method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({
              state: room.state,
              clientsCount: clientCount
            }));
            return;
          }

          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const data = JSON.parse(body || '{}');
                if (data.type === 'state' && data.payload) {
                  room.state = data.payload;
                  const outMsg = JSON.stringify({
                    type: 'state',
                    payload: data.payload,
                    clientsCount: clientCount
                  });
                  for (const client of room.clients) {
                    if (client.readyState === 1) {
                      client.send(outMsg);
                    }
                  }
                }
                res.statusCode = 200;
                res.end(JSON.stringify({ ok: true, state: room.state, clientsCount: clientCount }));
              } catch (err) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
            return;
          }

          res.statusCode = 405;
          res.end();
        } catch (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });
    }
  };
}

export function syncRelayPlugin() {
  const relay = createSyncRelay();
  return {
    name: 'vite-plugin-sync-relay',
    configureServer(server) {
      relay.setup(server.httpServer, server.middlewares);
    },
    configurePreviewServer(server) {
      relay.setup(server.httpServer, server.middlewares);
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [syncRelayPlugin()],
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  test: {
    environment: 'node',
    globals: true,
    include: ['tests/unit/**/*.test.js']
  }
});
