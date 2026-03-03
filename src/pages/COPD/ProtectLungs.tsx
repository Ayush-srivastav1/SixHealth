import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const protectLungsArticle = findArticleBySlug("protect-lungs");

export default function ProtectLungs() {
  return <ArticlePage article={protectLungsArticle} />;
}