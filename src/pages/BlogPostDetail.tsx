import React from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import blogData from "@/data/blogData";

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/wellness" className="text-blue-600 hover:underline">
            ← Back to Wellness Topics
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {post.categorySlug ? (
            <div className="mb-6">
              <div className="rounded-lg bg-blue-50 border border-blue-100 p-4">
                <p className="text-sm text-blue-800">
                  This article is part of the <strong>{post.category}</strong> hub. 
                  <Link to={`/conditions/${post.categorySlug}`} className="ml-2 font-semibold text-blue-700 hover:underline">
                    View all {post.category} articles
                  </Link>
                </p>
              </div>
            </div>
          ) : null}
          {}
          <div className="mb-8">
            <Link to="/wellness" className="text-blue-600 hover:underline text-sm">
              ← Back to Wellness Topics
            </Link>
          </div>

          {}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{post.description}</p>

            {}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 border-t border-b border-gray-200 py-4">
              <div>
                <span className="font-semibold text-gray-900">Author:</span> {post.author}
              </div>
              <div>
                <span className="font-semibold text-gray-900">Reviewed by:</span> {post.reviewer}
              </div>
              <div>
                <span className="font-semibold text-gray-900">Read time:</span> {post.readTime}
              </div>
            </div>
          </header>

          {}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {}
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Explore Other Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {blogData.slice(0, 5).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="font-semibold text-sm group-hover:text-blue-600 line-clamp-2">
                    {relatedPost.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-2">{relatedPost.category}</div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostDetail;
