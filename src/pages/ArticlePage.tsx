import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "@/styles/article-layout.css";
import { findArticleBySlug, default as allArticles } from "@/data/allArticles";
import { Layout } from "@/components/layout/Layout";
import parse, { domToReact, Element, HTMLReactParserOptions, DOMNode } from "html-react-parser";

type TextNode = DOMNode & { data: string };

type TocItem = { id: string; text: string };

const ArticlePage: React.FC = () => {
  const params = useParams<{ conditionSlug?: string; articleSlug?: string; slug?: string }>();
  const conditionSlug = params.conditionSlug;
  const articleSlug = params.articleSlug || params.slug;

  const found = findArticleBySlug(articleSlug, conditionSlug);

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
        if ((node as Element).type === "tag" && (node as Element).name === "h2") {
          const el = node as Element;
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
        return undefined;
      }
    };

    const parsed = parse(found.content, options);
    setToc(items);
    setContentNodes(parsed);
  }, [found?.content]);

  // If the requested slug was an alias (not the canonical slug), redirect
  // to the canonical per-category article URL using the article's category.
  if (articleSlug && found?.slug && articleSlug !== found.slug) {
    const cat = (found.categorySlug || found.category || "").toString().toLowerCase().replace(/\s+/g, "-");
    return <Navigate to={`/conditions/${cat}/article/${found.slug}`} replace />;
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
        </main>

        <aside className="related-sidebar">
          <h4 className="font-semibold mb-4">Related</h4>
          {relatedArticles.map((item) => (
            <div key={item.slug} className="related-card">
              <a href={`/blog/${item.slug}`}>{item.title}</a>
            </div>
          ))}
        </aside>
      </div>
    </Layout>
  );
};

export default ArticlePage;
