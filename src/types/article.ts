export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string; // Display name (e.g. "Heart & Cardiovascular")
  categorySlug?: string; // URL value (e.g. "heart-cardiovascular")
  description?: string;
  author?: string;
  content?: string; // Full HTML content (string HTML preferred in blogData)

  // Optional metadata kept for compatibility
  imageUrl?: string;
  images?: string[];
  readTime?: string;
  date?: string;
  publishDate?: string;
  updatedDate?: string;
  source?: string;
  keyTakeaways?: string[];
  sourceLabel?: string;
  // Compatibility optional fields
  excerpt?: string;
  authorRole?: string;
  reviewer?: string;
  reviewerRole?: string;
  sections?: ArticleSection[];
  key?: string;
}

export type ArticleSection = {
  id: string;
  heading?: string;
  body?: string;
};
