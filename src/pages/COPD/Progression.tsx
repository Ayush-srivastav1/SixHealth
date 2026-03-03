import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const progressionArticle = findArticleBySlug("progression");

export default function Progression() {
  return <ArticlePage article={progressionArticle} />;
}