import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allArticles } from '@/data/allArticles';
import type { Article as ArticleType } from '@/data/allArticles';

export default function BlogList(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 9;
  const totalPosts = allArticles.length;

  const start = (currentPage - 1) * postsPerPage;
  const paginatedPosts: ArticleType[] = allArticles.slice(start, start + postsPerPage);

  return (
    <main className="container py-12">
      <section>
        <h1>Blog</h1>
        <ul>
          {paginatedPosts.map((p) => (
            <li key={p.id}>
              <Link to={`/article/${p.slug}`}>{p.title}</Link>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <nav aria-label="Pagination">
        <button onClick={() => setCurrentPage((c) => Math.max(1, c - 1))} disabled={currentPage <= 1}>
          Previous
        </button>
        <span style={{ margin: '0 8px' }}>{currentPage} / {Math.max(1, Math.ceil(totalPosts / postsPerPage))}</span>
        <button onClick={() => setCurrentPage((c) => Math.min(Math.max(1, Math.ceil(totalPosts / postsPerPage)), c + 1))} disabled={currentPage >= Math.max(1, Math.ceil(totalPosts / postsPerPage))}>
          Next
        </button>
      </nav>
    </main>
  );
}
