import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import blogData from "@/data/blogData";

const BlogHub: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="container py-12">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Health & Wellness Blog</h1>
            <p className="text-lg text-gray-600">
              Explore evidence-based articles on health topics ranging from fitness and nutrition to mental wellbeing and preventive care.
            </p>
          </div>

          {/* Featured Post */}
          {blogData.length > 0 && (
            <div className="mb-16 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="p-8">
                <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Featured
                </div>
                <h2 className="text-3xl font-bold mb-3 text-gray-900">{blogData[0].title}</h2>
                <p className="text-gray-700 mb-6 line-clamp-2">{blogData[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{blogData[0].category}</span>
                    {" • "}
                    <span>{blogData[0].readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${blogData[0].slug}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {post.description}
                    </p>

                    {/* Meta Footer */}
                    <div className="pt-4 border-t border-gray-200 text-xs text-gray-600 flex justify-between">
                      <span>{post.readTime}</span>
                      <span className="font-semibold text-blue-600 group-hover:text-blue-700">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest health and wellness articles.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogHub;
