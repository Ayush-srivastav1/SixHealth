import ArticleLayout from "@/components/ArticleLayout";
import { allArticles, findArticleBySlug } from "@/data/allArticles";

export default function ErythrodermicPsoriasis() {
  const article = findArticleBySlug("erythrodermic-psoriasis");
  return (
    <ArticleLayout
      title={article?.title ?? "Erythrodermic Psoriasis"}
      heroImage={article?.imageUrl}
      author={article?.author ? { name: article.author } : undefined}
      published={article?.publishDate}
      toc={[]}
      relatedArticles={[]}
    >
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{article?.title ?? "Erythrodermic Psoriasis"}</h1>
        <div className="text-gray-700 text-lg space-y-6 leading-relaxed">
          {article?.excerpt ? <p>{article.excerpt}</p> : (
            <p>
              Erythrodermic psoriasis is a rare but severe form of psoriasis that causes widespread, fiery redness and scaling across most of the body surface. It can be life-threatening due to complications including fluid loss, temperature dysregulation, and secondary infections.
            </p>
          )}

          <h2 className="text-2xl font-semibold mt-8">Introduction</h2>

          <p>
            This condition represents a dermatologic emergency in many cases. Triggers include abrupt withdrawal of systemic corticosteroids, severe plaque psoriasis flares, certain infections, and medication reactions. Prompt medical assessment and often inpatient care are required to stabilize and treat patients with erythrodermic psoriasis.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Symptoms</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Widespread redness covering most of the body</li>
            <li>Intense scaling and skin shedding</li>
            <li>Severe itching, pain, and burning</li>
            <li>Systemic symptoms: fever, chills, dehydration, malaise</li>
            <li>Cardiovascular strain and risk of infection</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Causes and Risk Factors</h2>

          <p>
            Erythrodermic psoriasis may occur in people with pre-existing psoriasis as a progression or as a reaction to medications or systemic changes. Sudden cessation of systemic steroids is a well-known precipitant. Other triggers include severe sunburn, infections, or poorly controlled plaque psoriasis.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Diagnosis</h2>

          <p>
            Diagnosis is clinical and urgent. Blood tests, cultures, and skin biopsy may be used to assess complications and exclude other causes of erythroderma. Monitoring for electrolyte disturbances, infection, and organ dysfunction is essential.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Treatment</h2>

          <p>
            Management typically requires hospitalization for stabilization. Treatment focuses on supportive care and rapid control of inflammation.
          </p>

          <h3 className="text-xl font-semibold mt-6">Supportive Care</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Intravenous fluids and correction of electrolyte imbalances</li>
            <li>Temperature regulation and wound care</li>
            <li>Prevention and prompt treatment of secondary infection</li>
            <li>Nutritional support</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Systemic Therapies</h3>

          <p>
            Systemic agents—such as methotrexate, cyclosporine, retinoids, or biologics—are often started under specialist supervision. Choice of agent depends on the patient’s overall health, comorbidities, and previous therapy response.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Prognosis and Follow-up</h2>

          <p>
            With prompt treatment, many patients recover from the acute erythrodermic episode, but long-term management and specialist follow-up are required to prevent recurrence. Patients should be educated about medication adherence and triggers to minimize risk of relapse.
          </p>

          <p className="text-sm text-gray-500 mt-10">
            This content is for informational purposes only and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
