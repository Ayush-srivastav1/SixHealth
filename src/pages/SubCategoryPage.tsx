import { useParams, Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ArticleCard, NewsletterSignup } from "@/components/articles";
import { sampleArticles } from "@/data/articles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper to format title from slug
const formatTitle = (slug: string) => {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const SubCategoryPage = () => {
  const { category: paramCategory, subcategory: paramSubcategory } = useParams<{ category: string; subcategory: string }>();
  const location = useLocation();
  
  let category = paramCategory;
  let subcategory = paramSubcategory;

  // Fallback to parsing pathname if params are missing (e.g. static routes)
  if (!category || !subcategory) {
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments.length >= 2) {
      category = segments[0];
      subcategory = segments[1];
    }
  }

  // Format the title
  const title = subcategory ? formatTitle(subcategory) : "Topic";
  const parentCategory = category ? formatTitle(category) : "Category";

  // Filter articles that might match this subcategory (simple keyword matching for now)
  // In a real app, articles would have a 'subcategory' field
  const relatedArticles = sampleArticles.filter(
    (article) =>
      article.category === category &&
      (article.title.toLowerCase().includes(subcategory?.replace("-", " ") || "") ||
       article.excerpt.toLowerCase().includes(subcategory?.replace("-", " ") || ""))
  );

  // If no specific related articles, just show some from the category
  const displayArticles = relatedArticles.length > 0 
    ? relatedArticles 
    : sampleArticles.filter(a => a.category === category).slice(0, 4);

  return (
    <Layout>
      {/* Header */}
      <section className="border-b bg-card py-8 lg:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${category}`} className="hover:text-foreground">{parentCategory}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{title}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <Link to={`/${category}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {parentCategory}
              </Button>
            </Link>
          </div>

          <h1 className="mb-2 text-3xl font-bold lg:text-4xl">{title}</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore our latest articles, guides, and expert advice on {title.toLowerCase()}.
            Everything you need to know about this topic.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Latest in {title}</h2>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {displayArticles.length > 0 ? (
                  displayArticles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))
                ) : (
                  <div className="col-span-2 py-12 text-center text-muted-foreground bg-muted/20 rounded-lg">
                    <p>No articles found specifically for this topic yet.</p>
                    <p className="text-sm mt-2">Check back soon for new content!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <NewsletterSignup />
              
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 font-semibold">Related Topics</h3>
                <div className="space-y-3">
                  <Link
                    to={`/${category}`}
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
                  >
                    <span className="text-sm font-medium">
                      View all {parentCategory}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubCategoryPage;
