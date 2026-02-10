import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const adaptiveExercisesArticle = sampleArticles.find((a) => a.slug === "adaptive-exercises");

export default function AdaptiveExercises() {
  return <ArticlePage article={adaptiveExercisesArticle} />;
}