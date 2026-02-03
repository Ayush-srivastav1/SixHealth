
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";

const migraineTabs = [
  "About Migraine",
  "Symptoms",
  "Diagnosis",
  "Treatment",
  "Prevention",
  "Living Well",
];

const migraineSectionsDetailed = [
  {
    id: "about",
    title: "Understanding Migraine",
    category: "About Migraine",
    articles: [
      { id: "m1", title: "Migraine with Aura", content: "Visual and sensory warning signs…" },
      { id: "m2", title: "Migraine without Aura", content: "Most common type…" },
      { id: "m3", title: "Chronic Migraine", content: "Migraines 15+ days per month…" },
      { id: "m4", title: "Status Migrainosus", content: "Prolonged severe attacks…" },
      { id: "m5", title: "Migraine Pathophysiology", content: "What happens in your brain…" },
      { id: "m6", title: "Genetics and Migraine", content: "Family history factors…" },
    ],
  },
  {
    id: "symptoms",
    title: "Migraine Symptoms",
    category: "Symptoms",
    articles: [
      { id: "s1", title: "Headache Pain", content: "Severity and location…" },
      { id: "s2", title: "Aura Symptoms", content: "Visual and sensory phenomena…" },
      { id: "s3", title: "Associated Symptoms", content: "Nausea, vomiting, sensitivity…" },
      { id: "s4", title: "Prodrome and Postdrome", content: "Before and after attack phases…" },
      { id: "s5", title: "Migraine Variants", content: "Hemiplegic and basilar migraine…" },
      { id: "s6", title: "Duration and Patterns", content: "Attack length and frequency…" },
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis and Assessment",
    category: "Diagnosis",
    articles: [
      { id: "d1", title: "Medical History", content: "Pattern and trigger documentation…" },
      { id: "d2", title: "Neurological Examination", content: "Physical and neurological exam…" },
      { id: "d3", title: "Brain Imaging", content: "When CT or MRI is recommended…" },
      { id: "d4", title: "Migraine Diary", content: "Tracking patterns and triggers…" },
      { id: "d5", title: "Specialist Consultation", content: "When to see a neurologist…" },
      { id: "d6", title: "Ruling Out Other Conditions", content: "Differential diagnosis…" },
    ],
  },
  {
    id: "treatment",
    title: "Treatment and Management",
    category: "Treatment",
    articles: [
      { id: "t1", title: "Acute Migraine Medications", content: "Triptans and other abortive drugs…" },
      { id: "t2", title: "Over-the-Counter Options", content: "NSAIDs and other remedies…" },
      { id: "t3", title: "Preventive Medications", content: "Daily treatment options…" },
      { id: "t4", title: "Botox for Chronic Migraine", content: "Nerve blocking therapy…" },
      { id: "t5", title: "Neuromodulation Devices", content: "Non-drug approaches…" },
      { id: "t6", title: "Non-Pharmacological Treatments", content: "Lifestyle and behavioral strategies…" },
    ],
  },
  {
    id: "prevention",
    title: "Migraine Triggers and Prevention",
    category: "Prevention",
    articles: [
      { id: "p1", title: "Common Food Triggers", content: "Aged cheeses, alcohol, additives…" },
      { id: "p2", title: "Hormonal Triggers", content: "Menstrual migraine…" },
      { id: "p3", title: "Environmental Triggers", content: "Weather, lights, sounds…" },
      { id: "p4", title: "Stress and Sleep", content: "Behavioral triggers…" },
      { id: "p5", title: "Caffeine", content: "Dependency and withdrawal…" },
      { id: "p6", title: "Medication Overuse", content: "Rebound headache…" },
    ],
  },
  {
    id: "living",
    title: "Living with Migraine",
    category: "Living Well",
    articles: [
      { id: "l1", title: "Work and Productivity", content: "Managing migraines at work…" },
      { id: "l2", title: "Relationships and Social Life", content: "Communication with others…" },
      { id: "l3", title: "Emergency Planning", content: "Creating an action plan…" },
      { id: "l4", title: "Travel with Migraine", content: "Managing while traveling…" },
      { id: "l5", title: "Mental Health", content: "Depression and anxiety…" },
      { id: "l6", title: "Support Groups and Resources", content: "Finding help and community…" },
    ],
  },
];

export default function Migraine() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = migraineTabs.reduce((acc, tab) => {
    acc[tab] = useRef(null);
    return acc;
  }, {});

  const scrollToSection = (category) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Migraine</h1>
          <p className="text-lg opacity-95 mb-6">
            A neurological condition characterized by intense, debilitating headaches often accompanied by other symptoms. Understanding migraine triggers, patterns, and effective treatment options.
          </p>
          <nav className="flex gap-3 flex-wrap">
            {migraineTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className="px-4 py-2 rounded-full font-medium transition bg-purple-600 hover:bg-white hover:text-purple-700 text-white"
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* CONTENT: Show all sections */}
      <section className="max-w-7xl mx-auto px-5 py-10 space-y-12">
        {migraineSectionsDetailed.map((section) => (
          <div key={section.id} ref={sectionRefs[section.category]}>
            <MigraineSection section={section} />
          </div>
        ))}

        {/* NEWSLETTER */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-purple-700 mb-2">
            Get weekly Migraine updates
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
                className="border border-purple-300 rounded px-4 py-2"
              />
              <button className="bg-purple-700 text-white rounded py-2 font-semibold">
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

function MigraineSection({ section }: {
  section: {
    title: string;
    articles: { id: string; title: string; content: string }[];
  };
}) {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map((article) => {
          const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return (
            <button
              key={article.id}
              className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none"
              onClick={() => navigate(`/migraine/${slug}`)}
            >
              <img
                src="/health-placeholder.png"
                alt={article.title}
                className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
                loading="lazy"
              />
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <span className="text-purple-700 text-sm font-semibold mt-auto">
                Read more →
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
