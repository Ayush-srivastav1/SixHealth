const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'http://localhost:5175/breast-cancer/article/what-is-breast-cancer';
  const outDir = process.argv[3] || 'C:\\temp';
  const outFile = path.join(outDir, 'breast_dom.html');

  try {
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait a short time for any client-rendered content to settle
    await page.waitForTimeout(500);

    // Grab the full rendered HTML
    const html = await page.evaluate(() => document.documentElement.outerHTML);
    fs.writeFileSync(outFile, html, { encoding: 'utf8' });
    console.log('WROTE', outFile);

    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(2);
  }
})();
