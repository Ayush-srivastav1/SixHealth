# CSS Extraction Summary - SixHealth Project

## Overview
This document contains all CSS extracted from the SixHealth project, organized by source file. The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS files** for theme and layout overrides
- **PostCSS** for CSS processing (tailwindcss + autoprefixer plugins)
- **CSS Custom Properties (CSS Variables)** for theming and configuration

---

## 1. PostCSS Configuration

**File:** `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## 2. Tailwind Configuration

**File:** `tailwind.config.ts` (Partial - Key Theme Extensions)

```typescript
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Category colors for health content
        category: {
          conditions: "hsl(var(--category-conditions))",
          wellness: "hsl(var(--category-wellness))",
          nutrition: "hsl(var(--category-nutrition))",
          fitness: "hsl(var(--category-fitness))",
          lifestyle: "hsl(var(--category-lifestyle))",
        },
        // Semantic colors
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
    },
  },
};
```

---

## 3. Core CSS Files

### 3.1 src/index.css

**Purpose:** Tailwind directives and core typography setup

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Merriweather:wght@300;400;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
  color: #1a1a1a;
  background-color: #ffffff;
}

/* Typography to match article-style publishers (body + serif headings) */
html, body {
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-size: 18px; /* base for readable articles */
  line-height: 1.6;
  color: #111827; /* dark gray for body text */
}

article h1, article h2, article h3, article h4 {
  font-family: 'Merriweather', Georgia, 'Times New Roman', serif;
  color: #0f172a; /* slightly darker for headings */
  margin-top: 1.25em;
  margin-bottom: 0.5em;
}

.article-wrapper article h1 { font-size: 42px; font-weight: 700; line-height: 1.12; }
.article-wrapper article h2 { font-size: 30px; font-weight: 700; }
.article-wrapper article h3 { font-size: 20px; font-weight: 600; }
.article-wrapper article p { font-size: 19px; color: #111827; line-height: 1.75; }

.article-meta { color: #6b7280; font-size: 0.95rem; }

/* Images within articles */
.article-hero { max-height: 560px; }
.article-content img { border-radius: 12px; }

/* Prevent horizontal scrolling caused by decorative overflow */
html, body {
  overflow-x: hidden;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}
```

### 3.2 src/global.css

**Purpose:** Global layout, UI components, and theme configuration

```css
body {
  font-family: 'Inter', Arial, sans-serif;
  background: #fcfcfc;
  color: #111;
  margin: 0;
  padding: 0;
}

a {
  color: #5a67d8;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

.menu-section {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}

.menu-column {
  min-width: 180px;
}

.menu-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.menu-link {
  display: block;
  margin-bottom: 0.4rem;
  color: #5a67d8;
  text-decoration: none;
}

.menu-link:hover {
  color: #2b6cb0;
  text-decoration: underline;
}

/* --- Global UI / Layout overrides (single stylesheet for project) --- */
:root {
  --site-max-width: 1200px;
  --content-max-width: 680px;
  --gutter: 1rem;
  --muted: #6b7280;
  --accent: #646cff;
  --accent-600: #4c51bf;
  --surface: #ffffff;
  --card: #f8fafc;
  --radius: 10px;
}

.site-container {
  max-width: var(--site-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(var(--gutter) * 1);
  padding-right: calc(var(--gutter) * 1);
}

.article-content {
  max-width: var(--content-max-width);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  box-sizing: border-box;
}

.article-hero {
  width: 100%;
  max-width: var(--content-max-width);
  max-height: 600px;
  object-fit: cover;
  border-radius: var(--radius);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.article-content img {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  border-radius: 8px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  border: 1px solid #e6e9ef;
  padding: 6px 10px;
  border-radius: 999px;
  box-shadow: 0 1px 4px rgba(16,24,40,0.04);
}

.search-bar input[type="search"], .search-bar input[type="text"] {
  border: none;
  outline: none;
  font-size: 0.95rem;
  padding: 6px 8px;
  background: transparent;
  width: 220px;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
}

.icon-btn:hover { background: rgba(100,108,255,0.08); }

.btn { display: inline-flex; align-items:center; gap:8px; padding: 8px 14px; border-radius: 10px; font-weight:600; }
.btn-primary { background: var(--accent); color: white; border: 1px solid var(--accent-600); }
.btn-secondary { background: transparent; color: var(--accent-600); border: 1px solid #e6e9ef; }

.article-card { background: var(--card); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(11,15,26,0.04); }
.article-card .card-image { width:100%; height: 200px; object-fit: cover; }
.article-card .card-body { padding: 1rem; }

.toc { background: #fbfdff; border: 1px solid #eef2ff; padding: 12px; border-radius: 10px; }
.toc a { display:block; color: var(--accent-600); padding:6px 0; font-size:0.95rem; }

@media (max-width: 1024px) {
  :root { --site-max-width: 920px; --content-max-width: 680px; }
  .search-bar input { width: 160px; }
}

@media (max-width: 640px) {
  :root { --site-max-width: 100%; --content-max-width: 100%; }
  .search-bar input { width: 120px; }
  .article-hero { max-height: 320px; }
}

.muted { color: var(--muted); }
.lead { font-size: 1.1rem; line-height: 1.7; color: #374151; }

.prose img, .prose pre { max-width: 100%; }
.prose img {
  display: block;
  margin: 24px auto;
  max-width: 100%;
  border-radius: 10px;
}
```

