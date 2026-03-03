const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const blogDataPath = path.join(root, 'src', 'data', 'blogData.ts');
const srcDir = path.join(root, 'src');

function read(p){ try { return fs.readFileSync(p, 'utf8'); } catch(e){ return null } }
const file = read(blogDataPath);
if(!file){ console.error('Could not read', blogDataPath); process.exit(2); }

const importRe = /^import\s+(?:\{\s*([^}]+)\s*\}|([\w$]+))\s+from\s+['"](.+)['"];?/gm;
let m; const imports = {};
while((m = importRe.exec(file))){ const named = m[1]; const def = m[2]; const p = m[3]; if(def){ imports[def]=p; } else if(named){ named.split(',').map(s=>s.trim()).forEach(k => { imports[k]=p; }); }}

const arrRe = /export\s+const\s+blogData[\s\S]*?=\s*\[(?:[\s\S]*?)\n\];/m;
const arrMatch = file.match(arrRe);
const arrText = arrMatch ? arrMatch[0] : file;

const slugRe = /slug\s*:\s*['"]([^'"]+)['"]/g;
let slugs = [];
while((m = slugRe.exec(arrText))){ const slug = m[1]; const idx = m.index;
  const tail = arrText.slice(idx, idx+800);
  const contentRe = /content\s*:\s*([\w$.]+|`[\s\S]*?`|\[\s*\])/;
  const cr = tail.match(contentRe);
  let contentExpr = cr ? cr[1] : null;
  if(contentExpr && contentExpr.startsWith('`')){
    contentExpr = contentExpr.slice(1, -1);
  }
  slugs.push({slug, contentExpr});
}

function resolveContent(expr){ if(!expr) return {present:false, reason:'no content field'};
  expr = expr.trim();
  if(expr.startsWith('`')){ const inner = expr.slice(1,-1).trim(); return {present: inner.length>0, reason: inner.length>0? 'inline' : 'empty template'}; }
  if(expr === '[]') return {present:false, reason:'empty array'};
  const base = expr.split('.')[0];
  const imp = imports[base];
  if(!imp){ return {present:true, reason:'unknown identifier (assume present)'}; }
  let p = imp;
  if(p.startsWith('.')) p = path.join(path.dirname(blogDataPath), p);
  else p = path.join(srcDir, p);
  const candidates = [p, p + '.ts', p + '.tsx', p + '.js', p + '.jsx'];
  let found = null; for(const c of candidates){ if(fs.existsSync(c)) { found = c; break; } }
  if(!found) return {present:true, reason:'imported file not found (assume present)'};
  const content = read(found);
  if(!content) return {present:true, reason:'cannot read imported file (assume present)'};
  if(/export\s+default\s+`[\s\S]*?`/.test(content) || /export\s+default\s+['\"]/.test(content)){
    const m = content.match(/export\s+default\s+(`[\s\S]*?`|['\"][\s\S]*?['\"])/);
    if(m){ const v = m[1]; const inner = v.startsWith('`') ? v.slice(1,-1).trim() : v.slice(1,-1).trim(); return {present: inner.length>0, reason:'default export'}; }
  }
  if(/content\s*:\s*`[\s\S]*?`/.test(content) || /export\s+const\s+.*content\s*:/m.test(content)){
    const mc = content.match(/content\s*:\s*(`[\s\S]*?`)/);
    if(mc){ const inner = mc[1].slice(1,-1).trim(); return {present: inner.length>0, reason:'imported.content'}; }
  }
  return {present:true, reason:'assume present'};
}

const emptyArticles = [];
const presentArticles = [];
for(const s of slugs){ const res = resolveContent(s.contentExpr); if(!res.present) emptyArticles.push({slug:s.slug, reason:res.reason}); else presentArticles.push({slug:s.slug, reason:res.reason}); }

const linkRe = /href\s*[:=]\s*['\"]([^'\"]+)['\"]/g;
const hrefs = new Set();
function walkDir(dir){
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for(const e of entries){
    const p = path.join(dir, e.name);
    if(e.isDirectory()) out.push(...walkDir(p));
    else if(/\.(ts|tsx|js|jsx)$/.test(e.name)) out.push(path.relative(root, p).replace(/\\/g, '/'));
  }
  return out;
}
const files = walkDir(path.join(root, 'src'));
for(const f of files){ const c = read(path.join(root, f)); if(!c) continue; let mm; while((mm = linkRe.exec(c))){ const h = mm[1]; if(h.includes('/article/')) hrefs.add(h); } }

const missingLinkPages = [];
for(const h of Array.from(hrefs)){
  const m = h.match(/\/article\/(.+)$/);
  if(!m) continue;
  const slug = m[1].replace(/\?.*$/,'').replace(/\/#.*$/,'');
  const found = files.some(f => f.includes('/' + slug) || read(path.join(root,f)).includes("slug: \""+slug+"\""));
  if(!found) missingLinkPages.push({href:h, slug});
}

console.log('totalBlogEntries:', slugs.length);
console.log('emptyContentCount:', emptyArticles.length);
console.log('emptyArticlesSample:', emptyArticles.slice(0,10));
console.log('linksPointingToArticleCount:', hrefs.size);
console.log('linksMissingPageCount:', missingLinkPages.length);
console.log('missingLinkPagesSample:', missingLinkPages.slice(0,10));

fs.writeFileSync(path.join(root, 'tmp_blog_article_report.json'), JSON.stringify({total:slugs.length, emptyCount:emptyArticles.length, empty:emptyArticles, linksCount: hrefs.size, linksMissing: missingLinkPages}, null, 2));

process.exit(0);
