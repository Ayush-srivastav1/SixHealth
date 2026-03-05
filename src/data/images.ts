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

export const articleImages = {
  breastCancerHero: "/images/articles/breast-cancer-hero.webp",
  foodMountain: "/images/articles/food-mountain.png",
  walkingExercise: "/images/articles/walking-exercise.webp",
  briskWalking: "/images/articles/brisk-walking.webp",
  fitnessProgress: "/images/articles/fitness-progress.webp",
  healthyLifestyle: "/images/articles/healthy-lifestyle.webp",
};

export const categoryImages = {
  wellness: "/images/categories/wellness.webp",
  healthConditions: "/images/categories/health-conditions.webp",
  tools: "/images/categories/tools.webp",
  featured: "/images/categories/featured.webp",
  connect: "/images/categories/connect.webp",
};

export const iconImages = {
  bezzy: "/bezzy.svg",
  logo: "/logosix.png",
  banner: "/banner.svg",
};

export const externalImages = {

  healthcareProfessionals: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  hospitalPatient: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  walkingOutdoors: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  parkWalking: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  sportsActivity: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  stressRelief: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  mentalWellness: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  healthyFood: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  mediterraneanDiet: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  sleepWellness: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  heartHealth: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  lungHealth: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  lymphedemaHealth: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  rheumatoidArthritisImg: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  cancerCare: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  breastCancerHeal: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
  radiationTherapy: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  hearingWellness: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  digestiveHealth: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",

  eyeWellness: "https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp",
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

  if (typeof url === 'string' && url.startsWith('/')) {
    return url;
  }

  if (typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url;
  }

  return fallback;
};
