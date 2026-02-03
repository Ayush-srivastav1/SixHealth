import { useState } from "react";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

const tabs = [
  "Early Stage",
  "Late Stage",
  "Navigating Dialysis",
  "Other Treatment Options",
  "Mental Well-Being",
  "Diet & Lifestyle",
];

const tabSections = [
  {
    id: "early-stage",
    title: "Early Stage",
    articles: [
      ["Everything You Should Know About Stage 2 Kidney Disease", "Learn about stage 2 CKD, symptoms, and management."],
      ["What to Know About Stage 3 Chronic Kidney Disease (CKD)", "Symptoms, progression, and care for stage 3 CKD."],
      ["Is Your Kidney Disease Getting Worse?", "How to recognize worsening CKD and what to do."],
      ["7 Ways to Protect Your Heart Health When You Have Diabetes and Kidney Disease", "Tips for heart health with CKD and diabetes."],
    ],
  },
  {
    id: "late-stage",
    title: "Late Stage",
    articles: [
      ["What to Know About Stage 4 Kidney Disease", "Symptoms and management for stage 4 CKD."],
      ["What You Need to Know About End-Stage Kidney Disease (ESRD)", "Understanding ESRD and treatment options."],
      ["What Are the Complications of Chronic Kidney Disease?", "Common complications and how to manage them."],
      ["What to Know About Chronic Kidney Disease and Itching", "Why itching happens and how to find relief."],
    ],
  },
  {
    id: "dialysis",
    title: "Navigating Dialysis",
    articles: [
      ["What to Know About Dialysis: Procedure Types, Benefits, and Risks", "Overview of dialysis procedures and risks."],
      ["What You Need to Know About Dialysis Side Effects", "Common side effects and how to manage them."],
      ["Is Dialysis Covered By Medicare?", "Insurance coverage for dialysis treatments."],
      ["Choosing Between Hemodialysis and Peritoneal Dialysis", "Comparing dialysis options for CKD."],
    ],
  },
  {
    id: "other-treatment",
    title: "Other Treatment Options",
    articles: [
      ["Treatment Options for Kidney Failure", "Available treatments for kidney failure."],
      ["Is It Possible to Treat or Manage Kidney Failure Without Dialysis?", "Alternatives to dialysis for CKD."],
      ["My BIPOC Experience Finding Care for Chronic Kidney Disease", "Personal stories and care experiences."],
      ["How Successful Is the Kidney Transplant Procedure?", "Success rates and what to expect from transplants."],
    ],
  },
  {
    id: "mental-well-being",
    title: "Mental Well-Being",
    articles: [
      ["How Chronic Kidney Disease Can Impact Your Mental Health", "Mental health challenges and support for CKD."],
      ["Finding Support When Living with Chronic Kidney Disease", "Resources and communities for CKD support."],
      ["Ask the Advocate: How Can I Connect with Others with CKD?", "Connecting with others living with CKD."],
      ["The Link Between Diabetes, Depression, and Kidney Disease", "How diabetes and CKD affect mental health."],
    ],
  },
  {
    id: "diet-lifestyle",
    title: "Diet & Lifestyle",
    articles: [
      ["Managing Fatigue with Chronic Kidney Disease", "Tips for managing fatigue and boosting energy."],
      ["How Much Protein Should I Eat on a CKD Diet?", "Protein guidelines for CKD patients."],
      ["Kidney Disease and Weight Gain: How Are They Connected?", "Understanding weight changes with CKD."],
      ["17 Foods to Avoid With Kidney Disease", "Foods to limit or avoid for kidney health."],
    ],
  },
];

export default function ChronicKidneyDisease() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Layout>
      {/* Hero/Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Chronic Kidney Disease</h1>
          <p className="text-lg opacity-95 mb-6">
            Your hub for managing your chronic kidney disease
          </p>
          <nav className="flex gap-3 flex-wrap mt-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
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
              className={activeTab === section.title ? "" : "opacity-60 pointer-events-none select-none"}
            >
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.articles.map(([heading, desc]) => {
                  const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return (
                    <Link
                      key={heading}
                      to={`/chronic-kidney-disease/${slug}`}
                      className="bg-card border rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-0.5 no-underline flex flex-col"
                    >
                      <div className="p-5 flex flex-col h-full">
                        <h3 className="font-semibold mb-2 leading-snug">{heading}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                        <span className="text-purple-600 text-sm font-semibold mt-3">Read more →</span>
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
              Get our Chronic Kidney Disease newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Sign up to receive advice for managing your diet, the latest in treatments, and more.
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
            <h3 className="text-lg font-bold mb-4 text-purple-700">Featured Articles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:underline text-left">What to Know About Stage 3 Chronic Kidney Disease</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:underline text-left">What to Know About Dialysis: Procedure Types, Benefits, and Risks</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:underline text-left">Managing Fatigue with Chronic Kidney Disease</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      {/* Footer */}
      <footer className="mt-10 border-t pt-4 text-xs text-muted-foreground text-center">
        <div className="mb-2">
          This content is for informational purposes only and does not replace professional medical advice. Consult with a healthcare provider for diagnosis and treatment.
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-2">
          <a href="https://www.healthline.com/about" target="_blank" rel="noopener noreferrer">About Us</a>
          <a href="https://www.healthline.com/about/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
          <a href="https://www.healthline.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.healthline.com/advertising-policy" target="_blank" rel="noopener noreferrer">Advertising Policy</a>
          <a href="https://www.healthline.com/directory/topics" target="_blank" rel="noopener noreferrer">Health Topics</a>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-2">
          <a href="http://www.facebook.com/pages/Healthline/173263326992" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://x.com/healthline" target="_blank" rel="noopener noreferrer">TwitterX</a>
          <a href="http://pinterest.com/healthline/" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="http://www.instagram.com/healthline" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/channel/UC7snF15Idi7px6XujWe_h9A" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://flipboard.com/@healthline" target="_blank" rel="noopener noreferrer">Flipboard</a>
        </div>
        <div className="mb-2">© 2026 Healthline Media LLC. All rights reserved.</div>
      </footer>
    </Layout>
  );
}
