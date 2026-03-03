
import { useState, useRef } from "react";
import { Layout } from "@/components/layout";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { findArticleBySlug, allArticles } from "@/data/allArticles";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";

const tabs = [
  "Eye Conditions",
  "Vision Problems",
  "Diagnosis",
  "Treatment",
  "Prevention",
  "Healthy Vision",
];

const sections = [
  {
    id: "diagnosis",
    title: "Eye Examination and Diagnosis",
    category: "Diagnosis",
    articles: [
      { id: "exam", title: "Eye Exam Basics", content: "What happens during checkups…" },
      { id: "acuity", title: "Vision Acuity Testing", content: "Measuring your eyesight…" },
      { id: "oct", title: "Optical Coherence Tomography", content: "OCT imaging…" },
      { id: "field", title: "Visual Field Testing", content: "Peripheral vision assessment…" },
      { id: "pressure", title: "Intraocular Pressure Measurement", content: "Glaucoma screening…" },
      { id: "dilated", title: "Dilated Eye Exam", content: "Examining the retina…" },
    ],
  },
  {
    id: "treatment",
    title: "Treatment Options",
    category: "Treatment",
    articles: [
      { id: "glasses", title: "Eyeglasses", content: "Optical correction…" },
      { id: "contacts", title: "Contact Lenses", content: "Advantages and care…" },
      { id: "lasik", title: "LASIK and Refractive Surgery", content: "Corrective procedures…" },
      { id: "cataract", title: "Cataract Surgery", content: "Lens replacement…" },
      { id: "glaucoma-meds", title: "Glaucoma Medications", content: "Eye drops and medications…" },
      { id: "laser", title: "Laser and Injection Therapies", content: "Advanced treatments…" },
    ],
  },
  {
    id: "prevention",
    title: "Eye Disease Prevention",
    category: "Prevention",
    articles: [
      { id: "uv", title: "UV Protection", content: "Sunglasses and sun safety…" },
      { id: "screen", title: "Screen Time and Eye Health", content: "Digital eye strain…" },
      { id: "nutrition", title: "Nutrition for Eyes", content: "Vitamins and antioxidants…" },
      { id: "exercise", title: "Exercise and Vision", content: "Physical activity benefits…" },
      { id: "smoking", title: "Smoking Cessation", content: "Quitting for eye health…" },
      { id: "exams", title: "Regular Eye Exams", content: "Screening schedules…" },
    ],
  },
  {
    id: "healthy",
    title: "Maintaining Healthy Vision",
    category: "Healthy Vision",
    articles: [
      { id: "daily", title: "Daily Eye Care", content: "Hygiene and practices…" },
      { id: "lens-care", title: "Contact Lens Care", content: "Proper cleaning and storage…" },
      { id: "cvs", title: "Computer Vision Syndrome", content: "Managing digital strain…" },
      { id: "safety", title: "Safety Eyewear", content: "Protecting eyes from injury…" },
      { id: "meds", title: "Medication Side Effects", content: "Drugs affecting vision…" },
      { id: "emergency", title: "When to Seek Emergency Care", content: "Urgent eye symptoms…" },
    ],
  },
];

function Section({ section }: {
  section: {
    title: string;
    articles: { id: string; title: string; content: string }[];
  };
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map((article) => {
          const gen = (article.id || article.title || "").toString();
          const found =
            findArticleBySlug(gen, "eye-health") ||
            findArticleBySlug(article.title, "eye-health") ||
            findArticleBySlug(gen) ||
            findArticleBySlug(article.title);
          const targetCategory = found ? (found.categorySlug || found.category) : "eye-health";
          const targetSlug = found ? found.slug : (article.id || article.title).toString();

          return (
            <Link
              key={article.id}
              className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none no-underline"
              to={`/conditions/${targetCategory}/article/${targetSlug}`}
              state={{ title: found ? found.title : article.title }}
            >
            <img
              src="/placeholder.svg"
              loading="lazy"
              onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
              alt={article.title}
              className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
            />
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <span className="text-purple-700 text-sm font-semibold mt-auto">
              Read more →
            </span>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
 
export default function EyeHealth() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Eye Conditions": useRef(null),
    "Vision Problems": useRef(null),
    "Diagnosis": useRef(null),
    "Treatment": useRef(null),
    "Prevention": useRef(null),
    "Healthy Vision": useRef(null),
  };
  const scrollToSection = (category: string) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <PageLayout
        title="Eye Health"
        subtitle="Comprehensive guide to eye diseases, vision problems, and maintaining healthy eyesight. Understanding common eye conditions and protecting your vision."
        tabs={tabs}
        activeTab={null}
        onTabClick={scrollToSection}
        heroColor="#2563eb"
      >
        <section className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} ref={sectionRefs[section.category]}>
              <Section section={section} />
            </div>
          ))}

          {}
        </section>
      </PageLayout>
    </Layout>
  );
}

