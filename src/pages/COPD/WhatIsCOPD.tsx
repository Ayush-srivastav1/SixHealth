import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const whatIsCOPDArticle = sampleArticles.find((a) => a.slug === "what-is-copd");

export default function WhatIsCOPD() {
  return <ArticlePage article={whatIsCOPDArticle} />;
}