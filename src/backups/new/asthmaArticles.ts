export interface AsthmaArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  author: string;
  authorRole: string;
  reviewer: string;
  reviewerRole: string;
  readTime: string;
  date: string;
  updatedDate: string;
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

## Understanding Asthma: Definition and Overview

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

### Infections
Severe respiratory infections in early childhood, particularly those caused by Respiratory Syncytial Virus (RSV) or rhinovirus, can damage developing lungs and increase the risk of developing asthma later in life.

### Obesity
Obesity is associated with a higher risk of developing asthma and often makes asthma harder to control. The exact mechanism is still being studied, but it likely involves systemic inflammation.

### Hormonal Factors
Hormonal changes can influence asthma. Some women develop asthma for the first time during or after menopause. Others notice changes in their asthma symptoms during their menstrual cycle or pregnancy.

## Types of Asthma

Asthma is not a "one-size-fits-all" disease. Doctors now classify asthma into different "phenotypes" or types based on triggers and patterns. Identifying your specific type can help tailor your treatment.

### Allergic Asthma
This is the most common type, affecting about 60% of people with asthma. It is triggered by exposure to allergens like:
*   Pollen (trees, grasses, weeds)
*   Dust mites
*   Pet dander (cats, dogs)
*   Mold spores
*   Cockroaches

In allergic asthma, the immune system mistakes these harmless substances for threats and launches an attack, releasing chemicals like histamine that cause airway inflammation.

### Non-Allergic Asthma
This type is triggered by factors other than allergens, such as:
*   Viral respiratory infections (colds, flu)
*   Cold, dry air
*   Exercise
*   Stress and strong emotions
*   Irritants like smoke, perfumes, or cleaning products

Non-allergic asthma often develops later in life and can be more severe.

### Occupational Asthma
This is asthma caused directly by work. It might be triggered by paint fumes, chemical dusts, latex, or animal proteins. Symptoms often improve on weekends or holidays when away from the workplace.

### Exercise-Induced Bronchoconstriction (EIB)
Often called "exercise-induced asthma," this occurs when physical activity triggers airway narrowing. Many people with chronic asthma have EIB, but some people *only* have symptoms during exercise. Breathing through the mouth during exercise brings cold, dry air into the lungs, which is a common trigger.

### Cough-Variant Asthma
In this type, the main—and sometimes only—symptom is a chronic, dry cough. It is often misdiagnosed as bronchitis or post-nasal drip. It is more common in children.

### Adult-Onset Asthma
While asthma often starts in childhood, it can develop at any age. Adult-onset asthma is less likely to be allergic and more likely to be persistent.

## Symptoms and Warning Signs

Recognizing asthma symptoms is critical. They can range from mild annoyance to a life-threatening emergency.

**Common Symptoms:**
*   **Wheezing:** A whistling or squeaky sound when you breathe (especially when breathing out).
*   **Coughing:** Often worse at night or early morning, making it hard to sleep.
*   **Chest Tightness:** Feeling like a band is tightening around your chest or someone is sitting on it.
*   **Shortness of Breath:** Feeling like you can't catch your breath or get enough air out of your lungs.

**Emergency Signs (Seek Immediate Help):**
*   Severe breathlessness or wheezing, especially at night or in the early morning.
*   Inability to speak more than short phrases due to shortness of breath.
*   Straining your chest muscles to breathe.
*   Low peak flow readings (if you use a meter).
*   No relief from a quick-relief (rescue) inhaler.

## Diagnosis

Diagnosing asthma involves a medical history, physical exam, and lung function tests.

### Spirometry
This is the gold standard test. You take a deep breath and blow into a sensor as hard and fast as you can. It measures:
*   **FVC (Forced Vital Capacity):** Total amount of air you can exhale.
*   **FEV1 (Forced Expiratory Volume in 1 second):** Amount of air exhaled in the first second.
A low FEV1/FVC ratio indicates obstruction. If your numbers improve significantly after taking a bronchodilator (like albuterol), it confirms the diagnosis of asthma.

### Peak Flow Monitoring
A peak flow meter is a simple, handheld device that measures how fast you can push air out of your lungs. It's less precise than spirometry but excellent for home monitoring.

### Other Tests
*   **FeNO Test:** Measures nitric oxide in your breath, a marker of inflammation.
*   **Challenge Tests:** Measuring lung function after exposure to triggers (like methacholine or exercise).
*   **Allergy Testing:** Skin or blood tests to identify allergic triggers.

## Treatment and Management

There is no cure for asthma, but it can be effectively managed. The goal is "asthma control": no symptoms, no limitations on activity, and no attacks.

### Medications
Asthma medications are generally divided into two categories:

