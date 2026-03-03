import ArticlePage from "@/components/ArticleRenderer";
import { findArticleBySlug } from "@/data/allArticles";

const progressAfterQuittingArticle = findArticleBySlug("progress-after-quitting");

export default function ProgressAfterQuitting() {
  return <ArticlePage article={progressAfterQuittingArticle as any} />;
}