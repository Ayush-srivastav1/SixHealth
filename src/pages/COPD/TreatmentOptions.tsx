import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const treatmentOptionsArticle = findArticleBySlug("treatment-options");

export default function TreatmentOptions() {
  return <ArticlePage article={treatmentOptionsArticle} />;
}