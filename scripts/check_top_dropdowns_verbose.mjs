import { chromium } from 'playwright';

const url = process.env.URL || 'http://localhost:5173/';
const browser = await chromium.launch();
const page = await browser.newPage();

const results = { navHtml: null, items: [] };
try {
  // Open the Wellness page where TopDropdownRow is rendered
  const base = url.replace(/\/$/, '');
  await page.goto(base + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800);

  // capture nav HTML
  const nav = await page.$('nav');
  if (nav) {
    results.navHtml = await nav.evaluate((n) => n.innerHTML);
  } else {
    results.navHtml = '<no nav element found>';
  }

  // Target the top dropdown row we added to the Wellness page
  const container = await page.$('#top-dropdown-row');
  if (!container) {
    results.navHtml = results.navHtml + '\n<!-- top-dropdown-row not found -->';
  }

  const labels = ['Wellness', 'Featured', 'Connect'];
  for (const label of labels) {
    // try multiple selector strategies within the top-dropdown-row container first
    let btnByText = null;
    let btnInContainer = null;
    let btnRole = null;
    if (container) {
      btnByText = await container.$(`text=/${label}/i`);
      btnInContainer = await container.$(`:text-is("${label}")`);
      btnRole = await container.$(`button:has-text("${label}")`);
    }
    // fallback to page-wide selectors
    if (!btnByText && !btnInContainer && !btnRole) {
      btnByText = await page.$(`text=/${label}/i`);
      btnInContainer = await page.$(`nav :text-is("${label}")`);
      btnRole = await page.$(`button:has-text("${label}")`);
    }

    // check existence
    const exists = !!(btnByText || btnInContainer || btnRole);
    const foundSelectors = {
      byText: !!btnByText,
      inNav: !!btnInContainer,
      byRoleButton: !!btnRole,
    };

    // try hover the first found element
    let panelFound = false;
    let panelText = null;
    try {
      const el = btnInContainer || btnRole || btnByText;
      if (el) {
        await el.click();
        await page.waitForTimeout(800);
        // look for likely panel headings
        const headings = ['Wellness Topics', 'Health News', 'Find Your Community', 'Wellness', 'Featured Programs'];
        for (const h of headings) {
          const hEl = await page.$(`text=/${h}/i`);
          if (hEl) {
            panelFound = true;
            panelText = h;
            break;
          }
        }
      }
    } catch (e) {
      // ignore
    }

    results.items.push({ label, exists, foundSelectors, panelFound, panelText });
  }
} catch (e) {
  results.error = e.message;
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
