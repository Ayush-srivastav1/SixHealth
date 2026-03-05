import { useParams, Link } from "react-router-dom"
import ArticleLayout from "@/components/ArticleLayout"
import { findArticleBySlug } from "@/data/allArticles"
import { breastCancerSections } from "@/data/breastCancerSections"
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
} from "lucide-react"
import { ArticleContent, getHeadingsFromContent } from "@/components/ArticleRenderer"
import type { Article as BlogArticle } from "@/data/allArticles"

export default function BreastCancerArticleDetail() {
  const { slug } = useParams<{ slug: string }>()

  const article = findArticleBySlug(slug) as BlogArticle | undefined
  const sectionTitle = article?.category || "Breast Cancer"

  if (!article) {
    return (
      <ArticleLayout title="Article Not Found" toc={[]} relatedArticles={[]}>
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/breast-cancer"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded font-semibold hover:bg-purple-700"
          >
            Back to Breast Cancer
          </Link>
        </div>
      </ArticleLayout>
    )
  }

  const articleDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")

  const tocItems = getHeadingsFromContent(article.content).map((title: string) => ({
    id: slugify(title),
    text: title,
  }))

  const related = breastCancerSections
    .flatMap((s) => s.articles)
    .filter((a) => a.slug !== slug)
    .slice(0, 6)
    .map((a) => ({ id: a.id, title: a.title, slug: a.slug, href: `/breast-cancer/article/${a.slug}`, imageUrl: a.image }))

  return (
    <ArticleLayout
      title={article.title}
      heroImage={article.imageUrl}
      author={{ name: "Editorial Team" }}
      published={articleDate}
      toc={tocItems}
      relatedArticles={related}
    >
      <article>
        {}
        <header className="border-b bg-white">
          <div className="site-container py-8">
            {}
            <nav className="mb-4 flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-purple-600">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/breast-cancer" className="hover:text-purple-600">
                Breast Cancer
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="line-clamp-1 text-gray-900 font-medium">
                {article.title}
              </span>
            </nav>

            {}
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                {sectionTitle}
              </span>
            </div>

            {}
            <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl text-gray-900">
              {article.title}
            </h1>

            {}
            <div className="flex flex-wrap items-center gap-6 article-meta">
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

        {}
        <div className="article-content py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {}
            <div className="lg:col-span-3">
              {}
              <img
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                className="article-hero mb-8"
              />

              {}
              <div className="mb-8 article-meta border-b pb-6">
                <p>
                  Medically reviewed by <span className="font-semibold">Dr. Faith Selchick, DNP, AOCNP</span> — Written by <span className="font-semibold">Editorial Team</span>
                </p>
              </div>

              {}
              <div className="prose prose-lg max-w-none mb-12">
                <ArticleContent content={article.content} />
              </div>

              {}
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

            {/* Left-side TOC is provided by ArticleLayout; removed page-level 'On this page' card */}
          </div>

          {}
          {/* Related articles are rendered by ArticleLayout's sidebar; removed duplicate grid */}
        </div>
      </article>
    </ArticleLayout>
  )
}
