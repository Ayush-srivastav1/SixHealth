import { Layout } from "@/components/layout";

export default function InflammatoryBowelDisease() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-5 py-10">
        {/* Hero Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Inflammatory Bowel Disease awareness - digestive health illustration"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Inflammatory Bowel Disease: Comprehensive Guide to IBD</h1>
            <div className="text-sm text-gray-600 mb-4">
              <span>By Healthline Editorial Team</span> | <span>Updated February 7, 2026</span>
            </div>
            <p className="text-lg text-gray-700">
              Inflammatory Bowel Disease (IBD) encompasses chronic inflammatory conditions affecting the digestive tract. This comprehensive guide covers Crohn's disease and ulcerative colitis, their symptoms, causes, diagnosis, and management strategies.
            </p>
          </header>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                <li><a href="#what-is-ibd" className="text-blue-600 hover:text-blue-800">What is Inflammatory Bowel Disease?</a></li>
                <li><a href="#types-ibd" className="text-blue-600 hover:text-blue-800">Types of IBD</a></li>
                <li><a href="#symptoms" className="text-blue-600 hover:text-blue-800">Symptoms and Signs</a></li>
                <li><a href="#causes" className="text-blue-600 hover:text-blue-800">Causes and Risk Factors</a></li>
                <li><a href="#diagnosis" className="text-blue-600 hover:text-blue-800">Diagnosis and Testing</a></li>
                <li><a href="#treatment" className="text-blue-600 hover:text-blue-800">Treatment Options</a></li>
                <li><a href="#lifestyle" className="text-blue-600 hover:text-blue-800">Lifestyle Management</a></li>
                <li><a href="#complications" className="text-blue-600 hover:text-blue-800">Complications and Prevention</a></li>
                <li><a href="#living-with-ibd" className="text-blue-600 hover:text-blue-800">Living with IBD</a></li>
                <li><a href="#additional-links" className="text-blue-600 hover:text-blue-800">Additional Links</a></li>
              </ul>
            </nav>
          </div>

          <section id="what-is-ibd" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Inflammatory Bowel Disease?</h2>
            <p className="mb-4">
              Inflammatory Bowel Disease (IBD) refers to a group of chronic inflammatory conditions that affect the digestive tract. Unlike irritable bowel syndrome (IBS), which affects how the intestines work, IBD causes physical inflammation and damage to the intestinal wall. The two main types of IBD are Crohn's disease and ulcerative colitis.
            </p>
            <p className="mb-4">
              IBD affects millions of people worldwide, with symptoms typically appearing between ages 15-35, though it can develop at any age. The disease follows a pattern of flare-ups (active disease periods) alternating with remission (symptom-free periods). While there's no cure, various treatments can effectively manage symptoms and prevent complications.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Statistics</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Affects approximately 3 million Americans</li>
                <li>• Crohn's disease: ~780,000 cases in the US</li>
                <li>• Ulcerative colitis: ~907,000 cases in the US</li>
                <li>• Can develop at any age, but peaks between 15-35 years</li>
                <li>• Slightly more common in women than men</li>
              </ul>
            </div>
          </section>

          <section id="types-ibd" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Inflammatory Bowel Disease</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Crohn's Disease</h3>
            <p className="mb-4">
              Crohn's disease can affect any part of the digestive tract from mouth to anus, though it's most commonly found in the small intestine and beginning of the large intestine. The inflammation in Crohn's disease extends through all layers of the bowel wall and can "skip" areas, leaving normal tissue between inflamed sections.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-800 mb-2">Crohn's Disease Characteristics:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Can affect any part of the GI tract</li>
                <li>• Inflammation affects all layers of bowel wall</li>
                <li>• "Skip lesions" - normal tissue between inflamed areas</li>
                <li>• May include fistulas, abscesses, or strictures</li>
                <li>• Often affects ileum (last part of small intestine)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ulcerative Colitis</h3>
            <p className="mb-4">
              Ulcerative colitis is limited to the large intestine (colon) and rectum. Unlike Crohn's, the inflammation is continuous and affects only the innermost lining of the colon. It typically starts in the rectum and may extend upward in a continuous pattern.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-800 mb-2">Ulcerative Colitis Characteristics:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Limited to the colon and rectum</li>
                <li>• Continuous inflammation (no skip lesions)</li>
                <li>• Affects only the mucosal layer</li>
                <li>• Always involves the rectum</li>
                <li>• May extend proximally in continuous fashion</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Other IBD Variants</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Indeterminate colitis:</strong> Features of both Crohn's and ulcerative colitis</li>
              <li><strong>Microscopic colitis:</strong> Inflammation visible only under microscope</li>
              <li><strong>Collagenous colitis:</strong> Thickening of collagen under mucosal layer</li>
              <li><strong>Lymphocytic colitis:</strong> Increased lymphocytes in mucosal layer</li>
            </ul>
          </section>

          <section id="symptoms" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms and Signs of IBD</h2>
            <p className="mb-4">
              IBD symptoms vary depending on the type, location, and severity of inflammation. Symptoms may come and go, with periods of flare-ups and remission. Some people experience mild symptoms, while others have severe, debilitating effects.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Gastrointestinal Symptoms</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Common Symptoms</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Diarrhea (often bloody in UC)</li>
                  <li>Abdominal pain and cramping</li>
                  <li>Urgent need to have a bowel movement</li>
                  <li>Fatigue and weakness</li>
                  <li>Loss of appetite and weight loss</li>
                  <li>Nausea and vomiting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Less Common Symptoms</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Constipation (in some cases)</li>
                  <li>Bloating and gas</li>
                  <li>Mouth sores</li>
                  <li>Rectal bleeding</li>
                  <li>Anal fissures or fistulas</li>
                  <li>Perianal abscesses</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Systemic Symptoms</h3>
            <p className="mb-4">IBD can affect other parts of the body beyond the digestive tract:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Joint pain:</strong> Arthritis affecting large joints</li>
              <li><strong>Skin problems:</strong> Erythema nodosum, pyoderma gangrenosum</li>
              <li><strong>Eye inflammation:</strong> Uveitis, episcleritis</li>
              <li><strong>Liver complications:</strong> Primary sclerosing cholangitis</li>
              <li><strong>Blood clots:</strong> Increased risk of thrombosis</li>
              <li><strong>Osteoporosis:</strong> Bone density loss</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Symptom Differences</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Symptom</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Crohn's Disease</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Ulcerative Colitis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Blood in stool</td>
                    <td className="border border-gray-300 px-4 py-2">Sometimes</td>
                    <td className="border border-gray-300 px-4 py-2">Common</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Weight loss</td>
                    <td className="border border-gray-300 px-4 py-2">Common</td>
                    <td className="border border-gray-300 px-4 py-2">Sometimes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Fistulas</td>
                    <td className="border border-gray-300 px-4 py-2">Common</td>
                    <td className="border border-gray-300 px-4 py-2">Rare</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Perianal disease</td>
                    <td className="border border-gray-300 px-4 py-2">Common</td>
                    <td className="border border-gray-300 px-4 py-2">Rare</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="causes" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Causes and Risk Factors</h2>
            <p className="mb-4">
              The exact cause of IBD remains unknown, but research suggests it's likely due to a combination of genetic, environmental, and immune system factors. The immune system mistakenly attacks the digestive tract, causing chronic inflammation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Genetic Factors</h3>
            <p className="mb-4">
              Genetics play a significant role in IBD development. Having a family member with IBD increases your risk. Researchers have identified over 200 genetic variants associated with IBD, particularly in genes involved in immune regulation and intestinal barrier function.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>NOD2 gene:</strong> Most common genetic risk factor for Crohn's disease</li>
              <li><strong>HLA genes:</strong> Associated with ulcerative colitis</li>
              <li><strong>IL-23 receptor gene:</strong> Involved in immune response regulation</li>
              <li><strong>Familial risk:</strong> 5-10% of IBD patients have affected family members</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Environmental Triggers</h3>
            <p className="mb-4">Environmental factors can trigger IBD in genetically susceptible individuals:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Diet:</strong> High intake of processed foods, sugar, and omega-6 fatty acids</li>
              <li><strong>Medications:</strong> NSAIDs, antibiotics, oral contraceptives</li>
              <li><strong>Infections:</strong> Certain bacterial or viral infections may trigger onset</li>
              <li><strong>Smoking:</strong> Increases Crohn's risk, may protect against UC</li>
              <li><strong>Stress:</strong> Can trigger flare-ups but doesn't cause IBD</li>
              <li><strong>Geography:</strong> More common in developed countries</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Immune System Factors</h3>
            <p className="mb-4">
              IBD occurs when the immune system mistakenly attacks harmless substances in the digestive tract. This abnormal immune response leads to chronic inflammation. Factors that may contribute include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Leaky gut:</strong> Increased intestinal permeability</li>
              <li><strong>Microbiome changes:</strong> Alterations in gut bacteria composition</li>
              <li><strong>Autoimmunity:</strong> Body attacks its own tissues</li>
              <li><strong>Inflammatory cytokines:</strong> Overproduction of inflammatory proteins</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Factors</h3>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-red-800 mb-2">Who is at Higher Risk?</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Age: Most commonly diagnosed between 15-35 years</li>
                <li>• Family history: First-degree relatives have 5-10x higher risk</li>
                <li>• Ethnicity: More common in Caucasians and Ashkenazi Jews</li>
                <li>• Smoking: Increases Crohn's risk, decreases UC risk</li>
                <li>• NSAID use: May trigger or worsen IBD</li>
                <li>• Urban living: Higher incidence in urban vs. rural areas</li>
              </ul>
            </div>
          </section>

          <section id="diagnosis" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Diagnosis and Testing</h2>
            <p className="mb-4">
              Diagnosing IBD requires a combination of medical history, physical examination, laboratory tests, imaging studies, and endoscopy. There's no single test that can definitively diagnose IBD, so doctors use multiple approaches to confirm the diagnosis and determine the type and extent of disease.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Initial Evaluation</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Medical history:</strong> Detailed discussion of symptoms, family history, and risk factors</li>
              <li><strong>Physical examination:</strong> Abdominal tenderness, weight assessment, vital signs</li>
              <li><strong>Stool studies:</strong> Check for infection, inflammation, or blood</li>
              <li><strong>Blood tests:</strong> CBC, ESR, CRP, liver function, nutritional markers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Endoscopic Procedures</h3>
            <p className="mb-4">Endoscopy allows direct visualization of the digestive tract:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Colonoscopy:</strong> Examines entire colon and terminal ileum</li>
              <li><strong>Upper endoscopy:</strong> Examines esophagus, stomach, and duodenum</li>
              <li><strong>Capsule endoscopy:</strong> Swallowed camera for small intestine</li>
              <li><strong>Balloon-assisted enteroscopy:</strong> Deep small intestine examination</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Imaging Studies</h3>
            <p className="mb-4">Imaging helps assess disease extent and complications:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>CT enterography:</strong> Detailed small intestine imaging</li>
              <li><strong>MRI enterography:</strong> Radiation-free alternative to CT</li>
              <li><strong>Abdominal ultrasound:</strong> Quick assessment of bowel wall</li>
              <li><strong>X-rays:</strong> May show strictures or obstructions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Biomarkers and Monitoring</h3>
            <p className="mb-4">Laboratory markers help assess disease activity:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Fecal calprotectin:</strong> Non-invasive marker of intestinal inflammation</li>
              <li><strong>C-reactive protein (CRP):</strong> Systemic inflammation marker</li>
              <li><strong>Erythrocyte sedimentation rate (ESR):</strong> Another inflammation marker</li>
              <li><strong>Albumin and prealbumin:</strong> Nutritional status indicators</li>
            </ul>
          </section>

          <section id="treatment" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Treatment Options for IBD</h2>
            <p className="mb-4">
              IBD treatment aims to reduce inflammation, achieve remission, prevent complications, and improve quality of life. Treatment is individualized based on disease type, location, severity, and patient preferences. Most patients require a combination of medications, lifestyle changes, and sometimes surgery.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Medications</h3>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Aminosalicylates (5-ASA)</h4>
            <p className="mb-4">First-line treatment for mild to moderate IBD, especially ulcerative colitis:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Sulfasalazine, mesalamine, olsalazine, balsalazide</li>
              <li>Reduce inflammation in the colon lining</li>
              <li>Used for induction and maintenance of remission</li>
              <li>Generally well-tolerated with few side effects</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Corticosteroids</h4>
            <p className="mb-4">Powerful anti-inflammatory drugs for moderate to severe flares:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Prednisone, budesonide, hydrocortisone</li>
              <li>Rapid symptom relief but not for long-term use</li>
              <li>Side effects: weight gain, mood changes, increased infection risk</li>
              <li>Used short-term to induce remission</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Immunomodulators</h4>
            <p className="mb-4">Suppress the immune system to reduce inflammation:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Azathioprine, mercaptopurine, methotrexate</li>
              <li>Take 3-6 months to reach full effect</li>
              <li>Used for maintenance therapy</li>
              <li>Require regular blood monitoring</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Biologic Therapies</h4>
            <p className="mb-4">Targeted therapies for moderate to severe IBD:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Anti-TNF agents: infliximab, adalimumab, certolizumab</li>
              <li>Anti-integrin agents: vedolizumab</li>
              <li>Anti-IL-12/23 agents: ustekinumab</li>
              <li>Administered by injection or infusion</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Surgical Options</h3>
            <p className="mb-4">Surgery may be necessary for complications or when medications fail:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Colectomy:</strong> Removal of colon (for ulcerative colitis)</li>
              <li><strong>Small bowel resection:</strong> Removal of diseased bowel segments</li>
              <li><strong>Strictureplasty:</strong> Widening narrowed bowel segments</li>
              <li><strong>Fistula repair:</strong> Surgical closure of abnormal connections</li>
              <li><strong>Proctocolectomy:</strong> Complete removal of colon and rectum</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Emerging Therapies</h3>
            <p className="mb-4">New treatments showing promise in clinical trials:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>JAK inhibitors:</strong> Tofacitinib, upadacitinib</li>
              <li><strong>S1P receptor modulators:</strong> Ozanimod</li>
              <li><strong>Microbiome therapies:</strong> Fecal microbiota transplantation</li>
              <li><strong>Stem cell therapy:</strong> Hematopoietic stem cell transplantation</li>
            </ul>
          </section>

          <section id="lifestyle" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lifestyle Management</h2>
            <p className="mb-4">
              Lifestyle modifications play a crucial role in managing IBD. While they can't cure the disease, they can help reduce symptoms, prevent flares, and improve overall well-being. Working with a healthcare team to develop a personalized management plan is essential.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Dietary Management</h3>
            <p className="mb-4">Diet can significantly impact IBD symptoms. While there's no one-size-fits-all diet, certain approaches may help:</p>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Foods to Include</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Lean proteins: chicken, fish, eggs, tofu</li>
              <li>Cooked vegetables (well-tolerated ones)</li>
              <li>Low-fiber fruits: bananas, applesauce, melons</li>
              <li>Refined grains: white rice, white bread</li>
              <li>Probiotic-rich foods: yogurt, kefir, sauerkraut</li>
              <li>Omega-3 rich foods: fatty fish, flaxseeds</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Foods to Limit or Avoid</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>High-fiber foods: raw vegetables, nuts, seeds</li>
              <li>Dairy products (if lactose intolerant)</li>
              <li>Fatty or fried foods</li>
              <li>Spicy foods</li>
              <li>Alcohol and caffeine</li>
              <li>Artificial sweeteners</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Special Diets</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Low FODMAP diet:</strong> Reduces fermentable carbs that may cause gas and bloating</li>
              <li><strong>Specific Carbohydrate Diet (SCD):</strong> Eliminates complex carbohydrates</li>
              <li><strong>IBD Anti-Inflammatory Diet:</strong> Focuses on anti-inflammatory foods</li>
              <li><strong>Mediterranean diet:</strong> May help reduce inflammation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Stress Management</h3>
            <p className="mb-4">Stress can trigger IBD flares. Effective stress management techniques include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Mindfulness meditation:</strong> Daily practice can reduce stress and improve symptoms</li>
              <li><strong>Yoga and tai chi:</strong> Gentle exercises that combine movement and relaxation</li>
              <li><strong>Cognitive behavioral therapy:</strong> Professional help for managing stress and anxiety</li>
              <li><strong>Support groups:</strong> Connecting with others who have IBD</li>
              <li><strong>Hobbies and relaxation:</strong> Activities that bring joy and reduce tension</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Exercise and Physical Activity</h3>
            <p className="mb-4">Regular exercise offers multiple benefits for IBD patients:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Reduces inflammation:</strong> Moderate exercise has anti-inflammatory effects</li>
              <li><strong>Improves mental health:</strong> Releases endorphins and reduces stress</li>
              <li><strong>Maintains bone density:</strong> Important since IBD increases osteoporosis risk</li>
              <li><strong>Supports weight management:</strong> Helps prevent obesity-related complications</li>
              <li><strong>Enhances gut motility:</strong> May help with constipation</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Exercise Recommendations</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Start slowly and gradually increase intensity</li>
              <li>Choose low-impact activities: walking, swimming, cycling</li>
              <li>Aim for 150 minutes of moderate activity per week</li>
              <li>Include strength training 2-3 times per week</li>
              <li>Listen to your body and rest during flares</li>
            </ul>
          </section>

          <section id="complications" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complications and Prevention</h2>
            <p className="mb-4">
              IBD can lead to various complications if not properly managed. Some complications are related to the disease itself, while others result from long-term medication use or malnutrition. Early detection and treatment can prevent many of these issues.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Disease-Related Complications</h3>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Intestinal Complications</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Bowel obstruction:</strong> Narrowing of the intestine from scar tissue</li>
              <li><strong>Fistulas:</strong> Abnormal connections between organs (more common in Crohn's)</li>
              <li><strong>Abscesses:</strong> Collections of pus in the abdomen</li>
              <li><strong>Perforation:</strong> Hole in the bowel wall requiring emergency surgery</li>
              <li><strong>Toxic megacolon:</strong> Severe colon dilation (ulcerative colitis)</li>
              <li><strong>Colorectal cancer:</strong> Increased risk, especially with long-standing disease</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Extraintestinal Complications</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Arthritis:</strong> Joint inflammation affecting up to 30% of IBD patients</li>
              <li><strong>Skin disorders:</strong> Erythema nodosum, pyoderma gangrenosum</li>
              <li><strong>Eye problems:</strong> Uveitis, episcleritis, scleritis</li>
              <li><strong>Liver disease:</strong> Primary sclerosing cholangitis, fatty liver</li>
              <li><strong>Kidney stones:</strong> Due to dehydration and malabsorption</li>
              <li><strong>Anemia:</strong> From blood loss, poor absorption, or chronic inflammation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Prevention Strategies</h3>
            <p className="mb-4">While not all complications can be prevented, several strategies can reduce risk:</p>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Medical Prevention</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Regular colonoscopies for colorectal cancer screening</li>
              <li>Appropriate medication use to maintain remission</li>
              <li>Bone density scans for osteoporosis prevention</li>
              <li>Vaccinations to prevent infections</li>
              <li>Regular monitoring of disease activity</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-700 mb-2">Lifestyle Prevention</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Quit smoking to reduce Crohn's complications</li>
              <li>Maintain adequate nutrition and hydration</li>
              <li>Regular exercise to support overall health</li>
              <li>Stress management to prevent flares</li>
              <li>Avoid NSAIDs which can worsen IBD</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cancer Risk and Screening</h3>
            <p className="mb-4">IBD increases the risk of colorectal cancer. Screening guidelines include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Ulcerative colitis:</strong> Colonoscopy every 1-2 years after 8-10 years of disease</li>
              <li><strong>Crohn's disease:</strong> Similar screening if colon is involved</li>
              <li><strong>Risk factors:</strong> Longer disease duration, extensive involvement, family history</li>
              <li><strong>Chromoendoscopy:</strong> Dye-based colonoscopy for better detection</li>
            </ul>
          </section>

          <section id="living-with-ibd" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Living with Inflammatory Bowel Disease</h2>
            <p className="mb-4">
              Living with IBD requires adapting to an unpredictable disease while maintaining quality of life. Many people with IBD lead full, active lives with proper management. Building a strong support system and developing coping strategies are essential.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Emotional and Psychological Impact</h3>
            <p className="mb-4">IBD can significantly affect mental health and quality of life:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Anxiety and depression:</strong> Common due to chronic illness and uncertainty</li>
              <li><strong>Body image issues:</strong> Weight changes, ostomy bags, or surgical scars</li>
              <li><strong>Social isolation:</strong> Fear of accidents or embarrassment</li>
              <li><strong>Relationship challenges:</strong> Impact on intimacy and family life</li>
              <li><strong>Work and career concerns:</strong> Absences, fatigue, and productivity issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Coping Strategies</h3>
            <p className="mb-4">Effective coping strategies can improve quality of life:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Education:</strong> Learn about your disease and treatment options</li>
              <li><strong>Support groups:</strong> Connect with others who understand your experience</li>
              <li><strong>Mental health support:</strong> Therapy or counseling when needed</li>
              <li><strong>Advocacy:</strong> Become informed about your rights and accommodations</li>
              <li><strong>Self-care:</strong> Prioritize rest, nutrition, and stress management</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Work and Career Considerations</h3>
            <p className="mb-4">Many people with IBD continue working successfully. Consider these strategies:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Disclose selectively:</strong> Share information with trusted colleagues or HR</li>
              <li><strong>Know your rights:</strong> Americans with Disabilities Act protections</li>
              <li><strong>Flexible arrangements:</strong> Remote work, modified schedules, or job accommodations</li>
              <li><strong>Emergency planning:</strong> Have a plan for flare-ups at work</li>
              <li><strong>Career planning:</strong> Consider jobs with more flexibility and control</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Travel and Lifestyle Planning</h3>
            <p className="mb-4">Travel is possible with IBD, but planning is essential:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Medical planning:</strong> Carry medications, doctor's contact info, and insurance cards</li>
              <li><strong>Destination research:</strong> Find IBD-friendly accommodations and medical facilities</li>
              <li><strong>Medication management:</strong> Plan for time zone changes and medication storage</li>
              <li><strong>Emergency kit:</strong> Include supplies for managing symptoms</li>
              <li><strong>Travel insurance:</strong> Coverage for medical emergencies and trip interruptions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Family Planning</h3>
            <p className="mb-4">IBD can affect fertility and pregnancy, but most people can have children:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Fertility:</strong> Generally not affected, though some medications may temporarily impact fertility</li>
              <li><strong>Pregnancy:</strong> Most pregnancies are successful with proper management</li>
              <li><strong>Medication adjustments:</strong> Some drugs are safe during pregnancy</li>
              <li><strong>Genetic counseling:</strong> Children have slightly higher IBD risk</li>
              <li><strong>Preconception planning:</strong> Optimize health before pregnancy</li>
            </ul>
          </section>

          {/* Related Articles Section */}
          <section className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-blue-600 mb-2">Crohn's Disease: Symptoms and Treatment</h3>
                <p className="text-sm text-gray-600 mb-2">Comprehensive guide to Crohn's disease management and treatment options.</p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Read more →</a>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-blue-600 mb-2">Ulcerative Colitis: Living with UC</h3>
                <p className="text-sm text-gray-600 mb-2">Daily management strategies and lifestyle tips for ulcerative colitis.</p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Read more →</a>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-blue-600 mb-2">IBD Diet: Foods to Eat and Avoid</h3>
                <p className="text-sm text-gray-600 mb-2">Nutritional guidelines and meal planning for inflammatory bowel disease.</p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Read more →</a>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-blue-600 mb-2">IBD Medications: What You Need to Know</h3>
                <p className="text-sm text-gray-600 mb-2">Understanding different medication options and their effects.</p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Read more →</a>
              </div>
            </div>
          </section>

          <section id="additional-links" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Links</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Organizations</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.crohnscolitisfoundation.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Crohn's & Colitis Foundation</a></li>
                  <li><a href="https://www.ccfa.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">American Gastroenterological Association</a></li>
                  <li><a href="https://www.gastro.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">International Organization for the Study of IBD</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Support Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.ibdsupport.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IBD Support Group Directory</a></li>
                  <li><a href="https://www.healthline.com/health/crohns-disease/support-groups" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Online IBD Communities</a></li>
                  <li><a href="https://www.ccfa.org/resources" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Patient Resources</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Research & Clinical Trials</h3>
                <ul className="space-y-2">
                  <li><a href="https://clinicaltrials.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov - IBD Studies</a></li>
                  <li><a href="https://www.ccfa.org/research" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IBD Research Updates</a></li>
                  <li><a href="https://www.nih.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Institutes of Health</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Materials</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.ccfa.org/ibd-facts" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IBD Facts and Statistics</a></li>
                  <li><a href="https://www.healthline.com/health/inflammatory-bowel-disease" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IBD Educational Videos</a></li>
                  <li><a href="https://www.ccfa.org/toolkits" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IBD Management Toolkits</a></li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="border-t pt-6 mt-12">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <span>Reviewed by: Dr. Michael Chen, MD, Gastroenterologist</span>
              <span>Last reviewed: February 7, 2026</span>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              <p><strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult with a healthcare professional for diagnosis and treatment.</p>
            </div>
            <div className="text-sm text-gray-600">
              <p><strong>Sources:</strong> Crohn's & Colitis Foundation, American Gastroenterological Association, National Institutes of Health, peer-reviewed medical journals.</p>
            </div>
          </footer>
        </article>
      </div>
    </Layout>
  );
}