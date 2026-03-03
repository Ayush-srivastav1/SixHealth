/**
 * VideoCategoryPage
 * Display all videos in a specific category
 */

import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getVideosByCategory } from "@/data/videoData";
import { VideoCard } from "@/components/ui/EmbeddedVideo";

export function VideoCategoryPage() {
  const navigate = useNavigate();
  const { categorySlug } = useParams<{ categorySlug: string }>();

  if (!categorySlug) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Category not found
            </h1>
            <p className="text-gray-600 mt-2">
              The category you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/videos")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Videos
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const videos = getVideosByCategory(categorySlug);

  if (videos.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              No videos found
            </h1>
            <p className="text-gray-600 mt-2">
              No videos are available in this category yet.
            </p>
            <button
              onClick={() => navigate("/videos")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Browse All Videos
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const categoryName = videos[0]?.category || categorySlug;
  const categoryIcon = getCategoryIcon(categorySlug);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/videos")}
              className="text-blue-100 hover:text-white transition-colors mb-4 text-sm"
            >
              ← Back to Videos
            </button>
            <h1 className="text-4xl font-bold mb-2">
              {categoryIcon} {categoryName}
            </h1>
            <p className="text-blue-100">
              {videos.length} video{videos.length !== 1 ? "s" : ""} available
            </p>
          </div>
        </section>

        {}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() =>
                    navigate(`/videos/${video.categorySlug}/${video.slug}`)
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Explore Other Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { slug: "sleep", name: "Sleep", icon: "😴" },
                { slug: "mental-health", name: "Mental Health", icon: "🧠" },
                { slug: "nutrition", name: "Nutrition", icon: "🥗" },
                { slug: "heart-health", name: "Heart Health", icon: "❤️" },
              ].map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => navigate(`/videos/${cat.slug}`)}
                  disabled={cat.slug === categorySlug}
                  className={`p-4 rounded-lg transition-all text-center ${
                    cat.slug === categorySlug
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-900 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <div className="text-sm font-semibold">{cat.name}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

/**
 * Helper function for category icons
 */
function getCategoryIcon(categorySlug?: string): string {
  const iconMap: Record<string, string> = {
    sleep: "😴",
    "mental-health": "🧠",
    nutrition: "🥗",
    "heart-health": "❤️",
    wellness: "💚",
  };
  return iconMap[categorySlug || ""] || "🎥";
}
