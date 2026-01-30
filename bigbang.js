/**
 * Big Bang Number Generator
 * 
 * This script generates an array of numbers from 1 to 100 with the following rules:
 * - Numbers divisible by 3 are replaced with "BIG"
 * - Numbers divisible by 5 are replaced with "BANG"
 * - Numbers divisible by both 3 and 5 are replaced with "BIGBANG"
 * - All other numbers remain as strings
 * 
 * The result is saved to output.json
 */

const fs = require('fs');

/**
 * Generates the Big Bang array
 * @param {number} limit - The upper limit for number generation (inclusive)
 * @returns {string[]} Array with numbers and keywords
 */
function generateBigBangArray(limit = 100) {
    const result = [];
    
    for (let i = 1; i <= limit; i++) {
        // Check if divisible by both 3 and 5 (must check this first!)
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        }
        // Check if divisible by 3
        else if (i % 3 === 0) {
            result.push("BIG");
        }
        // Check if divisible by 5
        else if (i % 5 === 0) {
            result.push("BANG");
        }
        // Otherwise, add the number as a string
        else {
            result.push(String(i));
        }
    }
    
    return result;
}

/**
 * Main execution function
 */
function main() {
    console.log('🚀 Generating Big Bang prediction array...\n');
    
    // Generate the array
    const bigBangArray = generateBigBangArray(100);
    
    // Display first 20 elements as preview
    console.log('Preview (first 20 elements):');
    console.log(bigBangArray.slice(0, 20));
    console.log('...\n');
    
    // Save to output.json
    const outputPath = 'output.json';
    fs.writeFileSync(outputPath, JSON.stringify(bigBangArray, null, 2));
    
    console.log(`✅ Successfully generated array with ${bigBangArray.length} elements`);
    console.log(`📄 Output saved to: ${outputPath}`);
    console.log('\nBig Bang predictions:');
    
    // Count occurrences
    const bigCount = bigBangArray.filter(item => item === 'BIG').length;
    const bangCount = bigBangArray.filter(item => item === 'BANG').length;
    const bigbangCount = bigBangArray.filter(item => item === 'BIGBANG').length;
    
    console.log(`  - BIG: ${bigCount} times`);
    console.log(`  - BANG: ${bangCount} times`);
    console.log(`  - BIGBANG: ${bigbangCount} times (Collision detected!)`);
}

// Run the script
main();
