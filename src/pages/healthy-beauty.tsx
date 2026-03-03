import React from "react";
import { Layout } from "@/components/layout/Layout";
import WellnessHubArticles from "@/components/WellnessHubArticles";

const HealthyBeauty: React.FC = () => (
  <Layout>
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Healthy Beauty</h1>
        <p className="text-gray-700">Advice on beauty routines and products that prioritize skin and overall health.</p>
        <WellnessHubArticles topic="healthy-beauty" />
      </div>
    </div>
  </Layout>
);

export default HealthyBeauty;
