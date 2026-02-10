import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const lungTransplantsArticle = sampleArticles.find((a) => a.slug === "lung-transplants");

export default function LungTransplants() {
  return <ArticlePage article={lungTransplantsArticle} />;
}