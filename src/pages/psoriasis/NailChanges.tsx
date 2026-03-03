import { Layout } from "@/components/layout";
import { findArticleBySlug } from "@/data/allArticles";

export default function NailChanges() {
  const article = findArticleBySlug("nail-changes");
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{article?.title ?? "Nail Changes"}</h1>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article?.content || "" }} />
      </div>
    </Layout>
  );
}
