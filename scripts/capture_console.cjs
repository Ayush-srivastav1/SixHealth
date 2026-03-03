const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const messages = [];

  page.on('console', msg => {
    try {
      messages.push({ type: msg.type(), text: msg.text() });
    } catch (e) {
      messages.push({ type: 'error', text: String(msg) });
    }
  });

  page.on('pageerror', err => {
    messages.push({ type: 'pageerror', text: err.message });
  });

  const url = 'http://localhost:5173/article/ms-fatigue-management';
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'networkidle' });
  // Wait for potential hydration logs
  await page.waitForTimeout(1500);

  console.log('--- Browser Console ---');
  messages.forEach(m => console.log(`${m.type}: ${m.text}`));
  console.log('--- End Console ---');

  await browser.close();
})().catch(err => {
  console.error('Script error:', err);
  process.exit(1);
});
