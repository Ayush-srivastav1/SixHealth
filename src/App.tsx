import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { findArticleBySlug } from "@/data/allArticles";

import Index from "@/pages/Index";
import ArticlePage from "@/pages/ArticlePage";
import ProgramPage from "@/pages/ProgramPage";
import BlogList from "@/pages/BlogList";
import ArticlesHub from "@/pages/ArticlesHub";
import SearchPage from "@/pages/SearchPage";
import CategoryHub from "@/pages/CategoryHub";
import SubCategoryPage from "@/pages/SubCategoryPage";
import NotFound from "@/pages/NotFound";

import SponsoredTopics from "@/pages/SponsoredTopics";
import WellnessPage from "@/pages/Wellness";
import Abortion from "@/pages/abortion";
import ReviewsPage from "@/pages/Reviews";
import BlackHealth from "@/pages/black-health";
import Cbd from "@/pages/cbd";
import Fitness from "@/pages/fitness";
import HealthyBeauty from "@/pages/healthy-beauty";
import HearingHealth from "@/pages/hearing-health";
import Lgbtqia from "@/pages/lgbtqia";
import Nutrition from "@/pages/nutrition";
import Parenthood from "@/pages/parenthood";
import SexualHealth from "@/pages/sexual-health";
import Skincare from "@/pages/skincare";
import VitaminsSupplements from "@/pages/vitamins-supplements";
import LessonsPage from "@/pages/Lessons";
import NewslettersPage from "@/pages/Newsletters";
import HealthNewsPage from "@/pages/HealthNews";

import Asthma from "@/pages/Asthma";
import AsthmaArticlePage from "@/pages/AsthmaArticlePage";
import AsthmaIndexPage from "@/pages/asthma/AsthmaIndexPage";
import AsthmaSectionPage from "@/pages/asthma/SectionPage";
import AsthmaSubSectionPage from "@/pages/asthma/SubSectionPage";

import BreastCancer from "@/pages/BreastCancer";
import BreastCancerArticleDetail from "@/pages/BreastCancerArticleDetail";
import CancerCare from "@/pages/CancerCare";
import ArticleDetail from "@/pages/ArticleDetail";
import Chemotherapy from "@/pages/Chemotherapy";
import COPD from "@/pages/COPD";
import DigestiveHealth from "@/pages/DigestiveHealth";
import DigestiveHealthArticle from "@/pages/DigestiveHealthArticle";

import EyeHealth from "@/pages/EyeHealth";
import EyeHealthCategoryPage from "@/pages/EyeHealthCategoryPage";
import EyeHealthArticlePage from "@/pages/eyehealth/ArticlePage";
import EyeHealthSectionPage from "@/pages/eyehealth/SectionPage";
import EyeHealthSubSectionPage from "@/pages/eyehealth/SubSectionPage";

import AlzheimersDisease from "@/pages/alzheimers-disease";
import ChronicKidneyDisease from "@/pages/chronic-kidney-disease";
import InflammatoryBowelDisease from "@/pages/InflammatoryBowelDisease";
import Menopause from "@/pages/menopause";
import MultipleSclerosis from "@/pages/multiple-sclerosis";
import Parkinson from "@/pages/parkinson";
import RheumatoidArthritis from "@/pages/rheumatoid-arthritis";
import Type2Diabetes from "@/pages/type-2-diabetes";
import WeightManagement from "@/pages/weight-management";
import HeartCardiovascular from "@/pages/HeartCardiovascular";
import MentalHealth from "@/pages/MentalHealth";
import Migraine from "@/pages/Migraine";
import Psoriasis from "@/pages/Psoriasis";
import Pneumonia from "@/pages/Pneumonia";
import RespiratoryHealth from "@/pages/RespiratoryHealth";
import SelfCare from "@/pages/SelfCare";
import StressManagement from "@/pages/StressManagement";
import Sleep from "@/pages/Sleep";

import ToolPage from "@/pages/ToolPage";
import AuthorPage from "@/pages/AuthorPage";
import MyExperienceMelanoma from "@/pages/MyExperienceMelanoma";

import ToolsIndex from "@/pages/tools/ToolsIndex";
import BmiCalculator from "@/pages/tools/BmiCalculator";

import HealthlineArticle from "@/pages/HealthlineArticle";
import HealthHub from "@/pages/HealthHub";

import BlogHub from "@/pages/BlogHub";
import BlogPostDetail from "@/pages/BlogPostDetail";
import FeaturedPage from "@/pages/FeaturedPage";

import PageTemplate from "./pages/PageTemplate";
import pageConfig from "./pages/pageConfig";

