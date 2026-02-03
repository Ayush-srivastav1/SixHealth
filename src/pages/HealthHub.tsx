
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { healthlineArticles } from "@/data/healthlineArticles";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ARTICLES_PER_PAGE = 12;

export default function HealthHub() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(healthlineArticles.map(a => a.category)));

  const filteredArticles = healthlineArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Hero Section */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Health Library
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Explore our comprehensive database of medically reviewed articles, guides, and resources.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search for conditions, treatments, or wellness tips..." 
                  className="pl-10 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mt-6">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
                size="sm"
                className="rounded-full"
              >
                All
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                  size="sm"
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? `Search Results (${filteredArticles.length})` : "Latest Articles"}
            </h2>
          </div>

          {currentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/health/${article.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     {/* Placeholder Image */}
                     <img 
                        src="/placeholder.svg" 
                        alt="" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                     <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 px-2 py-1 rounded">Read More</span>
                     </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2">
                        <Badge variant="secondary" className="text-xs font-normal text-blue-700 bg-blue-50 hover:bg-blue-100 border-none">
                            {article.category}
                        </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {article.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t">
                      <span>By {article.author}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
                <Button 
                    variant="link" 
                    onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}
                    className="mt-2"
                >
                    Clear filters
                </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </Button>
              <span className="text-sm font-medium text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
