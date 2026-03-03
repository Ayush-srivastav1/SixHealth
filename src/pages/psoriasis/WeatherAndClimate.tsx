import { Layout } from "@/components/layout";
import { findArticleBySlug } from "@/data/allArticles";

export default function WeatherAndClimate() {
  const article = findArticleBySlug("weather-and-climate");
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{article?.title ?? "Weather and Climate"}</h1>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article?.content || "" }} />
      </div>
    </Layout>
  );
}
