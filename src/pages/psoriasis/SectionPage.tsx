import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";

export default function SectionPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.state?.title || "Section";

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
        <div className="text-gray-700 text-lg">
          {}
        </div>
      </div>
    </Layout>
  );
}
