/**
 * BACKWARD COMPATIBILITY MATRIX
 * 
 * This document outlines how the app handles legacy and new routes
 * after the Cancer Care Hub refactoring.
 */

// ============================================================================
// NEW ROUTES (Slug-Based - Preferred)
// ============================================================================

// Route: /article/:slug
// Example: /article/cancer-types-causes-prevention
// Behavior: Render via ArticlePage.tsx
// Resolution: findArticleBySlug(slug) - matches BOTH slug AND id
// Status: ✅ PRIMARY CATCH-ALL ROUTE
// Important: This route handles BOTH slugs and IDs because findArticleBySlug
//            matches articles by both their slug property AND id property

// Route: /:categorySlug/article/:slug
// Example: /cancer-care/article/cancer-types-causes-prevention
// Behavior: Direct render via ArticlePage.tsx (category-scoped)
// Resolution: findArticleBySlug(slug) from blogData.ts
// Status: ✅ RECOMMENDED FOR NEW NAVIGATION

// ============================================================================
// LEGACY ROUTES (ID-Based - Maintained for Backward Compatibility)
// ============================================================================

// NOTE: The route /article/:slug already handles both slug and ID lookups
// because findArticleBySlug() matches articles by BOTH slug AND id properties.
// These additional routes are fallback documentation of backward compatibility.

// Route: /article/:id (Fallback)
// Example: /article/cancer-types-causes-prevention
// Behavior: Via LegacyArticleRedirect.tsx (fallback, rarely reached)
// Resolution: allArticles.find(a => a.id === id)
// Status: ✅ FALLBACK ONLY - /article/:slug usually matches first
// Note: In practice, /article/:slug will match first in React Router

// Route: /conditions/cancer-care/article/:id (Fallback)
// Example: /conditions/cancer-care/article/cancer-types-causes-prevention
// Behavior: Via LegacyArticleRedirect.tsx (fallback)
// Resolution: allArticles.find(a => a.id === id)
// Status: ✅ FALLBACK ONLY

// ============================================================================
// NAVIGATION PATTERNS
// ============================================================================

// OLD PATTERN (Still Works)
// navigate(`/article/${article.id}`)
// Result: Redirects to /cancer-care/article/{slug}
// Status: ✅ BACKWARD COMPATIBLE

// NEW PATTERN (Recommended)
// navigate(`/${article.categorySlug}/article/${article.slug}`)
// Result: Direct render via ArticlePage
// Status: ✅ MODERN & EFFICIENT

// ============================================================================
// ARTICLE RESOLUTION FLOW
// ============================================================================

// Flow 1: Direct Link to New Route
// User navigates to: /cancer-care/article/cancer-types-causes-prevention
// → ArticlePage component (Route: /:category/article/:slug)
// → Calls: findArticleBySlug("cancer-types-causes-prevention")
// → Renders full article from blogData.ts
// ✅ Direct render, no redirect

// Flow 2: Old Link to Legacy Route
// User navigates to: /article/cancer-types-causes-prevention
// → LegacyArticleRedirect component (Route: /article/:id)
// → Calls: allArticles.find(a => a.id === "cancer-types-causes-prevention")
// → Redirects to: /cancer-care/article/cancer-types-causes-prevention
// → Then follows Flow 1
// ✅ Transparent to user, works seamlessly

// ============================================================================
// COMPONENTS INVOLVED
// ============================================================================

// ArticlePage.tsx
// - Resolves articles by SLUG
// - Uses: findArticleBySlug(slug) from allArticles
// - Renders: Full article with TOC, related articles, metadata
// - Status: PRIMARY article renderer

// LegacyArticleRedirect.tsx
// - Resolves articles by ID
// - Uses: allArticles.find(a => a.id === id)
// - Action: Redirects to new slug-based route
// - Fallback: Shows 404 if ID not found
// - Status: COMPATIBILITY layer only

// ============================================================================
// FILES MODIFIED
// ============================================================================

// ✅ Created: src/pages/LegacyArticleRedirect.tsx
// ✅ Modified: src/App.tsx (added import + new routes)
// ✅ Deleted: src/pages/ArticleDetail.tsx (no longer needed)
// ✅ Modified: src/pages/CancerCare.tsx (uses blogData instead of stubs)

// ============================================================================
// TESTING SCENARIOS
// ============================================================================

// Scenario 1: User clicks article in CancerCare hub
// → Navigates to: /cancer-care/article/{slug}
// → Renders immediately via ArticlePage
// Status: ✅ Works, fast, no redirect

// Scenario 2: User has old link in bookmark
// → Navigates to: /article/{id}
// → Redirects to: /cancer-care/article/{slug}
// → Renders via ArticlePage
// Status: ✅ Works, one transparent redirect

// Scenario 3: User types invalid ID in URL
// → Navigates to: /article/invalid-id
// → LegacyArticleRedirect looks up article... not found
// → Shows 404 message
// Status: ✅ Graceful error handling

// ============================================================================
// MIGRATION STRATEGY
// ============================================================================

// Phase 1 (Current): Keep both routes, lazy migrate
// - Old routes still work via LegacyArticleRedirect
// - New routes work via ArticlePage
// - Navigation can use either pattern (though new is preferred)

// Phase 2 (Future): Remove old routes safely
// - After verifying all navigation is updated
// - Can remove LegacyArticleRedirect
// - Can remove old routes from App.tsx

// Phase 3 (Optional): Deprecate old patterns
// - Update all internal navigation to new pattern
// - Ensure all links use /{category}/article/{slug}
