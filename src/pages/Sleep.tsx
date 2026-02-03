import { useState, useRef } from "react";
import { Layout } from "@/components/layout";
import { useNavigate } from "react-router-dom";
import { sleepArticles } from "@/data/sleepArticles";

function Section({ section }: {
  section: {
    title: string;
    articles: { id: string; title: string; slug?: string; excerpt?: string; content: string }[];
  };
}) {
  const navigate = useNavigate();
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map((article) => {
          const slug = article.slug || article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return (
            <button
              key={article.id}
              className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none"
              onClick={() => navigate(`/sleep/${slug}`)}
            >
              <img
                src="/health-placeholder.png"
                alt={article.title}
                className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
                loading="lazy"
              />
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 mb-2">
                {article.excerpt || article.content.slice(0, 120) + "..."}
              </p>
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

const tabs = [
  "Sleep Basics",
  "Sleep Disorders",
  "Symptoms & Warning Signs",
  "Diagnosis & Evaluation",
  "Treatment Options",
  "Sleep Hygiene Practices",
];

const sections = [
  {
    id: "basics",
    title: "Sleep Basics",
    category: "Sleep Basics",
    articles: sleepArticles,
  },
  {
    id: "disorders",
    title: "Sleep Disorders",
    category: "Sleep Disorders",
    articles: [
      { id: "d1", title: "Insomnia", content: "Difficulty falling or staying asleep…" },
      { id: "d2", title: "Sleep Apnea", content: "Breathing interruptions during sleep…" },
      { id: "d3", title: "Restless Leg Syndrome", content: "Uncomfortable sensations…" },
      { id: "d4", title: "Narcolepsy", content: "Excessive daytime sleepiness…" },
      { id: "d6", title: "Delayed Sleep Phase Syndrome", content: "Circadian rhythm disorder…" },
    ],
  },
  {
    id: "symptoms",
    title: "Symptoms & Warning Signs",
    category: "Symptoms & Warning Signs",
    articles: [
      { id: "s1", title: "Daytime Sleepiness", content: "Struggling to stay awake…" },
      { id: "s2", title: "Insomnia Symptoms", content: "Nighttime wakefulness…" },
      { id: "s3", title: "Sleep Apnea Signs", content: "Snoring and gasping…" },
      { id: "s4", title: "Mood and Behavior Changes", content: "Sleep deprivation effects…" },
      { id: "s5", title: "Cognitive Impairment", content: "Brain fog and poor memory…" },
      { id: "s6", title: "Physical Health Impacts", content: "Weight, immunity, and more…" },
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis & Evaluation",
    category: "Diagnosis & Evaluation",
    articles: [
      { id: "dg1", title: "Sleep Study (Polysomnography)", content: "Comprehensive sleep testing…" },
      { id: "dg2", title: "Home Sleep Testing", content: "Portable monitoring devices…" },
      { id: "dg3", title: "Sleep Diary", content: "Tracking your sleep patterns…" },
      { id: "dg4", title: "Medical History", content: "Risk factors and symptoms…" },
      { id: "dg5", title: "Questionnaires and Scales", content: "Standardized assessments…" },
    ],
  },
  {
    id: "hygiene",
    title: "Sleep Hygiene Practices",
    category: "Sleep Hygiene Practices",
    articles: [
      { id: "h1", title: "Bedroom Environment", content: "Temperature, light, and noise…" },
      { id: "h6", title: "Relaxation Techniques", content: "Wind-down routines…" },
    ],
  },
];

export default function Sleep() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = useRef({});

  const scrollToSection = (category) => {
    const ref = sectionRefs.current[category];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Sleep Health</h1>
          <p className="text-lg opacity-95 mb-6">
            Quality sleep is essential for physical health, mental wellbeing, and cognitive function. Understanding sleep disorders and improving sleep quality.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className="px-4 py-2 rounded-full font-medium transition bg-purple-600 hover:bg-white hover:text-purple-700 text-white"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* CONTENT: Show all sections */}
      <section className="max-w-7xl mx-auto px-5 py-10 space-y-12">
        {sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-purple-700 mb-2">
            Get weekly Sleep Health updates
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
