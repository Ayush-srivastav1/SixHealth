import puppeteer from 'puppeteer';

async function inspect(url) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const consoleMessages = [];
  page.on('console', msg => consoleMessages.push({ type: msg.type(), text: msg.text() }));
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (e) {
    console.error('NAV_ERROR', url, e.message);
    await browser.close();
    return { url, error: e.message };
  }

  // try to capture SubCategoryPage debug info from console messages
  const debugLogs = consoleMessages.filter(m => typeof m.text === 'string' && m.text.includes('SubCategoryPage match info'));

  // capture main content snippet
  const snippet = await page.evaluate(() => {
    const main = document.querySelector('.site-container') || document.querySelector('main') || document.body;
    return main ? main.innerText.slice(0, 1000) : '';
  });

  await browser.close();
  return { url, consoleMessages, debugLogs, snippet };
}

(async () => {
  const topic = 'http://localhost:5173/mental-health/anxiety-disorders';
  const canonical = 'http://localhost:5173/mental-health/article/anxiety-disorders';

  console.log('Inspecting topic page:', topic);
  const t = await inspect(topic);
  console.log('\n=== TOPIC RESULT ===');
  console.log(JSON.stringify(t, null, 2));

  console.log('\nInspecting canonical article page:', canonical);
  const c = await inspect(canonical);
  console.log('\n=== CANONICAL RESULT ===');
  console.log(JSON.stringify(c, null, 2));
})();
