import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const newTreatmentsArticle = sampleArticles.find((a) => a.slug === "new-treatments");

export default function NewTreatments() {
  return <ArticlePage article={newTreatmentsArticle} />;
}