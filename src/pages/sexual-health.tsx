import React from "react";
import { Layout } from "@/components/layout/Layout";
import WellnessHubArticles from "@/components/WellnessHubArticles";

const SexualHealth: React.FC = () => (
  <Layout>
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Sexual Health</h1>
        <p className="text-gray-700">Articles on sexual health, contraception, STI prevention, and reproductive health.</p>
        <WellnessHubArticles topic="sexual-health" />
      </div>
    </div>
  </Layout>
);

export default SexualHealth;
