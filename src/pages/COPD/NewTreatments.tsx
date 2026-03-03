import ArticlePage from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const newTreatmentsArticle = findArticleBySlug("new-treatments");

export default function NewTreatments() {
  return <ArticlePage article={newTreatmentsArticle} />;
}