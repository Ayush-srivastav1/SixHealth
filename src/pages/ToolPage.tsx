import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolPageProps {
  title?: string;
  description?: string;
  disclaimer?: string;
  children?: React.ReactNode;
}

const ToolPage = ({ title = "Tool", description = "Tool description", disclaimer, children }: ToolPageProps) => {
  return (
    <Layout>
      <div className="container py-8 lg:py-12 max-w-4xl">
        <div className="mb-6">
           <Link to="/tools">
              <Button variant="ghost" size="sm" className="pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
              </Button>
            </Link>
        </div>
        
        <header className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </header>

        <Card className="mb-8 border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle>Calculator</CardTitle>
            <CardDescription>Enter your details below</CardDescription>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
        </Card>

        {disclaimer && (
          <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> {disclaimer}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ToolPage;
