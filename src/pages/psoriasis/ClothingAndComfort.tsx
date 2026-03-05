import ArticleLayout from "@/components/ArticleLayout";
import { findArticleBySlug } from "@/data/allArticles";

export default function ClothingAndComfort() {
  const article = findArticleBySlug("clothing-and-comfort");
  return (
    <ArticleLayout
      title={article?.title ?? "Clothing and Comfort"}
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
