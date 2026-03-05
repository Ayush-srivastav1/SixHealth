#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, list=[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', 'public'].includes(e.name)) continue;
      walk(p, list);
    } else if (/\.(tsx|ts|jsx|js|html|json|md)$/.test(e.name)) list.push(p);
  }
  return list;
}

function extractUnsplashKeys(text) {
  const keys = [];
  const re = /https:\/\/images\.unsplash\.com\/([^"'\s>\)]+)/g;
  let m;
  while ((m = re.exec(text))) {
    const raw = m[1];
    // normalize by stripping query string
    const [pathPart] = raw.split(/[?&]/);
    keys.push(pathPart);
  }
  // source.unsplash.com
  const re2 = /https:\/\/source\.unsplash\.com\/([^"'\s>\)]+)/g;
  while ((m = re2.exec(text))) {
    const raw = m[1];
    keys.push('source:' + raw.split(/[?&]/)[0]);
  }
  return keys;
}

function main(){
  const root = path.resolve(__dirname, '..');
  const files = walk(root);
  const map = new Map();
  for (const f of files) {
    try {
      const txt = fs.readFileSync(f, 'utf8');
      const keys = extractUnsplashKeys(txt);
      for (const k of keys) {
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(f);
      }
    } catch (e) {
      // ignore binary or unreadable
    }
  }

  const duplicates = {};
  for (const [k, filesArr] of map.entries()) {
    if (filesArr.length > 1) duplicates[k] = filesArr;
  }

  const outDir = path.join(root, 'tmp');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const reportJson = path.join(outDir, 'unsplash-duplicates.json');
  const reportTxt = path.join(outDir, 'unsplash-duplicates.txt');
  fs.writeFileSync(reportJson, JSON.stringify(duplicates, null, 2), 'utf8');
  const lines = [];
  lines.push('Unsplash duplicate photo keys report');
  lines.push('Total unique keys: ' + map.size);
  lines.push('Duplicate keys: ' + Object.keys(duplicates).length);
  lines.push('');
  for (const k of Object.keys(duplicates)) {
    lines.push(k + '\n  ' + duplicates[k].slice(0,10).join('\n  ') + '\n');
  }
  fs.writeFileSync(reportTxt, lines.join('\n'), 'utf8');
  console.log('WROTE', reportJson);
  console.log('WROTE', reportTxt);
}

main();
