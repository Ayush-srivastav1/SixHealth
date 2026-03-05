#!/usr/bin/env node

/**
 * Fix: Revert template literals in string-based files
 * String files (articles, content) need actual URLs, not template literals
 * Only component files (.tsx) should use imageLibrary references
 */

const fs = require('fs');
const path = require('path');

// Map of template literal back to URLs
const categoryUrls = {
  healthcare: 'https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp',
  medical: 'https://source.unsplash.com/1200x800/?medical,doctor&sig=502&auto=format&fit=crop&w=1200&q=80&fm=webp',
  disease: 'https://source.unsplash.com/1200x800/?disease,health,condition&sig=503&auto=format&fit=crop&w=1200&q=80&fm=webp',
  wellbeing: 'https://source.unsplash.com/1200x800/?wellness,health&sig=504&auto=format&fit=crop&w=1200&q=80&fm=webp',
  nutrition: 'https://source.unsplash.com/1200x800/?nutrition,food,diet&sig=505&auto=format&fit=crop&w=1200&q=80&fm=webp',
  fitness: 'https://source.unsplash.com/1200x800/?fitness,exercise,gym&sig=506&auto=format&fit=crop&w=1200&q=80&fm=webp',
};

// Files that should have actual URLs instead of template literals (string content files)
const stringContentFiles = [
  'src/data/blog/asthma-article.ts',
  'src/data/blog/type2diabetes-article.ts',
  'src/data/blog/migraine-article.ts',
  'src/data/blog/ckd-article.ts',
];

let fixedCount = 0;
let filesFixed = [];

for (const filePath of stringContentFiles) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  // Replace all template literals with actual URLs
  for (const [category, url] of Object.entries(categoryUrls)) {
    const templateLiteral = `\${imageLibrary.${category}}`;
    if (content.includes(templateLiteral)) {
      content = content.replaceAll(templateLiteral, url);
      fixedCount++;
      filesFixed.push(filePath);
      console.log(`✓ Fixed ${filePath} - replaced ${category} template literal`);
    }
  }

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

console.log(`\n✅ Fixed ${fixedCount} template literals in ${new Set(filesFixed).size} files`);
console.log('\nThese files now have proper Unsplash URLs instead of template literals.');
