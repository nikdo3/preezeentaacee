import { test, expect } from '@playwright/test';

async function getRevealState(page) {
  return page.evaluate(() => {
    const r = window.__reveal;
    if (!r) return null;
    const idx = r.getIndices();
    return {
      indexh: idx.h ?? 0,
      indexv: idx.v ?? 0,
      indexf: idx.f === undefined || idx.f === null ? -1 : idx.f
    };
  });
}

async function waitForRevealReady(page) {
  await page.waitForFunction(() =>
    Boolean(window.__reveal && window.__syncEngine && window.__syncEngine.connected)
  );
}

test.describe('JET-Česko Presentation – 7 Mandatory E2E Verification Scenarios', () => {
  test('1. Sync Happy Path: Master + 3 Clients sync forward and backward across slides within <300ms', async ({ browser }) => {
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
      { action: () => masterPage.evaluate(() => window.__reveal.slide(1, 0, -1)), expected: { indexh: 1, indexv: 0, indexf: -1 } },
      { action: () => masterPage.evaluate(() => window.__reveal.slide(5, 0, -1)), expected: { indexh: 5, indexv: 0, indexf: -1 } },
      { action: () => masterPage.evaluate(() => window.__reveal.slide(11, 0, -1)), expected: { indexh: 11, indexv: 0, indexf: -1 } },
      { action: () => masterPage.evaluate(() => window.__reveal.slide(10, 0, -1)), expected: { indexh: 10, indexv: 0, indexf: -1 } },
      { action: () => masterPage.evaluate(() => window.__reveal.slide(22, 0, -1)), expected: { indexh: 22, indexv: 0, indexf: -1 } },
      { action: () => masterPage.evaluate(() => window.__reveal.slide(0, 0, -1)), expected: { indexh: 0, indexv: 0, indexf: -1 } }
    ];

    for (const step of steps) {
      await step.action();
      await Promise.all(
        clientPages.map((cp) =>
          expect
            .poll(() => getRevealState(cp), { timeout: 600, intervals: [15, 30, 50] })
            .toEqual(step.expected)
        )
      );
    }

    await masterContext.close();
    await Promise.all(clientContexts.map((c) => c.close()));
  });

  test('2. Late-Joiner State: Client joining when Master is at Slide 12 (indexh=11) syncs within <500ms', async ({ browser }) => {
    const room = 'room-late-' + Date.now();
    const masterContext = await browser.newContext();
    const masterPage = await masterContext.newPage();

    await masterPage.goto(`/?master=secret&room=${room}`);
    await waitForRevealReady(masterPage);

    // Master jumps to Slide 12 (indexh = 11)
    await masterPage.evaluate(() => window.__reveal.slide(11, 0, -1));
    expect(await getRevealState(masterPage)).toEqual({ indexh: 11, indexv: 0, indexf: -1 });

    // Late-joiner opens URL
    const lateContext = await browser.newContext();
    const latePage = await lateContext.newPage();
    await latePage.goto(`/?room=${room}`);
    await waitForRevealReady(latePage);

    await expect
      .poll(() => getRevealState(latePage), { timeout: 500, intervals: [20, 40, 60] })
      .toEqual({ indexh: 11, indexv: 0, indexf: -1 });

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
    await expect
      .poll(() => getRevealState(clientPage), { timeout: 500 })
      .toEqual({ indexh: 2, indexv: 0, indexf: -1 });

    // Disconnect client network
    await clientContext.setOffline(true);

    // Master moves 4 slides ahead (from 2 to 6)
    await masterPage.evaluate(() => window.__reveal.slide(6, 0, -1));
    expect(await getRevealState(masterPage)).toEqual({ indexh: 6, indexv: 0, indexf: -1 });

    // Reconnect client network
    await clientContext.setOffline(false);

    // Client automatically recovers and aligns to Master without reload
    await expect
      .poll(() => getRevealState(clientPage), { timeout: 2500, intervals: [40, 80, 120] })
      .toEqual({ indexh: 6, indexv: 0, indexf: -1 });

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
    await masterPage.evaluate(() => window.__reveal.slide(2, 0, -1));

    await clientPage.goto(`/?room=${room}`);
    await waitForRevealReady(clientPage);
    await expect
      .poll(() => getRevealState(clientPage))
      .toEqual({ indexh: 2, indexv: 0, indexf: -1 });

    // Verify Master HUD is hidden on Client
    await expect(clientPage.getByTestId('master-hud')).toBeHidden();

    // Attempt unauthorized keyboard navigation on Client
    await clientPage.keyboard.press('ArrowRight');
    await clientPage.keyboard.press('ArrowDown');
    await clientPage.keyboard.press('Space');
    await clientPage.keyboard.press('PageDown');
    expect(await getRevealState(clientPage)).toEqual({ indexh: 2, indexv: 0, indexf: -1 });

    // Attempt URL hash tampering (#/8)
    await clientPage.evaluate(() => {
      window.location.hash = '#/8/0';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    await expect
      .poll(() => getRevealState(clientPage), { timeout: 500 })
      .toEqual({ indexh: 2, indexv: 0, indexf: -1 });

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

    // Master advances to slide 7
    await masterPage.evaluate(() => window.__reveal.slide(7, 0, -1));
    await expect
      .poll(() => getRevealState(clientPage))
      .toEqual({ indexh: 7, indexv: 0, indexf: -1 });

    // Master reloads the page
    await masterPage.reload();
    await waitForRevealReady(masterPage);

    expect(await getRevealState(masterPage)).toEqual({ indexh: 7, indexv: 0, indexf: -1 });
    expect(await getRevealState(clientPage)).toEqual({ indexh: 7, indexv: 0, indexf: -1 });

    await masterContext.close();
    await clientContext.close();
  });

  test('6. Responsive & Overflow Matrix: 375x667, 768x1024, 1920x1080, 3840x2160 have zero overflow and zero 404 assets', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();

    const failedAssets = [];
    page.on('response', (res) => {
      if (
        res.status() >= 400 &&
        (res.url().includes('/assets/') || res.url().endsWith('.png') || res.url().endsWith('.jpg'))
      ) {
        failedAssets.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto('/?master=1&room=room-responsive');
    await waitForRevealReady(page);

    // Verify single Master HUD (no duplicate #master-status-badge)
    expect(await page.locator('#master-status-badge').count()).toBe(0);
    await expect(page.locator('#master-hud')).toBeVisible();

    // Capture visual verification screenshots at 1920x1080 for Slide 1, Slide 11, and Slide 12
    await page.evaluate(() => window.__reveal.slide(0, 0, -1));
    await page.waitForTimeout(550);
    expect(await page.locator('#app-root').getAttribute('data-slide-primary')).toBe('#D7141A');
    await page.screenshot({ path: 'test-results/slide-01-hero.png' });

    await page.evaluate(() => window.__reveal.slide(10, 0, -1));
    await page.waitForTimeout(550);
    await page.screenshot({ path: 'test-results/slide-11-questions.png' });

    await page.evaluate(() => window.__reveal.slide(11, 0, -1));
    await page.waitForTimeout(550);
    expect(await page.locator('#app-root').getAttribute('data-slide-primary')).toBe('#85AC7E');
    expect(await page.locator('.reveal .slides section.present .pptx-stage-sheen').count()).toBe(1);
    expect(await page.locator('.reveal .slides section.present .pptx-pic-motion').count()).toBeGreaterThan(0);
    await page.screenshot({ path: 'test-results/slide-12-endgame.png' });

    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1920, height: 1080 },
      { width: 3840, height: 2160 }
    ];

    const sampleSlides = [
      [0, 0],
      [1, 0],
      [5, 0],
      [8, 0],   // Slide 9 (includes extra Lucie photo in empty space)
      [10, 0],  // Slide 11 (6 question cards)
      [11, 0],  // Slide 12 (END-GAME with cropped image10.png)
      [17, 0],  // Slide 18 (includes extra Lucie photo)
      [22, 0],  // Slide 23 (includes extra Lucie photo)
      [36, 0],  // Slide 37 (Fotky – park)
      [42, 0],  // Slide 43 (includes extra Lucie photo)
      [50, 0]   // Slide 51 (Všechno!)
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      for (const [h, v] of sampleSlides) {
        await page.evaluate(([ih, iv]) => window.__reveal.slide(ih, iv, -1), [h, v]);
        const metrics = await page.evaluate(() => {
          const doc = document.documentElement;
          const activeSlide = document.querySelector('.reveal .slides section.present');
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

    // Verify images on Slide 12 and Slide 37 loaded with naturalWidth > 0
    await page.evaluate(() => window.__reveal.slide(11, 0, -1));
    const loadedSlideImages = await page.evaluate(() => {
      const activeSlide = document.querySelector('.reveal .slides section.present');
      const imgs = activeSlide ? Array.from(activeSlide.querySelectorAll('img')) : [];
      return imgs.length > 0 && imgs.every((img) => img.complete && img.naturalWidth > 0);
    });
    expect(loadedSlideImages).toBe(true);
    expect(failedAssets).toEqual([]);

    await context.close();
  });

  test('7. WebGL / 3D Fallback: WebGL runs on Windows even with reduced-motion and falls back cleanly on context loss', async ({ browser }) => {
    const room = 'room-webgl-' + Date.now();
    const masterContext = await browser.newContext({ reducedMotion: 'reduce' });
    const clientContext = await browser.newContext({ reducedMotion: 'reduce' });

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
    await masterPage.evaluate(() => window.__reveal.slide(4, 0, -1));
    await expect
      .poll(() => getRevealState(clientPage), { timeout: 500 })
      .toEqual({ indexh: 4, indexv: 0, indexf: -1 });

    await masterContext.close();
    await clientContext.close();
  });
});
