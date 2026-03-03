/**
 * Centralized image paths and URLs
 * This file serves as a single source of truth for all image references in the application
 */

// Default/fallback images
export const defaultImages = {
  placeholder: "/placeholder.svg",
  defaultHealth: "/images/default-health.webp",
  defaultHero: "/images/default-hero.webp",
  healthPlaceholder: "/images/default-health.webp",
};

// Condition images
export const conditionImages = {
  breastCancer: "/images/conditions/breast-cancer.webp",
  diabetes: "/images/conditions/diabetes.webp",
  asthma: "/images/conditions/asthma.webp",
  copd: "/images/conditions/copd.webp",
  pneumonia: "/images/conditions/pneumonia.webp",
  migraine: "/images/conditions/migraine.webp",
  menopause: "/images/conditions/menopause.webp",
  eyeHealth: "/images/conditions/eye-health.webp",
  lymphedema: "/images/conditions/lymphedema.webp",
  parkinson: "/images/conditions/parkinson.webp",
  multipleSclerosis: "/images/conditions/multiple-sclerosis.webp",
  rheumatoidArthritis: "/images/conditions/rheumatoid-arthritis.webp",
  melanoma: "/images/conditions/melanoma.webp",
  psoriasis: "/images/conditions/psoriasis.webp",
  alzheimers: "/images/conditions/alzheimers.webp",
};

// Article hero images
export const articleImages = {
  breastCancerHero: "/images/articles/breast-cancer-hero.webp",
  foodMountain: "/images/articles/food-mountain.png",
  walkingExercise: "/images/articles/walking-exercise.webp",
  briskWalking: "/images/articles/brisk-walking.webp",
  fitnessProgress: "/images/articles/fitness-progress.webp",
  healthyLifestyle: "/images/articles/healthy-lifestyle.webp",
};

// Category images
export const categoryImages = {
  wellness: "/images/categories/wellness.webp",
  healthConditions: "/images/categories/health-conditions.webp",
  tools: "/images/categories/tools.webp",
  featured: "/images/categories/featured.webp",
  connect: "/images/categories/connect.webp",
};

// Icon/Logo images
export const iconImages = {
  bezzy: "/bezzy.svg",
  logo: "/logosix.png",
  banner: "/banner.svg",
};

// External Unsplash URLs with fallback support
export const externalImages = {
  // Healthcare
  healthcareProfessionals: "https://images.unsplash.com/photo-1579154204601-02d82b27d100?auto=format&fit=crop&w=1200&q=80&fm=webp",
  hospitalPatient: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  
  // Fitness & Exercise
  walkingOutdoors: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  parkWalking: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  sportsActivity: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=1200&fm=webp&q=70",
  
  // Mental Health
  stressRelief: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  mentalWellness: "https://images.unsplash.com/photo-1577720643272-265f434b9dff?auto=format&fit=crop&w=800&q=80&fm=webp",
  
  // Nutrition
  healthyFood: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  mediterraneanDiet: "https://images.unsplash.com/photo-1568166452873-b990c0dfac32?auto=format&fit=crop&w=1200&q=80&fm=webp",
  
  // Sleep & Rest
  sleepWellness: "https://images.unsplash.com/photo-1541033391-ae2c2b1d0c30?auto=format&fit=crop&w=800&q=80&fm=webp",
  
  // Respiratory/Lung Health
  heartHealth: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  lungHealth: "https://images.unsplash.com/photo-1579154204601-02d82b27d100?auto=format&fit=crop&w=1200&q=80&fm=webp",
  
  // Lymphedema
  lymphedemaHealth: "https://images.unsplash.com/photo-1584480174307-6d6f42a3b523?auto=format&fit=crop&w=1600&q=80&fm=webp",
  
  // Arthritis
  rheumatoidArthritisImg: "https://images.unsplash.com/photo-1631217b829f68188e0f97fbe91b83f8f8e9d4b5?auto=format&fit=crop&w=800&q=80&fm=webp",
  
  // Cancer
  cancerCare: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  breastCancerHeal: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  radiationTherapy: "https://images.unsplash.com/photo-1581092580496-3b1b6f4d6f6a?auto=format&fit=crop&w=1600&q=80&fm=webp",
  
  // Hearing Health
  hearingWellness: "https://source.unsplash.com/1200x800/?images%20medical%20healthcare%20hospital%20doctor%20patient&auto=format&fit=crop&w=1200&q=80&fm=webp",
  
  // Digestive Health
  digestiveHealth: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80&fm=webp",
  
  // Eye Health
  eyeWellness: "https://images.unsplash.com/photo-1576091160550-112173f7f869?auto=format&fit=crop&w=800&q=80&fm=webp",
};

/**
 * Get image URL with fallback support
 * @param imageUrl - The primary image URL
 * @param fallbackUrl - The fallback image URL (default: placeholder)
 * @returns Object for img src with onError handler
 */
export const getImageProps = (
  imageUrl: string | undefined | null,
  fallbackUrl = defaultImages.placeholder
) => ({
  src: imageUrl || fallbackUrl,
  onError: (e: any) => {
    e.currentTarget.src = fallbackUrl;
  },
});

/**
 * Parse image data with fallback
 * Used in components that need consistent image handling
 */
export const parseImageUrl = (
  url: string | undefined | null,
  fallback = defaultImages.placeholder
): string => {
  if (!url) return fallback;
  
  // If it's already an absolute path starting with /, use it
  if (typeof url === 'string' && url.startsWith('/')) {
    return url;
  }
  
  // If it's a full URL (http/https), return as-is
  if (typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url;
  }
  
  // Otherwise return fallback
  return fallback;
};
