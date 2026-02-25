import { useState, useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Layout } from "@/components/layout";
import { CardHub } from "@/components/alzimersCardHub";
import { useNavigate } from "react-router-dom";
import { allArticles } from "@/data/allArticles";

const tabs = [
  "Chemotherapy",
  "Treatment",
  "Caregiver Support",
  "What to Eat",
  "Well-Being",
  "Tests & Screenings",
];

export const sections = [
  {
    id: "basics",
    title: "Cancer Care Basics",
    category: "Treatment",
    articles: [
      {
        id: "b1",
        title: "Cancer: Types, Causes, Prevention, and More",
        // Short intro used in lists; full structured content rendered in ArticleDetail
        content: "Cancer is a group of diseases driven by genetic changes that let cells grow and spread uncontrollably. This article explains causes, risk factors, detection, treatment options, and prevention strategies.",
        author: "Heather Hobbs",
        reviewer: "Faith Selchick, DNP, APRN, AOCNP",
        date: "Jan 17, 2023",
        keyTakeaways: [
          "Genetic mutations cause most cancers; both inherited and acquired mutations matter.",
          "Lifestyle factors — smoking, alcohol, poor diet, obesity, and inactivity — raise risk and are often preventable.",
          "Screenings (mammograms, colonoscopy, lung CT for high‑risk people) can find cancer earlier when it’s more treatable.",
          "Treatments range from surgery and radiation to systemic options like chemotherapy, targeted therapy, and immunotherapy.",
        ],
        sections: [
          {
            id: "causes",
            heading: "What causes cancer",
            body:
              "Cancer begins when DNA in cells is damaged and mutations let cells divide without the normal controls. Mutations can be inherited, caused by environmental exposures (tobacco, UV radiation, certain chemicals), infections (HPV, hepatitis), or random errors during cell division. Age and chronic inflammation also increase risk.",
          },
          {
            id: "risk-factors",
            heading: "Risk factors",
            body:
              "Major risk factors include tobacco use, heavy alcohol use, unhealthy diet, excess weight, physical inactivity, exposure to carcinogens, certain infections, and increasing age. Not everyone with risk factors gets cancer, but reducing exposures lowers the chance of some cancers.",
          },
          {
            id: "types",
            heading: "Types of cancer",
            body:
              "Cancers are named for where they start (breast, lung, colon) and grouped by cell type: carcinomas (epithelial), sarcomas (connective tissue), leukemias (blood), lymphomas (lymphatic). Each type follows different diagnostic and treatment pathways.",
          },
          {
            id: "detection",
            heading: "Early detection and screening",
            body:
              "Screenings can detect some cancers early — mammography for breast cancer, colonoscopy for colorectal cancer, and low‑dose CT for certain people at high risk of lung cancer. Not all cancers have effective screening tests; discuss recommendations with your clinician.",
          },
          {
            id: "treatment",
            heading: "Treatment options",
            body:
              "Treatment depends on cancer type and stage. Local options include surgery and radiation; systemic therapies include chemotherapy, hormone therapy, targeted therapy, and immunotherapy. Clinical trials may provide access to new treatments. Palliative care focuses on symptom management and quality of life.",
          },
          {
            id: "prevention",
            heading: "Prevention",
            body:
              "Prevention emphasizes tobacco cessation, moderation of alcohol, a healthy diet, regular activity, maintaining a healthy weight, protecting skin from excessive sun, and vaccination against infection‑related cancers (HPV, hepatitis B). Regular medical care and following screening guidelines help detect disease earlier.",
          },
        ],
        sourceLabel: "Healthline (paraphrased)",
      },
      { id: "b2", title: "My Experience with Hospital Cancer Care", content: "A personal story about navigating cancer care in a hospital setting, including tips for patients and families on what to expect and how to advocate for yourself." },
      { id: "b3", title: "Is a Full-Body Scan Effective at Detecting Cancer?", content: "Explore the pros and cons of full-body scans for cancer detection, including accuracy, risks, and when they may be recommended." },
      { id: "b4", title: "Does Wi-Fi Cause Cancer?", content: "A look at the scientific evidence regarding Wi-Fi exposure and cancer risk, debunking common myths and presenting current research findings." },
      { id: "b5", title: "The 13 Most Common Cancer Types", content: "An overview of the most common types of cancer, their symptoms, and treatment options." },
      { id: "b6", title: "What Does an Oncologist Do?", content: "Understand the role of an oncologist in cancer care, from diagnosis to treatment planning and ongoing support." },
    ],
  },
  {
    id: "chemo",
    title: "Navigating Chemotherapy",
    category: "Chemotherapy",
    articles: [
      { id: "c1", title: "What Days Could You Feel the Worst After Chemo Treatment?", content: "Find out what to expect after chemotherapy sessions, including common side effects and tips for managing discomfort on the toughest days." },
      { id: "c2", title: "The Effects of Chemotherapy on Your Body", content: "A detailed guide to how chemotherapy affects different organs and body systems, and advice for coping with side effects." },
      { id: "c3", title: "Foods to Avoid While on Chemotherapy", content: "A list of foods to avoid during chemotherapy, with explanations of why certain foods may interfere with treatment or increase side effects." },
      { id: "c4", title: "Is Chemo Still Working for You?", content: "How to tell if your chemotherapy is effective, including signs to watch for and questions to ask your care team." },
    ],
  },
  {
    id: "care",
    title: "Resources for Caregivers",
    category: "Caregiver Support",
    articles: [
      { id: "cg1", title: "Essential Things for Family Caregivers", content: "A checklist of important items and resources for family caregivers supporting a loved one with cancer." },
      { id: "cg2", title: "What to Say to Someone with Cancer", content: "Guidance on supportive and compassionate communication with someone who has cancer, including what to say and what to avoid." },
      { id: "cg3", title: "Comfort Gifts for Chemo Patients", content: "Gift ideas that provide comfort and support for people undergoing chemotherapy." },
      { id: "cg4", title: "Creating a Helpful Cancer Care Package", content: "Tips for assembling a thoughtful care package for someone with cancer, including practical and comforting items." },
    ],
  },
  {
    id: "nutrition",
    title: "Nutrition & Well-Being",
    category: "Well-Being",
    articles: [
      { id: "n1", title: "Financial Assistance for Cancer Treatment", content: "Information on financial resources and assistance programs for people undergoing cancer treatment." },
      { id: "n2", title: "The Alkaline Diet: Evidence-Based Review", content: "A science-based review of the alkaline diet and its claims regarding cancer prevention and treatment." },
      { id: "n3", title: "What Is Scanxiety?", content: "Understanding 'scanxiety'—the anxiety before scans—and tips for managing it during your cancer journey." },
      { id: "n4", title: "Managing Emotional Stages of Cancer", content: "Advice for coping with the emotional ups and downs of a cancer diagnosis and treatment." },
    ],
  },
  {
    id: "eating",
    title: "What to Eat During Cancer Treatment",
    category: "What to Eat",
    articles: [
      { id: "e1", title: "Foods to Boost Your Immune System", content: "A guide to immune-boosting foods that are safe and beneficial during cancer treatment." },
      { id: "e2", title: "Managing Nausea with Diet", content: "Dietary strategies and foods that can help reduce nausea during cancer treatment." },
      { id: "e3", title: "High-Calorie Foods for Weight Maintenance", content: "Suggestions for high-calorie, nutritious foods to help maintain weight during treatment." },
      { id: "e4", title: "Anti-Inflammatory Foods", content: "An overview of anti-inflammatory foods and their potential benefits for people with cancer." },
    ],
  },
  {
    id: "tests",
    title: "Tests & Screenings",
    category: "Tests & Screenings",
    articles: [
      { id: "t1", title: "Common Cancer Screening Tests", content: "Descriptions of common cancer screening tests, what they detect, and when they're recommended." },
      { id: "t2", title: "Biopsy Procedures Explained", content: "A plain-language explanation of biopsy procedures, what to expect, and how results are used." },
      { id: "t3", title: "Blood Tests for Cancer Detection", content: "How blood tests are used in cancer detection and monitoring, and what the results may mean." },
      { id: "t4", title: "Imaging Tests: CT, MRI, PET Scans", content: "A guide to imaging tests used in cancer care, including how they work and what to expect." },
    ],
  },
];

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
  const scrollToSection = (category) => {
    const ref = sectionRefs[category];
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
            onArticleClick={(id, title) => {
              const generated = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              const match = allArticles.find((a) => {
                if (!a) return false;
                if ((a.title || "").toString().trim() === title) return true;
                if ((a.slug || "").toString().toLowerCase() === generated) return true;
                const aliases = (a as any).aliases || [];
                if (Array.isArray(aliases) && aliases.map((x: any) => x.toString().toLowerCase()).includes(generated)) return true;
                return false;
              });
              const slug = match ? match.slug : generated;
              const cat = match ? (match.categorySlug || match.category || "cancer-care") : "cancer-care";
              navigate(`/conditions/${cat}/article/${slug}`);
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
Create file succeeded.