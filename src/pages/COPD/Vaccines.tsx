import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const vaccinesArticle = sampleArticles.find((a) => a.slug === "vaccines");

export default function Vaccines() {
  return <ArticlePage article={vaccinesArticle} />;
}