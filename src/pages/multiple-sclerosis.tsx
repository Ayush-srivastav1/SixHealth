import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { contentToString } from "@/lib/articleUtils";

const msTabs = [
  "Newly Diagnosed",
  "Treatments & Medication",
  "Life with MS",
  "What to Eat",
  "Well-Being",
];

const msSectionsDetailed = [
  {
    id: "diagnosed",
    title: "Newly Diagnosed",
    category: "Newly Diagnosed",
      articles: [
      { id: "n1", title: "What Are the Main Types of Multiple Sclerosis?", content: "Learn about the main types of MS and how they differ.", href: "/multiple-sclerosis/article/main-types-of-multiple-sclerosis" },
      { id: "n2", title: "How to Talk to Others About Your MS Diagnosis", content: "Tips for discussing your diagnosis with friends and family.", href: "/multiple-sclerosis/article/how-to-talk-about-ms-diagnosis" },
      { id: "n3", title: "My Personal MS Diagnosis Story", content: "A personal perspective on being diagnosed with MS.", href: "/multiple-sclerosis/article/my-personal-ms-diagnosis-story" },
    ],
  },
  {
    id: "treatment",
    title: "Treatments & Medication",
    category: "Treatments & Medication",
      articles: [
      { id: "t1", title: "How to Choose the Best MS Treatment or Medication for Your Lifestyle", content: "Find the right treatment for your needs.", href: "/multiple-sclerosis/article/choose-best-ms-treatment" },
      { id: "t2", title: "Navigating Health Insurance with MS", content: "Tips for managing health insurance with MS.", href: "/multiple-sclerosis/article/navigating-health-insurance-with-ms" },
      { id: "t3", title: "Multiple Sclerosis (MS) Treatments", content: "Overview of available MS treatments.", href: "/multiple-sclerosis/article/multiple-sclerosis-treatments" },
      { id: "t4", title: "What’s the Difference Between Oral, Injectable, and Infusable MS Treatments?", content: "Compare different types of MS medications.", href: "/multiple-sclerosis/article/oral-injectable-infusable-ms-treatments" },
    ],
  },
  {
    id: "life",
    title: "Life with MS",
    category: "Life with MS",
      articles: [
      { id: "l1", title: "What to Expect from Life with MS", content: "Understand what life with MS can look like.", href: "/multiple-sclerosis/article/what-to-expect-from-life-with-ms" },
      { id: "l2", title: "6 Things I Wish I Knew When I Was Diagnosed with MS", content: "Advice for newly diagnosed individuals.", href: "/multiple-sclerosis/article/six-things-i-wish-i-knew-ms" },
      { id: "l3", title: "Financial Planning Tips for MS", content: "Financial tips for managing MS.", href: "/multiple-sclerosis/article/financial-planning-tips-for-ms" },
      { id: "l4", title: "8 Strategies to Manage Multiple Sclerosis", content: "Daily management strategies for MS.", href: "/multiple-sclerosis/article/eight-strategies-to-manage-ms" },
      { id: "l5", title: "Exercises and Activities to Try If You Have MS", content: "Recommended exercises for MS.", href: "/multiple-sclerosis/article/exercises-and-activities-for-ms" },
    ],
  },
  {
    id: "eat",
    title: "What to Eat",
    category: "What to Eat",
      articles: [
      { id: "e1", title: "Multiple Sclerosis and Diet: All You Need to Know", content: "Dietary guidance for MS.", href: "/multiple-sclerosis/article/multiple-sclerosis-and-diet" },
      { id: "e2", title: "7 Tips for Meal Prepping with Multiple Sclerosis", content: "Meal prep tips for MS.", href: "/multiple-sclerosis/article/meal-prepping-with-ms" },
      { id: "e3", title: "Wahls, Swank, Paleo, and Other Diets to Try If You Have MS", content: "Overview of popular MS diets.", href: "/multiple-sclerosis/article/popular-diets-for-ms" },
      { id: "e4", title: "Can the Ketogenic Diet Treat MS?", content: "Exploring keto for MS.", href: "/multiple-sclerosis/article/ketogenic-diet-and-ms" },
    ],
  },
  {
    id: "wellbeing",
    title: "Well-Being",
    category: "Well-Being",
      articles: [
      { id: "w1", title: "The Ultimate Travel Checklist for the Person with MS", content: "Travel tips for MS.", href: "/multiple-sclerosis/article/travel-checklist-for-ms" },
      { id: "w2", title: "Ask the Advocate: How to Get the Support You Need for MS", content: "Getting support for MS.", href: "/multiple-sclerosis/article/ask-the-advocate-ms-support" },
      { id: "w3", title: "The Benefits of a Service Dog When You Have MS", content: "How service dogs can help.", href: "/multiple-sclerosis/article/service-dog-benefits-ms" },
      { id: "w4", title: "7 Self-Care Tips for Multiple Sclerosis", content: "Self-care strategies for MS.", href: "/multiple-sclerosis/article/self-care-tips-for-ms" },
      { id: "w5", title: "Mental Health Spotlight: Coming to Terms with Your Multiple Sclerosis Diagnosis", content: "Mental health and MS.", href: "/multiple-sclerosis/article/mental-health-spotlight-ms" },
    ],
  },
];

const MSSection = ({ section, navigate }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.articles.map((article) => (
          <button
            key={article.id}
            className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none"
            onClick={() => article.href ? navigate(article.href) : null}
          >
            <img
              src="/placeholder.svg"
onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
              alt={article.title}
              className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-muted-foreground flex-1 mb-2">{contentToString(article.content)}</p>
            <span className="text-purple-700 text-sm font-semibold mt-auto">
              Read more →
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default function MultipleSclerosis() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = msTabs.reduce((acc, tab) => {
    acc[tab] = useRef(null);
    return acc;
  }, {});

  const navigate = useNavigate();


  const scrollToSection = (category) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Multiple Sclerosis</h1>
          <p className="text-lg opacity-95 mb-6">
            Tools, support, and clarity for your MS journey
          </p>
          <nav className="flex gap-3 flex-wrap">
            {msTabs.map((tab) => (
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

      <section className="max-w-7xl mx-auto px-5 py-10 space-y-12">
        {msSectionsDetailed.map((section) => (
          <div key={section.id} ref={sectionRefs[section.category]}>
            <MSSection section={section} navigate={navigate} />
          </div>
        ))}

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-purple-700 mb-2">
            Get our twice weekly Multiple Sclerosis email
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




