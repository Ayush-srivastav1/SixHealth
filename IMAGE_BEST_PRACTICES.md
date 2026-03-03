# Image Handling Best Practices - SixHealth Project

## Guidelines for Future Image Implementation

### 1. **Always Use Absolute Paths**

❌ **WRONG**:
```tsx
<img src="images/health.png" alt="health" />
<img src="./images/health.png" alt="health" />
<img src="../public/health.png" alt="health" />
```

✅ **CORRECT**:
```tsx
<img 
  src="/images/conditions/health.png" 
  alt="Health condition illustration"
  loading="lazy"
  onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
/>
```

---

### 2. **Required Image Attributes**

Every `<img>` tag should have:

```tsx
<img
  src="/path/to/image.webp"        // Absolute path starting with /
  alt="Meaningful description"      // Never empty or generic
  loading="lazy"                    // Enable performance optimization
  onError={(e: any) => {            // Fallback handler
    e.currentTarget.src = '/placeholder.svg';
  }}
/>
```

---

### 3. **Centralized Image Paths**

Always reference images through the centralized `src/data/images.ts`:

❌ **AVOID** hardcoding URLs in components:
```tsx
const imageUrl = "https://images.unsplash.com/photo-1500590046...";
```

✅ **USE** the centralized images file:
```tsx  
import { externalImages } from '@/data/images';

// In component
const imageUrl = externalImages.healthcareProfessionals;
```

---

### 4. **Fallback Strategies**

For dynamic image URLs from APIs/data:
```tsx
import { parseImageUrl } from '@/lib/imageUtils';

const imageSrc = parseImageUrl(item.imageUrl, '/placeholder.svg');
```

---

### 5. **Image Formats & Optimization**

**Preferred format order**:
1. `.webp` - Best compression (modern browsers)
2. `.png` - Lossless, good for graphics
3. `.jpg` - Photos (with fallback to webp)
4. `.svg` - Icons and vectors (infinitely scalable)

**Directory organization**:
```
/public/images/
├── conditions/        # Health condition images (WebP)
├── articles/         # Article headers (WebP)
├── categories/       # Category icons (SVG)
└── default.webp      # Universal fallback
```

---

### 6. **Component Image Patterns**

### Pattern 1: Simple Image
```tsx
<img
  src={imagePath}
  alt="Image description"
  loading="lazy"
  onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
  className="w-full h-auto rounded"
/>
```

### Pattern 2: Conditional Image
```tsx
{imageUrl ? (
  <img
    src={imageUrl}
    alt="Article title"
    loading="lazy"
    onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
  />
) : (
  <div className="bg-gray-100">No image available</div>
)}
```

### Pattern 3: Article/Card Images
```tsx
<img
  src={article.imageUrl || '/placeholder.svg'}
  alt={article.title}
  className="w-full h-40 object-cover"
  loading="lazy"
  onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
/>
```

---

### 7. **Alt Text Guidelines**

**Good alt text** describes the image content:
- `alt="Person walking outdoors for exercise"`
- `alt="Healthcare professional reviewing patient data"`
- `alt="Breast cancer awareness ribbon"`

**Bad alt text**:
- `alt=""` (empty)
- `alt="image"` (too generic)
- `alt="image123"` (meaningless)
- `alt="the thing on this page"` (vague)

**For icons**:
- `alt="Bezzy community icon"`
- `alt="Heart health indicator"`

**For data-driven content**:
- Use the data item's name/title: `alt={condition.name}`
- `alt={article.title}`

---

### 8. **External Image URLs**

For Unsplash/external images, always include:
- Query parameters for optimization: `?auto=format&fit=crop&w=1200&q=80`
- Format specification: `&fm=webp&q=70`
- Error handler to fallback to local image

```tsx
<img
  src="https://images.unsplash.com/photo-xxx?auto=format&fit=crop&w=1200&fm=webp&q=70"
  alt="Healthcare scene"
  loading="lazy"
  onError={(e: any) => { e.currentTarget.src = '/images/default-hero.webp'; }}
/>
```

---