**1. Controller Medications (Maintenance):**
These are taken daily to prevent symptoms and reduce inflammation.
*   **Inhaled Corticosteroids (ICS):** The most effective anti-inflammatory medicines (e.g., fluticasone, budesonide).
*   **Long-acting Beta Agonists (LABA):** Open airways for a long time (always used with ICS).
*   **Leukotriene Modifiers:** Pills that block inflammatory chemicals (e.g., montelukast).
*   **Biologics:** Shots or infusions for severe asthma that target specific immune pathways (e.g., Xolair, Dupixent).

**2. Quick-Relief Medications (Rescue):**
These are taken as needed for rapid symptom relief during an attack.
*   **Short-acting Beta Agonists (SABA):** Albuterol is the most common. It relaxes airway muscles quickly.
*   **Anticholinergics:** Like ipratropium, often used for severe attacks.

### Asthma Action Plan
Everyone with asthma should have a written Asthma Action Plan developed with their doctor. It uses a traffic light system:
*   **Green Zone:** Doing well. No symptoms. Take daily controllers.
*   **Yellow Zone:** Caution. Symptoms present. Take quick-relief meds and possibly adjust controllers.
*   **Red Zone:** Danger. Severe symptoms. Take rescue meds and seek medical help immediately.

## Living with Asthma

Living well with asthma involves more than just medicine.

### Trigger Avoidance
*   **Dust Mites:** Use allergen-proof mattress covers and wash bedding in hot water.
*   **Pets:** Keep pets out of the bedroom.
*   **Mold:** Fix leaks and use a dehumidifier.
*   **Smoke:** Do not smoke and avoid secondhand smoke.

### Healthy Lifestyle
*   **Exercise:** Regular activity strengthens lungs. Use medication before exercise if needed.
*   **Diet:** A diet rich in fruits and vegetables supports immune health.
*   **Weight Management:** Losing excess weight can improve asthma control.
*   **Vaccinations:** Get the annual flu shot and pneumonia vaccine, as infections are major triggers.

## Prognosis

With proper management, the prognosis for asthma is excellent. Most people can live normal, active lives. Childhood asthma often improves during adolescence, though it may return in adulthood. Severe, uncontrolled asthma can lead to permanent lung damage (airway remodeling), emphasizing the importance of early and consistent treatment.

## Key Takeaways

*   Asthma is a chronic inflammatory disease, not just "trouble breathing."
*   It is manageable with a combination of trigger avoidance and medication.
*   Inhaled corticosteroids are the cornerstone of maintenance treatment.
*   An Asthma Action Plan is essential for safety.
*   Early diagnosis and treatment prevent long-term complications.
*   You can live a full, active life—including playing sports—with well-controlled asthma.
`
      },
      {
        id: "a2",
        slug: "types-of-asthma",
        title: "Types of Asthma",
        excerpt: "Explore the different types of asthma, including allergic, non-allergic, occupational, and exercise-induced asthma.",
        category: "Basics",
        imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&h=600&fit=crop",
        author: "Dr. Sarah Mitchell",
        authorRole: "Pulmonologist",
        reviewer: "Dr. James Wilson",
        reviewerRole: "MD, Respiratory Medicine",
        readTime: "10 min read",
        date: "Feb 12, 2026",
        updatedDate: "Feb 12, 2026",
        content: `Asthma is not a single disease but a syndrome with multiple phenotypes. Each phenotype has distinct characteristics, triggers, and treatment responses.

## Allergic Asthma

