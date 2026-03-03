import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const copdExercisesArticle = findArticleBySlug("copd-exercises");

export default function COPDExercises() {
  return <ArticlePage article={copdExercisesArticle} />;
}