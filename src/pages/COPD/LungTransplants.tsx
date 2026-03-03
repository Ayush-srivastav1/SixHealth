import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const lungTransplantsArticle = findArticleBySlug("lung-transplants");

export default function LungTransplants() {
  return <ArticlePage article={lungTransplantsArticle} />;
}