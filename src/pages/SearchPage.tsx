import { useSearchParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ArticleCard } from "@/components/articles";
import { searchContent, SearchableItem } from "@/lib/searchIndex";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const SearchResultCard = ({ item }: { item: SearchableItem }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <Link to={item.url} className="text-lg font-semibold text-primary hover:underline">
          {item.title}
        </Link>
        <Badge variant="secondary" className="ml-2 text-xs">
          {item.type}
        </Badge>
      </div>
      <p className="text-muted-foreground mb-2">{item.excerpt}</p>
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="text-xs">
          {item.category}
        </Badge>
        <span className="text-sm text-muted-foreground">{item.url}</span>
      </div>
    </div>
  );
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ q: searchTerm });
    }
  };

  const results = searchContent(query);

  return (
    <Layout>
      <section className="bg-muted/30 py-8 lg:py-12">
        <div className="site-container max-w-4xl text-center">
          <h1 className="mb-6 text-3xl font-bold lg:text-4xl">Search Results</h1>
          
          <form onSubmit={handleSearch} className="flex max-w-lg mx-auto gap-2">
            <Input
              type="search"
              placeholder="Search health topics..."
              className="bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="site-container">
          {query ? (
            <div className="mb-8">
              <p className="text-lg text-muted-foreground">
                Found {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
                <span className="font-semibold text-foreground">"{query}"</span>
              </p>
            </div>
          ) : (
             <div className="mb-8 text-center">
              <p className="text-lg text-muted-foreground">
                Enter a search term to find articles.
              </p>
            </div>
          )}

          <div className="space-y-6">
            {results.map((item) => (
              <SearchResultCard key={item.id} item={item} />
            ))}
          </div>

          {query && results.length === 0 && (
            <div className="py-12 text-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">
                We couldn't find any articles matching your search.
                <br />
                Try checking for typos or using different keywords.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SearchPage;
