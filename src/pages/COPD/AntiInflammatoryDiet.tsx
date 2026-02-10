import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const antiInflammatoryDietArticle = sampleArticles.find((a) => a.slug === "anti-inflammatory-diet");

export default function AntiInflammatoryDiet() {
  return <ArticlePage article={antiInflammatoryDietArticle} />;
}