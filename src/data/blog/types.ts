export interface BlogPost {
  id: string;
  title?: string;
  slug?: string;
  category?: string;
  categorySlug?: string;
  description?: string;
  author?: string;
  authorRole?: string;
  reviewer?: string;
  readTime?: string;
  publishDate?: string;
  updatedDate?: string;
  imageUrl?: string;
  aliases?: string[];
  excerpt?: string;
  summary?: string;
  source?: string;
  date?: string;
  content?: string;
}

export default BlogPost;
