import React from "react";

type RelatedArticle = { title: string; href: string };

type Props = {
  title: string;
  image?: string;
  content: string;
  author?: string;
  reviewer?: string;
  reviewedDate?: string;
  related?: RelatedArticle[];
};

function renderMarkdownLite(md: string) {
  // Very small markdown -> JSX converter for headings, lists, and paragraphs
  const lines = md.split(/\n/);
  const elems: React.ReactNode[] = [];
  let listBuffer: React.ReactNode[] = [];

  const flushList = () => {
    if (listBuffer.length) {
      elems.push(<ul className="list-disc ml-6 mb-4">{listBuffer.map((l, i) => <li key={i}>{l}</li>)}</ul>);
      listBuffer = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      elems.push(<h2 className="text-xl font-semibold mt-4 mb-2">{line.replace(/^## /, "")}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      elems.push(<h3 className="text-lg font-medium mt-3 mb-1">{line.replace(/^### /, "")}</h3>);
      continue;
    }
    if (line.startsWith("- ")) {
      listBuffer.push(line.replace(/^-\s+/, ""));
      continue;
    }
    // links like - [Name](/path) -> render as anchor
    const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      const text = linkMatch[1];
      const href = linkMatch[2];
      elems.push(
        <p className="mb-2 text-sm text-slate-700">
          <a className="text-blue-600 hover:underline" href={href}>
            {text}
          </a>
        </p>
      );
      continue;
    }
    elems.push(<p className="mb-2 text-slate-700">{line}</p>);
  }
  flushList();
  return elems;
}

export default function EarlyDetectionCard({
  title,
  image = "/images/early-detection.jpg",
  content,
  author = "SixHealth Editorial Team",
  reviewer = "Dr. Faith Selchick, DNP, AOCNP",
  reviewedDate = "February 3, 2026",
  related = [],
}: Props) {
  return (
    <article className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden md:flex md:gap-6 p-6">
      <div className="md:w-2/3">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        <div className="prose max-w-none">{renderMarkdownLite(content)}</div>

        <div className="mt-6 border-t pt-4 text-sm text-slate-600">
          <div>
            <strong>Author:</strong> {author}
          </div>
          <div>
            <strong>Medically reviewed by:</strong> {reviewer}
          </div>
          <div>
            <strong>Last reviewed:</strong> {reviewedDate}
          </div>
        </div>
      </div>

      <aside className="md:w-1/3 mt-6 md:mt-0">
        <div className="sticky top-6 bg-white">
          <div className="mb-4">
            <h3 className="text-sm font-semibold">Additional Links</h3>
            <div className="mt-2">
              {content
                .split(/\n/)
                .filter((l) => l.trim().startsWith("- ["))
                .map((l, idx) => {
                  const m = l.match(/\[(.*?)\]\((.*?)\)/);
                  if (!m) return null;
                  return (
                    <div key={idx} className="text-sm">
                      <a className="text-blue-600 hover:underline" href={m[2]}>
                        {m[1]}
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold">Related articles</h3>
              <ul className="mt-2 list-disc ml-5 text-sm text-slate-700">
                {related.map((r, i) => (
                  <li key={i}>
                    <a className="text-blue-600 hover:underline" href={r.href}>
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </article>
  );
}
