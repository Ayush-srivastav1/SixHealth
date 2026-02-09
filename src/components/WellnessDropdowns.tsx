import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type Item = { title: string; href?: string; onClick?: () => void };

interface Props {
  wellnessItems: Item[];
  featureItems: Item[];
  connectItems: Item[];
}

export default function WellnessDropdowns({ wellnessItems, featureItems, connectItems }: Props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="flex gap-4 mb-6">
      <DropdownMenu open={openMenu === "wellness"} onOpenChange={(v) => setOpenMenu(v ? "wellness" : null)}>
        <DropdownMenuTrigger asChild>
          <button onMouseEnter={() => setOpenMenu("wellness")} onMouseLeave={() => setOpenMenu(null)} className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
            Wellness
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent onMouseEnter={() => setOpenMenu("wellness")} onMouseLeave={() => setOpenMenu(null)}>
          <DropdownMenuLabel>Wellness Topics</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {wellnessItems.map((it) => (
            <DropdownMenuItem asChild key={it.title}>
              {it.href ? <Link to={it.href}>{it.title}</Link> : <button onClick={it.onClick}>{it.title}</button>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu open={openMenu === "features"} onOpenChange={(v) => setOpenMenu(v ? "features" : null)}>
        <DropdownMenuTrigger asChild>
          <button onMouseEnter={() => setOpenMenu("features")} onMouseLeave={() => setOpenMenu(null)} className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
            Features
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent onMouseEnter={() => setOpenMenu("features")} onMouseLeave={() => setOpenMenu(null)}>
          <DropdownMenuLabel>Featured</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {featureItems.map((it) => (
            <DropdownMenuItem asChild key={it.title}>
              {it.href ? <Link to={it.href}>{it.title}</Link> : <button onClick={it.onClick}>{it.title}</button>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu open={openMenu === "connect"} onOpenChange={(v) => setOpenMenu(v ? "connect" : null)}>
        <DropdownMenuTrigger asChild>
          <button onMouseEnter={() => setOpenMenu("connect")} onMouseLeave={() => setOpenMenu(null)} className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
            Connect
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent onMouseEnter={() => setOpenMenu("connect")} onMouseLeave={() => setOpenMenu(null)}>
          <DropdownMenuLabel>Connect</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {connectItems.map((it) => (
            <DropdownMenuItem asChild key={it.title}>
              {it.href ? <Link to={it.href}>{it.title}</Link> : <button onClick={it.onClick}>{it.title}</button>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
