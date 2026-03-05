import { useLocation, useParams, useNavigate } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import { tabSections } from "../Psoriasis";
import { sampleArticles } from "@/data/articles";

export default function ArticlePage() {
  const { articleId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const dataArticle = sampleArticles.find((a) => a.slug === articleId);

  let foundArticle = null;
  let foundSection = null;
  if (!dataArticle) {
    for (const section of tabSections || []) {
      for (const [heading, desc] of section.articles) {
        const slug = heading.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
        if (slug === articleId) {
          foundArticle = { heading, desc };
          foundSection = section.title;
          break;
        }
      }
      if (foundArticle) break;
    }
  }

  const title = dataArticle?.title || foundArticle?.heading || location.state?.title || "Article";
  const desc = dataArticle?.excerpt || foundArticle?.desc || "";

  return (
    <ArticleLayout
      title={title}
      heroImage={dataArticle?.imageUrl}
      author={dataArticle?.author ? { name: dataArticle.author } : undefined}
      published={dataArticle?.date}
      toc={[]}
      relatedArticles={[]}
    >
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button
          className="mb-6 text-purple-700 hover:underline"
          onClick={() => navigate(-1)}
        >
          ← Back to Psoriasis
        </button>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="text-gray-700 text-lg mb-4">
          {desc}
        </div>
        {!foundArticle && (
          <div className="text-red-600">Sorry, this article was not found.</div>
        )}
      </div>
    </ArticleLayout>
  );
}
