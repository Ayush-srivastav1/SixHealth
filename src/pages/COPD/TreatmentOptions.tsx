import ArticlePage from "@/components/ArticlePage";
import { sampleArticles } from "@/data/articles";

const treatmentOptionsArticle = sampleArticles.find((a) => a.slug === "treatment-options");

export default function TreatmentOptions() {
  return <ArticlePage article={treatmentOptionsArticle} />;
}