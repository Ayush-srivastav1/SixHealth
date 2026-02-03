export type BreastCancerArticle = {
  id: string
  title: string
  content: string
}

export type BreastCancerSection = {
  id: string
  title: string
  category: string
  articles: BreastCancerArticle[]
}

export const breastCancerSections: BreastCancerSection[] = [
  {
    id: "basics",
    title: "Breast Cancer Basics",
    category: "Basics",
    articles: [
      { id: "bc1", title: "What is Breast Cancer?", content: "A disease in which cells in the breast grow out of control." },
      { id: "bc2", title: "Types of Breast Cancer", content: "Understanding ductal, lobular, and other breast cancer types." },
      { id: "bc3", title: "Stages of Breast Cancer", content: "How breast cancer is staged and what it means." },
      { id: "bc4", title: "Risk Factors and Prevention", content: "Learn what increases your breast cancer risk." },
      { id: "bc5", title: "Early Detection Saves Lives", content: "Importance of screening and self-examination." },
      { id: "bc6", title: "Understanding Your Pathology Report", content: "What the medical findings mean for your treatment." },
    ],
  },
  {
    id: "screening",
    title: "Screening and Diagnosis",
    category: "Screening & Diagnosis",
    articles: [
      { id: "sd1", title: "Mammography Guide", content: "Everything you need to know about mammograms." },
      { id: "sd2", title: "Clinical Breast Exams", content: "What to expect during a professional breast exam." },
      { id: "sd3", title: "Biopsies and Diagnostic Tests", content: "Types of biopsy procedures explained." },
      { id: "sd4", title: "Genetic Testing (BRCA)", content: "Understanding hereditary breast cancer risk." },
      { id: "sd5", title: "MRI and Advanced Imaging", content: "When advanced imaging is recommended." },
      { id: "sd6", title: "How to Read Your Mammogram Results", content: "Understanding mammography terminology." },
    ],
  },
  {
    id: "treatment",
    title: "Treatment Options",
    category: "Treatment",
    articles: [
      { id: "tr1", title: "Surgery for Breast Cancer", content: "Lumpectomy, mastectomy, and reconstruction options." },
      { id: "tr2", title: "Radiation Therapy Guide", content: "What to expect during breast radiation treatment." },
      { id: "tr3", title: "Chemotherapy for Breast Cancer", content: "How chemo works against cancer cells." },
      { id: "tr4", title: "Hormone Therapy", content: "Blocking estrogen to prevent recurrence." },
      { id: "tr5", title: "Targeted Therapy (HER2)", content: "Precision medicine approaches." },
      { id: "tr6", title: "Immunotherapy", content: "Newer treatment approaches." },
    ],
  },
  {
    id: "recovery",
    title: "Recovery and Survivorship",
    category: "Recovery",
    articles: [
      { id: "rc1", title: "Life After Treatment", content: "Transitioning to survivorship." },
      { id: "rc2", title: "Managing Side Effects", content: "Long-term care guidance." },
      { id: "rc3", title: "Reconstruction Options", content: "Surgical choices explained." },
      { id: "rc4", title: "Lymphedema Care", content: "Managing arm swelling." },
      { id: "rc5", title: "Fertility Preservation", content: "Options before treatment." },
      { id: "rc6", title: "Emotional Health", content: "Mental wellness support." },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle and Wellness",
    category: "Lifestyle",
    articles: [
      { id: "ls1", title: "Nutrition", content: "Diet to support healing." },
      { id: "ls2", title: "Exercise", content: "Safe activity guidelines." },
      { id: "ls3", title: "Managing Fatigue", content: "Coping strategies." },
      { id: "ls4", title: "Return to Work", content: "Work-life balance tips." },
      { id: "ls5", title: "Sexual Health", content: "Intimacy and relationships." },
      { id: "ls6", title: "Follow-Up Care", content: "Long-term monitoring." },
    ],
  },
]
