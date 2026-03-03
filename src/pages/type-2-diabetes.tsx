
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { contentToString } from "@/lib/articleUtils";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";

const diabetesTabs = [
  "Featured",
  "What to Eat",
  "Medications & Treatment",
  "Diabetes Essentials",
  "Prediabetes",
  "Weight Management",
  "Coping",
  "Devices & Tech",
  "Related Articles",
];

const diabetesSections = [
  {
    id: "featured",
    title: "Featured",
    articles: [
      { id: "f1", title: "How to Improve Your Blood Sugar Mojo in Just 1 Week", content: "Tips to improve blood sugar quickly.", href: "/articles/how-to-improve-blood-sugar-1-week" },
      { id: "f2", title: "How To Choose a Continuous Glucose Monitor for Diabetes", content: "Choosing the right CGM.", href: "/articles/continuous-glucose-monitors" },
      { id: "f3", title: "Tips to Help You Afford Your Diabetes Medication and Supplies", content: "Affording diabetes care.", href: "/articles/afford-diabetes-medication" },
      { id: "f4", title: "Finding the Best Type 2 Diabetes Treatment: Factors to Consider", content: "Choosing the best treatment.", href: "/articles/treatment-factors-ask-expert" },
      { id: "f5", title: "How Type 2 Diabetes Can Also Impact Your Mental Health", content: "Mental health and diabetes.", href: "/articles/how-type-2-diabetes-can-also-impact-your-mental-health" },
      { id: "f6", title: "Diabetes Plan (Diabetes 101)", content: "Basics of diabetes management.", href: "/articles/newly-diagnosed-diabetes" },
    ],
  },
  {
    id: "eat",
    title: "What to Eat",
    articles: [
      { id: "e1", title: "Foods That May Affect Your Blood Sugar With Prediabetes or Diabetes", content: "Foods to avoid with diabetes.", href: "/articles/foods-to-avoid-with-diabetes" },
      { id: "e2", title: "Reviews of the Top Diabetes Cookbooks", content: "Best cookbooks for diabetes.", href: "/articles/diabetes-cookbook-reviews" },
      { id: "e3", title: "6 Easy Diabetes-Friendly Recipes to Make at Home", content: "Easy recipes for diabetes.", href: "/articles/easy-diabetes-recipes" },
      { id: "e4", title: "The Best Snacks for Type 2 Diabetes", content: "Best snacks for diabetes.", href: "/articles/type-2-diabetes-snack-guide" },
      { id: "e5", title: "Vitamin C Supplements for Type 2 Diabetes", content: "Vitamin C and diabetes.", href: "/articles/type-2-diabetes-and-vitamin-c" },
    ],
  },
  {
    id: "medications",
    title: "Medications & Treatment",
    articles: [
      { id: "m1", title: "A Complete List of Diabetes Medications", content: "All diabetes medications listed.", href: "/articles/medications-list" },
      { id: "m2", title: "11 Things to Ask Your Doctor After You Start a New Diabetes Treatment", content: "Questions for your doctor.", href: "/articles/things-to-ask-your-doctor-after-you-start-a-new-diabetes-treatment" },
      { id: "m3", title: "Can You Buy Generic Insulin for Managing Diabetes?", content: "Generic insulin options.", href: "/articles/generic-insulin" },
    ],
  },
  {
    id: "essentials",
    title: "Diabetes Essentials",
    articles: [
      { id: "d1", title: "Understanding Type 2 Diabetes", content: "What is type 2 diabetes?", href: "/articles/understanding-type-2-diabetes" },
      { id: "d2", title: "Most Important Diet Changes for Anyone with Type 2 Diabetes", content: "Key diet changes for diabetes.", href: "/articles/diet-changes" },
      { id: "d3", title: "12 Tips to Prevent Blood Sugar Spikes", content: "Preventing blood sugar spikes.", href: "/articles/blood-sugar-spikes" },
      { id: "d4", title: "How Is Type 2 Diabetes Treated?", content: "Treatment for newly diagnosed.", href: "/articles/treatment-newly-diagnosed" },
    ],
  },
  {
    id: "prediabetes",
    title: "Prediabetes",
    articles: [
      { id: "p1", title: "Prediabetes Can’t Stop These Two Sisters From Training for Marathons", content: "Inspiring prediabetes story.", href: "/articles/prediabetes-sisters-marathon-training" },
      { id: "p2", title: "What Is Prediabetes?", content: "What is prediabetes?", href: "/articles/what-is-prediabetes" },
      { id: "p3", title: "How Long Does It Take to Reverse Prediabetes?", content: "Reversing prediabetes.", href: "/articles/how-long-does-it-take-to-reverse-prediabetes" },
      { id: "p4", title: "7 Tips for What To Eat with Prediabetes", content: "Diet tips for prediabetes.", href: "/articles/prediabetes-diet" },
      { id: "p5", title: "8 Lifestyle Tips to Help Reverse Prediabetes Naturally", content: "Lifestyle tips for prediabetes.", href: "/articles/how-to-reverse-prediabetes-naturally" },
    ],
  },
  {
    id: "weight",
    title: "Weight Management",
    articles: [
      { id: "w1", title: "What to Know About Diabetes and Weight Loss", content: "Weight loss and diabetes.", href: "/articles/diabetes-weight-loss" },
      { id: "w2", title: "The Best Diabetes-Friendly Diets for Weight Loss", content: "Best diets for diabetes weight loss.", href: "/articles/diabetic-friendly-diets-to-lose-weight" },
      { id: "w3", title: "Starting, Adjusting, and Sustaining a Diabetes-Friendly Diet", content: "How to stick to a diabetes diet.", href: "/articles/diet-plan-for-diabetes" },
    ],
  },
  {
    id: "coping",
    title: "Coping",
    articles: [
      { id: "c1", title: "Type 2 Diabetes Numbers Have You Down? Here’s How to Cope", content: "Coping with diabetes numbers.", href: "/articles/t2d-numbers-have-you-down-heres-how-to-cope" },
      { id: "c2", title: "5 Things I Would Tell Someone Recently Diagnosed with Type 2 Diabetes", content: "Advice for the newly diagnosed.", href: "/articles/what-i-would-tell-someone-recently-diagnosed-with-t2d" },
    ],
  },
  {
    id: "devices",
    title: "Devices & Tech",
    articles: [
      { id: "dev1", title: "Choosing the Best Devices and Tech to Help You Manage Type 2 Diabetes", content: "Best tech for diabetes.", href: "/articles/best-devices-and-tech" },
      { id: "dev2", title: "5 Best At-Home Diabetes Tests", content: "Best at-home diabetes tests.", href: "/articles/home-diabetes-test" },
      { id: "dev3", title: "The 6 Best Glucose Meters and Continuous Glucose Monitors", content: "Best glucose monitors.", href: "/articles/best-glucose-monitors" },
      { id: "dev4", title: "How Do Insulin Pumps Work?", content: "How insulin pumps work.", href: "/articles/how-does-an-insulin-pump-work" },
      { id: "dev5", title: "The Best Diabetes Apps", content: "Best diabetes apps.", href: "/articles/top-iphone-android-apps" },
    ],
  },
  {
    id: "related",
    title: "Related Articles",
    articles: [
      { id: "r1", title: "The Year’s Biggest Medical Advancements in Diabetes Treatment", content: "Recent diabetes breakthroughs.", href: "/articles/the-years-biggest-medical-advancements-in-diabetes-treatment" },
      { id: "r2", title: "Jardiance Interactions: Alcohol, Medications, and Others", content: "Jardiance interactions.", href: "/articles/jardiance-interactions" },
      { id: "r3", title: "Florida Can Now Import Prescription Drugs from Canada, Will That Lower Prices?", content: "Drug import news.", href: "/articles/florida-can-now-import-prescription-drugs-from-canada" },
      { id: "r4", title: "Your Guide to Monitoring Blood Sugar", content: "Guide to blood sugar monitoring.", href: "/articles/blood-glucose-monitoring" },
      { id: "r5", title: "People Who Go Into Type 2 Diabetes Remission See 40% Drop in Heart Disease Risk", content: "Remission and heart disease risk.", href: "/articles/people-who-go-into-type-2-diabetes-remission-see-40-drop-in-heart-disease-risk" },
    ],
  },
];

