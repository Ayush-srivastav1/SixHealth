import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";

const tabs = [
  "Basics",
  "Symptoms",
  "Diagnosis",
  "Treatment",
  "Prevention",
];

export const sections = [
  {
    id: "basics",
    title: "Pneumonia Basics",
    category: "Basics",
    articles: [
      { id: "p1", title: "What is Pneumonia?", content: "Pneumonia is an infection that inflames the air sacs in one or both lungs. Learn about its causes, types, and how it affects breathing." },
      { id: "p2", title: "Types of Pneumonia", content: "Explore bacterial, viral, and fungal pneumonia, including community-acquired and hospital-acquired types." },
      { id: "p3", title: "Pneumonia in Children", content: "Understanding pneumonia in pediatric patients, common causes, and treatment approaches." },
      { id: "p4", title: "Pneumonia in Adults", content: "Risk factors and management strategies for pneumonia in adult populations." },
      { id: "p5", title: "Risk Factors", content: "Learn about age, smoking, chronic diseases, and other factors that increase pneumonia risk." },
    ],
  },
  {
    id: "symptoms",
    title: "Symptoms & Complications",
    category: "Symptoms",
    articles: [
      { id: "s1", title: "Common Pneumonia Symptoms", content: "Cough, fever, chills, shortness of breath, and chest pain are typical signs. Learn to recognize them." },
      { id: "s2", title: "Severe Symptoms", content: "When pneumonia becomes serious - confusion, rapid breathing, and bluish skin color." },
      { id: "s3", title: "Complications", content: "Potential complications like pleural effusion, lung abscess, and respiratory failure." },
      { id: "s4", title: "Recovery Timeline", content: "How long it takes to recover from pneumonia and what to expect during recovery." },
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis & Testing",
    category: "Diagnosis",
    articles: [
      { id: "d1", title: "How is Pneumonia Diagnosed?", content: "Physical examination, chest X-ray, and laboratory tests used to diagnose pneumonia." },
      { id: "d2", title: "Sputum Culture", content: "How sputum analysis helps identify the specific cause of pneumonia." },
      { id: "d3", title: "Blood Tests", content: "Blood work to confirm infection and assess severity of pneumonia." },
      { id: "d4", title: "Imaging Studies", content: "Chest X-rays, CT scans, and other imaging used in pneumonia diagnosis." },
    ],
  },
  {
    id: "treatment",
    title: "Treatment & Management",
    category: "Treatment",
    articles: [
      { id: "t1", title: "Antibiotic Therapy", content: "When and how antibiotics are used to treat bacterial pneumonia." },
      { id: "t2", title: "Antiviral Medications", content: "Treatment options for viral pneumonia including influenza and COVID-19." },
      { id: "t3", title: "Supportive Care", content: "Rest, hydration, oxygen therapy, and pain management for pneumonia recovery." },
      { id: "t4", title: "Hospital vs Home Care", content: "When hospitalization is needed and when pneumonia can be treated at home." },
    ],
  },
  {
    id: "prevention",
    title: "Prevention & Vaccines",
    category: "Prevention",
    articles: [
      { id: "pr1", title: "Pneumonia Vaccines", content: "Pneumococcal and flu vaccines - who needs them and when to get vaccinated." },
      { id: "pr2", title: "Hygiene Practices", content: "Hand washing, cough etiquette, and other preventive measures." },
      { id: "pr3", title: "Lifestyle Factors", content: "Smoking cessation, exercise, and nutrition for pneumonia prevention." },
      { id: "pr4", title: "High-Risk Groups", content: "Special prevention strategies for elderly, immunocompromised, and chronic disease patients." },
    ],
  },
];

export default function Pneumonia() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Basics": useRef(null),
    "Symptoms": useRef(null),
    "Diagnosis": useRef(null),
    "Treatment": useRef(null),
    "Prevention": useRef(null),
  };

  // Helper to scroll to section
  const scrollToSection = (category: string) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Pneumonia</h1>
          <p className="text-lg opacity-95 mb-6">
            Your comprehensive guide to understanding and managing pneumonia
          </p>

          <div className="flex justify-center">
            <nav className="flex gap-6 flex-wrap md:flex-nowrap justify-center mt-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab)}
                  className="px-8 py-4 rounded-full font-medium transition text-blue-400 bg-gray-900 hover:bg-gray-800 hover:text-blue-300 text-lg shadow-md"
                  style={{ minWidth: 120 }}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* CONTENT: Show all sections */}
      <section className="max-w-7xl mx-auto px-5 py-10 space-y-12">
        {sections.map((section) => (
          <div key={section.id} ref={sectionRefs[section.category]}>
            <Section section={section} />
          </div>
        ))}

        {/* NEWSLETTER */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Get weekly Pneumonia updates
          </h2>

          {!subscribed ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="border border-blue-300 rounded px-4 py-2"
              />
              <button className="bg-blue-700 text-white rounded py-2 font-semibold">
                Sign Up
              </button>
            </form>
          ) : (
            <p className="text-green-700 font-medium">
              ✅ You're subscribed successfully!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

/* ---------------- SECTION ---------------- */

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
        {section.articles.map((article) => (
          <Link
            key={article.id}
            className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none no-underline"
            to={`/pneumonia/article/${article.id}`}
            state={{ title: article.title }}
          >
            <img
              src="/placeholder.svg"
onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
              alt={article.title}
              className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <span className="text-blue-700 text-sm font-semibold mt-auto">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}



