import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Menu, X, ChevronDown, User } from "lucide-react";
import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import HealthConditionsDropdown from "@/components/HealthConditionsDropdown";
import ToolsDropdown from "@/components/ToolsDropdown";
import WellnessDropdown from "@/components/WellnessDropdown";
import FeaturedDropdown from "@/components/FeaturedDropdown";
import ConnectDropdown from "@/components/ConnectDropdown";

import { cn } from "@/lib/utils";
import { navigationCategories as categories } from "@/data/categories";
import { sampleArticles } from "@/data/articles";
import { searchContent } from "@/lib/searchIndex";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current page is a sub-page (not home)
  const isSubPage = location.pathname !== "/";

  /* Sticky header shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Enter key search */
  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      setSearchOpen(false);
      setSuggestOpen(false);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  /* Search suggestions */
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const searchResults = searchContent(q).slice(0, 10);

    return searchResults.map((item) => ({
      type: item.type,
      title: item.title,
      href: item.url,
      category: item.category,
    }));
  }, [query]);

  return (
    <>
      {/* TOP BAR - secondary links, centered search, actions */}
      <div className="bg-white border-b border-gray-200">
        <div className="site-container">
          <div className="flex items-center h-12">
            {/* Left: small secondary links (hidden on small screens) */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <Link to="/about" className="hover:text-gray-900">About</Link>
              <Link to="/contact" className="hover:text-gray-900">Contact</Link>
              <Link to="/newsletter" className="hover:text-gray-900">Newsletter</Link>
            </div>

            {/* Center: search (flex-grow and center aligned) */}
            <div className="flex-1 flex justify-center px-4">
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search health topics..."
                    className="w-full pl-10 pr-4 py-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    value={query}
                    onFocus={() => setSuggestOpen(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    onBlur={() => setTimeout(() => setSuggestOpen(false), 200)}
                  />

                  {suggestOpen && suggestions.length > 0 && (
                    <div
                      role="listbox"
                      aria-label="Search suggestions"
                      className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-[9999] max-h-80 overflow-y-auto"
                    >
                      <div className="p-2">
                        <div className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-2 px-2">
                          Search Suggestions
                        </div>
                        <div className="space-y-1">
                          {suggestions.map((suggestion, index) => (
                            <a
                              key={index}
                              href={suggestion.href}
                              role="option"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setQuery(suggestion.title);
                                setSuggestOpen(false);
                                navigate(suggestion.href);
                              }}
                              className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors flex items-center justify-between group bg-white text-gray-900"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                  {suggestion.title}
                                </div>
                                <div className="text-xs text-gray-500 capitalize">
                                  {suggestion.type} • {suggestion.category.replace('-', ' ')}
                                </div>
                              </div>
                              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-blue-600">→</span>
                              </div>
                            </a>
                          ))}
                        </div>
                        {suggestions.length >= 10 && (
                          <div className="mt-3 pt-2 border-t border-gray-100">
                            <Link
                              to={`/search?q=${encodeURIComponent(query)}`}
                              onClick={() => setSuggestOpen(false)}
                              className="w-full block text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium bg-white"
                            >
                              View all results for "{query}"
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: user actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER - Healthline style */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 bg-white",
          scrolled && "shadow-sm"
        )}
      >
        <div className="w-full px-4">
          <div className="site-container flex h-16 items-center justify-start pl-0">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-1.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <img
                  src="/logosix.png"
                  alt="SixHealth logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">
                SixHealth
              </span>
            </Link>

            {/* DESKTOP NAV - Healthline style */}
            <nav className="hidden lg:flex items-center space-x-5">
              <div className="relative group">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition-colors">
                        Health Conditions
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="mt-2">
                        <HealthConditionsDropdown />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              
              {categories.filter((c) => c.id !== "health-conditions").map((category) => (
                <div key={category.title} className="relative group">
                  <Link
                    to={category.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition-colors"
                  >
                    {category.title}
                  </Link>

                  {/* Dropdowns for specific categories */}
                  {category.id === "wellness" ? (
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuContent className="mt-2">
                            <WellnessDropdown />
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : category.id === "tools" ? (
                    <div className="absolute top-full left-0 mt-1 w-[1100px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <ToolsDropdown />
                    </div>
                  ) : category.id === "featured" ? (
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuContent className="mt-2">
                            <FeaturedDropdown />
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : category.id === "connect" ? (
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuContent className="mt-2">
                            <ConnectDropdown />
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : category.extraLinks && category.extraLinks.length > 0 ? (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-4">
                        <div className="mb-3">
                          <Link
                            to={category.href}
                            className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                          >
                            {category.title}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                        </div>
                        <div className="space-y-1">
                          {category.extraLinks.map((sub) => (
                            <Link
                              key={sub.title}
                              to={sub.href}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 lg:hidden bg-white">
            <nav className="site-container py-4">
              <div className="space-y-4">
                {categories.map((category) => (
                  <MobileNavCategory key={category.title} category={category} />
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* BREADCRUMB NAV - For sub-pages */}
      {isSubPage && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="site-container">
            <nav className="flex items-center space-x-2 py-3 text-sm">
              <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 capitalize">
                {location.pathname.split('/').filter(Boolean).join(' / ')}
              </span>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

/* MOBILE CATEGORY */
function MobileNavCategory({
  category,
}: {
  category: (typeof categories)[0];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-left"
      >
        <span className="font-medium text-gray-900">{category.title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="pb-3 pl-4 space-y-2">
          {category.extraLinks?.map((sub) => (
            <Link
              key={sub.title}
              to={sub.href}
              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
