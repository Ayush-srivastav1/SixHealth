import { useState, useRef } from "react";
import { Layout } from "@/components/layout";
import { useNavigate } from "react-router-dom";
import { allArticles } from "@/data/allArticles";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";
const sleepArticles = allArticles.filter((a) => (a.slug || "").toString().toLowerCase().startsWith("sleep-") || a.source === "sleep");

function Section({ section }: {
  section: {
    title: string;
    articles: { id: string; title: string; slug?: string; excerpt?: string; content: string | any[] }[];
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
              <SafeImage
                src={imageLibrary.sleep}
                alt={article.title}
                fallbackTopic="sleep"
                componentName="SleepCard"
                className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
              />
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 mb-2">
                {article.excerpt || ((typeof article.content === 'string') ? article.content.slice(0, 120) : (Array.isArray(article.content) ? article.content.map((c:any) => c.text || '').join(' ').slice(0,120) : '') ) + "..."}
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
    articles: sleepArticles.filter(a => 
      ["why-we-sleep", "sleep-duration-recommendations", "circadian-rhythms", "sleep-and-health", "sleep-across-lifespan"].includes(a.slug)
    ),
  },
  {
    id: "disorders",
    title: "Sleep Disorders",
    category: "Sleep Disorders",
    articles: sleepArticles.filter(a => 
      ["insomnia", "sleep-apnea", "restless-leg-syndrome", "narcolepsy", "delayed-sleep-phase"].includes(a.slug)
    ),
  },
  {
    id: "symptoms",
    title: "Symptoms & Warning Signs",
    category: "Symptoms & Warning Signs",
    articles: sleepArticles.filter(a => 
      ["daytime-sleepiness", "insomnia-symptoms", "sleep-apnea-signs", "mood-behavior-changes", "cognitive-impairment", "physical-health-impacts"].includes(a.slug)
    ),
  },
  {
    id: "diagnosis",
    title: "Diagnosis & Evaluation",
    category: "Diagnosis & Evaluation",
    articles: sleepArticles.filter(a => 
      ["polysomnography", "home-sleep-testing", "sleep-diary", "medical-history-assessment", "sleep-questionnaires"].includes(a.slug)
    ),
  },
  {
    id: "treatment",
    title: "Treatment Options",
    category: "Treatment Options",
    articles: sleepArticles.filter(a => 
      ["sleep-medications", "cognitive-behavioral-therapy-sleep", "sleep-restriction-therapy", "light-therapy-sleep", "bedroom-environment", "relaxation-techniques"].includes(a.slug)
    ),
  },
  {
    id: "hygiene",
    title: "Sleep Hygiene Practices",
    category: "Sleep Hygiene Practices",
    articles: sleepArticles.filter(a => 
      ["sleep-hygiene-practices", "sleep-environment-optimization"].includes(a.slug)
    ),
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
      {}
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
      {}
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

