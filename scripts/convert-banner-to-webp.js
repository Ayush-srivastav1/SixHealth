// Usage:
// 1) npm install sharp
// 2) node scripts/convert-banner-to-webp.js

const path = require('path');
const sharp = require('sharp');

const inPath = path.join(__dirname, '..', 'public', 'banner.svg');
const outPath = path.join(__dirname, '..', 'public', 'banner.webp');

console.log('Converting', inPath, '→', outPath);

sharp(inPath)
  .resize(1920, 300, { fit: 'cover' })
  .webp({ quality: 90 })
  .toFile(outPath)
  .then(() => console.log('Saved', outPath))
  .catch((err) => {
    console.error('Conversion failed:', err.message || err);
    process.exit(1);
  });
