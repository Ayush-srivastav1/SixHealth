import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Menu, X, ChevronDown, User } from "lucide-react";
import { useEffect, useMemo, useState, useRef, useCallback, type KeyboardEvent } from "react";
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

import { cn } from "@/lib/utils";
import { navigationCategories as categories } from "@/data/categories";
import featuredList from "@/data/featuredList";
import HealthConditionsDropdown from "@/components/HealthConditionsDropdown";
import ToolsDropdown from "@/components/ToolsDropdown";
import WellnessDropdown from "@/components/WellnessDropdown";
import FeaturedDropdown from "@/components/FeaturedDropdown";
import ConnectDropdown from "@/components/ConnectDropdown";
import NavDropdownPanel from "@/components/NavDropdownPanel";
import { searchContent } from "@/lib/searchIndex";

export function Header() {
  const spotlight = [
    { title: "Controlling Ulcerative Colitis", icon: "/icons/colitis.svg", link: "/sponsored-topics" },
    { title: "Navigating Life with Bipolar Disorder", icon: "/icons/bipolar.svg", link: "/sponsored-topics" },
    { title: "Mastering Geographic Atrophy", icon: "/icons/atrophy.svg", link: "/sponsored-topics" },
    { title: "Managing Type 2 Diabetes", icon: "/icons/diabetes.svg", link: "/sponsored-topics" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [dropdownHiddenByFooter, setDropdownHiddenByFooter] = useState(false);
  const [suppressDropdown, setSuppressDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isSubPage = location.pathname !== "/";
  const [hovered, setHovered] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback((delay = 250) => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setHovered(null);
    }, delay) as unknown as number;
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      setSuggestOpen(false);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return searchContent(q).slice(0, 10).map((item) => ({ title: item.title, href: item.url, type: item.type, category: item.category }));
  }, [query]);
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDropdownHiddenByFooter(true);
          } else {
            setDropdownHiddenByFooter(false);
          }
        }
      },
      { root: null, threshold: 0 }
    );

    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {}
      <div className="bg-white border-b border-gray-200">
        <div className="site-container">
          <div className="flex items-center h-12">
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <Link to="/about" className="hover:text-gray-900">About</Link>
              <Link to="/contact" className="hover:text-gray-900">Contact</Link>
              <Link to="/newsletter" className="hover:text-gray-900">Newsletter</Link>
            </div>

            <div className="flex-1 flex justify-center px-4">
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search health topics..."
                    className="w-full pl-10 pr-4 py-2 border-gray-300 rounded-md"
                    value={query}
                    onFocus={() => setSuggestOpen(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    onBlur={() => setTimeout(() => setSuggestOpen(false), 200)}
                  />

                  {suggestOpen && suggestions.length > 0 && (
                    <div role="listbox" aria-label="Search suggestions" className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-[9999] max-h-80 overflow-y-auto">
                      <div className="p-2">
                        <div className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-2 px-2">Search Suggestions</div>
                        <div className="space-y-1">
                          {suggestions.map((s, i) => (
                            <a key={i} href={s.href} onMouseDown={(e) => { e.preventDefault(); setQuery(s.title); setSuggestOpen(false); navigate(s.href); }} className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors flex items-center justify-between group bg-white text-gray-900">
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">{s.title}</div>
                                <div className="text-xs text-gray-500 capitalize">{s.type} • {s.category.replace('-', ' ')}</div>
                              </div>
                              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"><span className="text-xs text-blue-600">→</span></div>
                            </a>
                          ))}
                        </div>
                        {suggestions.length >= 10 && (<div className="mt-3 pt-2 border-t border-gray-100"><Link to={`/search?q=${encodeURIComponent(query)}`} onClick={() => setSuggestOpen(false)} className="w-full block text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium bg-white">View all results for "{query}"</Link></div>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900"><User className="h-4 w-4 mr-2" />Sign In</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {}
      <header className="bg-black sticky top-0 z-50" style={{overflow: 'visible'}}>
        <div className="relative max-w-[1280px] mx-auto px-6 h-[72px] flex items-stretch justify-between" style={{overflow: 'visible'}}>
          <div className="flex items-center text-white text-2xl font-bold">SixHealth</div>

          <nav className="absolute inset-x-0 top-0 h-full flex items-center justify-center" style={{overflow: 'visible'}}>
            <ul className="flex items-center gap-6 text-sm font-semibold text-white h-full" style={{overflow: 'visible'}}>
              {categories.map((category) => {
                const isHub = ["health-conditions","wellness","tools","featured","connect"].includes(category.id);
                const allLinks: { title: string; href: string }[] = [];
                for (const link of category.extraLinks || []) {
                  const l = link as unknown as { title: string; href?: string; subLinks?: Array<{ title: string; href: string }> };
                  if (Array.isArray(l.subLinks)) {
                    allLinks.push(...l.subLinks.map((s) => ({ title: s.title, href: s.href })));
                  } else {
                    allLinks.push({ title: l.title, href: l.href || '#' });
                  }
                }

                const colCount = 3;
                const perCol = Math.max(1, Math.ceil(allLinks.length / colCount));
                const columns = Array.from({ length: colCount }, (_, i) => allLinks.slice(i * perCol, (i + 1) * perCol));

                const isDropdownOpen = isHub && hovered === category.id && !dropdownHiddenByFooter && !suppressDropdown;
                const isHealth = category.id === 'health-conditions';

                return (
                  <li
                    key={category.id}
                    className="flex items-center h-full"
                    style={{ overflow: 'visible' }}
                    onMouseEnter={() => { clearCloseTimer(); setSuppressDropdown(false); setHovered(category.id); }}
                    onMouseLeave={() => scheduleClose()}
                  >
                    <a className="flex items-center h-full text-white hover:text-[#f4b400] transition-colors px-4">{category.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {}
          {hovered && !dropdownHiddenByFooter && !suppressDropdown && (
            (() => {
              const active = categories.find((c) => c.id === hovered);
              if (!active) return null;
              let columns: Array<Array<{ title: string; href: string }>> = [];
              if (active.id === 'featured') {
                const entries = Object.entries(featuredList).map(([slug, title]) => ({ title, href: `/featured/${slug}` }));
                const colCount = 4;
                const perCol = Math.max(1, Math.ceil(entries.length / colCount));
                columns = Array.from({ length: colCount }, (_, i) => entries.slice(i * perCol, (i + 1) * perCol));
              } else {
                const allLinks: { title: string; href: string }[] = [];
                for (const link of active.extraLinks || []) {
                  const l = link as unknown as { title: string; href?: string; subLinks?: Array<{ title: string; href: string }> };
                  if (Array.isArray(l.subLinks)) {
                    allLinks.push(...l.subLinks.map((s) => ({ title: s.title, href: s.href })));
                  } else {
                    allLinks.push({ title: l.title, href: l.href || '#' });
                  }
                }

                const colCount = 3;
                const perCol = Math.max(1, Math.ceil(allLinks.length / colCount));
                columns = Array.from({ length: colCount }, (_, i) => allLinks.slice(i * perCol, (i + 1) * perCol));
              }

              const gridColsClass = active.id === 'featured' || active.id === 'health-conditions' ? 'grid-cols-4' : 'grid-cols-3';

              return (
                <div onMouseEnter={() => clearCloseTimer()} onMouseLeave={() => scheduleClose()}>
                  <NavDropdownPanel
                    className={cn(
                      "absolute left-0 right-0 top-full w-full z-[999] transition-all duration-200",
                      {
                        'opacity-0 pointer-events-none translate-y-2': false,
                        'opacity-100 pointer-events-auto translate-y-0': true,
                      }
                    )}
                    panelClassName="mx-auto max-w-[1280px] px-20 py-10 bg-[#f5efe6] shadow-[0_8px_20px_rgba(0,0,0,0.08)] rounded-md"
                  >
                    <div className={cn("grid gap-10", gridColsClass)}>
                      {active.id === 'featured' ? (
                        columns.map((col, i) => (
                          <div key={i}>
                            <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">{["Health News", "This Just In", "Top Reads", "Video Series"][i] || `Column ${i+1}`}</h5>
                            <div className="space-y-1">{col?.map((l) => (<Link key={l.title} to={l.href} onClick={() => setSuppressDropdown(true)} className="block py-1.5 text-sm text-gray-700 hover:text-[#0b5fff] font-medium">{l.title}</Link>))}</div>
                          </div>
                        ))
                      ) : (
                        <>
                          <div>
                            <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">{active.title}</h5>
                            <div className="space-y-1">{columns[0]?.map((l) => (<Link key={l.title} to={l.href} onClick={() => setSuppressDropdown(true)} className="block py-1.5 text-sm text-gray-700 hover:text-[#0b5fff] font-medium">{l.title}</Link>))}</div>
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Column 2</h5>
                            <div className="space-y-1">{columns[1]?.map((l) => (<Link key={l.title} to={l.href} onClick={() => setSuppressDropdown(true)} className="block py-1.5 text-sm text-gray-700 hover:text-[#0b5fff] font-medium">{l.title}</Link>))}</div>
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Column 3</h5>
                            <div className="space-y-1">{columns[2]?.map((l) => (<Link key={l.title} to={l.href} onClick={() => setSuppressDropdown(true)} className="block py-1.5 text-sm text-gray-700 hover:text-[#0b5fff] font-medium">{l.title}</Link>))}</div>
                          </div>
                          {active.id === 'health-conditions' && (
                            <div>
                              <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Condition Spotlight</h5>
                              <div className="space-y-3">
                                {spotlight.map((item) => (
                                  <Link to={item.link} key={item.title} className="flex items-center gap-3 py-2 hover:underline">
                                    <img src={item.icon} alt={item.title} className="w-12 h-12 rounded-full bg-white p-1 object-contain" />
                                    <span className="text-sm font-medium text-gray-900">{item.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </NavDropdownPanel>
                </div>
              );
            })()
          )}

          <div className="flex items-center lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}</Button>
          </div>
        </div>
      </header>

      {}
      {isSubPage && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="site-container">
            <nav className="flex items-center space-x-2 py-3 text-sm">
              <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 capitalize">{location.pathname.split('/').filter(Boolean).join(' / ')}</span>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

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
