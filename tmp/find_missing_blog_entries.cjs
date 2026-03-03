const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
const backupPath = path.join(cwd, 'tmp', 'blogData_backup_2026-02-25.ts');
const currentPath = path.join(cwd, 'src', 'data', 'blogData.ts');
const outPath = path.join(cwd, 'tmp', 'missing_blog_entries.ts');
if (!fs.existsSync(backupPath)) {
  console.error('Backup not found at', backupPath); process.exit(1);
}
if (!fs.existsSync(currentPath)) {
  console.error('Current blogData not found at', currentPath); process.exit(1);
}
const backup = fs.readFileSync(backupPath, 'utf8');
const current = fs.readFileSync(currentPath, 'utf8');
function extractObjects(text){
  const start = text.indexOf('export const blogData');
  if (start === -1) return [];
  const arrStart = text.indexOf('[', start);
  const arrEnd = text.lastIndexOf(']');
  const arrText = text.slice(arrStart+1, arrEnd);
  const objs = [];
  let i=0;
  while(i<arrText.length){
    const open = arrText.indexOf('{', i);
    if(open===-1) break;
    let depth=0; let j=open;
    for(; j<arrText.length; j++){
      const ch = arrText[j];
      if(ch==='{') depth++;
      else if(ch==='}'){
        depth--;
        if(depth===0){ j++; break; }
      }
    }
    if(depth!==0) break;
    objs.push(arrText.slice(open,j));
    i=j;
  }
  return objs;
}
function getId(objText){
  const m = objText.match(/\bid:\s*"([^"]+)"/);
  return m? m[1] : null;
}
const backupObjs = extractObjects(backup);
const currentObjs = extractObjects(current);
const backupMap = new Map();
backupObjs.forEach(o=>{ const id=getId(o); if(id) backupMap.set(id,o); });
const currentSet = new Set(currentObjs.map(o=>getId(o)).filter(Boolean));
const missingIds = [];
for(const [id,obj] of backupMap){ if(!currentSet.has(id)){ missingIds.push(id); }}
let outText = `/* Missing blog entries extracted from backup (generated) */\n\nexport const missingBlogEntries = [\n`;
for(const id of missingIds){ outText += backupMap.get(id) + ',\n\n'; }
outText += '\n];\n';
fs.writeFileSync(outPath, outText, 'utf8');
console.log('Found', missingIds.length, 'missing entries');
if(missingIds.length) console.log(missingIds.join(',\n'));
console.log('Wrote', outPath);
process.exit(0);
