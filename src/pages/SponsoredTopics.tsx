
import React from "react";
import { Layout } from "@/components/layout/Layout";

const featuredContent = [
  { name: "Cold and Flu Defense at Home", href: "/program/cold-and-flu-defense-at-home" },
  { name: "A Guide to Thriving with HIV", href: "/program/a-guide-to-thriving-with-hiv" },
  { name: "Sleep Apnea from Diagnosis to Treatment", href: "/program/sleep-apnea-from-diagnosis-to-treatment" },
  { name: "Getting Real About Weight Management", href: "/program/getting-real-about-weight-management" },
  { name: "Navigating Weight Management", href: "/program/navigating-weight-management" },
  { name: "Balancing Life with Eczema", href: "/program/balancing-life-with-eczema" },
  { name: "Diabetes Skin Care for Everyday Confidence", href: "/program/diabetes-skin-care-for-everyday-confidence" },
  { name: "Eczema Solutions: Embracing Self-Care", href: "/program/eczema-solutions-embracing-self-care" },
  { name: "Your Guide to Glucose Health", href: "/program/your-guide-to-glucose-health" },
  { name: "Men’s Wellness", href: "/program/mens-wellness" },
  { name: "Medical Alert Systems", href: "/program/medical-alert-systems" },
  { name: "Focus on Lupus", href: "/program/focus-on-lupus" },
  { name: "The First Real Trymester", href: "/program/parenthood-real-first-trymester" },
  { name: "Living with Lung Cancer", href: "/program/living-with-lung-cancer" },
  { name: "Sleep Health", href: "/sleep" },
  { name: "A COPD Roadmap", href: "/program/a-copd-roadmap" },
  { name: "Next Steps with Thyroid Eye Disease", href: "/program/next-steps-with-thyroid-eye-disease" },
];

const moreFeaturedContent = [
  { name: "Managing Inflammatory Bowel Disease", href: "/program/managing-inflammatory-bowel-disease" },
  { name: "Eczema: Una mirada a fondo", href: "/program/eczema-una-mirada-a-fondo" },
  { name: "The Many Faces of Inflammatory Bowel Disease", href: "/program/the-many-faces-of-inflammatory-bowel-disease" },
  { name: "Living Full with Advanced Prostate Cancer", href: "/program/living-full-with-advanced-prostate-cancer" },
  { name: "An Inside Look at Hereditary Angioedema", href: "/program/an-inside-look-at-hereditary-angioedema" },
  { name: "Focus on Narcolepsy", href: "/program/focus-on-narcolepsy" },
  { name: "Focus on Neurofibromatosis Type 1", href: "/program/focus-on-neurofibromatosis-type-1" },
  { name: "An Inside Look at Lymphoma", href: "/program/an-inside-look-at-lymphoma" },
  { name: "Moving Forward with Parkinson's Disease", href: "/program/moving-forward-with-parkinsons-disease" },
  { name: "Balancing Life with Alopecia Areata", href: "/program/balancing-life-with-alopecia-areata" },
];

const SponsoredTopicsPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-8">Sponsored Topics</h1>
          <p className="mb-8 text-lg">Check out the latest health and medical topics we’ve developed with our sponsors.</p>
          {}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">FEATURED CONTENT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {featuredContent.map((item) => (
                <a key={item.name} href={item.href} className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg p-4 font-medium shadow-sm transition">
                  {item.name}
                </a>
              ))}
            </div>
          </section>
          {}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">MORE FEATURED CONTENT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {moreFeaturedContent.map((item) => (
                <a key={item.name} href={item.href} className="block bg-green-50 hover:bg-green-100 rounded-lg p-4 font-medium shadow-sm transition">
                  {item.name}
                </a>
              ))}
            </div>
          </section>
          {}
          <section className="bg-blue-50 rounded-lg p-6 text-center mb-12">
            <h2 className="text-xl font-semibold mb-2">Get our wellness newsletter</h2>
            <p className="mb-4">Filter out the noise and nurture your inbox with health and wellness advice that’s inclusive and rooted in medical expertise.</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                SIGN UP
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">Your <a href="/privacy-policy" className="underline">privacy</a> is important to us</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default SponsoredTopicsPage;
