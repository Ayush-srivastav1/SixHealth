import { Layout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, Activity, Brain, Heart, Baby } from "lucide-react";

const ToolsIndex = () => {
  const tools = [
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index to assess your weight health.",
      icon: Calculator,
      href: "/tools/bmi-calculator",
      color: "text-blue-500",
    },
    {
      title: "Due Date Calculator",
      description: "Estimate your baby's due date based on your last period.",
      icon: Baby,
      href: "/tools/due-date-calculator",
      color: "text-pink-500",
    },
    {
      title: "Heart Rate Zones",
      description: "Find your target heart rate zones for optimal exercise.",
      icon: Heart,
      href: "/tools/heart-rate",
      color: "text-red-500",
    },
    {
      title: "Calorie Calculator",
      description: "Estimate your daily caloric needs for weight maintenance.",
      icon: Activity,
      href: "/tools/calorie-calculator",
      color: "text-green-500",
    },
    {
      title: "Symptom Checker",
      description: "Analyze your symptoms to understand potential causes.",
      icon: Brain,
      href: "/tools/symptom-checker",
      color: "text-purple-500",
    },
  ];

  return (
    <Layout>
      <div className="container py-8 lg:py-12">
        <header className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">Health Tools & Calculators</h1>
          <p className="text-xl text-muted-foreground">
            Interactive tools to help you track, measure, and improve your health.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className={`mb-4 inline-flex p-3 rounded-lg bg-muted ${tool.color}`}>
                  <tool.icon className="h-6 w-6" />
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={tool.href}>Use Tool</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ToolsIndex;
