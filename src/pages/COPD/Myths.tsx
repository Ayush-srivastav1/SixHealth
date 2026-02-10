import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const mythsArticle = sampleArticles.find((a) => a.slug === "myths");

export default function Myths() {
  return <ArticlePage article={mythsArticle} />;
}