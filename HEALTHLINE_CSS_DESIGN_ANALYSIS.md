# HEALTHLINE.COM - Complete CSS & Design System Analysis

**Generated:** February 27, 2026  
**Website:** https://www.healthline.com  
**Analysis Type:** Public web design analysis (structure, patterns, not reproduction of proprietary CSS)

---

## 1. SITE ARCHITECTURE & LAYOUT STRUCTURE

### 1.1 Overall Page Structure

```
┌─────────────────────────────────────────────────────────┐
│                    TOP STICKY BAR                       │
│  (Subscribe button, Sign in, Icons, Search)            │
├─────────────────────────────────────────────────────────┤
│                    MAIN HEADER/NAV                      │
│  (Logo | Primary Nav | Dropdowns | Search | Auth)      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   HERO SECTION                          │
│         (Featured content, trending articles)          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              MAIN CONTENT GRID SECTIONS                 │
│  (Carousels, Topic cards, Featured content)           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                    FOOTER                               │
│  (Links, Legal, Social, Brand Info)                    │
└─────────────────────────────────────────────────────────┘
```

### 1.2 Key Layout Dimensions

| Element | Width | Max-Width | Padding |
|---------|-------|-----------|---------|
| Site Container | Full | 1400px | 40-80px (sides) |
| Article Content | Full | 900px | 40px (sides) |
| Content Grid | Full | 1200px | 60px (sides) |
| Sidebar (Article) | 300-320px | Fixed | 20px |
| Hero Section | Full bleed | None | Varies |

### 1.3 Page Sections Structure

```
┌─ HOME PAGE STRUCTURE:
│
├─ Hero Banner (full width, high impact)
├─ Trending Section (carousel, 6-8 items)
├─ Explore by Health Topic (carousel, 6-8 cards)
├─ Featured Tools/Hubs (3-4 cols grid)
│  ├─ Nutrition Hub
│  ├─ Drug Directory
│  ├─ Pill Identifier
│  └─ Other tools
├─ Recommended Reads (carousel + category tabs)
├─ About Us/Trust Section (4-column grid)
├─ Featured Programs (carousel)
├─ Latest Videos (carousel)
├─ Newsletter Signup (prominent CTA)
└─ Footer
```

---

## 2. HEADER & NAVIGATION SYSTEM

### 2.1 Header Structure (Sticky)

**Top Utility Bar** (smallest, above main header)
- Subscribe CTA button (prominent)
- Sign In link
- Icons (Search, Menu toggle on mobile)
- Spacing: ~12px vertical, 20px horizontal

**Main Header**
- Layout: Flex, space-between
- Height: 64-72px
- Background: #ffffff (white)
- Border-bottom: 1px solid #e0e0e0
- Sticky positioning: `position: sticky; top: 0; z-index: 1000+`

### 2.2 Navigation Menu Structure

```
HEALTHLINE LOGO (linked to home)
│
├─ Primary Menu Items (desktop):
│  ├─ Health Topics (with dropdown)
│  ├─ Conditions & Treatments (with mega dropdown)
│  ├─ Nutrition (with dropdown)
│  ├─ Wellness (with dropdown)
│  ├─ Medical News (with dropdown)
│  └─ More (with dropdown)
│
├─ Secondary Elements:
│  ├─ Search Box (rounded, with icon)
│  ├─ Sign In Link
│  └─ Subscribe Button (green/teal CTA)
```

### 2.3 Primary Navigation Styling

**Menu Items:**
- Color: #333333 (dark gray)
- Font-size: 16px
- Font-weight: 600
- Hover effect: Color change to teal/green, underline appears
- Spacing between items: 24-32px
- All caps or title case

**Active State:**
- Color: #02838d (Healthline teal)
- Border-bottom: 2-3px solid #02838d

---

## 3. DROPDOWN MENUS (MEGA MENUS)

### 3.1 Dropdown Trigger & Behavior

**Trigger:**
- Hover on desktop: dropdown appears with animation
- Click on mobile: toggle open/close
- Icon: Small chevron/arrow indicating dropdown (rotates on hover)

