import React from "react";
import { Layout } from "@/components/layout";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";

type Author = {
  name: string;
  role?: string;
  avatar?: string;
};

type TocItem = { id: string; text: string };

export default function ArticleLayout({
  title,
  heroImage,
  author,
  published,
  toc = [],
  relatedArticles = [],
  children,
}: {
  title: string;
  heroImage?: string;
  author?: Author;
  published?: string;
  toc?: TocItem[];
  relatedArticles?: Array<{ slug?: string; href?: string; title: string; imageUrl?: string; excerpt?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <div className="article-layout">
        <aside className="toc">
          <h4>On this page</h4>
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.text}</a>
          ))}
        </aside>

        <main>
          <article className="article-wrapper article-content max-w-none prose lg:prose-lg px-0">
            <header className="mb-6">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
              {published ? <p className="text-xs text-slate-500 mt-1">Published: {published}</p> : null}
            </header>

            {heroImage ? (
              <figure className="w-full rounded-lg overflow-hidden shadow mb-6">
                <img src={heroImage} alt={title} className="w-full h-64 object-cover" />
              </figure>
            ) : null}

            {author ? (
              <div className="flex items-center gap-4 mb-4">
                {author.avatar ? (
                  <img src={author.avatar} alt={author.name} className="w-12 h-12 rounded-full object-cover" />
                ) : null}
                <div>
                  <p className="font-semibold">{author.name}</p>
                  {author.role ? <p className="text-sm text-slate-600">{author.role}</p> : null}
                </div>
              </div>
            ) : null}

            <div>{children}</div>
          </article>
        </main>

        <aside className="related-sidebar">
          <div className="related-inner">
            <h4 className="related-title">Related Articles</h4>
            {
              // Deduplicate related articles by slug to avoid duplicate cards
              Array.from(new Map(relatedArticles.map(r => [r.slug || r.href, r])).values()).map((item) => {
                const href = item.href ? item.href : item.slug ? `/blog/${item.slug}` : '#'
                return (
                  <a key={item.slug || item.href} href={href} className="related-card">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} className="related-image" />
                  )}
                  <h5 className="related-card-title">{item.title}</h5>
                  {item.excerpt && (
                    <p className="related-card-desc">{item.excerpt}</p>
                  )}
                  </a>
                )
              })
            }
          </div>
        </aside>
      </div>
    </Layout>
  );
}
