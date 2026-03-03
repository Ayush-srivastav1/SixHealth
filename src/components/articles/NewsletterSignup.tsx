import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  variant?: "inline" | "card" | "banner";
  className?: string;
}

export function NewsletterSignup({ variant = "card", className }: NewsletterSignupProps) {
  if (variant === "inline") {
    return (
      <form className={cn("flex gap-2", className)}>
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
        />
        <Button type="submit" size="sm">
          Subscribe
        </Button>
      </form>
    );
  }

  if (variant === "banner") {
    return (
      <div className={cn("bg-primary py-8", className)}>
        <div className="site-container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-foreground">
                Get Health Tips Delivered Weekly
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Join 50,000+ subscribers receiving evidence-based health advice.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                type="submit"
                variant="secondary"
                className="shrink-0"
              >
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-6",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Mail className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">Stay Updated</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Get the latest health articles, tips, and medical news delivered to your inbox.
      </p>
      <form className="space-y-3">
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit" className="w-full">
          Subscribe to Newsletter
        </Button>
      </form>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
