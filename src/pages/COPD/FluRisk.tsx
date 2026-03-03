import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const fluRiskArticle = findArticleBySlug("flu-risk");

export default function FluRisk() {
  return <ArticlePage article={fluRiskArticle} />;
}