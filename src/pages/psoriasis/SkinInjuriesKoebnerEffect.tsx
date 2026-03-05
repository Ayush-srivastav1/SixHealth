import ArticleLayout from "@/components/ArticleLayout";
import { findArticleBySlug } from "@/data/allArticles";

export default function SkinInjuriesKoebnerEffect() {
  const article = findArticleBySlug("skin-injuries-koebner-effect");
  return (
    <ArticleLayout
      title={article?.title ?? "Koebner Phenomenon"}
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
