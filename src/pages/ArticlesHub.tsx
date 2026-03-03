import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ArticleCard, NewsletterSignup } from "@/components/articles";
import { allArticles } from "@/data/allArticles";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticlesHub = () => {
  return (
    <Layout>
      {}
      <section className="border-b bg-card py-8 lg:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">All Articles</span>
          </nav>

          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="mb-2 text-3xl font-bold lg:text-4xl">All Articles</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore our complete collection of health and wellness articles,
            guides, and expert advice on a wide range of medical topics.
          </p>
        </div>
      </section>

      {}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">
                  All Articles ({allArticles.length})
                </h2>
              </div>

              <div className="container grid">
                {allArticles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </div>

            {}
            <div className="space-y-6">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticlesHub;
