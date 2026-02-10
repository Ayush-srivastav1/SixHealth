import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const copdExercisesArticle = sampleArticles.find((a) => a.slug === "copd-exercises");

export default function COPDExercises() {
  return <ArticlePage article={copdExercisesArticle} />;
}