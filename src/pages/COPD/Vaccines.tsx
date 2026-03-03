import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const vaccinesArticle = findArticleBySlug("vaccines");

export default function Vaccines() {
  return <ArticlePage article={vaccinesArticle} />;
}