
import { useState, useRef } from "react";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";


const tabs = [
  "Conditions",
  "Symptoms",
  "Diagnosis",
  "Treatment",
  "Self-Care",
  "Resources",
];

const sections = [
  {
    id: "conditions",
    title: "Common Mental Health Conditions",
    category: "Conditions",
    articles: [
      { id: "depression", title: "Depression", content: "Understanding major depressive disorder…" },
      { id: "anxiety", title: "Anxiety Disorders", content: "Generalized, social, and panic anxiety…" },
      { id: "bipolar", title: "Bipolar Disorder", content: "Mood disorder explained…" },
      { id: "schizophrenia", title: "Schizophrenia", content: "Psychotic disorder overview…" },
      { id: "personality", title: "Personality Disorders", content: "Types and characteristics…" },
      { id: "ptsd", title: "PTSD", content: "Post-traumatic stress disorder…" },
    ],
  },
  {
    id: "symptoms",
    title: "Recognizing Mental Health Symptoms",
    category: "Symptoms",
    articles: [
      { id: "depression-signs", title: "Signs of Depression", content: "When sadness becomes clinical depression…" },
      { id: "anxiety-symptoms", title: "Anxiety Symptoms", content: "Physical and emotional signs…" },
      { id: "stress", title: "Stress vs. Mental Illness", content: "Understanding the difference…" },
      { id: "behavioral", title: "Behavioral Changes", content: "When to be concerned…" },
      { id: "sleep", title: "Sleep and Mental Health", content: "The connection explained…" },
      { id: "substance", title: "Substance Use Red Flags", content: "Self-medication warning signs…" },
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis and Assessment",
    category: "Diagnosis",
    articles: [
      { id: "psy-eval", title: "Psychiatric Evaluation", content: "What happens during assessment…" },
      { id: "testing", title: "Psychological Testing", content: "Standardized mental health tests…" },
      { id: "diagnosis", title: "Getting a Mental Health Diagnosis", content: "Understanding the process…" },
      { id: "provider", title: "Finding the Right Provider", content: "Therapist, psychologist, psychiatrist…" },
      { id: "consult", title: "Initial Consultation", content: "What to expect and prepare for…" },
      { id: "privacy", title: "Privacy and Confidentiality", content: "Your rights in mental healthcare…" },
    ],
  },
  {
    id: "treatment",
    title: "Treatment and Therapy",
    category: "Treatment",
    articles: [
      { id: "psychotherapy", title: "Psychotherapy and Counseling", content: "Talk therapy benefits…" },
      { id: "cbt", title: "Cognitive Behavioral Therapy (CBT)", content: "Evidence-based therapy explained…" },
      { id: "medication", title: "Medication for Mental Health", content: "Antidepressants and other meds…" },
      { id: "mindfulness", title: "Mindfulness and Meditation", content: "Practical mental wellness…" },
      { id: "group", title: "Group Therapy", content: "Benefits of peer support…" },
      { id: "hospitalization", title: "Hospitalization", content: "When inpatient care is needed…" },
    ],
  },
  {
    id: "selfcare",
    title: "Self-Care and Wellness",
    category: "Self-Care",
    articles: [
      { id: "routine", title: "Building a Self-Care Routine", content: "Daily habits for mental health…" },
      { id: "exercise", title: "Exercise and Mental Health", content: "Physical activity benefits…" },
      { id: "nutrition", title: "Nutrition for Brain Health", content: "Foods that support mental wellness…" },
      { id: "sleep-hygiene", title: "Sleep Hygiene", content: "Better sleep for better mood…" },
      { id: "social", title: "Social Connection", content: "The importance of relationships…" },
      { id: "crisis", title: "Crisis Resources and Hotlines", content: "Getting help when you need it…" },
    ],
  },
  {
    id: "resources",
    title: "Living with Mental Health Conditions",
    category: "Resources",
    articles: [
      { id: "side-effects", title: "Managing Medication Side Effects", content: "Dealing with treatment challenges…" },
      { id: "work", title: "Work and Mental Health", content: "Disclosure and accommodations…" },
      { id: "relationships", title: "Relationships and Mental Illness", content: "Communication and support…" },
      { id: "stigma", title: "Stigma and Seeking Help", content: "Breaking mental health barriers…" },
      { id: "recovery", title: "Recovery and Resilience", content: "Building a fulfilling life…" },
      { id: "family", title: "Family Support", content: "How loved ones can help…" },
    ],
  },
];


export default function MentalHealth() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Conditions": useRef(null),
    "Symptoms": useRef(null),
    "Diagnosis": useRef(null),
    "Treatment": useRef(null),
    "Self-Care": useRef(null),
    "Resources": useRef(null),
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
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Mental Health</h1>
          <p className="text-lg opacity-95 mb-6">
            Comprehensive guide to mental health conditions, emotional wellbeing, and psychological disorders.
            Understanding mental health and breaking the stigma surrounding it.
          </p>

          <nav className="flex gap-3 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`px-4 py-2 rounded-full font-medium transition bg-purple-600 hover:bg-white hover:text-purple-700 text-white`}
              >
                {tab}
              </button>
            ))}
          </nav>
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
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-purple-700 mb-2">
            Get weekly Mental Health updates
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

        {/* FOOTER NOTE */}
        <div className="mt-10 border-t pt-4 text-xs text-muted-foreground">
          This content is for informational purposes only and does not replace
          professional medical advice. Consult with a healthcare provider for diagnosis and treatment.
        </div>
      </section>
    </Layout>
  );
}


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
          const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return (
            <Link
              key={article.id}
              to={`/mental-health/${slug}`}
              className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none"
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
