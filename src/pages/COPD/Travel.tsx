import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const travelArticle = findArticleBySlug("travel");

export default function Travel() {
  return <ArticlePage article={travelArticle} />;
}