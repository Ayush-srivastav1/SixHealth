import { Layout } from "@/components/layout";
import { 
  ArticleCard, 
  CategoryCard, 
  NewsletterSignup,
  CategoryType 
} from "@/components/articles";
import { allArticles } from "@/data/allArticles";
import { navigationCategories } from "@/data/categories";
import { TrendingUp, ArrowRight, Play, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredArticle = allArticles[0];
  const trendingArticles = allArticles.slice(1, 5);
  const latestArticles = allArticles.slice(5, 11);
  const popularArticles = allArticles.slice(0, 6);

  const categories: CategoryType[] = ["conditions", "wellness", "nutrition", "fitness", "lifestyle"];

  // Debug: Log articles
  console.log("allArticles count:", allArticles.length);
  console.log("latestArticles:", latestArticles);

  return (
    <Layout>
      {/* Hero Banner — real photo from Unsplash with WebP source and text overlay */}
      <section className="relative">
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1920&q=80&fm=webp" type="image/webp" />
          <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1920&q=80" alt="Healthcare professionals" className="w-full h-[320px] object-cover block" />
        </picture>

        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to Six Health</h1>
            <p className="mt-3 text-lg text-sky-100">Your trusted health information hub</p>
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <NewsletterSignup variant="banner" />

      {/* Latest Articles Grid */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content - Latest Articles */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Latest Articles</h2>
                <Button variant="ghost" asChild>
                  <Link to="/articles" className="flex items-center gap-1">
                    View all
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Newsletter Card */}
              <NewsletterSignup />

              {/* Popular Articles */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 font-semibold">Popular This Week</h3>
                <div className="space-y-4">
                  {popularArticles.slice(0, 4).map((article) => (
                    <ArticleCard key={article.id} {...article} compact />
                  ))}
                </div>
              </div>

              {/* Video Content Promo */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
                <div className="relative z-10">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Play className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold">Health Video Library</h3>
                  <p className="mb-4 text-sm text-primary-foreground/80">
                    Watch expert-led videos on health topics, exercises, and wellness tips.
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <Link to="/videos">Browse Videos</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Quick Links by Topic */}
      <section className="border-t bg-muted/50 py-8 lg:py-12">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold">Quick Links</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Conditions Quick Links */}
            <div>
              <h3 className="mb-3 font-semibold text-category-conditions">Common Conditions</h3>
              <ul className="space-y-2">
                {["Diabetes", "High Blood Pressure", "Heart Disease", "Asthma", "Arthritis"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wellness Quick Links */}
            <div>
              <h3 className="mb-3 font-semibold text-primary">Wellness Topics</h3>
              <ul className="space-y-2">
                {["Anxiety Relief", "Better Sleep", "Stress Management", "Mindfulness", "Mental Health"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition Quick Links */}
            <div>
              <h3 className="mb-3 font-semibold text-category-nutrition">Nutrition Guides</h3>
              <ul className="space-y-2">
                {["Mediterranean Diet", "Keto Diet", "Plant-Based Eating", "Weight Loss", "Healthy Recipes"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fitness Quick Links */}
            <div>
              <h3 className="mb-3 font-semibold text-category-fitness">Fitness Programs</h3>
              <ul className="space-y-2">
                {["Home Workouts", "Strength Training", "HIIT Exercises", "Yoga & Flexibility", "Running Guide"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
