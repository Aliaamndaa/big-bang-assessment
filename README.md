# Big Bang Number Generator 🚀

A JavaScript solution for predicting when the "Big Bang" will happen again based on prime number collision patterns.

## 📋 Problem Statement

According to the tale, when two prime numbers (3 and 5) collide, a Big Bang occurs. This script generates an array of numbers from 1 to 100 with the following transformation rules:

- Numbers divisible by **3** → replaced with `"BIG"`
- Numbers divisible by **5** → replaced with `"BANG"`
- Numbers divisible by **both 3 and 5** → replaced with `"BIGBANG"` (collision!)
- All other numbers → remain as strings

## 🛠️ Technology Stack

- **JavaScript (Node.js)** - Pure JavaScript implementation with no external dependencies
- **Node.js File System (fs)** - For JSON file generation

## 📁 Project Structure

```
big-bang-assessment/
│
├── bigbang.js          # Main JavaScript solution
├── bigbang.ts          # TypeScript version (bonus)
├── test.js             # Verification tests
├── output.json         # Generated output (created after running)
├── package.json        # Node.js package configuration
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── GITHUB_SETUP.md     # Guide for pushing to GitHub
```

## ⚡ Prerequisites

Before running this script, make sure you have:

- **Node.js** installed (version 12 or higher recommended)
  - Check if installed: `node --version`
  - Download from: https://nodejs.org/

## 🚀 How to Run

### Step 1: Clone or Download the Repository

```bash
# If using Git
git clone <your-repository-url>
cd big-bang-assessment

# Or download and extract the ZIP file, then navigate to the folder
```

### Step 2: Run the Script

No installation needed! Just run:

```bash
node bigbang.js
```

Or use the npm script:

```bash
npm start
```

### Step 3: Verify the Output (Optional)

Run the test script to verify everything works correctly:

```bash
node test.js
```

Or:

```bash
npm test
```

### Step 4: Check the Output

After running, you'll see:
- Console output showing a preview and statistics
- A new file `output.json` containing the complete array

## 📄 Output Format

The `output.json` file contains an array in the following format:

```json
[
  "1",
  "2",
  "BIG",
  "4",
  "BANG",
  "BIG",
  "7",
  "8",
  "BIG",
  "BANG",
  "11",
  "BIG",
  "13",
  "14",
  "BIGBANG",
  ...
  "BANG"
]
```

## 🧪 Example Output

Running the script displays:

```
🚀 Generating Big Bang prediction array...

Preview (first 20 elements):
[ '1', '2', 'BIG', '4', 'BANG', 'BIG', '7', '8', 'BIG', 'BANG', '11', 'BIG', '13', '14', 'BIGBANG', '16', '17', 'BIG', '19', 'BANG' ]
...

✅ Successfully generated array with 100 elements
📄 Output saved to: output.json

Big Bang predictions:
  - BIG: 27 times
  - BANG: 14 times
  - BIGBANG: 6 times (Collision detected!)
```

## 🔍 Algorithm Explanation

The solution uses a simple iterative approach:

1. **Loop** from 1 to 100
2. For each number, **check divisibility** in this order:
   - First check if divisible by both 3 AND 5 (i.e., divisible by 15)
   - Then check if divisible by 3 only
   - Then check if divisible by 5 only
   - Otherwise, keep the number as a string
3. **Push** the result to an array
4. **Write** the array to `output.json` in formatted JSON

### Why Check Combined Condition First?

If we check individual conditions first, numbers like 15, 30, 45 would be replaced with "BIG" instead of "BIGBANG". The order matters!

## 🎯 Big Bang Collision Points

In the range 1-100, Big Bangs (collisions) occur at:
- **15** (3 × 5)
- **30** (3 × 10)
- **45** (3 × 15)
- **60** (3 × 20)
- **75** (3 × 25)
- **90** (3 × 30)

**Total: 6 collisions** where both primes meet!

## 🧑‍💻 Code Features

- ✅ Clean, well-commented code
- ✅ Modular function design
- ✅ Console output with visual feedback
- ✅ Statistics summary
- ✅ No external dependencies
- ✅ Error-free execution

## 📝 Notes

- The script overwrites `output.json` each time it runs
- All numbers in the output are stored as strings (as per requirements)
- The solution is efficient with O(n) time complexity

## 👨‍🔬 Author

Created as part of an internship assessment to demonstrate:
- Problem-solving skills
- Clean code practices
- Documentation ability
- Understanding of basic algorithms

## 📜 License

This project is open source and available for educational purposes.

---

**Happy Big Bang Hunting! 💥**
