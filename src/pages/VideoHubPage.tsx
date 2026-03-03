/**
 * VideoHubPage
 * Main video hub with featured content and category overview
 */

import { useNavigate } from "react-router-dom";
import {
  videoData,
  getVideoCategories,
  getFeaturedVideos,
  type VideoItem,
} from "@/data/videoData";
import { VideoCard } from "@/components/ui/EmbeddedVideo";

export function VideoHubPage() {
  const navigate = useNavigate();
  const categories = getVideoCategories();
  const featured = getFeaturedVideos();
  const categoryStats = new Map<string, number>();

  videoData.forEach((video) => {
    const count = categoryStats.get(video.categorySlug) || 0;
    categoryStats.set(video.categorySlug, count + 1);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health & Wellness Videos
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert-led video content covering sleep, mental health, nutrition,
            and more. Learn from healthcare professionals and improve your
            wellness.
          </p>
        </div>
      </section>

      {/* Featured Videos */}
      {featured.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((video) => (
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
      )}

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categorySlug = videoData.find((v) => v.category === category)
                ?.categorySlug;
              const count = categoryStats.get(categorySlug || "") || 0;

              return (
                <div
                  key={category}
                  onClick={() =>
                    navigate(`/videos/${categorySlug}`)
                  }
                  className="cursor-pointer group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-center"
                >
                  <div className="text-4xl mb-4">
                    {getCategoryIcon(categorySlug)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category}
                  </h3>
                  <p className="text-gray-500 mt-2">{count} videos</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Videos Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            All Videos ({videoData.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video) => (
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

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Content Coming Soon
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We're regularly adding new videos to help you on your health journey.
            Check back soon for updates.
          </p>
        </div>
      </section>
    </div>
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
