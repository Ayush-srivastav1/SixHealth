import React, { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import allArticles, { findArticleBySlug } from "@/data/allArticles";

type TocItem = { id: string; text: string };

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = findArticleBySlug(slug);
  if (!article) return <Navigate to="/not-found" replace />;

  useEffect(() => {
    const prev = document.title;
    if (article?.title) document.title = `${article.title} | SixHealth`;
    return () => {
      document.title = prev;
    };
  }, [article?.title]);

  const html = article.content || "";

  const { htmlWithIds, toc } = useMemo(() => {
    const items: TocItem[] = [];
    let idx = 0;
    const replaced = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (_match, attrs, inner) => {
      const id = `section-${idx++}`;
      const text = inner.replace(/<[^>]+>/g, "").trim();
      items.push({ id, text });
      return `<h2 id="${id}"${attrs || ""}>${inner}</h2>`;
    });

    return { htmlWithIds: replaced, toc: items };
  }, [html]);

  const relatedArticles = allArticles
    .filter((a) => ((a.categorySlug || a.category || "") as string).toLowerCase() === ((article.categorySlug || article.category || "") as string).toLowerCase())
    .filter((a) => a.slug !== article.slug)
    .slice(0, 6);

  return (
    <ArticleLayout
      title={article.title}
      heroImage={article.imageUrl}
      author={article.author ? { name: article.author } : undefined}
      published={article.publishDate || article.publishDate}
      toc={toc}
      relatedArticles={relatedArticles.map((a) => ({ slug: a.slug, title: a.title, imageUrl: a.imageUrl, excerpt: a.excerpt || a.description }))}
    >
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlWithIds }} />
    </ArticleLayout>
  );
};

export default ArticlePage;
