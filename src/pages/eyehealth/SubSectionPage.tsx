import { useParams, useNavigate } from "react-router-dom";

export default function EyeHealthSubSectionPage() {
  const { sectionId, subSectionId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <button
        className="mb-4 text-purple-600 hover:underline"
        onClick={() => navigate('/eye-health')}
      >
        ← Back to Eye Health
      </button>
      <h1 className="text-2xl font-bold mb-4">Subsection: {sectionId} / {subSectionId}</h1>
      <section className="prose">
        {}
      </section>
    </div>
  );
}
