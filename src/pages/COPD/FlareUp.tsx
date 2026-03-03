import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const flareUpArticle = findArticleBySlug("flare-up");

export default function FlareUp() {
  return <ArticlePage article={flareUpArticle} />;
}