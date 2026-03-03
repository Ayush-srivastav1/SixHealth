import React from "react";
import { Link } from "react-router-dom";
import blogData from "@/data/blogData";

type Props = {
  topic: string;
  max?: number;
};

const normalize = (s?: string) => (s || "").toString().toLowerCase().replace(/\s+/g, "-").trim();

const matchesTopic = (article: unknown, topic: string) => {
  const t = normalize(topic);
  const a = article as Record<string, unknown>;
  const cat = normalize(String(a.categorySlug ?? a.category ?? ""));
  if (cat === t) return true;
  const slugVal = normalize(String(a.slug ?? ""));
  if (slugVal.includes(t)) return true;
  const aliases = a.aliases;
  if (Array.isArray(aliases) && aliases.some((al) => normalize(String(al)) === t)) return true;
  return false;
};

const WellnessHubArticles: React.FC<Props> = ({ topic, max = 6 }) => {
  const matched = blogData.filter((a) => matchesTopic(a, topic));
  if (!matched.length) {
    return <p className="text-gray-600">No articles found for this topic yet.</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Related articles</h3>
      <ul className="space-y-2">
        {matched.slice(0, max).map((a) => (
          <li key={a.id}>
            <Link to={`/blog/${a.slug}`} className="text-blue-700 hover:underline">
              {a.title}
            </Link>
            {a.description ? <p className="text-sm text-gray-600">{a.description}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WellnessHubArticles;
