import ArticleLayout from "@/components/ArticleLayout";
import { findArticleBySlug } from "@/data/allArticles";

export default function PlaquePsoriasis() {
  const article = findArticleBySlug("plaque-psoriasis");
  return (
    <ArticleLayout
      title={article?.title ?? "Plaque Psoriasis"}
      heroImage={article?.imageUrl}
      author={article?.author ? { name: article.author } : undefined}
      published={article?.publishDate}
      toc={[]}
      relatedArticles={[]}
    >
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{article?.title ?? "Plaque Psoriasis"}</h1>
        <div className="text-gray-700 text-lg space-y-6 leading-relaxed">

          {article?.excerpt ? <p>{article.excerpt}</p> : (
            <p>
              Plaque psoriasis is the most common and widely recognized form of psoriasis, a chronic immune-mediated condition that affects the skin. It is characterized by well-defined, raised patches of red (or pink) skin covered with silvery-white scales. These plaques can occur anywhere on the body but are most commonly found on the scalp, elbows, knees, lower back, and around the nails. Although the severity of plaque psoriasis varies widely—from small areas of localized involvement to nearly full-body coverage—the condition can cause significant physical discomfort and emotional distress for many patients.
            </p>
          )}

          <h2 className="text-2xl font-semibold mt-8">Introduction: What Is Plaque Psoriasis?</h2>

          <p>
            Plaque psoriasis results from a complex interplay between the immune system, genetics, and environmental triggers. In healthy skin, keratinocytes (skin cells) go through a regulated cycle of growth and shedding that takes about a month. In psoriasis, immune system signals accelerate this process, producing new skin cells in days rather than weeks. The result is an accumulation of immature skin cells on the surface that form the characteristic scales and plaques.
          </p>

          <p>
            The onset of plaque psoriasis typically occurs in early adulthood, though it can start at any age. Some individuals have a family history of psoriasis, while others develop the condition without a clear genetic link. While the disease is not contagious, its visible nature and potential for chronic flares can lead to social stigma and reduced quality of life.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Epidemiology and Risk Factors</h2>

          <p>
            Psoriasis affects approximately 2–3% of the global population, with plaque psoriasis representing the majority of cases. Risk factors include a family history of psoriasis, certain genetic markers (for example, HLA-C*06:02), infections, psychological stress, skin injury (Koebner phenomenon), smoking, heavy alcohol use, and certain medications such as beta-blockers and lithium.
          </p>

          <p>
            The disease affects men and women roughly equally. Onset often occurs in two peaks: one in late adolescence to early adulthood, and another in middle age. Comorbid conditions, including metabolic syndrome, cardiovascular disease, and depression, are more common in people with moderate to severe plaque psoriasis.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Pathophysiology: How Plaque Psoriasis Develops</h2>

          <p>
            Plaque psoriasis is an immune-driven disease. Key players include dendritic cells, T lymphocytes (especially Th17 and Th1 subsets), and keratinocytes. These immune cells release inflammatory cytokines—molecules such as tumor necrosis factor (TNF), interleukin-17 (IL-17), and interleukin-23 (IL-23)—which promote keratinocyte proliferation and sustain chronic inflammation. This cascade explains why modern therapeutic strategies targeting these cytokines (biologics) are highly effective in many patients.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Clinical Presentation: Signs and Symptoms</h2>

          <p>
            The hallmark of plaque psoriasis is the presence of sharply demarcated, thickened plaques with silvery scaling. Common symptoms include itching, burning, and tenderness. The scalp is frequently involved and may cause flaking and hairline extension. Nail changes—such as pitting, ridging, onycholysis (nail separation), and subungual hyperkeratosis—occur in a substantial subset of individuals and can be particularly challenging to treat.
          </p>

          <p>
            The severity of plaque psoriasis is often measured by the percentage of body surface area affected, the Psoriasis Area and Severity Index (PASI), or the impact on quality of life. Mild disease typically involves limited areas and can often be controlled with topical treatments, whereas moderate to severe disease may require phototherapy, systemic medications, or biologic agents.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Diagnosis and Evaluation</h2>

          <p>
            Diagnosis is primarily clinical, based on the appearance and distribution of lesions. A thorough history should include onset, triggers, family history, previous treatments, and the presence of joint pain that might suggest psoriatic arthritis. In atypical cases, a skin biopsy can confirm the diagnosis by showing characteristic histologic features such as epidermal hyperplasia, parakeratosis, and a diminished granular layer.
          </p>

          <p>
            Because plaque psoriasis can be associated with systemic comorbidities—such as cardiovascular disease, metabolic syndrome, and depression—clinicians often screen for these conditions, particularly in patients with moderate to severe disease. Baseline blood tests may be obtained before initiating certain systemic therapies.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Differential Diagnosis</h2>

          <p>
            Several other skin disorders can mimic plaque psoriasis and should be considered, including eczema (atopic dermatitis), seborrheic dermatitis, tinea corporis (ringworm), lichen planus, and cutaneous lupus erythematosus. Fungal infections and secondary bacterial infections can complicate psoriasis and change treatment decisions, so appropriate laboratory testing is sometimes necessary.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Goals of Treatment</h2>

          <p>
            The primary objectives are to reduce inflammation, clear plaques, prevent complications, improve symptoms (itching, pain), restore function (especially with nail or scalp involvement), and enhance quality of life. Treatment is individualized and takes into account disease severity, lesion location, comorbidities, patient preferences, and safety considerations.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Topical Treatments</h2>

          <p>
            For mild, localized plaque psoriasis, topical therapies are the mainstay of treatment. Common topical agents include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Topical corticosteroids:</strong> Varying potencies are used depending on location and severity. Potent steroids can be effective for short courses but long-term use requires monitoring for skin thinning and other adverse effects.</li>
            <li><strong>Vitamin D analogs (calcipotriene):</strong> These normalize keratinocyte proliferation and are often combined with corticosteroids for improved efficacy.</li>
            <li><strong>Coal tar and salicylic acid:</strong> Useful for reducing scaling and thick plaques; coal tar formulations are time-tested but can be messy and odorous.</li>
            <li><strong>Topical retinoids:</strong> Sometimes used for localized disease, with particular attention to side effects such as irritation.</li>
            <li><strong>Emollients:</strong> Regular use of moisturizers reduces scaling and helps maintain the skin barrier, alleviating itch and discomfort.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Phototherapy</h2>

          <p>
            Phototherapy—especially narrowband UVB—is effective for moderate and widespread plaque psoriasis. Typically administered in outpatient clinics two to three times weekly, phototherapy reduces inflammation and slows keratinocyte proliferation. Treatment adherence and access are considerations, as multiple visits are required. Phototherapy is also useful in children and pregnant patients where systemic agents are undesirable.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Systemic Therapies</h2>

          <p>
            For moderate to severe plaque psoriasis or disease refractory to topicals and phototherapy, systemic medications are options. These include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Methotrexate:</strong> An immunosuppressive agent effective for skin and joint disease; monitoring for hepatic, hematologic, and pulmonary toxicity is required.</li>
            <li><strong>Cyclosporine:</strong> Rapidly effective but associated with nephrotoxicity and hypertension, so often used short-term.</li>
            <li><strong>Acitretin:</strong> An oral retinoid helpful for pustular and erythrodermic variants; teratogenic and requires contraception in women of childbearing potential.</li>
            <li><strong>Biologic agents:</strong> Targeted therapies (e.g., TNF inhibitors, IL-17 inhibitors, IL-23 inhibitors) have revolutionized the treatment of moderate to severe psoriasis, offering high rates of skin clearance and improved safety profiles compared with older systemic agents for many patients.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Selecting a Therapy</h2>

          <p>
            Choice of therapy is individualized. Factors that guide selection include disease severity, prior treatment response, comorbid conditions (for example, inflammatory bowel disease or multiple sclerosis may influence biologic choice), pregnancy plans, cost and coverage, patient preference, and safety monitoring requirements. Shared decision-making between patient and clinician is essential.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Managing Comorbidities</h2>

          <p>
            Plaque psoriasis is associated with an increased risk of several systemic conditions, including psoriatic arthritis, cardiovascular disease, metabolic syndrome (obesity, diabetes, dyslipidemia), and depression. Regular screening for joint symptoms and cardiometabolic risk factors is recommended, particularly in patients with moderate to severe disease. Addressing these comorbidities through lifestyle modification and medical management can improve overall health outcomes.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Lifestyle and Self-Care Strategies</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Moisturizing:</strong> Daily emollient use reduces scaling and itching and improves tolerance of topical agents.</li>
            <li><strong>Smoking cessation and alcohol moderation:</strong> Both smoking and heavy alcohol use are linked to worse psoriasis and treatment resistance.</li>
            <li><strong>Weight management:</strong> Obesity is associated with increased psoriasis severity; weight loss can improve outcomes and treatment response.</li>
            <li><strong>Stress reduction:</strong> Stress is a known trigger; interventions such as cognitive behavioral therapy, mindfulness, and exercise may reduce flares.</li>
            <li><strong>Sun exposure:</strong> Controlled sun exposure can be helpful, but avoid sunburn which can exacerbate psoriasis.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Special Considerations</h2>

          <p>
            Women planning pregnancy should discuss treatment plans with their clinician: some systemic agents are contraindicated during pregnancy, while others may be safer. Children with plaque psoriasis warrant pediatric dermatology input. Long-term safety monitoring is important for systemic therapies, including lab monitoring and vaccination review before starting biologics or immunosuppressive drugs.
          </p>

          <h2 className="text-2xl font-semibold mt-8">When to See a Specialist</h2>

          <p>
            Referral to dermatology is recommended for patients with moderate to severe disease, involvement of sensitive or cosmetically important areas (face, palms, soles, genitalia), significant nail disease, suspected psoriatic arthritis, or disease refractory to topical and basic systemic therapies. A dermatologist can provide access to phototherapy, advanced systemic treatments, and multidisciplinary care coordination.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Monitoring and Long-Term Follow-Up</h2>

          <p>
            Patients on systemic or biologic therapies require periodic monitoring for efficacy and safety. This may include routine blood tests, screening for latent infections (such as tuberculosis), and assessment of treatment response using standardized measures (for example, PASI or patient-reported outcomes). Regular follow-up helps optimize dosing, manage side effects, and address comorbid conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Addressing Emotional and Social Impact</h2>

          <p>
            The visible and chronic nature of plaque psoriasis can lead to anxiety, depression, social withdrawal, and reduced quality of life. Open discussion about mental health, referral to counseling or support groups, and education about coping strategies are vital parts of comprehensive care. Peer support and patient education resources can empower individuals to manage their condition more effectively.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold mt-6">Is plaque psoriasis curable?</h3>

          <p>
            There is currently no cure for psoriasis, but many effective treatments can control symptoms and achieve periods of clear or nearly clear skin. Long-term management aims to reduce flares and improve quality of life.
          </p>

          <h3 className="text-xl font-semibold mt-6">Can lifestyle changes make a difference?</h3>

          <p>
            Yes. Smoking cessation, weight management, moderating alcohol intake, regular exercise, and stress reduction can all improve overall health and may reduce psoriasis severity or improve response to treatment.
          </p>

          <h3 className="text-xl font-semibold mt-6">Are biologics safe long-term?</h3>

          <p>
            Biologics have generally favorable safety profiles compared with older systemic agents, but they still carry risks, including infection and possible rare side effects. Long-term monitoring by a healthcare professional is important to manage these risks.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Practical Tips for Patients</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Keep a symptom diary to track triggers and treatment responses.</li>
            <li>Follow a consistent skin-care routine and use emollients liberally.</li>
            <li>Discuss vaccination and infection screening before starting systemic therapies.</li>
            <li>Engage in shared decision-making with your clinician to choose therapies that fit your lifestyle and goals.</li>
            <li>Seek support for mental health concerns related to chronic skin disease.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Summary</h2>

          <p>
            Plaque psoriasis is a chronic, immune-mediated skin condition with variable severity and significant potential impact on physical and emotional well-being. Advances in topical agents, phototherapy, systemic medications, and biologic therapies provide a wide range of effective treatment options. Comprehensive care includes treating the skin, screening for and managing comorbidities, addressing lifestyle factors, and supporting mental health. With individualized treatment and regular follow-up, many people with plaque psoriasis can achieve meaningful improvements in symptoms and quality of life.
          </p>

          <p className="text-sm text-gray-500 mt-10">
            This content is for informational purposes only and does not replace professional medical advice.
          </p>

        </div>
      </div>
    </ArticleLayout>
  );
}
