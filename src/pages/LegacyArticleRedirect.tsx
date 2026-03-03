import { useParams, Navigate } from "react-router-dom";
import { default as allArticles } from "@/data/allArticles";

/**
 * LegacyArticleRedirect
 * 
 * Compatibility layer for old routes that use article IDs.
 * Redirects /article/:id to the new /:categorySlug/article/:slug format.
 * 
 * This allows old links and bookmarks to continue working without
 * maintaining the full ArticleDetail component.
 */
export default function LegacyArticleRedirect() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Article Not Found</h1>
        <p className="text-gray-600">The article you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Find article by ID in blogData
  const article = allArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Article Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find the article you're looking for.</p>
      </div>
    );
  }

  // Redirect to new slug-based URL
  const category = (article.categorySlug || article.category || "")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return <Navigate to={`/${category}/article/${article.slug}`} replace />;
}
