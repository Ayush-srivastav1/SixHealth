import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const factsArticle = findArticleBySlug("facts");

export default function Facts() {
  return <ArticlePage article={factsArticle} />;
}