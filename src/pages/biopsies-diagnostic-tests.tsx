import React from 'react'
import ArticleLayout from '@/components/ArticleLayout'

export default function BiopsiesDiagnosticTests() {
  const toc = [
    { id: 'intro', text: 'Overview' },
    { id: 'imaging', text: 'Diagnostic imaging' },
    { id: 'biopsy-types', text: 'Biopsy techniques' },
    { id: 'pathology', text: 'Pathology and molecular testing' },
  ]

  const related = [
    { slug: 'mammography-guide', title: 'Mammography Guide' },
    { slug: 'biopsies-diagnostic-tests', title: 'Biopsies & Diagnostic Tests' },
    { slug: 'genetic-testing-brca', title: 'Genetic Testing (BRCA)' },
  ]

  return (
    <ArticleLayout
      title="Biopsies & Diagnostic Tests"
      published="February 06, 2026"
      author={{ name: 'Editorial Team' }}
      toc={toc}
      relatedArticles={related}
    >
      <div className="prose lg:prose-lg">
        <section id="intro">
          <h2>Overview</h2>
          <p>When an imaging abnormality or symptom is detected, diagnostic imaging followed by tissue sampling (biopsy) is used to confirm whether cancer is present and to determine tumor biology.</p>
        </section>

        <section id="imaging">
          <h2>Diagnostic imaging</h2>
          <p>Diagnostic mammography, ultrasound, and MRI are commonly used to characterize lesions and guide biopsy planning.</p>
        </section>

        <section id="biopsy-types">
          <h2>Biopsy techniques</h2>
          <p>Core-needle biopsy is the standard for biopsy of suspicious lesions; fine-needle aspiration is less commonly used. Image-guided biopsies (ultrasound, stereotactic, MRI) improve accuracy.</p>
        </section>

        <section id="pathology">
          <h2>Pathology and molecular testing</h2>
          <p>Pathology reports include histologic type, grade, receptor status (ER/PR/HER2), and may recommend genomic assays that refine recurrence risk and chemotherapy benefit.</p>
        </section>
      </div>
    </ArticleLayout>
  )
}
