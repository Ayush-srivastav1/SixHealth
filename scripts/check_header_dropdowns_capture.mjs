import { chromium } from 'playwright';
import fs from 'fs';

const url = process.env.URL || 'http://localhost:5173';
const outDir = './tmp-dropdown-check';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = [];

  try {
    await page.goto(url + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    const labels = [
      { label: 'Wellness', expect: /Wellness Topics|Product Reviews/i },
      { label: 'Featured', expect: /Health News|Lessons/i },
      { label: 'Connect', expect: /Find Your Community/i },
    ];

    for (const item of labels) {
      const { label } = item;
      const btn = await page.locator(`button:has-text("${label}")`).first();
      const found = await btn.count() > 0;
      const entry = { label, found, viewportHtml: null, matchedHeading: null };

      if (found) {
        await btn.click();
        await page.waitForTimeout(600);

        // capture viewport element if present
        const vp = await page.locator('.origin-top-left').first();
        if (await vp.count() > 0) {
          entry.viewportHtml = await vp.innerHTML();
        } else {
          // fallback: capture whole page body
          entry.viewportHtml = await page.evaluate(() => document.body.innerText.slice(0, 2000));
        }

        // check for expected heading text
        const matches = await page.locator(`text=/${item.expect.source || item.expect}/i`).first();
        if (await matches.count() > 0) entry.matchedHeading = (await matches.innerText()).slice(0, 200);

        // screenshot
        const safeLabel = label.toLowerCase();
        await page.screenshot({ path: `${outDir}/${safeLabel}.png`, fullPage: false });

        // close menu by clicking elsewhere
        await page.click('body', { position: { x: 10, y: 10 } }).catch(() => {});
        await page.waitForTimeout(200);
      }

      results.push(entry);
    }

    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
