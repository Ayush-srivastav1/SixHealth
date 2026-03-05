# CSS Variables & Design System Reference

## Quick Reference: All CSS Variables

### Global Layout Variables
```css
--site-max-width: 1200px          /* Maximum site container width */
--content-max-width: 680px        /* Article/content column max width */
--gutter: 1rem                    /* Padding/margin spacing unit */
--radius: 10px                    /* Standard border radius */
```

### Color Palette - Global
```css
--accent: #646cff                 /* Primary accent color */
--accent-600: #4c51bf             /* Darker accent for hover/active states */
--muted: #6b7280                  /* Muted text color */
--surface: #ffffff                /* Main background surface */
--card: #f8fafc                   /* Card/light background */
```

### Color Palette - Health Theme
```css
--primary: #0066cc                /* Primary brand color */
--text-main: #1a1a1a              /* Main text color */
--text-secondary: #6b7280         /* Secondary text color */
--border: #e5e7eb                 /* Border color */
--bg-light: #f7f8fa               /* Light background */
```

### Color Palette - Healthline Theme
```css
--hl-accent: #02838d              /* Healthline accent teal */
--hl-accent-600: #08565c           /* Healthline darker teal */
--hl-text: #231f20                /* Healthline text color */
--hl-muted: #767474               /* Healthline muted color */
--hl-bg: #ffffff                  /* Healthline background */
```

### Healthline Layout Variables
```css
--hl-site-max: 1100px             /* Healthline site max width */
--hl-content-max: 750px           /* Healthline content width */
--hl-sidebar-width: 320px         /* Sidebar width */
--hl-gutter: 24px                 /* Healthline spacing */
```

### Health Theme Dimensions
```css
--container: 1200px               /* Main container width */
--article-width: 720px            /* Article content width */
```

---

## Color Swatches

### Primary Accent Colors
| Variable | Color | Usage |
|----------|-------|-------|
| `--accent` | #646cff | Primary UI elements, links |
| `--hl-accent` | #02838d | Healthline theme primary |
| `--primary` | #0066cc | Health theme primary |

### Text & Muted
| Variable | Color | Usage |
|----------|-------|-------|
| `--text-main` | #1a1a1a | Primary text |
| `--text-secondary` | #6b7280 | Secondary text, muted content |
| `--hl-text` | #231f20 | Healthline text |
| `--hl-muted` | #767474 | Healthline muted text |

### Backgrounds
| Variable | Color | Usage |
|----------|-------|-------|
| `--surface` | #ffffff | Main surface/background |
| `--card` | #f8fafc | Card backgrounds |
| `--bg-light` | #f7f8fa | Light backgrounds |
| `--hl-bg` | #ffffff | Healthline background |

---

## Component-Specific Colors

### Accent Shades
- **Default**: #646cff (HSL: 235, 100%, 74%)
- **600**: #4c51bf (HSL: 243, 54%, 63%)

### Healthline Accent Shades
- **Default**: #02838d (HSL: 182, 96%, 28%)
- **600**: #08565c (HSL: 183, 73%, 22%)

### Link Colors
- **Global**: #5a67d8
- **Health Theme**: #0066cc
- **Healthline Theme**: #02838d

### Button Colors
- **Primary**: Accent color (varies by theme)
- **Secondary**: Transparent with border

### Card Styling
- **Background**: #f8fafc or #fbfdff
- **Border**: #e6e9ef or #eef2ff
- **Shadow**: rgba(11,15,26,0.04) or rgba(0,0,0,0.08)

---

## Font Configuration

### Font Families
```css
--font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif
```

### Primary Fonts
- **Body**: Inter (weights: 300, 400, 600, 700, 800)
- **Headlines**: Merriweather (serif, weights: 300, 400, 700)
- **System Fallbacks**:
  - -apple-system
  - BlinkMacSystemFont
  - Segoe UI
  - Roboto
  - Arial

### Tailwind Font Configuration
```typescript
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  display: ["Inter", "system-ui", "sans-serif"],
}
```

---

## Responsive Breakpoints

### Tailwind Breakpoints
```css
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1400px
```

### Media Query Breakpoints
```css
(max-width: 640px)   /* Mobile */
(max-width: 768px)   /* Tablet */
(max-width: 990px)   /* Laptop */
(max-width: 1024px)  /* Desktop adjustments */
(min-width: 550px)   /* Small to medium */
(min-width: 768px)   /* Medium to large */
(min-width: 990px)   /* Large to extra large */
```

---

## Typography Scale

### Headings
| Level | Size | Weight | Line Height |
|-------|------|--------|-------------|
| h1 | 42-50px | 700 | 1.12-1.2 |
| h2 | 26-38px | 700 | 1.3-1.4 |
| h3 | 20-26px | 700 | 1.2-1.3 |
| h4 | 16-20px | 600 | 1.3 |

### Body Text
| Type | Size | Line Height |
|------|------|-------------|
| Body | 16-19px | 1.6-1.75 |
| Small | 14px | 1.4 |
| Meta/Caption | 14px | 1.4 |
| Lead | 1.1rem (18-20px) | 1.7 |

### Article Typography
```css
.article-wrapper article p {
  font-size: 19px;
  color: #111827;
  line-height: 1.75;
}
```