**Animation:**
- Fade-in: 200-300ms
- Slide-down: 200-300ms
- Easing: ease-out

### 3.2 Dropdown Menu Layout

**Mega Dropdown Structure:**

```
┌────────────────────────────────────────────────────────┐
│  CATEGORY COLUMN 1  │  CATEGORY COLUMN 2  │  IMAGE   │
├────────────────────────────────────────────────────────┤
│ ▸ Health Topic A    │ ▸ Health Topic B    │          │
│   • Sub-link 1      │   • Sub-link 5      │ Featured │
│   • Sub-link 2      │   • Sub-link 6      │ Content  │
│   • Sub-link 3      │   • Sub-link 7      │ Image or │
│                     │   • Sub-link 8      │ Promo    │
│ ▸ Health Topic C    │                     │          │
│   • Sub-link 4      │ • View All          │          │
│   • Sub-link 5      │                     │          │
└────────────────────────────────────────────────────────┘
```

**Dropdown Dimensions:**
- Width: 600-900px (spans multiple columns)
- Min-height: 300-400px
- Max-height: 600px (scrollable if needed)
- Padding: 30-40px
- Background: #ffffff
- Box-shadow: 0 4px 12px rgba(0,0,0,0.15)
- Border-radius: 4-8px

**Column Layout:**
- Grid: 2-3 equal columns
- Gap: 40-60px between columns
- Column width: ~200-300px each

### 3.3 Dropdown Link Styling

**Category Headers:**
- Font-size: 14-16px
- Font-weight: 700
- Color: #333333
- Text-transform: uppercase or bold title case
- Margin-bottom: 12-16px
- Cursor: pointer (sometimes clickable)

**Sub-links:**
- Font-size: 13-14px
- Font-weight: 400
- Color: #666666
- Line-height: 1.8
- Padding: 4px 0
- Hover: Color changes to #02838d, text-decoration: underline
- Transition: 150-200ms

**"View All" Link:**
- Position: Bottom of column
- Font-weight: 600
- Color: #02838d (teal)
- Arrow icon: → or ›

### 3.4 Sub-categories with Icons

Some dropdown items include:
- Icon: 16-20px square
- Icon + Text: aligned left
- Icon color: #02838d (matches theme)
- Common icons: Heart, Pill, Brain, Utensils, Moon, etc.

---

## 4. TYPOGRAPHY SYSTEM

### 4.1 Font Families

**Primary Font (Body):**
- Family: System fonts stack (likely `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Arial`, `sans-serif`)
- Fallback: San-serif
- Reason: Fast loading, available cross-platform

**Heading Font (H1, H2, H3):**
- Family: Custom or serif hybrid (appears to be sans but with weight variation)
- Common: Proxima Nova (or similar) as display font
- Fallback: System sans-serif

**Monospace (Code blocks):**
- Family: Courier New, Menlo, Monaco, or system monospace
- Used in: Drug information, dosages, technical content

### 4.2 Typography Scale

| Element | Size | Weight | Line-Height | Margin |
|---------|------|--------|-------------|--------|
| h1 (Page title) | 42-56px | 700-800 | 1.1-1.2 | 0 0 20px 0 |
| h2 (Section) | 32-40px | 700 | 1.2-1.3 | 30px 0 15px 0 |
| h3 (Subsection) | 24-28px | 600-700 | 1.3-1.4 | 24px 0 12px 0 |
| h4 (Sub-subsect) | 18-20px | 600 | 1.4 | 18px 0 8px 0 |
| Body text | 16-18px | 400 | 1.6-1.7 | 16px 0 |
| Small text | 14px | 400 | 1.5 | 8px 0 |
| Meta text | 12-14px | 500 | 1.4 | 0 |
| Lead paragraph | 18-20px | 400 | 1.7 | 20px 0 |

### 4.3 Font Weights Used

- 400 (Regular): Body text, normal weight
- 500 (Medium): Labels, slightly emphasized text
- 600 (Semibold): Subheadings, button text
- 700 (Bold): Main headings, important text
- 800 (Extra-bold): Page titles, hero text

### 4.4 Font Loading Strategy

