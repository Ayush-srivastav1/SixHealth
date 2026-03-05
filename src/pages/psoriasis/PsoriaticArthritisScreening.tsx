import ArticleLayout from "@/components/ArticleLayout";
import { findArticleBySlug } from "@/data/allArticles";

export default function PsoriaticArthritisScreening() {
  const article = findArticleBySlug("psoriatic-arthritis-screening");
  return (
    <ArticleLayout
      title={article?.title ?? "Psoriatic Arthritis Screening"}
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
