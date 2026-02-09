import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { asthmaSections as sections } from "@/data/asthmaArticles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Helper to map article categories to valid CategoryType
const getCategory = (cat: string): any => {
  const map: Record<string, string> = {
    "Basics": "conditions",
    "Diagnosis": "symptoms", 
    "Treatment": "treatments",
    "Prevention": "wellness"
  };
  return map[cat] || "conditions";
};

export default function Asthma() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter articles based on search
  const filteredSections = sections.map(section => ({
    ...section,
    articles: section.articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Asthma Health Hub</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Comprehensive guides, expert advice, and the latest research on managing asthma effectively.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredSections.length === 0 ? (
           <div className="text-center py-12">
             <p className="text-muted-foreground">No articles found matching your search.</p>
           </div>
        ) : (
          <div className="space-y-16">
            {filteredSections.map((section) => (
              <section key={section.id}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  {section.title}
                  <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {section.articles.length}
                  </span>
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.articles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      slug={article.slug}
                      category={getCategory(article.category)}
                      imageUrl={article.imageUrl}
                      author={article.author}
                      readTime={article.readTime}
                      date={article.date}
                      baseUrl="/asthma"
                      className="h-full bg-background"
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
