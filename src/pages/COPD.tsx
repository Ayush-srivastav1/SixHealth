import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { CardHub, CardSection, CardArticle } from "@/components/alzimersCardHub";
import { Link } from "react-router-dom";

const sections: CardSection[] = [
  {
    id: "basics",
    title: "COPD Basics",
    category: "Overview",
    articles: [
      { id: "progression", title: "The Progression of COPD: What It Looks Like", content: "Learn how COPD changes over time and what to expect." },
      { id: "what-is-copd", title: "What Is Chronic Obstructive Pulmonary Disease (COPD)?", content: "Overview, causes, and risk factors." },
      { id: "myths", title: "The Truth About 8 Common COPD Myths", content: "Debunking misconceptions about COPD." },
      { id: "facts", title: "Important Facts For You To Know About COPD", content: "Key statistics and facts." },
    ],
  },
  {
    id: "medications",
    title: "Medication & Treatments",
    category: "Treatment",
    articles: [
      { id: "new-treatments", title: "New and Current Treatments for COPD", content: "Latest therapies and medications." },
      { id: "treatment-options", title: "Understanding Your COPD Treatment Options", content: "Explore your choices for managing COPD." },
      { id: "drugs-list", title: "COPD Drugs: A List of Medications", content: "Medications to help relieve your symptoms." },
      { id: "lung-transplants", title: "What You Need to Know About Lung Transplants for COPD", content: "When and why lung transplants are considered." },
    ],
  },
  {
    id: "symptoms",
    title: "Symptom Management",
    category: "Management",
    articles: [
      { id: "breathing-exercises", title: "Breathing Exercises to Increase Lung Capacity", content: "Techniques to help you breathe easier." },
      { id: "copd-exercises", title: "Breathing Exercises with COPD", content: "Special exercises for COPD patients." },
      { id: "flare-up", title: "4 Steps for Managing a COPD Flare-Up", content: "What to do during a flare-up." },
      { id: "vaccines", title: "Which Vaccines are Recommended if You Have COPD?", content: "Stay protected with the right vaccines." },
    ],
  },
  {
    id: "living-well",
    title: "Living Well",
    category: "Lifestyle",
    articles: [
      { id: "travel", title: "Your Guide to Safe and Easy Travel with COPD", content: "Travel tips and safety for COPD." },
      { id: "anti-inflammatory-diet", title: "Can an Anti-Inflammatory Diet Help Manage COPD?", content: "Dietary tips for better health." },
      { id: "nutrition-guide", title: "COPD Nutrition Guide: 5 Diet Tips", content: "Nutrition advice for people with COPD." },
      { id: "adaptive-exercises", title: "6 Adaptive Exercises for COPD", content: "Exercise safely with COPD." },
    ],
  },
  {
    id: "quitting-smoking",
    title: "Quitting Smoking",
    category: "Prevention",
    articles: [
      { id: "quitting-smoking", title: "Quitting Smoking as a COPD Treatment", content: "How quitting helps your lungs." },
      { id: "progress-after-quitting", title: "Does COPD Progress After Quitting Smoking?", content: "What to expect after you quit." },
      { id: "cold-turkey", title: "How to Quit Smoking Cold Turkey", content: "Tips for quitting immediately." },
      { id: "quit-tobacco", title: "How to Quit Dipping or Chewing Tobacco", content: "Steps to help you quit tobacco." },
    ],
  },
  {
    id: "asthma-copd",
    title: "Asthma & COPD",
    category: "Overlap",
    articles: [
      { id: "protect-lungs", title: "4 Ways to Protect Your Lung Health with Asthma", content: "Tips for asthma and COPD overlap." },
      { id: "asthma-attack", title: "Your Guide to Asthma Attack First Aid", content: "What to do during an asthma attack." },
      { id: "disability-benefits", title: "Disability Benefits and Asthma", content: "Understanding your rights and benefits." },
      { id: "flu-risk", title: "Is It Dangerous to Get the Flu If You Have Asthma?", content: "Risks and prevention." },
    ],
  },
];

export default function COPD() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Chronic Obstructive Pulmonary Disease (COPD)</h1>
          <p className="text-lg opacity-95 mb-6">Tips and tools to support your health & well-being with COPD</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <CardHub
          sections={sections}
          onArticleClick={(id) => {
            window.location.href = `/COPD/${id}`;
          }}
        />
      </div>
    </Layout>
  );
}
