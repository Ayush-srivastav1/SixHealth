import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const drugsListArticle = sampleArticles.find((a) => a.slug === "drugs-list");

export default function DrugsList() {
  return <ArticlePage article={drugsListArticle} />;
}