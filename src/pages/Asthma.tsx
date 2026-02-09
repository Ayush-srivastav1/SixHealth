
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";

const tabs = [
  "Basics",
  "Symptoms",
  "Diagnosis",
  "Treatment",
  "Prevention",
];

export const sections = [
  {
    id: "basics",
    title: "Asthma Basics",
    category: "Basics",
    articles: [
      { id: "a1", slug: "what-is-asthma", title: "What is Asthma?", content: `Asthma is a chronic inflammatory disease of the airways causing breathing difficulties. Learn about its causes, risk factors, and how it affects the lungs.

## Understanding Asthma: Definition and Overview

Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, the tubes that carry air into and out of the lungs. This chronic inflammation leads to recurring episodes of wheezing, breathlessness, chest tightness, and coughing, particularly at night, in the early morning, or during physical activity. Unlike some respiratory conditions that can be cured, asthma is a long-term disease that requires ongoing management and monitoring to keep symptoms controlled and maintain quality of life.

The condition affects millions of people worldwide across all age groups, races, and socioeconomic backgrounds. Approximately 300 million people globally suffer from asthma, making it one of the most common chronic diseases. In the United States alone, over 25 million people have asthma, including about 6 million children. While asthma can be serious and even life-threatening if not properly managed, most people with well-controlled asthma can lead active, productive lives without significant limitations.

## How Asthma Develops

Asthma results from a combination of genetic predisposition and environmental factors. The airways of people with asthma are hyperresponsive, meaning they overreact to triggers by constricting, swelling, and producing excess mucus. This narrowing makes breathing difficult and triggers characteristic symptoms. Understanding this underlying mechanism helps explain why asthma management requires ongoing attention.

## Risk Factors and Causes

Multiple factors contribute to asthma development:

- **Family History**: Genetics play a significant role. Children with one asthmatic parent have a 25% risk
- **Allergies**: Allergic sensitization often precedes asthma
- **Environmental Exposures**: Air pollution, secondhand smoke, and occupational irritants 
- **Infections**: Severe respiratory infections, particularly in early childhood
- **Obesity**: Associated with increased asthma risk
- **Hormonal Factors**: Changes related to puberty, menstruation, and menopause

## Types of Asthma

Asthma is not a single disease. Different types include:

- **Allergic Asthma**: Triggered by allergen exposure (most common)
- **Non-Allergic Asthma**: Triggered by infections, cold air, or stress
- **Occupational Asthma**: Develops from workplace exposures
- **Exercise-Induced**: Triggered by physical activity
- **Aspirin-Exacerbated**: Triggered by NSAIDs

## Prevalence

Asthma prevalence has been increasing, affecting approximately:
- 6 million children in the United States
- About 20 million adults
- 300 million people worldwide
- Yet 250,000 people die annually from asthma globally

## Prognosis

With proper management, most people with asthma can control their symptoms effectively. Some children outgrow asthma during adolescence, though the condition typically requires lifelong management in adults.

## Key Takeaways

- Asthma is chronic but manageable
- Proper treatment allows normal activities
- Early diagnosis and treatment are important
- Different phenotypes require different management approaches
- Asthma deaths are largely preventable with proper care` },
      { id: "a2", slug: "types-of-asthma", title: "Types of Asthma", content: `Explore the different types of asthma, including allergic, non-allergic, occupational, and exercise-induced asthma.

## Asthma Phenotypes and Endotypes

Modern asthma medicine recognizes that asthma is not a single disease but a syndrome with multiple phenotypes. Each phenotype has distinct characteristics, triggers, and treatment responses.

## Allergic Asthma

Accounting for approximately 80% of asthma cases, allergic asthma develops when immune system overreacts to allergens. When exposed to triggers like pollen or dust mites, IgE antibodies attached to mast cells trigger release of inflammatory mediators causing airway constriction.

## Non-Allergic Asthma

Affecting 10-20% of asthma patients, non-allergic asthma involves innate immune responses rather than IgE-mediated responses. Triggers include respiratory infections, air pollution, cold air, and stress.

## Occupational Asthma

Developing from workplace exposures, occupational asthma represents 5-15% of adult asthma. Common triggers include latex, isocyanates, grain dust, and chemical fumes.

## Exercise-Induced Bronchoconstriction

Affecting 8-20% of the population, exercise-induced asthma occurs when intense physical activity triggers airway narrowing. Symptoms typically resolve within 60 minutes.

## Aspirin-Exacerbated Respiratory Disease

This phenotype is characterized by asthma worsening in response to NSAIDs. Affecting 5-10% of asthma patients, this condition requires NSAID avoidance and use of alternative pain management.

## Severe Asthma

Representing 5-10% of cases, severe asthma persists despite high-dose controller treatment. These patients may benefit from biologic therapies.

## Eosinophilic Asthma

Characterized by elevated eosinophil levels, this phenotype benefits from biologic therapies targeting eosinophils.

## Frequently Asked Questions

**Can someone have multiple asthma types?**
Yes, overlapping phenotypes commonly occur.

**Does asthma type affect treatment?**
Significantly. Different phenotypes respond to different approaches.` },
      { id: "a3", slug: "asthma-in-children", title: "Asthma in Children", content: `Childhood asthma affects approximately 1 in 12 children. Early diagnosis and management are crucial for normal development and reducing complications.

## Why Children Develop Asthma

Genetic predisposition combined with environmental exposures creates asthma risk. Children with family history are significantly more likely to develop the condition. Early-life viral infections also increase risk.

## Recognizing Asthma Symptoms in Children

Symptoms vary by age. Toddlers may have frequent coughing during play or sleep. School-age children often display exercise limitations and noticeable wheezing. Watch for persistent dry cough, especially at night, during play, or with laughter.

## Diagnosis Challenges in Young Children

Children under 5 are difficult to test using standard spirometry. Doctors rely on clinical history, physical examination, and response to bronchodilators. Trial periods on controller medications help confirm diagnosis.

## Inhaler Delivery Devices

Proper delivery method is essential for medication effectiveness. Nebulizers work best for young children, converting liquid medication into fine mist. Metered dose inhalers with spacers suit older children better.

## Medications for Childhood Asthma

Inhaled corticosteroids remain first-line controllers, safely used in children with minimal systemic absorption. Quick-relief medications like albuterol provide rapid symptom relief.

## School Considerations

Work with school nurses to develop asthma action plans. Ensure access to rescue inhalers during sports and activities. Train staff on recognizing and responding to asthma attacks.

## Growth and Development

Properly controlled asthma does not affect normal growth. Uncontrolled asthma and high-dose corticosteroids may impact growth rates.

## Outgrowing Asthma

Many children experience symptom remission during teenage years, particularly those with mild allergic asthma. However, symptoms may return during adulthood.

## Family Lifestyle Adjustments

Avoid known triggers at home. Use air purifiers, maintain humidity levels, and reduce dust mites. Pet dander management is crucial in allergic children.

## Frequently Asked Questions

**Will my child need inhalers forever?**
Some children outgrow asthma, while others need lifelong management.

**Are inhalers safe for children?**
Yes, when used correctly, they're very safe with minimal side effects.

**Should my child avoid activities?**
No, with proper medication management, children participate fully in sports and activities.` },
      { id: "a4", slug: "adult-onset-asthma", title: "Adult-Onset Asthma", content: `Asthma developing in adulthood presents unique challenges and characteristics distinct from childhood-onset disease.

## Why Asthma Develops in Adults

Approximately 30-40% of adult asthma cases appear after age 40. Contributing factors include:

- **Occupational Exposures**: Workplace irritants or allergens
- **Severe Respiratory Infections**: Viral infections can trigger new-onset asthma
- **Allergic Sensitization**: Developing allergies in adulthood
- **Hormonal Changes**: Menopause in women, thyroid conditions
- **Obesity**: Weight gain increases asthma risk
- **Environmental Factors**: Air pollution and secondhand smoke

## Differences from Childhood Asthma

Adult-onset asthma often presents differently. Non-allergic asthma is more common. Symptoms may be subtle, attributed to other conditions. Diagnosis might be delayed, sometimes by years.

## Diagnostic Challenges

Adults often developed asthma gradually, making the onset difficult to pinpoint. Symptoms like persistent cough may be attributed to smoking or aging. Spirometry testing may occur late.

## Occupational Asthma

Representing 5-15% of adult asthma cases, occupational asthma develops from workplace chemical or dust exposures. Common industries include manufacturing, healthcare, and agriculture.

## Hormonal Changes and Asthma

Women experiencing menopause may develop asthma as estrogen levels decline. Pregnancy may improve, worsen, or initiate asthma symptoms.

## Management Considerations

Treatment principles remain similar to childhood asthma but must account for comorbidities. Adults often take multiple medications, requiring careful drug interactions assessment. Smoking cessation is critical for effectiveness.

## Lifestyle and Career Impacts

New asthma diagnosis can necessitate career changes if occupational. Lifestyle modifications may be required regarding exercise, housing environments, and medication access.

## Prognosis

Adult-onset asthma is often more persistent than childhood-onset, with lower remission rates. However, effective management allows most adults to maintain normal activities.

## Frequently Asked Questions

**Is adult-asthma diagnosis different?**
Yes, diagnosis may require additional testing to exclude other conditions.

**Can occupational exposure be fixed?**
Job changes may be necessary, but environmental controls sometimes work.

**Will it affect work performance?**
With proper control, most adults work normally around their asthma.` },
      { id: "a5", slug: "asthma-and-allergies", title: "Asthma and Allergies", content: `The connection between asthma and allergies is profound, with allergic asthma representing the most common type affecting 80% of asthma patients.

## The Allergy-Asthma Connection

Allergies and asthma share common underlying mechanisms involving immune system overreaction. Approximately 80% of asthma patients have allergic asthma. The presence of allergies significantly increases asthma risk.

## How Allergies Trigger Asthma

When exposed to allergens, IgE antibodies bind to mast cells in airways. This triggers release of inflammatory mediators including histamine, leukotrienes, and prostaglandins. These chemicals cause airway inflammation, mucus production, and constriction.

## Common Allergens in Asthma

Major asthma allergens include:

- **Dust Mites**: Present in bedding and furniture
- **Pollen**: From trees, grasses, and weeds
- **Pet Dander**: From cats, dogs, and other animals
- **Mold**: Thriving in damp environments
- **Cockroach Debris**: Common indoor allergen
- **Food Allergens**: Can trigger both allergic reactions and asthma

## Allergic Rhinitis Connection

Ninety percent of asthma patients have allergic rhinitis. This "united airway disease" concept recognizes that inflammation in the nose worsens asthma symptoms.

## Testing for Allergies

Skin prick tests and blood tests identify specific allergens. Knowing precise triggers allows targeted avoidance. Testing should precede intensive immunotherapy consideration.

## Allergen Avoidance Strategies

Comprehensive avoidance requires multiple measures:

- Mattress and pillow covers blocking dust mites
- High-efficiency air filters and cleaners
- Regular cleaning with HEPA vacuums
- Humidity control preventing mold growth
- Pet removal or separation from bedrooms
- Professional pest control if needed

## Allergy Medications and Asthma

Antihistamines and decongestants have minimal asthma effects. However, some decongestants may worsen symptoms in sensitive individuals.

## Immunotherapy Approaches

Allergen immunotherapy involves gradual exposure to increasing allergen amounts, desensitizing the immune system. Both subcutaneous and sublingual options exist.

## Non-Allergic Asthma Considerations

While 80% have allergic asthma, 20% have non-allergic asthma triggered by infections, air pollution, or exercise.

## Frequently Asked Questions

**Do all allergic people develop asthma?**
No, but having allergies increases asthma risk.

**Should I test for allergens?**
Testing helps identify specific triggers for targeted management.

**Can allergen avoidance cure asthma?**
It can't cure, but reducing exposure improves control significantly.` },
    ],
  },
  {
    id: "symptoms",
    title: "Symptoms & Triggers",
    category: "Symptoms",
    articles: [
      { id: "s1", slug: "common-asthma-symptoms", title: "Common Asthma Symptoms", content: `Recognizing asthma symptoms is critical for early diagnosis and treatment. Symptoms vary widely among individuals, ranging from mild to severe.

## Primary Asthma Symptoms

The four main asthma symptoms include:

- **Wheezing**: High-pitched breathing sound, especially during exhalation
- **Shortness of Breath**: Difficulty breathing or feeling out of breath
- **Chest Tightness**: Sensation of pressure or squeezing in chest
- **Coughing**: Persistent dry cough, especially at night or with activity

## When Symptoms Occur

Symptoms may present continuously in uncontrolled asthma or episodically when triggered. Symptoms worsen with specific triggers like allergen exposure or exercise. Symptoms can be worse at night, interrupting sleep.

## Wheezing Characteristics

Wheezing indicates narrowed airways. It occurs during exhalation primarily, though severe cases produce wheezing on both inhalation and exhalation. Not all asthmatics wheeze consistently.

## Coughing Patterns

Asthma cough is typically dry, non-productive, and triggered by laughter, talking, or cold air. The cough often worsens at night or early morning. Some patients experience cough-variant asthma with coughing as the primary symptom.

## Shortness of Breath

Dyspnea ranges from mild exertional breathlessness to severe resting shortness of breath. Patients describe feeling they cannot get enough air. This symptom particularly affects exercise tolerance.

## Chest Tightness

This sensation ranges from mild pressure to severe pain. Patients often describe feeling as if a heavy weight sits on their chest. Activity may worsen this sensation.

## Symptom Severity Spectrum

Symptoms span from intermittent and mild to constant and severe. Mild asthma produces symptoms once or twice weekly. Moderate asthma causes more frequent symptoms affecting daily activities. Severe asthma produces continuous symptoms limiting normal function.

## When to Seek Medical Attention

Immediate medical attention is needed for:

- Severe shortness of breath at rest
- Blue lips or fingernails
- Inability to speak complete sentences
- Extreme chest tightness
- Panic or extreme anxiety associated with breathing difficulty

## Frequently Asked Questions

**Are all asthma symptoms audible?**
No, symptoms don't always produce wheezing sounds.

**Can symptoms disappear spontaneously?**
Yes, symptoms may resolve without treatment, but inflammation persists.

**How quickly do symptoms develop?**
Onset ranges from minutes to hours depending on trigger severity.` },
      { id: "s2", slug: "asthma-triggers", title: "Asthma Triggers", content: `Understanding and avoiding asthma triggers is fundamental to managing symptoms and preventing exacerbations. Triggers vary significantly among individuals.

## Common Environmental Triggers

Environmental factors frequently trigger asthma symptoms:

- **Pollen**: Tree, grass, and weed pollen cause seasonal flares
- **Dust Mites**: Thrive in bedding and furniture
- **Pet Dander**: Cats, dogs, and other animals shed allergenic proteins
- **Mold**: Grows in damp environments
- **Air Pollution**: Vehicle exhaust and industrial emissions irritate airways
- **Cold Air**: Temperature drops trigger bronchoconstriction

## Infectious Triggers

Respiratory infections frequently precipitate asthma exacerbations. Viral infections like colds and flu are the most common infectious triggers. Bacterial infections occasionally trigger asthma in susceptible individuals.

## Exercise and Physical Activity

Exercise-induced bronchoconstriction affects 8-20% of the population. Cold, dry air enhances exercise effects. High-intensity exercise triggers symptoms more than moderate activity.

## Emotional Stress

Psychological stress and strong emotions can trigger asthma symptoms. Anxiety and panic worsen attacks through bronchospasm. Laughter and crying are strong emotional triggers.

## Occupational Triggers

Workplace exposures account for 5-15% of adult asthma. Chemical sensitizers, particulates, and biological agents trigger occupational asthma. Specific occupations carry higher risk.

## Medication-Related Triggers

Certain medications can trigger asthma:

- **NSAIDs**: Aspirin and ibuprofen in aspirin-sensitive individuals
- **Beta-Blockers**: Some blood pressure medications
- **ACE Inhibitors**: Can produce persistent cough

## Hormonal Triggers

Menstrual-related asthma affects some women. Pregnancy can improve, worsen, or trigger new asthma. Menopause symptoms may include asthma worsening.

## Food-Related Triggers

Food additives like sulfites trigger symptoms in some individuals. True food allergies can trigger asthma symptoms. Food-related triggers are less common than environmental.

## Trigger Identification

Keeping a symptom diary helps identify personal triggers. Recording timing, environmental conditions, and activities reveals patterns. Allergist testing can confirm allergic triggers.

## Frequently Asked Questions

**Do all asthmatics have the same triggers?**
No, triggers are highly individualized.

**Can triggers change over time?**
Yes, sensitivity may increase or decrease with exposure time.

**Is it necessary to avoid all triggers?**
While complete avoidance isn't always possible, reducing exposure improves control.` },
      { id: "s3", slug: "allergen-exposure", title: "Allergen Exposure", content: `Allergen exposure triggers the vast majority of asthma cases. Understanding how allergens trigger symptoms enables targeted prevention strategies.

## How Allergens Trigger Asthma

When sensitized individuals encounter allergens, IgE antibodies bind allergen proteins. This cross-links mast cell receptors, triggering immediate release of inflammatory mediators including histamine. These chemicals cause airway inflammation, mucus production, and smooth muscle constriction.

## Major Indoor Allergens

House dust mites are the most significant indoor allergen affecting 90% of asthmatic people. Dust mite feces contain potent allergens. Mites thrive in bedding, pillows, and upholstered furniture. Humidity above 50% promotes mite proliferation.

## Pet Allergen Management

Cats and dogs produce allergens in dander, saliva, and urine. Cat allergens are particularly potent due to protein concentration. Complete pet removal is most effective, though not always feasible. Air purifiers with high-efficiency particulate air (HEPA) filters reduce but don't eliminate pet allergens.

## Mold and Moisture Control

Mold grows in damp environments, producing spores that trigger symptoms. Bathrooms, basements, and kitchens require vigilant moisture control. Dehumidifiers maintain humidity below 50%. Promptly cleaning visible mold prevents spore spread.

## Pollen Management

Seasonal pollen peaks require increased vigilance. Keeping windows closed during high pollen seasons helps. HEPA air filters trap pollen particles. Washing clothes and showering after outdoor time reduces pollen exposure.

## Cockroach Allergen Reduction

Cockroach debris is a potent allergen in urban environments. Professional pest control combined with sanitation eliminates allergen sources. Sealing cracks and removing food sources prevents infestation.

## Dust Reduction Strategies

HEPA vacuuming removes settled dust. Wet-wiping surfaces traps dust rather than dispersing it. Minimizing carpeting reduces dust reservoirs. Air purifiers with HEPA filters capture airborne dust particles.

## Testing for Specific Allergens

Skin prick testing identifies specific allergens triggering symptoms. Radioallergosorbent testing (RAST) blood tests measure specific IgE levels. Identifying specific allergens allows targeted avoidance.

## Workplace Allergen Exposure

Occupational exposures require workplace modifications. Engineering controls reduce allergen dispersion. Personal protective equipment protects during high-exposure tasks. In some cases, job relocation or career changes become necessary.

## Frequently Asked Questions

**Can one outgrow allergen sensitivity?**
Desensitization through immunotherapy is possible but natural resolution is uncommon.

**Are air purifiers sufficient alone?**
No, they complement but don't replace source control measures.

**How long does it take allergen removal to help?**
Symptom improvement typically appears within weeks of effective control.` },
      { id: "s4", slug: "exercise-induced-asthma", title: "Exercise-Induced Asthma", content: `Exercise-induced bronchoconstriction affects 5-20% of the general population and up to 50% of elite athletes. With proper management, most people with asthma can participate fully in physical activities.

## Understanding Exercise-Induced Asthma

During intense exercise, increased minute ventilation requires breathing cold, dry air. This rapid cooling and drying of airways triggers bronchoconstriction. Symptoms typically peak within 10 minutes after exercise cessation, resolving spontaneously within 60 minutes.

## Risk Factors for Exercise-Induced Asthma

Factors increasing exercise-induced asthma risk include:

- **Cold Air Exposure**: Winter sports and outdoor exercise in cold climates
- **Dry Air Environments**: Indoor heated spaces during winter
- **High-Intensity Exercise**: Vigorous sports more problematic than moderate activity
- **Uncontrolled Baseline Asthma**: Underlying inflammation increases susceptibility
- **Allergen Exposure**: Exercising during high pollen season worsens symptoms
- **Respiratory Infections**: Recent viral infections increase susceptibility

## Prevention Strategies

Adequate warm-up periods reduce symptoms in some individuals. Breathing through the nose warms and humidifies air before reaching airways. Maintaining good asthma control with regular controller medications reduces exercise-induced symptoms.

## Pre-Exercise Medication

Using quick-relief inhalers 15 minutes before exercise prevents symptoms in most individuals. Cromolyn sodium, a mast cell stabilizer, provides good prevention with minimal side effects.

## Warm-Up and Cool-Down

Extended warm-up periods reduce intensity and duration of symptoms. Gradually increasing exercise intensity allows protective accommodation. Cool-down periods after exercise help symptom resolution.

## Sport-Specific Considerations

Swimming involves breathing humid air, making it ideal for asthmatic athletes. Basketball and soccer involve intense activity with intermittent effort. Winter sports involvement cold air exposure, increasing symptoms. Cross-country running combines cold air and sustained intensity.

## Environmental Modifications

Training in humid environments reduces symptoms. Indoor training during winter eliminates cold air exposure. Using humidifiers creates protective microenvironments.

## Elite Athletic Competition

Many Olympic and professional athletes have asthma, competing successfully with proper management. Medication use by athletes is carefully regulated but allowed. Competition success demonstrates that asthma need not limit athletic potential.

## When Exercise Must Be Limited

Uncontrolled asthma or severe exercise-induced symptoms may necessitate activity modification. Choosing sports with intermittent rather than sustained intensity helps. Swimming or volleyball may be better tolerated than running.

## Frequently Asked Questions

**Is asthma exercise-induced if symptoms develop during exercise?**
Not necessarily. Baseline asthma worsens during exercise. True exercise-induced asthma only manifests during activity.

**Can I participate in high-level sports with asthma?**
Yes, with proper management and medication use.

**Will exercise help my asthma?**
Regular moderate exercise improves fitness and may reduce asthma severity.` },
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnosis & Testing",
    category: "Diagnosis",
    articles: [
      { id: "d1", slug: "how-is-asthma-diagnosed", title: "How is Asthma Diagnosed?", content: `Accurate asthma diagnosis requires clinical assessment, spirometry testing, and careful evaluation of symptoms and triggers.

## Clinical History Assessment

The diagnosis begins with thorough history taking. Doctors inquire about symptom onset, frequency, and triggers. Family history of asthma and allergies increases diagnostic likelihood. Environmental exposures and occupational history provide important context.

## Symptom Pattern Recognition

Chronic symptoms including wheezing, dyspnea, chest tightness, or cough suggest asthma. Symptoms worse at night or with exercise are characteristic. Symptoms triggered by specific exposures align with asthma diagnosis.

## Physical Examination

During examination, doctors listen for wheezing with stethoscope. While wheezing supports asthma diagnosis, its absence doesn't exclude it. Skin examination may reveal atopic dermatitis, suggesting allergic predisposition.

## Spirometry Testing

Spirometry is the gold standard for asthma diagnosis. This test measures how much air lungs can hold and how quickly air moves. Results show FEV1 (forced expiratory volume in one second) reduction typical of asthma.

## Sputum Eosinophil Testing

Elevated eosinophils in sputum samples indicate eosinophilic asthma. This test helps identify patients who benefit from specific biologic therapies. Results guide personalized treatment approaches.

## Bronchial Challenge Testing

For borderline spirometry results, methacholine challenge induces bronchoconstriction. Positive challenges confirm airway hyperresponsiveness. Negative results essentially rule out asthma diagnosis.

## Peak Flow Measurement

Peak flow meters measure maximum airflow during forced exhalation. Significant day-to-day variability suggests asthma. Normal peak flow doesn't exclude asthma but supports diagnosis when reduced.

## Allergy Testing

Skin prick testing identifies specific allergen triggers. Positive tests combined with symptoms strengthen asthma diagnosis. Allergy testing guides allergen avoidance recommendations.

## Asthma Control Assessment

Once diagnosed, doctors assess control using standardized questionnaires. These measure symptom frequency, nighttime awakening, and activity limitation. Control assessment guides medication intensity adjustments.

## Diagnostic Criteria

Asthma diagnosis requires:

- Presence of characteristic symptoms
- Demonstration of reversible airway obstruction or hyperresponsiveness
- Exclusion of alternative diagnoses
- Positive response to asthma medications

## Frequently Asked Questions

**Can asthma be diagnosed without spirometry?**
While preferred, spirometry isn't essential if clinical presentation is clear and response to asthma treatment confirms diagnosis.

**At what age can asthma be diagnosed?**
Asthma diagnosis can occur at any age, though diagnosis before age 5 is challenging without testing capabilities.

**Can one test rule out asthma?**
A single negative test doesn't exclude asthma. Diagnosis requires clinical correlation.` },
      { id: "d2", slug: "allergy-testing", title: "Allergy Testing", content: `Allergy testing identifies specific triggers contributing to individual asthma cases, enabling targeted avoidance and appropriate treatment selection.

## Types of Allergy Testing

Two primary allergy testing methods exist: skin testing and blood testing. Skin prick tests provide rapid results and broad allergen screening. Blood tests quantify specific IgE levels and provide alternatives when skin testing is contraindicated.

## Skin Prick Testing

During skin prick testing, small allergen extracts are introduced into the skin. Reactions appear as raised, red wheals within 15 minutes. Larger wheals indicate greater sensitivity. Testing typically screens 10-50 common allergens simultaneously.

## Radioallergosorbent Testing

RAST blood tests measure specific IgE antibodies to particular allergens. Laboratory analysis quantifies allergen-specific IgE levels. Results provide quantitative allergen sensitivity data.

## ImmunoCAP Testing

Drawing from the same blood samples, ImmunoCAP tests provide standardized, reproducible allergen quantitation. Results are highly specific and sensitive. Testing accommodates multiple allergens from single blood samples.

## Interpreting Test Results

Positive tests indicate allergen sensitization but don't prove causation. Some sensitized individuals don't develop symptoms from exposure. Clinical correlation is essential for meaningful interpretation.

## Seasonal vs. Perennial Allergen Sensitivity

Seasonal allergen sensitivity causes symptoms restricted to specific seasons. Perennial allergen sensitivity causes year-round symptoms. Many individuals have both seasonal and perennial sensitivities.

## Allergen-Specific Immunotherapy Guidance

Allergy test results guide immunotherapy candidate selection. Testing identifies specific allergens worth desensitization. Testing determines treatment allergen content.

## Environmental Allergen Measurement

In some cases, quantitative environmental allergen measurement guides avoidance. Dust mite allergen levels, for example, can be measured throughout the home. Specific allergen levels guide remediation intensity.

## Limitations of Allergy Testing

Elderly patients may have reduced skin reactivity despite allergen sensitivity. Antihistamine medications interfere with skin testing. Some individuals develop symptoms without detectable sensitization.

## When Testing Is Helpful

Testing is particularly helpful for allergic rhinitis with asthma. Testing aids immunotherapy consideration. Testing guides environmental control intensity.

## Cost and Insurance Considerations

Allergy testing costs range from moderate to significant. Most insurance plans cover testing when medically indicated. Out-of-pocket costs vary by testing type and number of allergens.

## Frequently Asked Questions

**Is allergy testing painful?**
Skin testing involves minimal discomfort. Blood tests are no different from standard blood draws.

**Do I need both skin and blood testing?**
Usually one method suffices. Doctors select based on clinical context and patient preference.

**Should everyone with asthma have allergy testing?**
Most allergic asthma patients benefit, but testing isn't universal for all asthma.` },
      { id: "d3", slug: "medical-history-assessment", title: "Medical History Assessment", content: `Medical history provides essential diagnostic information for asthma evaluation. Comprehensive history-taking guides appropriate testing and treatment decisions.

## Family History Significance

Family history significantly increases asthma and allergy likelihood. Children with one asthmatic parent have 25% asthma risk. Risk doubles with two asthmatic parents. Family history also indicates potential for severe disease.

## Early-Life Infection History

Severe respiratory infections during early childhood increase asthma risk. Bronchiolitis, particularly severe cases, predisposes to later asthma. Recurrent infections in early childhood suggest predisposition.

## Atopic Disease History

Atopic dermatitis in early life increases asthma risk. Allergic rhinitis frequently co-occurs with asthma. Food allergies sometimes precede asthma development. This pattern following atopic march suggests allergic predisposition.

## Exposure History Assessment

Childhood environmental exposures shape asthma development. Prenatal smoke exposure increases risk. Mold exposure and water damage in early life increase risk. Early allergen exposure sometimes protects against asthma development.

## Occupational History Evaluation

Recent asthma development in working adults suggests occupational causes. Night-time symptom improvement during vacation suggests workplace triggers. Job exposures guide occupational asthma diagnosis.

## Medication Review

Current medications may affect asthma. Beta-blockers can worsen asthma. NSAIDs trigger aspirin-exacerbated asthma. ACE inhibitors cause persistent cough mimicking asthma.

## Symptom Characterization

Detailed symptom description guides diagnosis. Cough characteristics, timing, and duration clarify asthma likelihood. Trigger relationships strengthen asthma diagnosis.

## Exercise Tolerance Assessment

Exercise-induced symptoms suggest asthma or alternative diagnoses. Detailed exercise history distinguishes true exercise-induced asthma. Poor exercise tolerance despite symptoms controls guides management.

## Smoking History Documentation

Active smoking worsens asthma control and reduces medication effectiveness. Secondhand smoke exposure impairs control. Smoking cessation recommendation is universal for asthmatic smokers.

## Pregnancy and Hormonal History

Pregnancy significantly impacts asthma in many women. Onset or worsening during pregnancy clarifies disease nature. Menstrual relationships in women suggest hormonal influences.

## Mental Health and Stress Assessment

Stress and anxiety trigger or worsen asthma symptoms. Panic attack misdiagnosis happens when asthma mimics anxiety. Simultaneous anxiety disorder management improves asthma outcomes.

## Frequently Asked Questions

**Is family history alone sufficient for asthma diagnosis?**
No, symptoms plus objective testing confirm diagnosis.

**Does childhood pneumonia always trigger asthma?**
No, most pneumonia survivors don't develop asthma.

**How does obesity relate to asthma?**
Obesity increases asthma prevalence through multiple mechanisms.` },
    ],
  },
  {
    id: "treatment",
    title: "Treatment & Management",
    category: "Treatment",
    articles: [
      { id: "t1", slug: "asthma-medications", title: "Asthma Medications", content: `Asthma medications fall into two categories: quick-relief medications for acute symptoms and long-term control medications for prevention.

## Quick-Relief Medications

Bronchodilators like albuterol (salbutamol) relax airway smooth muscles providing rapid symptom relief. Injectable epinephrine treats anaphylaxis with bronchospasm. Most patients keep rescue inhalers constantly available.

## Inhaled Corticosteroids

Inhaled corticosteroids represent the most effective asthma controller medication. They reduce airway inflammation, forming the foundation of moderate-to-severe asthma treatment. Side effects with inhaled therapy are minimal compared to systemic steroids.

## Long-Acting Beta-Agonists

Long-acting beta-agonists (LABAs) like salmeterol provide 12-hour bronchodilation. LABAs are never used alone but always combined with inhaled corticosteroids. The combination provides superior control compared to either agent alone.

## Leukotriene Modifiers

Leukotriene modifiers block inflammatory cascade components specific to asthma. Medicines like montelukast provide oral alternatives to inhaled therapy. They're particularly useful for aspirin-sensitive and allergen-induced asthma.

## Long-Acting Muscarinic Antagonists

Anticholinergic agents like tiotropium provide bronchodilation through different mechanisms. These agents are typically used as add-on therapy. Several inhaled combinations include anticholinergics.

## Biologic Therapies

Unprecedented asthma control is achievable with targeted biologic therapies. Omalizumab targets IgE reduced allergen-induced asthma symptoms. Anti-IL-5 therapies like mepolizumab target eosinophilic inflammation.

## Anti-IL-4 Receptor Therapy

Dupilumab blocks IL-4 signaling relevant to allergic and eosinophilic asthma. This therapy effectively controls even severe allergic asthma. It represents major advancement in biologic therapy options.

## Theophylline Medications

Though less commonly used today, theophylline provides weak bronchodilation through phosphodiesterase inhibition. Narrow therapeutic windows make dosing challenging. Most specialists prefer newer agents.

## Inhaler Technique Important

Proper inhaler technique determines medication delivery. Many patients use inhalers incorrectly, reducing effectiveness. Spacers improve drug delivery in patients with technique difficulties. Nebulizers provide alternative delivery for those unable to use inhalers.

## Medication Combinations

Most asthma patients benefit from combination therapy. Controllers with rescue medications in the same device improve adherence. These "single-maintenance-and-reliever-therapy" inhalers simplify regimens.

## Frequently Asked Questions

**Will my child need asthma medications forever?**
Some outgrow asthma, but most require long-term management.

**Are asthma medications safe?**
Yes, when used appropriately, asthma medications are very safe.

**Can continuous medication reduce symptoms to absence of need?**
Perfect control is possible, but preventive medication typically continues.` },
      { id: "t2", slug: "asthma-action-plan", title: "Asthma Action Plan", content: `A written asthma action plan provides personalized guidance for symptom management, emergency response, and disease monitoring.

## Action Plan Purpose

The action plan serves as a roadmap for managing asthma daily and during emergencies. It clarifies appropriate medication use at different symptom levels. It provides emergency contact information and red flag symptoms requiring urgent care.

## Green Zone—Well-Controlled Asthma

Green zone indicates optimal control with no symptoms. Daily controller medications are taken as prescribed. Peak flow measurements remain in the normal range. School and work performance are unaffected.

## Yellow Zone—Caution Required

Yellow zone indicates early warning signs requiring intervention. Symptoms appear but are not severe. Peak flow decreases 50-80% of personal best. Nighttime awakening occurs, though not frequently.

## Red Zone—Medical Emergency

Red zone indicates severe asthma exacerbation. Severe shortness of breath persists despite rescue inhaler use. Blue lips or fingernails appear. Speech limitation to single words occurs.

## Daily Controller Medications

The action plan specifies daily medications taken regardless of symptoms. Most patients use inhaled corticosteroids daily. The plan documents exact inhalers, doses, and administration frequency.

## Quick-Relief Medication Use

The plan clarifies when and how to use rescue inhalers. Initial rescue inhaler use at symptom onset is standard. Repeating doses after 15 minutes is appropriate if symptoms persist.

## Peak Flow Monitoring

Many plans include peak flow measurements guiding management decisions. Measurements taken first thing in morning establish personal baseline. Significant decreases guide medication adjustments or urgent care.

## Trigger Avoidance Strategies

The action plan identifies specific individual triggers. Avoidance measures appropriate for those triggers are documented. Environmental controls and behavioral modifications are detailed.

## When to Contact Your Doctor

The plan clarifies escalation pathways for symptom progression. Non-urgent situations warrant phone consultations. Medication adjustments may occur following poor control reports.

## When to Seek Emergency Care

Specific emergency symptoms are clearly documented. Severe shortness of breath, unresponsive to relief medications requires emergency evaluation. Chest pain associated with asthma symptoms warrants urgent assessment.

## Follow-Up Revisit Frequency

The plan establishes follow-up visit schedules. Well-controlled asthma typically requires annual assessment. Poorly controlled asthma warrants more frequent visits.

## Patient Education Components

The action plan provides education on asthma basics. Medication side effects and proper use are explained. Trigger identification and avoidance strategies are reinforced.

## Frequently Asked Questions

**How often should I review my action plan?**
Review at each doctor visit, particularly if symptoms change or medications adjust.

**What should someone with asthma always carry?**
A rescue inhaler is essential, along with the written action plan.

**Can action plans change?**
Yes, as asthma control improves or worsens, your action plan may be modified.` },
      { id: "t3", slug: "trigger-avoidance", title: "Trigger Avoidance", content: `Trigger avoidance forms the foundation of asthma management alongside medication. Reducing exposure to identified triggers significantly improves symptom control.

## Home Environment Control

The home environment requires primary attention as people spend significant time there. Dust mite control involves barrier covers on mattresses and pillows. Washing bedding weekly in hot water eliminates mites.

## Pet Management

Pet ownership is possible with asthma but requires accommodation. Complete pet removal is most effective for pet-allergic individuals. If pets remain, keeping animals out of bedrooms reduces exposure.

## Humidity and Mold Control

Maintaining humidity below 50% prevents dust mite and mold growth. Dehumidifiers actively reduce moisture in humid climates. Bathroom exhaust fans remove moisture from bathing and showering.

## Air Quality Improvements

High-efficiency particulate air (HEPA) filtration removes fine particles. Whole-house HEPA filters provide comprehensive protection. Room-based HEPA filtration targets specific areas.

## Smoke Avoidance

Secondhand smoke exposure is particularly harmful to asthma control. Complete smoke-free environments are essential. This includes outdoor air near buildings with open windows.

## Chemical Trigger Avoidance

Household cleaners often trigger asthma symptoms. Using fragrance-free, hypoallergenic products reduces chemical triggers. Improving ventilation during cleaning reduces chemical inhalation.

## Workplace Triggers

Occupational exposures require workplace modification. Engineering controls reduce allergen or irritant dispersion. Personal protective equipment provides additional protection.

## Medication-Induced Triggers

NSAID avoidance is essential for aspirin-sensitive individuals. Alternative pain management uses acetaminophen or specific medications. Beta-blockers should be replaced with asthma-safe alternatives.

## Exercise-Induced Trigger Prevention

Warm-up periods before exercise reduce exercise-induced symptoms. Breathing through the nose during exercise warms inspired air. Pre-exercise albuterol use prevents most exercise-induced symptoms.

## Infection Prevention

Handwashing reduces respiratory infection exposure. Annual influenza vaccination prevents seasonal infection. Pneumococcal vaccination protects against bacterial infections.

## Stress Management

Stress reduction through relaxation techniques improves asthma control. Regular moderate exercise improves asthma and overall health. Adequate sleep supports immune function.

## Dietary Considerations

Food allergen avoidance is essential for food-sensitive individuals. Sulfite-containing foods trigger symptoms in sulfite-sensitive individuals. Proper diet maintains healthy body weight.

## Frequently Asked Questions

**Can someone with asthma have pets?**
Yes, with accommodation like pet-free bedrooms and HEPA filtration.

**Do all asthmatics need to avoid the same triggers?**
No, triggers are highly individualized requiring personal identification.

**Is complete trigger avoidance possible?**
Complete avoidance often isn't realistic for common triggers like pollen and air pollution.` },
      { id: "t4", slug: "working-with-your-doctor", title: "Working with Your Doctor", content: `Strong doctor-patient relationships are fundamental to successful asthma management. Regular communication and collaborative decision-making optimize outcomes.

## Establishing Clear Communication

Effective communication begins with thorough history-taking. Patients should describe symptoms, triggers, and lifestyle impact clearly. Doctors ask clarifying questions to understand individual disease manifestations.

## Medication Adherence Discussion

Most asthma treatment failure results from non-adherence rather than medication ineffectiveness. Regular discussions about medication concerns improve adherence. Simplifying regimens improves compliance.

## Regular Revisit Scheduling

Scheduled office visits ensure ongoing disease monitoring. Well-controlled asthma requires annual assessment minimum. Poorly controlled asthma warrants more frequent evaluation.

## Self-Monitoring Education

Patients should understand normal peak flow ranges. Charting peak flow trends identifies deterioration early. Symptom diaries reveal trigger patterns and control status.

## Treatment Adjustment Discussions

Symptom progression warrants medication intensification discussions. Doctors adjust medications based on symptom frequency and severity. Changes to controller medications occur during follow-up visits.

## Biologic Therapy Consideration

Patients with severe asthma despite high-dose therapy should discuss biologics. Type-2 inflammatory biomarkers predict biologic therapy responsiveness. Specialist referral clarifies biologic candidacy.

## Asthma Action Plan Development

Collaborative action plan development ensures patient understanding. Patients should know their green, yellow, and red zone symptoms. Clear escalation pathways prevent treatment delays.

## Allergy and Immunotherapy Discussion

Discussion of allergy testing and immunotherapy options is appropriate. Patients should understand potential benefits and limitations. Immunotherapy candidates benefit from allergen identification.

## Specialist Referral Criteria

Primary care physicians typically manage mild-moderate asthma. Referral to pulmonologists is appropriate for severe or difficult-to-control asthma. Allergy specialists evaluate allergen-driven disease.

## Emergency Preparedness Planning

Patients should understand when emergency evaluation is necessary. Asthma action plans clearly delineate emergency symptoms. Emergency contact information should be readily available.

## Psychosocial Assessment

Anxiety and depression commonly co-occur with asthma. Screening for mood disorders improves outcomes. Mental health support may significantly improve asthma control.

## Prevention and Vaccination

Annual influenza vaccination is strongly recommended. Pneumococcal vaccination protects against bacterial infections. Respiratory syncytial virus vaccines are emerging for high-risk patients.

## Frequently Asked Questions

**How often should I see my asthma doctor?**
At minimum annually if well-controlled, more frequently if poorly controlled.

**Should I see a pulmonologist or allergist?**
This depends on asthma severity and whether allergic factors predominate.

**What should I prepare before my appointment?**
Have your peak flow readings, symptom chart, and medication list available.` },
    ],
  },
  {
    id: "prevention",
    title: "Prevention & Emergencies",
    category: "Prevention",
    articles: [
      { id: "p1", slug: "preventing-asthma-attacks", title: "Preventing Asthma Attacks", content: `Prevention forms the cornerstone of asthma management, aiming to minimize attacks and maintain normal daily functioning.

## The Prevention Hierarchy

Prevention occurs at multiple levels. Primary prevention prevents asthma development in susceptible individuals. Secondary prevention reduces symptom frequency and severity in diagnosed asthma. Tertiary prevention limits complications from established severe disease.

## Controller Medication Adherence

Regular controller medication use prevents most asthma attacks. Inhaled corticosteroids reduce inflammation preventing symptoms. Skipping doses increases attack risk significantly.

## Allergy Trigger Avoidance

Learning individual triggers enables avoidance strategies. Removing or reducing allergen exposure prevents attack triggering. Environmental controls are often simple and cost-effective.

## Regular Monitoring

Routine healthcare follow-up identifies deterioration early. Regular spirometry documents changing lung function. Peak flow monitoring reveals seasonal or progressive changes.

## Respiratory Infection Prevention

Annual influenza vaccination dramatically reduces infection-related attacks. Handwashing prevents common cold transmission. Avoiding sick individuals during high-risk season protects airways.

## Weight Management

Obesity worsens asthma control through multiple mechanisms. Weight loss improves symptoms significantly in many patients. Diet and exercise improvements support both asthma and general health.

## Stress and Emotion Management

Stress reduction techniques improve asthma control. Regular exercise benefits cardiovascular fitness and asthma. Adequate sleep supports immune function.

## Air Quality Awareness

Checking daily air quality forecasts guides activity planning. Staying indoors during poor air quality days reduces exposure. Using air purifiers in homes improves indoor air.

## Medication Technique

Proper inhaler technique ensures effective medication delivery. Regular technique assessment prevents reversion to incorrect methods. Spacers improve delivery for technique-challenged patients.

## Action Plan Familiarity

Knowing when to escalate care prevents severe attacks. Keeping rescue inhalers accessible at all times is essential. Knowing emergency contact information saves critical time.

## Workplace and School Planning

Communicating asthma status to employers and schools enables support. Identified triggers can sometimes be modified occupationally. Accessible rescue inhalers at schools prevent attack progression.

## Frequently Asked Questions

**Can asthma attacks be completely prevented?**
In well-controlled asthma, attacks are rare but complete prevention isn't guaranteed.

**How important is strict trigger avoidance?** 
Very important—the more triggers eliminated, the fewer attacks occur.

**Should I avoid exercise to prevent attacks?**
No, controlled patients can exercise normally and may actually benefit.` },
      { id: "p2", slug: "recognizing-asthma-attack", title: "Recognizing an Asthma Attack", content: `Recognizing early warning signs of asthma attacks enables timely intervention preventing severe episodes.

## Early Warning Signs

Early warning signs often appear hours or days before obvious breathing difficulty. Itching on the roof of mouth or neck occurs in some individuals. Tiredness or unusual exhaustion often precedes attacks. Mood changes including irritability or nervousness may appear.

## Cough Escalation

Progressive coughing may indicate attack development. Cough becoming more frequent marks deterioration. Cough changing from dry to productive suggests inflammation increase.

## Peak Flow Reduction

Peak flow declining to 50-80% of baseline indicates impending attack. A rapid drop warrants immediate action. Consistent peak flow readings below baseline suggest poor control.

## Wheezing and Breathing Changes

Audible wheezing during normal activities indicates airway narrowing. Whistling sound during breathing is characteristic. Wheezing that continues at rest warrants medical attention.

## Chest Tightness Sensation

Chest pressure or tightness marks attack progression. Some describe sensation as if a band tightens around chest. Chest symptoms significantly worsen with exertion.

## Shortness of Breath Progression

Dyspnea on exertion progresses to dyspnea at rest as attacks worsen. Difficulty speaking complete sentences indicates significant airway obstruction. Shortness of breath interfering with sleep specifically warrants attention.

## Neck and Shoulder Muscle Use

Muscle recession above collarbones or between ribs indicates increased work of breathing. This sign indicates significant airway obstruction. Abdominal breathing replacing normal chest breathing suggests distress.

## Anxiety and Panic Signs

Patient anxiety may accompany breathing difficulty. Some patients become unusually emotional. Panic may worsen breathing through abnormal breathing patterns.

## When to Use Rescue Inhaler

Rescue inhalers should be used at first warning signs. Two puffs followed by 15-minute rest is standard. If symptoms persist after 15 minutes, additional doses may be needed.

## Emergency Warning Signs

Severe shortness of breath at rest requires immediate emergency evaluation. Blue lips or fingernails indicate hypoxia requiring urgent care. Inability to speak complete sentences warrants 911 call.

## Other Emergency Indicators

Severe chest pain associated with asthma requires emergency evaluation. Confusion or altered mental status with breathing difficulty is serious. Extreme fatigue preventing normal activity warrants urgent assessment.

## Response Time Importance

Rapid recognition prevents symptom escalation. Early rescue inhaler use prevents severe attacks. Waiting for symptoms to pass risks severe deterioration.

## Frequently Asked Questions

**How quickly do asthma attacks develop?**
Onset ranges from minutes to hours depending on trigger severity.

**Can panic attacks mimic asthma attacks?**
Yes, overlap exists, but asthma-specific signs like wheezing help differentiate.

**When should someone go to the emergency room?**
Rescue inhalers ineffective after 15 minutes warrant emergency evaluation.` },
      { id: "p3", slug: "recovery-after-severe-attacks", title: "Recovery After Severe Attacks", content: `Recovery following severe asthma attacks requires understanding post-attack physiology and appropriate follow-up care.

## Immediate Post-Attack Period

Following attack resolution, airways remain inflamed and reactive. Additional attacks occur more easily in this heightened state. Continued monitoring and medication use prevent recurring attacks.

## Medication Adjustments

Controller medications should be increased if severe attacks occur. Increased inflammation requires intensified anti-inflammatory therapy. Many doctors triple inhaler doses following severe attacks.

## Medical Follow-Up Timing

Urgent medical evaluation within 24-48 hours of severe attacks is standard. Earlier evaluation (same day or within hours) is appropriate for hospitalizations. Medical follow-up clarifies attack triggers and prevents recurrence.

## Activity Restrictions

Gradual activity resumption prevents premature attack recurrence. Full exertion should be delayed several days. Walking and light activity can resume sooner if symptoms permit.

## Sleep and Rest Emphasis

Adequate sleep supports immune recovery. Extra rest aids general health recovery. Fatigue following severe attacks is normal and expected.

## Psychological Recovery

Severe attacks create anxiety and fear affecting patients and families. Recognition of psychological impact aids recovery. Some benefit from counseling following traumatic attacks.

## Trigger Identification

Attacks often teach important trigger lessons. Documentation of preceding hours aids trigger identification. Pattern recognition guides prevention strategies.

## Home Care Basics

Continuing home environment controls prevents trigger re-exposure. Maintaining dust mite avoidance, humidity control, and allergen reduction continues. Perfect home environments further prevent attacks.

## Medication Monitoring

Responsiveness to rescue medications changes post-attack. Needing more rescue medication doses indicates poor control. Peak flow monitoring documents recovery trajectory.

## Asthma Action Plan Review

Action plans may require modification based on attack experience. Escalation points might need adjustment. Emergency protocols may benefit from review.

## Prevention Strategy Intensification

Hospital admission warrants serious prevention strategy evaluation. Multiple attacks suggest need for specialist evaluation. Biologic therapy may prevent future severe episodes.

## Smoking Cessation Urgency

Severe attacks represent critical opportunities for smoking cessation. Secondhand smoke exposure should be eliminated completely. Professional cessation assistance is highly recommended.

## When to Suspect Complications

Persistent fever following attacks suggests infection. Continued shortness of breath despite treatment warrants evaluation. Chest pain persistence beyond typical attack duration requires assessment.

## Frequently Asked Questions

**How long does recovery take after a severe attack?**
Most physical recovery occurs within days, but inflammation may take weeks.

**When can normal activities resume?**
Gradual resumption over several days is appropriate, based on individual function.

**What causes repeated severe attacks?**
Poorly controlled baseline asthma, non-adherence, or unidentified major triggers cause recurrent attacks.` },
    ],
  },
];

export default function Asthma() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRefs = {
    "Basics": useRef(null),
    "Symptoms": useRef(null),
    "Diagnosis": useRef(null),
    "Treatment": useRef(null),
    "Prevention": useRef(null),
  };

  // Helper to scroll to section
  const scrollToSection = (category: string) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-gradient-to-r  from-purple-700 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold mb-2">Asthma</h1>
          <p className="text-lg opacity-95 mb-6">
            Your hub for understanding and managing asthma
          </p>

          <div className="flex justify-center">
            <nav className="flex gap-6 flex-wrap md:flex-nowrap justify-center mt-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab)}
                  className="px-8 py-4 rounded-full font-medium transition text-blue-400 bg-gray-900 hover:bg-gray-800 hover:text-blue-300 text-lg shadow-md"
                  style={{ minWidth: 120 }}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* CONTENT: Show all sections */}
      <section className="max-w-7xl mx-auto px-5 py-10 space-y-12">
        {sections.map((section) => (
          <div key={section.id} ref={sectionRefs[section.category]}>
            <Section section={section} />
          </div>
        ))}

        {/* NEWSLETTER */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            Get weekly Asthma updates
          </h2>

          {!subscribed ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="border border-blue-300 rounded px-4 py-2"
              />
              <button className="bg-blue-700 text-white rounded py-2 font-semibold">
                Sign Up
              </button>
            </form>
          ) : (
            <p className="text-green-700 font-medium">
              ✅ You’re subscribed successfully!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

/* ---------------- SECTION ---------------- */

function Section({ section }: {
  section: {
    title: string;
    articles: { id: string; slug: string; title: string; content: string }[];
  };
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map((article) => (
          <Link
            key={article.id}
            className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none no-underline"
            to={`/asthma/article/${article.slug}`}
            state={{ title: article.title }}
          >
            <img
              src="/placeholder.svg"
              alt={article.title}
              className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <span className="text-blue-700 text-sm font-semibold mt-auto">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
