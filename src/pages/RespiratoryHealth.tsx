import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";

const tabs = [
  "Overview",
  "Conditions",
  "Prevention",
  "Management",
];

export const sections = [
  {
    id: "overview",
    title: "Respiratory Health Overview",
    category: "Overview",
    articles: [
      { id: "r1", title: "Understanding Respiratory System", content: "Learn about the anatomy and function of the respiratory system and its importance for overall health." },
      { id: "r2", title: "Common Respiratory Issues", content: "Overview of frequent respiratory problems including asthma, COPD, and allergies." },
      { id: "r3", title: "Environmental Factors", content: "How air quality, pollution, and climate affect respiratory health." },
      { id: "r4", title: "Lifestyle Impact", content: "The role of smoking, exercise, and diet in maintaining respiratory wellness." },
    ],
  },
  {
    id: "conditions",
    title: "Respiratory Conditions",
    category: "Conditions",
    articles: [
      { id: "c1", title: "Asthma Management", content: "Comprehensive guide to living with asthma and controlling symptoms." },
      { id: "c2", title: "COPD Care", content: "Understanding chronic obstructive pulmonary disease and treatment options." },
      { id: "c3", title: "Allergies & Hay Fever", content: "Managing seasonal and year-round allergic respiratory conditions." },
      { id: "c4", title: "Pneumonia Prevention", content: "Risk factors and preventive measures for pneumonia infection." },
      { id: "c5", title: "Bronchitis Treatment", content: "Acute and chronic bronchitis: causes, symptoms, and recovery." },
    ],
  },
  {
    id: "prevention",
    title: "Prevention & Protection",
    category: "Prevention",
    articles: [
      { id: "p1", title: "Vaccination Guidelines", content: "Recommended vaccines for respiratory health including flu and pneumococcal shots." },
      { id: "p2", title: "Air Quality Awareness", content: "Monitoring air pollution and taking protective measures." },
      { id: "p3", title: "Smoking Cessation", content: "Programs and strategies to quit smoking for better lung health." },
      { id: "p4", title: "Exercise Benefits", content: "How regular physical activity improves respiratory function and capacity." },
    ],
  },
  {
    id: "management",
    title: "Daily Management",
    category: "Management",
    articles: [
      { id: "m1", title: "Breathing Exercises", content: "Techniques like pursed-lip breathing and diaphragmatic breathing for lung health." },
      { id: "m2", title: "Home Environment", content: "Creating a respiratory-friendly home environment with proper ventilation and air purification." },
      { id: "m3", title: "Medication Adherence", content: "Importance of following prescribed treatment plans for respiratory conditions." },
      { id: "m4", title: "Regular Check-ups", content: "The role of routine medical visits in maintaining respiratory health." },
    ],
  },
];

export default function RespiratoryHealth() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Overview": useRef(null),
    "Conditions": useRef(null),
    "Prevention": useRef(null),
    "Management": useRef(null),
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
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Respiratory Health</h1>
          <p className="text-lg opacity-95 mb-6">
            Breathe easier with comprehensive respiratory health guidance
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
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            Get weekly Respiratory Health updates
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
                className="border border-green-300 rounded px-4 py-2"
              />
              <button className="bg-green-700 text-white rounded py-2 font-semibold">
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
            to={`/respiratory-health/article/${article.id}`}
            state={{ title: article.title }}
          >
            <img
              src="/placeholder.svg"
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
