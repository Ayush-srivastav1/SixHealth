import { Link } from "react-router-dom";
import { CategoryBadge, CategoryType } from "./CategoryBadge";
import { Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: CategoryType;
  imageUrl: string;
  author: string;
  readTime: string;
  date: string;
  featured?: boolean;
  compact?: boolean;
  className?: string;
  baseUrl?: string;
}

export function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  imageUrl,
  author,
  readTime,
  featured = false,
  compact = false,
  className,
  baseUrl = "/article",
}: ArticleCardProps) {
  if (compact) {
    return (
      <article className={cn("group flex gap-3", className)}>
        <Link to={`${baseUrl}/${slug}`} className="shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="h-16 w-16 rounded-md object-cover transition-transform group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <CategoryBadge category={category} className="mb-1 self-start" />
          <Link to={`${baseUrl}/${slug}`}>
            <h4 className="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
              {title}
            </h4>
          </Link>
        </div>
      </article>
    );
  }

  if (featured) {
    return (
      <article
        className={cn(
          "group relative overflow-hidden rounded-xl",
          className
        )}
      >
        <Link to={`${baseUrl}/${slug}`} className="block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <CategoryBadge category={category} className="mb-3" />
            <h2 className="mb-2 text-2xl font-bold leading-tight drop-shadow-sm lg:text-3xl">
              {title}
            </h2>
            <p className="mb-3 line-clamp-2 text-sm text-white/90 lg:text-base">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {readTime}
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-md",
        className
      )}
    >
      <Link to={`/article/${slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <CategoryBadge category={category} className="mb-2" />
        <Link to={`/article/${slug}`}>
          <h3 className="mb-2 line-clamp-2 font-semibold leading-tight group-hover:text-primary">
            {title}
          </h3>
        </Link>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </span>
        </div>
      </div>
    </article>
  );
}
