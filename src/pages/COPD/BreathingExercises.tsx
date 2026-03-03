import ArticleRenderer, { ArticleLayout } from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const SLUG = "breathing-exercises";
const breathingExercisesArticle =
  findArticleBySlug(SLUG) ?? {
    id: SLUG,
    slug: SLUG,
    title: "Breathing Exercises",
    category: "conditions",
    content: "<p>Placeholder content for Breathing Exercises.</p>",
  };

export default function BreathingExercises() {
  return <ArticleLayout article={breathingExercisesArticle} />;
}