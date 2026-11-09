import { describe, it, expect, beforeEach } from 'vitest';
import { EventEmitter } from 'events';
import { syncRelayPlugin } from '../../vite.config.js';
import { createStatePayload } from '../../src/sync/stateMachine.js';

function createMockReqRes(method, url, bodyObj = null) {
  const req = new EventEmitter();
  req.method = method;
  req.url = url;

  let statusCode = 200;
  const headers = {};
  let responseBody = '';

  const res = {
    get statusCode() {
      return statusCode;
    },
    set statusCode(val) {
      statusCode = val;
    },
    setHeader(k, v) {
      headers[k.toLowerCase()] = v;
    },
    end(chunk = '') {
      responseBody += chunk;
      res._resolve?.({
        status: statusCode,
        headers,
        json: () => JSON.parse(responseBody || '{}')
      });
    }
  };

  const promise = new Promise((resolve) => {
    res._resolve = resolve;
  });

  const triggerBody = () => {
    if (bodyObj !== null) {
      req.emit('data', Buffer.from(JSON.stringify(bodyObj)));
    }
    req.emit('end');
  };

  return { req, res, promise, triggerBody };
}

describe('Vite Sync Relay Plugin & Endpoints', () => {
  let pollHandler;

  beforeEach(() => {
    const plugin = syncRelayPlugin();
    const httpServer = new EventEmitter();
    const middlewares = {
      use(route, handler) {
        if (route === '/__sync_poll') {
          pollHandler = handler;
        }
      }
    };
    plugin.configureServer({ httpServer, middlewares });
  });

  it('GET /__sync_poll returns empty state initially', async () => {
    const { req, res, promise } = createMockReqRes('GET', '/__sync_poll?room=test_relay_1');
    pollHandler(req, res);
    const result = await promise;
    expect(result.status).toBe(200);
    const data = result.json();
    expect(data.state).toBeNull();
    expect(data.clientsCount).toBe(0);
  });

  it('POST /__sync_poll stores authoritative state and returns it on subsequent GET', async () => {
    const payload = createStatePayload({ indexh: 3, indexv: 1, indexf: -1, seq: 4, masterId: 'master_http' });
    const post = createMockReqRes('POST', '/__sync_poll?room=test_relay_1', {
      type: 'state',
      payload
    });
    pollHandler(post.req, post.res);
    post.triggerBody();

    const postRes = await post.promise;
    expect(postRes.status).toBe(200);
    const postData = postRes.json();
    expect(postData.ok).toBe(true);
    expect(postData.state).toEqual(payload);

    const get = createMockReqRes('GET', '/__sync_poll?room=test_relay_1');
    pollHandler(get.req, get.res);
    const getRes = await get.promise;
    expect(getRes.json().state).toEqual(payload);
  });

  it('OPTIONS /__sync_poll responds with 204 CORS headers', async () => {
    const opt = createMockReqRes('OPTIONS', '/__sync_poll?room=test_relay_1');
    pollHandler(opt.req, opt.res);
    const res = await opt.promise;
    expect(res.status).toBe(204);
    expect(res.headers['access-control-allow-origin']).toBe('*');
  });
});
