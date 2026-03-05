import ArticleLayout from "@/components/ArticleLayout";
import { findArticleBySlug } from "@/data/allArticles";

export default function SeverityAssessment() {
  const article = findArticleBySlug("severity-assessment");
  return (
    <ArticleLayout
      title={article?.title ?? "Severity Assessment"}
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
