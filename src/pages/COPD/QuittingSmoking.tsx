import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const quittingSmokingArticle = findArticleBySlug("quitting-smoking");

export default function QuittingSmoking() {
  return <ArticlePage article={quittingSmokingArticle} />;
}