// Dynamic page component
const DynamicPage = () => {
  const { pageName } = useParams();
  const page = pageConfig[pageName as keyof typeof pageConfig];
  if (!page) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  }
  return <PageTemplate {...page} />;
};

function App() {
  // Intercept clicks on legacy article links like '/cancer-care/some-slug'
  // and redirect to '/cancer-care/article/some-slug' when an article match exists.
  const LinkInterceptor: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const onClick = (e: MouseEvent) => {
        // Only handle left-clicks without modifier keys
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        let target = e.target as HTMLElement | null;
        while (target && target.tagName !== "A") target = target.parentElement;
        if (!target) return;
        const a = target as HTMLAnchorElement;
        const href = a.getAttribute("href") || a.getAttribute("to") || a.getAttribute("data-href") || a.href;
        if (!href || !href.startsWith("/")) return;

        // Match /category/slug (two segments) but not /category/article/...
        const parts = href.split("/").filter(Boolean);
        if (parts.length === 2) {
          const [category, slug] = parts;
          // First try a category-scoped lookup (preserves behavior for /category/slug)
          let found = findArticleBySlug(slug, category);
          // If not found, try a slug-only lookup to catch legacy links like /blog/:slug
          if (!found) {
            found = findArticleBySlug(slug);
          }
          if (found) {
            e.preventDefault();
            const cat = (found.categorySlug || found.category || "").toString().toLowerCase().replace(/\s+/g, "-");
            navigate(`/${cat}/article/${found.slug}`);
          }
        }
      };

      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }, [navigate]);
    return null;
  };
  return (
    <Router>
      <LinkInterceptor />
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/articles" element={<ArticlesHub />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        {/* Support featured dropdown direct links like /featured/:slug */}
        <Route path="/featured/:slug" element={<FeaturedPage />} />
        {/* Support sponsored topic links like /program/:slug */}
        <Route path="/program/:slug" element={<ProgramPage />} />
        {/* Support canonical per-category article URLs, e.g. /cancer-care/article/:slug */}
        <Route path="/:category/article/:slug" element={<ArticlePage />} />
        {/* Support two-segment category paths like /conditions/chronic-kidney-disease/article/:slug */}
        <Route path="/:category/:subcategory/article/:slug" element={<ArticlePage />} />
        {/* legacy handling for specific categories is removed to restore default behavior */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/author/:authorId" element={<AuthorPage />} />
        <Route path="/tool/:toolId" element={<ToolPage />} />

        {/* Condition Pages */}
        <Route path="/asthma" element={<Asthma />} />
        <Route path="/conditions/asthma" element={<Asthma />} />

        {/* Asthma Subpages */}
        <Route path="/asthma/article/:slug" element={<AsthmaArticlePage />} />
        <Route path="/asthma/section/:sectionId" element={<AsthmaSectionPage />} />
        <Route path="/asthma/section/:sectionId/:subSectionId" element={<AsthmaSubSectionPage />} />
        <Route path="/asthma-hub" element={<AsthmaIndexPage />} />

        {/* Eye Health Subpages */}
        <Route path="/eye-health/article/:articleId" element={<EyeHealthArticlePage />} />
        <Route path="/eye-health/section/:sectionId" element={<EyeHealthSectionPage />} />
        <Route path="/eye-health/section/:sectionId/:subSectionId" element={<EyeHealthSubSectionPage />} />

        <Route path="/breast-cancer" element={<BreastCancer />} />
        <Route path="/breast-cancer/article/:slug" element={<BreastCancerArticleDetail />} />
        <Route path="/conditions/cancer-care" element={<CancerCare />} />
        <Route path="/conditions/cancer-care/my-experience-melanoma" element={<MyExperienceMelanoma />} />
        <Route path="/conditions/cancer-care/article/:id" element={<ArticleDetail />} />
        <Route path="/chemotherapy" element={<Chemotherapy />} />
        <Route path="/conditions/copd" element={<COPD />} />

        <Route path="/digestive-health" element={<Navigate to="/conditions/digestive-health" replace />} />
        <Route path="/conditions/digestive-health" element={<DigestiveHealth />} />
        <Route path="/conditions/digestive-health/:slug" element={<DigestiveHealthArticle />} />

        <Route path="/conditions/alzheimers-disease" element={<AlzheimersDisease />} />
        <Route path="/alzheimers-disease" element={<Navigate to="/conditions/alzheimers-disease" replace />} />

        <Route path="/chronic-kidney-disease" element={<ChronicKidneyDisease />} />
        <Route path="/chronic-kidney-disease/article/:slug" element={<ArticlePage />} />
        <Route path="/conditions/chronic-kidney-disease" element={<ChronicKidneyDisease />} />
        <Route path="/inflammatory-bowel-disease" element={<InflammatoryBowelDisease />} />
        <Route path="/conditions/menopause" element={<Menopause />} />
        <Route path="/menopause" element={<Navigate to="/conditions/menopause" replace />} />
        <Route path="/conditions/multiple-sclerosis" element={<MultipleSclerosis />} />
        <Route path="/multiple-sclerosis" element={<Navigate to="/conditions/multiple-sclerosis" replace />} />
        <Route path="/conditions/parkinson" element={<Parkinson />} />
        <Route path="/parkinson" element={<Navigate to="/conditions/parkinson" replace />} />
        <Route path="/conditions/rheumatoid-arthritis" element={<RheumatoidArthritis />} />
        <Route path="/rheumatoid-arthritis" element={<Navigate to="/conditions/rheumatoid-arthritis" replace />} />
        <Route path="/conditions/type-2-diabetes" element={<Type2Diabetes />} />
        <Route path="/type-2-diabetes" element={<Navigate to="/conditions/type-2-diabetes" replace />} />
        <Route path="/conditions/weight-management" element={<WeightManagement />} />
        <Route path="/weight-management" element={<Navigate to="/conditions/weight-management" replace />} />

        <Route path="/eye-health" element={<EyeHealth />} />
        <Route path="/conditions/eye-health" element={<EyeHealth />} />
        <Route path="/eye-health-category" element={<EyeHealthCategoryPage />} />
        <Route path="/eye-health/:slug" element={<EyeHealthCategoryPage />} />

        <Route path="/heart-cardiovascular" element={<Navigate to="/conditions/heart-cardiovascular" replace />} />
        <Route path="/conditions/heart-cardiovascular" element={<HeartCardiovascular />} />

        <Route path="/mental-health" element={<Navigate to="/conditions/mental-health" replace />} />
        <Route path="/conditions/mental-health" element={<MentalHealth />} />

        <Route path="/conditions/migraine" element={<Migraine />} />
        <Route path="/conditions/pneumonia" element={<Pneumonia />} />
        <Route path="/pneumonia" element={<Navigate to="/conditions/pneumonia" replace />} />

        <Route path="/conditions/psoriasis" element={<Psoriasis />} />
        <Route path="/psoriasis" element={<Navigate to="/conditions/psoriasis" replace />} />

        <Route path="/sleep" element={<Navigate to="/conditions/sleep" replace />} />
        <Route path="/conditions/sleep" element={<Sleep />} />

        <Route path="/conditions/respiratory-health" element={<RespiratoryHealth />} />
        <Route path="/respiratory-health" element={<Navigate to="/conditions/respiratory-health" replace />} />
        <Route path="/conditions/self-care" element={<SelfCare />} />
        <Route path="/self-care" element={<Navigate to="/conditions/self-care" replace />} />
        <Route path="/conditions/stress-management" element={<StressManagement />} />
        <Route path="/stress-management" element={<Navigate to="/conditions/stress-management" replace />} />

        {/* Other Sections */}
        <Route path="/wellness" element={<WellnessPage />} />
        <Route path="/blog" element={<BlogHub />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/abortion" element={<Abortion />} />
        <Route path="/wellness/abortion" element={<Abortion />} />
        <Route path="/black-health" element={<BlackHealth />} />
        <Route path="/cbd" element={<Cbd />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/healthy-beauty" element={<HealthyBeauty />} />
        <Route path="/hearing-health" element={<HearingHealth />} />
        <Route path="/lgbtqia" element={<Lgbtqia />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/parenthood" element={<Parenthood />} />
        <Route path="/sexual-health" element={<SexualHealth />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/vitamins-supplements" element={<VitaminsSupplements />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/sponsored-topics" element={<SponsoredTopics />} />
        <Route path="/health-news" element={<HealthNewsPage />} />

        <Route path="/tools/lessons" element={<LessonsPage />} />
        <Route path="/tools/newsletters" element={<NewslettersPage />} />

        {/* Tools Pages */}
        <Route path="/tools" element={<ToolsIndex />} />
        <Route path="/tools/bmi-calculator" element={<BmiCalculator />} />

        {/* Dynamic Categories (must stay at bottom) */}
        <Route path="/:category" element={<CategoryHub />} />
        <Route path="/:category/:subcategory" element={<SubCategoryPage />} />

        {/* Dynamic config-driven pages (must be after all specific routes) */}
        <Route path="/page/:pageName" element={<DynamicPage />} />

        {/* 404 */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
