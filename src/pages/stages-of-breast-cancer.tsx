import React from 'react'
import ArticleLayout from '@/components/ArticleLayout'

export default function StagesOfBreastCancer() {
  const toc = [
    { id: 'intro', text: 'Introduction to staging' },
    { id: 'tnm', text: 'The TNM system' },
    { id: 'stage-groups', text: 'Stage groups (I–IV)' },
    { id: 'special', text: 'Special scenarios' },
    { id: 'implications', text: 'How stage guides treatment' },
  ]

  const related = [
    { slug: 'what-is-breast-cancer', title: 'What Is Breast Cancer?' },
    { slug: 'surgery-for-breast-cancer', title: 'Surgery for Breast Cancer' },
    { slug: 'radiation-therapy-guide', title: 'Radiation Therapy Guide' },
  ]

  return (
    <ArticleLayout
      title="Stages of Breast Cancer"
      heroImage="https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp"
      published="February 06, 2026"
      author={{ name: 'Editorial Team', role: 'Medical review: Oncology Board' }}
      toc={toc}
      relatedArticles={related}
    >
      <div className="prose lg:prose-lg">
        <section id="intro">
          <h2>Introduction to staging</h2>
          <p>Staging describes the extent of disease at diagnosis and is essential for treatment planning and prognosis. Modern staging combines tumor size, nodal involvement, and presence of distant spread with biologic markers.</p>
        </section>

        <section id="tnm">
          <h2>The TNM system</h2>
          <p>The TNM system evaluates Tumor (T), regional Nodes (N), and distant Metastasis (M). These components are combined with grade and receptor status to assign an overall stage.</p>
        </section>

        <section id="stage-groups">
          <h2>Stage groups (I–IV)</h2>
          <p>Stages I–II generally indicate localized disease with curative intent, stage III denotes locally advanced disease, and stage IV indicates metastatic disease where systemic therapy is the mainstay.</p>
        </section>

        <section id="special">
          <h2>Special scenarios</h2>
          <p>Some presentations such as inflammatory breast cancer, occult primary, or male breast cancer have unique staging considerations and management implications.</p>
        </section>

        <section id="implications">
          <h2>How stage guides treatment</h2>
          <p>Stage helps determine the need for surgery, radiation, chemotherapy, targeted agents, and the sequencing of these therapies. Multidisciplinary discussion is critical for individualized plans.</p>
        </section>
      </div>
    </ArticleLayout>
  )
}

