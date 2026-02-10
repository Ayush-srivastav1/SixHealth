import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const nutritionGuideArticle = sampleArticles.find((a) => a.slug === "nutrition-guide");

export default function NutritionGuide() {
  return <ArticlePage article={nutritionGuideArticle} />;
}