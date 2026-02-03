import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function EyeHealthArticlePage() {
  const { articleId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.state?.title || articleId;
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <button
        className="mb-4 text-purple-600 hover:underline"
        onClick={() => navigate('/eye-health')}
      >
        ← Back to Eye Health
      </button>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <section className="prose">
        {/* Content section - to be filled later */}
      </section>
    </div>
  );
}
