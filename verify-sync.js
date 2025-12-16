#!/usr/bin/env node

/**
 * Quick Verification Script
 * Run this to verify the real-time sync system is working correctly
 * 
 * Usage: node verify-sync.js
 */

const fs = require('fs');
const path = require('path');

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║  Grand Interview Curator System - Verification Tool   ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

// Verification checks
const checks = {
  nodeVersion: () => {
    console.log('✓ Node.js Version: ' + process.version);
    return true;
  },

  workingDirectory: () => {
    const cwd = process.cwd();
    console.log('✓ Working Directory: ' + cwd);
    return fs.existsSync(path.join(cwd, 'backend-data.js'));
  },

  backendFile: () => {
    const exists = fs.existsSync('backend-data.js');
    if (exists) {
      console.log('✓ backend-data.js found');
    } else {
      console.log('✗ backend-data.js NOT found in current directory');
    }
    return exists;
  },

  storageFile: () => {
    const exists = fs.existsSync('data-storage.js');
    if (exists) {
      console.log('✓ data-storage.js found');
    } else {
      console.log('✗ data-storage.js NOT found');
    }
    return exists;
  },

  dashboardFile: () => {
    const exists = fs.existsSync('data-editor.html');
    if (exists) {
      console.log('✓ data-editor.html found');
    } else {
      console.log('✗ data-editor.html NOT found');
    }
    return exists;
  },

  dataDirectory: () => {
    if (!fs.existsSync('data')) {
      fs.mkdirSync('data', { recursive: true });
      console.log('✓ Created data/ directory');
    } else {
      console.log('✓ data/ directory exists');
    }
    return true;
  },

  packageJson: () => {
    const exists = fs.existsSync('package.json');
    if (exists) {
      console.log('✓ package.json found');
    } else {
      console.log('⚠ package.json NOT found - you may need to run: npm install express cors body-parser');
    }
    return exists;
  },

  expressModule: () => {
    try {
      require('express');
      console.log('✓ express module installed');
      return true;
    } catch (e) {
      console.log('✗ express module NOT installed - run: npm install express cors body-parser');
      return false;
    }
  },

  corsModule: () => {
    try {
      require('cors');
      console.log('✓ cors module installed');
      return true;
    } catch (e) {
      console.log('✗ cors module NOT installed');
      return false;
    }
  },

  bodyParserModule: () => {
    try {
      require('body-parser');
      console.log('✓ body-parser module installed');
      return true;
    } catch (e) {
      console.log('✗ body-parser module NOT installed');
      return false;
    }
  },

  syntax: () => {
    try {
      require('./backend-data.js');
      console.log('✓ backend-data.js syntax is valid');
      return true;
    } catch (e) {
      console.log('✗ backend-data.js has syntax errors: ' + e.message);
      return false;
    }
  }
};

// Run checks
let passed = 0;
let failed = 0;

console.log('Running verification checks...\n');

for (const [name, check] of Object.entries(checks)) {
  try {
    if (check()) {
      passed++;
    } else {
      failed++;
    }
  } catch (error) {
    console.log('✗ ' + name + ': ' + error.message);
    failed++;
  }
}

// Summary
console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║  VERIFICATION SUMMARY                                  ║');
console.log('╠════════════════════════════════════════════════════════╣');
console.log('║  Passed: ' + passed.toString().padEnd(48) + '║');
console.log('║  Failed: ' + failed.toString().padEnd(48) + '║');
console.log('╚════════════════════════════════════════════════════════╝\n');

if (failed === 0) {
  console.log('✅ All checks passed! You can now run the backend:\n');
  console.log('   node backend-data.js\n');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please fix the issues above.\n');
  console.log('Common fixes:\n');
  console.log('1. Install dependencies:');
  console.log('   npm install express cors body-parser\n');
  console.log('2. Make sure you\'re in the correct directory:');
  console.log('   cd "d:\\Grand Web"\n');
  console.log('3. Check file permissions on data/ folder\n');
  process.exit(1);
}
