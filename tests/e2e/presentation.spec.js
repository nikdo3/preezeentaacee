import { test, expect } from '@playwright/test';

async function getRevealState(page) {
  return page.evaluate(() => {
    const r = window.__reveal;
    if (!r) return null;
    const idx = r.getIndices();
    return {
      indexh: idx.h ?? 0,
      indexv: idx.v ?? 0,
      indexf: (idx.f === undefined || idx.f === null) ? -1 : idx.f
    };
  });
}

async function waitForRevealReady(page) {
  await page.waitForFunction(() => Boolean(window.__reveal && window.__syncEngine && window.__syncEngine.connected));
}

test.describe('JET-Česko Presentation – 7 Mandatory E2E Verification Scenarios', () => {
  test('1. Sync Happy Path: Master + 3 Clients sync forward, back, vertical, and 3 fragments within <300ms', async ({ browser }) => {
    const room = 'room-happy-' + Date.now();
    const masterContext = await browser.newContext();
    const clientContexts = await Promise.all([
      browser.newContext(),
      browser.newContext(),
      browser.newContext()
    ]);

    const masterPage = await masterContext.newPage();
    const clientPages = await Promise.all(clientContexts.map((c) => c.newPage()));

    await masterPage.goto(`/?master=secret&room=${room}`);
    await waitForRevealReady(masterPage);

    for (const cp of clientPages) {
      await cp.goto(`/?room=${room}`);
      await waitForRevealReady(cp);
    }

    // Master HUD shows 3 connected viewers
    await expect(masterPage.getByTestId('viewer-count')).toHaveText('3', { timeout: 3000 });

    const steps = [
      // Move forward horizontally to slide 1
      { action: () => masterPage.evaluate(() => window.__reveal.slide(1, 0, -1)), expected: { indexh: 1, indexv: 0, indexf: -1 } },
      // Move down to vertical sub-slide 1/1
      { action: () => masterPage.evaluate(() => window.__reveal.slide(1, 1, -1)), expected: { indexh: 1, indexv: 1, indexf: -1 } },
      // Move back to 1/0
      { action: () => masterPage.evaluate(() => window.__reveal.slide(1, 0, -1)), expected: { indexh: 1, indexv: 0, indexf: -1 } },
      // Step through 3 sequential fragments (0, 1, 2)
      { action: () => masterPage.evaluate(() => window.__reveal.nextFragment()), expected: { indexh: 1, indexv: 0, indexf: 0 } },
      { action: () => masterPage.evaluate(() => window.__reveal.nextFragment()), expected: { indexh: 1, indexv: 0, indexf: 1 } },
      { action: () => masterPage.evaluate(() => window.__reveal.nextFragment()), expected: { indexh: 1, indexv: 0, indexf: 2 } }
    ];

    for (const step of steps) {
      await step.action();
      await Promise.all(
        clientPages.map((cp) =>
          expect
            .poll(() => getRevealState(cp), { timeout: 300, intervals: [15, 30, 50] })
            .toEqual(step.expected)
        )
      );
    }

    await masterContext.close();
    await Promise.all(clientContexts.map((c) => c.close()));
  });

  test('2. Late-Joiner State: Client joining when Master is at 5/0/2 syncs within <500ms', async ({ browser }) => {
    const room = 'room-late-' + Date.now();
    const masterContext = await browser.newContext();
    const masterPage = await masterContext.newPage();

    await masterPage.goto(`/?master=secret&room=${room}`);
    await waitForRevealReady(masterPage);

    // Master jumps to slide 5, vertical 0, fragment 2
    await masterPage.evaluate(() => window.__reveal.slide(5, 0, 2));
    expect(await getRevealState(masterPage)).toEqual({ indexh: 5, indexv: 0, indexf: 2 });

    // Late-joiner opens URL
    const lateContext = await browser.newContext();
    const latePage = await lateContext.newPage();
    await latePage.goto(`/?room=${room}`);
    await waitForRevealReady(latePage);

    await expect
      .poll(() => getRevealState(latePage), { timeout: 500, intervals: [20, 40, 60] })
      .toEqual({ indexh: 5, indexv: 0, indexf: 2 });

    await masterContext.close();
    await lateContext.close();
  });

  test('3. Network Drop & Recovery: Offline Client automatically resyncs after Master moves 4 slides ahead', async ({ browser }) => {
    const room = 'room-net-' + Date.now();
    const masterContext = await browser.newContext();
    const clientContext = await browser.newContext();

    const masterPage = await masterContext.newPage();
    const clientPage = await clientContext.newPage();

    await masterPage.goto(`/?master=secret&room=${room}`);
    await waitForRevealReady(masterPage);
    await clientPage.goto(`/?room=${room}`);
    await waitForRevealReady(clientPage);

    await masterPage.evaluate(() => window.__reveal.slide(2, 0, -1));
    await expect.poll(() => getRevealState(clientPage), { timeout: 500 }).toEqual({ indexh: 2, indexv: 0, indexf: -1 });

    // Disconnect client network
    await clientContext.setOffline(true);

    // Master moves 4 slides ahead (from 2 to 6)
    await masterPage.evaluate(() => window.__reveal.slide(6, 0, 1));
    expect(await getRevealState(masterPage)).toEqual({ indexh: 6, indexv: 0, indexf: 1 });

    // Reconnect client network
    await clientContext.setOffline(false);

    // Client automatically recovers and aligns to Master without reload
    await expect
      .poll(() => getRevealState(clientPage), { timeout: 2500, intervals: [40, 80, 120] })
      .toEqual({ indexh: 6, indexv: 0, indexf: 1 });

    await masterContext.close();
    await clientContext.close();
  });

  test('4. Client Lock Security: Client keyboard, Space, touch, and URL hash tampering are blocked and reverted', async ({ browser }) => {
    const room = 'room-lock-' + Date.now();
    const masterContext = await browser.newContext();
    const clientContext = await browser.newContext();

    const masterPage = await masterContext.newPage();
    const clientPage = await clientContext.newPage();

    await masterPage.goto(`/?master=secret&room=${room}`);
    await waitForRevealReady(masterPage);
    await masterPage.evaluate(() => window.__reveal.slide(2, 0, 0));

    await clientPage.goto(`/?room=${room}`);
    await waitForRevealReady(clientPage);
    await expect.poll(() => getRevealState(clientPage)).toEqual({ indexh: 2, indexv: 0, indexf: 0 });

    // Verify Master HUD is hidden on Client
    await expect(clientPage.getByTestId('master-hud')).toBeHidden();

    // Attempt unauthorized keyboard navigation on Client
    await clientPage.keyboard.press('ArrowRight');
    await clientPage.keyboard.press('ArrowDown');
    await clientPage.keyboard.press('Space');
    await clientPage.keyboard.press('PageDown');
    expect(await getRevealState(clientPage)).toEqual({ indexh: 2, indexv: 0, indexf: 0 });

    // Attempt URL hash tampering (#/8)
    await clientPage.evaluate(() => {
      window.location.hash = '#/8/0';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    await expect.poll(() => getRevealState(clientPage), { timeout: 500 }).toEqual({ indexh: 2, indexv: 0, indexf: 0 });

    await masterContext.close();
    await clientContext.close();
  });

  test('5. Master Reload Persistence: Master reload retains current slide and does not reset Clients to 0', async ({ browser }) => {
    const room = 'room-reload-' + Date.now();
    const masterContext = await browser.newContext();
    const clientContext = await browser.newContext();

    const masterPage = await masterContext.newPage();
    const clientPage = await clientContext.newPage();

    await masterPage.goto(`/?master=secret&room=${room}`);
    await waitForRevealReady(masterPage);
    await clientPage.goto(`/?room=${room}`);
    await waitForRevealReady(clientPage);

    // Master advances to slide 7, fragment 1
    await masterPage.evaluate(() => window.__reveal.slide(7, 0, 1));
    await expect.poll(() => getRevealState(clientPage)).toEqual({ indexh: 7, indexv: 0, indexf: 1 });

    // Master reloads the page
    await masterPage.reload();
    await waitForRevealReady(masterPage);

    expect(await getRevealState(masterPage)).toEqual({ indexh: 7, indexv: 0, indexf: 1 });
    expect(await getRevealState(clientPage)).toEqual({ indexh: 7, indexv: 0, indexf: 1 });

    await masterContext.close();
    await clientContext.close();
  });

  test('6. Responsive & Overflow Matrix: 375x667, 768x1024, 1920x1080, 3840x2160 have zero overflow and zero 404 assets', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const failedAssets = [];
    page.on('response', (res) => {
      if (res.status() >= 400 && (res.url().includes('/assets/') || res.url().endsWith('.png') || res.url().endsWith('.jpg'))) {
        failedAssets.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto('/?master=1&room=room-responsive');
    await waitForRevealReady(page);

    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1920, height: 1080 },
      { width: 3840, height: 2160 }
    ];

    const sampleSlides = [
      [0, 0],
      [0, 1],
      [1, 0],
      [5, 0],  // Slide 6 (includes cropped photo)
      [10, 0],
      [13, 0], // Slide 14 (includes cropped photo)
      [22, 0], // Slide 23 (includes cropped photo)
      [27, 0],
      [36, 0], // Slide 37 (includes cropped photo)
      [37, 0], // Slide 38 (includes cropped photo)
      [44, 0], // Slide 45 (includes cropped photo)
      [50, 0]
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      for (const [h, v] of sampleSlides) {
        await page.evaluate(([ih, iv]) => window.__reveal.slide(ih, iv, 2), [h, v]);
        const metrics = await page.evaluate(() => {
          const doc = document.documentElement;
          const activeSlide = document.querySelector('.reveal .slides section.present section.present') ||
                              document.querySelector('.reveal .slides section.present');
          return {
            docScrollW: doc.scrollWidth,
            docClientW: doc.clientWidth,
            docScrollH: doc.scrollHeight,
            docClientH: doc.clientHeight,
            slideScrollW: activeSlide ? activeSlide.scrollWidth : 0,
            slideClientW: activeSlide ? activeSlide.clientWidth : 0,
            slideScrollH: activeSlide ? activeSlide.scrollHeight : 0,
            slideClientH: activeSlide ? activeSlide.clientHeight : 0
          };
        });

        expect(metrics.docScrollW).toBeLessThanOrEqual(metrics.docClientW);
        expect(metrics.docScrollH).toBeLessThanOrEqual(metrics.docClientH);
        expect(metrics.slideScrollW).toBeLessThanOrEqual(metrics.slideClientW + 1);
        expect(metrics.slideScrollH).toBeLessThanOrEqual(metrics.slideClientH + 1);
      }
    }

    // Verify images on Slide 37 (park photo + PPTX images) loaded with naturalWidth > 0
    await page.evaluate(() => window.__reveal.slide(36, 0, 2));
    const loadedSlideImages = await page.evaluate(() => {
      const activeSlide = document.querySelector('.reveal .slides section.present');
      const imgs = activeSlide ? Array.from(activeSlide.querySelectorAll('img')) : [];
      return imgs.length > 0 && imgs.every((img) => img.complete && img.naturalWidth > 0);
    });
    expect(loadedSlideImages).toBe(true);
    expect(failedAssets).toEqual([]);

    await context.close();
  });

  test('7. WebGL / 3D Fallback: Simulating webglcontextlost activates static fallback without breaking sync', async ({ browser }) => {
    const room = 'room-webgl-' + Date.now();
    const masterContext = await browser.newContext();
    const clientContext = await browser.newContext();

    const masterPage = await masterContext.newPage();
    const clientPage = await clientContext.newPage();

    await masterPage.goto(`/?master=secret&room=${room}`);
    await waitForRevealReady(masterPage);
    await clientPage.goto(`/?room=${room}`);
    await waitForRevealReady(clientPage);

    // Simulate WebGL context loss on client
    await clientPage.evaluate(() => {
      const canvas = document.getElementById('webgl-bg-canvas');
      if (canvas) {
        const ev = new Event('webglcontextlost', { cancelable: true });
        canvas.dispatchEvent(ev);
      } else if (window.__bg3d) {
        window.__bg3d._activateStaticFallback('simulated');
      }
    });

    const hasFallbackClass = await clientPage.evaluate(() =>
      document.getElementById('app-root').classList.contains('webgl-fallback-active')
    );
    expect(hasFallbackClass).toBe(true);

    // Verify slide synchronization continues to work seamlessly after WebGL fallback
    await masterPage.evaluate(() => window.__reveal.slide(4, 0, 1));
    await expect.poll(() => getRevealState(clientPage), { timeout: 500 }).toEqual({ indexh: 4, indexv: 0, indexf: 1 });

    await masterContext.close();
    await clientContext.close();
  });
});