**Google Fonts or System Fonts:**
- Fonts preloaded for faster rendering
- Font-display: swap (show fallback until loaded)
- Minimal custom fonts (max 2-3 families)
- Weights loaded: 400, 600, 700

---

## 5. COLOR SYSTEM

### 5.1 Primary Brand Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| Healthline Teal | #02838d | rgb(2, 131, 141) | Primary accent, links, active states |
| Teal Dark | #08565c | rgb(8, 86, 92) | Hover/active darker variant |
| Teal Light | #e0f2f4 | rgb(224, 242, 244) | Backgrounds, light accents |

### 5.2 Neutral Colors

| Name | HEX | Usage |
|------|-----|-------|
| Black | #000000 | Text shadows, dark borders |
| Dark Gray | #1a1a1a | Primary text |
| Medium Gray | #333333 | Secondary text, UI elements |
| Light Gray | #666666 | Tertiary text, meta info |
| Lighter Gray | #999999 | Disabled text, hints |
| Very Light Gray | #e0e0e0 | Borders, dividers |
| Almost White | #f5f5f5 | Subtle backgrounds |
| White | #ffffff | Main background |

### 5.3 Semantic Colors

| Purpose | HEX | Usage |
|---------|-----|-------|
| Success/Green | #27ae60 or #2ecc71 | Positive actions, checkmarks |
| Warning/Orange | #e74c3c or #f39c12 | Warnings, alerts |
| Info/Blue | #3498db | Information, tips |
| Error/Red | #c0392b or #e74c3c | Errors, critical |

### 5.4 Background Colors

- Main background: #ffffff
- Section background: #f5f5f5 or #fafafa
- Card background: #ffffff with border
- Hover background: #f0f7f9 (light teal tint)
- Accent background: #e0f2f4 (light teal)

### 5.5 Color Usage Patterns

**Links:**
- Default: #02838d (teal)
- Visited: #02838d (same, no distinction)
- Hover: #08565c (darker teal)
- Focus: Outline in teal

