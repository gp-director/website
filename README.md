# GP Director - Healthcare Solutions Website

A modern, fully responsive React website for GP Director, featuring AI-powered healthcare solutions for Australian clinics.

## Features

- ✅ **Complete React Application** with editable source code
- ✅ **5 Full Pages**: Home, Products, About, Contact, Blog
- ✅ **Responsive Design**: Mobile, tablet, and desktop optimized
- ✅ **Smooth Animations**: Using Framer Motion
- ✅ **Modern UI**: Clean, professional design with gradients
- ✅ **Correct Contact Info**:
  - Email: admin@gpdirector.com.au
  - Phone: 0348301211
  - Location: Melbourne, Australia

## Project Structure

```
gp-director-source/
├── public/
│   └── gp-director-logo.png    # Your logo
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Footer with contact info
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── Products.jsx        # Products page
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact page (no Visit Us section)
│   │   └── Blog.jsx            # Blog page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # All styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 16 or higher). You can check by running:

```bash
node --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/)

### Installation

1. **Navigate to the project directory:**

```bash
cd /Users/rizan/Documents/GP_Director/gp-director-source
```

2. **Install dependencies:**

```bash
npm install
```

This will install:
- React & React DOM
- React Router DOM (for navigation)
- Framer Motion (for animations)
- Vite (build tool)

### Running the Development Server

Start the development server:

```bash
npm run dev
```

The website will open automatically in your browser at `http://localhost:3000`

You'll see live updates as you edit the files!

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready to deploy.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deploying to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be live!

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository (or drag & drop the folder)
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

Your site will be live in minutes!

## Customization Guide

### Changing Content

#### Update Contact Information

Edit `src/components/Footer.jsx` around lines 65-85:

```jsx
<span>admin@gpdirector.com.au</span>  // Change email
<span>0348301211</span>                 // Change phone
<span>Melbourne, Australia</span>       // Change location
```

#### Update Homepage Content

Edit `src/pages/Home.jsx`:
- Hero section: lines 60-95
- Stats: lines 7-12
- Products: lines 14-47
- Testimonials: lines 49-72

#### Update Products

Edit `src/pages/Products.jsx`:
- Product details: lines 5-120

#### Update About Page

Edit `src/pages/About.jsx`:
- Company story: lines 25-40
- Mission & values: lines 45-85

### Changing Styles

All styles are in `src/index.css`. Common changes:

#### Change Primary Color

Find `:root` variables at the top:
```css
--primary-blue: #2563eb;  /* Change this color */
```

#### Change Fonts

Add Google Fonts to `index.html` and update `body` in `index.css`

### Adding New Pages

1. Create new file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/your-path" element={<YourPage />} />
```
3. Add link in `src/components/Header.jsx`

## Troubleshooting

### Port Already in Use

If port 3000 is busy:
```bash
npm run dev -- --port 3001
```

### Build Errors

Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Logo Not Showing

Make sure `gp-director-logo.png` is in the `public` folder

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool (fast development)
- **React Router DOM** - Client-side routing
- **Framer Motion** - Smooth animations
- **CSS3** - Modern styling

## File Editing Tips

- **VS Code** is recommended for editing
- Install extensions: ES7+ React/Redux/React-Native snippets, Prettier
- Use "Format Document" (Shift+Alt+F) to auto-format code

## Support

For questions or issues:
- Email: admin@gpdirector.com.au
- Phone: 0348301211

## License

© 2024 GP Director. All rights reserved.

---

**Happy coding! 🚀**
