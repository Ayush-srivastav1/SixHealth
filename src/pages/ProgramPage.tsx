import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import ArticlePage from "@/pages/ArticlePage";
import { findArticleBySlug } from "@/data/allArticles";

const ProgramPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1>Program not found</h1>
        </div>
      </Layout>
    );
  }

  // Search for article in blogData by slug or ID
  const article = findArticleBySlug(slug);

  if (!article) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1>Program "{slug}" not found</h1>
        </div>
      </Layout>
    );
  }

  // Use ArticlePage to render the article with proper layout
  return <ArticlePage />;
};

export default ProgramPage;
