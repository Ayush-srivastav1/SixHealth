import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { tabSections } from "../Psoriasis";

export default function ArticlePage() {
  const { articleId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // Find the article by id (slug)
  let foundArticle = null;
  let foundSection = null;
  for (const section of tabSections || []) {
    for (const [heading, desc] of section.articles) {
      const slug = heading.toLowerCase().replace(/\s+/g, '-');
      if (slug === articleId) {
        foundArticle = { heading, desc };
        foundSection = section.title;
        break;
      }
    }
    if (foundArticle) break;
  }
  const title = foundArticle?.heading || location.state?.title || "Article";
  const desc = foundArticle?.desc || "";

  return (
    <Layout>
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
    </Layout>
  );
}
