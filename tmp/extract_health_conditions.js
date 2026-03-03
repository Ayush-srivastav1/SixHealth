import fs from 'fs';
import path from 'path';
const src = path.join(process.cwd(), 'src', 'data', 'blogData.ts');
const out = path.join(process.cwd(), 'src', 'data', 'blogData.healthConditions.backup.ts');
const content = fs.readFileSync(src, 'utf8');
const start = content.indexOf('export const blogData');
if (start === -1) {
  console.error('blogData export not found');
  process.exit(1);
}
const arrStart = content.indexOf('[', start);
const arrEnd = content.lastIndexOf(']');
const arrText = content.slice(arrStart + 1, arrEnd);
let objs = [];
let i = 0;
while (i < arrText.length) {
  // find next '{'
  const open = arrText.indexOf('{', i);
  if (open === -1) break;
  let depth = 0;
  let j = open;
  for (; j < arrText.length; j++) {
    const ch = arrText[j];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { j++; break; }
    }
  }
  if (depth !== 0) break;
  const obj = arrText.slice(open, j).trim();
  objs.push(obj);
  i = j;
}
// filter objects that mention "health conditions" (case-insensitive)
const re = /health\W*conditions/i;
const matches = objs.filter(o => re.test(o));
// build output file: include interfaces header from original
const headerMatch = content.slice(0, start);
const header = headerMatch.split('\n').slice(0, 200).join('\n');
const outContent = `${header}\n\nexport const blogData_healthConditions_backup = [\n${matches.join(',\n\n')}\n];\n`;
fs.writeFileSync(out, outContent, 'utf8');
// report duplicates by id
const ids = matches.map(m => {
  const idMatch = /id:\s*"([^"]+)"/.exec(m);
  return idMatch ? idMatch[1] : null;
}).filter(Boolean);
const dup = ids.filter((v,i,a) => a.indexOf(v)!==i);
console.log('Found', matches.length, 'health-condition articles');
if (dup.length) console.log('Duplicate ids:', Array.from(new Set(dup)).join(', '));
else console.log('No duplicate ids');
console.log('Wrote', out);
