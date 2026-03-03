import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { menopauseSectionsDetailed, menopauseTabs } from "@/data/menopauseSectionsDetailed";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";

export default function Menopause() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = menopauseTabs.reduce((acc, tab) => {
    acc[tab] = useRef(null);
    return acc;
  }, {});

  const scrollToSection = (category) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Menopause</h1>
          <p className="text-lg opacity-95 mb-6">
            Supporting your health and well-being through this stage of life
          </p>
          <nav className="flex gap-3 flex-wrap">
            {menopauseTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className="px-4 py-2 rounded-full font-medium transition bg-purple-600 hover:bg-white hover:text-purple-700 text-white"
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-5 py-10 space-y-12">
        {menopauseSectionsDetailed.map((section) => (
          <div key={section.id} ref={sectionRefs[section.category]}>
            <MenopauseSection section={section} />
          </div>
        ))}

        {}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-purple-700 mb-2">
            Get weekly Menopause updates
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
                className="border border-purple-300 rounded px-4 py-2"
              />
              <button className="bg-purple-700 text-white rounded py-2 font-semibold">
                Sign Up
              </button>
            </form>
          ) : (
            <p className="text-green-700 font-medium">
              ✅ You’re subscribed successfully!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

function MenopauseSection({ section }: {
  section: {
    title: string;
    articles: { id: string; title: string; content: string }[];
  };
}) {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map((article) => {
          const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return (
            <button
              key={article.id}
              className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none"
              onClick={() => navigate(`/menopause/${slug}`)}
            >
              <img
                src="/placeholder.svg"
onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
                alt={article.title}
                className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
                loading="lazy"
              />
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <span className="text-purple-700 text-sm font-semibold mt-auto">
                Read more →
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

