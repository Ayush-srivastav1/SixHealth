import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const quitTobaccoArticle = findArticleBySlug("quit-tobacco");

export default function QuitTobacco() {
  return <ArticlePage article={quitTobaccoArticle} />;
}