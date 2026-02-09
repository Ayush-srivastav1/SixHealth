import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { asthmaSections as sections } from "@/data/asthmaArticles";
import {
  Clock,
  User,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function AsthmaArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  // Find the article from sections
  let article: any = null;
  let sectionTitle = "";

  for (const section of sections) {
    const foundArticle = section.articles.find((a) => a.slug === slug);
    if (foundArticle) {
      article = foundArticle;
      sectionTitle = section.title;
      break;
    }
  }

  // If article not found, show error
  if (!article) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/asthma"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
          >
            Back to Asthma
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
          <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/asthma" className="hover:text-blue-600">
                Asthma
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="line-clamp-1 text-gray-900 font-medium">
                {article.title}
              </span>
            </nav>

            {/* Category Badge */}
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
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
                SixHealth Editorial Team
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
        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <img
                src="/placeholder.svg"
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg mb-8 bg-gray-200"
              />

              {/* Author & Review Info */}
              <div className="mb-8 text-sm text-gray-600 border-b pb-6">
                <p>
                  Medically reviewed by <span className="font-semibold">Dr. Emily Stone, MD, FAASM</span> — Written by <span className="font-semibold">SixHealth Editorial Team</span>
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {article.content.split('\n\n').map((paragraph: string, i: number) => {
                    if (!paragraph.trim()) return null
                    
                    // Handle images [IMAGE_RIGHT: /path | caption] - image on right
                    if (paragraph.trim().startsWith('[IMAGE_RIGHT:')) {
                      const match = paragraph.match(/\[IMAGE_RIGHT:\s*(.+?)\s*\|\s*(.+?)\s*\]/);
                      if (match) {
                        return (
                          <div key={i} className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                            <div className="text-gray-700 leading-relaxed">
                              <p>Explore how asthma affects the airways and respiratory system through detailed visual representations.</p>
                            </div>
                            <figure className="flex flex-col">
                              <img 
                                src={match[1]} 
                                alt={match[2]}
                                className="w-full h-72 object-cover rounded-lg mb-3 bg-gray-200"
                              />
                              <figcaption className="text-sm text-gray-600 italic">
                                {match[2]}
                              </figcaption>
                            </figure>
                          </div>
                        )
                      }
                    }
                    
                    // Handle images [IMAGE_LEFT: /path | caption] - image on left
                    if (paragraph.trim().startsWith('[IMAGE_LEFT:')) {
                      const match = paragraph.match(/\[IMAGE_LEFT:\s*(.+?)\s*\|\s*(.+?)\s*\]/);
                      if (match) {
                        return (
                          <div key={i} className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                            <figure className="flex flex-col order-last lg:order-first">
                              <img 
                                src={match[1]} 
                                alt={match[2]}
                                className="w-full h-72 object-cover rounded-lg mb-3 bg-gray-200"
                              />
                              <figcaption className="text-sm text-gray-600 italic">
                                {match[2]}
                              </figcaption>
                            </figure>
                            <div className="text-gray-700 leading-relaxed">
                              <p>Understand the underlying mechanisms and triggers that cause asthma symptoms to develop.</p>
                            </div>
                          </div>
                        )
                      }
                    }
                    
                    // Handle images [IMAGE: /path | caption] - full width
                    if (paragraph.trim().startsWith('[IMAGE:')) {
                      const match = paragraph.match(/\[IMAGE:\s*(.+?)\s*\|\s*(.+?)\s*\]/);
                      if (match) {
                        return (
                          <figure key={i} className="my-8">
                            <img 
                              src={match[1]} 
                              alt={match[2]}
                              className="w-full h-64 object-cover rounded-lg mb-3 bg-gray-200"
                            />
                            <figcaption className="text-sm text-gray-600 text-center italic">
                              {match[2]}
                            </figcaption>
                          </figure>
                        )
                      }
                    }
                    
                    // Handle headings (##)
                    if (paragraph.trim().startsWith('## ')) {
                      const heading = paragraph.trim().replace('## ', '')
                      return (
                        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                          {heading}
                        </h2>
                      )
                    }
                    
                    // Handle bullet points
                    if (paragraph.trim().startsWith('- ')) {
                      const items = paragraph.split('\n').filter(l => l.trim().startsWith('- '))
                      return (
                        <ul key={i} className="list-disc list-inside space-y-2 my-4">
                          {items.map((item: string, j: number) => (
                            <li key={j} className="text-gray-700">
                              {item.replace('- ', '').trim()}
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    
                    // Regular paragraphs
                    return (
                      <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    )
                  })}
                </div>
              </div>

              {/* Share Section */}
              <div className="border-t border-b py-6 mb-8 flex flex-wrap items-center gap-4">
                <span className="font-semibold text-gray-900">Share this article:</span>
                <div className="flex gap-3 flex-wrap">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 transition text-sm">
                    <Twitter className="h-4 w-4" />
                    Twitter X
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-sm">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm">
                    <LinkIcon className="h-4 w-4" />
                    Copy Link
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <div className="bg-gray-50 border rounded-lg p-6">
                  <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-gray-900">
                    <BookOpen className="h-5 w-5" />
                    On this page
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#intro" className="text-blue-600 hover:text-blue-700 block">
                      Overview
                    </a>
                    {article.content.split('\n').filter((l: string) => l.startsWith('## ')).map((heading: string, idx: number) => {
                      const title = heading.replace('## ', '')
                      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      return (
                        <a key={idx} href={`#${id}`} className="text-blue-600 hover:text-blue-700 block">
                          {title}
                        </a>
                      )
                    })}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Read this next</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.flatMap(section =>
                section.articles.filter(a => a.slug !== slug).slice(0, 3).map(relArticle => (
                  <Link
                    key={relArticle.id}
                    to={`/asthma/article/${relArticle.slug}`}
                    className="block p-4 bg-white border rounded hover:shadow-md transition"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relArticle.title}
                    </h4>
                    <p className="text-sm text-blue-600 font-semibold">READ MORE →</p>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
