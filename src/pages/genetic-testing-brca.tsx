import React from 'react'
import ArticleLayout from '@/components/ArticleLayout'

export default function GeneticTestingBRCA() {
  const toc = [
    { id: 'intro', text: 'Why test?' },
    { id: 'who', text: 'Who should consider testing' },
    { id: 'types', text: 'Types of testing and results' },
    { id: 'implications', text: 'Implications for patients and families' },
  ]

  const related = [
    { slug: 'genetic-testing-brca', title: 'Genetic Testing (BRCA)' },
    { slug: 'what-is-breast-cancer', title: 'What Is Breast Cancer?' },
    { slug: 'life-after-treatment', title: 'Life After Treatment' },
  ]

  return (
    <ArticleLayout
      title="Genetic Testing (BRCA)"
      published="February 06, 2026"
      author={{ name: 'Editorial Team' }}
      toc={toc}
      relatedArticles={related}
    >
      <div className="prose lg:prose-lg">
        <section id="intro">
          <h2>Why test?</h2>
          <p>Genetic testing identifies inherited mutations (for example, BRCA1/BRCA2) that significantly increase lifetime breast and ovarian cancer risk and influence management choices.</p>
        </section>

        <section id="who">
          <h2>Who should consider testing</h2>
          <p>Individuals with early-onset disease, strong family histories, or specific ancestry (e.g., Ashkenazi Jewish) should discuss testing and counseling with their care team.</p>
        </section>

        <section id="types">
          <h2>Types of testing and results</h2>
          <p>Testing ranges from single-gene BRCA tests to multi-gene panels. Results may be pathogenic, benign, or variants of uncertain significance (VUS), each with different management implications.</p>
        </section>

        <section id="implications">
          <h2>Implications for patients and families</h2>
          <p>Positive results can lead to enhanced surveillance, risk-reducing surgery, and targeted therapies; family members may also benefit from testing. Genetic counseling is recommended.</p>
        </section>
      </div>
    </ArticleLayout>
  )
}
