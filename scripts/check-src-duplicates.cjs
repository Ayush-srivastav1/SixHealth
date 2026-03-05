#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, files=[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git'].includes(e.name)) continue;
      walk(p, files);
    } else if (/\.(tsx|ts|jsx|js|html|md|json)$/.test(e.name)) files.push(p);
  }
  return files;
}

function extractKeys(text) {
  const re = /https:\/\/images\.unsplash\.com\/([^"'\s>\)]+)/g;
  const keys = [];
  let m;
  while ((m = re.exec(text))) {
    const pathPart = m[1].split(/[?&]/)[0];
    keys.push(pathPart);
  }
  return keys;
}

const root = path.resolve(__dirname, '..', 'src');
if (!fs.existsSync(root)) { console.error('No src folder'); process.exit(1); }
const files = walk(root);
const map = new Map();
for (const f of files) {
  try {
    const txt = fs.readFileSync(f, 'utf8');
    const keys = extractKeys(txt);
    for (const k of keys) {
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(f);
    }
  } catch (e) {}
}
const duplicates = [];
for (const [k, arr] of map.entries()) if (arr.length>1) duplicates.push({key:k,count:arr.length,files:arr.slice(0,10)});
console.log('Total unique keys in src:', map.size);
console.log('Duplicate keys in src:', duplicates.length);
if (duplicates.length>0) console.log('Sample duplicates:\n', JSON.stringify(duplicates.slice(0,20), null, 2));
else console.log('No duplicates in src files');
