#!/usr/bin/env node

/**
 * Test if Unsplash source URLs are accessible
 */

const https = require('https');

const testUrls = [
  "https://source.unsplash.com/1200x800/?healthcare",
  "https://source.unsplash.com/1200x800/?fitness",
  "https://source.unsplash.com/1200x800",
];

console.log('🧪 Testing Unsplash source.unsplash.com URLs...\n');

async function testUrl(url) {
  return new Promise((resolve) => {
    let status = 'UNKNOWN';
    let redirectUrl = null;
    
    const request = https.get(url, { 
      method: 'GET',
      timeout: 8000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      status = res.statusCode;
      if (res.statusCode >= 300 && res.statusCode < 400) {
        redirectUrl = res.headers.location;
      }
      resolve({
        url,
        statusCode: res.statusCode,
        redirectUrl,
        contentType: res.headers['content-type'],
        valid: res.statusCode < 400,
      });
      request.abort();
    });

    request.on('error', (err) => {
      resolve({
        url,
        statusCode: 'ERROR',
        error: err.message,
        valid: false,
      });
    });

    request.on('timeout', () => {
      request.abort();
      resolve({
        url,
        statusCode: 'TIMEOUT',
        valid: false,
      });
    });
  });
}

(async () => {
  for (const url of testUrls) {
    const result = await testUrl(url);
    console.log(`URL: ${url}`);
    console.log(`Status: ${result.statusCode}`);
    if (result.valid) {
      console.log(`✅ WORKS - Content-Type: ${result.contentType}`);
    } else {
      console.log(`❌ FAILED`);
      if (result.error) console.log(`   Error: ${result.error}`);
    }
    console.log('');
  }
})();