### 3.3 src/App.css

**Purpose:** Application root styling

```css
#root {
  width: 100%;
  margin: 0;
  padding: 0;
}
```

### 3.4 src/styles/health-theme.css

**Purpose:** Healthline-inspired theme with typography and layout patterns

```css
:root {
  --primary: #0066cc;
  --text-main: #1a1a1a;
  --text-secondary: #6b7280;
  --border: #e5e7eb;
  --bg-light: #f7f8fa;
  --container: 1200px;
  --article-width: 720px;
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font);
  color: var(--text-main);
  background: #ffffff;
  line-height: 1.7;
}

a {
  color: var(--primary);
  text-decoration: none;
}

img {
  max-width: 100%;
  border-radius: 10px;
}

.container {
  max-width: var(--container);
  margin: auto;
  padding: 0 20px;
}

.article-wrapper {
  max-width: var(--content-max-width);
  margin: 40px auto;
  padding: 0 20px;
}

h1 {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 12px;
}

h2 {
  font-size: 26px;
  margin-top: 36px;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border);
}

p {
  font-size: 16px;
  color: var(--text-secondary);
  margin: 16px 0;
}

ul {
  margin: 16px 0 20px 22px;
  color: var(--text-secondary);
}

.article-content img {
  margin: 26px 0;
}

.article-meta {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.header {
  border-bottom: 1px solid var(--border);
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.author-box {
  background: var(--bg-light);
  padding: 16px;
  border-radius: 10px;
  margin-top: 30px;
}

.btn {
  background: var(--primary);
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
}

.card-title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.card-desc { color: var(--text-secondary); font-size: 14px; }
```

### 3.5 src/styles/article-layout.css

**Purpose:** Three-column article layout with TOC and sidebar

```css
.article-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 260px;
  gap: 36px;
  width: 100%;
  margin: 40px auto;
  padding: 0 28px;
  box-sizing: border-box;
}

.article-main {
  max-width: 720px;
}

.toc {
  position: sticky;
  top: 100px;
  font-size: 14px;
}

.toc h4 {
  margin-bottom: 10px;
}

.toc a {
  display: block;
  margin-bottom: 8px;
  color: #6b7280;
}

.related-sidebar {
  position: sticky;
  top: 100px;
}

.related-card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
}

@media (max-width: 1024px) {
  .article-layout {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }

  .toc,
  .related-sidebar {
    display: none;
  }
}
```

---

## 4. Extended Healthline Theme (from index.css)

The project includes comprehensive Healthline-inspired theming:

