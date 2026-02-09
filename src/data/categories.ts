export interface NavigationCategory {
  id: string;
  title: string;
  description: string;
  href: string;
  extraLinks?: { title: string; href: string; subLinks?: { title: string; href: string }[] }[];
}

export const navigationCategories: NavigationCategory[] = [
  {
    id: "health-conditions",
    title: "Health Conditions",
    description: "Browse health conditions",
    href: "/conditions",
    extraLinks: [
      { title: "Asthma", href: "/conditions/asthma" },
      { title: "Breast Cancer", href: "/breast-cancer" },
      { title: "Cancer Care", href: "/conditions/cancer-care" },
      { title: "COPD", href: "/conditions/copd" },
      { title: "Caregiving for Alzheimer's Disease", href: "/conditions/alzheimers-disease" },
      { title: "Chronic Kidney Disease", href: "/conditions/chronic-kidney-disease" },
      { title: "Digestive Health", href: "/conditions/digestive-health" },
      { title: "Eye Health", href: "/conditions/eye-health" },
      { title: "Heart & Cardiovascular", href: "/conditions/heart-cardiovascular" },
      { title: "Mental Health", href: "/conditions/mental-health" },
      { title: "Menopause", href: "/conditions/menopause" },
      { title: "Migraine", href: "/conditions/migraine" },
      { title: "Multiple Sclerosis (MS)", href: "/conditions/multiple-sclerosis" },
      { title: "Parkinson’s Disease", href: "/conditions/parkinson" },
      { title: "Psoriasis", href: "/conditions/psoriasis" },
      { title: "Rheumatoid Arthritis (RA)", href: "/conditions/rheumatoid-arthritis" },
      { title: "Sleep Health", href: "/conditions/sleep" },
      { title: "Type 2 Diabetes", href: "/conditions/type-2-diabetes" },
      { title: "Weight Management", href: "/conditions/weight-management" },
      { title: "Radiation Therapy Guide", href: "/radiation-therapy-guide" },
      { title: "Lymphedema Care", href: "/lymphedema-care" },

   
      // Add more as needed
    ],
  },
  {
    id: "wellness",
    title: "Wellness",
    description: "Wellness topics and guides",
    href: "/wellness",
    extraLinks: [
      { title: "CBD", href: "/wellness/cbd" },
      { title: "Fitness", href: "/wellness/fitness" },
      { title: "Healthy Aging", href: "/wellness/healthy-aging" },
      { title: "Hearing", href: "/wellness/hearing" },
      { title: "Mental Well-Being", href: "/wellness/mental-well-being" },
      { title: "Nutrition", href: "/wellness/nutrition" },
      { title: "Parenthood", href: "/wellness/parenthood" },
      { title: "Recipes", href: "/wellness/recipes" },
      { title: "Sexual Health", href: "/wellness/sexual-health" },
      { title: "Skin Care", href: "/wellness/skin-care" },
      { title: "Sleep Health", href: "/wellness/sleep-health" },
      { title: "Vitamins and Supplements", href: "/wellness/vitamins-supplements" },
      { title: "Women's Wellness", href: "/wellness/womens-wellness" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Health tools and calculators",
    href: "/tools",
    extraLinks: [
      // Featured
      { title: "Video Series", href: "/tools/video-series" },
      { title: "Pill Identifier", href: "/tools/pill-identifier" },
      { title: "FindCare", href: "/tools/findcare" },
      { title: "Drugs A-Z", href: "/tools/drugs-a-z" },
      { title: "Medicare Plans by State", href: "/tools/medicare-plans" },
      // Lessons
      { title: "Crohn’s and Ulcerative Colitis Essentials", href: "/tools/colitis-essentials" },
      { title: "Diabetes Nutrition", href: "/tools/diabetes-nutrition" },
      { title: "High Cholesterol", href: "/tools/high-cholesterol" },
      { title: "Taming Inflammation in Psoriasis", href: "/tools/psoriasis-inflammation" },
      { title: "Taming Inflammation in Psoriatic Arthritis", href: "/tools/psoriatic-arthritis-inflammation" },
      // Newsletters
      { title: "Anxiety and Depression", href: "/tools/newsletter-anxiety" },
      { title: "Digestive Health", href: "/tools/newsletter-digestive" },
      { title: "Heart Health", href: "/tools/newsletter-heart" },
      { title: "Migraine", href: "/tools/newsletter-migraine" },
      { title: "Nutrition Edition", href: "/tools/newsletter-nutrition" },
      { title: "Type 2 Diabetes", href: "/tools/newsletter-diabetes" },
      { title: "Wellness Wire", href: "/tools/newsletter-wellness" },
      // Lifestyle Quizzes
      { title: "Find a Diet", href: "/tools/quiz-find-diet" },
      { title: "Find Healthy Snacks", href: "/tools/quiz-healthy-snacks" },
      { title: "Weight Management", href: "/tools/quiz-weight-management" },
      { title: "How Well Do You Sleep?", href: "/tools/quiz-sleep" },
      { title: "Are You a Workaholic?", href: "/tools/quiz-workaholic" },
    ],
  },
  {
    id: "featured",
    title: "Featured",
    description: "Featured articles and highlights",
    href: "/featured",
    extraLinks: [],
  },
  {
    id: "connect",
    title: "Connect",
    description: "Connect with us and the community",
    href: "/connect",
    extraLinks: [],
  },
];
