# HEALTHLINE DESIGN PATTERNS - IMPLEMENTATION GUIDE

**Date:** February 27, 2026  
**Purpose:** Practical CSS code to implement Healthline.com design patterns in your SixHealth project

---

## 1. MEGA DROPDOWN MENU IMPLEMENTATION

### HTML Structure:
```html
<nav class="main-nav">
  <div class="nav-item dropdown">
    <button class="nav-link">Health Topics <span class="chevron">›</span></button>
    
    <div class="dropdown-menu mega-menu">
      <div class="dropdown-content">
        <div class="menu-column">
          <h4 class="menu-category">Common Conditions</h4>
          <ul>
            <li><a href="#">Asthma</a></li>
            <li><a href="#">Diabetes</a></li>
            <li><a href="#">Heart Disease</a></li>
          </ul>
          
          <h4 class="menu-category">Women's Health</h4>
          <ul>
            <li><a href="#">Menopause</a></li>
            <li><a href="#">Pregnancy</a></li>
          </ul>
        </div>
        
        <div class="menu-column">
          <h4 class="menu-category">Mental Health</h4>
          <ul>
            <li><a href="#">Anxiety</a></li>
            <li><a href="#">Depression</a></li>
          </ul>
        </div>
        
        <div class="menu-preview">
          <img src="health-preview.jpg" alt="Featured" />
          <p>Featured: Latest Health Tips</p>
        </div>
      </div>
    </div>
  </div>
</nav>
```

### CSS Styles:
```css
/* Navigation Container */
.main-nav {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 40px;
  height: 72px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Individual Nav Item */
.nav-item {
  position: relative;
}

/* Navigation Link Button */
.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  cursor: pointer;
  padding: 8px 0;
  transition: color 200ms ease-out;
}

.nav-link:hover,
.nav-link:focus {
  color: #02838d;
  outline: none;
}

.nav-link .chevron {
  display: inline-block;
  font-size: 20px;
  transition: transform 200ms ease-out;
}

.nav-item:hover .chevron {
  transform: rotate(90deg);
}

/* Dropdown Menu (Hidden by default) */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  min-width: 700px;
  margin-top: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 200ms ease-out, 
              transform 200ms ease-out,
              visibility 200ms ease-out;
  z-index: 1001;
}

/* Show dropdown on hover */
.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Mega Menu Content */
.dropdown-content {
  display: grid;
  grid-template-columns: 1fr 1fr 200px;
  gap: 40px;
  padding: 32px;
}

/* Menu Column */
.menu-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Menu Category Header */
.menu-category {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #333333;
  margin: 0;
  padding: 0;
  letter-spacing: 0.5px;
}

.menu-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-column li {
  margin: 0;
}

.menu-column a {
  display: block;
  font-size: 14px;
  color: #666666;
  text-decoration: none;
  padding: 6px 0;
  transition: color 150ms ease-out;
}

.menu-column a:hover {
  color: #02838d;
  text-decoration: underline;
}

/* Menu Preview Image Area */
.menu-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.menu-preview img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
}

.menu-preview p {
  font-size: 13px;
  font-weight: 600;
  color: #333333;
  margin: 0;
}

/* Mobile: Hide mega menu */
@media (max-width: 1024px) {
  .mega-menu {
    display: none;
  }

  .nav-item {
    position: relative;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    border: none;
    box-shadow: none;
  }
}
```

---

## 2. STICKY TOC / SIDEBAR IMPLEMENTATION

