import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const coldTurkeyArticle = sampleArticles.find((a) => a.slug === "cold-turkey");

export default function ColdTurkey() {
  return <ArticlePage article={coldTurkeyArticle} />;
}