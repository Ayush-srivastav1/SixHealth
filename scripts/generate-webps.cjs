const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.resolve(__dirname, '../public/images/articles');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = [
  'stages-of-breast-cancer-hero.webp',
  'radiation-therapy-guide-hero.webp',
  'lymphedema-care-hero.webp',
  'ibd-hero.webp',
  'skincare-moisturizer.webp',
  'skincare-cleanser.webp',
  'skincare-sunscreen.webp',
  'skincare-serums.webp'
];

async function makeSVG(title, w = 1600, h = 900, style = {}) {
  const bg = style.bg || '#e6f4f1';
  const fg = style.fg || '#0f172a';
  const accent = style.accent || '#60a5fa';
  const lines = title.split(/\s+/).slice(0,8).join(' ');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>\n  <rect width='100%' height='100%' fill='${bg}' />\n  <rect x='40' y='40' width='120' height='120' rx='18' fill='${accent}' opacity='0.9'/>\n  <g font-family='Arial, Helvetica, sans-serif' text-anchor='start'>\n    <text x='200' y='160' font-size='48' fill='${fg}' font-weight='700'>${escapeXml(lines)}</text>\n  </g>\n</svg>`;
}

function escapeXml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

async function generate() {
  for (const f of files) {
    const title = f.replace(/-|\.webp/g, ' ').replace('webp','').replace(/\s+/g,' ').trim();
    const svg = await makeSVG(capitalize(title));
    const out = path.join(outDir, f);
    try {
      await sharp(Buffer.from(svg))
        .resize(1600, 900, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(out);
      console.log('WROTE', out);
    } catch (err) {
      console.error('ERROR writing', out, err);
    }
  }
}

function capitalize(s){ return s.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '); }

generate();
