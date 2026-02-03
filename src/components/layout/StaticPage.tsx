import { Layout } from "@/components/layout";

interface StaticPageProps {
  title: string;
  description?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const StaticPage = ({ title, description, lastUpdated, children }: StaticPageProps) => {
  return (
    <Layout>
      <div className="container py-8 lg:py-12 max-w-4xl">
        <header className="mb-8 border-b pb-8">
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{title}</h1>
          {description && (
            <p className="text-xl text-muted-foreground">{description}</p>
          )}
          {lastUpdated && (
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          )}
        </header>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default StaticPage;