Accounting for approximately 80% of asthma cases, allergic asthma develops when the immune system overreacts to allergens. When exposed to triggers like pollen or dust mites, IgE antibodies attached to mast cells trigger the release of inflammatory mediators causing airway constriction.

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
Significantly. Different phenotypes respond to different approaches.`
      },
       { id: "a3", slug: "asthma-in-children", title: "Asthma in Children", category: "Basics",
        imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&h=600&fit=crop",
        excerpt: "Childhood asthma affects approximately 1 in 12 children. Early diagnosis and management are crucial for normal development.",
        author: "Dr. Emily Chen", authorRole: "Pediatrician", reviewer: "Dr. Mark Davis", reviewerRole: "MD, Pediatrics",
        readTime: "12 min read", date: "Feb 14, 2026", updatedDate: "Feb 14, 2026",
        content: `Childhood asthma affects approximately 1 in 12 children. Early diagnosis and management are crucial for normal development and reducing complications.

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
      { id: "a4", slug: "adult-onset-asthma", title: "Adult-Onset Asthma", category: "Basics",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        excerpt: "Asthma developing in adulthood presents unique challenges and characteristics distinct from childhood-onset disease.",
        author: "Dr. Robert Lee", authorRole: "Pulmonologist", reviewer: "Dr. Sarah Mitchell", reviewerRole: "MD, Respiratory Medicine",
        readTime: "10 min read", date: "Feb 16, 2026", updatedDate: "Feb 16, 2026",
        content: `Asthma developing in adulthood presents unique challenges and characteristics distinct from childhood-onset disease.

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
      { id: "a5", slug: "asthma-and-allergies", title: "Asthma and Allergies", category: "Basics",
        imageUrl: "https://images.unsplash.com/photo-1513224502586-d1e602410265?w=800&h=600&fit=crop",
        excerpt: "The connection between asthma and allergies is profound. Learn how to manage allergic asthma effectively.",
        author: "Dr. Lisa Wong", authorRole: "Allergist", reviewer: "Dr. James Wilson", reviewerRole: "MD, Respiratory Medicine",
        readTime: "11 min read", date: "Feb 18, 2026", updatedDate: "Feb 18, 2026",
        content: `The connection between asthma and allergies is profound, with allergic asthma representing the most common type affecting 80% of asthma patients.

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
    articles: [
      { id: "s1", slug: "common-asthma-symptoms", title: "Common Asthma Symptoms", category: "Symptoms",
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop",
        excerpt: "Recognizing asthma symptoms is critical for early diagnosis and treatment. Symptoms vary widely among individuals.",
        author: "Dr. Sarah Mitchell", authorRole: "Pulmonologist", reviewer: "Dr. James Wilson", reviewerRole: "MD, Respiratory Medicine",
        readTime: "9 min read", date: "Feb 20, 2026", updatedDate: "Feb 20, 2026",
        content: `Recognizing asthma symptoms is critical for early diagnosis and treatment. Symptoms vary widely among individuals, ranging from mild to severe.

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
      { id: "s2", slug: "asthma-triggers", title: "Asthma Triggers", category: "Symptoms",
        imageUrl: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=800&h=600&fit=crop",
        excerpt: "Understanding and avoiding asthma triggers is fundamental to managing symptoms and preventing exacerbations.",
        author: "Dr. Lisa Wong", authorRole: "Allergist", reviewer: "Dr. James Wilson", reviewerRole: "MD, Respiratory Medicine",
        readTime: "12 min read", date: "Feb 22, 2026", updatedDate: "Feb 22, 2026",
        content: `Understanding and avoiding asthma triggers is fundamental to managing symptoms and preventing exacerbations. Triggers vary significantly among individuals.

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
      { id: "s3", slug: "allergen-exposure", title: "Allergen Exposure", category: "Symptoms",
        imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop",
        excerpt: "Allergen exposure triggers the vast majority of asthma cases. Learn how to identify and avoid your triggers.",
        author: "Dr. Lisa Wong", authorRole: "Allergist", reviewer: "Dr. James Wilson", reviewerRole: "MD, Respiratory Medicine",
        readTime: "8 min read", date: "Feb 24, 2026", updatedDate: "Feb 24, 2026",
        content: `Allergen exposure triggers the vast majority of asthma cases. Understanding how allergens trigger symptoms enables targeted prevention strategies.

## How Allergens Trigger Asthma

When sensitized individuals encounter allergens, IgE antibodies bind allergen proteins. This cross-links mast cell receptors, triggering immediate release of inflammatory mediators including histamine. These chemicals cause airway inflammation, mucus production, and smooth muscle constriction.

## Major Indoor Allergens

House dust mites are the most significant indoor allergen affecting 90% of asthmatic people. Dust mite feces contain potent allergens. Mites thrive in bedding, pillows, and upholstered furniture. Humidity above 50% promotes mite proliferation.

## Pet Allergen Management

Cats and dogs produce allergens in dander, saliva, and urine. Cat allergens are particularly potent due to protein concentration. Complete pet removal is most effective, though not always feasible. Air purifiers with high-efficiency particulate air (HEPA) filters reduce but don't eliminate pet allergens.

## Pollen Avoidance

Seasonal allergies (hay fever) often worsen asthma. Monitoring pollen counts helps plan activities. Keeping windows closed during peak pollen seasons prevents indoor contamination. Showering after outdoor activities removes pollen from skin and hair.

## Mold Control

Mold spores trigger severe asthma attacks. Mold thrives in damp basements, bathrooms, and kitchens. Fixing leaks, using exhaust fans, and maintaining low humidity prevents mold growth. Cleaning moldy surfaces with bleach solutions removes visible mold.

## Cockroach Allergens

Cockroach debris is a potent allergen, particularly in urban environments. Integrated pest management involving traps, bait, and sealing entry points is necessary. Deep cleaning removes accumulated allergens.

## Frequently Asked Questions

**Can I keep my pet if I'm allergic?**
It's difficult. Creating pet-free zones and using HEPA filters helps, but removal is best for health.

**How do I know if I have dust mites?**
They are microscopic and present in almost all homes. Assume they are present in bedding.

**Do air purifiers really work?**
High-quality HEPA purifiers effectively remove airborne allergens like dander and pollen.` },
    ],
  },
];
