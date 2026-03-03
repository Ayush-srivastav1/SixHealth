import React from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import featuredList from "@/data/featuredList";
import { findArticleBySlug } from "@/data/allArticles";
import ArticlePage from "@/pages/ArticlePage";

const humanize = (s?: string) => {
  if (!s) return "Featured";
  return s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const FeaturedPage: React.FC = () => {
  const { slug } = useParams();
  const article = findArticleBySlug(slug);

  if (article) {
    return (
      <ArticlePage />
    );
  }

  const title = (slug && featuredList[slug]) || humanize(slug);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 mb-6">This is a featured topic placeholder. Content for "{title}" will be available soon.</p>
        <div className="space-y-4">
          <p>If you were expecting an article, try searching or browse related topics:</p>
          <div className="flex gap-3">
            <Link to="/blog" className="px-4 py-2 bg-blue-600 text-white rounded">Browse Blog</Link>
            <Link to="/wellness" className="px-4 py-2 border rounded">Explore Wellness</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturedPage;
