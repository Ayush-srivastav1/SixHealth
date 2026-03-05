import ArticleLayout from "@/components/ArticleLayout";
import { findArticleBySlug } from "@/data/allArticles";

export default function InversePsoriasis() {
  const article = findArticleBySlug("inverse-psoriasis");
  return (
    <ArticleLayout
      title={article?.title ?? "Inverse Psoriasis"}
      heroImage={article?.imageUrl}
      author={article?.author ? { name: article.author } : undefined}
      published={article?.publishDate}
      toc={[]}
      relatedArticles={[]}
    >
      <div className="text-gray-700 text-lg space-y-6 leading-relaxed">
        {article?.excerpt ? <p>{article.excerpt}</p> : (
          <p>
            Inverse psoriasis, also known as flexural psoriasis, affects skin folds such as the armpits, groin, under the breasts, and around the genitals and buttocks. Instead of the thick, scaly plaques seen in plaque psoriasis, inverse psoriasis typically appears as smooth, red, shiny patches that may be sore and prone to friction-related irritation.
          </p>
        )}

        <h2 className="text-2xl font-semibold mt-8">Introduction</h2>

        <p>
          Because affected areas are often warm and moist, fungal or bacterial infections can complicate inverse psoriasis. The condition can cause significant discomfort and embarrassment due to its location. Management focuses on reducing inflammation, minimizing friction, and treating any secondary infections.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Symptoms</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Smooth, bright-red patches in skin folds</li>
          <li>Soreness or tenderness rather than heavy scaling</li>
          <li>Worsening with friction, sweating, or tight clothing</li>
          <li>Possible secondary infection with increased pain, discharge, or odor</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Causes and Triggers</h2>

        <p>
          Inverse psoriasis is caused by the same immune mechanisms underlying other psoriasis types. Triggers include friction, obesity, excessive sweating, tight clothing, and infections. Family history of psoriasis increases risk, and some systemic medications may trigger or worsen symptoms.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Diagnosis</h2>

        <p>
          Diagnosis is clinical and often straightforward, but dermatologists may perform a skin scraping or swab to rule out fungal infection. If necessary, a biopsy can confirm the diagnosis.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Treatment Options</h2>

        <p>
          Treatment generally aims to reduce inflammation while avoiding irritation of sensitive skin. Choices include low-potency topical corticosteroids, topical calcineurin inhibitors, and careful use of emollients.
        </p>

        <h3 className="text-xl font-semibold mt-6">Topical Treatments</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Low- to mid-potency topical corticosteroids for short courses</li>
          <li>Topical calcineurin inhibitors (tacrolimus, pimecrolimus) to avoid steroid side effects in sensitive areas</li>
          <li>Barrier creams and emollients to reduce friction</li>
          <li>Topical antifungals if a yeast or fungal infection is present</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Systemic Treatments</h3>

        <p>
          For widespread or refractory disease, systemic agents or biologic therapies used for other forms of psoriasis may be effective. The choice depends on the overall disease burden and presence of comorbid conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Lifestyle and Home Care</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Wear loose-fitting, breathable clothing to reduce friction</li>
          <li>Keep folds dry and clean; gently pat dry after bathing</li>
          <li>Choose cotton underwear and moisture-wicking fabrics</li>
          <li>Lose weight if obesity contributes to skin friction</li>
          <li>Avoid long-term use of high-potency topical steroids in folds</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">When to Seek Care</h2>

        <p>
          See a healthcare provider if lesions worsen, if there is increasing pain, fever, or discharge (possible infection), or if topical therapies are ineffective. A dermatologist can tailor therapy to minimize side effects in sensitive areas.
        </p>

        <p className="text-sm text-gray-500 mt-10">
          This content is for informational purposes only and does not replace professional medical advice.
        </p>
      </div>
    </ArticleLayout>
  );
}
