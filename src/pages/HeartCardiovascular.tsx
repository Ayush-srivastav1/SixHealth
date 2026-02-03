import { useState, useRef } from "react";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

const tabs = [
  "Understanding Heart Health",
  "Symptoms and Warning Signs",
  "Diagnosis and Testing",
  "Treatment Approaches",
  "Lifestyle and Prevention",
  "Common Risk Factors",
];

const tabSections = [
  {
    id: "understanding",
    title: "Understanding Heart Health",
    articles: [
      ["What is Heart Disease?", "Overview of heart disease, types, and how it affects the cardiovascular system."],
      ["How the Heart Works", "Learn about the anatomy and function of the heart and blood vessels."],
      ["Types of Cardiovascular Disease", "Explore coronary artery disease, heart failure, arrhythmias, and more."],
      ["Heart Disease in Women", "Unique risk factors and symptoms for women."],
      ["Heart Disease in Children", "Congenital and acquired heart conditions in kids."],
    ],
  },
  {
    id: "symptoms",
    title: "Symptoms and Warning Signs",
    articles: [
      ["Common Heart Symptoms", "Chest pain, shortness of breath, palpitations, and more."],
      ["Heart Attack Symptoms", "Recognizing the signs of a heart attack and what to do."],
      ["Stroke Symptoms", "FAST: Face, Arm, Speech, Time—know the signs of stroke."],
      ["Silent Symptoms", "Symptoms that are easy to miss but important to catch early."],
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis and Testing",
    articles: [
      ["Blood Pressure & Cholesterol", "Why these numbers matter and how they're measured."],
      ["EKG & Heart Imaging", "Tests to check heart rhythm and structure."],
      ["Stress Tests", "How doctors assess your heart under exertion."],
      ["Blood Tests for Heart Health", "Markers that help diagnose heart problems."],
    ],
  },
  {
    id: "treatment",
    title: "Treatment Approaches",
    articles: [
      ["Medications for Heart Disease", "Overview of common heart medications and how they work."],
      ["Lifestyle Changes", "Diet, exercise, and habits for a healthier heart."],
      ["Surgical Treatments", "Procedures like angioplasty, bypass surgery, and more."],
      ["Cardiac Rehabilitation", "Programs to help you recover and thrive after a heart event."],
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle and Prevention",
    articles: [
      ["Preventing Heart Disease", "Tips for reducing your risk and protecting your heart."],
      ["Healthy Eating for Your Heart", "Foods and diets that support cardiovascular health."],
      ["Exercise for Heart Health", "How physical activity benefits your heart."],
      ["Managing Stress", "The impact of stress on your heart and how to cope."],
    ],
  },
  {
    id: "riskfactors",
    title: "Common Risk Factors",
    articles: [
      ["High Blood Pressure", "Why hypertension is dangerous and how to control it."],
      ["High Cholesterol", "Understanding cholesterol and its impact on heart health."],
      ["Smoking & Tobacco", "How smoking damages your heart and blood vessels."],
      ["Diabetes & Heart Disease", "The link between diabetes and cardiovascular risk."],
      ["Obesity & Inactivity", "Why weight and exercise matter for your heart."],
      ["Family History", "Genetic risk and what you can do about it."],
    ],
  },
];

const featuredArticles = [
  { title: "What is Heart Disease?", href: "#" },
  { title: "Heart Attack Symptoms", href: "#" },
  { title: "Healthy Eating for Your Heart", href: "#" },
];

export default function HeartCardiovascular() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = tabs.reduce((acc, tab) => {
    acc[tab] = useRef(null);
    return acc;
  }, {});

  const scrollToSection = (tab) => {
    const ref = sectionRefs[tab];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* Hero/Header */}
      <section className="bg-gradient-to-r from-pink-600 to-red-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Heart & Cardiovascular Health</h1>
          <p className="text-lg opacity-95 mb-6">
            Your guide to understanding, preventing, and managing heart disease and cardiovascular conditions.
          </p>
          <nav className="flex gap-3 flex-wrap mt-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection(tab);
                }}
                className={`px-4 py-2 rounded-full font-medium transition ${activeTab === tab ? "bg-white text-red-700" : "bg-red-600 text-white hover:bg-white hover:text-red-700"}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <main className="flex-1 space-y-12">
          {tabSections.map((section) => (
            <section
              key={section.id}
              ref={sectionRefs[section.title]}
              className={activeTab === section.title ? "" : "opacity-60 pointer-events-none select-none"}
            >
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.articles.map(([heading, desc]) => {
                  const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return (
                    <Link
                      key={heading}
                      to={`/heart-cardiovascular/${slug}`}
                      className="bg-card border rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-0.5 no-underline flex flex-col"
                    >
                      <div className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold mb-2 leading-snug">{heading}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                        <span className="text-red-600 text-sm font-semibold mt-3">Read more →</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Newsletter Signup */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-xl mx-auto mt-12">
            <h2 className="text-xl font-bold text-red-700 mb-2">
              Get our Heart Health newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Sign up to receive tips for managing your heart health, prevention, and more.
            </p>
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
                  className="border border-red-300 rounded px-4 py-2"
                />
                <button className="bg-red-700 text-white rounded py-2 font-semibold">
                  Sign Up
                </button>
                <span className="text-xs text-gray-500 mt-1">
                  Your <a href="/privacy-policy" className="underline">privacy</a> is important to us
                </span>
              </form>
            ) : (
              <p className="text-green-700 font-medium">
                ✅ You’re subscribed successfully!
              </p>
            )}
          </div>
        </main>
        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-red-700">Featured Articles</h3>
            <ul className="space-y-2">
              {featuredArticles.map((fa) => (
                <li key={fa.title}>
                  <button
                    className="text-gray-800 hover:underline text-left"
                    onClick={() => {}}
                  >
                    {fa.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
