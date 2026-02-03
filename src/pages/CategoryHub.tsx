import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ArticleCard, CategoryCard, NewsletterSignup, CategoryType } from "@/components/articles";
import { sampleArticles } from "@/data/articles";
import { navigationCategories } from "@/data/categories";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CategoryHub = () => {
  const { category } = useParams<{ category: string }>();
  const validCategory = (category as CategoryType) || "conditions";
  
  const categoryInfo = navigationCategories.find(cat => cat.id === validCategory) || navigationCategories[0];
  const categoryArticles = sampleArticles.filter(
    (article) => article.category === validCategory
  );
  const otherCategories = navigationCategories.filter(cat => cat.id !== validCategory);

  return (
    <Layout>
      {/* Category Header */}
      <section className="border-b bg-card py-8 lg:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{categoryInfo.title}</span>
          </nav>
          <h1 className="mb-2 text-3xl font-bold lg:text-4xl">{categoryInfo.title}</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {categoryInfo.description}
          </p>
          {/* <p className="mt-2 text-sm text-muted-foreground">
            {categoryInfo.articleCount} articles
          </p> */}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">All {categoryInfo.title} Articles</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {categoryArticles.length > 0 ? (
                  categoryArticles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))
                ) : (
                  // Show sample articles if none match
                  sampleArticles.slice(0, 6).map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <NewsletterSignup />
              
              {/* Other Categories */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 font-semibold">Explore Other Topics</h3>
                <div className="space-y-3">
                  {otherCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/${cat.id}`}
                      className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
                    >
                      <span className="text-sm font-medium">
                        {cat.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryHub;

