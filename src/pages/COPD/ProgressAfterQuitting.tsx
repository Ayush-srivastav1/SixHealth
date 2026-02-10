import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const progressAfterQuittingArticle = sampleArticles.find((a) => a.slug === "progress-after-quitting");

export default function ProgressAfterQuitting() {
  return <ArticlePage article={progressAfterQuittingArticle} />;
}