#!/usr/bin/env node

/**
 * Test Unsplash URLs to verify they're valid and loadable
 */

const https = require('https');

const testUrls = [
  "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  "https://source.unsplash.com/1200x800/?fitness&sig=506",
  "https://source.unsplash.com/1200x800",
];

console.log('🔍 Testing Unsplash URL formats...\n');

function testUrl(url) {
  return new Promise((resolve) => {
    const request = https.get(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        redirectUrl: res.headers.location || 'none',
        valid: res.statusCode >= 200 && res.statusCode < 300,
      });
      request.abort();
    });

    request.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        error: err.message,
        valid: false,
      });
    });

    request.on('timeout', () => {
      resolve({
        url,
        status: 'TIMEOUT',
        valid: false,
      });
    });
  });
}

(async () => {
  console.log('Testing URL formats:\n');
  
  for (const url of testUrls) {
    const result = await testUrl(url);
    console.log(`URL: ${url.substring(0, 60)}...`);
    if (result.valid) {
      console.log(`✅ Status: ${result.status} - WORKS`);
    } else {
      console.log(`❌ Status: ${result.status} - FAILED`);
      if (result.error) console.log(`   Error: ${result.error}`);
      if (result.redirectUrl !== 'none') console.log(`   Redirects to: ${result.redirectUrl}`);
    }
    console.log('');
  }

  console.log('\n📊 Recommendation:');
  console.log('If URLs are failing, consider using:');
  console.log('1. https://images.unsplash.com/photo-ID?w=1200&h=800&fit=crop&fm=webp');
  console.log('2. Or use specific Unsplash photo IDs instead of search queries');
})();
