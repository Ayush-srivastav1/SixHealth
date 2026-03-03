import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";

const tabs = [
  "Physical",
  "Mental",
  "Emotional",
  "Spiritual",
];

export const sections = [
  {
    id: "physical",
    title: "Physical Self-Care",
    category: "Physical",
    articles: [
      { id: "ph1", title: "Nutrition & Hydration", content: "Essential guidelines for healthy eating and staying properly hydrated." },
      { id: "ph2", title: "Exercise & Movement", content: "Finding enjoyable ways to stay active and maintain physical fitness." },
      { id: "ph3", title: "Sleep Hygiene", content: "Creating healthy sleep habits for better rest and recovery." },
      { id: "ph4", title: "Preventive Healthcare", content: "Regular check-ups, screenings, and vaccinations for long-term health." },
      { id: "ph5", title: "Body Care", content: "Skincare, grooming, and personal hygiene routines." },
    ],
  },
  {
    id: "mental",
    title: "Mental Self-Care",
    category: "Mental",
    articles: [
      { id: "m1", title: "Mindfulness Practices", content: "Meditation, breathing exercises, and staying present in the moment." },
      { id: "m2", title: "Cognitive Health", content: "Brain exercises, learning new skills, and mental stimulation." },
      { id: "m3", title: "Stress Management", content: "Techniques to handle daily stress and prevent burnout." },
      { id: "m4", title: "Work-Life Balance", content: "Setting boundaries and creating harmony between professional and personal life." },
    ],
  },
  {
    id: "emotional",
    title: "Emotional Self-Care",
    category: "Emotional",
    articles: [
      { id: "e1", title: "Emotional Awareness", content: "Recognizing and understanding your emotions and their impact." },
      { id: "e2", title: "Healthy Relationships", content: "Building and maintaining supportive relationships." },
      { id: "e3", title: "Setting Boundaries", content: "Learning to say no and protect your emotional energy." },
      { id: "e4", title: "Self-Compassion", content: "Being kind to yourself during difficult times." },
      { id: "e5", title: "Expressing Feelings", content: "Healthy ways to communicate emotions and needs." },
    ],
  },
  {
    id: "spiritual",
    title: "Spiritual Self-Care",
    category: "Spiritual",
    articles: [
      { id: "s1", title: "Finding Purpose", content: "Discovering meaning and direction in your life journey." },
      { id: "s2", title: "Gratitude Practice", content: "Cultivating thankfulness and appreciation for life's blessings." },
      { id: "s3", title: "Nature Connection", content: "Spending time in nature and connecting with the natural world." },
      { id: "s4", title: "Creative Expression", content: "Using art, music, and creativity for spiritual nourishment." },
      { id: "s5", title: "Mindful Living", content: "Living with intention and awareness in daily activities." },
    ],
  },
];

export default function SelfCare() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Physical": useRef(null),
    "Mental": useRef(null),
    "Emotional": useRef(null),
    "Spiritual": useRef(null),
  };
  const scrollToSection = (category: string) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {}
      <section className="bg-gradient-to-r from-pink-700 to-pink-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Self-Care</h1>
          <p className="text-lg opacity-95 mb-6">
            Nurture your body, mind, and spirit with comprehensive self-care guidance
          </p>

          <div className="flex justify-center">
            <nav className="flex gap-6 flex-wrap md:flex-nowrap justify-center mt-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab)}
                  className="px-8 py-4 rounded-full font-medium transition text-blue-400 bg-gray-900 hover:bg-gray-800 hover:text-blue-300 text-lg shadow-md"
                  style={{ minWidth: 120 }}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-5 py-10 space-y-12">
        {sections.map((section) => (
          <div key={section.id} ref={sectionRefs[section.category]}>
            <Section section={section} />
          </div>
        ))}

        {}
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-pink-700 mb-2">
            Get weekly Self-Care updates
          </h2>

          {!subscribed ? (
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
                required
                placeholder="Enter your email"
                className="border border-pink-300 rounded px-4 py-2"
              />
              <button className="bg-pink-700 text-white rounded py-2 font-semibold">
                Sign Up
              </button>
            </form>
          ) : (
            <p className="text-pink-700 font-medium">
              ✅ You're subscribed successfully!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Section({ section }: {
  section: {
    title: string;
    articles: { id: string; title: string; content: string }[];
  };
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map((article) => (
          <Link
            key={article.id}
            className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none no-underline"
            to={`/self-care/article/${article.id}`}
            state={{ title: article.title }}
          >
            <img
              src="/placeholder.svg"
onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
              alt={article.title}
              className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <span className="text-blue-700 text-sm font-semibold mt-auto">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

