import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const protectLungsArticle = sampleArticles.find((a) => a.slug === "protect-lungs");

export default function ProtectLungs() {
  return <ArticlePage article={protectLungsArticle} />;
}