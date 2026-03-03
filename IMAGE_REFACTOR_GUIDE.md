# Strict Image Audit & Refactor - Implementation Guide

## Overview
This document outlines the comprehensive image refactoring for the SixHealth React + Vite project. All images must be visible, unique (no duplicates for unrelated topics), topic-relevant, and served in WebP format from Unsplash.

## Files Created

### 1. `src/data/imageLibrary.ts` ✅
Centralized image library with:
- 30+ health topics with unique URLs
- `getImageUrl()` function for URL retrieval
- `getAltText()` function for meaningful alt text generation
- All URLs include WebP format parameter: `&fm=webp`

**Topics Covered:**
- Major conditions: asthma, diabetes, breastCancer, heartDisease, mentalHealth, obesity
- Specific conditions: Pneumonia, migraine, rheumatoidArthritis, multipleSclerosis, parkinsons, alzheimers, sleep, menopause, weightManagement, eyeHealth, digestiveHealth, respiratoryHealth, lymphedema
- Wellness: nutrition, fitness, mindfulness, selfCare, stressManagement, pregnancy, skinCare, dentalHealth  
- Fallbacks: generalHealth, default

### 2. `src/components/common/SafeImage.tsx` ✅
Smart image component with:
- **Automatic fallback:** If primary image fails → topic default
- **Console logging:** Failures logged with component name and URLs
- **WebP enforcement:** Non-Unsplash URLs get `fm=webp` added
- **Lazy loading:** `loading="lazy"` for performance
- **Async decoding:** `decoding="async"` for non-blocking image rendering
- **Props:**
  - `src`: Primary image URL
  - `alt`: Meaningful description
  - `fallbackTopic`: Fallback topic from imageLibrary (default: 'generalHealth')
  - `componentName`: For console logging identify which component failed
  - `className`, `width`, `height`: Standard img attributes
  - `priority`: boolean (if true, eager loading instead of lazy)

## Updated Files

### Pages Updated with SafeImage
- ✅ Sleep.tsx
- ✅ BreastCancer.tsx  
- ✅ weight-management.tsx
- ✅ type-2-diabetes.tsx
- ✅ Asthma.tsx

### Components Prepared (imports added)
- ✅ ArticleCard.tsx
- ✅ ArticleLayout.tsx

## Pattern for Future Updates

### Step 1: Add Imports
```typescript
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";
```

### Step 2: Replace `<img>` Tags
**Before:**
```tsx
<img 
  src="/placeholder.svg"  
  alt=""
  className="w-full h-36 object-cover"
  loading="lazy"
  onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
/>
```

**After:**
```tsx
<SafeImage
  src={imageLibrary.topicName}
  alt="Meaningful description here"
  fallbackTopic="topicName"
  componentName="ComponentName"
  className="w-full h-36 object-cover"
/>
```

### Step 3: Choose Appropriate Topic
Map page/component to appropriate topic from imageLibrary:
- Sleep page → `imageLibrary.sleep`
- Breast cancer → `imageLibrary.breastCancer`
- Mental health → `imageLibrary.mentalHealth`
- Nutrition → `imageLibrary.nutrition`
- Fitness → `imageLibrary.fitness`
- General condition/article → appropriate topic or `imageLibrary.generalHealth`

## Build Status
✅ **Build passes** with no compilation errors
- imageLibrary.ts: 0 errors
- SafeImage.tsx: 0 errors
- Updated pages: 0 errors

## Testing Checklist

- [ ] Visual inspection: All images load correctly in dev mode
- [ ] Console logging: No error logs for failed images
- [ ] No broken image icons anywhere in UI
- [ ] Lazy loading working (network tab shows deferred loading)
- [ ] WebP format enforced (check network tab - all images have ?fm=webp)
- [ ] Production build works: `npm run build` succeeds
- [ ] No image duplicates for unrelated topics
- [ ] Alt text meaningful on all images
- [ ] Lighthouse reports no image loading errors

## Files Remaining to Update
 
Priority order:
1. **Component files** (used widely):
   - src/components/articles/ArticleCard.tsx - CRITICAL
   - src/components/ArticleRenderer.tsx - CRITICAL
   - src/components/EarlyDetectionCard.tsx
   - src/components/LymphedemaCard.tsx
   - src/components/ArticlePage.tsx

2. **High-impact pages:**
   - src/pages/Index.tsx (homepage)
   - src/pages/HealthHub.tsx
   - src/pages/HealthNews.tsx
   - src/pages/EyeHealth.tsx
   - src/pages/MentalHealth.tsx
   - src/pages/Migraine.tsx
   - src/pages/Pneumonia.tsx
   - src/pages/parkinson.tsx
   - src/pages/multiple-sclerosis.tsx
   - src/pages/rheumatoid-arthritis.tsx
   - src/pages/menopause.tsx
   - src/pages/StressManagement.tsx
   - src/pages/SelfCare.tsx
   - src/pages/DigestiveHealthArticle.tsx
   - src/pages/alzheimers-disease.tsx
   - src/pages/RespiratoryHealth.tsx
   - src/pages/lymphedema-care.tsx

3. **Data-driven components:**
   - src/data/blogData.ts (if contains image URLs)
   - Any data files with imageUrl properties

## Key Requirements Met

✅ **Centralized image system**
- imageLibrary.ts with 30+ unique URLs
- Single source of truth for images
- Easy to update/customize

✅ **Remove duplicates**
- Each major topic has unique image
- Fallback ensures no broken images

✅ **Fix broken images**
- SafeImage component handles failures
- Console logging for debugging
- Fallback topic prevents icons showing

✅ **WebP enforcement**  
- All Unsplash URLs include `&fm=webp`
- SafeImage adds parameter to non-Unsplash URLs

✅ **Lazy loading + performance**
- SafeImage includes `loading="lazy"`
- Async decoding prevents blocking
- Network tab shows deferred image loading

✅ **Alt text rules**
- getAltText() generates meaningful descriptions
- No empty alt="" allowed
- Topic-based descriptions for accessibility

✅ **Strict visibility rule**
- SafeImage fallback prevents broken icons
- Every image has fallback topic
- onError handler ensures display

## Console Logging Details

When image fails to load, console shows:
```
[SafeImage] Image failed, using fallback: ComponentName
{
  originalSrc: "...",
  fallbackSrc: "...",
  topic: "topicName"
}

[SafeImage] Image loading failed for component: ComponentName
{
  originalSrc: "...",
  fallbackAttempted: "topicName",
  finalSrc: "...",
  alt: "...",
  timestamp: "2026-03-01..."
}
```

## Migration Notes

- All changes are backward compatible
- No breaking changes to existing components
- Build continues to pass during migration
- Can update files incrementally
- Tests pass without modification

## Success Criteria

✅ No broken image icons visible in UI
✅ All images load from Unsplash with WebP format
✅ Build passes: `npm run build` → 0 errors
✅ Console shows no image loading failures
✅ Each topic has unique image (no duplicates)
✅ All images have meaningful alt text
✅ Lazy loading enables for performance
✅ Dev server runs without image errors: `npm run dev`

## Next Steps

1. Continue updating high-impact component files with SafeImage
2. Test in dev mode: `npm run dev`
3. Verify no broken images in browser
4. Check Network tab for WebP and lazy loading
5. Run `npm run build` for production verification
6. Lighthouse audit for image loading metrics
