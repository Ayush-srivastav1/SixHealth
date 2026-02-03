import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";

const tabs = [
  "Understanding",
  "Techniques",
  "Lifestyle",
  "Professional",
];

export const sections = [
  {
    id: "understanding",
    title: "Understanding Stress",
    category: "Understanding",
    articles: [
      { id: "u1", title: "What is Stress?", content: "Learn about the body's stress response and how acute vs chronic stress affect health." },
      { id: "u2", title: "Types of Stress", content: "Eustress vs distress, acute vs chronic stress, and their different impacts." },
      { id: "u3", title: "Stress & Health", content: "How chronic stress affects physical and mental health, immunity, and disease risk." },
      { id: "u4", title: "Stress Signals", content: "Recognizing physical, emotional, and behavioral signs of excessive stress." },
      { id: "u5", title: "Personal Stress Profile", content: "Identifying your unique stress triggers and patterns." },
    ],
  },
  {
    id: "techniques",
    title: "Stress Management Techniques",
    category: "Techniques",
    articles: [
      { id: "t1", title: "Breathing Exercises", content: "Simple breathing techniques like 4-7-8 breathing and box breathing for immediate relief." },
      { id: "t2", title: "Progressive Muscle Relaxation", content: "Systematic tension and release of muscle groups to reduce physical stress." },
      { id: "t3", title: "Mindfulness Meditation", content: "Present-moment awareness practices to calm the mind and reduce anxiety." },
      { id: "t4", title: "Visualization", content: "Guided imagery and positive visualization for stress reduction." },
      { id: "t5", title: "Grounding Techniques", content: "5-4-3-2-1 sensory grounding to bring yourself back to the present moment." },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle Approaches",
    category: "Lifestyle",
    articles: [
      { id: "l1", title: "Exercise & Movement", content: "How physical activity reduces stress hormones and improves mood." },
      { id: "l2", title: "Sleep & Recovery", content: "The critical role of quality sleep in stress management and resilience." },
      { id: "l3", title: "Nutrition for Stress", content: "Foods that support adrenal health and stabilize blood sugar." },
      { id: "l4", title: "Time Management", content: "Prioritization, delegation, and boundary-setting to reduce overwhelm." },
      { id: "l5", title: "Social Support", content: "Building and maintaining relationships that provide stress relief and perspective." },
    ],
  },
  {
    id: "professional",
    title: "Professional Support",
    category: "Professional",
    articles: [
      { id: "p1", title: "When to Seek Help", content: "Signs that stress has become unmanageable and professional help is needed." },
      { id: "p2", title: "Therapy Options", content: "Different types of therapy including CBT, mindfulness-based, and stress management counseling." },
      { id: "p3", title: "Stress-Related Disorders", content: "Understanding anxiety disorders, depression, and PTSD related to chronic stress." },
      { id: "p4", title: "Workplace Support", content: "Employee assistance programs and workplace stress management resources." },
      { id: "p5", title: "Medication Options", content: "When and how medications might be used as part of stress management." },
    ],
  },
];

export default function StressManagement() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Understanding": useRef(null),
    "Techniques": useRef(null),
    "Lifestyle": useRef(null),
    "Professional": useRef(null),
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
      <section className="bg-gradient-to-r from-orange-700 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Stress Management</h1>
          <p className="text-lg opacity-95 mb-6">
            Master stress with proven techniques and lifestyle strategies
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
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-orange-700 mb-2">
            Get weekly Stress Management updates
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
                className="border border-orange-300 rounded px-4 py-2"
              />
              <button className="bg-orange-700 text-white rounded py-2 font-semibold">
                Sign Up
              </button>
            </form>
          ) : (
            <p className="text-orange-700 font-medium">
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
            to={`/stress-management/article/${article.id}`}
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
