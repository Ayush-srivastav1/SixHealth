import React from "react";
import { Layout } from "@/components/layout/Layout";
import WellnessHubArticles from "@/components/WellnessHubArticles";

const Abortion: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Abortion Care</h1>
          <p className="text-gray-700 mb-6">This page collects articles and resources about abortion care, options, and supportive services. Below are curated articles and guidance to help you find reliable information.</p>

          <article className="prose prose-lg">
            <h2>Understanding Abortion Care</h2>
            <p>Abortion care includes clinical information about the procedures, what to expect, and how to access services. If you are seeking care, consult a licensed clinician or local health services for personalized guidance.</p>

            <h3>Topics on this hub</h3>
            <ul>
              <li>Types of abortion and eligibility</li>
              <li>Preparing for the procedure and aftercare</li>
              <li>Where to find local services and support</li>
              <li>Privacy and legal considerations</li>
            </ul>

            <h3>Further reading</h3>
            <p>We will add curated blog posts and articles here. For now, browse our <a href="/wellness">Wellness</a> hub for related topics.</p>
            <WellnessHubArticles topic="abortion" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Abortion;
