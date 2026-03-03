/**
 * Video Hub Data
 * Scalable video management following similar pattern to ArticlePage architecture
 */

export interface VideoItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  series?: string;
  youtubeId: string;
  duration?: string;
  thumbnail?: string;
  featured?: boolean;
}

export const videoData: VideoItem[] = [
  // Sleep Videos
  {
    id: "sleep-001",
    slug: "sleep-hygiene-guide",
    title: "Sleep Hygiene: Complete Guide to Better Sleep",
    description: "Learn proven techniques to improve sleep quality and establish healthy sleep habits. Discover the science behind sleep hygiene and how to implement these strategies in your daily routine.",
    category: "Sleep",
    categorySlug: "sleep",
    series: "Sleep Mastery",
    youtubeId: "7qZWZn7iqL0",
    duration: "8:42",
    featured: true,
  },
  {
    id: "sleep-002",
    slug: "managing-insomnia",
    title: "Managing Insomnia: Evidence-Based Approaches",
    description: "Explore clinical approaches to managing insomnia. This video covers cognitive behavioral therapy techniques, medication options, and lifestyle modifications recommended by sleep specialists.",
    category: "Sleep",
    categorySlug: "sleep",
    series: "Sleep Mastery",
    youtubeId: "xMsNjW-0xXg",
    duration: "11:15",
  },

  // Mental Health Videos
  {
    id: "mental-health-001",
    slug: "stress-management-techniques",
    title: "Stress Management Techniques for Daily Life",
    description: "Master practical stress reduction techniques including breathing exercises, mindfulness, and relaxation methods. Perfect for busy professionals seeking immediate relief.",
    category: "Mental Health",
    categorySlug: "mental-health",
    series: "Mental Wellness",
    youtubeId: "O-6f5wQXSu8",
    duration: "9:28",
    featured: true,
  },
  {
    id: "mental-health-002",
    slug: "meditation-for-beginners",
    title: "Meditation for Beginners: Start Your Practice",
    description: "Introduction to meditation for newcomers. Learn different meditation styles, how to prepare your space, and common mistakes to avoid when starting your meditation journey.",
    category: "Mental Health",
    categorySlug: "mental-health",
    series: "Mental Wellness",
    youtubeId: "tYzMGQUUY6U",
    duration: "7:53",
  },

  // Nutrition Video
  {
    id: "nutrition-001",
    slug: "balanced-nutrition-basics",
    title: "Balanced Nutrition: Building Healthy Meals",
    description: "Understanding macronutrients and micronutrients. Learn how to create balanced meals that support your health goals with practical tips from registered dietitians.",
    category: "Nutrition",
    categorySlug: "nutrition",
    youtubeId: "e7vCU2W8h_M",
    duration: "10:22",
    featured: true,
  },

  // Heart Health Video
  {
    id: "heart-health-001",
    slug: "cardiovascular-exercise-guide",
    title: "Cardiovascular Exercise: A Complete Guide",
    description: "Learn how to structure your cardio workout for maximum heart health benefits. Includes recommendations for different fitness levels and practical exercise demonstrations.",
    category: "Heart Health",
    categorySlug: "heart-health",
    youtubeId: "qX9fvZwpgaQ",
    duration: "12:05",
  },
];

/**
 * Get unique video categories
 */
export function getVideoCategories(): string[] {
  const categories = new Map<string, string>();
  videoData.forEach((video) => {
    categories.set(video.categorySlug, video.category);
  });
  return Array.from(categories.values());
}

/**
 * Get videos by category slug
 */
export function getVideosByCategory(categorySlug: string): VideoItem[] {
  return videoData.filter((video) => video.categorySlug === categorySlug);
}

/**
 * Get video by slug
 */
export function getVideoBySlug(categorySlug: string, slug: string): VideoItem | undefined {
  return videoData.find(
    (video) => video.categorySlug === categorySlug && video.slug === slug
  );
}

/**
 * Get featured videos
 */
export function getFeaturedVideos(): VideoItem[] {
  return videoData.filter((video) => video.featured).slice(0, 4);
}

/**
 * Get related videos (same category, excluding current)
 */
export function getRelatedVideos(categorySlug: string, currentSlug: string, limit = 3): VideoItem[] {
  return videoData
    .filter((video) => video.categorySlug === categorySlug && video.slug !== currentSlug)
    .slice(0, limit);
}
