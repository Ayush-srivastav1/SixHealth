
import { useState, useRef } from "react";
import { Layout } from "@/components/layout";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DigestiveHealthArticle from "./DigestiveHealthArticle";

const tabs = [
  "Gut Health Basics",
  "Living with Crohn's Disease",
  "Living with Ulcerative Colitis",
  "Managing IBS",
  "Newsletter",
];

import { digestiveHealthData } from "@/data/DigestiveHealth";
import { findArticleBySlug, allArticles } from "@/data/allArticles";

function ArticleGrid() {
  const categoryKey = "digestive-health";
  const articles = (allArticles || []).filter((a) => {
    const cat = (a.categorySlug || a.category || "").toString().toLowerCase();
    return cat === categoryKey;
  });

  if (!articles.length) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Digestive Health Articles</h2>
        <p className="text-sm text-muted-foreground">No articles are available yet. Add items to `src/data/blogData.ts` with `categorySlug: "digestive-health"` to display them here.</p>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Digestive Health Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <Link
            key={article.id || article.slug}
            to={`/conditions/${article.categorySlug || article.category}/article/${article.slug}`}
            className="block bg-white border rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-0.5 p-5 mb-4"
          >
            <h3 className="font-semibold mb-2 leading-snug">{article.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.summary || article.excerpt || article.description}</p>
            <span className="text-primary text-sm font-semibold mt-3">Read more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function DigestiveHealth() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (category: string) => {
    const el = sectionRefs.current?.[category];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <PageLayout
        title="Digestive Health"
        subtitle="Your guide to gut health, IBD, IBS, and more"
        tabs={tabs}
        activeTab={null}
        onTabClick={scrollToSection}
        heroColor="#16a34a"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Card */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
              <section className="space-y-12">
                {/* Articles grid (sourced from blogData via allArticles) */}
                <div ref={(el) => (sectionRefs.current["Gut Health Basics"] = el)}>
                  <ArticleGrid />
                </div>

                {/* Anchors for legacy tab scrolling (content driven by ArticleGrid above) */}
                <div ref={(el) => (sectionRefs.current["Living with Crohn's Disease"] = el)} />
                <div ref={(el) => (sectionRefs.current["Living with Ulcerative Colitis"] = el)} />
                <div ref={(el) => (sectionRefs.current["Managing IBS"] = el)} />

                {/* Newsletter */}
                <div ref={(el) => (sectionRefs.current["Newsletter"] = el)}>
                  <section className="my-12 bg-purple-50 border border-purple-200 rounded-lg p-8 flex flex-col items-center text-center">
                    <h3 className="text-xl font-semibold mb-2 text-purple-700">Get Our Digestive Health Newsletter</h3>
                    <p className="mb-4 max-w-xl">Get twice weekly insights on ways to manage digestive conditions and boost your allover gut health.</p>
                    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center" onSubmit={e => {e.preventDefault(); setSubscribed(true);}}>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-2 rounded border border-purple-300" required />
                      <Button type="submit" className="bg-purple-700 text-white">SIGN UP</Button>
                    </form>
                    {subscribed && <p className="mt-2 text-green-600">Thank you for subscribing!</p>}
                    <p className="mt-2 text-xs text-muted-foreground">Your <a href="https://www.healthline.com/privacy-policy" className="underline">privacy</a> is important to us</p>
                  </section>
                </div>

                {/* Social Links & Footer */}
                <div className="mt-10 border-t pt-4 text-xs text-muted-foreground text-center">
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    </Layout>
  );
}
