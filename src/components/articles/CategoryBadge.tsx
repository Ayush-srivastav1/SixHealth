import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type CategoryType = 
  | "conditions" 
  | "wellness" 
  | "nutrition" 
  | "fitness" 
  | "lifestyle"
  | "symptoms"
  | "treatments"
  | "drugs"
  | "pregnancy"
  | "parenting"
  | "sexual-health"
  | "healthy-aging"
  | "news";

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
}

const categoryLabels: Record<CategoryType, string> = {
  conditions: "Conditions",
  wellness: "Wellness",
  nutrition: "Nutrition",
  fitness: "Fitness",
  lifestyle: "Lifestyle",
  symptoms: "Symptoms",
  treatments: "Treatments",
  drugs: "Drugs",
  pregnancy: "Pregnancy",
  parenting: "Parenting",
  "sexual-health": "Sexual Health",
  "healthy-aging": "Healthy Aging",
  news: "News",
};

const categoryColors: Record<CategoryType, string> = {
  conditions: "bg-[hsl(340,65%,47%)]/10 text-[hsl(340,65%,47%)]",
  wellness: "bg-primary/10 text-primary",
  nutrition: "bg-[hsl(142,50%,45%)]/10 text-[hsl(142,50%,45%)]",
  fitness: "bg-[hsl(25,95%,53%)]/10 text-[hsl(25,95%,53%)]",
  lifestyle: "bg-[hsl(262,52%,56%)]/10 text-[hsl(262,52%,56%)]",
  symptoms: "bg-red-500/10 text-red-500",
  treatments: "bg-blue-500/10 text-blue-500",
  drugs: "bg-purple-500/10 text-purple-500",
  pregnancy: "bg-pink-500/10 text-pink-500",
  parenting: "bg-orange-500/10 text-orange-500",
  "sexual-health": "bg-rose-500/10 text-rose-500",
  "healthy-aging": "bg-indigo-500/10 text-indigo-500",
  news: "bg-slate-500/10 text-slate-500",
};

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <Link
      to={`/${category}`}
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium transition-opacity hover:opacity-80",
        categoryColors[category],
        className
      )}
    >
      {categoryLabels[category]}
    </Link>
  );
}