### HTML:
```html
<article class="article-layout">
  <!-- Table of Contents Sidebar -->
  <aside class="article-toc">
    <div class="toc-inner">
      <h4 class="toc-title">Contents</h4>
      <nav class="toc-nav">
        <a href="#section-1" class="toc-link">Introduction</a>
        <a href="#section-2" class="toc-link">What is This Topic?</a>
        <a href="#section-3" class="toc-link level-1">
          <span class="indent">Subsection</span>
        </a>
        <a href="#section-4" class="toc-link">Key Points</a>
        <a href="#section-5" class="toc-link">Conclusion</a>
      </nav>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="article-main">
    <h1>Article Title</h1>
    <div class="article-content">
      <!-- Content here -->
    </div>
  </main>

  <!-- Related Articles Sidebar -->
  <aside class="related-sidebar">
    <div class="related-inner">
      <h4 class="related-title">Related Articles</h4>
      <article class="related-card">
        <img src="thumbnail.jpg" alt="Article" class="related-image" />
        <h5 class="related-card-title">Related Article Title</h5>
        <p class="related-card-desc">Brief description of the article</p>
      </article>
    </div>
  </aside>
</article>
```

### CSS:
```css
/* Article Layout: 3 Column Grid */
.article-layout {
  display: grid;
  grid-template-columns: 240px 1fr 280px;
  gap: 40px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 40px;
}

/* TOC Sidebar */
.article-toc {
  /* Will stick when scrolled */
}

.toc-inner {
  position: sticky;
  top: 100px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}

.toc-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #999999;
  margin: 0 0 16px 0;
  padding: 0;
  letter-spacing: 0.5px;
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.toc-link {
  display: block;
  font-size: 13px;
  color: #666666;
  text-decoration: none;
  padding: 8px 0;
  border-left: 2px solid transparent;
  padding-left: 12px;
  transition: color 150ms, border-color 150ms;
}

.toc-link:hover {
  color: #02838d;
  border-left-color: #02838d;
}

/* Active TOC link (set via JS when scrolling) */
.toc-link.active {
  color: #02838d;
  font-weight: 600;
  border-left-color: #02838d;
}

/* Nested indent for subsections */
.toc-link .indent {
  display: block;
  margin-left: 0px;
}

.toc-link.level-1 {
  padding-left: 24px;
}

/* Main Article Content */
.article-main {
  max-width: 720px;
}

/* Related Sidebar */
.related-sidebar {
  /* Will stick when scrolled */
}

.related-inner {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}

.related-title {
  font-size: 14px;
  font-weight: 700;
  color: #333333;
  margin: 0;
  padding: 0;
}

/* Related Article Card */
.related-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  transition: box-shadow 200ms, transform 200ms;
}

.related-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.related-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.related-card-title {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin: 12px;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-card-desc {
  font-size: 13px;
  color: #666666;
  margin: 0 12px 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive: Stack to single column on tablet/mobile */
@media (max-width: 1024px) {
  .article-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .article-toc,
  .related-sidebar {
    display: none;
  }

  .toc-inner,
  .related-inner {
    position: relative;
    top: auto;
  }
}
```

---

## 3. CAROUSEL/SLIDER IMPLEMENTATION

### HTML:
```html
<section class="carousel-section">
  <div class="section-header">
    <h2>Trending Topics</h2>
    <a href="#" class="view-all">View All →</a>
  </div>

  <div class="carousel-container">
    <button class="carousel-prev" aria-label="Previous">❮</button>
    
    <div class="carousel-track">
      <div class="carousel-item">
        <div class="carousel-card">
          <img src="topic-1.jpg" alt="Topic" />
          <h3>Topic Title</h3>
          <p>Brief description</p>
        </div>
      </div>
      <!-- More items... -->
    </div>
    
    <button class="carousel-next" aria-label="Next">❯</button>
  </div>
</section>
```

