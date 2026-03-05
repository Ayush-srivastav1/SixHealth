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
import type { Article as ArticleType } from "@/types/article";

export default function BreastCancerArticleDetail() {
  const { slug } = useParams<{ slug: string }>()

  const article = findArticleBySlug(slug) as ArticleType | undefined;
  const sectionTitle = article?.category || "Breast Cancer"

  if (!article) {
    return (
      <ArticleLayout title="Article Not Found">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
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

  const toc = getHeadingsFromContent(article.content).map((t: string) => ({
    id: t.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    text: t,
  }))

  const relatedArticles = breastCancerSections.flatMap(section =>
    section.articles.filter(a => a.slug !== slug).slice(0, 3).map(relArticle => ({
      slug: relArticle.slug,
      title: relArticle.title,
      imageUrl: (relArticle as unknown as { image?: string }).image || undefined,
      excerpt: relArticle.preview || undefined,
    }))
  )

  return (
    <ArticleLayout
      title={article.title}
      heroImage={article.imageUrl || (article as unknown as { image?: string }).image}
      published={articleDate}
      toc={toc}
      relatedArticles={relatedArticles}
    >
      <div className="mb-8 article-meta border-b pb-6">
        <p>
          Medically reviewed by <span className="font-semibold">Dr. Faith Selchick, DNP, AOCNP</span> — Written by <span className="font-semibold">Editorial Team</span>
        </p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <ArticleContent content={article.content} />
      </div>

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

      {/* Related articles are rendered by ArticleLayout's sidebar; removed duplicate grid */}
    </ArticleLayout>
  )
}
