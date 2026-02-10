import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const flareUpArticle = sampleArticles.find((a) => a.slug === "flare-up");

export default function FlareUp() {
  return <ArticlePage article={flareUpArticle} />;
}