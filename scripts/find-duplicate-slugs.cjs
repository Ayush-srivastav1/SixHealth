const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

function walk(dir) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) files.push(...walk(p));
    else if (name.endsWith('.ts') || name.endsWith('.js') || name.endsWith('.json')) files.push(p);
  }
  return files;
}

const files = walk(dataDir);
const slugMap = Object.create(null);

const slugRegex = /slug\s*:\s*["']([^"']+)["']/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = slugRegex.exec(content)) !== null) {
    const slug = m[1];
    if (!slugMap[slug]) slugMap[slug] = [];
    const idx = m.index;
    const before = content.slice(0, idx);
    const line = before.split('\n').length;
    slugMap[slug].push({ file: path.relative(process.cwd(), file), line });
  }
}

const duplicates = Object.entries(slugMap).filter(([k, v]) => v.length > 1).map(([slug, occ]) => ({ slug, count: occ.length, occurrences: occ }));

console.log(JSON.stringify({ totalSlugs: Object.keys(slugMap).length, duplicateCount: duplicates.length, duplicates }, null, 2));

if (duplicates.length === 0) process.exit(0);
process.exit(0);
