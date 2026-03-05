import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import ArticleRenderer, { ArticleLayout } from "@/components/ArticleRenderer";
import { findArticleBySlug } from "@/data/allArticles";
import type { Article } from "@/types/article";

export default function EyeHealthArticlePage() {
  const { articleId } = useParams<{ articleId?: string }>();
  const location = useLocation();

  const locState = (location.state as Partial<Article> | null) ?? null;
  const slug = articleId ?? locState?.slug ?? "";
  const found = findArticleBySlug(slug) as Article | undefined;

  if (!found) {
    const article: Article = {
      id: slug || "eye-article",
      slug: slug || "eye-article",
      title: locState?.title || "Eye Health Article",
      category: "eye-health",
      content: "<p>Content coming soon.</p>",
    };

    return <ArticleLayout article={article} />;
  }

  if (slug && found.slug && slug !== found.slug) {
    const cat = (found.categorySlug || found.category || "").toString().toLowerCase().replace(/\s+/g, "-");
    return <Navigate to={`/conditions/${cat}/article/${found.slug}`} replace />;
  }

  const article: Article = {
    id: found.id,
    slug: found.slug,
    title: found.title,
    category: found.category || "eye-health",
    content: found.content,
    author: found.author,
  };

  return <ArticleLayout article={article} />;
}
