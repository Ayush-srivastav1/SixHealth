import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const nutritionGuideArticle = findArticleBySlug("nutrition-guide");

export default function NutritionGuide() {
  return <ArticlePage article={nutritionGuideArticle} />;
}