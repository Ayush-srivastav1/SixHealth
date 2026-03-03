import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const whatIsCOPDArticle = findArticleBySlug("what-is-copd");

export default function WhatIsCOPD() {
  return <ArticlePage article={whatIsCOPDArticle} />;
}