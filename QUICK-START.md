# Quick Start Guide

## 🚀 Get Your Website Running in 3 Steps

### Step 1: Open Terminal
- On Mac: Press `Cmd + Space`, type "Terminal", press Enter
- Navigate to project:
```bash
cd /Users/rizan/Documents/GP_Director/gp-director-source
```

### Step 2: Install Dependencies (First Time Only)
```bash
npm install
```
Wait 1-2 minutes for installation to complete.

### Step 3: Start Development Server
```bash
npm run dev
```

Your website will open automatically at `http://localhost:3000` 🎉

## 📝 Making Changes

### Edit Content
1. Open any file in `src/pages/` or `src/components/`
2. Save the file
3. See changes instantly in your browser!

### Common Files to Edit:
- **Homepage**: `src/pages/Home.jsx`
- **Products**: `src/pages/Products.jsx`
- **Contact Info**: `src/components/Footer.jsx`
- **Navigation**: `src/components/Header.jsx`
- **Styles**: `src/index.css`

## 🌐 Deploy to Vercel (Make it Live!)

### Easy Way:
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Click "Import"
5. Drag and drop the `gp-director-source` folder
6. Click "Deploy"
7. Done! Your site is live 🚀

### Command Line Way:
```bash
npm install -g vercel
vercel login
vercel
```

## 🆘 Need Help?

### Website Not Starting?
```bash
# Try reinstalling
rm -rf node_modules
npm install
npm run dev
```

### Want to Change Port?
```bash
npm run dev -- --port 3001
```

### Build for Production:
```bash
npm run build
```
Files will be in the `dist` folder.

## 📧 Contact
- Email: admin@gpdirector.com.au
- Phone: 0348301211
- Location: Melbourne, Australia

---

**That's it! You're all set to edit and deploy your website! 🎉**
