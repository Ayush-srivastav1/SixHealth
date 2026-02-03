
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
    title: "Asthma Basics",
    category: "Basics",
    articles: [
      { id: "a1", title: "What is Asthma?", content: "Asthma is a chronic inflammatory disease of the airways causing breathing difficulties. Learn about its causes, risk factors, and how it affects the lungs." },
      { id: "a2", title: "Types of Asthma", content: "Explore the different types of asthma, including allergic, non-allergic, occupational, and exercise-induced asthma." },
      { id: "a3", title: "Asthma in Children", content: "Understand how asthma presents in children, common triggers, and management strategies for pediatric asthma." },
      { id: "a4", title: "Adult-Onset Asthma", content: "Learn about asthma that develops in adulthood, its unique challenges, and treatment options." },
      { id: "a5", title: "Asthma and Allergies", content: "Discover the connection between asthma and allergies, and how to manage both conditions effectively." },
    ],
  },
  {
    id: "symptoms",
    title: "Symptoms & Triggers",
    category: "Symptoms",
    articles: [
      { id: "s1", title: "Common Asthma Symptoms", content: "Wheezing, shortness of breath, chest tightness, and coughing are hallmark symptoms. Learn how to recognize them early." },
      { id: "s2", title: "Asthma Triggers", content: "Identify common asthma triggers such as pollen, dust, exercise, cold air, and respiratory infections." },
      { id: "s3", title: "Allergen Exposure", content: "Understand how exposure to allergens like pet dander and mold can worsen asthma symptoms." },
      { id: "s4", title: "Exercise-Induced Asthma", content: "Tips for managing asthma symptoms during physical activity and sports." },
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis & Testing",
    category: "Diagnosis",
    articles: [
      { id: "d1", title: "How is Asthma Diagnosed?", content: "Learn about spirometry, peak flow measurement, and other tests used to diagnose asthma." },
      { id: "d2", title: "Allergy Testing", content: "Find out how allergy testing can help identify triggers and guide asthma management." },
      { id: "d3", title: "Medical History Assessment", content: "Why your doctor asks about family and symptom history when diagnosing asthma." },
    ],
  },
  {
    id: "treatment",
    title: "Treatment & Management",
    category: "Treatment",
    articles: [
      { id: "t1", title: "Asthma Medications", content: "Overview of quick-relief inhalers, long-term control medications, and biologic therapies." },
      { id: "t2", title: "Asthma Action Plan", content: "How to create and follow a personalized asthma action plan for better control." },
      { id: "t3", title: "Trigger Avoidance", content: "Practical steps to avoid asthma triggers at home, work, and outdoors." },
      { id: "t4", title: "Working with Your Doctor", content: "The importance of regular check-ups and communication with your healthcare provider." },
    ],
  },
  {
    id: "prevention",
    title: "Prevention & Emergencies",
    category: "Prevention",
    articles: [
      { id: "p1", title: "Preventing Asthma Attacks", content: "Tips for reducing the risk of asthma attacks and what to do in an emergency." },
      { id: "p2", title: "Recognizing an Asthma Attack", content: "Warning signs of an asthma attack and when to seek emergency care." },
      { id: "p3", title: "Recovery After Severe Attacks", content: "How to recover and care for yourself after a severe asthma episode." },
    ],
  },
];

export default function Asthma() {
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
      <section className="bg-gradient-to-r  from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Asthma</h1>
          <p className="text-lg opacity-95 mb-6">
            Your hub for understanding and managing asthma
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
            Get weekly Asthma updates
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
              ✅ You’re subscribed successfully!
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
            to={`/asthma/article/${article.id}`}
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
