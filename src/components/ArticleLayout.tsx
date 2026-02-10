import React from "react";
import { Layout } from "@/components/layout";

type Author = {
  name: string;
  role?: string;
  avatar?: string;
};

export default function ArticleLayout({
  title,
  heroImage,
  author,
  published,
  children,
}: {
  title: string;
  heroImage?: string;
  author?: Author;
  published?: string;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-8 prose lg:prose-lg">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold">{title}</h1>
          {published ? (
            <p className="text-xs text-slate-500 mt-1">Published: {published}</p>
          ) : null}
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

        <footer className="mt-8 text-sm text-slate-600">
          <p>
            Disclaimer: This content is for informational purposes only and is not a
            substitute for professional medical advice.
          </p>
        </footer>
      </article>
    </Layout>
  );
}
