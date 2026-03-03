import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const disabilityBenefitsArticle = findArticleBySlug("disability-benefits");

export default function DisabilityBenefits() {
  return <ArticlePage article={disabilityBenefitsArticle} />;
}