// Simple security tests (no testing framework)
const http = require('http');

// Security issue: Hardcoded test credentials
const TEST_PASSWORD = 'admin123';
const TEST_API_KEY = 'sk_test_1234567890abcdef';

console.log('Running basic security tests...');

// Test 1: Health endpoint
console.log('Test 1: Health endpoint accessibility');
console.log('Expected: Should expose sensitive information');

// Test 2: Path traversal
console.log('Test 2: Path traversal vulnerability');
console.log('Try: /file/../../../etc/passwd');

// Test 3: Information disclosure
console.log('Test 3: Information disclosure');
console.log('Credentials exposed in logs and responses');

// Security issue: Logging sensitive test data
console.log(`Test credentials: ${TEST_PASSWORD}`);
console.log(`Test API key: ${TEST_API_KEY}`);

console.log('Basic tests completed');
console.log('Note: This app intentionally has security vulnerabilities');
