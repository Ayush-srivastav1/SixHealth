import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { sampleArticles } from "@/data/articles";


export const HeroSection = () => {
  const featuredArticle = sampleArticles[0];

  return (
    <section className="relative overflow-hidden bg-background py-12 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
              Featured Article
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {featuredArticle.title}
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              {featuredArticle.excerpt}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link to={`/articles/${featuredArticle.slug}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/articles">
                  Browse All Articles
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="font-medium text-foreground mr-2">Written by</span>
                {featuredArticle.author}
              </div>
              <div className="h-4 w-px bg-border" />
              <div>{featuredArticle.readTime}</div>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
            <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