```css
:root {
  --hl-accent: #02838d;
  --hl-accent-600: #08565c;
  --hl-text: #231f20;
  --hl-muted: #767474;
  --hl-bg: #ffffff;
  --hl-site-max: 1100px;
  --hl-content-max: 750px;
  --hl-sidebar-width: 320px;
  --hl-gutter: 24px;
}

html { 
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; 
  font-size: 17px; 
  color: var(--hl-text); 
}

body { 
  background: var(--hl-bg); 
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
}

p { 
  font-size: 17px; 
  line-height: 26px; 
  margin: 20px 0; 
}

@media(min-width:768px){ 
  p { font-size: 18px; } 
}

h1 { 
  font-family: 'Proxima Nova Condensed', 'Proxima Nova Condensed Fallback', sans-serif; 
  font-weight: 700; 
  font-size: 34px; 
  line-height: 38px; 
  margin: 25px 0 15px; 
}

@media(min-width:768px){ 
  h1 { font-size: 50px; line-height: 54px; } 
}

h2 { 
  font-family: 'Proxima Nova', sans-serif; 
  font-weight: 700; 
  font-size: 24px; 
  line-height: 30px; 
  margin: 30px 0 15px; 
}

@media(min-width:768px){ 
  h2 { font-size: 38px; line-height: 42px; } 
}

h3 { 
  font-size: 20px; 
  line-height: 26px; 
  margin: 24px 0 12px; 
}

@media(min-width:768px){ 
  h3 { font-size: 26px; line-height: 30px; } 
}

.site-container { 
  max-width: var(--hl-site-max); 
  margin: 0 auto; 
  padding: 0 var(--hl-gutter); 
  box-sizing: border-box; 
}

.page-grid { 
  display: grid; 
  grid-template-columns: 1fr var(--hl-sidebar-width); 
  gap: 48px; 
  align-items: start; 
}

@media(max-width: 990px) { 
  .page-grid { grid-template-columns: 1fr; gap: 24px; } 
}

.article-column { 
  max-width: var(--hl-content-max); 
  width: 100%; 
  margin: 0 auto; 
}

.article-content { 
  box-sizing: border-box; 
  padding: 0 8px; 
}

/* Float helpers for richer longform */
.article-content img.float-left { 
  float: left; 
  width: 40%; 
  max-width: 420px; 
  margin: 0 24px 18px 0; 
}

.article-content img.float-right { 
  float: right; 
  width: 40%; 
  max-width: 420px; 
  margin: 0 0 18px 24px; 
}

@media(max-width:768px){ 
  .article-content img.float-left, 
  .article-content img.float-right { 
    float: none; 
    display: block; 
    margin: 16px auto; 
    width: 100%; 
  } 
}

/* Sticky TOC / sidebar */
.toc, .article-sidebar { 
  background: #fbfdff; 
  border: 1px solid #eef2ff; 
  padding: 12px; 
  border-radius: 10px; 
}

.toc { 
  position: sticky; 
  top: 90px; 
  max-height: calc(100vh - 120px); 
  overflow: auto; 
}

.toc a { 
  display: block; 
  color: var(--hl-accent-600); 
  padding: 8px 0; 
  font-size: 0.95rem; 
  text-decoration: none; 
}

.toc a:hover { 
  color: var(--hl-accent); 
}

.toc .label { 
  font-family: 'Proxima Nova Condensed', Arial Narrow, sans-serif; 
  text-transform: uppercase; 
  font-weight: 700; 
  font-size: 13px; 
  color: white; 
  background: var(--hl-accent); 
  padding: 8px; 
  border-radius: 6px; 
  display: inline-block; 
}

/* Buttons */
.btn { 
  display: inline-flex; 
  align-items: center; 
  gap: 8px; 
  padding: 8px 14px; 
  border-radius: 10px; 
  font-weight: 600; 
}

.btn-primary { 
  background: var(--hl-accent); 
  color: white; 
  border: 1px solid #fcba44; 
}

.btn-secondary { 
  background: transparent; 
  color: var(--hl-accent-600); 
  border: 1px solid #e6e9ef; 
}

/* Readability helpers */
.lead { 
  font-size: 1.1rem; 
  line-height: 1.7; 
  color: var(--hl-muted); 
}

.muted { 
  color: var(--hl-muted); 
}

/* Responsive breakpoints */
@media(min-width:550px){ 
  .site-container { padding: 0 20px; } 
}

@media(min-width:768px){ 
  .site-container { padding: 0 40px; } 
}

@media(min-width:990px){ 
  .site-container { padding: 0 45px; } 
}

/* Accessibility */
a:focus, button:focus { 
  outline: 3px solid rgba(2,131,141,0.18); 
  outline-offset: 2px; 
}

/* Print styles */
@media print { 
  .toc, .article-sidebar, .btn { display: none !important; } 
  body { color: #000; } 
}
```

