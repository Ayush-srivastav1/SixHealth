/**
 * EmbeddedVideo Component
 * Reusable video player component with lazy loading and responsive design
 */

import { useEffect, useState } from "react";

interface EmbeddedVideoProps {
  youtubeId: string;
  title: string;
  width?: string;
  height?: string;
}

export function EmbeddedVideo({
  youtubeId,
  title,
  width = "100%",
  height = "450px",
}: EmbeddedVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;

  return (
    <div className="video-container my-8">
      <div
        style={{
          width,
          maxWidth: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#000",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {isLoaded ? (
          <iframe
            src={embedUrl}
            title={title}
            width="100%"
            height={height}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <p className="text-gray-500">Loading video...</p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * VideoCard - Thumbnail preview component
 */
interface VideoCardProps {
  video: {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    categorySlug: string;
    youtubeId: string;
    duration?: string;
  };
  onClick: () => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative bg-black aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-5 h-5 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600">
          {video.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
          {video.category}
        </p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}
