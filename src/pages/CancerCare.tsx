import { useState, useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Layout } from "@/components/layout";
import { CardHub } from "@/components/alzimersCardHub";
import { useNavigate } from "react-router-dom";
import { default as allArticles } from "@/data/allArticles";

const tabs = [
  "Chemotherapy",
  "Treatment",
  "Caregiver Support",
  "What to Eat",
  "Well-Being",
  "Tests & Screenings",
];

// Build sections dynamically from blogData articles with cancer-care categorySlug
// This eliminates hardcoded duplication and ensures consistency with blogData.ts
const buildSections = () => {
  const cancerArticles = allArticles.filter(
    (a) => (a.categorySlug || a.category || "").toString().toLowerCase() === "cancer-care"
  );

  const sectionMap: Record<string, { title: string; articles: typeof cancerArticles }> = {
    basics: { title: "Cancer Care Basics", articles: [] },
    chemo: { title: "Navigating Chemotherapy", articles: [] },
    care: { title: "Resources for Caregivers", articles: [] },
    nutrition: { title: "Nutrition & Well-Being", articles: [] },
    eating: { title: "What to Eat During Cancer Treatment", articles: [] },
    tests: { title: "Tests & Screenings", articles: [] },
  };

  // Categorize articles by title patterns (matching hub structure)
  cancerArticles.forEach((article) => {
    const title = (article.title || "").toLowerCase();

    if (
      title.includes("cancer:") || title.includes("types") || 
      title.includes("full-body scan") || title.includes("wi-fi") ||
      title.includes("oncologist")
    ) {
      sectionMap.basics.articles.push(article);
    } 
    else if (
      title.includes("chemo") || title.includes("chemotherapy") ||
      title.includes("what days")
    ) {
      sectionMap.chemo.articles.push(article);
    }
    else if (
      title.includes("caregiver") || title.includes("family") ||
      title.includes("what to say") || title.includes("comfort gifts") ||
      title.includes("care package")
    ) {
      sectionMap.care.articles.push(article);
    }
    else if (
      title.includes("financial") || title.includes("alkaline") ||
      title.includes("scanxiety") || title.includes("emotional")
    ) {
      sectionMap.nutrition.articles.push(article);
    }
    else if (
      title.includes("immune") || title.includes("nausea") ||
      title.includes("high-calorie") || title.includes("anti-inflammatory")
    ) {
      sectionMap.eating.articles.push(article);
    }
    else if (
      title.includes("screening") || title.includes("biopsy") ||
      title.includes("blood tests") || title.includes("imaging")
    ) {
      sectionMap.tests.articles.push(article);
    }
  });

  // Convert to array format for CardHub
  return Object.entries(sectionMap).map(([id, section]) => ({
    id,
    title: section.title,
    articles: section.articles.map((a) => ({
      id: a.slug,
      title: a.title,
      slug: a.slug,
      description: a.description,
      content: a.description,
    })),
  }));
};

export const sections = buildSections();

export default function CancerCare() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Chemotherapy": useRef(null),
    "Treatment": useRef(null),
    "Caregiver Support": useRef(null),
    "What to Eat": useRef(null),
    "Well-Being": useRef(null),
    "Tests & Screenings": useRef(null),
  };

  // Helper to scroll to section
  const scrollToSection = (category: string) => {
    const ref = sectionRefs[category as keyof typeof sectionRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <PageLayout
        title="Cancer Care"
        subtitle="Your hub for navigating cancer"
        tabs={tabs}
        activeTab={null}
        onTabClick={scrollToSection}
        heroColor="#9333ea"
      >
        <section className="space-y-12">
          <CardHub
            sections={sections}
            onArticleClick={(id: string, title: string) => {
              // Find the article by slug (id is the slug from buildSections)
              const article = allArticles.find((a) => a.slug === id);
              if (article) {
                const category = (article.categorySlug || article.category || "cancer-care")
                  .toString()
                  .toLowerCase()
                  .replace(/\s+/g, "-");
                navigate(`/${category}/article/${article.slug}`);
              }
            }}
          />

          {/* NEWSLETTER */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Get weekly Cancer Care updates
            </h2>

            {!subscribed ? (
              <>
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
                    placeholder="Enter your email"
                    className="border border-purple-300 rounded px-4 py-2"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-purple-700 text-white rounded px-4 py-2 hover:bg-purple-800"
                  >
                    Subscribe
                  </button>
                </form>
                <div className="mt-10 border-t pt-4 text-xs text-muted-foreground">
                  This content is for informational purposes only and does not replace
                  professional medical advice. Consult with a healthcare provider for diagnosis and treatment.
                </div>
              </>
            ) : (
              <div className="text-green-700 font-semibold mt-4">Thank you for subscribing!</div>
            )}
          </div>
        </section>
      </PageLayout>
    </Layout>
  );
}
