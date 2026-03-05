import { useLocation, useParams, useNavigate } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";

export default function SubSectionPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.state?.title || "Subsection";

  return (
    <ArticleLayout title={title} toc={[]} relatedArticles={[]}>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button
          className="mb-6 text-purple-700 hover:underline"
          onClick={() => navigate(-1)}
        >
          ← Back to Psoriasis
        </button>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="text-gray-700 text-lg">
          {}
        </div>
      </div>
    </ArticleLayout>
  );
}
