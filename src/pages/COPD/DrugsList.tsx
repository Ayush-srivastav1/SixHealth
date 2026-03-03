import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const drugsListArticle = findArticleBySlug("drugs-list");

export default function DrugsList() {
  return <ArticlePage article={drugsListArticle} />;
}