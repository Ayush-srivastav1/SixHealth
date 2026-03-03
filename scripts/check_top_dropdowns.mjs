import { chromium } from 'playwright';

const url = process.env.URL || 'http://localhost:5173/';
const browser = await chromium.launch();
const page = await browser.newPage();

const results = [];
try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(500);

  const buttons = [
    { label: 'Wellness', expectText: 'Wellness Topics' },
    { label: 'Features', expectText: 'Health News' },
    { label: 'Connect', expectText: 'Find Your Community' },
  ];

  for (const btn of buttons) {
    const el = await page.$(`text="${btn.label}"`);
    if (!el) {
      results.push({ button: btn.label, found: false, reason: 'button not found' });
      continue;
    }
    await el.hover();
    // wait for panel
    try {
      await page.waitForSelector(`text="${btn.expectText}"`, { timeout: 2000 });
      results.push({ button: btn.label, found: true });
    } catch (e) {
      results.push({ button: btn.label, found: false, reason: 'panel missing or slow' });
    }
    await page.waitForTimeout(300);
  }
} catch (e) {
  results.push({ error: e.message });
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
