import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

const tabs = [
  "Understanding Psoriasis",
  "Symptoms and Appearance",
  "Diagnosis and Understanding",
  "Treatment Approaches",
  "Daily Management and Lifestyle",
  "Common Triggers",
];

const tabSections = [
  {
    id: "understanding",
    title: "Understanding Psoriasis",
    articles: [
      ["Plaque Psoriasis", "Most common type with thick scales…"],
      ["Guttate Psoriasis", "Small drop-like lesions…"],
      ["Inverse Psoriasis", "Psoriasis in skin folds…"],
      ["Pustular Psoriasis", "Pus-filled bumps…"],
      ["Erythrodermic Psoriasis", "Widespread severe form…"],
      ["Nail Psoriasis", "Effects on nails…"],
    ],
  },
  {
    id: "symptoms",
    title: "Symptoms and Appearance",
    articles: [
      ["Plaques and Scaling", "What psoriasis looks like…"],
      ["Itching and Burning", "Managing discomfort…"],
      ["Joint Pain (Psoriatic Arthritis)", "When joints are affected…"],
      ["Nail Changes", "Pitting and discoloration…"],
      ["Systemic Symptoms", "Fever and malaise…"],
      ["Emotional Impact", "Psychological effects of psoriasis…"],
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis and Understanding",
    articles: [
      ["Clinical Diagnosis", "How dermatologists diagnose psoriasis…"],
      ["Skin Biopsy", "When samples are needed…"],
      ["Family History and Genetics", "Hereditary factors…"],
      ["Psoriatic Arthritis Screening", "Joint involvement evaluation…"],
      ["Severity Assessment", "Measuring psoriasis extent…"],
      ["Comorbidity Screening", "Associated health conditions…"],
    ],
  },
  {
    id: "treatment",
    title: "Treatment Approaches",
    articles: [
      ["Topical Treatments", "Creams and ointments…"],
      ["Phototherapy", "Light therapy benefits…"],
      ["Systemic Medications", "Oral and injectable drugs…"],
      ["Biologic Therapies", "Newer immune-targeted treatments…"],
      ["Combination Therapy", "Multiple treatment strategies…"],
      ["Managing Side Effects", "Treatment tolerability…"],
    ],
  },
  {
    id: "lifestyle",
    title: "Daily Management and Lifestyle",
    articles: [
      ["Skincare Routine", "Gentle cleansing and moisturizing…"],
      ["Clothing and Comfort", "Fabric choices that reduce irritation…"],
      ["Stress Reduction Techniques", "Managing stress-related flare-ups…"],
      ["Diet and Nutrition", "Foods that may help or trigger…"],
      ["Exercise and Physical Activity", "Safe movement options…"],
      ["Social and Mental Health", "Coping with appearance concerns…"],
    ],
  },
  {
    id: "triggers",
    title: "Common Triggers",
    articles: [
      ["Infections and Strep Throat", "Post-streptococcal psoriasis…"],
      ["Stress and Emotional Factors", "Psychological triggers…"],
      ["Weather and Climate", "Seasonal flare-ups…"],
      ["Medications", "Drugs that worsen psoriasis…"],
      ["Alcohol and Smoking", "Lifestyle factors…"],
      ["Skin Injuries (Koebner Effect)", "Trauma-induced lesions…"],
    ],
  },
];

const featuredArticles = [
  { title: "What Is Psoriasis?", href: "#" },
  { title: "Psoriasis vs. Eczema: Key Differences", href: "#" },
  { title: "Best Diets for Psoriasis", href: "#" },
];

export { tabSections };

export default function Psoriasis() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navigate = useNavigate();

  const scrollToSection = (tab) => {
    const ref = sectionRefs[tab];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* Hero/Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Psoriasis</h1>
          <p className="text-lg opacity-95 mb-6">
            Chronic autoimmune skin condition causing rapid skin cell turnover and scaly patches. Understanding psoriasis types, triggers, and comprehensive treatment approaches.
          </p>
          <nav className="flex gap-3 flex-wrap mt-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection(tab);
                }}
                className={`px-4 py-2 rounded-full font-medium transition ${activeTab === tab ? "bg-white text-purple-700" : "bg-purple-600 text-white hover:bg-white hover:text-purple-700"}`}
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
              ref={(el) => (sectionRefs.current[section.title] = el)}
            >
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.articles.map(([heading, desc]) => {
                  // Slug for static page route
                  const slug = heading.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
                  let to = `/psoriasis/article/${slug}`;
                  // For the first section (types), link to static pages
                  if (section.id === 'understanding') {
                    to = `/psoriasis/${slug}`;
                  }
                  // For the second section (symptoms), link to static pages
                  if (section.id === 'symptoms') {
                    to = `/psoriasis/${slug}`;
                  }
                  // For the third section (diagnosis), link to static pages
                  if (section.id === 'diagnosis') {
                    to = `/psoriasis/${slug}`;
                  }
                  // For the fourth section (treatment), link to static pages
                  if (section.id === 'treatment') {
                    to = `/psoriasis/${slug}`;
                  }
                  // For the fifth section (lifestyle), link to static pages
                  if (section.id === 'lifestyle') {
                    to = `/psoriasis/${slug}`;
                  }
                  // For the sixth section (triggers), link to static pages
                  if (section.id === 'triggers') {
                    to = `/psoriasis/${slug}`;
                  }
                  return (
                    <Link
                      key={heading}
                      className="bg-card border rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-0.5 no-underline flex flex-col"
                      to={to}
                      state={{ title: heading }}
                    >
                      <div className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold mb-2 leading-snug">{heading}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                        <span className="text-primary text-sm font-semibold mt-3">Read more →</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Newsletter Signup */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto mt-12">
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Get our Psoriasis newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Sign up to receive tips for managing your symptoms, treatment options, and more.
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
                  className="border border-purple-300 rounded px-4 py-2"
                />
                <button className="bg-purple-700 text-white rounded py-2 font-semibold">
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
            <h3 className="text-lg font-bold mb-4 text-purple-700">Quick Links</h3>
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    className="text-purple-700 hover:underline text-left"
                    onClick={() => {
                      setActiveTab(tab);
                      scrollToSection(tab);
                    }}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-purple-700">Featured Articles</h3>
            <ul className="space-y-2">
              {featuredArticles.map((fa) => (
                <li key={fa.title}>
                  <button
                    className="text-gray-800 hover:underline text-left"
                    onClick={() => navigate(fa.href)}
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

