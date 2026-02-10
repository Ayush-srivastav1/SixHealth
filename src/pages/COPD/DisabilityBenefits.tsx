import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const disabilityBenefitsArticle = sampleArticles.find((a) => a.slug === "disability-benefits");

export default function DisabilityBenefits() {
  return <ArticlePage article={disabilityBenefitsArticle} />;
}