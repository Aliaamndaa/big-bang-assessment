const fs = require('fs');

function runTests() {
    console.log(' Running verification tests...\n');
    
    let passed = 0;
    let failed = 0;
    
    // Test 1: Check if output.json exists
    try {
        if (fs.existsSync('output.json')) {
            console.log('Test 1 PASSED: output.json file exists');
            passed++;
        } else {
            console.log('Test 1 FAILED: output.json file not found');
            failed++;
            return;
        }
    } catch (err) {
        console.log('Test 1 FAILED: Error checking file');
        failed++;
        return;
    }
    
    // Read the output file
    const data = JSON.parse(fs.readFileSync('output.json', 'utf8'));
    
    // Test 2: Check array length
    if (data.length === 100) {
        console.log('Test 2 PASSED: Array has exactly 100 elements');
        passed++;
    } else {
        console.log(`Test 2 FAILED: Array has ${data.length} elements instead of 100`);
        failed++;
    }
    
    // Test 3: Check position 3 (should be "BIG")
    if (data[2] === "BIG") {
        console.log('Test 3 PASSED: Position 3 is "BIG" (divisible by 3)');
        passed++;
    } else {
        console.log(`Test 3 FAILED: Position 3 is "${data[2]}" instead of "BIG"`);
        failed++;
    }
    
    // Test 4: Check position 5 (should be "BANG")
    if (data[4] === "BANG") {
        console.log('Test 4 PASSED: Position 5 is "BANG" (divisible by 5)');
        passed++;
    } else {
        console.log(`Test 4 FAILED: Position 5 is "${data[4]}" instead of "BANG"`);
        failed++;
    }
    
    // Test 5: Check position 15 (should be "BIGBANG")
    if (data[14] === "BIGBANG") {
        console.log('Test 5 PASSED: Position 15 is "BIGBANG" (divisible by both)');
        passed++;
    } else {
        console.log(`Test 5 FAILED: Position 15 is "${data[14]}" instead of "BIGBANG"`);
        failed++;
    }
    
    // Test 6: Check position 1 (should be "1")
    if (data[0] === "1") {
        console.log('Test 6 PASSED: Position 1 is "1" (not divisible by 3 or 5)');
        passed++;
    } else {
        console.log(`Test 6 FAILED: Position 1 is "${data[0]}" instead of "1"`);
        failed++;
    }
    
    // Test 7: All values are strings
    const allStrings = data.every(item => typeof item === 'string');
    if (allStrings) {
        console.log('Test 7 PASSED: All elements are strings');
        passed++;
    } else {
        console.log('Test 7 FAILED: Some elements are not strings');
        failed++;
    }
    
    // Test 8: Check count of BIGBANG (should be 6: positions 15, 30, 45, 60, 75, 90)
    const bigbangCount = data.filter(item => item === 'BIGBANG').length;
    if (bigbangCount === 6) {
        console.log('Test 8 PASSED: Exactly 6 BIGBANG occurrences found');
        passed++;
    } else {
        console.log(`Test 8 FAILED: Found ${bigbangCount} BIGBANG instead of 6`);
        failed++;
    }
    
    // Summary
    console.log('\n' + '='.repeat(50));
    console.log(`Test Results: ${passed} passed, ${failed} failed`);
    console.log('='.repeat(50));
    
    if (failed === 0) {
        console.log('All tests passed! Solution is correct!');
    } else {
        console.log('Some tests failed. Please review the output.');
    }
}

// Run tests
runTests();
