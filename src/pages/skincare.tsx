import React from "react";
import { Layout } from "@/components/layout/Layout";
import WellnessHubArticles from "@/components/WellnessHubArticles";

const Skincare: React.FC = () => (
  <Layout>
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Skin Care</h1>
        <p className="text-gray-700">Evidence-based skin care tips, routines, and product guidance for different skin types.</p>

        <div className="prose max-w-none mt-8">
          <p>
            Healthy skin starts with simple, consistent habits. Below are practical steps and gentle product guidance you can try—whether your skin is oily, dry, sensitive, or combination.
          </p>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
              alt="Person applying moisturizer to face"
              loading="lazy"
              className="w-full rounded"
            />
            <figcaption className="text-sm text-gray-500 mt-2">Moisturizing daily helps maintain the skin barrier.</figcaption>
          </figure>

          <h2>1. Simple Daily Routine</h2>
          <p>
            Cleanse gently in the morning and evening, follow with a lightweight moisturizer, and use sunscreen every morning. For most people a handful of well-chosen products is better than many layered actives.
          </p>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
              alt="Flatlay of gentle cleanser and skincare items"
              loading="lazy"
              className="w-full rounded"
            />
            <figcaption className="text-sm text-gray-500 mt-2">Choose a gentle cleanser and a moisturizer suited to your skin type.</figcaption>
          </figure>

          <h2>2. Sun Protection</h2>
          <p>
            Sunscreen prevents premature aging and most skin cancers—use a broad-spectrum SPF 30+ every day, reapply when outdoors, and combine with hats and shade for best results.
          </p>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
              alt="Person applying sunscreen outdoors"
              loading="lazy"
              className="w-full rounded"
            />
            <figcaption className="text-sm text-gray-500 mt-2">Daily SPF protects against UV damage and discoloration.</figcaption>
          </figure>

          <h2>3. Ingredients to Look For</h2>
          <p>
            For hydration: hyaluronic acid and ceramides. For gentle exfoliation: low-strength AHAs or BHAs. For brightening and antioxidant support: vitamin C. Patch-test new actives and introduce them one at a time.
          </p>

          <figure className="my-6">
            <img
              src="https://images.unsplash.com/photo-1580281657522-77f7b6a9f1c5?auto=format&fit=crop&w=1200&q=80"
              alt="Skincare serums and dropper bottles"
              loading="lazy"
              className="w-full rounded"
            />
            <figcaption className="text-sm text-gray-500 mt-2">Pick targeted actives based on your skin goals.</figcaption>
          </figure>

          <h2>4. When to See a Dermatologist</h2>
          <p>
            Persistent redness, irritation, rapidly changing moles, or severe acne should be evaluated by a dermatologist. Professional guidance helps tailor treatments safely.
          </p>

          <p className="mt-6">Try this simple 3-step starter routine: gentle cleanser → moisturizer → sunscreen. If you'd like, I can add example product suggestions or link specific articles to the Wellness hub below.</p>
        </div>

        <WellnessHubArticles topic="skincare" />
      </div>
    </div>
  </Layout>
);

export default Skincare;
