import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import blogData from "@/data/blogData";

const HearingHealth: React.FC = () => {
  const article = blogData.find((p) => p.slug === "hearing-health");

  useEffect(() => {
    if (!article?.content) return;
    const container = document.querySelector('.article-inner .article-content') as HTMLElement | null;
    if (!container) return;
    const h2s = Array.from(container.querySelectorAll('h2'));
    h2s.forEach((h2, idx) => h2.setAttribute('id', `section-${idx}`));
    const imgs = Array.from(container.querySelectorAll('img')) as HTMLImageElement[];
    const seen = new Set<string>();
    let floatCount = 0;

    imgs.forEach((img) => {
      const src = img.getAttribute('src') || '';
      if (!src) return;
      if (seen.has(src)) {
        img.remove();
        return;
      }
      seen.add(src);

      try {
        const url = new URL(src);
        if (url.searchParams.get('fm') !== 'webp') {
          url.searchParams.set('fm', 'webp');
          img.src = url.toString();
        }
      } catch (e) {
        if (!src.includes('fm=webp')) {
          img.src = src + (src.includes('?') ? '&fm=webp' : '?fm=webp');
        }
      }

      if (floatCount < 3) {
        img.classList.remove('img-left', 'img-right');
        img.classList.add(floatCount % 2 === 0 ? 'img-left' : 'img-right');
        img.setAttribute('loading', 'lazy');
        floatCount += 1;
      } else {
        img.classList.remove('img-left', 'img-right');
        img.style.display = 'block';
        img.style.margin = '28px 0';
        img.setAttribute('loading', 'lazy');
      }
    });
  }, [article?.content]);

  if (article) {
    return (
      <Layout>
        <div className="bg-white min-h-screen text-gray-900">
          <div className="relative w-full h-96 bg-cover bg-center" style={{
            backgroundImage: 'url(https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp',
            backgroundColor: '#f3f4f6'
          }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Hearing Health</h1>
              <p className="text-xl max-w-2xl">Protecting your hearing and understanding hearing loss prevention and care</p>
            </div>
          </div>

          <div className="container grid gap-8 py-12">
            <div className="max-w-6xl w-full mx-auto">
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
              className="prose prose-lg text-gray-700 leading-relaxed max-w-5xl mx-auto"
              style={{ maxWidth: '1100px' }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            </div>
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
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white min-h-screen text-gray-900">
        <div className="relative w-full h-96 bg-cover bg-center" style={{
          backgroundImage: 'url(https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp',
          backgroundColor: '#f3f4f6'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Hearing Health</h1>
            <p className="text-xl max-w-2xl">Protecting your hearing and understanding hearing loss prevention and care</p>
          </div>
        </div>
        <div className="container grid gap-8 py-12">
          <h2 className="text-3xl font-bold mb-4">Hearing Health Guides</h2>
          <p className="text-gray-700">Information about hearing loss, prevention, and care options.</p>
        </div>
      </div>
    </Layout>
  );
};

export default HearingHealth;

