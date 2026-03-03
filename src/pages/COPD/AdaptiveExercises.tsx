import ArticlePage from "@/components/ArticleRenderer";
import { findArticleBySlug } from "@/data/allArticles";

const adaptiveExercisesArticle = findArticleBySlug("adaptive-exercises");

export default function AdaptiveExercises() {
  return <ArticlePage article={adaptiveExercisesArticle as any} />;
}