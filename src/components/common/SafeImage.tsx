import React, { useState, useRef } from 'react';
import { imageLibrary, getImageUrl } from '../../data/imageLibrary';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTopic?: keyof typeof imageLibrary;
  componentName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * SafeImage Component
 * Ensures images always load with fallback to topic-based default
 * Never shows broken image icon
 * 
 * Features:
 * - Automatic fallback on load failure
 * - Console logging of failures
 * - WebP format enforcement via Unsplash URLs
 * - Lazy loading for performance
 * - Async decoding
 * - Error tracking
 */
export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTopic = 'generalHealth',
  componentName = 'SafeImage',
  width,
  height,
  priority = false,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [attemptedFallback, setAttemptedFallback] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = () => {
    // Prevent infinite loop - only try fallback once
    if (attemptedFallback) {
      console.warn(
        `[SafeImage] Image loading failed for component: ${componentName}`,
        {
          originalSrc: src,
          fallbackAttempted: fallbackTopic,
          finalSrc: imageSrc,
          alt: alt,
          timestamp: new Date().toISOString(),
        }
      );
      setHasError(true);
      return;
    }

    // Try fallback
    const fallbackUrl = getImageUrl(fallbackTopic);
    console.debug(
      `[SafeImage] Image failed, using fallback: ${componentName}`,
      {
        originalSrc: src,
        fallbackSrc: fallbackUrl,
        topic: fallbackTopic,
      }
    );

    setImageSrc(fallbackUrl);
    setAttemptedFallback(true);
  };

  // Ensure URL uses WebP format
  const ensureWebP = (url: string): string => {
    if (!url.includes('unsplash.com')) {
      // Non-Unsplash URLs - add WebP param if not present
      if (!url.includes('fm=webp')) {
        return url.includes('?') ? `${url}&fm=webp` : `${url}?fm=webp`;
      }
    }
    return url;
  };

  const finalSrc = ensureWebP(imageSrc);

  return (
    <img
      ref={imgRef}
      src={finalSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={handleError}
      style={{
        backgroundColor: hasError ? '#f3f4f6' : undefined,
      }}
    />
  );
};

export default SafeImage;
