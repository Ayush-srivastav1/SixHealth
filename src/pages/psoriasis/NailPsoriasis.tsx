import ArticleLayout from "@/components/ArticleLayout";

export default function NailPsoriasis() {
  return (
    <ArticleLayout
      title={"Nail Psoriasis"}
      toc={[]}
      relatedArticles={[]}
    >
      <div className="text-gray-700 text-lg space-y-6 leading-relaxed">
          <p>
            Nail psoriasis is a common manifestation in people with psoriasis and can affect fingernails and toenails. Changes range from tiny pits in the nail surface to thickening, discoloration, separation of the nail from the nail bed (onycholysis), and complete nail destruction in severe cases. Nail disease can be painful, reduce hand function, and carry social stigma.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Introduction</h2>

          <p>
            Nail involvement occurs in up to half of people with plaque psoriasis and is even more common among those with psoriatic arthritis. Because nails grow slowly, improvement with treatment may take many months. Successful management often requires a combined topical, intralesional, or systemic approach.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Common Nail Changes</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Pitting: small depressions on the nail surface</li>
            <li>Onycholysis: separation of the nail from the nail bed</li>
            <li>Subungual hyperkeratosis: buildup of keratin under the nail</li>
            <li>Discoloration and thickening of the nail plate</li>
            <li>Crumbly or deformed nails in advanced disease</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Causes and Risk Factors</h2>

          <p>
            Nail psoriasis results from the same immune-mediated inflammation that affects the skin. Trauma to the nail (repeated pressure, manicures, or occupational exposures) can exacerbate nail changes (Koebner phenomenon). A history of psoriatic arthritis increases the likelihood and severity of nail involvement.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Diagnosis</h2>

          <p>
            Diagnosis is usually clinical; however, fungal infection can look similar and should be excluded with a nail clipping or culture. A dermatologist may perform tests when the appearance is atypical or resistant to treatment.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Treatment Options</h2>

          <p>
            Treatment aims to reduce inflammation and improve nail appearance and function. Because nails grow slowly, treatment response may take months and requires patience.
          </p>

          <h3 className="text-xl font-semibold mt-6">Topical and Intralesional Therapies</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Topical corticosteroids applied under occlusion for mild disease</li>
            <li>Topical vitamin D analogs or combination creams</li>
            <li>Intralesional corticosteroid injections for selected nails</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Systemic and Biologic Treatments</h3>

          <p>
            For patients with severe nail disease or concurrent skin and joint involvement, systemic agents including methotrexate, cyclosporine, retinoids, or biologics (TNF inhibitors, IL-17 or IL-23 inhibitors) can improve nail outcomes over time.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Self-Care and Prevention</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Keep nails trimmed short and filed to reduce trauma</li>
            <li>Avoid aggressive manicures and nail-biting</li>
            <li>Use protective gloves for wet work or abrasive tasks</li>
            <li>Treat coexisting fungal infections promptly</li>
          </ul>

          <p className="text-sm text-gray-500 mt-10">
            This content is for informational purposes only and does not replace professional medical advice.
          </p>
        </div>
    </ArticleLayout>
  );
}
