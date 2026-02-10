import { useParams } from "react-router-dom";
import { articles } from "../../data/articles";

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find(a => a.id === articleId);

  if (!article) return <h1>Article Not Found</h1>;

  return (
    <main>
      <h1>{article.title}</h1>
      {article.sections.map((s, i) => (
        <section key={i}>
          <h2>{s.heading}</h2>
          <p>{s.content}</p>
        </section>
      ))}
    </main>
  );
}
