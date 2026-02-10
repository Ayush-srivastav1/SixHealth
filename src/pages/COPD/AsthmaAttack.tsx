import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const asthmaAttackArticle = sampleArticles.find((a) => a.slug === "asthma-attack");

export default function AsthmaAttack() {
  return <ArticlePage article={asthmaAttackArticle} />;
}