const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'http://localhost:5173/article/ms-fatigue-management';
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();
  const fs = require('fs');
  const messages = [];

  const cssResponses = new Set();

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

  page.on('response', async res => {
    try {
      const url = res.url();
      const ct = (res.headers() || {})['content-type'] || '';
      if (ct.includes('text/css') || url.endsWith('.css')) {
        cssResponses.add(url);
      }
    } catch (e) {
      // ignore
    }
  });

  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);

  // collect inline <style> blocks and linked stylesheets from final rendered DOM
  const pageHtml = await page.content();
  const inlineStyleMatches = Array.from(pageHtml.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)).map(m => m[1].trim());
  const linkedStyles = await page.evaluate(() => Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href));

  // write collected styles to workspace tmp file for later parsing
  try {
    const out = { linkedStyles, inlineStyleMatches: inlineStyleMatches.slice(0, 50) };
    const outDir = 'tmp';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(`${outDir}/healthline_styles.json`, JSON.stringify(out, null, 2));
  } catch (e) {
    // ignore file write errors
  }

  console.log('--- Browser Console ---');
  messages.forEach(m => console.log(`${m.type}: ${m.text}`));
  console.log('--- End Console ---');

  console.log('--- Detected Stylesheet URLs ---');
  if (cssResponses.size === 0) {
    console.log('(none detected via network responses)');
  }
  cssResponses.forEach(u => console.log(u));
  console.log('--- Inline <style> blocks count:', inlineStyleMatches.length, '---');
  if (inlineStyleMatches.length > 0) {
    console.log('First inline block (truncated 1000 chars):');
    console.log(inlineStyleMatches[0].slice(0, 1000));
  }
  console.log('--- Linked <link rel="stylesheet"> hrefs (from DOM) ---');
  linkedStyles.forEach(u => console.log(u));

  await context.close();
  await browser.close();
})().catch(err => {
  console.error('Script error:', err);
  process.exit(1);
});