const featuredArticles = [
  { title: "How to Improve Your Blood Sugar Mojo in Just 1 Week", href: "/articles/how-to-improve-blood-sugar-1-week" },
  { title: "How To Choose a Continuous Glucose Monitor for Diabetes", href: "/articles/continuous-glucose-monitors" },
  { title: "Tips to Help You Afford Your Diabetes Medication and Supplies", href: "/articles/afford-diabetes-medication" },
];

export default function Type2Diabetes() {
  const [activeTab, setActiveTab] = useState(diabetesTabs[0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = diabetesTabs.reduce((acc, tab) => {
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
          <h1 className="text-4xl font-bold mb-2">Type 2 Diabetes</h1>
          <p className="text-lg opacity-95 mb-6">
            Your hub for diabetes management, insights, and support.
          </p>
          <nav className="flex gap-3 flex-wrap mt-6">
            {diabetesTabs.map((tab) => (
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
          {diabetesSections.map((section) => (
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
onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
                      alt={article.title}
                      className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
                      loading="lazy"
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

          {/* Newsletter Signup */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto mt-12">
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Get Our Twice-Weekly Type 2 Diabetes Newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Join over 400K subscribers in receiving nutrition advice, tips on weight management, and the latest on condition breakthroughs.
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
              {diabetesTabs.map((tab) => (
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



