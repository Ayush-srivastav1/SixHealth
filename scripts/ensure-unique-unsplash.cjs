#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readImageLibrary(libPath) {
  const txt = fs.readFileSync(libPath, 'utf8');
  const urls = [];
  const re = /https:\/\/images\.unsplash\.com\/[\w\-\./?=&%]+fm=webp/g;
  let m;
  while ((m = re.exec(txt))) urls.push(m[0]);
  // fallback: extract any images.unsplash URL even if fm=webp missing
  if (urls.length === 0) {
    const re2 = /https:\/\/images\.unsplash\.com\/[\w\-\./?=&%]+/g;
    while ((m = re2.exec(txt))) urls.push(m[0] + (m[0].includes('fm=webp') ? '' : (m[0].includes('?') ? '&fm=webp' : '?fm=webp')));
  }
  return Array.from(new Set(urls));
}

function walk(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', 'public'].includes(e.name)) continue;
      walk(p, fileList);
    } else if (/\.(tsx|ts|jsx|js|html)$/.test(e.name)) {
      fileList.push(p);
    }
  }
  return fileList;
}

function ensureWebpAndW(url) {
  if (!url.includes('images.unsplash.com')) return url;
  // ensure fm=webp and w param (default 1200)
  let [base, query] = url.split('?');
  const params = new URLSearchParams(query || '');
  if (!params.has('fm')) params.set('fm', 'webp');
  if (!params.has('w')) params.set('w', '1200');
  return base + '?' + params.toString();
}

function nextUrl(pool, idx) {
  // return url and advance index (wrap)
  const url = pool[idx % pool.length];
  // make unique if needed by appending unique param
  const uniqueUrl = url + (url.includes('?') ? `&unique=${idx}` : `?unique=${idx}`);
  return ensureWebpAndW(uniqueUrl);
}

function replaceInFile(filePath, pool, startIdx) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  // patterns: src="..." and src='...' and heroImage="..." and image: "..."
  const patterns = [
    /src=\"([^\"]*?(?:images\.unsplash\.com|\/images\/)[^\"]*)\"/g,
    /src=\'([^\']*?(?:images\.unsplash\.com|\/images\/)[^\']*)\'/g,
    /heroImage\s*[:=]\s*\"([^\"]*?)\"/g,
    /heroImage\s*[:=]\s*\'([^\']*?)\'/g,
    /image\s*[:=]\s*\"([^\"]*?)\"/g,
    /image\s*[:=]\s*\'([^\']*?)\'/g,
    /img:\s*\"([^\"]*?)\"/g,
    /img:\s*\'([^\']*?)\'/g
  ];

  let idx = startIdx;
  for (const re of patterns) {
    content = content.replace(re, (m, g1) => {
      // skip if the match already points to images.unsplash.com
      const assigned = nextUrl(pool, idx);
      idx += 1;
      changed = true;
      // preserve surrounding syntax
      return m.replace(g1, assigned);
    });
  }

  if (changed) fs.writeFileSync(filePath, content, 'utf8');
  return idx - startIdx; // number replacements
}

(function main(){
  const repoRoot = path.resolve(__dirname, '..');
  const libPath = path.join(repoRoot, 'src', 'data', 'imageLibrary.ts');
  if (!fs.existsSync(libPath)) {
    console.error('imageLibrary.ts not found at', libPath);
    process.exit(1);
  }
  const pool = readImageLibrary(libPath);
  if (pool.length === 0) {
    console.error('No Unsplash URLs found in imageLibrary.ts');
    process.exit(1);
  }
  console.log('Found', pool.length, 'Unsplash URLs in imageLibrary');

  const files = walk(repoRoot);
  console.log('Scanning', files.length, 'files...');
  let totalReplacements = 0;
  let idx = 0;
  for (const f of files) {
    if (f.endsWith('src/data/imageLibrary.ts')) continue;
    try {
      const replaced = replaceInFile(f, pool, idx);
      if (replaced > 0) {
        console.log('Updated', f, '->', replaced, 'images');
        totalReplacements += replaced;
        idx += replaced;
      }
    } catch (err) {
      console.error('Error processing', f, err.message);
    }
  }

  console.log('Total replacements:', totalReplacements);
})();
