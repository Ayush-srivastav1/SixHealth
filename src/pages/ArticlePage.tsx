import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { 
  ArticleCard, 
  CategoryBadge, 
  MedicalBadge, 
  NewsletterSignup,
  CategoryType 
} from "@/components/articles";
import { sampleArticles } from "@/data/articles";
import { sleepArticles } from "@/data/sleepArticles";
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

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Try to find a sleep article by slug
  const sleepArticle = sleepData.find(
    (a) => a.slug === slug
  );

  if (sleepArticle) {
    return (
      <Layout>
        <article>
          <header className="border-b bg-card">
            <div className="w-full px-4 lg:px-8 py-8">
              <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-foreground">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <Link to="/sleep" className="hover:text-foreground capitalize">Sleep</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="line-clamp-1 text-foreground">{sleepArticle.title}</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">
                {sleepArticle.title}
              </h1>
            </div>
          </header>
          <div className="w-full px-4 lg:px-8 py-6">
            <div className="prose max-w-none whitespace-pre-line">
              {sleepArticle.content}
            </div>
          </div>
        </article>
      </Layout>
    );
  }

  const article = sampleArticles.find((a) => a.slug === slug) || sampleArticles[0];
  const relatedArticles = sampleArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Article Header */}
      <article>
        <header className="border-b bg-card">
          <div className="w-full px-4 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to={`/${article.category}`} className="hover:text-foreground capitalize">
                {article.category}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="line-clamp-1 text-foreground">{article.title}</span>
            </nav>

            <CategoryBadge category={article.category as CategoryType} className="mb-4" />
            
            <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">
              {article.title}
            </h1>
            
            <p className="mb-6 text-lg text-muted-foreground">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Written by <span className="font-medium text-foreground">{article.author}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Updated {article.updatedDate}
              </span>
            </div>

            {/* Medical Review Badge */}
            <div className="mt-4">
              <MedicalBadge reviewer={article.reviewer} date={article.date} />
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="w-full px-4 lg:px-8 py-6">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="w-full px-4 lg:px-8 py-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Table of Contents */}
              <div className="mb-8 rounded-lg border bg-muted/50 p-4">
                <h2 className="mb-3 font-semibold">In This Article</h2>
                <nav className="space-y-2">
                  <a href="#overview" className="block text-sm text-muted-foreground hover:text-primary">
                    Overview
                  </a>
                  <a href="#symptoms" className="block text-sm text-muted-foreground hover:text-primary">
                    Signs and Symptoms
                  </a>
                  <a href="#causes" className="block text-sm text-muted-foreground hover:text-primary">
                    Causes and Risk Factors
                  </a>
                  <a href="#treatment" className="block text-sm text-muted-foreground hover:text-primary">
                    Treatment Options
                  </a>
                  <a href="#prevention" className="block text-sm text-muted-foreground hover:text-primary">
                    Prevention Tips
                  </a>
                  <a href="#when-to-see" className="block text-sm text-muted-foreground hover:text-primary">
                    When to See a Doctor
                  </a>
                </nav>
              </div>

              {/* Article Body - Placeholder content */}
              <div className="prose max-w-none">
                <h2 id="overview">Overview</h2>
                <p>
                  This is where your article content will go. The content here is a placeholder 
                  to demonstrate the layout and styling of the article page. Replace this with 
                  your actual article content.
                </p>
                <p>
                  The article template includes all the features you specified: medically reviewed 
                  badges, author attribution, table of contents, related articles, and social 
                  sharing buttons.
                </p>

                <h2 id="symptoms">Signs and Symptoms</h2>
                <p>
                  Understanding the signs and symptoms is crucial for early detection and treatment. 
                  Here are the key indicators to watch for:
                </p>
                <ul>
                  <li>First symptom or sign to watch for</li>
                  <li>Second important symptom</li>
                  <li>Third key indicator</li>
                  <li>Additional symptoms that may occur</li>
                </ul>

                <h2 id="causes">Causes and Risk Factors</h2>
                <p>
                  Multiple factors can contribute to this condition. Understanding these causes 
                  can help with prevention and treatment decisions.
                </p>

                <h2 id="treatment">Treatment Options</h2>
                <p>
                  Treatment approaches vary based on severity and individual factors. Common 
                  treatment options include lifestyle modifications, medications, and in some 
                  cases, surgical interventions.
                </p>

                <h2 id="prevention">Prevention Tips</h2>
                <p>
                  While not all cases can be prevented, adopting healthy lifestyle habits can 
                  significantly reduce your risk:
                </p>
                <ol>
                  <li>Maintain a healthy diet rich in fruits and vegetables</li>
                  <li>Exercise regularly - aim for 150 minutes per week</li>
                  <li>Get adequate sleep each night</li>
                  <li>Manage stress through healthy coping mechanisms</li>
                  <li>Attend regular health screenings</li>
                </ol>

                <h2 id="when-to-see">When to See a Doctor</h2>
                <p>
                  Consult a healthcare provider if you experience any concerning symptoms or 
                  if your condition worsens despite home treatment. Early intervention often 
                  leads to better outcomes.
                </p>
              </div>

              {/* Social Sharing */}
              <div className="mt-8 border-t pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Share2 className="h-4 w-4" />
                    Share this article:
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Share on Facebook">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Share on Twitter">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" aria-label="Share on LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Copy link">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 rounded-lg border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{article.author}</h3>
                    <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A healthcare professional dedicated to providing accurate, evidence-based 
                      health information to help you make informed decisions about your wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <NewsletterSignup />

              {/* Related Articles */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 font-semibold">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <ArticleCard key={relatedArticle.id} {...relatedArticle} compact />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticlePage;
