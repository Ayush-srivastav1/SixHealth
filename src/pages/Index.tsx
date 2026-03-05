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
import { getImageUrl, imageLibrary } from '@/data/imageLibrary';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredArticle = allArticles[0];
  const trendingArticles = allArticles.slice(1, 5);
  const latestArticles = allArticles.slice(5, 11);
  const popularArticles = allArticles.slice(0, 6);

  // Assign unique images to avoid repeated thumbnails on the homepage
  const assignUniqueImages = (articles: typeof allArticles) => {
    const used = new Set<string>();
    const topics = Object.keys(imageLibrary || {}).filter((k) => k !== 'default');
    let rrIndex = 0;

    return articles.map((a) => {
      // Prefer topic-derived image; fall back to round-robin from the library
      const preferredKey = ((a as any).categorySlug || (a as any).category || 'generalHealth') as string;
      let img = getImageUrl(preferredKey);

      if (used.has(img)) {
        // find next unused topic in round-robin order
        let tries = 0;
        while (tries < topics.length && used.has(getImageUrl(topics[rrIndex % topics.length]))) {
          rrIndex++;
          tries++;
        }
        img = getImageUrl(topics[rrIndex % topics.length]);
        rrIndex++;
      }

      used.add(img);
      return { ...a, imageUrl: img };
    });
  };

  const latestWithImages = assignUniqueImages(latestArticles);
  const trendingWithImages = assignUniqueImages(trendingArticles);
  const popularWithImages = assignUniqueImages(popularArticles.slice(0, 4));

  // Ensure featured article has a topic image as well
  const featuredWithImage = {
    ...featuredArticle,
    imageUrl: getImageUrl((featuredArticle as any).categorySlug || (featuredArticle as any).category || 'generalHealth'),
  };

  const categories: CategoryType[] = ["conditions", "wellness", "nutrition", "fitness", "lifestyle"];

  console.log("allArticles count:", allArticles.length);
  console.log("latestArticles:", latestArticles);

  return (
    <Layout>
      {}
      <section className="relative">
        <picture>
          <source
            srcSet={(() => {
              const u = getImageUrl('default');
              return u.replace(/(\?|&)?w=\d+/g, '') + (u.includes('?') ? '&' : '?') + 'w=1920';
            })()}
            type="image/webp"
          />
          <img
            src={(() => {
              const u = getImageUrl('default');
              return u.replace(/(\?|&)?w=\d+/g, '') + (u.includes('?') ? '&' : '?') + 'w=1920';
            })()}
            alt="Healthcare professionals"
            className="w-full h-[320px] object-cover block"
          />
        </picture>

        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center px-3 sm:px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Welcome to Doctor Six</h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-sky-100">Your trusted health information hub</p>
          </div>
        </div>
      </section>

      {}
      <NewsletterSignup variant="banner" />

      {}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container px-3 sm:px-4">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
            {}
            <div className="lg:col-span-2">
              <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold">Latest Articles</h2>
                <Button variant="ghost" asChild className="text-xs sm:text-sm">
                  <Link to="/articles" className="flex items-center gap-1">
                    View all
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                {latestWithImages.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </div>

            {}
            <aside className="space-y-4 sm:space-y-6">
              {}
              <NewsletterSignup />

              {}
              <div className="rounded-lg sm:rounded-xl border bg-card p-4 sm:p-6">
                <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold">Popular This Week</h3>
                <div className="space-y-3 sm:space-y-4">
                  {popularWithImages.map((article) => (
                    <ArticleCard key={article.id} {...article} compact />
                  ))}
                </div>
              </div>

              {}
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-primary/80 p-4 sm:p-6 text-primary-foreground">
                <div className="relative z-10">
                  <div className="mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="mb-2 text-sm sm:text-base font-semibold">Health Video Library</h3>
                  <p className="mb-4 text-xs sm:text-sm text-primary-foreground/80">
                    Watch expert-led videos on health topics, exercises, and wellness tips.
                  </p>
                  <Button variant="secondary" size="sm" asChild className="text-xs sm:text-sm">
                    <Link to="/videos">Browse Videos</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {}
      <section className="border-t bg-muted/50 py-6 sm:py-8 lg:py-12">
        <div className="container px-3 sm:px-4">
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">Quick Links</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {}
            <div>
              <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-category-conditions">Common Conditions</h3>
              <ul className="space-y-1 sm:space-y-2">
                {["Diabetes", "High Blood Pressure", "Heart Disease", "Asthma", "Arthritis"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {}
            <div>
              <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-primary">Wellness Topics</h3>
              <ul className="space-y-1 sm:space-y-2">
                {["Anxiety Relief", "Better Sleep", "Stress Management", "Mindfulness", "Mental Health"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {}
            <div>
              <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-category-nutrition">Nutrition Guides</h3>
              <ul className="space-y-1 sm:space-y-2">
                {["Mediterranean Diet", "Keto Diet", "Plant-Based Eating", "Weight Loss", "Healthy Recipes"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {}
            <div>
              <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-category-fitness">Fitness Programs</h3>
              <ul className="space-y-1 sm:space-y-2">
                {["Home Workouts", "Strength Training", "HIIT Exercises", "Yoga & Flexibility", "Running Guide"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
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
