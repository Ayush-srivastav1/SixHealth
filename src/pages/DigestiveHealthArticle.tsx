import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { digestiveHealthData } from "@/data/DigestiveHealth";
import {
  Clock,
  User,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ChevronRight,
} from "lucide-react";
import { contentToString } from "@/lib/articleUtils";

export default function DigestiveHealthArticle() {
  const { slug } = useParams<{ slug: string }>();

  // Find article from all sections
  let article: { title?: string; content?: string | unknown[] } | null = null;
  let sectionTitle = "";

  const sectionNames = [
    "Gut Health Basics",
    "Living with Crohn's Disease",
    "Living with Ulcerative Colitis",
    "Managing IBS",
  ];

  for (let i = 0; i < digestiveHealthData.length; i++) {
    const section = digestiveHealthData[i];
    const found = section.find(
      ([title]: string[]) =>
        title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === slug
    );

    if (found) {
      article = { title: found[0], content: found[1] };
      sectionTitle = sectionNames[i];
      break;
    }
  }

  if (!article) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/conditions/digestive-health"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700"
          >
            Back to Digestive Health
          </Link>
        </div>
      </Layout>
    );
  }

  const articleDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <article>
        {/* Article Header */}
        <header className="border-b bg-white">
          <div className="article-content py-8">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/conditions/digestive-health" className="hover:text-green-600">
                Digestive Health
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="line-clamp-1 text-gray-900 font-medium">
                {article.title}
              </span>
            </nav>

            {/* Category Badge */}
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                {sectionTitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl text-gray-900">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Editorial Team
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {articleDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 min read
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="article-content py-12">
          {/* Featured Image */}
          <img
            src="/placeholder.svg"
            loading="lazy"
            onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg mb-8 bg-gray-200"
          />

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {contentToString(article.content)}
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-b py-6 mb-8 flex flex-wrap items-center gap-4">
            <span className="font-semibold text-gray-900">Share this article:</span>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                <Facebook className="h-4 w-4" />
                Facebook
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 transition">
                <Twitter className="h-4 w-4" />
                Twitter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                <LinkIcon className="h-4 w-4" />
                Copy Link
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              Need more information about Digestive Health?
            </h3>
            <p className="text-green-700 mb-6">
              Explore more articles and resources on our Digestive Health hub.
            </p>
            <Link
              to="/conditions/digestive-health"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition"
            >
              Back to Digestive Health Hub
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
