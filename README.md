# Big Bang Number Generator

A solution for the Big Bang assessment that generates an array of numbers from 1 to 100 with special replacements based on divisibility rules.

## Problem

Generate an array where:
- Numbers divisible by 3 are replaced with "BIG"
- Numbers divisible by 5 are replaced with "BANG"  
- Numbers divisible by both 3 and 5 are replaced with "BIGBANG"
- Other numbers remain as strings

## Running the Code

Make sure you have Node.js installed, then run:
```bash
node bigbang.js
```

This will generate `output.json` with the required array.

## Testing

To verify the output is correct:
```bash
node test.js
```

## Output

The script generates an array of 100 elements following the rules above. Example:
```json
["1", "2", "BIG", "4", "BANG", "BIG", "7", "8", "BIG", "BANG", "11", "BIG", "13", "14", "BIGBANG", ...]
```

## Implementation Notes

The key is checking divisibility by both 3 and 5 first (before checking them individually), otherwise numbers like 15 would incorrectly be labeled as just "BIG".
