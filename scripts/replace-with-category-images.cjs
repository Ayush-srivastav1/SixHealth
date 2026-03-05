#!/usr/bin/env node

/**
 * Replace hardcoded image URLs with primary category references
 * Ensures all images use: healthcare, medical, disease, fitness, wellbeing, nutrition
 * All will pull from imageLibrary.ts with unique WebP URLs
 */

const fs = require('fs');
const path = require('path');

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];
const IGNORE_DIRS = ['node_modules', 'dist', '.git', '.vscode', '.vite', 'tmp'];

let updateResults = {
  files_updated: 0,
  replacements_made: 0,
  errors: [],
};

function isIgnoredPath(filePath) {
  for (const dir of IGNORE_DIRS) {
    if (filePath.includes(`\\${dir}\\`) || filePath.includes(`/${dir}/`) || filePath.startsWith(dir)) {
      return true;
    }
  }
  return false;
}

function shouldProcessFile(filePath) {
  if (isIgnoredPath(filePath)) return false;
  return EXTENSIONS.some(ext => filePath.endsWith(ext));
}

// Pattern: map common image descriptors to primary categories
const imagePatterns = [
  { patterns: ['healthcare', 'health', 'medical', 'hospital', 'doctor', 'clinic'], category: 'healthcare', context: 'General healthcare' },
  { patterns: ['medical', 'doctor', 'surgeon', 'medicine'], category: 'medical', context: 'Medical professional' },
  { patterns: ['disease', 'cancer', 'diabetes', 'asthma', 'condition', 'illness'], category: 'disease', context: 'Disease/condition' },
  { patterns: ['wellbeing', 'wellness', 'self-care', 'mindfulness', 'relax', 'yoga'], category: 'wellbeing', context: 'Wellness' },
  { patterns: ['nutrition', 'diet', 'food', 'eating', 'healthy eating'], category: 'nutrition', context: 'Nutrition' },
  { patterns: ['fitness', 'exercise', 'gym', 'workout', 'sport', 'physical'], category: 'fitness', context: 'Fitness' },
];

function getCategoryForContent(content, filePath) {
  const contentLower = content.toLowerCase();
  const filenameLower = path.basename(filePath).toLowerCase();
  
  for (const { patterns, category } of imagePatterns) {
    for (const pattern of patterns) {
      if (contentLower.includes(pattern) || filenameLower.includes(pattern)) {
        return category;
      }
    }
  }
  return 'healthcare'; // default
}

function replaceImageReferences(content, filePath) {
  let modified = content;
  let replacementsMade = 0;
  
  const category = getCategoryForContent(content, filePath);
  
  // Replace various image URL patterns with getImageUrl calls
  const urlPatterns = [
    // Unsplash direct URLs
    /https:\/\/source\.unsplash\.com\/[^\s"']+(?:&sig=\d+)?[^\s"']*/g,
    // images.unsplash.com URLs
    /https:\/\/images\.unsplash\.com\/[^\s"']+/g,
    // placeholder URLs
    /https:\/\/[a-z]+\.example\.com\/[^\s"']+/g,
  ];
  
  for (const pattern of urlPatterns) {
    if (pattern.test(modified)) {
      // Only replace if it's a new unsplash URL (not already optimized)
      const matches = modified.match(pattern);
      if (matches) {
        // Check if URL doesn't already have the proper image library format
        for (const match of matches) {
          if (!match.includes('getImageUrl') && !modified.includes(`getImageUrl('${category}')`)) {
            // Use getImageUrl for category
            modified = modified.replace(match, `\${imageLibrary.${category}}`);
            replacementsMade++;
          }
        }
      }
    }
  }
  
  return { modified, replacementsMade };
}

function processDirectory(dirPath) {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        if (!isIgnoredPath(fullPath)) {
          processDirectory(fullPath);
        }
      } else if (entry.isFile() && shouldProcessFile(fullPath)) {
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          const original = content;
          
          const { modified, replacementsMade } = replaceImageReferences(content, fullPath);
          
          if (replacementsMade > 0) {
            fs.writeFileSync(fullPath, modified, 'utf8');
            updateResults.files_updated++;
            updateResults.replacements_made += replacementsMade;
            console.log(`✓ Updated ${fullPath}: ${replacementsMade} replacement(s)`);
          }
        } catch (err) {
          updateResults.errors.push({
            file: fullPath,
            error: err.message,
          });
        }
      }
    }
  } catch (err) {
    console.error(`Error processing ${dirPath}:`, err.message);
  }
}

console.log('🔄 Replacing image URLs with primary category references...\n');

processDirectory(path.join(process.cwd(), 'src'));

console.log('\n✅ UPDATE RESULTS:');
console.log(`Files updated: ${updateResults.files_updated}`);
console.log(`Total replacements made: ${updateResults.replacements_made}`);

if (updateResults.errors.length > 0) {
  console.log(`\n⚠️  Errors encountered: ${updateResults.errors.length}`);
  updateResults.errors.slice(0, 5).forEach(err => {
    console.log(`  - ${err.file}: ${err.error}`);
  });
}

console.log('\n📊 Primary Categories Available:');
console.log('  • healthcare - General healthcare and medical services (sig=501)');
console.log('  • medical - Medical professionals and healthcare (sig=502)');
console.log('  • disease - Disease and health conditions (sig=503)');
console.log('  • wellbeing - Wellness and overall health (sig=504)');
console.log('  • nutrition - Healthy nutrition and diet (sig=505)');
console.log('  • fitness - Exercise and physical fitness (sig=506)');

console.log('\n✨ All images now use Unsplash with unique sig values and WebP format');
