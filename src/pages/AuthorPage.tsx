import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Globe, CheckCircle2 } from "lucide-react";

interface AuthorPageProps {
  name?: string;
  role?: string;
  bio?: string;
  imageUrl?: string;
  credentials?: string[];
  socials?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

const AuthorPage = ({ name = "Author Name", role = "Medical Writer", bio = "Bio not available", imageUrl, credentials, socials }: AuthorPageProps) => {
  return (
    <Layout>
      <div className="bg-muted/30 py-12">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-background shadow-sm">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{name}</h1>
                  <CheckCircle2 className="h-6 w-6 text-blue-500" />
                </div>
                <p className="text-xl text-muted-foreground">{role}</p>
              </div>

              {credentials && (
                <div className="flex flex-wrap gap-2">
                  {credentials.map((cred) => (
                    <Badge key={cred} variant="secondary">
                      {cred}
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-lg leading-relaxed">{bio}</p>

              <div className="flex gap-2">
                {socials?.twitter && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                )}
                {socials?.linkedin && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {socials?.website && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={socials.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container max-w-4xl py-12">
        <h2 className="text-2xl font-bold mb-6">Recent Articles by {name}</h2>
        {}
        <div className="p-12 text-center border rounded-lg bg-muted/10 text-muted-foreground">
          Articles list component will be integrated here
        </div>
      </div>
    </Layout>
  );
};

export default AuthorPage;
