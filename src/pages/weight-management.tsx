
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { contentToString } from "@/lib/articleUtils";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";

const wmTabs = [
  "Nutrition",
  "Fitness",
  "Mental Well-Being",
  "Lifestyle/Adherence",
  "Treatment & Medications",
  "Apps, Programs, & Products",
];

const wmSections = [
  {
    id: "nutrition",
    title: "Nutrition",
    articles: [
      { id: "n1", title: "The Definitive Guide to Healthy Eating in Real Life", content: "How to eat healthy in real life.", href: "/articles/how-to-eat-healthy-guide" },
      { id: "n2", title: "How to Meal Prep for Weight Loss: Meal Ideas and Recipes", content: "Meal prep tips and recipes.", href: "/articles/meal-prep-for-weight-loss" },
      { id: "n3", title: "How Protein Can Help You Lose Weight Naturally", content: "Protein’s role in weight loss.", href: "/articles/how-protein-can-help-you-lose-weight" },
      { id: "n4", title: "16 of the Best Foods for Your Healthy Weight Journey", content: "Best foods for weight management.", href: "/articles/most-weight-loss-friendly-foods" },
    ],
  },
  {
    id: "fitness",
    title: "Fitness",
    articles: [
      { id: "f1", title: "The 8 Best Exercises for Weight Loss", content: "Top exercises for weight loss.", href: "/articles/best-exercise-for-weight-loss" },
      { id: "f2", title: "10 Exercises to Tone Every Inch of Your Body", content: "Full body toning exercises.", href: "/articles/10-best-exercises-everyday" },
      { id: "f3", title: "5 Fat-Burning Low Impact Exercises That Won’t Kill Your Knees", content: "Low impact fat-burning exercises.", href: "/articles/low-impact-exercises" },
      { id: "f4", title: "The 5 Best Personal Training Apps", content: "Best apps for personal training.", href: "/articles/personal-trainer-app" },
    ],
  },
  {
    id: "mental",
    title: "Mental Well-Being",
    articles: [
      { id: "m1", title: "7 Places to Find Support on Your Weight Loss Journey", content: "Support resources for weight loss.", href: "/articles/weight-loss-support" },
      { id: "m2", title: "Emotional Eating: What You Should Know", content: "Understanding emotional eating.", href: "/articles/emotional-eating" },
      { id: "m3", title: "Diet and Mental Health: Can What You Eat Affect How You Feel?", content: "Diet’s effect on mental health.", href: "/articles/diet-and-mental-health-can-what-you-eat-affect-how-you-feel" },
      { id: "m4", title: "Your FAQs Answered: Why Do I Eat When I’m Stressed?", content: "Why stress affects eating habits.", href: "/articles/why-do-i-eat-when-im-stressed" },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle/Adherence",
    articles: [
      { id: "l1", title: "Healthy Lifestyle Benefits: 5 Tips for Living Your Strongest…", content: "Tips for a healthy lifestyle.", href: "/articles/healthy-lifestyle-benefits" },
      { id: "l2", title: "12 Tips for Maintaining a Healthy Lifestyle", content: "How to maintain a healthy lifestyle.", href: "/articles/how-to-maintain-a-healthy-lifestyle" },
      { id: "l3", title: "How Do You Set Weight Loss Goals?", content: "Setting weight loss goals.", href: "/articles/setting-weight-loss-goals" },
      { id: "l4", title: "Counting Calories 101: How to Count Calories to Lose Weight", content: "How to count calories for weight loss.", href: "/articles/counting-calories-101" },
    ],
  },
  {
    id: "treatment",
    title: "Treatment & Medications",
    articles: [
      { id: "t1", title: "How to Talk with a Doctor About Losing Weight", content: "Talking to your doctor about weight loss.", href: "/articles/how-to-ask-your-doctor-for-weight-loss-pills" },
      { id: "t2", title: "A Quick Guide to GLP-1 Medications: Cost, Effectiveness, and More", content: "GLP-1 medications for weight loss.", href: "/articles/glp1-for-weight-loss" },
      { id: "t3", title: "How to Keep the Weight Off After Stopping Semaglutide", content: "Maintaining weight after medication.", href: "/articles/how-to-keep-weight-off-after-semaglutide" },
      { id: "t4", title: "Weight Loss Medications: A Dietitian Explains Everything You Need to…", content: "Dietitian’s guide to weight loss meds.", href: "/articles/weight-loss-medication" },
    ],
  },
  {
    id: "apps",
    title: "Apps, Programs, & Products",
    articles: [
      { id: "a1", title: "The 9 Best Diet Plans for Your Overall Health", content: "Best diet plans for health.", href: "/articles/best-diet-plans" },
      { id: "a2", title: "5 Best Weight Loss Programs to Try for 2026, According to Dietitians", content: "Top weight loss programs.", href: "/articles/best-weight-loss-programs" },
      { id: "a3", title: "8 Best Weight Loss Apps in 2025, According to Experts", content: "Best weight loss apps.", href: "/articles/best-weight-loss-apps" },
      { id: "a4", title: "Our Picks for the Best Healthy Meal Delivery Services for 2025", content: "Best meal delivery services.", href: "/articles/healthy-meal-delivery" },
    ],
  },
];

const featuredArticles = [
  { title: "The Definitive Guide to Healthy Eating in Real Life", href: "/articles/how-to-eat-healthy-guide" },
  { title: "The 8 Best Exercises for Weight Loss", href: "/articles/best-exercise-for-weight-loss" },
  { title: "7 Places to Find Support on Your Weight Loss Journey", href: "/articles/weight-loss-support" },
];

export default function WeightManagement() {
  const [activeTab, setActiveTab] = useState(wmTabs[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = wmTabs.reduce((acc, tab) => {
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
          <h1 className="text-4xl font-bold mb-2">Weight Management</h1>
          <p className="text-lg opacity-95 mb-6">
            Tips, tools, and support for sustainable weight management
          </p>
          <nav className="flex gap-3 flex-wrap mt-6">
            {wmTabs.map((tab) => (
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
        {}
        <main className="flex-1 space-y-12">
          {wmSections.map((section) => (
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
                    <p className="text-sm text-muted-foreground flex-1 mb-2">{contentToString((article as any).content)}</p>
                    <span className="text-purple-700 text-sm font-semibold mt-auto">
                      Read more →
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ))}

          {}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto mt-12">
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Get Our Weight Management Newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Receive expert advice, tips to build healthy habits, and the latest on nutrition and fitness delivered straight to your inbox.
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
        {}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-purple-700">Quick Links</h3>
            <ul className="space-y-2">
              {wmTabs.map((tab) => (
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
