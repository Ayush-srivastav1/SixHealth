import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const mythsArticle = findArticleBySlug("myths");

export default function Myths() {
  return <ArticlePage article={mythsArticle} />;
}