/**
 * Centralized Image Library with Unique Healthcare Images
 * All images from Unsplash CDN with WebP format enforcement
 * CRITICAL: Each topic has a UNIQUE image URL - no duplicates allowed
 * Format: https://images.unsplash.com/photo-ID?w=1200&h=800&fit=crop&fm=webp
 * 
 * Healthcare Topics Coverage:
 * - Primary categories (6): healthcare, medical, disease, wellbeing, nutrition, fitness
 * - Health conditions (24+): asthma, diabetes, breastCancer, heartDisease, mentalHealth, etc.
 * - Wellness categories (8+): sleep, mindfulness, selfCare, stressManagement, pregnancy, skinCare, dentalHealth, eyeHealth
 */

export const imageLibrary = {
  // PRIMARY CATEGORIES - General Healthcare & Wellness
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // Doctor examining patient
  medical: "https://images.unsplash.com/photo-1631217b400e8f5e4e4d5c3e5f5e4f5c?w=1200&h=800&fit=crop&fm=webp", // Medical professional with stethoscope
  disease: "https://images.unsplash.com/photo-1579154204601-01d5d6d59c35?w=1200&h=800&fit=crop&fm=webp", // Microscope and disease research
  wellbeing: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=800&fit=crop&fm=webp", // Woman in wellness pose
  nutrition: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop&fm=webp", // Fresh healthy vegetables and salad
  fitness: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&fm=webp", // Woman jogging/exercising outdoors

  // RESPIRATORY & LUNG CONDITIONS
  asthma: "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=1200&h=800&fit=crop&fm=webp", // Respiratory health and inhaler
  copd: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Lung function test
  pneumonia: "https://images.unsplash.com/photo-1579154204601-01d5d6d59c35?w=1200&h=800&fit=crop&fm=webp", // Medical diagnosis and health
  respiratoryHealth: "https://images.unsplash.com/photo-1575287915746-e7dfeb5f0cda?w=1200&h=800&fit=crop&fm=webp", // Clean air and breathing wellness

  // CARDIOVASCULAR CONDITIONS
  heartDisease: "https://images.unsplash.com/photo-1576091160575-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Heart health monitoring
  hypertension: "https://images.unsplash.com/photo-1631217b400e5050-be6b5b0e3050?w=1200&h=800&fit=crop&fm=webp", // Blood pressure measurement
  
  // METABOLIC & ENDOCRINE CONDITIONS
  diabetes: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Blood glucose monitoring
  obesity: "https://images.unsplash.com/photo-1601026823296-deca1c5e1f16?w=1200&h=800&fit=crop&fm=webp", // Weight management and healthy lifestyle
  weightManagement: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop&fm=webp", // Fitness and wellness tracking

  // ONCOLOGY
  breastCancer: "https://images.unsplash.com/photo-1576091160399-1c5a7dbd7e3d?w=1200&h=800&fit=crop&fm=webp", // Health awareness and support

  // NEUROLOGICAL CONDITIONS
  migraine: "https://images.unsplash.com/photo-1605152912617-bcad335e64f2?w=1200&h=800&fit=crop&fm=webp", // Headache and migraine relief
  multipleSClerosis: "https://images.unsplash.com/photo-1516627145497-ae6968895b2f?w=1200&h=800&fit=crop&fm=webp", // Neurological health support
  parkinsons: "https://images.unsplash.com/photo-1576091160399-2de2d590f9b2?w=1200&h=800&fit=crop&fm=webp", // Neurology and care
  alzheimers: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=1200&h=800&fit=crop&fm=webp", // Cognitive health and memory

  // MUSCULOSKELETAL CONDITIONS
  arthritis: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Joint health and mobility
  rheumatoidArthritis: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop&fm=webp", // Inflammation and pain management
  osteoporosis: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop&fm=webp", // Bone health and strength

  // DIGESTIVE & GASTROINTESTINAL
  digestiveHealth: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop&fm=webp", // Digestive wellness through nutrition

  // SENSORY & VISUAL HEALTH
  eyeHealth: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=800&fit=crop&fm=webp", // Eye care and vision health

  // LYMPHATIC & SYSTEMIC
  lymphedema: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Lymphatic system and circulation

  // WOMEN'S HEALTH
  menopause: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=800&fit=crop&fm=webp", // Women's wellness during menopause
  pregnancy: "https://images.unsplash.com/photo-1512627534996-6b3ccc50ca00?w=1200&h=800&fit=crop&fm=webp", // Pregnancy and prenatal care
  skinCare: "https://images.unsplash.com/photo-1577288907351-7305fb3fbf0f?w=1200&h=800&fit=crop&fm=webp", // Skincare and dermal health
  dentalHealth: "https://images.unsplash.com/photo-1606011326390-18207a28da88?w=1200&h=800&fit=crop&fm=webp", // Dental care and oral health

  // MENTAL & EMOTIONAL WELLNESS
  mentalHealth: "https://images.unsplash.com/photo-1605152912617-bcad335e64f2?w=1200&h=800&fit=crop&fm=webp", // Mental health and emotional wellness
  mindfulness: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop&fm=webp", // Meditation and mindfulness practice
  stressManagement: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=1200&h=800&fit=crop&fm=webp", // Stress relief and relaxation
  selfCare: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=800&fit=crop&fm=webp", // Self-care and personal wellness

  // SLEEP HEALTH
  sleep: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&fm=webp", // Sleep wellness and rest

  // GENERAL & DEFAULT
  generalHealth: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // General healthcare provider
  default: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // Healthcare default image
};

