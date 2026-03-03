import { useParams } from "react-router-dom";

export default function SectionPage() {
  const { sectionId } = useParams();
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Asthma Section: {sectionId}</h1>
      <section className="prose">
        {/* Content section - to be filled later */}
      </section>
    </div>
  );
}
