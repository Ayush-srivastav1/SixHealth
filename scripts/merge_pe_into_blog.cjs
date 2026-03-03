const fs = require('fs');
const path = 'tmp/pe.json';
const blogPath = 'src/data/blogData.ts';
if (!fs.existsSync(path)) { console.error('pe.json missing'); process.exit(1); }
if (!fs.existsSync(blogPath)) { console.error('blogData.ts missing'); process.exit(2); }
const pe = JSON.parse(fs.readFileSync(path,'utf8'));
const blogSrc = fs.readFileSync(blogPath,'utf8');
// extract existing slugs
const slugRe = /slug\s*:\s*"([^"]+)"/g;
const existing = new Set();
let m;
while ((m = slugRe.exec(blogSrc)) !== null) existing.add(m[1]);
// pick entries to merge
const candidates = pe.filter(e=> (e.category==="conditions"||e.category==='copd') );
const missing = candidates.filter(e=> !existing.has(e.slug));
console.log('found', pe.length, 'pe entries; candidates', candidates.length, 'missing', missing.length);
if (missing.length===0) process.exit(0);
// prepare TS fragments
function toTs(obj){
  const parts = [];
  parts.push('  {');
  if (obj.id) parts.push(`    id: "${obj.id}",`);
  if (obj.title) parts.push(`    title: "${obj.title.replace(/"/g,'\\"')}",`);
  if (obj.slug) parts.push(`    slug: "${obj.slug}",`);
  if (obj.category) parts.push(`    category: "${obj.category}",`);
  if (obj.categorySlug) parts.push(`    categorySlug: "${obj.categorySlug}",`);
  if (obj.excerpt) parts.push(`    excerpt: "${obj.excerpt.replace(/"/g,'\\"')}",`);
  if (obj.imageUrl) parts.push(`    imageUrl: "${obj.imageUrl}",`);
  if (obj.author) parts.push(`    author: "${obj.author}",`);
  if (obj.authorRole) parts.push(`    authorRole: "${obj.authorRole}",`);
  if (obj.reviewer) parts.push(`    reviewer: "${obj.reviewer}",`);
  if (obj.reviewerRole) parts.push(`    reviewerRole: "${obj.reviewerRole}",`);
  if (obj.readTime) parts.push(`    readTime: "${obj.readTime}",`);
  if (obj.date) parts.push(`    date: "${obj.date}",`);
  if (obj.updatedDate) parts.push(`    updatedDate: "${obj.updatedDate}",`);
  if (obj.content) {
    // preserve backticks
    const safe = obj.content.replace(/`/g,'\\`');
    parts.push(`    content: ` + "`" + safe + "`,");
  }
  if (obj.images) {
    parts.push('    images: ['+obj.images.map(i=>`"${i}"`).join(', ')+'],' );
  }
  parts.push('  },');
  return parts.join('\n');
}
const fragments = missing.map(toTs).join('\n');
// insert before the closing of blogData array
const key = 'export const blogData: BlogArticle[] = [';
const idx = blogSrc.indexOf(key);
if (idx===-1){ console.error('blogData array start not found'); process.exit(4); }
let arrStart = blogSrc.indexOf('[', idx);
// find matching closing bracket
let depth=0, end=-1;
for (let j=arrStart;j<blogSrc.length;j++){
  const ch = blogSrc[j];
  if (ch==='[') depth++;
  else if (ch===']') { depth--; if (depth===0){ end=j; break; } }
}
if (end===-1){ console.error('blogData array end not found'); process.exit(5); }
// insert before end
const newSrc = blogSrc.slice(0,end) + '\n' + fragments + '\n' + blogSrc.slice(end);
fs.writeFileSync('tmp/blogData_merged.ts', newSrc);
console.log('wrote tmp/blogData_merged.ts with', missing.length, 'new entries');
