
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { contentToString } from "@/lib/articleUtils";

const parkinsonTabs = [
  "Basics",
  "Symptom Management",
  "Medication & Treatment",
  "Finding Care & Support",
  "Living Well",
];

const parkinsonSections = [
  {
    id: "basics",
    title: "Basics",
    articles: [
      { id: "b1", title: "What to Know When Parkinson's Worsens Suddenly", content: "Learn about sudden changes in Parkinson's symptoms.", href: "/article/parkinsons-sudden-deterioration" },
      { id: "b2", title: "What to Expect in End Stage Parkinson's Disease", content: "Understand the late stages of Parkinson's.", href: "/article/end-stage-parkinsons" },
      { id: "b3", title: "The Similarities and Differences Between Alzheimer's and Parkinson's", content: "Compare Alzheimer's and Parkinson's.", href: "/article/difference-between-alzheimers-and-parkinsons" },
      { id: "b4", title: "Common Triggers of Parkinson's Disease", content: "What can worsen Parkinson's symptoms?", href: "/article/what-worsens-parkinsons-disease" },
    ],
  },
  {
    id: "symptom",
    title: "Symptom Management",
    articles: [
      { id: "s1", title: "Speech and Swallowing Characteristics of Parkinson's Disease", content: "How Parkinson's affects speech and swallowing.", href: "/article/speech-characteristics-of-parkinsons-disease" },
      { id: "s2", title: "Small Handwriting and Other Early Signs of Parkinson's", content: "Recognize early signs of Parkinson's.", href: "/article/parkinsons-warning-signs" },
      { id: "s3", title: "Shaking Hands: What Are My Treatment Options?", content: "Treatments for hand tremors.", href: "/article/treating-shaking-hands" },
      { id: "s4", title: "How Parkinson's Affects Your Sleep", content: "Sleep issues in Parkinson's.", href: "/article/parkinsons-insomnia" },
    ],
  },
  {
    id: "medication",
    title: "Medication & Treatment",
    articles: [
      { id: "m1", title: "Levodopa: How Parkinson's Most Important Medication Works", content: "Understand how levodopa works in treating Parkinson's.", href: "/article/levodopa-how-it-works" },
      { id: "m2", title: "Dopamine Agonists and Other Parkinson's Medications", content: "Explore dopamine agonists and additional treatment options.", href: "/article/dopamine-agonists-parkinsons" },
      { id: "m3", title: "Managing Parkinson's Medication Side Effects", content: "Strategies to manage nausea, dyskinesias, and other side effects.", href: "/article/parkinsons-medication-side-effects" },
      { id: "m4", title: "Over-the-Counter Supplements and Drug Interactions in Parkinson's", content: "Learn about supplements, drug interactions, and dietary considerations.", href: "/article/parkinsons-supplements-interactions" },
    ],
  },
  {
    id: "care",
    title: "Finding Care & Support",
    articles: [
      { id: "c1", title: "Finding a Neurologist Who Specializes in Parkinson's Disease", content: "How to find a qualified Parkinson's specialist.", href: "/article/finding-parkinsons-specialist" },
      { id: "c2", title: "Support Groups and Resources for Parkinson's Disease Patients", content: "Discover support groups and educational resources.", href: "/article/parkinsons-support-groups-resources" },
      { id: "c3", title: "Navigating Insurance Coverage and Disability Benefits with Parkinson's", content: "Understand insurance, disability benefits, and financial assistance.", href: "/article/parkinsons-navigating-insurance-disability" },
      { id: "c4", title: "Building Your Parkinson's Disease Care Team", content: "Learn about your multidisciplinary care team.", href: "/article/building-parkinson-care-team" },
    ],
  },
  {
    id: "living",
    title: "Living Well",
    articles: [
      { id: "l1", title: "Exercise and Physical Activity with Parkinson's Disease", content: "Improving symptoms and quality of life through exercise.", href: "/article/parkinsons-exercise-physical-activity" },
      { id: "l2", title: "Nutrition, Diet, and Eating Well with Parkinson's Disease", content: "Dietary strategies and nutritional support.", href: "/article/parkinsons-nutrition-diet" },
      { id: "l3", title: "Cognitive Health and Brain Wellness in Parkinson's Disease", content: "Supporting cognitive function and brain health.", href: "/article/parkinsons-cognitive-health-brain" },
      { id: "l4", title: "Safety and Fall Prevention in Parkinson's Disease", content: "Preventing falls and maintaining safety.", href: "/article/parkinsons-safety-fall-prevention" },
    ],
  },
];

const featuredArticles = [
  { title: "What to Know When Parkinson's Worsens Suddenly", href: "/article/parkinsons-sudden-deterioration" },
  { title: "What to Expect in End Stage Parkinson's Disease", href: "/article/end-stage-parkinsons" },
  { title: "The Similarities and Differences Between Alzheimer's and Parkinson's", href: "/article/difference-between-alzheimers-and-parkinsons" },
];

export default function Parkinson() {
  const [activeTab, setActiveTab] = useState(parkinsonTabs[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = parkinsonTabs.reduce((acc, tab) => {
    acc[tab] = useRef(null);
    return acc;
  }, {});
  const navigate = useNavigate();

  const scrollToSection = (tab) => {
    const ref = sectionRefs[tab];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Parkinson’s Disease</h1>
          <p className="text-lg text-white font-medium mb-6">
            Tools, support, and clarity for your journey with Parkinson's Disease
          </p>
          <nav className="flex gap-3 flex-wrap mt-6">
            {parkinsonTabs.map((tab) => (
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
          {parkinsonSections.map((section) => (
            <section
              key={section.id}
              ref={sectionRefs[section.title]}
              className={activeTab === section.title ? "" : "opacity-60 pointer-events-none select-none"}
            >
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.articles.map((article) => (
                  <button
                    key={article.id}
                    className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none"
                    onClick={() => article.href ? navigate(article.href) : null}
                  >
                    <img
                      src="/placeholder.svg"
                      loading="lazy"
                      onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
                      alt={article.title}
                      className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
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
          ))}

          {/* Newsletter Signup */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto mt-12">
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Get our Parkinson's Disease newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Sign up to receive tips for managing your symptoms, finding care and support, and more.
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
              {parkinsonTabs.map((tab) => (
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

