import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const travelArticle = sampleArticles.find((a) => a.slug === "travel");

export default function Travel() {
  return <ArticlePage article={travelArticle} />;
}