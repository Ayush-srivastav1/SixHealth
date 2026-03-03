import React from "react";
import { Layout } from "@/components/layout/Layout";
import WellnessHubArticles from "@/components/WellnessHubArticles";

const Nutrition: React.FC = () => (
  <Layout>
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Nutrition</h1>
        <p className="text-gray-700">Guidance on healthy eating, meal planning, and nutrition science.</p>
        <WellnessHubArticles topic="nutrition" />
      </div>
    </div>
  </Layout>
);

export default Nutrition;
