import { useParams, Navigate } from "react-router-dom";

// Import the sections data from CancerCare page
import { sections } from "./CancerCare";

export default function ArticleDetail() {
  const { id } = useParams();

  // Redirect the legacy stub article id 'b2' to the full feature page
  if (id === "b2") {
    return <Navigate to="/conditions/cancer-care/my-experience-melanoma" replace />;
  }

  // Find the article by id
  let foundArticle = null;
  for (const section of sections) {
    const article = section.articles.find((a) => a.id === id);
    if (article) {
      foundArticle = { ...article, section: section.title };
      break;
    }
  }

  if (!foundArticle) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">Article Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find this article.</p>
      </div>
    );
  }

  // Helper renderers
  const renderKeyTakeaways = (takeaways) => (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded bg-purple-700 text-white flex items-center justify-center font-bold">✓</div>
        <h3 className="text-lg font-semibold text-purple-700">Key Takeaways</h3>
      </div>
      <div className="space-y-3">
        {takeaways.map((t, i) => (
          <div key={i} className="bg-white p-4 rounded border">
            <div className="text-sm text-gray-700">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTOC = (sections) => (
    <aside className="w-full md:w-64 p-4 border rounded bg-white mb-6">
      <div className="font-semibold text-gray-700 mb-2">On this page</div>
      <ul className="space-y-2 text-sm text-gray-600">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-purple-700 hover:underline">{s.heading}</a>
          </li>
        ))}
      </ul>
    </aside>
  );

  return (
    <div className="article-content py-12 px-4">
      <header className="bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-lg p-10 mb-8">
        <h1 className="text-4xl font-bold mb-3">{foundArticle.title}</h1>
        <div className="flex gap-3 items-center text-sm opacity-90">
          {foundArticle.author && <span className="bg-white/10 px-3 py-1 rounded">By {foundArticle.author}</span>}
          {foundArticle.reviewer && <span className="bg-white/10 px-3 py-1 rounded">Reviewed by {foundArticle.reviewer}</span>}
          {foundArticle.date && <span className="bg-white/10 px-3 py-1 rounded">Updated {foundArticle.date}</span>}
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <main className="prose prose-lg max-w-none flex-1">
          {foundArticle.keyTakeaways && renderKeyTakeaways(foundArticle.keyTakeaways)}

          <p className="text-lg text-gray-800">{foundArticle.content}</p>

          {foundArticle.sections && foundArticle.sections.map((s) => (
            <section id={s.id} key={s.id} className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">{s.heading}</h2>
              <p className="text-base text-gray-700">{s.body}</p>
            </section>
          ))}

          {foundArticle.sourceLabel && (
            <div className="mt-8 p-4 border rounded bg-gray-50 text-sm">
              <div className="font-semibold mb-1">Source</div>
              <div>{foundArticle.sourceLabel}</div>
            </div>
          )}
        </main>

        {foundArticle.sections && (
          <nav className="hidden lg:block w-64">
            {renderTOC(foundArticle.sections)}
          </nav>
        )}
      </div>
    </div>
  );
}

export { sections }; // For import in router if needed
