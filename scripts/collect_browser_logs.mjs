import { chromium } from 'playwright';

const url = process.env.URL || 'http://localhost:5173/';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const logs = [];

page.on('console', (msg) => {
  try {
    logs.push({ type: 'console', level: msg.type(), text: msg.text() });
  } catch (e) {
    logs.push({ type: 'console', error: String(e) });
  }
});

page.on('pageerror', (err) => {
  logs.push({ type: 'pageerror', message: err.message, stack: err.stack });
});

page.on('requestfailed', (req) => {
  logs.push({ type: 'requestfailed', url: req.url(), failure: req.failure()?.errorText || null });
});

page.on('response', async (res) => {
  try {
    logs.push({ type: 'response', url: res.url(), status: res.status(), ok: res.ok() });
  } catch (e) {
    logs.push({ type: 'response', error: String(e) });
  }
});

console.log('Navigating to', url);
try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
} catch (e) {
  logs.push({ type: 'navigationError', message: e.message });
}

// Interact briefly to trigger hover menus
try {
  await page.waitForTimeout(500);
  // hover main nav items if present
  await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('nav a, nav button'));
    items.slice(0, 6).forEach((el, i) => {
      const ev = new MouseEvent('mouseover', { bubbles: true, cancelable: true });
      el.dispatchEvent(ev);
    });
  });
  await page.waitForTimeout(1000);
} catch (e) {
  logs.push({ type: 'interactionError', message: e.message });
}

// Wait a little for any async logs
await page.waitForTimeout(1000);

console.log(JSON.stringify(logs, null, 2));
await browser.close();
