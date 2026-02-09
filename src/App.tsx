import EyeHealthSectionPage from "@/pages/EyeHealthCategoryPage";
import EyeHealthSubSectionPage from "@/pages/EyeHealthCategoryPage";
import EyeHealthArticlePage from "@/pages/ArticlePage";
import React, { Suspense } from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"


import Index from "@/pages/Index";
import ArticlePage from "@/pages/ArticlePage";
import ArticlesHub from "@/pages/ArticlesHub";
import SearchPage from "@/pages/SearchPage";
import CategoryHub from "@/pages/CategoryHub";
import SubCategoryPage from "@/pages/SubCategoryPage";
import NotFound from "@/pages/NotFound";

import SponsoredTopics from "@/pages/SponsoredTopics";
import WellnessPage from "@/pages/Wellness";
import ReviewsPage from "@/pages/Reviews";
import LessonsPage from "@/pages/Lessons";
import NewslettersPage from "@/pages/Newsletters";
import HealthNewsPage from "@/pages/HealthNews";

import Asthma from "@/pages/Asthma";
import AsthmaArticlePage from "@/pages/AsthmaArticlePage";
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

// Dynamic page system imports

import PageTemplate from "./pages/PageTemplate";
import pageConfig from "./pages/pageConfig";
import { useParams } from "react-router-dom";

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
  return (
    <Router>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/articles" element={<ArticlesHub />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/author/:authorId" element={<AuthorPage />} />
        <Route path="/tool/:toolId" element={<ToolPage />} />

        {/* Condition Pages */}
        <Route path="/asthma" element={<Asthma />} />
        <Route path="/conditions/asthma" element={<Asthma />} />

        {/* Asthma Subpages (static imports) */}
        <Route path="/asthma/article/:slug" element={<AsthmaArticlePage />} />
        <Route path="/asthma/section/:sectionId" element={<AsthmaSectionPage />} />
        <Route path="/asthma/section/:sectionId/:subSectionId" element={<AsthmaSubSectionPage />} />
        <Route path="/asthma-hub" element={<AsthmaIndexPage />} />

        {/* Eye Health Subpages (static imports) */}
        <Route path="/eye-health/article/:articleId" element={<EyeHealthArticlePage />} />
        <Route path="/eye-health/section/:sectionId" element={<EyeHealthSectionPage />} />
        <Route path="/eye-health/section/:sectionId/:subSectionId" element={<EyeHealthSubSectionPage />} />

        <Route path="/breast-cancer" element={<BreastCancer />} />
        <Route
          path="/breast-cancer/article/:slug"
          element={<BreastCancerArticleDetail />}
           />
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
        <Route path="/heart-cardiovascular" element={<Navigate to="/conditions/migraine" replace />} />
        <Route path="/conditions/migraine" element={<Migraine />} />
        <Route path="/conditions/pneumonia" element={<Pneumonia />} />
        <Route path="/pneumonia" element={<Navigate to="/conditions/pneumonia" replace />} />
        <Route path="/conditions/psoriasis" element={<Psoriasis />} />
        <Route path="/psoriasis" element={<Navigate to="/conditions/psoriasis" replace />} />

        <Route path="/sleep" element={<Navigate to="/conditions/sleep" replace />} />
        <Route path="/sleep/:slug" element={<ArticlePage />} />

        <Route path="/conditions/respiratory-health" element={<RespiratoryHealth />} />
        <Route path="/respiratory-health" element={<Navigate to="/conditions/respiratory-health" replace />} />
        <Route path="/conditions/self-care" element={<SelfCare />} />
        <Route path="/self-care" element={<Navigate to="/conditions/self-care" replace />} />
        <Route path="/conditions/stress-management" element={<StressManagement />} />
        <Route path="/stress-management" element={<Navigate to="/conditions/stress-management" replace />} />
        <Route path="/conditions/sleep" element={<Sleep />} />
        <Route path="/sleep" element={<Navigate to="/conditions/sleep" replace />} />
        {/* Other Sections */}
        <Route path="/wellness" element={<WellnessPage />} />
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
        {/* Removed missing routes: Pneumonia, RespiratoryHealth, SelfCare, StressManagement */}
      </Routes>
    </Router>
  )
}

export default App

// Static imports for Asthma subpages (fallbacks to existing pages)
import AsthmaSectionPage from '@/pages/PageTemplate';
import AsthmaSubSectionPage from '@/pages/PageTemplate';
import AsthmaIndexPage from '@/pages/Asthma';

// Heart Health Basics Pages
import WhatIsHeartDisease from '@/pages/PageTemplate';
import HowTheHeartWorks from '@/pages/PageTemplate';
import TypesOfCardiovascularDisease from '@/pages/PageTemplate';
import HeartDiseaseInWomen from '@/pages/PageTemplate';
import HeartDiseaseInChildren from '@/pages/PageTemplate';

import { get } from "lodash";

const routes = [
  { path: "/heart-cardiovascular/what-is-heart-disease", element: <WhatIsHeartDisease /> },
  { path: "/heart-cardiovascular/how-the-heart-works", element: <HowTheHeartWorks /> },
  { path: "/heart-cardiovascular/types-of-cardiovascular-disease", element: <TypesOfCardiovascularDisease /> },
  { path: "/heart-cardiovascular/heart-disease-in-women", element: <HeartDiseaseInWomen /> },
  { path: "/heart-cardiovascular/heart-disease-in-children", element: <HeartDiseaseInChildren /> },
];

export const AppRouter = {
  routes
}
