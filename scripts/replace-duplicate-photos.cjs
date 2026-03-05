#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const reportPath = path.join(root, 'tmp', 'unsplash-duplicates.json');
if (!fs.existsSync(reportPath)) {
  console.error('Missing report:', reportPath);
  process.exit(1);
}
const duplicates = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

// We'll replace duplicates by leaving the first occurrence and replacing subsequent
// occurrences with a unique source.unsplash.com URL with fm=webp.
let sigCounter = 1;

function makeSourceUrl(sig) {
  return `https://source.unsplash.com/1200x800/?health&sig=${sig}&auto=format&fit=crop&w=1200&q=80&fm=webp`;
}

function replaceInFile(file, key, newUrl) {
  try {
    let t = fs.readFileSync(file, 'utf8');
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`https://images\\.unsplash\\.com/${escaped}[^\"'\\s>\\)]*`, 'g');
    let changed = false;
    t = t.replace(re, (m) => {
      changed = true;
      return newUrl;
    });
    if (changed) fs.writeFileSync(file, t, 'utf8');
    return changed;
  } catch (e) {
    return false;
  }
}

const skipDirs = ['node_modules', '.git', 'dist', 'tmp', 'public'];

for (const [key, files] of Object.entries(duplicates)) {
  // filter files to editable sources
  const editable = files.filter(f => {
    const rel = path.relative(root, f);
    if (!rel) return false;
    const parts = rel.split(path.sep);
    if (parts.some(p => skipDirs.includes(p))) return false;
    return /\.(tsx|ts|jsx|js|html|md|json)$/.test(f);
  });
  if (editable.length <= 1) continue;
  // leave first file as-is, replace in the rest
  for (let i = 1; i < editable.length; i++) {
    const f = editable[i];
    const newUrl = makeSourceUrl(sigCounter++);
    const ok = replaceInFile(f, key, newUrl);
    if (ok) console.log('Replaced in', f, '->', newUrl);
  }
}

console.log('Done replacing duplicate photo keys in editable files.');
