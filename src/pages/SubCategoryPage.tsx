import { useParams, Link, useLocation, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ArticleCard, NewsletterSignup } from "@/components/articles";
import { allArticles, findArticleBySlug } from "@/data/allArticles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import static psoriasis pages so topic routes can render their full content
import PlaquePsoriasis from "./psoriasis/PlaquePsoriasis";
import GuttatePsoriasis from "./psoriasis/GuttatePsoriasis";
import InversePsoriasis from "./psoriasis/InversePsoriasis";
import PustularPsoriasis from "./psoriasis/PustularPsoriasis";
import ErythrodermicPsoriasis from "./psoriasis/ErythrodermicPsoriasis";
import NailPsoriasis from "./psoriasis/NailPsoriasis";
import JointPainPsoriaticArthritis from "./psoriasis/JointPainPsoriaticArthritis";

// COPD static pages
import AdaptiveExercises from "./COPD/AdaptiveExercises";
import AntiInflammatoryDiet from "./COPD/AntiInflammatoryDiet";
import AsthmaAttack from "./COPD/AsthmaAttack";
import BreathingExercises from "./COPD/BreathingExercises";
import ColdTurkey from "./COPD/ColdTurkey";
import COPDExercises from "./COPD/COPDExercises";
import DisabilityBenefits from "./COPD/DisabilityBenefits";
import DrugsList from "./COPD/DrugsList";
import Facts from "./COPD/Facts";
import FlareUp from "./COPD/FlareUp";
import FluRisk from "./COPD/FluRisk";
import Vaccines from "./COPD/Vaccines";
import WhatIsCOPD from "./COPD/WhatIsCOPD";
import LungTransplants from "./COPD/LungTransplants";
import Myths from "./COPD/Myths";
import NewTreatments from "./COPD/NewTreatments";
import TreatmentOptions from "./COPD/TreatmentOptions";
import NutritionGuide from "./COPD/NutritionGuide";
import ProgressAfterQuitting from "./COPD/ProgressAfterQuitting";
import Progression from "./COPD/Progression";
import ProtectLungs from "./COPD/ProtectLungs";
import QuittingSmoking from "./COPD/QuittingSmoking";
import QuitTobacco from "./COPD/QuitTobacco";
import Travel from "./COPD/Travel";

