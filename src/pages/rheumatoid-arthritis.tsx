
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";

const raTabs = [
  "Newly Diagnosed",
  "Medication & Treatments",
  "Managing Flares",
  "Living Well",
  "Holistic Health",
  "Mental Well-Being",
];

const raSections = [
  {
    id: "diagnosed",
    title: "Newly Diagnosed",
    articles: [
      { id: "n1", title: "The 4 Stages and Progression of Rheumatoid Arthritis", content: "Learn about the stages and progression of RA.", href: "/articles/stages-and-progression" },
      { id: "n2", title: "Can You Get Disability for Rheumatoid Arthritis?", content: "Disability options for RA.", href: "/articles/disability-for-rheumatoid-arthritis" },
      { id: "n3", title: "How to Make the Most of Your Telehealth Visit for Psoriatic Arthritis", content: "Telehealth tips for arthritis care.", href: "/articles/telehealth-visit-psoriatic-arthritis" },
      { id: "n4", title: "Rheumatoid Arthritis and Heart Health", content: "How RA affects heart health.", href: "/articles/rheumatoid-arthritis-and-heart-health" },
    ],
  },
  {
    id: "medication",
    title: "Medication & Treatments",
    articles: [
      { id: "m1", title: "Treatment Options for Rheumatoid Arthritis", content: "Overview of RA treatments.", href: "/articles/rheumatoid-arthritis-treatment" },
      { id: "m2", title: "Understanding Your Options for Surgery for Rheumatoid Arthritis", content: "Surgical options for RA.", href: "/articles/rheumatoid-arthritis-surgery" },
      { id: "m3", title: "Advancing Rheumatoid Arthritis: Relieving Chronic Pain", content: "Managing chronic pain in RA.", href: "/articles/advancing-ra-relieving-chronic-pain" },
      { id: "m4", title: "Understanding the Dangers of Untreated RA", content: "Risks of untreated RA.", href: "/articles/dangers-of-untreated-ra" },
    ],
  },
  {
    id: "flares",
    title: "Managing Flares",
    articles: [
      { id: "f1", title: "Signs of Rheumatoid Arthritis Flares and How to Prevent Them", content: "Recognizing and preventing flares.", href: "/articles/rheumatoid-arthritis-exacerbations" },
      { id: "f2", title: "Foods to Avoid to Prevent Psoriatic Arthritis Flare-Ups", content: "Diet tips for flare prevention.", href: "/articles/foods-to-prevent-psoriatic-arthritis" },
      { id: "f3", title: "Treating RA Flares and Exacerbations", content: "How to treat RA flares.", href: "/articles/treating-flares-and-exacerbations" },
      { id: "f4", title: "Ways to Better Manage Rheumatoid Arthritis Pain During a Flare", content: "Pain management during flares.", href: "/articles/ways-to-better-manage-ra-pain-during-a-flare" },
    ],
  },
  {
    id: "living",
    title: "Living Well",
    articles: [
      { id: "l1", title: "7 Essential Everyday Exercises to Manage Rheumatoid Arthritis Pain", content: "Exercises for RA pain.", href: "/articles/8-essential-everyday-exercises-for-ra-pain" },
      { id: "l2", title: "Beating RA Chronic Fatigue", content: "Tips for managing fatigue.", href: "/articles/beating-ra-chronic-fatigue" },
      { id: "l3", title: "Assistive Devices for Rheumatoid Arthritis", content: "Devices to help with RA.", href: "/articles/assistive-devices-for-rheumatoid-arthritis" },
      { id: "l4", title: "12 Ways to Make Flying and Traveling with Rheumatoid Arthritis More Comfortable", content: "Travel tips for RA.", href: "/articles/long-flights-rheumatoid-arthritis" },
    ],
  },
  {
    id: "holistic",
    title: "Holistic Health",
    articles: [
      { id: "h1", title: "Can You Use Essential Oils to Relieve Arthritis Pain?", content: "Essential oils for arthritis.", href: "/articles/essential-oils-for-arthritis" },
      { id: "h2", title: "Occupational Therapy for Rheumatoid Arthritis: Can It Help?", content: "Occupational therapy for RA.", href: "/articles/occupational-therapy-for-ra" },
      { id: "h3", title: "Can Ayurvedic Treatment Ease Rheumatoid Arthritis?", content: "Ayurvedic options for RA.", href: "/articles/ayurvedic-treatment-for-rheumatoid-arthritis" },
      { id: "h4", title: "Can Acupuncture Help Treat My Rheumatoid Arthritis?", content: "Acupuncture for RA.", href: "/articles/acupuncture" },
    ],
  },
  {
    id: "mental",
    title: "Mental Well-Being",
    articles: [
      { id: "mw1", title: "Rheumatoid Arthritis and Mental Health: What You Need to Know", content: "Mental health and RA.", href: "/articles/mental-health-connection" },
      { id: "mw2", title: "6 Step Guide for Self-Care with Psoriatic Arthritis", content: "Self-care for arthritis.", href: "/articles/self-care-guide-psoriatic-arthritis" },
      { id: "mw3", title: "Understanding the Connection Between Psoriatic Arthritis and Depression", content: "Depression and arthritis.", href: "/articles/psa-and-depression" },
      { id: "mw4", title: "Can Positive Psychology Help with Managing Rheumatoid Arthritis?", content: "Positive psychology for RA.", href: "/articles/positive-psychology-rheumatoid-arthritis" },
    ],
  },
];

const featuredArticles = [
  { title: "The 4 Stages and Progression of Rheumatoid Arthritis", href: "/articles/stages-and-progression" },
  { title: "Treatment Options for Rheumatoid Arthritis", href: "/articles/rheumatoid-arthritis-treatment" },
  { title: "7 Essential Everyday Exercises to Manage Rheumatoid Arthritis Pain", href: "/articles/8-essential-everyday-exercises-for-ra-pain" },
];

export default function RheumatoidArthritis() {
  const [activeTab, setActiveTab] = useState(raTabs[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = raTabs.reduce((acc, tab) => {
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
          <h1 className="text-4xl font-bold mb-2">Rheumatoid Arthritis (RA)</h1>
          <p className="text-lg opacity-95 mb-6">
            Tools, support, and clarity for your RA journey
          </p>
          <nav className="flex gap-3 flex-wrap mt-6">
            {raTabs.map((tab) => (
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
          {raSections.map((section) => (
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
                      src="/health-placeholder.png"
                      alt={article.title}
                      className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
                      loading="lazy"
                    />
                    <h3 className="font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1 mb-2">{article.content}</p>
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
              Living with RA? Our newsletter can help.
            </h2>
            <p className="mb-4 text-gray-700">
              Get tips to avoid flareups, explore the latest in treatments, and read personal stories from others on this journey.
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
              {raTabs.map((tab) => (
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
