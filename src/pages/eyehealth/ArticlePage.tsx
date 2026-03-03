import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import ArticleRenderer, { ArticleLayout } from "@/components/ArticleRenderer";
import { findArticleBySlug } from "@/data/allArticles";

export default function EyeHealthArticlePage() {
  const { articleId } = useParams<{ articleId?: string }>();
  const location = useLocation();

  const slug = articleId ?? (location.state as any)?.slug ?? "";
  const found = findArticleBySlug(slug);

  if (!found) {
    const article = {
      id: slug || "eye-article",
      slug: slug || "eye-article",
      title: (location.state as any)?.title || "Eye Health Article",
      category: "eye-health",
      content: "<p>Content coming soon.</p>",
    } as any;

    return <ArticleLayout article={article} />;
  }
  if (slug && found.slug && slug !== found.slug) {
    const cat = (found.categorySlug || found.category || "").toString().toLowerCase().replace(/\s+/g, "-");
    return <Navigate to={`/conditions/${cat}/article/${found.slug}`} replace />;
  }

  const article = {
    id: found.id,
    slug: found.slug,
    title: found.title,
    category: found.category || "eye-health",
    content: found.content,
    author: found.author,
  } as any;

  return <ArticleLayout article={article} />;
}
