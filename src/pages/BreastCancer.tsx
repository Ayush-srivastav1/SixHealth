import { useState, useRef } from "react";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary"
import { useNavigate } from "react-router-dom"
import { Layout } from "@/components/layout"
import PageLayout from "@/components/layout/PageLayout"
import { breastCancerSections } from "@/data/breastCancerSections"

const tabs = [
  "Basics",
  "Screening & Diagnosis",
  "Treatment",
]

export default function BreastCancer() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    Basics: useRef(null),
    "Screening & Diagnosis": useRef(null),
    Treatment: useRef(null),
  }

  const scrollToSection = (category: string) => {
    sectionRefs[category]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <Layout>
      <PageLayout
        title="Breast Cancer"
        subtitle="Your hub for navigating breast cancer"
        tabs={tabs}
        activeTab={null}
        onTabClick={scrollToSection}
        heroColor="#9333ea"
      >
        <section className="space-y-12">
          {breastCancerSections.map(section => (
            <div
              key={section.id}
              ref={sectionRefs[section.category]}
            >
              <Section section={section} />
            </div>
          ))}

          {}
          <div className="bg-purple-50 border rounded-lg p-8 max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-3">Get weekly updates</h2>
            {!subscribed ? (
              <form
                onSubmit={e => {
                  e.preventDefault()
                  setSubscribed(true)
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="border rounded px-4 py-2"
                  placeholder="Enter your email"
                />
                <button className="bg-purple-700 text-white py-2 rounded">
                  Sign Up
                </button>
              </form>
            ) : (
              <p className="text-green-600 font-medium">
                ✅ Subscribed successfully
              </p>
            )}
          </div>
        </section>
      </PageLayout>
    </Layout>
  )
}

function Section({
  section,
}: {
  section: {
    title: string
    articles: { id: string; title: string; preview: string; slug: string; image: string }[]
  }
}) {
  const navigate = useNavigate()

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map(article => (
          <button
            key={article.id}
            onClick={() =>
              navigate(`/breast-cancer/article/${article.slug}`)
            }
            className="border rounded p-5 bg-white hover:shadow transition text-left"
          >
            <SafeImage
              src={article.image}
              alt={article.title}
              fallbackTopic="breastCancer"
              componentName="BreastCancerCard"
              className="w-full h-36 object-cover rounded mb-3"
            />
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{article.preview}</p>
            <span className="text-purple-700 text-sm inline-block">
              Read more →
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
