import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const fluRiskArticle = sampleArticles.find((a) => a.slug === "flu-risk");

export default function FluRisk() {
  return <ArticlePage article={fluRiskArticle} />;
}