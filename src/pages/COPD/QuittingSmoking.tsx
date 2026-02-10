import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const quittingSmokingArticle = sampleArticles.find((a) => a.slug === "quitting-smoking");

export default function QuittingSmoking() {
  return <ArticlePage article={quittingSmokingArticle} />;
}