import { useParams } from "react-router-dom";

export default function SubSectionPage() {
  const { sectionId, subSectionId } = useParams();
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Asthma Subsection: {sectionId} / {subSectionId}</h1>
      <section className="prose">
        {}
      </section>
    </div>
  );
}
