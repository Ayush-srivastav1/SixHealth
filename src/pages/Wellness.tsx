
import React from "react";
import { Layout } from "@/components/layout/Layout";

const categoryHubs = [
  { name: "Abortion Care", href: "/abortion" },
  { name: "Black Health", href: "/black-health" },
  { name: "CBD", href: "/cbd" },
  { name: "Fitness", href: "/fitness" },
  { name: "Healthy Beauty", href: "/healthy-beauty" },
  { name: "Hearing", href: "/hearing-health" },
  { name: "LGBTQIA+ Health", href: "/lgbtqia" },
  { name: "Mental Well-Being", href: "/mental-health" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Parenthood", href: "/parenthood" },
  { name: "Product Reviews", href: "/reviews" },
  { name: "Sexual Health", href: "/sexual-health" },
  { name: "Skin Care", href: "/skincare" },
  { name: "Sleep", href: "/sleep" },
  { name: "Vitamins, Minerals, & Supplements", href: "/vitamins-supplements" },
];

const signaturePrograms = [
  { name: "Allergies", href: "/program/allergy-survival-guide" },
  { name: "Cold & Flu Season", href: "/program/cold-flu-survival-guide" },
  { name: "Destination: Wellness", href: "/program/destination-wellness" },
  { name: "Financial Check Up", href: "/program/financial-check-up" },
  { name: "Healthy Aging", href: "/program/healthy-aging" },
  { name: "Let’s Eat", href: "/program/lets-eat" },
  { name: "Managing Type 2 Diabetes", href: "/program/managing-type-2-diabetes-with-food-and-fitness" },
  { name: "Men's Wellness", href: "/program/mens-wellness" },
  { name: "Resolution Revolution", href: "/program/resolution-revolution" },
  { name: "Roadmap for Menopause", href: "/program/menopause" },
  { name: "Season of Self Care", href: "/program/gift-guides" },
  { name: "Self Care for Caregivers", href: "/program/self-care-for-caregivers" },
];


const WellnessPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-8">Wellness Topics</h1>
          {/* Category Hubs */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Category Hubs</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categoryHubs.map((hub) => (
                <a
                  key={hub.name}
                  href={hub.href}
                  className="block bg-gray-100 hover:bg-blue-50 rounded-lg p-4 text-center font-medium shadow-sm transition"
                >
                  {hub.name}
                </a>
              ))}
            </div>
          </section>
          {/* Signature Programs */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Signature Programs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {signaturePrograms.map((program) => (
                <a
                  key={program.name}
                  href={program.href}
                  className="block bg-green-50 hover:bg-green-100 rounded-lg p-4 text-center font-medium shadow-sm transition"
                >
                  {program.name}
                </a>
              ))}
            </div>
          </section>
          {/* Newsletter Signup */}
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

export default WellnessPage;
