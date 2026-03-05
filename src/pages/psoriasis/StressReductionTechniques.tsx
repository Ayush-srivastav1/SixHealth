import ArticleLayout from "@/components/ArticleLayout";
import { findArticleBySlug } from "@/data/allArticles";

export default function StressReductionTechniques() {
  const article = findArticleBySlug("stress-reduction-techniques");
  return (
    <ArticleLayout
      title={article?.title ?? "Stress Reduction Techniques"}
      heroImage={article?.imageUrl}
      author={article?.author ? { name: article.author } : undefined}
      published={article?.publishDate}
      toc={[]}
      relatedArticles={[]}
    >
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article?.content || "" }} />
    </ArticleLayout>
  );
}
