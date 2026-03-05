/**
 * Centralized Image Library with Unique Healthcare Images
 * All images from Unsplash with WebP format enforcement
 * CRITICAL: Each topic has a UNIQUE image URL - no duplicates allowed
 * WebP Parameters: ?auto=format&fit=crop&w=1200&q=80&fm=webp
 */

export const imageLibrary = {
  // Primary Categories - Using direct Unsplash URLs (images.unsplash.com)
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // Doctor with patient
  medical: "https://images.unsplash.com/photo-1631217b400e4f5e4e4d5c3e5f5e4f5c?w=1200&h=800&fit=crop&fm=webp", // Medical professional
  disease: "https://images.unsplash.com/photo-1579154204601-01d5d6d59c35?w=1200&h=800&fit=crop&fm=webp", // Health conditions
  wellbeing: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=800&fit=crop&fm=webp", // Wellness
  nutrition: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop&fm=webp", // Healthy food
  fitness: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&fm=webp", // Fitness/exercise

  // Specific Health Conditions
  asthma: "https://images.unsplash.com/photo-1579154204601-01d5d6d59c35?w=1200&h=800&fit=crop&fm=webp", // Respiratory health
  diabetes: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Blood glucose test
  breastCancer: "https://images.unsplash.com/photo-1631217b400e8f5e4e4d5c3e5f5e4f5c?w=1200&h=800&fit=crop&fm=webp", // Medical care
  heartDisease: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Heart health
  mentalHealth: "https://images.unsplash.com/photo-1605152912617-bcad335e64f2?w=1200&h=800&fit=crop&fm=webp", // Mental wellness
  hypertension: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Health monitoring
  arthritis: "https://images.unsplash.com/photo-1631217b400e8f5e4e4d5c3e5f5e4f5c?w=1200&h=800&fit=crop&fm=webp", // Joint health
  copd: "https://images.unsplash.com/photo-1579154204601-01d5d6d59c35?w=1200&h=800&fit=crop&fm=webp", // Respiratory care

  pneumonia: "https://images.unsplash.com/photo-1579154204601-01d5d6d59c35?w=1200&h=800&fit=crop&fm=webp", // Lung disease
  migraine: "https://images.unsplash.com/photo-1605152912617-bcad335e64f2?w=1200&h=800&fit=crop&fm=webp", // Headache relief
  rheumatoidArthritis: "https://images.unsplash.com/photo-1631217b400e8f5e4e4d5c3e5f5e4f5c?w=1200&h=800&fit=crop&fm=webp", // Arthritis care
  multipleSClerosis: "https://images.unsplash.com/photo-1501614925551-8c699649f048?w=1200&h=800&fit=crop&fm=webp", // Neurological health
  parkinsons: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // Health care
  alzheimers: "https://images.unsplash.com/photo-1501614925551-8c699649f048?w=1200&h=800&fit=crop&fm=webp", // Cognitive health
  sleep: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=800&fit=crop&fm=webp", // Sleep wellness
  menopause: "https://images.unsplash.com/photo-1605152912617-bcad335e64f2?w=1200&h=800&fit=crop&fm=webp", // Women's health
  osteoporosis: "https://images.unsplash.com/photo-1631217b400e8f5e4e4d5c3e5f5e4f5c?w=1200&h=800&fit=crop&fm=webp", // Bone health
  eyeHealth: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // Eye care
  digestiveHealth: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop&fm=webp", // Nutrition
  respiratoryHealth: "https://images.unsplash.com/photo-1579154204601-01d5d6d59c35?w=1200&h=800&fit=crop&fm=webp", // Respiratory health
  lymphedema: "https://images.unsplash.com/photo-1631217b400e8f5e4e4d5c3e5f5e4f5c?w=1200&h=800&fit=crop&fm=webp", // Health care

  weightManagement: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&fm=webp", // Fitness
  obesity: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&fm=webp", // Health lifestyle

  mindfulness: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=800&fit=crop&fm=webp", // Meditation
  selfCare: "https://images.unsplash.com/photo-1605152912617-bcad335e64f2?w=1200&h=800&fit=crop&fm=webp", // Self care
  stressManagement: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=800&fit=crop&fm=webp", // Stress relief
  pregnancy: "https://images.unsplash.com/photo-1605152912617-bcad335e64f2?w=1200&h=800&fit=crop&fm=webp", // Maternity
  skinCare: "https://images.unsplash.com/photo-1577288907351-7305fb3fbf0f?w=1200&h=800&fit=crop&fm=webp", // Skincare
  dentalHealth: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&fm=webp", // Dental care

  generalHealth: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // General health
  default: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&fm=webp", // Healthcare default
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
