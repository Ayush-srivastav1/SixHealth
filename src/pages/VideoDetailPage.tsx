/**
 * VideoDetailPage
 * Display individual video with embedded player and details
 */

import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { EmbeddedVideo, VideoCard } from "@/components/ui/EmbeddedVideo";
import { getVideoBySlug, getRelatedVideos } from "@/data/videoData";

export function VideoDetailPage() {
  const navigate = useNavigate();
  const { categorySlug, slug } = useParams<{
    categorySlug: string;
    slug: string;
  }>();

  if (!categorySlug || !slug) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Video not found
            </h1>
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

  const video = getVideoBySlug(categorySlug, slug);

  if (!video) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Video not found
            </h1>
            <p className="text-gray-600 mt-2">
              The video you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate(`/videos/${categorySlug}`)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to {video?.category || ""} Videos
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedVideos = getRelatedVideos(categorySlug, slug, 3);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Header Navigation */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              ← Back
            </button>
          </div>
        </section>

        {/* Video Player Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <button
                onClick={() => navigate("/videos")}
                className="hover:text-gray-900 transition-colors"
              >
                Videos
              </button>
              <span>/</span>
              <button
                onClick={() => navigate(`/videos/${categorySlug}`)}
                className="hover:text-gray-900 transition-colors"
              >
                {video.category}
              </button>
              <span>/</span>
              <span className="text-gray-900 font-medium">{video.title}</span>
            </div>

            {/* Video Player */}
            <div className="mb-8">
              <EmbeddedVideo
                youtubeId={video.youtubeId}
                title={video.title}
              />
            </div>

            {/* Video Details */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {video.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    {video.duration && (
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                        {video.duration}
                      </span>
                    )}
                    {video.series && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Series: {video.series}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  About This Video
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Video Metadata */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Category
                    </p>
                    <p className="text-gray-900 font-medium mt-1">
                      {video.category}
                    </p>
                  </div>
                  {video.duration && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Duration
                      </p>
                      <p className="text-gray-900 font-medium mt-1">
                        {video.duration}
                      </p>
                    </div>
                  )}
                  {video.series && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Series
                      </p>
                      <p className="text-gray-900 font-medium mt-1">
                        {video.series}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Video ID
                    </p>
                    <p className="text-gray-900 font-medium mt-1 font-mono text-sm">
                      {video.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="bg-blue-50 rounded-lg p-6 mb-12 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-4">Share This Video</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const url = window.location.href;
                    navigator.clipboard.writeText(url);
                    alert("Link copied to clipboard!");
                  }}
                  className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <section className="bg-gray-50 py-16 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Videos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedVideos.map((relatedVideo) => (
                  <VideoCard
                    key={relatedVideo.id}
                    video={relatedVideo}
                    onClick={() =>
                      navigate(
                        `/videos/${relatedVideo.categorySlug}/${relatedVideo.slug}`
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore More Content
            </h2>
            <p className="text-gray-600 mb-8">
              Discover more health and wellness videos on related topics.
            </p>
            <button
              onClick={() => navigate("/videos")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Browse All Videos
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
