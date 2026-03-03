import { Link } from "react-router-dom";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  categories: [
    { title: "Conditions A-Z", href: "/conditions" },
    { title: "Wellness", href: "/wellness" },
    { title: "Nutrition", href: "/nutrition" },
    { title: "Fitness", href: "/fitness" },
    { title: "Lifestyle", href: "/lifestyle" },
  ],
  about: [
    { title: "About Us", href: "/about" },
    { title: "Medical Review Process", href: "/medical-review" },
    { title: "Editorial Policy", href: "/editorial-policy" },
    { title: "Contact Us", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Use", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "Advertising Policy", href: "/advertising" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-card">
      {/* Newsletter Section */}
      <div className="border-b bg-primary/5">
        <div className="container py-8">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-2 text-xl font-semibold">
              Subscribe to Our Health Newsletter
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get the latest health tips, medical news, and wellness advice
              delivered to your inbox weekly.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                              <span className="text-xl font-bold">SixHealth</span>

              </div>
            </Link>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              Your trusted source for evidence-based health information. All
              content is medically reviewed by healthcare professionals.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-semibold">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 font-semibold">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} HealthHub. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Medical Disclaimer: Content is for informational purposes only and
            not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
