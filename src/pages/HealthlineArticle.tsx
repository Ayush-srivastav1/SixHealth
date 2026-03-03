
import { useParams, Navigate, Link } from "react-router-dom";
import { findArticleBySlug } from "@/data/allArticles";
import ArticleRenderer, { ArticleLayout } from "@/components/ArticleRenderer";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Printer, 
  Bookmark, 
  Share2,
  ChevronRight,
  User,
  CheckCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function HealthlineArticle() {
  const { slug } = useParams();
  const renderKeyTakeaways = (takeaways: string[]) => (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
        Key Takeaways
      </h3>
      <ul className="space-y-3">
        {takeaways.map((t, i) => (
          <li key={i} className="flex gap-3 text-gray-800">
             <span className="block w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full flex-shrink-0" />
             {t}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderTOC = (sections: { id: string, heading: string }[]) => (
    <aside className="w-full p-6 bg-gray-50 rounded-lg border border-gray-100 sticky top-4">
      <div className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Table of Contents</div>
      <ul className="space-y-3 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a 
              href={`#${s.id}`} 
              className="text-gray-600 hover:text-blue-600 hover:underline flex items-center gap-2 transition-colors"
            >
              <ChevronRight className="w-3 h-3" />
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );

  const found = findArticleBySlug(slug);
  if (!found) return <div className="max-w-2xl mx-auto py-20 px-4 text-center">Article not found.</div>;

  const rendered = {
    id: found.id,
    slug: found.slug,
    category: found.category,
    title: found.title,
    description: (found as any).description,
    author: found.author,
    authorRole: (found as any).authorRole,
    reviewer: (found as any).reviewer,
    publishDate: (found as any).publishDate,
    updatedDate: (found as any).updatedDate,
    readTime: found.readTime,
    imageUrl: found.imageUrl,
    content: found.content,
  };

  return <ArticleLayout article={rendered as any} />;
}
