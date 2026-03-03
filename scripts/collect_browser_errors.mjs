import { chromium } from 'playwright';

const url = process.env.URL || 'http://localhost:5173/';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const errors = [];

page.on('console', (msg) => {
  try {
    const level = msg.type();
    if (level === 'error' || level === 'warning') {
      errors.push({ type: 'console', level, text: msg.text() });
    }
  } catch (e) {
    // ignore
  }
});

page.on('pageerror', (err) => {
  errors.push({ type: 'pageerror', message: err.message, stack: err.stack });
});

page.on('requestfailed', (req) => {
  errors.push({ type: 'requestfailed', url: req.url(), failure: req.failure()?.errorText || null });
});

page.on('response', (res) => {
  if (res.status() >= 400) {
    errors.push({ type: 'responseError', url: res.url(), status: res.status() });
  }
});

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
} catch (e) {
  errors.push({ type: 'navigationError', message: e.message });
}

// trigger hover on first few nav items
try {
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('nav a, nav button'));
    items.slice(0, 6).forEach((el) => el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })));
  });
  await page.waitForTimeout(1200);
} catch (e) {
  errors.push({ type: 'interactionError', message: e.message });
}

console.log(JSON.stringify(errors, null, 2));
await browser.close();
