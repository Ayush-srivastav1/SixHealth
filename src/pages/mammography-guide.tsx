import React from 'react'
import ArticleLayout from '@/components/ArticleLayout'

export default function MammographyGuide() {
  const toc = [
    { id: 'intro', text: 'Introduction to mammography' },
    { id: 'types', text: '2D vs 3D (tomosynthesis)' },
    { id: 'screening', text: 'Screening recommendations' },
    { id: 'what-to-expect', text: 'What to expect' },
  ]

  const related = [
    { slug: 'what-is-breast-cancer', title: 'What Is Breast Cancer?' },
    { slug: 'mammography-guide', title: 'Mammography Guide' },
    { slug: 'biopsies-diagnostic-tests', title: 'Biopsies & Diagnostic Tests' },
  ]

  return (
    <ArticleLayout
      title="Mammography Guide"
      published="February 06, 2026"
      author={{ name: 'Editorial Team' }}
      toc={toc}
      relatedArticles={related}
    >
      <div className="prose lg:prose-lg">
        <section id="intro">
          <h2>Introduction to mammography</h2>
          <p>Mammography is the primary screening test for breast cancer and can detect abnormalities before symptoms appear. Understanding the types of mammography and their trade-offs helps patients make informed screening choices.</p>
        </section>

        <section id="types">
          <h2>2D vs 3D (tomosynthesis)</h2>
          <p>2D digital mammography produces flat images, while 3D tomosynthesis acquires multiple slices and improves cancer detection and specificity, especially in dense breasts.</p>
        </section>

        <section id="screening">
          <h2>Screening recommendations</h2>
          <p>Guidelines vary, but many organizations recommend starting routine screening between ages 40–50 and continuing annually or biennially. Higher-risk individuals may start earlier and use supplemental MRI.</p>
        </section>

        <section id="what-to-expect">
          <h2>What to expect</h2>
          <p>Expect brief breast compression during imaging. Procedures are quick and generally well tolerated. Results typically return in days and abnormal findings often require additional imaging or biopsy.</p>
        </section>
      </div>
    </ArticleLayout>
  )
}
