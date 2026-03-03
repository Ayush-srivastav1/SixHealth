import { Link, useNavigate } from "react-router-dom";
import { CategoryBadge, CategoryType } from "./CategoryBadge";
import { Clock, User } from "lucide-react";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";
import { cn } from "@/lib/utils";

export interface ArticleCardProps {
  title: string;
  excerpt?: string;
  slug: string;
  category: CategoryType | string;
  categorySlug?: string;
  imageUrl?: string;
  author?: string;
  readTime?: string;
  date?: string;
  featured?: boolean;
  compact?: boolean;
  className?: string;
  baseUrl?: string;
  forceUrl?: string;
}

export function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  categorySlug,
  imageUrl,
  author,
  readTime,
  featured = false,
  compact = false,
  className,
  baseUrl = "/article",
  forceUrl,
}: ArticleCardProps) {
  const navigate = useNavigate();
  const catSlug = (categorySlug || (typeof category === "string" ? (category as string).toLowerCase().replace(/\s+/g, "-") : "")).toString();
  const articlePath = forceUrl || (catSlug ? `/${catSlug}/article/${slug}` : `${baseUrl}/${slug}`);
  try {
     
    console.debug("ArticleCard path", { id: title, slug, category, categorySlug: catSlug, articlePath });
  } catch (e) {
    // ignore
  }
  const handleClick = () => navigate(articlePath);
  if (compact) {
    return (
      <article onClick={handleClick} className={cn("group flex gap-3 cursor-pointer", className)}>
        <Link to={articlePath} className="shrink-0">
          {imageUrl ? (
            <SafeImage
              src={imageUrl}
              alt={title}
              fallbackTopic="generalHealth"
              componentName="ArticleCardCompact"
              className="h-16 w-16 rounded-md object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center text-sm text-muted-foreground">No image</div>
          )}
        </Link>
        <div className="flex flex-col justify-center">
          <CategoryBadge category={category as CategoryType} className="mb-1 self-start" />
          <Link to={articlePath}>
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
      <article onClick={handleClick}
        className={cn(
          "group relative overflow-hidden rounded-xl cursor-pointer",
          className
        )}
      >
        <Link to={articlePath} className="block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <SafeImage
              src={imageUrl}
              alt={title}
              fallbackTopic="generalHealth"
              componentName="ArticleCardFeatured"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <CategoryBadge category={category as CategoryType} className="mb-3" />
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
    <article onClick={handleClick}
      className={cn(
        "group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-md cursor-pointer",
        className
      )}
    >
      <Link to={articlePath} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <SafeImage
            src={imageUrl}
            alt={title}
            fallbackTopic="generalHealth"
            componentName="ArticleCardDefault"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4 card">
        <CategoryBadge category={category as CategoryType} className="mb-2" />
        <Link to={articlePath}>
          <h3 className="card-title mb-2 line-clamp-2 leading-tight group-hover:text-primary">
            {title}
          </h3>
        </Link>
        <p className="card-desc mb-3 line-clamp-2 text-sm">
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
