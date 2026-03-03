import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const coldTurkeyArticle = findArticleBySlug("cold-turkey");

export default function ColdTurkey() {
  return <ArticlePage article={coldTurkeyArticle} />;
}