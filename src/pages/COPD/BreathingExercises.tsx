import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const breathingExercisesArticle = sampleArticles.find((a) => a.slug === "breathing-exercises");

export default function BreathingExercises() {
  return <ArticlePage article={breathingExercisesArticle} />;
}