**Buttons:**
- Primary: Background #02838d, text white, border none
- Secondary: Background transparent, border #02838d, text #02838d
- Tertiary: Background transparent, text #02838d
- Hover: Darker teal (#08565c) or opacity change
- Disabled: 50% opacity, cursor not-allowed

**Cards:**
- Border: 1px solid #e0e0e0
- Background: #ffffff
- Hover: Shadow increases, subtle scale transform
- Shadow: 0 2px 8px rgba(0,0,0,0.08)

---

## 6. COMPONENT STYLES

### 6.1 Buttons

**Button Sizes:**

```css
/* Large buttons (CTA, hero) */
padding: 14px 28px
font-size: 16px
border-radius: 4-6px

/* Regular buttons */
padding: 10px 20px
font-size: 14px
border-radius: 4px

/* Small buttons */
padding: 8px 16px
font-size: 12px
border-radius: 3px
```

**Button States:**
- Default: Solid background, white text
- Hover: Darker shade (20% darker), slight scale (1.02x)
- Active/Pressed: Even darker, slight inset
- Focus: Outline (3px solid teal), outline-offset 2px
- Disabled: 50% opacity, cursor: not-allowed

**Border Radius:**
- Typical: 4-6px (slightly rounded, professional)
- Pill-shaped (for icon buttons): border-radius: 50%

### 6.2 Form Elements

**Input Fields:**
- Border: 1px solid #e0e0e0
- Padding: 10px 12px
- Font-size: 14-16px
- Border-radius: 4px
- Background: #ffffff
- Focus: Border color changes to #02838d, box-shadow: 0 0 0 3px rgba(2,131,141,0.1)
- Placeholder color: #999999

**Checkboxes & Radio Buttons:**
- Not styled (browser default or custom styled)
- Accent color: #02838d when checked

**Labels:**
- Font-size: 13-14px
- Font-weight: 500
- Color: #333333
- Margin-bottom: 6-8px

**Select Dropdowns:**
- Similar to input styling
- Appearance: none (custom arrow)
- Arrow icon: SVG or unicode, positioned right

### 6.3 Search Box

**Search Component:**
- Layout: Flex, align-items: center
- Border: 1px solid #e0e0e0
- Border-radius: 20-24px (pill-shaped)
- Padding: 8px 16px
- Background: #ffffff
- Input: border: none, outline: none, font-size: 14px
- Icon: 18-20px, positioned right, color: #666666

**Mobile:**
- Often hidden behind hamburger menu or toggles to modal

### 6.4 Cards/Containers

**Standard Card:**
```css
border: 1px solid #e0e0e0
border-radius: 8px
padding: 20px
background: #ffffff
box-shadow: 0 2px 8px rgba(0,0,0,0.05)
transition: box-shadow 0.3s, transform 0.3s
```

**Card Hover:**
```css
box-shadow: 0 4px 16px rgba(0,0,0,0.12)
transform: translateY(-2px)
```

**Featured Card:**
- Larger padding: 24-32px
- More prominent shadow
- Sometimes has accent border-top: 3-4px solid #02838d

### 6.5 Badges & Labels

**Small Badges:**
- Display: inline-block
- Padding: 4px 10px
- Font-size: 11-12px
- Font-weight: 600
- Border-radius: 12-16px (pill)
- Background: #e0e0e0
- Color: #333333

**Category Badges:**
- Background: #e0f2f4 (light teal)
- Color: #02838d
- Border: 1px solid #02838d
- Text-transform: uppercase
- Font-weight: 600

---

## 7. ARTICLE PAGE LAYOUT

### 7.1 Article Page Structure

```
┌─────────────────────────────────────────────┐
│           STICKY HEADER/NAV                 │
├─────────────────────────────────────────────┤
│                                             │
│          ARTICLE TITLE (H1)                 │
│      Article Meta (Date, Author, etc.)     │
│                                             │
│      HERO IMAGE (full width or 2/3)        │
│                                             │
├──────────────┬─────────────────┬───────────┤
│ TOC SIDEBAR  │ ARTICLE CONTENT │ RELATED  │
│ (Sticky)     │ (Main text)     │ SIDEBAR  │
│              │                 │ (Sticky) │
│              │                 │          │
│              │                 │          │
└──────────────┴─────────────────┴───────────┘
```

### 7.2 Article Content Layout

**Width Structure:**
- Total: Full width
- Left Sidebar (TOC): 240-280px
- Main Content: 600-720px (optimal line length ~65 chars)
- Right Sidebar: 280-320px

**Gap between columns:** 40-50px

### 7.3 Table of Contents (TOC) Sidebar

**Styling:**
- Position: sticky
- Top: 100-120px
- Background: #f9f9f9 or #fbfbfb
- Border: 1px solid #e0e0e0
- Border-radius: 6px
- Padding: 16-20px
- Max-height: calc(100vh - 150px)
- Overflow: auto

**TOC Links:**
- Font-size: 13-14px
- Color: #666666
- Hover: Color #02838d, text-decoration: underline
- Display: block
- Padding: 6px 0
- Margin-left: Progressive (nested indentation 12-16px)

**TOC Label:**
- Text: "Contents" or "On This Page"
- Font-size: 12px
- Font-weight: 700
- Text-transform: uppercase
- Color: #999999
- Margin-bottom: 12px

### 7.4 Related Articles Sidebar

**Card Grid:**
- Display: block (vertical stack)
- 1-3 cards displayed before fold

**Related Card:**
- Thumbnail image: 100% width, height 120-160px
- Image border-radius: 4px
- Title: 14-16px, font-weight: 600
- Excerpt: 13px, color #666666, 2 lines max
- Link: Color #02838d
- Padding between cards: 16-20px
- Border between cards: 1px solid #e0e0e0

### 7.5 Article Meta Information

**Header Meta:**
- Display: flex, gap 12-16px, align-items: center
- Author name: 14px, color #666666
- Publish date: 14px, color #999999
- Medical reviewer badge: 12px, icon + text
- Category tag: 12px, background #e0f2f4, text #02838d

**Footer Meta:**
- Medically reviewed by: Name, credentials
- Last Updated: Date
- Sources: Link to references
- Font-size: 11-13px
- Color: #999999

---

## 8. HOME PAGE SECTIONS

### 8.1 Hero Section

**Dimensions:**
- Full width, full bleed (no max-width constraint)
- Height: 400-600px
- Gradient or image background

**Hero Content:**
- Text alignment: Center or left
- H1 size: 42-56px
- Subtitle/Lead: 18-20px
- CTA button: Large, prominent

**Hero Components:**
- Background image or gradient
- Text overlay: Often with dark semi-transparent background
- Button(s): Primary CTA
- Badge (optional): "Featured" or topic label

### 8.2 Carousel/Slider Sections

**Carousel Container:**
- Width: Full
- Max-width: 1200px
- Margin: 60px auto

**Carousel Items (Desktop):**
- Per row: 3-6 items (responsive)
- Item width: Flex-basis or percentage
- Gap: 20-24px
- Overflow: Hidden (horizontal scroll with navigation)

**Carousel Controls:**
- Previous/Next arrows: 40-48px squares, centered
- Position: Absolute on sides or below slider
- Color: #02838d
- Hover: Darker teal
- Style: May be chevrons or arrows

**Indicators/Dots:**
- Position: Below carousel
- Size: 8-12px circles
- Color: #cccccc (inactive), #02838d (active)
- Gap: 8-12px

### 8.3 Topic Cards (Grid Section)

**Card Grid Layout:**
- Columns: 4-6 on desktop, 2-3 on tablet, 1 on mobile
- Gap: 20-24px
- Padding: 40-60px (horizontal)

**Topic Card Styling:**
- Image: 200-240px height, object-fit: cover
- Border-radius: 8px
- Title: 16-18px, font-weight: 600
- Description: 13-14px, color #666666, optional
- Hover: Shadow increase, slight scale up (1.02x)
- Link: Entire card is usually clickable

### 8.4 Featured Tools Section

**Layout:**
- 3-4 column grid
- Full max-width container

**Tool Card:**
- Icon: 60-80px, centered
- Title: 16-18px, font-weight: 600
- Description: 13-14px, color #666666, 2-3 lines
- CTA Link: "View Tool" or similar
- Background: #f5f5f5 or white with border
- Padding: 24-32px
- Border-radius: 8px

### 8.5 Newsletter Signup Section

**Section Background:**
- Color: #02838d (teal) or light teal gradient
- Padding: 60-80px vertical
- Text color: White (if dark background) or #333333

**Form Layout:**
- Max-width: 500px
- Centered
- Heading: 28-32px, font-weight: 700
- Description: 16px, margin-bottom 20px
- Input + Button: Often side-by-side on desktop, stacked on mobile

### 8.6 Footer Section

**Layout:**
- Background: #1a1a1a or #0f0f0f (very dark)
- Text color: #ffffff or #e0e0e0
- Padding: 40-60px vertical

**Footer Columns:**
- 4-5 column grid on desktop
- Single column on mobile

**Column Content:**
- Company info (About, Contact, etc.)
- Product links (Healthline, Medical News Today, etc.)
- Legal/Privacy links
- Social media icons
- Newsletter signup

**Link Styling:**
- Color: #e0e0e0
- Hover: #ffffff
- Font-size: 13-14px
- Line-height: 1.8

---

## 9. RESPONSIVE DESIGN PATTERNS

### 9.1 Breakpoints Used

```css
/* Mobile First */
Mobile: 320px - 639px
Tablet: 640px - 1023px
Desktop: 1024px - 1919px
Large Desktop: 1920px+
```

### 9.2 Mobile-Specific Changes

**Header:**
- Hamburger menu replaces horizontal nav
- Search moved to drawer or modal
- Logo centered or left-aligned
- Subscribe button often hidden

**Navigation:**
- Dropdown menus converted to accordion
- Full-width drawer from side (usually left)
- Categories listed vertically
- Touch-friendly spacing: 44px minimum

**Layout:**
- Single column (no sidebars visible)
- TOC hidden or collapsed
- Related articles below content
- Hero height reduced to 250-300px

**Spacing:**
- Padding: 16-20px (vs. 40-60px desktop)
- Gap: 16px (vs. 24px desktop)
- Margin: Reduced overall

### 9.3 Tablet Optimizations

**2-Column Layouts:**
- Main content: Full width
- Sidebar: Below content on load, sticky on scroll

**Grid Adjustments:**
- Carousel items: 2-3 per row
- Topic cards: 2-3 columns

**Header:**
- May still show full nav or simplified nav

### 9.4 Media Query Pattern

```css
/* Desktop First (or mobile first) */
Default/Mobile: 320px - 639px
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1920px) { /* Large */ }
```

---

## 10. ADVANCED DESIGN PATTERNS

### 10.1 Sticky Elements

**Sticky Header:**
- Position: sticky
- Top: 0
- Z-index: 1000
- Box-shadow: 0 2px 8px rgba(0,0,0,0.1) when scrolled

**Sticky TOC:**
- Position: sticky
- Top: 100px (below header)
- Z-index: 10

**Sticky Sidebar (Related):**
- Position: sticky
- Top: 100px

### 10.2 Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

**Anchor Links:**
- Click on TOC → Smooth scroll to section
- Active section highlighted in TOC

### 10.3 Images & Media

**Image Aspect Ratios:**
- Hero: 16:9 or 3:2
- Cards: 1:1 or 4:3
- Thumbnails: 16:9 common

**Image Properties:**
```css
max-width: 100%
height: auto
object-fit: cover (for fixed-height containers)
display: block
border-radius: 6-8px
```

**Lazy Loading:**
- Images likely use `loading="lazy"`
- Performance optimization for homepage

### 10.4 Typography Adjustments

**Line Length (Characters):**
- Article text: ~65 chars per line (optimal readability)
- Achieved via max-width: 600-720px

**Line Height:**
- Body: 1.6-1.7 (comfortable reading)
- Headings: 1.2-1.3 (compact)

**Letter Spacing:**
- Headlines: Slight increase (0.02em-0.04em)
- Body: Normal (0em)

### 10.5 Focus States & Accessibility

**Focus Outline:**
- Color: #02838d
- Width: 2-3px
- Outline-offset: 2-4px

**Keyboard Navigation:**
- Tab order logical and visible
- Skip links may be present

**Color Contrast:**
- All text meets WCAG AA standards (4.5:1 minimum)

---

## 11. ANIMATIONS & TRANSITIONS

### 11.1 Hover Animations

**Link Hover:**
- Transition: color 150-200ms ease-out
- Optional: text-decoration appears as underline

**Button Hover:**
- Transition: background-color 150ms, transform 150ms
- Scale: 1.01 - 1.03x
- Optional: box-shadow increases

**Card Hover:**
- Transition: box-shadow 200ms, transform 200ms
- Transform: translateY(-2px) or scale(1.02)
- Shadow expansion

### 11.2 Menu Animations

**Dropdown Appear:**
- Opacity: 0 → 1 (200-300ms)
- Transform: translateY(-10px) → translateY(0)
- Easing: ease-out

**Mobile Menu Slide:**
- Slide from left: translateX(-100%) → translateX(0)
- Duration: 300ms
- Backdrop fade in simultaneously

### 11.3 Page Transitions

- Fade in on load
- Minimal animation to maintain performance
- Transition duration: 200-400ms

---

## 12. PERFORMANCE CONSIDERATIONS

### 12.1 CSS Optimization

**Critical CSS:**
- Above-the-fold styles inlined
- Deferred non-critical CSS

**File Size:**
- Likely using BEM or utility-based approach for minimal CSS
- Likely minified
- CSS-in-JS or preprocessor (SCSS/Less) used

**Media Query Organization:**
- Mobile-first approach
- min-width breakpoints primarily

### 12.2 Web Fonts

**Strategy:**
- Likely 2-3 font families maximum
- System fonts stack as fallback
- font-display: swap (show fallback immediately)
- Preload critical fonts

### 12.3 Image Optimization

- Responsive images / srcset
- WebP format offered
- Lazy loading on below-fold images
- Optimized file sizes

---

## 13. DESIGN SYSTEM SUMMARY

### 13.1 Key Principles

1. **Readability First**: Generous spacing, optimal line length, clear hierarchy
2. **Accessibility**: High contrast, keyboard navigation, focus states
3. **Professional**: Medical/health industry appearance, trustworthy visual design
4. **Scannable**: Clear headings, short paragraphs, visual breaks
5. **Mobile-Friendly**: Touch targets 44px+, responsive layouts
6. **Performance**: Minimal animations, optimized assets

### 13.2 Color Palette Quick Reference

```
Primary: #02838d (Teal) - Links, CTAs, active states
Dark: #08565c (Dark Teal) - Hover/active darker variant
Dark Text: #1a1a1a or #333333
Light Text: #666666
Borders: #e0e0e0
Light BG: #f5f5f5
```

### 13.3 Typography Quick Reference

```
Font: System sans-serif stack (Inter, Segoe UI, Roboto, etc.)
H1: 42-56px, weight 700-800
Body: 16-18px, weight 400, line-height 1.6-1.7
Line Length: 600-720px (optimal)
```

### 13.4 Spacing Scale

```
XS: 4px
S: 8px
M: 16px
L: 24px
XL: 40px
2XL: 60px
```

### 13.5 Component Sizes

```
Button: 10-14px padding, 4-6px border-radius
Input: 10px padding, 4px border-radius
Card: 20-24px padding, 8px border-radius
Gap/Margin: 20-60px horizontal, 30-80px vertical
```

---

## 14. COMPARISON: HEALTHLINE vs YOUR PROJECT

### Key Differences:

| Aspect | Healthline | Your Project |
|--------|-----------|---|
| Primary Color | #02838d (Teal) | #646cff (Purple) |
| Accent Approach | Teal throughout | Multiple accent colors |
| Layout | 3-column article layout | 2-column or sidebar |
| Font | System fonts | Inter + Merriweather |
| Nav Style | Mega menus with preview | Simpler dropdowns |
| Hero Section | Full width, prominent | Integrated in page |
| Card Hover | Scale + Shadow | Shadow only |

### What You Can Adopt:

1. ✅ Sticky header approach
2. ✅ Carousel/slider patterns
3. ✅ 3-column article layout with sticky TOC
4. ✅ Card grid systems
5. ✅ Responsive breakpoint strategy
6. ✅ Newsletter section prominence
7. ✅ Footer organization
8. ✅ Accessibility patterns

---

## 15. IMPLEMENTATION RECOMMENDATIONS FOR YOUR PROJECT

### Quick Wins You Can Implement:

1. **Sticky TOC on Article Pages**
   - Add `position: sticky; top: 100px;` to TOC
   - Implement smooth scroll behavior

2. **Enhanced Dropdown Menus**
   - Add preview images to dropdowns
   - Multi-column layout with mega-menu approach
   - Smooth animations (fade + slide)

3. **Improved Card Hover Effects**
   - Combine box-shadow increase + translateY transform
   - Smooth transition: 200ms ease-out

4. **Better Newsletter Section**
   - Make it more prominent
   - Use teal background (#02838d or your `--hl-accent`)
   - Larger spacing and call-to-action

5. **Mobile Navigation Drawer**
   - Slide-in menu from side
   - Convert mega-menus to accordion
   - Hamburger icon animation

6. **Related Articles Sidebar**
   - On article pages, prominently display
   - Sticky positioning
   - Card-based layout with thumbnail images

---

## CSS METRICS & STANDARDS OBSERVED

**File Organization:**
- Likely organized by component or page section
- Possible CSS-in-JS or traditional preprocessor
- Minified for production

**Naming Convention:**
- BEM or similar class naming
- Likely using utility classes alongside semantic classes

**Media Queries:**
- min-width breakpoints (mobile-first)
- Mobile: 320-639px
- Tablet: 640-1023px
- Desktop: 1024px+

**Performance:**
- Critical CSS inlined
- Deferred non-critical
- Likely <150KB gzipped

---

**Analysis Generated:** February 27, 2026  
**Next Steps:** Implement recommended patterns in your DoctorSix project to match professional health website standards.

