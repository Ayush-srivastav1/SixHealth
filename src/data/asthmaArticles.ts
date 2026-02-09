export interface AsthmaArticle {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  category?: string;
  imageUrl?: string;
  author?: string;
  authorRole?: string;
  reviewer?: string;
  reviewerRole?: string;
  readTime?: string;
  date?: string;
  updatedDate?: string;
}

export const asthmaSections = [
    {
      id: "basics",
      title: "Asthma Basics",
      articles: [
        {
          id: "a1",
          slug: "what-is-asthma",
          title: "What is Asthma? A Comprehensive Guide to Symptoms, Causes, and Management",
          excerpt: "Asthma is a chronic inflammatory disease of the airways causing breathing difficulties. Learn about its causes, risk factors, and how it affects the lungs in this detailed guide.",
          category: "Basics",
          imageUrl: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
          author: "Dr. Sarah Mitchell",
          authorRole: "Pulmonologist",
          reviewer: "Dr. James Wilson",
          reviewerRole: "MD, Respiratory Medicine",
          readTime: "15 min read",
          date: "Feb 10, 2026",
          updatedDate: "Feb 15, 2026",
          content: `Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, the tubes that carry air into and out of the lungs. This chronic inflammation leads to recurring episodes of wheezing, breathlessness, chest tightness, and coughing, particularly at night, in the early morning, or during physical activity. Unlike some respiratory conditions that can be cured, asthma is a long-term disease that requires ongoing management and monitoring to keep symptoms controlled and maintain quality of life.

  The condition affects millions of people worldwide across all age groups, races, and socioeconomic backgrounds. Approximately 300 million people globally suffer from asthma, making it one of the most common chronic diseases. In the United States alone, over 25 million people have asthma, including about 6 million children. While asthma can be serious and even life-threatening if not properly managed, most people with well-controlled asthma can lead active, productive lives without significant limitations.

    Understanding Asthma: Definition and Overview

  At its core, asthma is a disease of the airways. To understand asthma, it helps to understand how breathing works. When you breathe in, air travels through your nose or mouth, down your windpipe (trachea), and into your lungs through a series of branching tubes called bronchi. These tubes branch into smaller and smaller tubes called bronchioles, ending in tiny air sacs called alveoli where oxygen enters the bloodstream.

  In people with asthma, the airways are chronically inflamed. This means they are swollen and sensitive. When exposed to certain triggers—such as allergens, cold air, or respiratory infections—the airways react strongly. This reaction involves three main changes:
  1.  **Inflammation:** The lining of the airways swells further, narrowing the passage for air.
  2.  **Bronchoconstriction:** The bands of muscle surrounding the airways tighten, squeezing them shut (often called a "bronchospasm").
  3.  **Mucus Production:** The cells lining the airways produce excess mucus, which can clog the narrowed tubes.

  This triad of changes significantly reduces the amount of air that can pass through, leading to the characteristic symptoms of an asthma attack.

  ## How Asthma Develops

  Asthma results from a complex interplay between genetic predisposition and environmental factors. It is not contagious, but it often runs in families. The "hygiene hypothesis" suggests that reduced exposure to certain bacteria and viruses in early childhood may alter immune system development, increasing the risk of allergic diseases like asthma.

  The airways of people with asthma are "hyperresponsive," meaning they overreact to stimuli that wouldn't bother someone without asthma. This hyperresponsiveness can vary over time; sometimes the airways are very sensitive, and other times they are less so. Understanding this underlying mechanism is crucial because it explains why asthma management requires ongoing attention, even when you aren't feeling symptoms.

  ## Risk Factors and Causes

  Multiple factors contribute to the development of asthma. While we can't change our genetics, understanding risk factors can help in prevention and management.

  ### Genetic Factors
  Genetics play a significant role. If one parent has asthma, a child has about a 25% chance of developing it. If both parents have asthma, the risk increases to about 50%. Several genes have been identified that are associated with asthma susceptibility, particularly those involved in immune system regulation and inflammation.

  ### Allergies (Atopy)
  There is a strong link between allergies and asthma. Atopy—the genetic tendency to develop allergic diseases like eczema (atopic dermatitis) and hay fever (allergic rhinitis)—is the strongest risk factor for developing asthma. Most children with asthma also have allergies.

  ### Environmental Exposures
  *   **Air Pollution:** Living in areas with high levels of smog or vehicle exhaust is linked to higher asthma rates.
  *   **Tobacco Smoke:** Exposure to secondhand smoke in childhood is a major risk factor. Maternal smoking during pregnancy is also strongly linked to impaired lung function in infants.
  *   **Occupational Irritants:** Exposure to chemical fumes, gases, or dusts at work can cause "occupational asthma."


      ### Children under 5

      Spirometry is often impractical in very young children. Clinicians diagnose based on recurrent wheeze, response to bronchodilators, symptom patterns, and therapeutic trials of controller medication. Observe and reassess as the child grows.

      ### Adults with fixed obstruction

      Adults with longstanding symptoms may develop fixed airflow obstruction that blurs the distinction between asthma and COPD. A detailed history (atopy, variable symptoms, smoking exposure), bronchodilator responsiveness, and additional testing (CT, diffusion capacity) can clarify the diagnosis.

      ### Occupational asthma

      Diagnosis requires correlating work exposure with symptom patterns and objective measures: peak flow diaries at work vs away, serial spirometry, and, where possible, workplace exposure assessment. Early recognition can lead to exposure reduction and improved outcomes.

      ## Interpreting results: pitfalls and pearls

      - **Normal tests do not rule out asthma.** Reassess during symptomatic periods or use challenge testing.
      - **Bronchodilator responsiveness is supportive but not definitive.** Some patients show partial response; others show delayed improvement.
      - **Consider differential diagnoses:** heart failure, vocal cord dysfunction, bronchiectasis, GERD-related cough, and medication side effects.
      - **Look for comorbidities:** allergic rhinitis, obesity, sinus disease, and psychological factors may affect presentation and control.

      ## Putting it all together: a practical diagnostic approach

      1. Take a focused history emphasizing symptom timing, triggers, family history, and medication response.
      2. Perform spirometry with bronchodilator; interpret in context of symptoms.
      3. If spirometry is non-diagnostic, use peak flow monitoring, FeNO, or bronchial challenge as appropriate.
      4. Test for allergies when clinical history suggests atopy.
      5. Consider specialty referral for complex, severe, or occupational cases.

      ## What to expect after diagnosis

      After confirming asthma, clinicians typically:

      - Provide an initial treatment plan (often low-dose inhaled corticosteroid for persistent symptoms).
      - Teach inhaler technique and provide a spacer when needed.
      - Create an individualized Asthma Action Plan with green/yellow/red zones and peak flow thresholds.
      - Schedule follow-up to assess control, adherence, and inhaler technique.

      ## When to seek urgent help during diagnostic evaluation

      If breathing worsens rapidly, rescue inhaler provides little relief, or you develop cyanosis or confusion, seek emergency care immediately. Diagnostic workups should never delay urgent treatment.

      ## Reliable resources

      - Global Initiative for Asthma (GINA): https://ginasthma.org/
      - Centers for Disease Control and Prevention (CDC) — Asthma Basics: https://www.cdc.gov/asthma/
      - American Thoracic Society (ATS) diagnostic guidance: https://www.thoracic.org/

    ---

    ## Related articles

    - [What is Asthma?](/asthma/article/what-is-asthma)
    - [Types of Asthma](/asthma/article/types-of-asthma)
    - [Modern Asthma Treatments](/asthma/article/asthma-treatment-options)

    Understanding the diagnostic process empowers patients: bring your symptom diary, ask about tests, and make sure you know how test results inform treatment recommendations. Early diagnosis opens the door to better control, fewer exacerbations, and improved daily life.`
      },
      {
         id: "a3",
         slug: "asthma-treatment-options",
         title: "Modern Asthma Treatments: From Inhalers to Biologics",
         excerpt: "Explore the latest advancements in asthma care, including smart inhalers and biologic therapies for severe cases.",
         category: "Treatment",
         imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&h=600&fit=crop",
         author: "Dr. Alan Grant",
         authorRole: "Clinical Researcher",
         reviewer: "Dr. Sarah Mitchell",
         reviewerRole: "Pulmonologist",
         readTime: "12 min read",
         date: "Feb 14, 2026",
         updatedDate: "Feb 14, 2026",
        content: `
      ![Inhalers and spacer on table](https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&h=800&fit=crop)
      *Photo: Inhaler devices and spacers help deliver asthma medication effectively.*

      **By:** Dr. Alan Grant, Clinical Researcher — Dr. Grant researches inhaler strategies and biologic therapies for severe asthma.

      **Medically reviewed by:** Dr. Sarah Mitchell, Pulmonologist.

      ---

      ## Table of contents

      - [Principles of asthma management](#principles-of-asthma-management)
      - [Controller medications](#controller-medications-long-term)
      - [Reliever medications](#reliever-medications-rescue)
      - [Inhaler devices and technique](#inhaler-devices-and-technique)
      - [Biologic therapies for severe asthma](#biologic-therapies-for-severe-asthma)
      - [Emergency management and adherence](#emergency-management-of-exacerbations)
      - [Related articles](#related-articles)

      ---

      Asthma treatment has evolved substantially over recent decades. Modern strategies emphasize personalized control, minimizing exacerbations, reducing systemic steroid exposure, and improving overall quality of life. This comprehensive review covers daily controller strategies, rescue options, device considerations, biologic therapies, and the role of education and adherence in achieving long-term control.

      ## Principles of asthma management

      Contemporary asthma care centers on two main goals: achieving and maintaining symptom control, and reducing risk of exacerbations and long-term lung damage. Clinicians use a stepwise approach — increasing or decreasing therapy intensity based on control and future risk.

      Core components of management:

      - Pharmacologic therapy tailored to severity and phenotype.
      - Regular assessment of control and adherence.
      - Education on inhaler technique and self-management.
      - Identification and mitigation of triggers.
      - Vaccination and infection prevention.

      ## Controller medications (long-term)

      These agents reduce airway inflammation and the frequency of symptoms and attacks.

      - **Inhaled corticosteroids (ICS):** The mainstay of maintenance therapy. Low-to-moderate doses effectively control most patients' symptoms and reduce exacerbations. Examples: budesonide, fluticasone, beclomethasone.

      - **ICS/LABA combinations:** Combining an inhaled corticosteroid with a long-acting beta-agonist (LABA) enhances symptom control and reduces exacerbations more than higher-dose ICS alone. Formoterol and salmeterol are common LABAs; formoterol has a rapid onset and can be used in certain single-inhaler maintenance-and-reliever strategies.

      - **Leukotriene receptor antagonists (LTRAs):** Oral agents like montelukast are helpful for aspirin-exacerbated respiratory disease, allergic asthma, and as an adjunct in patients reluctant to use inhalers.

      - **Theophylline:** Older oral bronchodilator and anti-inflammatory effects at low doses; less commonly used due to narrow therapeutic window and side effects.

      - **Biologic therapies:** Targeted monoclonal antibodies for severe asthma phenotypes (see below).

      ## Reliever medications (rescue)

      - **Short-acting beta-agonists (SABAs):** Albuterol (salbutamol) provides rapid bronchodilation and symptom relief. Excessive reliance on SABA-only strategies is discouraged because they do not address underlying inflammation.

      - **Anticholinergics (short-acting):** Ipratropium can be an adjunct in acute care; long-acting anticholinergics (tiotropium) have a role as add-on therapy for certain patients with persistent symptoms.

      ## Modern approach: anti-inflammatory reliever strategies

      Guidelines increasingly recommend using inhaled corticosteroid-containing relievers (e.g., low-dose budesonide-formoterol) rather than SABA-only approaches. This reduces the risk of severe exacerbations and ensures that anti-inflammatory therapy is delivered whenever relief is needed.

      ## Inhaler devices and technique

      Correct device choice and technique are as important as medication selection. Common devices include:

      - **Metered-dose inhalers (MDIs):** Require coordination; spacers improve delivery in children and older adults.
      - **Dry powder inhalers (DPIs):** Breath-actuated; depend on adequate inspiratory flow.
      - **Soft-mist inhalers:** Produce a slow-moving aerosol and may be easier for some patients.

      Education: healthcare providers should check technique at every visit — common errors include not shaking MDIs, poor timing of actuation with inhalation, and inadequate inhalation force for DPIs.

      ## Biologic therapies for severe asthma

      For patients with severe, uncontrolled asthma despite optimized inhaled therapy, biologic agents targeting specific immune pathways have changed outcomes:

      - **Anti-IgE (omalizumab):** For allergic asthma with elevated IgE.
      - **Anti-IL-5/IL-5R (mepolizumab, reslizumab, benralizumab):** For eosinophilic asthma with elevated blood eosinophils.
      - **Anti-IL-4/13 (dupilumab):** For type 2 inflammatory asthma and patients with comorbid atopic disease.

      Selection requires biomarkers (blood eosinophil counts, FeNO, IgE) and specialist assessment. Benefits include fewer exacerbations, reduced oral steroid dependence, and improved lung function and quality of life.

      ## Oral corticosteroids: benefits and risks

      Oral steroids are powerful anti-inflammatory agents used for acute exacerbations and sometimes as short courses for severe flare-ups. Chronic oral steroid use (>3 months or frequent courses) carries substantial risks: osteoporosis, diabetes, weight gain, hypertension, cataracts, and immunosuppression. Steroid-sparing strategies (optimizing inhaled therapy and using biologics) are essential.

      ## Non-pharmacologic interventions

      - **Trigger management:** Allergen avoidance, smoke-free environments, humidity control to prevent mold.
      - **Vaccination:** Influenza and pneumococcal vaccines reduce infection-triggered exacerbations.
      - **Pulmonary rehabilitation and breathing training:** Especially useful for deconditioning and anxiety-related symptoms.
      - **Weight management and comorbidity control:** Addressing GERD, obstructive sleep apnea, and obesity improves control.

      ## Emergency management of exacerbations

      Acute care focuses on rapidly reversing airflow obstruction and stabilizing oxygenation:

      - High-flow oxygen for hypoxia.
      - Repeated inhaled short-acting bronchodilators (nebulized or MDI with spacer).
      - Systemic corticosteroids (oral or IV) to reduce inflammation.
      - Anticholinergics (ipratropium) in severe exacerbations.
      - Monitor for fatigue, rising CO2 (a sign of ventilation failure), and need for escalation.

      ## Adherence, adherence tools, and education

      Poor adherence and incorrect technique are the most common reasons for uncontrolled asthma. Strategies to improve adherence include simplified regimens (single-inhaler combinations), smart inhalers with reminders, regular review and feedback, and structured education programs.

      ## Special populations and considerations

      - **Children:** Choose device and dose carefully; monitor growth with long-term ICS use.
      - **Pregnancy:** Maintain control — uncontrolled asthma poses greater risk to mother and fetus than most asthma medications; prefer inhaled therapy and specialist input.
      - **Elderly:** Polypharmacy and comorbidities require careful medication reconciliation and technique checks.

      ## Future directions and research

      Digital health (smart inhalers and telemonitoring), novel biologic targets, and precision medicine approaches promise more individualized care. Ongoing research explores airway microbiome influences, regenerative therapies, and strategies to reduce long-term remodeling.

      ## Practical takeaways for patients

      1. Use controller therapy consistently if prescribed and practice correct inhaler technique.
      2. Keep a written Asthma Action Plan and know your personal best peak flow.
      3. Address triggers and comorbidities (smoking cessation, weight, rhinitis).
      4. Seek specialist help for frequent exacerbations or steroid dependence; biologics may be an option.

    ---

    ## Related articles

    - [What is Asthma?](/asthma/article/what-is-asthma)
    - [Recognizing Asthma: Early Signs and Diagnostic Tests](/asthma/article/asthma-symptoms-diagnosis)
    - [Types of Asthma](/asthma/article/types-of-asthma)

    ## Selected resources

    - Global Initiative for Asthma (GINA): https://ginasthma.org/
    - National Asthma Education Program and local guideline bodies for region-specific recommendations.

    Asthma treatment is now highly effective for most patients when therapy is personalized, adherence is supported, and education and trigger control are in place. Work with your clinician to find the right balance for your needs.`
      }
      ,
      {
        id: "a5",
        slug: "types-of-asthma",
        title: "Types of Asthma — Phenotypes, Triggers, and Treatment Implications",
        excerpt: "Asthma is a heterogeneous disease with multiple types (phenotypes). Learn how each type differs in triggers, tests, and tailored treatments.",
        category: "Basics",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&h=600&fit=crop",
        author: "SixHealth Editorial Team",
        authorRole: "",
        reviewer: "Dr. James Wilson",
        reviewerRole: "MD, Respiratory Medicine",
        readTime: "15 min read",
        date: "Feb 10, 2026",
        updatedDate: "Feb 15, 2026",
        content: `
    ![Lung diagram and inhaler](https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&h=800&fit=crop)
    *Photo: Visualizing airway inflammation helps explain different asthma phenotypes.*

    **By:** SixHealth Editorial Team — content reviewed by subject-matter experts.

    **Medically reviewed by:** Dr. James Wilson, MD, Respiratory Medicine.

    ---

    ## Table of contents

    - [Quick overview of major types](#quick-overview-of-major-types)
    - [Allergic (Atopic) Asthma](#allergic-atopic-asthma)
    - [Non-Allergic Asthma](#non-allergic-asthma)
    - [Exercise-Induced Bronchoconstriction (EIB)](#exercise-induced-bronchoconstriction-eib)
    - [Occupational and Cough-Variant Asthma](#occupational-and-cough-variant-asthma)
    - [Eosinophilic and Severe Asthma](#eosinophilic-and-severe-asthma)
    - [Practical classification and tests](#practical-classification-and-tests)
    - [Related articles](#related-articles)

    ---

      Types of Asthma — Phenotypes, Triggers, and Treatment Implications

      Asthma is not a single disease but a collection of related airway disorders that share variable airflow limitation and airway inflammation. Clinicians now use "phenotypes" and "endotypes" to describe the observable patterns (phenotypes) and underlying biological mechanisms (endotypes). Identifying the type of asthma a person has guides targeted treatment and improves outcomes. This article describes the major asthma types, how to recognize them, diagnostic clues and tests, and specific management strategies.

    Quick overview of major types

    - Allergic (atopic) asthma
    - Non-allergic asthma
    - Exercise-induced bronchoconstriction (EIB)
    - Occupational asthma
    - Cough-variant asthma
    - Adult-onset (non-allergic) asthma
    - Eosinophilic asthma
    - Neutrophilic and paucigranulocytic asthma
    - Aspirin-exacerbated respiratory disease (AERD)
    - Severe asthma (treatment-resistant)

    Each type overlaps with others — many people have mixed features — but classifying the dominant pattern helps select treatments such as inhaled corticosteroids, leukotriene modifiers, or biologic therapies.

    1. Allergic (Atopic) Asthma

    Overview: Allergic asthma is the commonest phenotype, often beginning in childhood and linked to other atopic conditions (eczema, allergic rhinitis). Exposure to aeroallergens (dust mites, pollen, pet dander, molds) triggers IgE-mediated immune responses causing airway inflammation.

    Key features:

    - Early onset, often with family history of allergies
    - Positive skin prick tests or specific IgE blood tests
    - Symptom seasonality or clear exposure–response to allergens

    Diagnostic clues:

    - Elevated total or specific IgE
    - Positive allergy testing
    - Elevated FeNO may indicate type 2 eosinophilic inflammation

    Treatment considerations:

    - Allergen avoidance where feasible (mattress encasings, humidity control)
    - Regular inhaled corticosteroids (ICS) for persistent symptoms
    - Consider allergen immunotherapy (subcutaneous or sublingual) for selected patients
    - Anti-IgE therapy (omalizumab) for moderate–severe allergic asthma with elevated IgE and poor control

    Practical tip: Treat coexisting allergic rhinitis — nasal inflammation often worsens lower-airway symptoms.

    2. Non-Allergic Asthma

    Overview: Non-allergic asthma lacks clear IgE-mediated triggers and frequently begins in adulthood. Triggers include viral infections, irritants (tobacco smoke, pollution), strong odors, and cold air.

    Key features:

    - Adult onset, often non-atopic
    - Less seasonal pattern; triggers are irritant-based
    - May be less responsive initially to standard anti-IgE strategies

    Diagnostic clues:

    - Negative allergy testing
    - Variable spirometry with bronchial hyperresponsiveness on challenge testing

    Treatment considerations:

    - Low-to-moderate dose ICS remains foundational for persistent symptoms
    - Address triggers and comorbidities (smoking cessation, reflux, sinus disease)
    - Add-on options (LABA, LAMA) for persistent symptoms

    Clinical note: Non-allergic asthma can still have type 2 inflammation (eosinophilia) in some patients — biomarker testing guides therapy.

    3. Exercise-Induced Bronchoconstriction (EIB)

    Overview: EIB (exercise-induced asthma) presents with cough, chest tightness, wheeze, or shortness of breath during or after exercise, especially in cold or dry environments.

    Key features:

    - Symptoms provoked predictably by exercise
    - Often resolves within 30–60 minutes after stopping exercise

    Diagnostic clues:

    - Exercise challenge testing reproduces symptoms and shows fall in FEV1
    - Field testing or eucapnic voluntary hyperpnea testing in specialized centers

    Treatment considerations:

    - Pre-exercise inhaled short-acting bronchodilator (SABA) or low-dose ICS-formoterol reliever strategy as recommended
    - Warm-up routines and environmental modification (avoid cold, dry air)

    Practical tip: Many individuals with chronic asthma have EIB as a component; simple pre-treatment enables safe activity.

    4. Occupational Asthma

    Overview: Caused or worsened by exposures in the workplace (isocyanates, flour dust, animal proteins, chemical fumes). Early recognition is crucial because removal from exposure may halt progression.

    Key features:

    - Symptoms that improve on weekends or holidays
    - Symptom onset after starting a new job or exposure

    Diagnostic approach:

    - Serial peak flow monitoring at work and away from work
    - Specific inhalation challenge testing in specialized centers (when indicated)

    Management:

    - Reduce or eliminate workplace exposure (engineering controls, PPE)
    - Consider occupational health referral and legal/compensation implications
    - Standard asthma pharmacotherapy to control symptoms

    Note: Delayed diagnosis leads to worse outcomes — maintain a high index of suspicion in symptomatic workers.

    5. Cough-Variant Asthma

    Overview: Cough is the predominant or sole symptom. Patients may be misdiagnosed with chronic bronchitis, reflux-related cough, or postnasal drip.

    Key features:

    - Chronic, dry, non-productive cough
    - Lack of classic wheeze or dyspnea

    Diagnostic clues:

    - Response to bronchodilator or ICS trial
    - Normal chest imaging but variable airflow obstruction on testing

    Treatment:

    - Trial of inhaled corticosteroid therapy and review of response
    - Evaluate for alternate causes (GERD, ACE inhibitors, sinonasal disease)

    Clinical pearl: Consider cough-variant asthma in unexplained chronic cough — a therapeutic trial may be diagnostic.

    6. Adult-Onset Asthma

    Overview: Asthma presenting in adulthood (often >20–40 years) tends to be less atopic and may be more severe or persistent. Triggers include occupational exposures, hormonal influences, and infections.

    Key features:

    - Later onset, frequently non-allergic
    - Slower recognition and sometimes delayed diagnosis

    Management nuances:

    - Comprehensive evaluation for comorbidities (COPD overlap, cardiac disease)
    - Emphasis on optimizing inhaled therapy and treating comorbid conditions

    7. Eosinophilic (Type 2) Asthma

    Overview: Eosinophilic asthma is characterized by elevated eosinophil counts in blood or sputum and driven by type 2 inflammation. It often presents with frequent exacerbations and may be corticosteroid-responsive.

    Key features:

    - Elevated blood eosinophils (>150–300 cells/µL depending on guideline)
    - High FeNO supports type 2 inflammation
    - Frequent exacerbations and steroid dependence in some patients

    Treatment implications:

    - High likelihood of benefit from inhaled corticosteroids
    - For severe disease, biologics targeting IL-5/IL-5R (mepolizumab, benralizumab, reslizumab) or IL-4/13 (dupilumab) show strong efficacy

    Practical tip: Biomarker-guided therapy (eosinophils, FeNO) improves selection for biologics and steroid-sparing approaches.

    8. Neutrophilic and Paucigranulocytic Asthma

    Overview: Some patients exhibit neutrophil-predominant airway inflammation or minimal granulocytic inflammation (paucigranulocytic). These phenotypes are less responsive to corticosteroids and may relate to infections, pollution, or airway remodeling.

    Key features:

    - Neutrophilic asthma: associated with severe disease, smoking, or occupational exposures
    - Paucigranulocytic: persistent symptoms without marked airway inflammatory cells

    Management considerations:

    - Address triggers (smoking cessation, pollution control)
    - Non-steroidal strategies and targeted research therapies are under investigation

    9. Aspirin-Exacerbated Respiratory Disease (AERD)

    Overview: AERD (Samter’s triad) combines asthma, chronic rhinosinusitis with nasal polyps, and hypersensitivity to aspirin/NSAIDs. Ingestion of aspirin/NSAIDs can trigger bronchospasm and nasal symptoms.

    Key features:

    - Nasal polyps, chronic sinus disease, adult-onset asthma
    - Respiratory reaction to aspirin/NSAIDs

    Management:

    - Avoidance of NSAIDs and use of alternatives
    - Consider aspirin desensitization under specialist supervision for selected patients
    - Treat nasal polyps and sinus disease (surgery, topical corticosteroids)

    10. Severe Asthma (Treatment-Resistant)

    Overview: Severe asthma refers to asthma that remains uncontrolled despite optimized high-intensity therapy (high-dose ICS-LABA, additional controller meds) and management of comorbidities.

    Key features:

    - Frequent exacerbations, hospitalizations, or persistent symptoms despite maximal therapy
    - May require chronic oral corticosteroids

    Approach:

    - Confirm adherence, inhaler technique, and exclude alternate diagnoses
    - Phenotype and endotype assessment (eosinophils, FeNO, IgE) to select biologics
    - Multidisciplinary severe asthma services (pulmonology, ENT, allergy, physiotherapy)

    Biologic options:

    - Anti-IgE (omalizumab) for allergic asthma with elevated IgE
    - Anti-IL-5/5R (mepolizumab, benralizumab, reslizumab) for eosinophilic asthma
    - Anti-IL-4/13 (dupilumab) for type 2 inflammation with atopic features

    Practical diagnostic approach to classify asthma type

    1. Take a systematic history: age of onset, triggers, seasonal patterns, occupational exposures, smoking history, comorbidities.
    2. Perform baseline spirometry and bronchodilator testing.
    3. Use biomarkers: blood eosinophils, FeNO, and IgE as appropriate.
    4. Perform allergy testing when allergic phenotype is suspected.
    5. Consider challenge testing for exercise-related symptoms or bronchial hyperresponsiveness.

    Treatment selection by phenotype — summary

    - Allergic: ICS, allergen immunotherapy, anti-IgE when indicated
    - Eosinophilic: ICS, anti-IL-5/IL-5R or anti-IL-4/13 biologics for severe disease
    - Non-allergic/neutrophilic: optimize non-steroidal strategies, treat comorbidities
    - EIB: pre-exercise reliever, warm-up, controller therapy if frequent
    - Occupational: exposure reduction and standard pharmacotherapy

    Case examples (brief)

    - Case A — Child with seasonal wheeze, positive dust mite skin test: allergic asthma, started on low-dose ICS and allergen measures; good control.
    - Case B — Adult with new cough and nasal polyps, aspirin sensitivity: AERD; referred for ENT review and consideration of aspirin desensitization.
    - Case C — Middle-aged worker with worsening symptoms at work that improve on weekends: likely occupational asthma; advised occupational health assessment and peak flow diary.

    Frequently asked questions

    Q: Can a person have more than one type of asthma?

    A: Yes. Mixed phenotypes are common — for example, allergic asthma with exercise-induced bronchoconstriction or eosinophilic features in non-allergic patients.

    Q: How do biomarkers change treatment?

    A: Biomarkers (blood eosinophils, FeNO, IgE) help identify patients who will benefit from targeted biologics or who are likely to respond well to inhaled corticosteroids.

    Q: Is severe asthma curable?

    A: Severe asthma is rarely "curable," but many patients achieve improved control and reduced exacerbations with phenotype-driven therapy including biologics.

    Trusted resources and further reading

    - Global Initiative for Asthma (GINA): https://ginasthma.org/
    - American Thoracic Society — Clinical resources: https://www.thoracic.org/
    - National allergy/immunology guideline bodies for immunotherapy and biologic indications

    ---

    This article summarizes current clinical thinking about asthma types and how phenotype identification guides personalized care. If you want, I can expand any of these sections into a 3000+ word deep dive (one-by-one), or produce a structured JSON summary for integration with your article pages.
    `
      }
    ]
  },
  {
    id: "children",
    title: "Asthma in Children",
    tableOfContents: [
      { title: "Asthma in Children", href: "/asthma/article/asthma-in-children", slug: "asthma-in-children" }
    ],
    articles: [
      {
        id: "a6",
        slug: "asthma-in-children",
        title: "Asthma in Children: Symptoms, Diagnosis, and Family-Focused Management",
        excerpt: "A practical guide for parents and caregivers: recognizing symptoms, navigating testing, and building an effective asthma action plan for children.",
        category: "Children",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop",
        author: "Dr. Sarah Mitchell",
        authorRole: "Pediatric Pulmonologist",
        reviewer: "Dr. James Wilson",
        reviewerRole: "MD, Respiratory Medicine",
        readTime: "12 min read",
        date: "Feb 16, 2026",
        updatedDate: "Feb 16, 2026",
        content: `
![Child using an inhaler with caregiver](https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&h=900&fit=crop)
*Photo: Prompt recognition and proper inhaler technique help children stay active and safe.*

**By:** Dr. Sarah Mitchell, Pediatric Pulmonologist

**Medically reviewed by:** Dr. James Wilson, MD, Respiratory Medicine

---

## Table of contents

- [Overview](#overview)
- [Common symptoms by age group](#common-symptoms-by-age-group)
- [How doctors diagnose asthma in children](#how-doctors-diagnose-asthma-in-children)
- [Testing and when to refer](#testing-and-when-to-refer)
- [Daily management and medications](#daily-management-and-medications)
- [Inhaler technique and devices for kids](#inhaler-technique-and-devices-for-kids)
- [Trigger reduction at home and school](#trigger-reduction-at-home-and-school)
- [Asthma action plans and emergency signs](#asthma-action-plans-and-emergency-signs)
- [Living well: activity, school, and travel](#living-well-activity-school-and-travel)
- [Related articles](#related-articles)

---

## Overview

Asthma is one of the most common chronic conditions in childhood. It causes inflammation and narrowing of the airways, leading to episodes of coughing, wheeze, tight chest, and difficulty breathing. In children, symptoms can be intermittent and often triggered by viral infections, exercise, allergens, or irritants. Early recognition and a family-centered management plan help reduce missed school days, emergency visits, and long-term complications.

## Common symptoms by age group

- Infants and toddlers (under 3): recurrent coughing spells, noisy breathing, feeding difficulties, or repeated bronchiolitis-like illnesses. Classic wheeze may be harder to detect in this age group.
- Preschool children (3–5 years): episodic wheeze, nighttime cough, and symptom clusters with colds or allergen exposure.
- School-age children (6+): clearer wheeze and exercise-induced symptoms, plus reduced activity tolerance during uncontrolled periods.

Not all cough or wheeze is asthma. Key clues that suggest asthma include symptom variability (periods of normal breathing between episodes), response to bronchodilators, and family history of atopy (eczema, allergic rhinitis).

## How doctors diagnose asthma in children

Diagnosis combines history, observation, and age-appropriate testing. Because young children often cannot perform standard lung-function tests reliably, clinicians use a pragmatic approach:

- Detailed symptom history (timing, triggers, nighttime symptoms, pattern with viruses)
- Family history of allergic diseases
- Response to a trial of bronchodilator or controller therapy
- Objective testing when feasible (spirometry in children 5–6+ years)

In preschool children, repeated episodes of wheeze with clear triggers and improvement with inhaled therapy may be sufficient to start a management plan while monitoring and reassessing as the child grows.

## Testing and when to refer

- Spirometry (usually from age 5–6) measures airflow and bronchodilator responsiveness.
- Fractional exhaled nitric oxide (FeNO) can support a diagnosis of type 2 airway inflammation but is often used alongside other data.
- Allergy testing (skin or blood) helps identify environmental triggers to target with avoidance or immunotherapy.
- Referral to a pediatric pulmonologist or allergist is recommended for frequent exacerbations, poor control despite appropriate therapy, or diagnostic uncertainty.

## Daily management and medications

The foundation of pediatric asthma care is a stepwise approach tailored to symptom frequency and risk:

- Short-acting bronchodilators (SABA) provide quick relief for acute symptoms but should not be the only therapy for persistent asthma.
- Inhaled corticosteroids (ICS) are the mainstay for controlling airway inflammation in children with recurrent or persistent symptoms.
- Combination inhalers (ICS/LABA) may be used in older children as advised by specialists.
- Leukotriene receptor antagonists (like montelukast) are an oral option for some children, particularly with coexisting allergic rhinitis.

Prescribers balance symptom control, growth monitoring, and minimizing steroid exposure by using the lowest effective ICS dose and reviewing periodically.

## Inhaler technique and devices for kids

Choosing the right device for a child is equally important as choosing the medication. Common devices:

- Metered-dose inhaler (MDI) with spacer and mask: preferred for infants and young children; spacer improves deposition and reduces oropharyngeal side effects.
- Spacer with mouthpiece: useful for older children who can seal lips around the mouthpiece.
- Dry powder inhalers (DPIs): generally for older children who can generate adequate inspiratory flow.

Always demonstrate and practice inhaler technique in clinic. Schools and caregivers need clear instructions and spare spacers if the child uses one.

## Trigger reduction at home and school

Common triggers: viral infections, tobacco smoke, dust mites, pet dander, pollen, mold, strong odors, and exercise in cold/dry air. Practical strategies:

- Keep the home smoke-free; ask visiting family members to avoid smoking indoors.
- Use allergen-proof mattress and pillow covers for children with dust-mite sensitivity.
- Regular cleaning to reduce indoor mold and dampness.
- Pets: for sensitized children, discuss pet avoidance or keeping pets out of the bedroom.
- Communicate with school staff about the child's triggers and emergency plan.

## Asthma action plans and emergency signs

Every child with asthma should have a written Asthma Action Plan that explains daily medicines, how to recognize worsening symptoms, and when to seek urgent care. Red-flag emergency signs include:

- Severe difficulty breathing, rapid breathing, or difficulty speaking
- Cyanosis (bluish lips or face)
- Poor response to a rescue inhaler
- Lethargy, confusion, or reduced level of consciousness

If emergency signs appear, follow the action plan and seek immediate medical care or call emergency services.

## Living well: activity, school, and travel

Most children with well-controlled asthma can participate fully in sports and school activities. Key tips:

- Have a pre-exercise plan (bronchodilator before activity if recommended).
- Keep spare reliever medication at school and with coaches; ensure staff know how to use inhalers and spacers.
- Plan for travel: bring extra medication, action plan, and written instructions; consider humidity and allergens at destination.

## Related articles

- [What is Asthma?](/asthma/article/what-is-asthma)
- [Types of Asthma](/asthma/article/types-of-asthma)
- [Modern Asthma Treatments](/asthma/article/asthma-treatment-options)

Managing childhood asthma is a team effort — parents, clinicians, schools, and caregivers working together. With clear plans, appropriate medications, and attention to triggers, most children can enjoy normal activity and fewer symptom flare-ups.
`
      }
    ]
  },
  {
    id: "lifestyle",
    title: "Living with Asthma",
    tableOfContents: [
      { title: "Diet and Exercise for Asthma Control", href: "/asthma/article/asthma-diet-exercise", slug: "asthma-diet-exercise" }
    ],
    articles: [
      {
        id: "a4",
        slug: "asthma-diet-exercise",
        title: "Diet and Exercise for Asthma Control",
        excerpt: "How your lifestyle choices impact your asthma. Tips for safe exercise and anti-inflammatory foods.",
        category: "Lifestyle",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
        author: "Lisa Ray, RD",
        authorRole: "Nutritionist",
        reviewer: "Dr. James Wilson",
        reviewerRole: "MD",
        readTime: "8 min read",
        date: "Feb 08, 2026",
        updatedDate: "Feb 08, 2026",
        content: `
      ![Healthy foods and exercise for lung health](https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=800&fit=crop)
      *Photo: Diet and safe exercise support lung health and asthma control.*

      **By:** Lisa Ray, RD — Nutritionist specializing in respiratory-friendly diets.

      **Medically reviewed by:** Dr. James Wilson, MD.

      ---

      ## Table of contents

      - [Anti-inflammatory diet basics](#anti-inflammatory-diet)
      - [Foods to include and avoid](#foods-to-include-and-avoid)
      - [Practical meal ideas and a sample 7-day plan](#practical-meal-ideas-and-a-sample-7-day-plan)
      - [Exercise that supports asthma control](#exercise-that-supports-asthma-control)
      - [Breathing techniques and rehab](#breathing-techniques-and-rehabilitation)
      - [Creating a sustainable lifestyle plan](#creating-a-sustainable-lifestyle-plan)
      - [Related articles](#related-articles)

      ---

      Maintaining a healthy weight and staying active are crucial for asthma management. Nutrition, exercise, breathing technique, and attention to comorbidities all play a role in improving control and reducing exacerbations. This expanded guide provides practical, evidence-based recommendations for diets that reduce systemic inflammation, safe approaches to exercise, and a sample 7-day plan to get started.

      ## Anti-Inflammatory Diet

      Inflammation is a key driver of many chronic diseases, including asthma. An anti-inflammatory dietary pattern emphasizes whole foods, healthy fats, fiber, and antioxidants while minimizing ultra-processed foods and excessive added sugars. The Mediterranean-style diet is the most studied and consistently associated with lower rates of chronic inflammation.

      Key elements:

      - Plenty of vegetables and fruits (aim for a rainbow of colors)
      - Whole grains and legumes for fiber
      - Fatty fish (salmon, sardines) for omega-3 fatty acids
      - Nuts and seeds for healthy fats and micronutrients
      - Olive oil as the primary cooking fat
      - Limited processed meats, sugary drinks, and refined carbs

      ### Foods to include

      - Fatty fish (2–3 servings/week) for EPA/DHA
      - Leafy greens and cruciferous vegetables for antioxidants
      - Berries for flavonoids and vitamin C
      - Nuts (walnuts) and seeds (flax, chia) for alpha-linolenic acid and fiber
      - Fermented foods (yogurt, kefir) for gut health — choose low-sugar options

      ### Foods to avoid or limit

      - Sugary beverages and snacks
      - Highly processed foods with trans fats and additives
      - Excessive salt (especially with comorbid hypertension)
      - Foods that trigger symptoms for an individual (identify via elimination or testing)

      ## Practical meal ideas and sample 7-day mini-plan (starter)

      Day 1 — Breakfast: Overnight oats with berries and walnuts. Lunch: Lentil salad with mixed greens and lemon-olive oil dressing. Dinner: Baked salmon, roasted vegetables, quinoa.

      Day 2 — Breakfast: Greek yogurt with ground flaxseed and fruit. Lunch: Chickpea and avocado wrap. Dinner: Stir-fry with tofu, broccoli, and brown rice.

      (Continue similar balanced meals across 7 days focusing on variety and simplicity.)

      ## Exercise that supports asthma control

      Regular physical activity improves cardiovascular fitness, weight management, and respiratory muscle strength. Many people with asthma can safely exercise with proper planning.

      Safe options:

      - Swimming — warm, moist air reduces bronchoconstriction triggers
      - Walking and low-impact aerobic exercise
      - Strength training for overall function
      - Interval-based activities with gradual progression

      Pre-exercise strategies:

      - Use a short-acting bronchodilator 10–15 minutes before exertion if recommended
      - Warm up progressively for 10–15 minutes
      - Monitor symptoms and stop if severe breathlessness occurs

      ## Breathing techniques and pulmonary rehabilitation

      Breathing retraining (pursed-lip breathing, diaphragmatic breathing) and pulmonary rehab programs can reduce dyspnea and improve exercise tolerance. Consider referral to physiotherapy for structured programs if symptoms limit activity.

      ## Creating a sustainable lifestyle plan

      Behavior change matters. Start with small, achievable goals: add one vegetable serving per day, swap sugary drinks for water, and schedule three 20–30 minute exercise sessions per week. Track progress and adjust with your clinician's guidance.

      ---

      ## Related articles

      - [What is Asthma?](/asthma/article/what-is-asthma)
      - [Modern Asthma Treatments](/asthma/article/asthma-treatment-options)
      - [Recognizing Asthma: Early Signs and Diagnostic Tests](/asthma/article/asthma-symptoms-diagnosis)

      If you'd like, I can further expand this into a standalone 2000+ word article with recipes, shopping lists, and printable exercise plans.`
      }
    ]
  }
];
