import React from 'react'
import ArticleLayout from '@/components/ArticleLayout'

export default function TypesOfBreastCancer() {
  const toc = [
    { id: 'intro', text: 'Overview' },
    { id: 'histologic', text: 'Histologic types' },
    { id: 'molecular', text: 'Molecular subtypes' },
    { id: 'implications', text: 'Why type matters' },
  ]

  const related = [
    { slug: 'what-is-breast-cancer', title: 'What Is Breast Cancer?' },
    { slug: 'types-of-breast-cancer', title: 'Types of Breast Cancer' },
    { slug: 'chemotherapy-breast-cancer', title: 'Chemotherapy for Breast Cancer' },
  ]

  return (
    <ArticleLayout
      title="Types of Breast Cancer"
      published="February 06, 2026"
      author={{ name: 'Editorial Team' }}
      toc={toc}
      relatedArticles={related}
    >
      <div className="prose lg:prose-lg">
        <section id="intro">
          <h2>Overview</h2>
          <p>Breast cancer encompasses many histologic and molecular subtypes. Recognizing the type guides prognosis and therapy selection.</p>
        </section>

        <section id="histologic">
          <h2>Histologic types</h2>
          <p>Common histologic types include invasive carcinoma of no special type (formerly invasive ductal carcinoma), invasive lobular carcinoma, and several rarer special subtypes like tubular or mucinous carcinoma.</p>
        </section>

        <section id="molecular">
          <h2>Molecular subtypes</h2>
          <p>Molecular classification by receptor status—ER/PR, HER2—and gene-expression assays (e.g., PAM50) groups tumors into subtypes such as luminal A, luminal B, HER2-enriched, and basal-like (often triple-negative).</p>
        </section>

        <section id="implications">
          <h2>Why type matters</h2>
          <p>Type influences systemic therapy choices (hormone therapy, HER2-targeted agents, chemotherapy), expected patterns of recurrence, and follow-up strategies.</p>
        </section>
      </div>
    </ArticleLayout>
  )
}
