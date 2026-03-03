import ArticleRenderer, { ArticleLayout } from "@/components/ArticleRenderer";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

const SLUG = "asthma-attack";
const asthmaAttackArticle =
  findArticleBySlug(SLUG) ?? {
    id: SLUG,
    slug: SLUG,
    title: "Asthma Attack",
    category: "conditions",
    content: "<p>Placeholder content for Asthma Attack.</p>",
  };

export default function AsthmaAttack() {
  return <ArticleLayout article={asthmaAttackArticle} />;
}