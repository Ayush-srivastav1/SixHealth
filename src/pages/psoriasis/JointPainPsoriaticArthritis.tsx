import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { allArticles, findArticleBySlug } from "@/data/allArticles";
import { ArticleCard } from "@/components/articles/ArticleCard";

export default function JointPainPsoriaticArthritis() {
  const article = findArticleBySlug("psoriatic-arthritis");

  const related = allArticles.filter((a) =>
    (a.slug || "").includes("psoriatic") || (a.title || "").toLowerCase().includes("psoriatic")
  );
  const fallback = allArticles.filter((a) => a.category === (article?.category || "conditions")).slice(0, 3);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {}
        <div className="grid gap-6 md:grid-cols-3 items-start mb-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-3">{article?.title ?? "Joint Pain (Psoriatic Arthritis)"}</h1>
            <p className="text-lg text-muted-foreground mb-4">Explore causes, symptoms, diagnosis, and comprehensive management of psoriatic arthritis — the joint-related form of psoriasis.</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <img
                  src={article?.imageUrl || "https://images.unsplash.com/photo-1582719478176-2a1d9b6f8e7e?w=800&h=600&fit=crop"}
                  alt={article?.title ?? "Psoriatic Arthritis"}
                  className="h-12 w-12 rounded object-cover"
                />
                <div>
                  <div className="font-medium">{article?.author || "Rheumatology Editorial Team"}</div>
                  <div className="text-xs text-muted-foreground">Reviewed by {article?.reviewer || "Dr. John Harrison"}</div>
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-sm text-muted-foreground">{article?.readTime ?? "9 min read"}</div>
                <div className="text-xs text-muted-foreground">{article?.date ?? "Feb 1, 2026"}</div>
              </div>
            </div>

            {}
            <div className="border rounded-lg bg-card p-4 mb-6">
              <h3 className="font-semibold mb-2">Table of contents</h3>
              <ul className="space-y-2 text-sm">
                <li><a className="text-primary hover:underline" href="#what-is">What is psoriatic arthritis?</a></li>
                <li><a className="text-primary hover:underline" href="#symptoms">Symptoms to watch for</a></li>
                <li><a className="text-primary hover:underline" href="#causes">Causes & risk factors</a></li>
                <li><a className="text-primary hover:underline" href="#diagnosis">Diagnosis & tests</a></li>
                <li><a className="text-primary hover:underline" href="#treatment">Treatment options</a></li>
                <li><a className="text-primary hover:underline" href="#lifestyle">Lifestyle & self-care</a></li>
                <li><a className="text-primary hover:underline" href="#when-to-see">When to see a doctor</a></li>
                <li><a className="text-primary hover:underline" href="#related">Related articles</a></li>
              </ul>
              <div className="mt-3 text-sm">
                <span className="font-medium">Additional links:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link to="/psoriasis/nail-psoriasis" className="text-sm text-muted-foreground hover:text-primary">Nail Psoriasis</Link>
                  <Link to="/psoriasis/psoriatic-arthritis" className="text-sm text-muted-foreground hover:text-primary">Psoriatic Arthritis</Link>
                  <Link to="/psoriasis/psoriasis" className="text-sm text-muted-foreground hover:text-primary">Psoriasis overview</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src={article?.imageUrl || "https://images.unsplash.com/photo-1582719478176-2a1d9b6f8e7e?w=800&h=1200&fit=crop"}
              alt={article?.title ?? "Psoriatic Arthritis"}
              className="rounded-lg shadow-sm object-cover h-full w-full"
            />
          </div>
        </div>

        {}
        <article className="prose max-w-none prose-lg">
          <h2 id="what-is">What is psoriatic arthritis?</h2>
          <p>
            Psoriatic arthritis (PsA) is an inflammatory arthritis that occurs in people with psoriasis. It can affect any joint in the body, causing pain, stiffness, swelling, and reduced function. PsA is part of a family of diseases called spondyloarthropathies and can vary greatly in pattern and severity — from a single swollen joint to multiple-joint disease with spine involvement. Left untreated, psoriatic arthritis can cause permanent joint damage and disability, so early recognition and treatment are important.
          </p>

          <h2 id="symptoms">Symptoms to watch for</h2>
          <p>
            Symptoms of psoriatic arthritis commonly include:
          </p>
          <ul>
            <li>Joint pain, swelling, and stiffness — often asymmetric (one side more affected than the other)</li>
            <li>Morning stiffness that improves with movement</li>
            <li>Enthesitis — inflammation where tendons and ligaments attach to bone (commonly the Achilles tendon or plantar fascia)</li>
            <li>Dactylitis — "sausage" swelling of an entire finger or toe</li>
            <li>Axial symptoms — lower back or neck pain when the spine is involved</li>
            <li>Fatigue and reduced exercise tolerance</li>
          </ul>

          <h2 id="causes">Causes and risk factors</h2>
          <p>
            The exact cause of psoriatic arthritis is unknown, but it arises from a combination of genetic susceptibility and immune system dysregulation. Certain genes increase risk, and environmental triggers such as infections or mechanical stress may provoke disease in susceptible people. Having psoriasis — particularly with nail involvement — is the strongest risk factor. Other risk factors include a family history of psoriatic arthritis, smoking, obesity, and older age at onset of psoriasis.
          </p>

          <h2 id="diagnosis">Diagnosis: how doctors evaluate joint pain</h2>
          <p>
            Diagnosing psoriatic arthritis requires a careful history and physical exam. No single test definitively proves PsA; instead clinicians use a combination of clinical features, blood tests, imaging, and sometimes referral to a rheumatologist.
          </p>
          <h3>Key steps in the diagnostic process</h3>
          <ul>
            <li><strong>Clinical history:</strong> onset, pattern and timing of joint symptoms, presence of psoriasis or family history.</li>
            <li><strong>Physical exam:</strong> joint tenderness, swelling, range of motion, enthesitis, and dactylitis assessment.</li>
            <li><strong>Blood tests:</strong> inflammatory markers (CRP, ESR) may be elevated but are not specific. Rheumatoid factor/anti-CCP are usually negative in PsA and help distinguish from rheumatoid arthritis.</li>
            <li><strong>Imaging:</strong> X-rays, ultrasound, or MRI can detect joint inflammation, erosions, new bone formation, and enthesitis; MRI and ultrasound are sensitive for early changes.</li>
          </ul>

          <h2 id="treatment">Treatment options</h2>
          <p>
            The primary goals of treatment are to control inflammation, relieve pain, preserve joint function, prevent structural damage, and improve quality of life. Treatment is individualized and often involves a combination of medications, physical therapy, and lifestyle measures.
          </p>

          <h3>Non-drug therapies</h3>
          <ul>
            <li>Physical therapy and targeted exercises to maintain mobility and muscle strength</li>
            <li>Occupational therapy for hand function and activity modification</li>
            <li>Weight loss to reduce joint load and improve response to therapy</li>
          </ul>

          <h3>Medications</h3>
          <p>
            Medication choices depend on disease severity, joint distribution, presence of skin disease, comorbidities, and patient preferences.
          </p>
          <ul>
            <li><strong>NSAIDs:</strong> Useful for short-term relief of pain and stiffness but do not prevent joint damage.</li>
            <li><strong>Conventional DMARDs (disease-modifying antirheumatic drugs):</strong> Methotrexate, sulfasalazine, and leflunomide can reduce inflammation and may slow progression in some patients.</li>
            <li><strong>Biologic therapies:</strong> TNF inhibitors, IL-17 inhibitors, and IL-23 inhibitors target specific immune pathways and are highly effective for many patients with PsA and associated skin disease.</li>
            <li><strong>Targeted synthetic DMARDs:</strong> Agents such as PDE4 inhibitors (apremilast) or JAK inhibitors may be options for some individuals.</li>
          </ul>

          <h3>Surgical options</h3>
          <p>
            Joint replacement or synovectomy may be considered for severe, irreversible joint damage that limits function and quality of life. Surgical decisions are individualized and typically involve orthopedic consultation.
          </p>

          <h2 id="lifestyle">Lifestyle, self-care, and pain management</h2>
          <p>
            Effective self-care complements medical treatment and helps improve long-term outcomes.
          </p>
          <ul>
            <li><strong>Exercise:</strong> Low-impact activities (swimming, cycling) and strength training improve function without overloading joints.</li>
            <li><strong>Pacing and joint protection:</strong> Use assistive devices, ergonomic tools, and activity modification to reduce stress on affected joints.</li>
            <li><strong>Pain management:</strong> Heat, cold therapy, topical analgesics, and prescription medications as recommended by your clinician.</li>
            <li><strong>Mental health:</strong> Address depression or anxiety with counseling, peer support groups, or medication as needed — chronic pain often affects emotional wellbeing.</li>
          </ul>

          <h2 id="when-to-see">When to see a doctor</h2>
          <p>
            Seek medical attention if you have persistent joint pain, swelling, or morning stiffness lasting more than 30 minutes. Early rheumatology referral is recommended when inflammatory arthritis is suspected so that disease-modifying therapy can be considered to prevent damage.
          </p>

          <h2 id="related">Related articles</h2>
          <p className="mb-4">Further reading and related topics from our library:</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(related.length > 0 ? related : fallback).map((a) => (
              <ArticleCard key={a.id} {...a} compact />
            ))}
          </div>

          <h2 className="text-base font-semibold mt-8">Author and review information</h2>
          <p className="text-sm text-muted-foreground">Author: {article?.author ?? "Rheumatology Editorial Team"}</p>
          <p className="text-sm text-muted-foreground">Reviewer: {article?.reviewer ?? "Dr. John Harrison"}</p>

          <h2 className="text-base font-semibold mt-8">Summary</h2>
          <p>
            Psoriatic arthritis is a potentially serious condition that links skin and joint disease. With earlier diagnosis, modern therapies, and a multidisciplinary approach combining rheumatology, dermatology, physical therapy, and lifestyle measures, many people achieve symptom control and maintain function. If you have psoriasis and new joint symptoms, seek evaluation — early treatment can preserve your joints and improve long-term outcomes.
          </p>

          <p className="text-sm text-gray-500 mt-6">This content is for informational purposes only and does not replace professional medical advice.</p>
        </article>
      </div>
    </Layout>
  );
}
