import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const progressionArticle = sampleArticles.find((a) => a.slug === "progression");

export default function Progression() {
  return <ArticlePage article={progressionArticle} />;
}