### 9. **Data File Images**

When storing image URLs in data files:

```typescript
// ✅ GOOD: Centralized and organized
export const articles = [
  {
    id: 1,
    title: "Health Article",
    imageUrl: "/images/articles/health.webp",  // Local
    fallbackUrl: "/placeholder.svg"
  }
];

// Use it in components with error handling
<img
  src={article.imageUrl || article.fallbackUrl}
  onError={(e: any) => { 
    e.currentTarget.src = article.fallbackUrl;  
  }}
/>
```

---

### 10. **Performance Checklist**

- [ ] All images use `loading="lazy"`
- [ ] All images have error handlers
- [ ] Images are optimized (WebP preferred)
- [ ] Alt text is meaningful
- [ ] Paths are absolute (start with `/`)
- [ ] No relative paths (`../`, `./`)
- [ ] External URLs use query parameters for optimization
- [ ] Placeholder images for missing content
- [ ] No hardcoded image URLs in components

---

### 11. **Testing Image Loading**

**Manual testing**:
1. Open DevTools Network tab
2. Filter by images
3. Set network to "Slow 3G"
4. Verify `loading="lazy"` defers off-screen images
5. Simulate broken image by changing URL
6. Verify fallback triggers correctly

**Network simulation**:
```bash
# Test with slow network
# DevTools → Network → Throttling = Slow 3G
```

---

### 12. **Error Handling Examples**

### Example 1: Article Card
```tsx
export function ArticleCard({ imageUrl, title }) {
  return (
    <article>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          onError={(e: any) => { 
            e.currentTarget.src = '/placeholder.svg'; 
          }}
          className="w-full h-40 object-cover rounded"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center">
          <span className="text-gray-400">No image</span>
        </div>
      )}
      <h3>{title}</h3>
    </article>
  );
}
```

### Example 2: Hero Image
```tsx
export function HeroSection({ imageUrl, title }) {
  return (
    <section
      className="h-96 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('${imageUrl || '/placeholder.svg'}')`,
        backgroundColor: '#f3f4f6'  // Fallback color
      }}
      onError={(e: any) => {
        // Fallback when image fails to load  
        e.currentTarget.style.backgroundImage = "url('/placeholder.svg')";
      }}
    >
      {/* Content */}
    </section>
  );
}
```

---

### 13. **Troubleshooting**

| Issue | Solution |
|-------|----------|
| Images show broken icon | Check path absolute/error handler |
| Images don't lazy load | Ensure `loading="lazy"` attribute |
| Slow image loading | Use WebP format, optimize dimensions |
| No fallback on error | Add `onError` handler |
| Empty alt text appearing | Fill meaningful `alt` text |
| Wrong image displays | Verify URL in centralized images.ts |
| Images stretch incorrectly | Use `object-cover` with fixed dimensions |

---

### 14. **Migration Path for Old Images**

If you find old-style image references:

1. **Identify**: Search for patterns
   - `src="images/..."`
   - `src="./images/..."`
   - `src="/health-placeholder.png"` (broken)

2. **Migrate**: 
   - Move image to `/public/images/[category]/`
   - Update path to absolute
   - Add error handler
   - Update alt text

3. **Verify**: Run build and test in browser

---

### 15. **Regular Maintenance**

- **Monthly**: Check for broken image links (404s)
- **Per PR**: Verify new images have all required attributes
- **Per Release**: Test image loading on slow networks
- **Quarterly**: Optimize images (compression, WebP conversion)

---

## Checklist for New Images

When adding new images to the project:

- [ ] Image saved to correct `/public/images/[category]/` folder
- [ ] Image optimized (WebP, <500KB)
- [ ] Image alt text is meaningful
- [ ] Image path added to `src/data/images.ts` if reused
- [ ] Component has error handler
- [ ] Component has `loading="lazy"`
- [ ] Tested on slow network
- [ ] Tested with broken URL to verify fallback
- [ ] Tested responsive behavior
- [ ] Documented in relevant files

---

**Last Updated**: March 1, 2026
**Status**: v1.0 - Production Guidelines