---

## 5. CSS Variables Summary

### Global Variables (src/global.css)
- `--site-max-width: 1200px`
- `--content-max-width: 680px`
- `--gutter: 1rem`
- `--muted: #6b7280`
- `--accent: #646cff`
- `--accent-600: #4c51bf`
- `--surface: #ffffff`
- `--card: #f8fafc`
- `--radius: 10px`

### Health Theme Variables (src/styles/health-theme.css)
- `--primary: #0066cc`
- `--text-main: #1a1a1a`
- `--text-secondary: #6b7280`
- `--border: #e5e7eb`
- `--bg-light: #f7f8fa`
- `--container: 1200px`
- `--article-width: 720px`

### Healthline Theme Variables (Extended in index.css)
- `--hl-accent: #02838d`
- `--hl-accent-600: #08565c`
- `--hl-text: #231f20`
- `--hl-muted: #767474`
- `--hl-bg: #ffffff`
- `--hl-site-max: 1100px`
- `--hl-content-max: 750px`
- `--hl-sidebar-width: 320px`
- `--hl-gutter: 24px`

### Tailwind CSS Variables (from tailwind.config.ts)
- HSL-based color system for dynamic theming
- Category colors: `conditions`, `wellness`, `nutrition`, `fitness`, `lifestyle`
- Semantic colors: `info`, `success`, `warning`
- Sidebar theme variables

---

## 6. Key Classes & Components

### Layout
- `.site-container` - Main site wrapper
- `.article-content` - Centered article column
- `.article-layout` - Three-column grid layout
- `.page-grid` - Two-column page with sidebar

### Components
- `.btn`, `.btn-primary`, `.btn-secondary` - Button styles
- `.card`, `.article-card` - Card containers
- `.toc` - Table of contents styling
- `.search-bar` - Search input wrapper
- `.icon-btn` - Icon button
- `.article-hero` - Hero image
- `.header` - Sticky header
- `.nav` - Navigation bar

### Utilities
- `.muted` - Muted text color
- `.lead` - Lead paragraph style
- `.prose` - Prose content wrapper
- `.menu-section`, `.menu-column`, `.menu-link` - Menu styling

---

## 7. Fonts Used

### Google Fonts
- **Inter** (weights: 300, 400, 600, 700, 800)
- **Merriweather** (weights: 300, 400, 700)

### System Fonts
- -apple-system
- BlinkMacSystemFont
- Segoe UI
- Roboto
- Arial
- sans-serif

---

## 8. Color Palette Summary

### Primary Colors
- Accent: `#646cff` / `#02838d` (Healthline)
- Primary: `#0066cc`
- Background: `#ffffff`
- Text: `#1a1a1a` / `#111827`

### Semantic Colors
- Muted: `#6b7280` / `#767474`
- Border: `#e5e7eb`
- Light BG: `#f7f8fa` / `#fbfdff`
- Success/Green: `#fcba44`

---

## 9. Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px

---

## 10. Key Styling Patterns

1. **Mobile-First Responsive**: Uses max-width media queries for desktop adjustments
2. **CSS Variables**: Extensive use of custom properties for theming
3. **Tailwind Integration**: Combines Tailwind utilities with custom CSS
4. **Accessibility**: Focus states and keyboard navigation support
5. **Print Styles**: Optimized for printing (hides UI elements)
6. **Float Images**: Supports floated images in article content with fallback to block on mobile
7. **Sticky Elements**: Sticky headers, TOC, and sidebars
8. **Card Hover Effects**: Subtle shadow and transform effects
9. **Typography System**: Consistent heading and body text hierarchy
10. **Grid Layouts**: Modern CSS Grid for multi-column layouts

---

## 11. Unused/Legacy CSS

The project references some font families that aren't loaded (to avoid CORS issues):
- 'Proxima Nova Condensed'
- 'Proxima Nova'

These fall back to Arial Narrow and sans-serif respectively.

---

This extraction captures all CSS styling in the SixHealth project as of February 27, 2026.
