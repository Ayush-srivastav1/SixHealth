import { Layout } from "@/components/layout";
import { findArticleBySlug } from "@/data/allArticles";

export default function PustularPsoriasis() {
  const article = findArticleBySlug("pustular-psoriasis");
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{article?.title ?? "Pustular Psoriasis"}</h1>
        <div className="text-gray-700 text-lg space-y-6 leading-relaxed">
          {article?.excerpt ? <p>{article.excerpt}</p> : (
            <p>
              Pustular psoriasis is an uncommon form of psoriasis characterized by the appearance of white pustules (blisters filled with noninfectious pus) surrounded by red, inflamed skin. It can occur in localized patches—most commonly on the palms and soles—or as a more severe, generalized form that covers large areas of the body and may cause systemic symptoms such as fever, chills, and fatigue.
            </p>
          )}

          <h2 className="text-2xl font-semibold mt-8">Introduction</h2>

          <p>
            Unlike the scaly plaques of plaque psoriasis, pustular psoriasis produces sterile pustules formed by collections of white blood cells. The condition ranges from localized disease that primarily affects quality of life to life-threatening generalized pustular psoriasis that requires urgent medical attention. This article explains causes, risk factors, typical symptoms, treatment approaches, and practical self-care measures.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Symptoms</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Clusters of small, white pustules on red, tender skin</li>
            <li>Pain, itching, or burning at affected sites</li>
            <li>Fever, chills, muscle aches, and malaise (more common in generalized disease)</li>
            <li>Peeling or shedding of large sheets of skin in severe cases</li>
            <li>Thickened, cracked skin on palms and soles in localized forms</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Causes and Risk Factors</h2>

          <p>
            Pustular psoriasis is driven by immune system dysregulation similar to other forms of psoriasis, but certain triggers are more strongly associated with pustular flares. Known triggers include infections, abrupt withdrawal of systemic corticosteroids, certain medications, severe emotional stress, and exposure to irritants. People with a history of plaque psoriasis are at higher risk, and genetic factors also play a role.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Diagnosis</h2>

          <p>
            A healthcare provider diagnoses pustular psoriasis based on clinical examination, history of psoriasis, and pattern of lesions. In uncertain cases a skin biopsy can confirm the diagnosis by showing characteristic histologic findings. Because generalized pustular psoriasis can be accompanied by systemic illness, doctors may order blood tests to evaluate inflammation, fluid-electrolyte balance, and signs of infection.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Treatment Options</h2>

          <p>
            Treatment depends on whether the disease is localized or generalized. Localized pustular psoriasis may respond to topical therapies and targeted interventions, while generalized disease often requires systemic therapy and hospital-level care.
          </p>

          <h3 className="text-xl font-semibold mt-6">Topical and Supportive Care</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Emollients and moisturizing creams to protect skin barrier</li>
            <li>Topical corticosteroids for limited disease</li>
            <li>Keratinolytics (carefully used) to reduce thickening on palms/soles</li>
            <li>Pain control and wound care measures for cracked or weeping skin</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Systemic Therapies</h3>

          <p>
            For widespread or severe pustular psoriasis, systemic medications are commonly used, including oral retinoids (acitretin), methotrexate, cyclosporine, or biologic agents that target specific immune pathways (such as IL-17 or IL-23 inhibitors). Selection of therapy depends on disease severity, comorbidities, patient preferences, and prior treatments.
          </p>

          <h3 className="text-xl font-semibold mt-6">Emergency Care for Generalized Disease</h3>

          <p>
            Generalized pustular psoriasis can cause complications including fluid loss, electrolyte imbalance, secondary infection, and systemic inflammation. Hospital admission, intravenous fluids, and rapid initiation of systemic treatment are often required.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Lifestyle and Management Tips</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Avoid abrupt withdrawal of oral or injected corticosteroids unless under direct supervision</li>
            <li>Identify and treat infections promptly</li>
            <li>Keep affected skin clean and moisturized</li>
            <li>Avoid harsh chemicals and prolonged water exposure that can worsen symptoms</li>
            <li>Coordinate care with dermatology for systemic treatment decisions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">When to See a Doctor</h2>

          <p>
            Seek immediate medical attention if you develop fever, widespread pustules, severe pain, or signs of infection. For localized pustular disease, consult a dermatologist when symptoms are persistent or when they interfere with daily activities.
          </p>

          <p className="text-sm text-gray-500 mt-10">
            This content is for informational purposes only and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </Layout>
  );
}
