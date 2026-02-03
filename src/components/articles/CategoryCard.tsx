import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CategoryType } from "./CategoryBadge";
import { 
  Heart,
  Brain, 
  Apple, 
  Dumbbell, 
  Sun,
  AlertCircle,
  Stethoscope,
  Pill,
  Baby,
  Shield,
  Newspaper,
  LucideIcon 
} from "lucide-react";

interface CategoryCardProps {
  category: CategoryType;
  title: string;
  description: string;
  articleCount?: number;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const categoryIcons: Record<CategoryType, LucideIcon> = {
  conditions: Heart,
  wellness: Brain,
  nutrition: Apple,
  fitness: Dumbbell,
  lifestyle: Sun,
  symptoms: AlertCircle,
  treatments: Stethoscope,
  drugs: Pill,
  pregnancy: Baby,
  parenting: Baby,
  "sexual-health": Heart,
  "healthy-aging": Shield,
  news: Newspaper,
};

const categoryGradients: Record<CategoryType, string> = {
  conditions: "from-[hsl(340,65%,47%)] to-[hsl(340,65%,35%)]",
  wellness: "from-[hsl(268,65%,48%)] to-[hsl(270,62%,28%)]",
  nutrition: "from-[hsl(142,50%,45%)] to-[hsl(142,50%,35%)]",
  fitness: "from-[hsl(25,95%,53%)] to-[hsl(25,95%,43%)]",
  lifestyle: "from-[hsl(262,52%,56%)] to-[hsl(262,52%,46%)]",
  symptoms: "from-[hsl(0,84%,60%)] to-[hsl(0,84%,50%)]",
  treatments: "from-[hsl(200,70%,50%)] to-[hsl(200,70%,40%)]",
  drugs: "from-[hsl(120,65%,45%)] to-[hsl(120,65%,35%)]",
  pregnancy: "from-[hsl(330,75%,55%)] to-[hsl(330,75%,45%)]",
  parenting: "from-[hsl(330,75%,55%)] to-[hsl(330,75%,45%)]",
  "sexual-health": "from-[hsl(10,80%,55%)] to-[hsl(10,80%,45%)]",
  "healthy-aging": "from-[hsl(40,90%,50%)] to-[hsl(40,90%,40%)]",
  news: "from-[hsl(220,70%,55%)] to-[hsl(220,70%,45%)]",
};

export function CategoryCard({
  category,
  title,
  description,
  articleCount = 0,
  imageSrc,
  imageAlt,
  className,
}: CategoryCardProps) {
  // Safe lookup: fall back to `Newspaper` if category icon is missing
  const Icon = categoryIcons[category] ?? Newspaper;
  const bgClass = imageSrc ? "bg-cover bg-center" : `bg-gradient-to-br ${categoryGradients[category]}`;
  const style = imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined;

  return (
    <Link
      to={`/${category}`}
      style={style}
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 text-white transition-transform hover:scale-[1.02] h-72 flex flex-col justify-center",
        bgClass,
        className
      )}
    >
      {/* subtle overlay when using an image for contrast */}
      {imageSrc && <div className="absolute inset-0 bg-black/25" />}

      {/* top-left icon overlay (uniform for image and non-image cards) */}
      <div className="absolute top-4 left-4 z-20 inline-flex items-center rounded-full bg-white/20 p-2 backdrop-blur">
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>

      {/* content */}
      <div className="relative z-10 px-2 text-center">
        <h3 className="mb-2 text-2xl font-extrabold">{title}</h3>
        <p className="mb-4 text-sm md:text-base text-white/80">{description}</p>
        <span className="text-sm font-semibold text-white/70">{articleCount} articles</span>
      </div>

      {/* Decorative background icon */}
      {Icon && (
        <Icon className="absolute -bottom-4 -right-4 h-32 w-32 rotate-12 text-white/10 transition-transform group-hover:scale-110" />
      )}
    </Link>
  );
}
