import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { findArticleBySlug, default as allArticles } from "@/data/allArticles";
import { Layout } from "@/components/layout/Layout";
import parse, { domToReact, Element, HTMLReactParserOptions, DOMNode } from "html-react-parser";
import { getVideosByCategory } from "@/data/videoData";
import { VideoCard } from "@/components/ui/EmbeddedVideo";

type TextNode = DOMNode & { data: string };

type TocItem = { id: string; text: string };

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const found = findArticleBySlug(slug);

  if (!found) {
    return <Navigate to="/not-found" replace />;
  }

  useEffect(() => {
    if (!found?.title) return;
    const prev = document.title;
    document.title = `${found.title} | SixHealth`;
    return () => {
      document.title = prev;
    };
  }, [found?.title]);

  const [toc, setToc] = useState<TocItem[]>([]);
  const [contentNodes, setContentNodes] = useState<React.ReactNode | null>(null);

  // Parse HTML into React elements and build a deterministic TOC during parsing.
  useEffect(() => {
    if (!found?.content) {
      setContentNodes(null);
      setToc([]);
      return;
    }

    const items: TocItem[] = [];
    let headingIndex = 0;

    const isDataNode = (n: DOMNode): n is TextNode => {
      return typeof (n as TextNode).data === 'string';
    };

    const options: HTMLReactParserOptions = {
      replace: (node) => {
        if ((node as Element).type === "tag") {
          const el = node as Element;

          // Remove any H1 coming from the content (we render the page H1 separately)
          if (el.name === 'h1') {
            return React.createElement(React.Fragment, null);
          }

          // Normalize H2s: add deterministic id and capture TOC text
          if (el.name === 'h2') {
            const id = `section-${headingIndex++}`;
            let text = '';
            for (const c of (el.children ?? []) as DOMNode[]) {
              if (isDataNode(c)) text += c.data;
            }
            items.push({ id, text });
            const kids = (el.children ?? []) as unknown as DOMNode[];
            return React.createElement(
              'h2',
              { id, className: el.attribs?.class },
              domToReact(kids, options)
            );
          }

          // Clean paragraphs that contain an inline "Image:" label followed by an <img>
          if (el.name === 'p') {
            const kids = (el.children ?? []) as Element[];
            if (kids.length >= 2 && kids[0].type === 'tag' && kids[0].name === 'strong' && kids[1].type === 'tag' && kids[1].name === 'img') {
              // remove the first strong node (commonly 'Image:' in our content files)
              const filtered = kids.slice(1);
              return React.createElement('p', {}, domToReact(filtered, options));
            }
          }
        }
        return undefined;
      }
    };

    const parsed = parse(found.content, options);
    setToc(items);
    setContentNodes(parsed);
  }, [found?.content]);

  // If the requested slug was an alias (not the canonical slug), redirect
  // to the canonical per-category article URL.
  if (slug && found.slug && slug !== found.slug) {
    const cat = (found.categorySlug || found.category || "").toString().toLowerCase().replace(/\s+/g, "-");
    return <Navigate to={`/${cat}/article/${found.slug}`} replace />;
  }

  // Related articles (same category)
  const relatedArticles = allArticles
    .filter((a) => (a.categorySlug || a.category || "") === (found.categorySlug || found.category || ""))
    .filter((a) => a.slug !== found.slug)
    .slice(0, 4);

  return (
    <Layout>
      <Helmet>
        <title>{found.title} | SixHealth</title>
        <meta name="description" content={found.description || ""} />
        <meta property="og:title" content={found.title} />
        <meta property="og:description" content={found.description || ""} />
      </Helmet>

      <div className="article-layout">
        <aside className="toc">
          <h4>On this page</h4>
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.text}
            </a>
          ))}
        </aside>

        <main>
          <div className="article-wrapper article-content">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{found.title}</h1>

            <div className="article-meta">
              {found.author} • {found.readTime}
            </div>

            {contentNodes ?? <div />}
          </div>
          
          <section className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map((item) => (
                <div key={item.slug} className="p-3 border rounded">
                  <a href={`/blog/${item.slug}`} className="font-semibold block">{item.title}</a>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Watch Related Videos Section */}
          {found.categorySlug && (() => {
            const relatedVideos = getVideosByCategory(found.categorySlug).slice(0, 3);
            return relatedVideos.length > 0 ? (
              <section className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-100">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Watch Related Videos</h3>
                <p className="text-gray-600 mb-6">
                  Enhance your understanding with expert-led video content on this topic.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedVideos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onClick={() =>
                        navigate(`/videos/${video.categorySlug}/${video.slug}`)
                      }
                    />
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => navigate(`/videos/${found.categorySlug}`)}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    View all {found.categorySlug} videos →
                  </button>
                </div>
              </section>
            ) : null;
          })()}
        </main>

        <aside className="related-sidebar">
          <div className="related-inner">
            <h4 className="related-title">Related Articles</h4>
            {relatedArticles.map((item) => (
              <a key={item.slug} href={`/blog/${item.slug}`} className="related-card">
                {item.imageUrl && (
                  <img src={item.imageUrl} alt={item.title} className="related-image" />
                )}
                <h5 className="related-card-title">{item.title}</h5>
                {item.excerpt && (
                  <p className="related-card-desc">{item.excerpt}</p>
                )}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default ArticlePage;
