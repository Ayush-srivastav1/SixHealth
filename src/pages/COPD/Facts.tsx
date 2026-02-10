import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const factsArticle = sampleArticles.find((a) => a.slug === "facts");

export default function Facts() {
  return <ArticlePage article={factsArticle} />;
}