### CSS:
```css
/* Carousel Section */
.carousel-section {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: #333333;
}

.view-all {
  font-size: 14px;
  font-weight: 600;
  color: #02838d;
  text-decoration: none;
  transition: color 150ms;
}

.view-all:hover {
  color: #08565c;
}

/* Carousel Container */
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Carousel Track (items container) */
.carousel-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: 1;
  scrollbar-width: none; /* Hide scrollbar Firefox */
}

.carousel-track::-webkit-scrollbar {
  display: none; /* Hide scrollbar Chrome */
}

/* Individual Item */
.carousel-item {
  flex-shrink: 0;
  width: calc(33.333% - 14px);
  /* Shows 3 items per row */
}

/* Carousel Card */
.carousel-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  transition: box-shadow 200ms, transform 200ms;
}

.carousel-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.carousel-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.carousel-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin: 12px;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.carousel-card p {
  font-size: 13px;
  color: #666666;
  margin: 0 12px 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Carousel Navigation Buttons */
.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  background: #ffffff;
  color: #02838d;
  font-size: 20px;
  cursor: pointer;
  transition: all 150ms;
  z-index: 10;
}

.carousel-prev:hover,
.carousel-next:hover {
  background: #02838d;
  color: #ffffff;
  border-color: #02838d;
}

.carousel-prev {
  left: -60px;
}

.carousel-next {
  right: -60px;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .carousel-item {
    width: calc(50% - 10px);
  }

  .carousel-prev,
  .carousel-next {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .carousel-item {
    width: 100%;
  }

  .carousel-prev,
  .carousel-next {
    display: none;
  }
}
```

### JavaScript for Carousel Navigation:
```javascript
document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  const prevBtn = container.querySelector('.carousel-prev');
  const nextBtn = container.querySelector('.carousel-next');
  const itemWidth = container.querySelector('.carousel-item').offsetWidth + 20;

  prevBtn.addEventListener('click', () => {
    track.scrollLeft -= itemWidth;
  });

  nextBtn.addEventListener('click', () => {
    track.scrollLeft += itemWidth;
  });
});
```

---

## 4. CARD GRID WITH HOVER EFFECTS

### HTML:
```html
<section class="card-grid-section">
  <div class="container">
    <h2>Featured Topics</h2>
    
    <div class="card-grid">
      <article class="topic-card">
        <div class="card-image-wrapper">
          <img src="topic.jpg" alt="Topic" class="card-image" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Topic Name</h3>
          <p class="card-description">Brief description of this health topic and why it matters.</p>
          <a href="#" class="card-link">Learn More →</a>
        </div>
      </article>
      <!-- More cards... -->
    </div>
  </div>
</section>
```

### CSS:
```css
.card-grid-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 40px;
}

.card-grid-section h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333333;
}

/* Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* Card Styling */
.topic-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.topic-card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-6px);
  border-color: #02838d;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms;
}

.topic-card:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-description {
  font-size: 14px;
  color: #666666;
  margin: 0 0 16px 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}

.card-link {
  font-size: 13px;
  font-weight: 600;
  color: #02838d;
  text-decoration: none;
  transition: color 150ms;
}

.card-link:hover {
  color: #08565c;
  text-decoration: underline;
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 5. NEWSLETTER SIGNUP SECTION

### HTML:
```html
<section class="newsletter-section">
  <div class="newsletter-container">
    <h2 class="newsletter-title">Get our wellness newsletter</h2>
    <p class="newsletter-subtitle">Get expert health tips and evidence-based information.</p>
    
    <form class="newsletter-form" action="#" method="post">
      <input 
        type="email" 
        class="newsletter-input" 
        placeholder="Enter your email"
        required
      />
      <button type="submit" class="newsletter-button">Sign Up</button>
    </form>
    
    <p class="newsletter-disclaimer">
      Your privacy is important to us. <a href="#">Learn more</a>
    </p>
  </div>
