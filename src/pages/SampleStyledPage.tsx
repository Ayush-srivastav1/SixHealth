import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function SampleStyledPage() {
  const tabs = [
    "Basics",
    "Mental Health",
    "Diet & Lifestyle",
    "Treatment",
    "Behavioral Changes",
    "Early Onset"
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <PageLayout
      title="Caregiving for Alzheimer’s Disease"
      subtitle="Your hub for navigating being a caregiver for someone living with Alzheimer's disease"
      tabs={tabs}
      activeTab={activeTab}
      onTabClick={setActiveTab}
      heroColor="#9333ea"
    >
      <h2 className="text-2xl font-bold mb-6">Editor's Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Your Guide to Caring for Someone with Alzheimer’s Disease</h3>
          <p>Learn how to care for someone with Alzheimer’s, including daily routines, safety, and emotional support.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">What Is Memory Care and Who Is It for?</h3>
          <p>Understand memory care options and who can benefit from them.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
          <h3 className="font-bold text-lg mb-2">Choosing a Nursing Home for a Loved One with Alzheimer’s</h3>
          <p>Tips for selecting the right nursing home for Alzheimer’s care.</p>
        </div>
      </div>
    </PageLayout>
  );
}