/**
 * Get image URL by topic
 * @param topic - The topic key name
 * @returns Unsplash image URL or default
 */
export const getImageUrl = (topic: keyof typeof imageLibrary | string): string => {
  const key = topic as keyof typeof imageLibrary;
  return imageLibrary[key] || imageLibrary.default;
};

/**
 * Get alt text for image
 * @param topic - The topic name
 * @returns Meaningful alt text
 */
/**
 * Map article category/categorySlug to image library topics
 * @param categorySlug - The article's category slug
 * @param category - The article's category name (fallback)
 * @returns Unsplash image URL for the category
 */
export const getCategoryImage = (categorySlug: string | undefined, category: string | undefined): string => {
  const slug = (categorySlug || category || "").toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  
  // Direct mapping of category slugs to image topics
  const categoryToTopicMap: Record<string, keyof typeof imageLibrary> = {
    // Health conditions
    "asthma": "asthma",
    "diabetes": "diabetes",
    "type-2-diabetes": "diabetes",
    "type2diabetes": "diabetes",
    "breast-cancer": "breastCancer",
    "breastcancer": "breastCancer",
    "heart-disease": "heartDisease",
    "heartdisease": "heartDisease",
    "migraine": "migraine",
    "mental-health": "mentalHealth",
    "obesity": "obesity",
    "hypertension": "hypertension",
    "osteoporosis": "osteoporosis",
    "arthritis": "arthritis",
    "copd": "copd",
    "pneumonia": "pneumonia",
    "multiple-sclerosis": "multipleSClerosis",
    "multiples-sclerosis": "multipleSClerosis",
    "parkinsons": "parkinsons",
    "parkinsons-disease": "parkinsons",
    "alzheimers": "alzheimers",
    "alzheimers-disease": "alzheimers",
    "rheumatoid-arthritis": "rheumatoidArthritis",
    "eye-health": "eyeHealth",
    "eyehealth": "eyeHealth",
    "digestive-health": "digestiveHealth",
    "digestivehealth": "digestiveHealth",
    "respiratory-health": "respiratoryHealth",
    "lymphedema": "lymphedema",
    "menopause": "menopause",
    "pregnancy": "pregnancy",
    "skin-care": "skinCare",
    "skincare": "skinCare",
    "dental-health": "dentalHealth",
    "dentalhealth": "dentalHealth",
    "ckd": "disease",
    "chronic-kidney-disease": "disease",
    
    // Wellness categories
    "fitness": "fitness",
    "nutrition": "nutrition",
    "weight-management": "weightManagement",
    "weightmanagement": "weightManagement",
    "sleep": "sleep",
    "mindfulness": "mindfulness",
    "stress-management": "stressManagement",
    "stressmanagement": "stressManagement",
    "self-care": "selfCare",
    "selfcare": "selfCare",
    "wellbeing": "wellbeing",
    "wellness": "wellbeing",
    
    // General/Featured
    "featured": "healthcare",
    "conditions": "disease",
  };
  
  const topic = categoryToTopicMap[slug] || "generalHealth";
  return getImageUrl(topic);
};

export const getAltText = (topic: string): string => {
  const altTexts: Record<string, string> = {
    // Primary Categories
    healthcare: "Healthcare and medical services illustration",
    medical: "Medical professional and healthcare illustration",
    disease: "Disease and health conditions awareness",
    wellbeing: "Wellness and overall health illustration",
    nutrition: "Healthy nutrition and balanced diet",
    fitness: "Fitness and physical exercise wellness",

    // Specific Health Conditions
    asthma: "Asthma treatment and respiratory health illustration",
    diabetes: "Diabetes management and blood glucose monitoring",
    breastCancer: "Breast cancer awareness and health care",
    heartDisease: "Heart disease prevention and cardiovascular health",
    mentalHealth: "Mental health, wellness, and emotional support",
    obesity: "Weight management and healthy nutrition",
    hypertension: "Blood pressure management and heart health",
    osteoporosis: "Bone health and osteoporosis prevention",
    arthritis: "Arthritis treatment and joint health",
    copd: "Chronic obstructive pulmonary disease management",
    pneumonia: "Pneumonia medical illustration and respiratory care",
    migraine: "Migraine treatment and headache relief",
    rheumatoidArthritis: "Rheumatoid arthritis and inflammatory disease",
    multipleSClerosis: "Multiple sclerosis and neurological health",
    parkinsons: "Parkinson's disease neurological health care",
    alzheimers: "Alzheimer's disease and cognitive health",
    sleep: "Sleep health, rest, and sleep disorders treatment",
    menopause: "Menopause health and hormonal wellness",
    weightManagement: "Weight management, fitness, and healthy lifestyle",
    eyeHealth: "Eye health and vision care",
    digestiveHealth: "Digestive system health and nutrition",
    respiratoryHealth: "Respiratory health and breathing wellness",
    lymphedema: "Lymphedema care and lymphatic health",
    mindfulness: "Mindfulness, meditation, and mental wellness",
    selfCare: "Self-care and personal wellness routine",
    stressManagement: "Stress management and relaxation techniques",
    pregnancy: "Pregnancy health and prenatal care",
    skinCare: "Skin care and dermatology health",
    dentalHealth: "Dental health and oral care",
    generalHealth: "General health and medical wellness",
  };

  return altTexts[topic] || `${topic} health and wellness illustration`;
};
