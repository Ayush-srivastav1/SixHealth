#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const exts = new Set(['.js','.jsx','.ts','.tsx','.css','.scss','.html']);
const excludeDirs = new Set(['node_modules','.git','dist','public','tmp','archive']);

function walk(dir){
  let results = [];
  for(const name of fs.readdirSync(dir)){
    const full = path.join(dir,name);
    const stat = fs.statSync(full);
    if(stat.isDirectory()){
      if(excludeDirs.has(name)) continue;
      results = results.concat(walk(full));
    } else {
      if(exts.has(path.extname(full))) results.push(full);
    }
  }
  return results;
}

function preserveAndStrip(content){
  const preserved = [];
  let i = 0;

  // Preserve file-top license header: /*! ... */ or block containing Copyright/License
  content = content.replace(/^\s*(\/\*(?:!|[^*]|\*(?!\/))*?\*\/\s*)/i, (m)=>{
    preserved.push(m);
    return `__PRESERVE_${i++}__`;
  });

  // Preserve all JSDoc /** ... */
  content = content.replace(/\/\*\*[\s\S]*?\*\//g, (m)=>{
    preserved.push(m);
    return `__PRESERVE_${i++}__`;
  });

  // Preserve any block comment that contains 'copyright' or 'license'
  content = content.replace(/\/\*[\s\S]*?\*\//gi, (m)=>{
    if(/copyright|license|spdx/i.test(m)){
      preserved.push(m);
      return `__PRESERVE_${i++}__`;
    }
    return m;
  });

  // Remove block comments (/* ... */)
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');

  // Remove HTML comments <!-- ... -->
  content = content.replace(/<!--([\s\S]*?)-->/g, (m)=>{
    if(/copyright|license|spdx/i.test(m)) return m;
    return '';
  });

  // Remove line comments that start the line (safer): ^\s*//...
  content = content.replace(/^\s*\/\/.*$/gm, '');

  // Remove JSX comments {/* ... */}
  content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

  // Restore preserved tokens
  for(let idx=0; idx<preserved.length; idx++){
    const token = `__PRESERVE_${idx}__`;
    content = content.replace(token, preserved[idx]);
  }

  // Trim excessive blank lines
  content = content.replace(/(^\s*\n){3,}/gm, '\n\n');

  return content;
}

function run(dry){
  const start = path.join(root,'src');
  if(!fs.existsSync(start)){
    console.error('No src/ folder found, exiting');
    process.exit(1);
  }
  const files = walk(start);
  let changed = 0; let total=0; const sample=[];
  for(const file of files){
    total++;
    const orig = fs.readFileSync(file,'utf8');
    const out = preserveAndStrip(orig);
    if(out !== orig){
      changed++;
      sample.push(path.relative(root,file));
      if(!dry) fs.writeFileSync(file,out,'utf8');
    }
  }
  console.log(JSON.stringify({total,changed,sample:sample.slice(0,20)}));
}

const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
run(dry);
