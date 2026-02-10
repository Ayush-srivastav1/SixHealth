import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const quitTobaccoArticle = sampleArticles.find((a) => a.slug === "quit-tobacco");

export default function QuitTobacco() {
  return <ArticlePage article={quitTobaccoArticle} />;
}