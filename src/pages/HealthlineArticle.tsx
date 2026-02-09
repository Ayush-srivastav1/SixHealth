
import { useParams, Navigate, Link } from "react-router-dom";
import { healthlineArticles } from "../data/healthlineArticles";
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
  
  const article = healthlineArticles.find(a => a.id === slug);

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Article Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find this article.</p>
        <Button asChild className="mt-4">
          <Link to="/health">Back to Health Hub</Link>
        </Button>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b">
        <div className="article-content py-3 px-4 text-xs text-gray-500 flex gap-2 items-center">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/health" className="hover:text-gray-900">Health</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{article.title}</span>
        </div>
      </div>

      <div className="article-content py-8 lg:py-12 flex flex-col lg:flex-row gap-12 px-4">
        
        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
            <div className="mb-2">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">{article.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {article.title}
            </h1>

            {/* Author / Reviewer Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mb-8 border-b pb-8">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>By <span className="text-blue-600 underline cursor-pointer">{article.author}</span></span>
                </div>
                {article.reviewer && (
                    <div className="hidden sm:block text-gray-300">|</div>
                )}
                {article.reviewer && (
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Medically reviewed by <span className="text-blue-600 underline cursor-pointer">{article.reviewer}</span></span>
                    </div>
                )}
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Updated on {article.date}</span>
                </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8"><Facebook className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8"><Twitter className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8"><Linkedin className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8"><Mail className="w-4 h-4" /></Button>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 gap-2"><Printer className="w-4 h-4" /> Print</Button>
                </div>
            </div>

            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
                <p className="lead text-xl text-gray-700 mb-8">{article.content}</p>

                {article.keyTakeaways && renderKeyTakeaways(article.keyTakeaways)}

                {/* Mobile TOC */}
                <div className="lg:hidden mb-8">
                    {renderTOC(article.sections)}
                </div>

                {article.sections.map((s) => (
                    <section id={s.id} key={s.id} className="scroll-mt-20">
                    <h2>{s.heading}</h2>
                    <p>{s.body}</p>
                    {/* Random placeholder image for visual variety */}
                    <div className="my-8 rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center text-gray-400">
                        <img 
                            src="/placeholder.svg" 
                            alt={`Illustration for ${s.heading}`} 
                            className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    </section>
                ))}

                <Separator className="my-12" />

                {article.sourceLabel && (
                    <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
                    <div className="font-bold mb-1 flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Sources
                    </div>
                    <div>{article.sourceLabel}</div>
                    </div>
                )}
            </article>

            {/* Newsletter Signup (Dummy) */}
            <div className="mt-16 bg-blue-600 text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-2">Get our wellness newsletter</h3>
                <p className="mb-6 opacity-90">Filter out the noise and nurture your inbox with health and wellness advice that's inclusive and rooted in medical expertise.</p>
                <div className="flex max-w-md mx-auto gap-2">
                    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded text-gray-900" />
                    <Button variant="secondary">Sign Up</Button>
                </div>
                <p className="text-xs mt-4 opacity-75">Your privacy is important to us.</p>
            </div>

        </main>

        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-80 flex-shrink-0">
             {renderTOC(article.sections)}
             
             {/* Ad Placeholder */}
             <div className="mt-8 bg-gray-100 h-[600px] flex items-center justify-center text-gray-400 text-sm border">
                 Advertisement
             </div>

             {/* Read Next */}
             <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Read this next</h4>
                <ul className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <li key={i} className="group cursor-pointer">
                            <div className="aspect-[3/2] bg-gray-200 rounded mb-2 overflow-hidden">
                                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform" />
                            </div>
                            <h5 className="font-bold text-gray-800 group-hover:text-blue-600 leading-tight">
                                5 Ways to Improve Your Health Today
                            </h5>
                        </li>
                    ))}
                </ul>
             </div>
        </aside>

      </div>
    </div>
  );
}
