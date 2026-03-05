import React from 'react'
import { Link } from 'react-router-dom'
import ArticleLayout from '@/components/ArticleLayout'

export default function WhatIsBreastCancer() {
  const toc = [
    { id: 'introduction', text: 'Introduction' },
    { id: 'basics', text: 'How breast cancer develops' },
    { id: 'types-subtypes', text: 'Types & subtypes' },
    { id: 'risk-factors-prevention', text: 'Risk & prevention' },
    { id: 'screening-early-detection', text: 'Screening' },
    { id: 'signs-symptoms', text: 'Signs & symptoms' },
    { id: 'diagnosis-staging', text: 'Diagnosis & staging' },
    { id: 'treatment-planning', text: 'Treatment planning' },
    { id: 'surgery-options', text: 'Surgery' },
    { id: 'radiation-therapy', text: 'Radiation' },
    { id: 'systemic-therapy', text: 'Systemic therapy' },
    { id: 'managing-side-effects', text: 'Side effects' },
    { id: 'survivorship', text: 'Survivorship' },
    { id: 'resources-links', text: 'Resources' },
  ]

  const relatedArticles = [
    { slug: 'radiation-therapy-guide', title: 'Radiation Therapy Guide', href: '/radiation-therapy-guide' },
    { slug: 'lymphedema-care', title: 'Lymphedema Care', href: '/lymphedema-care' },
    { slug: 'breast-cancer', title: 'Breast Cancer Hub', href: '/breast-cancer' },
  ]

  return (
    <ArticleLayout
      title="What Is Breast Cancer?"
      heroImage="https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp"
      published="February 06, 2026"
      toc={toc}
      relatedArticles={relatedArticles}
    >
      <div className="mb-4 text-sm text-gray-700">
        <div><strong>Author:</strong> Editorial Team • <strong>Medical review:</strong> Dr. Faith Selchick, DNP, AOCNP</div>
        <div className="mt-1 text-xs text-gray-500">Last updated: February 06, 2026 • Peer review: 2025</div>
      </div>

      <div className="prose lg:prose-lg">
          <header className="mb-6">
            <img
              src="https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp"
              onError={(e: any) => { e.target.src = 'https://source.unsplash.com/1200x800/?healthcare&sig=501&auto=format&fit=crop&w=1200&q=80&fm=webp' }}
              alt="Breast cancer awareness ribbon and medical illustration"
              className="w-full h-72 object-cover rounded-md shadow-sm mb-6"
            />

            <h1 className="text-3xl font-extrabold">What Is Breast Cancer?</h1>
            <p className="text-gray-600">A comprehensive, reader-friendly guide explaining how breast cancer develops, how it is diagnosed and staged, treatment options, side-effect management, and advice for living well during and after treatment.</p>

            <div className="mt-4 text-sm text-gray-700">
              <div><strong>Author:</strong> Editorial Team • <strong>Medical review:</strong> Dr. Faith Selchick, DNP, AOCNP</div>
              <div className="mt-1 text-xs text-gray-500">Last updated: February 06, 2026 • Peer review: 2025</div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 19h14M12 11v8"/></svg>
                <span>Medically reviewed</span>
              </div>
            </div>
          </header>

          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              Breast cancer refers to a group of diseases in which malignant (cancer) cells form in the tissues of the breast. It is the most common cancer in women worldwide and can also affect men. Early detection, accurate diagnosis, and personalized treatment have improved outcomes substantially, but understanding the fundamentals helps patients and caregivers make informed decisions.
            </p>
            <p>
              This article explains the biology of breast cancer in accessible language, reviews screening and diagnostic steps, outlines staging and treatment options, and provides practical advice about side-effect management and survivorship. The goal is to equip readers with knowledge to discuss care with their clinical team and to identify reliable next steps.
            </p>
          </section>

          <section id="basics">
            <h2>How Breast Cancer Develops</h2>
            <p>
              All cancers start when cells acquire genetic alterations that change how they grow, divide, or die. In the breast, these changes commonly occur in the ductal or lobular epithelial cells. Most breast cancers arise from a combination of age-related mutations, environmental influences, and, in a minority of cases, inherited mutations that markedly increase risk.
            </p>
            <p>
              Cells gain abilities that let them grow without normal signals, avoid programmed cell death (apoptosis), invade neighboring tissues, and, for some tumors, spread to distant organs (metastasize). Tumor behavior is determined by a mixture of genetic (mutations), epigenetic (gene regulation), and microenvironmental factors (immune cells, blood vessels, and supporting tissue).
            </p>
          </section>

          <section id="types-subtypes">
            <h2>Types and Molecular Subtypes</h2>
            <p>
              Breast cancers are classified by where they start and by key molecular markers tested on biopsy samples. The two most common tissues of origin are:
            </p>
            <ul>
              <li><strong>Ductal carcinoma:</strong> Starts in the milk ducts; invasive ductal carcinoma (IDC) is the most frequent invasive form.</li>
              <li><strong>Lobular carcinoma:</strong> Starts in the milk-producing lobules and can grow in a more diffuse, less nodular pattern.</li>
            </ul>
            <p>
              Tumors are also grouped by receptor status: estrogen receptor (ER), progesterone receptor (PR), and HER2. These markers guide treatment:
            </p>
            <ul>
              <li><strong>ER/PR-positive:</strong> Often responsive to hormone-blocking therapies.</li>
              <li><strong>HER2-positive:</strong> Responds to HER2-targeted drugs (for example, trastuzumab, pertuzumab, and newer agents).</li>
              <li><strong>Triple-negative:</strong> Lacks ER, PR, and HER2; can be more aggressive but sometimes sensitive to chemotherapy or immunotherapy.</li>
            </ul>
            <p>
              Additional genomic assays (e.g., Oncotype DX, MammaPrint) may be used to refine risk estimates and chemotherapy benefit in early-stage disease.
            </p>
          </section>

          <section id="risk-factors-prevention">
            <h2>Risk Factors and Prevention</h2>
            <p>
              Some risk factors are not modifiable: age, female sex, and certain inherited gene mutations (notably BRCA1 and BRCA2). Others are modifiable and can be addressed to lower risk: maintaining a healthy weight, limiting alcohol, staying physically active, and avoiding tobacco.
            </p>
            <p>
              For people with very high inherited risk, options include heightened surveillance (earlier and more frequent screening), chemoprevention with drugs like tamoxifen in certain settings, or risk-reducing surgery. Decisions should involve genetic counseling and shared decision-making with specialists.
            </p>
          </section>

          <section id="screening-early-detection">
            <h2>Screening and Early Detection</h2>
            <p>
              Screening detects cancer before symptoms arise and is associated with earlier stage at diagnosis and better outcomes. Recommendations vary:
            </p>
            <ul>
              <li>Many organizations recommend initiating routine mammography between ages 40–50 and continuing at one- to two-year intervals depending on risk and guideline source.</li>
              <li>People at higher risk (for example, BRCA mutation carriers) typically begin screening earlier and often include MRI in addition to mammography.</li>
            </ul>
            <p>
              Screening has trade-offs: false positives lead to extra imaging and biopsies, while false negatives occur especially in dense breast tissue. Talk with your clinician about individualized screening plans.
            </p>
          </section>

          <section id="signs-symptoms">
            <h2>Signs and Symptoms</h2>
            <p>
              Common signs include a new lump or mass in the breast or armpit, changes in breast shape or size, nipple retraction, or unusual nipple discharge. Many benign conditions also cause lumps, so evaluation with imaging and sometimes biopsy is necessary.
            </p>
            <p>
              If you notice persistent breast changes, seek prompt evaluation. Early detection does not guarantee that cancer will be cured, but it usually improves the range of effective, less-invasive treatments.
            </p>
          </section>

          <section id="diagnosis-staging">
            <h2>Diagnosis and Staging</h2>
            <p>
              The diagnostic pathway typically includes a diagnostic mammogram and targeted ultrasound when a screening abnormality or symptom is present. If imaging shows a suspicious area, a core-needle biopsy obtains tissue for histologic and molecular testing.
            </p>
            <p>
              The pathology report indicates tumor type, grade, receptor status, and other features. Staging combines tumor size (T), nodal involvement (N), and presence of distant metastases (M). Early-stage (stage I–II) disease is generally localized and potentially curable with local and systemic therapy; stage III indicates more extensive local or nodal disease; stage IV denotes metastatic disease managed primarily with systemic treatments aimed at disease control.
            </p>
          </section>

          <section id="treatment-planning">
            <h2>Treatment Planning: Multidisciplinary Care</h2>
            <p>
              Treatment decisions are made by a multidisciplinary team — surgeons, medical oncologists, radiation oncologists, pathologists, radiologists, genetic counselors, and supportive-care clinicians. The plan depends on stage, biology, patient health, and preferences.
            </p>
            <p>
              Common elements include surgery (breast-conserving surgery or mastectomy), radiation therapy (usually after breast-conserving surgery), and systemic therapy (hormone therapy, chemotherapy, HER2-targeted agents, immunotherapy) when indicated.
            </p>
          </section>

          <section id="surgery-options">
            <h2>Surgery</h2>
            <p>
              Surgical options range from lumpectomy (removing the tumor and a margin of normal tissue) to mastectomy (removing the whole breast). Sentinel lymph node biopsy samples a few key axillary lymph nodes to stage the axilla with less morbidity than full axillary dissection.
            </p>
            <p>
              Reconstruction after mastectomy is available and can be immediate or delayed; options include implants or autologous tissue flaps. Discuss timing, expected recovery, and risks with your surgical team.
            </p>
          </section>

          <section id="radiation-therapy">
            <h2>Radiation Therapy</h2>
            <p>
              Radiation reduces the risk of local recurrence and is a standard component after breast-conserving surgery. Modern regimens often use shorter (hypofractionated) schedules over a few weeks. Radiation techniques aim to minimize dose to the heart and lungs.
            </p>
            <p>
              Acute side effects include skin irritation and fatigue; long-term effects can include scarring or, rarely, cardiac or pulmonary effects depending on treated fields. Your radiation oncologist will explain expected benefits and risks.
            </p>
          </section>

          <section id="systemic-therapy">
            <h2>Systemic Therapy</h2>
            <p>
              Systemic therapy treats micrometastatic disease and reduces recurrence risk. Options include:
            </p>
            <ul>
              <li><strong>Hormone therapy:</strong> For ER/PR-positive tumors — tamoxifen for premenopausal patients or aromatase inhibitors for postmenopausal patients; often given for 5–10 years depending on risk.</li>
              <li><strong>Chemotherapy:</strong> Used based on stage and tumor biology; regimens vary and are chosen to balance efficacy and side-effect profiles.</li>
              <li><strong>Targeted therapy:</strong> Her2-directed agents (trastuzumab, pertuzumab, and newer agents) for HER2-positive tumors have substantially improved outcomes.</li>
              <li><strong>Immunotherapy:</strong> In select triple-negative cancers, checkpoint inhibitors combined with chemotherapy can improve outcomes in advanced disease.</li>
            </ul>
          </section>

          <section id="managing-side-effects">
            <h2>Managing Side Effects and Supportive Care</h2>
            <p>
              Side-effect prevention and management are central to keeping patients on effective therapies. Common issues include nausea, fatigue, neuropathy, early menopause symptoms, and lymphedema. Evidence-based interventions — antiemetics, exercise programs, physical therapy, and integrative approaches — can markedly improve quality of life.
            </p>
            <p>
              Fertility preservation should be discussed before treatments that may affect ovarian function. Psychosocial supports, including counseling and peer groups, are important for emotional well-being.
            </p>
          </section>

          <section id="survivorship">
            <h2>Survivorship and Follow-Up</h2>
            <p>
              After active treatment, follow-up care monitors for recurrence, manages late effects, and supports overall health. Typical follow-up includes scheduled visits, annual mammography for the remaining breast tissue, and symptom-driven evaluations. Survivorship care plans summarize treatments received and outline monitoring and health maintenance tasks.
            </p>
            <p>
              Lifestyle measures — regular physical activity, a healthy diet, limited alcohol, smoking cessation, and weight management — reduce the risk of recurrence and improve general health.
            </p>
          </section>

          <section id="emotional-practical">
            <h2>Emotional and Practical Considerations</h2>
            <p>
              A cancer diagnosis affects finances, relationships, work, and mental health. Social workers, financial counselors, and support organizations can help navigate practical challenges. Peer support (in-person or online) often reduces isolation and provides practical tips from others who have been through similar experiences.
            </p>
          </section>

          <section id="faq-detailed">
            <h2>Frequently Asked Questions</h2>
            <h3>How likely is a lump to be cancer?</h3>
            <p>
              Many breast lumps are benign (for example, cysts or fibroadenomas). Imaging and, when indicated, biopsy determine the diagnosis. Prompt evaluation avoids delay when treatment is needed and reduces anxiety when findings are benign.
            </p>
            <h3>Is genetics testing necessary?</h3>
            <p>
              Genetic testing is recommended when personal or family history suggests a hereditary cancer syndrome. A genetics professional can help interpret results and discuss management implications for you and relatives.
            </p>
            <h3>What is the chance of cure?</h3>
            <p>
              Prognosis depends on stage at diagnosis and tumor biology. Many early-stage breast cancers are curable; advanced disease can often be controlled for extended periods with modern therapies. Discuss individualized prognosis with your oncologist.
            </p>
          </section>

          <section id="resources-links">
            <h2>Resources and Additional Links</h2>
            <ul>
              <li><Link to="/radiation-therapy-guide" className="text-purple-600 hover:underline">Radiation Therapy Guide</Link></li>
              <li><Link to="/lymphedema-care" className="text-purple-600 hover:underline">Lymphedema Care</Link></li>
              <li><Link to="/breast-cancer" className="text-purple-600 hover:underline">Breast Cancer Hub</Link></li>
            </ul>
          </section>

          <section id="references">
            <h2>Selected References</h2>
            <p>
              For clinical practice guidelines and primary literature, consult major oncology societies (ASCO, NCCN, ESMO) and peer-reviewed journals. This summary does not replace individualized medical advice — always discuss diagnosis and treatment options with your care team.
            </p>
          </section>

          {/* Related articles moved to ArticleLayout sidebar; removed duplicate grid */}
      </div>
    </ArticleLayout>
  )
}

