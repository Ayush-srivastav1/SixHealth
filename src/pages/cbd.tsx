import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import blogData from "@/data/blogData";

const Cbd: React.FC = () => {
  const article = blogData.find((p) => p.slug === "cbd");

  if (article) {
    return (
      <Layout>
        <article className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{article.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{article.description}</p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 border-t border-b border-gray-200 py-4">
                <div>
                  <span className="font-semibold text-gray-900">Author:</span> {article.author}
                </div>
                {article.reviewer && (
                  <div>
                    <span className="font-semibold text-gray-900">Reviewed by:</span> {article.reviewer}
                  </div>
                )}
                <div>
                  <span className="font-semibold text-gray-900">Read time:</span> {article.readTime}
                </div>
              </div>
            </header>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
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
  }

  return (
    <Layout>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">CBD</h1>
          <p className="text-gray-700">Evidence-based articles about CBD, its uses, safety, and legal considerations.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cbd;