// Helper to format title from slug
const formatTitle = (slug: string) => {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const SubCategoryPage = () => {
  const { category: paramCategory, subcategory: paramSubcategory } = useParams<{ category: string; subcategory: string }>();
  const location = useLocation();
  
  let category = paramCategory;
  let subcategory = paramSubcategory;

  // Fallback to parsing pathname if params are missing (e.g. static routes)
  if (!category || !subcategory) {
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments.length >= 2) {
      category = segments[0];
      subcategory = segments[1];
    }
  }

  // Format the title
  const title = subcategory ? formatTitle(subcategory) : "Topic";
  const parentCategory = category ? formatTitle(category) : "Category";

  // If the URL's subcategory segment matches an article slug or an alias, redirect
  // to the canonical article route so the Article page handles rendering.
  if (subcategory) {
    // Direct match via findArticleBySlug (checks aliases)
    const direct = findArticleBySlug(subcategory);
    if (direct) {
      const cat = (direct.categorySlug || direct.category || "").toString().toLowerCase().replace(/\s+/g, "-");
      const target = `/${cat}/article/${direct.slug}`;
      return <Navigate to={target} replace />;
    }

    // Fallback: keep the earlier fuzzy matching (normalization) for edge cases
    const normalize = (raw?: string) => {
      if (!raw) return "";
      return raw
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9\- ]+/g, "")
        .replace(/\b(with|the|and|a|an|for|of|in|on|to|my|experience)\b/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    };

    const sNorm = normalize(subcategory);
    const match = allArticles.find((a) => {
      const slug = (a.slug || "").toString();
      const slugNorm = normalize(slug);
      if (!slugNorm) return false;
      return slugNorm === sNorm || slugNorm.includes(sNorm) || sNorm.includes(slugNorm);
    });

    if (match) {
      const cat = (match.categorySlug || match.category || "").toString().toLowerCase().replace(/\s+/g, "-");
      const target = `/${cat}/article/${match.slug}`;
      return <Navigate to={target} replace />;
    }
  }

  // If a static page component exists for this psoriasis topic, render it directly.
  // This preserves the existing static page content (many pages live under src/pages/psoriasis)
  if (category === "psoriasis" && subcategory) {
    const staticMap: Record<string, any> = {
      "plaque-psoriasis": PlaquePsoriasis,
      "guttate-psoriasis": GuttatePsoriasis,
      "inverse-psoriasis": InversePsoriasis,
      "pustular-psoriasis": PustularPsoriasis,
      "erythrodermic-psoriasis": ErythrodermicPsoriasis,
      "nail-psoriasis": NailPsoriasis,
      "joint-pain-psoriatic-arthritis": JointPainPsoriaticArthritis,
    };

    const PageComponent = staticMap[subcategory];
    if (PageComponent) {
      return <PageComponent />;
    }
  }

  // If a static page exists for COPD topics, render it directly.
  if (category && category.toLowerCase() === "copd" && subcategory) {
    const staticMap: Record<string, any> = {
      "adaptive-exercises": AdaptiveExercises,
      "anti-inflammatory-diet": AntiInflammatoryDiet,
      "asthma-attack": AsthmaAttack,
      "breathing-exercises": BreathingExercises,
      "cold-turkey": ColdTurkey,
      "copd-exercises": COPDExercises,
      "disability-benefits": DisabilityBenefits,
      "drugs-list": DrugsList,
      "facts": Facts,
      "flare-up": FlareUp,
      "flu-risk": FluRisk,
      "vaccines": Vaccines,
      "what-is-copd": WhatIsCOPD,
      "lung-transplants": LungTransplants,
      "myths": Myths,
      "new-treatments": NewTreatments,
      "treatment-options": TreatmentOptions,
      "nutrition-guide": NutritionGuide,
      "progress-after-quitting": ProgressAfterQuitting,
      "progression": Progression,
      "protect-lungs": ProtectLungs,
      "quitting-smoking": QuittingSmoking,
      "quit-tobacco": QuitTobacco,
      "travel": Travel,
    };

    const PageComponent = staticMap[subcategory];
    if (PageComponent) {
      return <PageComponent />;
    }
  }

  // Filter articles that might match this subcategory (simple keyword matching for now)
  // In a real app, articles would have a 'subcategory' field. To support topic pages
  // like `/psoriasis/plaque-psoriasis` we also match by slug/title when the article
  // category isn't an exact path match (many psoriasis entries live under 'conditions').
  const subKey = subcategory ? subcategory.replace(/-/g, " ").toLowerCase() : "";

  const relatedArticles = allArticles.filter((article) => {
    const titleMatch = (article.title || "").toLowerCase().includes(subKey);
    const excerptMatch = (article.excerpt || "").toLowerCase().includes(subKey);
    const slugMatch = article.slug === subcategory;

    const artCatSlug = (article.categorySlug || article.category || "")
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-");

    // Primary match: same category (by slug) and content match
    if (artCatSlug === category && (titleMatch || excerptMatch || slugMatch)) return true;

    // Secondary: allow matching by slug/title for known topic pages even when the article's
    // category is different. This keeps topic pages useful while preferring same-category matches.
    if (titleMatch || excerptMatch || slugMatch) return true;

    return false;
  });

  // If related articles exist, show them. Otherwise, show up to 4 articles from the same category.
  const displayArticles = relatedArticles.length > 0
    ? // Deduplicate and limit to 8
      Array.from(new Map(relatedArticles.map(a => [a.id, a])).values()).slice(0, 8)
    : allArticles.filter((a) => {
        const artCatSlug = (a.categorySlug || a.category || "")
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-");
        return artCatSlug === category;
      }).slice(0, 4);

  // Dev debug: log matching info to the browser console to help diagnose empty-results cases
  try {
     
    console.debug("SubCategoryPage match info", {
      category,
      subcategory,
      relatedCount: relatedArticles.length,
      displayCount: displayArticles.length,
      relatedSlugs: relatedArticles.map((a) => a.slug),
    });
  } catch (e) {
    // ignore
  }

  return (
    <Layout>
      {/* Header */}
      <section className="border-b bg-card py-8 lg:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${category}`} className="hover:text-foreground">{parentCategory}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{title}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <Link to={`/${category}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {parentCategory}
              </Button>
            </Link>
          </div>

          <h1 className="mb-2 text-3xl font-bold lg:text-4xl">{title}</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore our latest articles, guides, and expert advice on {title.toLowerCase()}.
            Everything you need to know about this topic.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Latest in {title}</h2>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {displayArticles.length > 0 ? (
                  displayArticles.map((article) => {
                    const catSlug = (article.categorySlug || article.category || "").toString().toLowerCase().replace(/\s+/g, "-");
                    const canonical = catSlug ? `/${catSlug}/article/${article.slug}` : undefined;
                    return <ArticleCard key={article.id} {...article} forceUrl={canonical} />;
                  })
                ) : (
                  <div className="col-span-2 py-12 text-center text-muted-foreground bg-muted/20 rounded-lg">
                    <p>No articles found specifically for this topic yet.</p>
                    <p className="text-sm mt-2">Check back soon for new content!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <NewsletterSignup />
              
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 font-semibold">Related Topics</h3>
                <div className="space-y-3">
                  <Link
                    to={`/${category}`}
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
                  >
                    <span className="text-sm font-medium">
                      View all {parentCategory}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubCategoryPage;
