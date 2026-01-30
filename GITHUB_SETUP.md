# How to Push This Project to GitHub

Follow these step-by-step instructions to push your project to GitHub.

## Prerequisites

1. **Git installed** on your computer
   - Check: `git --version`
   - Download from: https://git-scm.com/

2. **GitHub account**
   - Create one at: https://github.com/

## Step-by-Step Instructions

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project folder
cd big-bang-assessment

# Initialize git
git init
```

### Step 2: Configure Git (First Time Only)

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"
```

### Step 3: Add All Files to Git

```bash
# Add all files to staging
git add .

# Check what files are staged
git status
```

### Step 4: Create First Commit

```bash
# Commit with a descriptive message
git commit -m "Initial commit: Big Bang number generator solution"
```

### Step 5: Create a New Repository on GitHub

1. Go to https://github.com/
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `big-bang-assessment` (or your preferred name)
   - **Description**: "JavaScript solution for Big Bang number prediction assessment"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### Step 6: Link Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Example:
# git remote add origin https://github.com/johndoe/big-bang-assessment.git

# Verify the remote was added
git remote -v
```

### Step 7: Push to GitHub

```bash
# Push your code to GitHub (main branch)
git push -u origin main

# If you get an error about 'master' instead of 'main', use:
# git branch -M main
# git push -u origin main
```

### Step 8: Verify on GitHub

1. Go to your repository URL: `https://github.com/USERNAME/REPO_NAME`
2. You should see all your files including:
   - README.md
   - bigbang.js
   - output.json
   - package.json
   - .gitignore

## Success!

Your project is now on GitHub! You can share the repository URL with the hiring team.

## Common Issues & Solutions

### Issue 1: "Permission denied (publickey)"

**Solution**: You need to set up SSH keys or use HTTPS with a personal access token.

**Quick fix using HTTPS with token**:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Copy the token
4. When pushing, use: `https://YOUR_TOKEN@github.com/USERNAME/REPO_NAME.git`

### Issue 2: "Updates were rejected"

**Solution**: Pull first, then push:
```bash
git pull origin main --rebase
git push origin main
```

### Issue 3: Wrong branch name (master vs main)

**Solution**: Rename branch:
```bash
git branch -M main
git push -u origin main
```

## Making Updates Later

After making changes to your code:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of what you changed"

# Push to GitHub
git push
```

## Additional Tips

1. **Write clear commit messages** - Explain what you changed and why
2. **Update README.md** - If you make significant changes
3. **Test before pushing** - Always run `node bigbang.js` to ensure it works
4. **Use .gitignore** - Don't commit unnecessary files like node_modules

---

Good luck with your assessment! 🚀