</section>
```

### CSS:
```css
.newsletter-section {
  background: linear-gradient(135deg, #02838d 0%, #08565c 100%);
  padding: 80px 40px;
  text-align: center;
}

.newsletter-container {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-title {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
}

.newsletter-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 32px 0;
  line-height: 1.6;
}

/* Form Styling */
.newsletter-form {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-direction: row;
}

.newsletter-input {
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: #ffffff;
  color: #333333;
  transition: box-shadow 200ms;
}

.newsletter-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

.newsletter-input::placeholder {
  color: #999999;
}

.newsletter-button {
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  background: #ffffff;
  color: #02838d;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 200ms;
  white-space: nowrap;
}

.newsletter-button:hover {
  background: #f0f7f9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.newsletter-disclaimer {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.newsletter-disclaimer a {
  color: #ffffff;
  text-decoration: underline;
  transition: opacity 150ms;
}

.newsletter-disclaimer a:hover {
  opacity: 0.8;
}

/* Mobile Responsive */
@media (max-width: 640px) {
  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-button {
    width: 100%;
  }

  .newsletter-title {
    font-size: 28px;
  }

  .newsletter-subtitle {
    font-size: 16px;
  }
}
```

---

## 6. RESPONSIVE MOBILE MENU

### HTML:
```html
<!-- Hamburger Button -->
<button class="hamburger-menu" aria-label="Toggle menu" id="menuToggle">
  <span></span>
  <span></span>
  <span></span>
</button>

<!-- Mobile Menu Drawer -->
<nav class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-header">
    <h3>Menu</h3>
    <button class="mobile-menu-close" id="menuClose" aria-label="Close menu">×</button>
  </div>
  
  <ul class="mobile-menu-list">
    <li><a href="#">Health Topics</a></li>
    <li><a href="#">Conditions</a></li>
    <li><a href="#">Wellness</a></li>
    <li><a href="#">Nutrition</a></li>
    <li><a href="#">More</a></li>
  </ul>
</nav>

<!-- Backdrop/Overlay -->
<div class="mobile-menu-overlay" id="menuOverlay"></div>
```

### CSS:
```css
/* Hamburger Menu Button */
.hamburger-menu {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger-menu span {
  width: 24px;
  height: 2px;
  background: #333333;
  border-radius: 2px;
  transition: all 300ms;
}

.hamburger-menu.open span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger-menu.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background: #ffffff;
  z-index: 1002;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 300ms cubic-bezier(0.42, 0, 0.58, 1);
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.mobile-menu-header h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #333333;
}

.mobile-menu-close {
  background: none;
  border: none;
  font-size: 28px;
  color: #333333;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 150ms;
}

.mobile-menu-close:hover {
  color: #02838d;
}

/* Menu List */
.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-list li {
  border-bottom: 1px solid #f0f0f0;
}

.mobile-menu-list a {
  display: block;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  text-decoration: none;
  transition: background 150ms, color 150ms;
}

.mobile-menu-list a:hover {
  background: #f5f5f5;
  color: #02838d;
}

/* Overlay/Backdrop */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms, visibility 300ms;
}

.mobile-menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* Show hamburger on mobile */
@media (max-width: 1024px) {
  .hamburger-menu {
    display: flex;
  }
}
```

### JavaScript:
```javascript
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

function toggleMenu() {
  menuToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  menuOverlay.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Close on menu link click
document.querySelectorAll('.mobile-menu-list a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});
```

---

## 7. TOC AUTO-SCROLL & ACTIVE STATE

### JavaScript:
```javascript
function initTableOfContents() {
  const headings = Array.from(document.querySelectorAll('h2, h3'));
  const tocLinks = document.querySelectorAll('.toc-link');

  function updateActiveLink() {
    let activeHeading = null;

    for (const heading of headings) {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 200) {
        activeHeading = heading;
      } else {
        break;
      }
    }

    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (activeHeading && link.getAttribute('href') === '#' + activeHeading.id) {
        link.classList.add('active');
      }
    });
  }

  // Update on scroll
  document.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // Smooth scroll behavior
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initTableOfContents);
```

---

## 8. FOCUS STATES & ACCESSIBILITY

### CSS for Keyboard Navigation:
```css
/* Global focus styles */
*:focus-visible {
  outline: 3px solid #02838d;
  outline-offset: 2px;
}

/* Specific focus overrides */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #02838d;
  outline-offset: 2px;
}

/* Skip to main content link (hidden until highlighted) */
.skip-to-main {
  position: absolute;
  top: -40px;
  left: 0;
  background: #02838d;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  z-index: 1100;
  border-radius: 0 0 6px 0;
}

.skip-to-main:focus-visible {
  top: 0;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

**Implementation Complete!**

Use these practical CSS patterns to enhance your SixHealth project with Healthline-style design patterns. Start with whichever components would add the most value to your current interface.

