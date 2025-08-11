import { formatSize } from './utils';

// Test the formatSize function with various inputs
console.log('Testing formatSize function:');
console.log('0 bytes:', formatSize(0));
console.log('1023 bytes:', formatSize(1023));
console.log('1024 bytes (1KB):', formatSize(1024));
console.log('1536 bytes (1.5KB):', formatSize(1536));
console.log('1048576 bytes (1MB):', formatSize(1048576));
console.log('1572864 bytes (1.5MB):', formatSize(1572864));
console.log('1073741824 bytes (1GB):', formatSize(1073741824));
console.log('1610612736 bytes (1.5GB):', formatSize(1610612736));
console.log('20MB:', formatSize(20 * 1024 * 1024));

// Test with different decimal precision
console.log('\nTesting with different decimal precision:');
console.log('1572864 bytes with 0 decimals:', formatSize(1572864, 0));
console.log('1572864 bytes with 1 decimal:', formatSize(1572864, 1));
console.log('1572864 bytes with 3 decimals:', formatSize(1572864, 3));