---

## Spacing & Sizing

### Standard Spacing
```css
--gutter: 1rem (16px)              /* Default spacing unit */
--hl-gutter: 24px                  /* Healthline spacing unit */
```

### Padding/Margin Values
| Class | Value |
|-------|-------|
| Button padding | 0.6em 1.2em or 8px 14px or 10px 18px |
| Card padding | 1rem or 12px or 18px |
| Component gap | 8px, 24px, or 36px |

### Container Widths
| Name | Width | Usage |
|------|-------|-------|
| --site-max-width | 1200px | Site container max |
| --hl-site-max | 1100px | Healthline site max |
| --content-max-width | 680px | Article content width |
| --hl-content-max | 750px | Healthline article width |
| --article-width | 720px | Health theme article width |

### Sidebar
```css
--hl-sidebar-width: 320px          /* Sidebar column width */
```

---

## Border & Radius

### Border Radius
```css
--radius: 10px                     /* Standard radius */
var(--radius) - 2px                /* Medium radius */
var(--radius) - 4px                /* Small radius */
```

### Border Colors
```css
#e5e7eb                            /* Light gray border */
#e6e9ef                            /* Lighter gray border */
#eef2ff                            /* Blue-tinted light border */
```

### Box Shadows
```css
0 1px 4px rgba(16,24,40,0.04)     /* Light shadow */
0 4px 18px rgba(11,15,26,0.04)    /* Medium shadow */
0 10px 28px rgba(0,0,0,0.08)      /* Larger shadow */
```

---

## Layout Classes & Patterns

### Container Classes
```css
.site-container      /* Max-width: 1200px, auto-centered */
.article-content     /* Max-width: 680px, auto-centered */
.article-layout      /* 3-column grid: 240px | 1fr | 260px */
.article-wrapper     /* Max-width: var(--content-max-width) */
.page-grid           /* 2-column grid: 1fr | sidebar-width */
```

### Component Classes
```css
.btn                 /* Base button styles */
.btn-primary         /* Primary button (colored) */
.btn-secondary       /* Secondary button (outline) */
.card                /* Card container */
.article-card        /* Article card with image */
.toc                 /* Table of contents */
.article-hero        /* Hero image */
.icon-btn            /* Icon button */
.search-bar          /* Search input container */
```

### Image Classes
```css
.article-content img.float-left   /* Float left, 40% width */
.article-content img.float-right  /* Float right, 40% width */
.article-hero                     /* Full-width hero image */
.article-figure                   /* Figure wrapper */
```

---

## Special Effects & Transitions

### Hover States
```css
.card:hover {
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.icon-btn:hover {
  background: rgba(100,108,255,0.08);
}
```

### Transitions
```css
transition: border-color 0.25s     /* Button border */
transition: all 0.2s ease          /* Card */
```

### Focus States
```css
outline: 3px solid rgba(2,131,141,0.18);
outline-offset: 2px;
```

---

## Responsive Design Patterns

### Mobile-First Updates
```css
/* Small screens: defaults */
--site-max-width: 100%;
--content-max-width: 100%;
.search-bar input { width: 120px; }
.article-hero { max-height: 320px; }

/* Medium: 640px+ */
@media (min-width: 550px) {
  .site-container { padding: 0 20px; }
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .site-container { padding: 0 40px; }
  p { font-size: 18px; }
}

/* Desktop: 990px+ */
@media (min-width: 990px) {
  .site-container { padding: 0 45px; }
  .page-grid { display: grid; }
}
```

### Sticky Elements
```css
.toc {
  position: sticky;
  top: 90px;
  max-height: calc(100vh - 120px);
  overflow: auto;
}

.related-sidebar {
  position: sticky;
  top: 100px;
}
```

---

## Print Styles
```css
@media print {
  .toc, .article-sidebar, .btn { 
    display: none !important; 
  }
  body { 
    color: #000; 
  }
}
```

---

## Accessibility Features

### Focus Visible
```css
a:focus, button:focus {
  outline: 3px solid rgba(2,131,141,0.18);
  outline-offset: 2px;
}
```

### High Contrast Colors
- Text on white: #1a1a1a, #0f172a (WCAG AA compliant)
- Links: #646cff, #0066cc, #02838d

---

## Tailwind CSS Colors Integration

### Extended Color System (from tailwind.config.ts)
```typescript
colors: {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: { DEFAULT, foreground },
  secondary: { DEFAULT, foreground },
  destructive: { DEFAULT, foreground },
  muted: { DEFAULT, foreground },
  accent: { DEFAULT, foreground },
  popover: { DEFAULT, foreground },
  card: { DEFAULT, foreground },
  category: {
    conditions: "hsl(var(--category-conditions))",
    wellness: "hsl(var(--category-wellness))",
    nutrition: "hsl(var(--category-nutrition))",
    fitness: "hsl(var(--category-fitness))",
    lifestyle: "hsl(var(--category-lifestyle))",
  },
  info: { DEFAULT, foreground },
  success: { DEFAULT, foreground },
  warning: { DEFAULT, foreground },
}
```

---

This CSS variable reference was generated on **2026-02-27** for the DoctorSix project.

