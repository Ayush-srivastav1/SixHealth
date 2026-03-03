import ArticleRenderer, { ArticleLayout } from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const SLUG = "anti-inflammatory-diet";
const antiInflammatoryDietArticle =
  findArticleBySlug(SLUG) ?? {
    id: SLUG,
    slug: SLUG,
    title: "Anti-Inflammatory Diet",
    category: "conditions",
    content: "<p>Placeholder content for Anti-Inflammatory Diet.</p>",
  };

export default function AntiInflammatoryDiet() {
  return <ArticleLayout article={antiInflammatoryDietArticle} />;
}