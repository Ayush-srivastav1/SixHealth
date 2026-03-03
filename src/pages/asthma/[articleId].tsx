import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { 
  ArticleCard, 
  CategoryBadge, 
  MedicalBadge, 
  NewsletterSignup 
} from "@/components/articles";
import { Toc } from "@/components/Toc";
import { ArticleSidebar } from "@/components/ArticleSidebar";
import { allArticles, findArticleBySlug } from "@/data/allArticles";
import { 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleContent, getHeadingsFromContent } from "@/components/ArticleRenderer";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Helper to generate slug from text
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Markdown parsing helpers
interface Section {
  id: string;
  level: number;
  content: string;
}

const parseContent = (content: string) => {
  const lines = content.split('\n');
  const blocks: { type: string; content: string; id?: string }[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push({ type: 'ul', content: JSON.stringify(currentList) });
      currentList = [];
    }
  };

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('## ')) {
      flushList();
      const text = trimmed.substring(3);
      blocks.push({ type: 'h2', content: text, id: slugify(text) });
    } else if (trimmed.startsWith('### ')) {
      flushList();
      const text = trimmed.substring(4);
      blocks.push({ type: 'h3', content: text, id: slugify(text) });
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      currentList.push(trimmed.substring(2));
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        // Simple bold header handling if standalone
         flushList();
         blocks.push({ type: 'strong_p', content: trimmed.replace(/\*\*/g, '') });
    } else {
      flushList();
      blocks.push({ type: 'p', content: trimmed });
    }
  });
  flushList();
  return blocks;
};

export default function AsthmaArticlePage() {
  const { articleId } = useParams();
  
  // Find article using centralized data
  const article: any = findArticleBySlug(articleId);
  const relatedArticles: any[] = article
    ? allArticles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3)
    : [];

  if (!article) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/asthma">Return to Asthma Hub</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Generate TOC items from centralized helper
  const tocItems = getHeadingsFromContent(article.content).map(h => ({ id: slugify(h), label: h }));

  return (
    <Layout>
      <article>
        {/* Header */}
        <header className="border-b bg-card">
          <div className="article-content py-8 px-4 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0" />
              <Link to="/asthma" className="hover:text-foreground">Asthma</Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0" />
              <span className="hover:text-foreground">{article.category}</span>
              <ChevronRight className="h-3 w-3 flex-shrink-0" />
              <span className="text-foreground font-medium">{article.title}</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryBadge category="conditions" />
              {article.category !== "Conditions" && (
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {article.category}
                </span>
              )}
            </div>
            
            <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl lg:leading-tight max-w-4xl">
              {article.title}
            </h1>
            
            <p className="mb-6 text-lg text-muted-foreground max-w-4xl">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground">{article.author}</div>
                  <div className="text-xs">{article.authorRole}</div>
                </div>
              </div>
              
              <div className="h-4 w-px bg-border hidden sm:block" />
              
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Updated {article.updatedDate}
              </span>
            </div>

            {/* Medical Review Badge */}
            <div className="mt-6">
              <MedicalBadge reviewer={article.reviewer} date={article.date} />
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-content py-8 px-4 lg:px-8">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-xl bg-muted">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="article-content pb-16 px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px] xl:gap-16">
            {/* Left Column: Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8 rounded-lg border bg-muted/30 p-4">
                <h3 className="font-semibold mb-2">In This Article</h3>
                <ul className="space-y-2 text-sm">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary block py-1">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Body */}
              <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg">
                <ArticleContent content={article.content} />
              </div>

              {/* Social Sharing */}
              <div className="mt-12 border-t pt-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <span className="font-medium text-lg">Share this article</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600 border-gray-200">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-sky-50 hover:text-sky-500 border-gray-200">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-700 border-gray-200">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-100 border-gray-200">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-12 rounded-xl border bg-card p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="h-16 w-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{article.author}</h3>
                    <p className="text-sm font-medium text-primary mb-3">{article.authorRole}</p>
                    <p className="text-muted-foreground">
                      Dr. {article.author.split(' ').pop()} is a dedicated specialist with over 15 years of experience 
                      in respiratory medicine. They are passionate about patient education and improving 
                      quality of life for those with chronic conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="space-y-8 hidden lg:block">
              {/* Desktop TOC */}
              <div className="sticky top-24">
                <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 px-2">Table of Contents</h3>
                    <nav className="max-h-[calc(100vh-200px)] overflow-y-auto pl-2">
                        <ul className="space-y-3 border-l-2 border-muted pl-4">
                        {tocItems.map(item => (
                            <li key={item.id}>
                            <a 
                                href={`#${item.id}`} 
                                className="block text-sm text-muted-foreground hover:text-primary hover:font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>

                <div className="space-y-6">
                    <NewsletterSignup />
                    <ArticleSidebar />
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="bg-muted/30 py-16 border-t">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((article) => (
                  <ArticleCard 
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    slug={article.slug}
                    category="conditions" 
                    imageUrl={article.imageUrl}
                    author={article.author}
                    readTime={article.readTime}
                    date={article.date}
                    baseUrl="/asthma"
                    className="bg-background"
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}
