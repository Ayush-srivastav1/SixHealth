import { useParams } from "react-router-dom"
import { Layout } from "@/components/layout"
import { breastCancerSections } from "@/data/breastCancerSections";

export default function BreastCancerArticleDetail() {
  const { id } = useParams<{ id: string }>()

  const article = breastCancerSections
    .flatMap(section => section.articles)
    .find(article => article.id === id)

  if (!article) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto py-20">
          <h1 className="text-2xl font-bold">Article not found</h1>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="text-3xl font-bold mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {article.content}
        </p>
      </article>
    </Layout>
  )
}
