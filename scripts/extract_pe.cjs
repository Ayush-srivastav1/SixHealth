const fs = require('fs');
const vm = require('vm');
const path = 'dist/assets/index-CtdVvXHO.js';
if (!fs.existsSync(path)) { console.error('bundle not found:', path); process.exit(2); }
const src = fs.readFileSync(path,'utf8');
const key = 'const pe=';
const i = src.indexOf(key);
if (i === -1) { console.error('pe not found'); process.exit(1); }
let s = src.indexOf('[', i);
if (s === -1) { console.error('array start not found'); process.exit(1); }
let depth = 0;
let end = -1;
for (let j = s; j < src.length; j++) {
  const ch = src[j];
  if (ch === '[') depth++;
  else if (ch === ']') {
    depth--;
    if (depth === 0) { end = j; break; }
  }
}
if (end === -1) { console.error('array end not found'); process.exit(1); }
const arrSrc = src.slice(s, end+1);
let arr;
try {
  // Evaluate safely
  arr = vm.runInNewContext('(' + arrSrc + ')');
} catch (e) {
  console.error('eval error', e);
  process.exit(3);
}
fs.mkdirSync('tmp', { recursive: true });
fs.writeFileSync('tmp/pe.json', JSON.stringify(arr, null, 2));
console.log('wrote tmp/pe.json with', arr.length, 'entries');
