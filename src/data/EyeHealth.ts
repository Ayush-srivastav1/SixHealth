export interface EyeHealthCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  slug: string;
}

export interface EyeHealthArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  content?: string;
}

export const eyeHealthCategories: EyeHealthCategory[] = [
  {
    id: "eye-care",
    title: "Eye Care",
    description: "Comprehensive eye care and preventive measures",
    longDescription: "Learn about essential eye care practices, prevention strategies, and how to maintain healthy vision. Discover the importance of regular eye exams, protective measures, and lifestyle habits that support long-term eye health.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop",
    slug: "eye-care"
  },
  {
    id: "treating-macular-degeneration",
    title: "Treating Macular Degeneration",
    description: "Management and treatment options for macular degeneration",
    longDescription: "Macular degeneration is a progressive eye condition affecting central vision. Explore treatment options, management strategies, and coping techniques for living with age-related macular degeneration (AMD).",
    image: "https://images.unsplash.com/photo-1576091160579-112173f7f869?w=500&h=300&fit=crop",
    slug: "macular-degeneration"
  },
  {
    id: "treating-dry-eye-syndrome",
    title: "Treating Dry Eye Syndrome",
    description: "Solutions and treatments for dry eye conditions",
    longDescription: "Dry eye syndrome affects millions of people. Learn about causes, symptoms, and various treatment options ranging from simple remedies to advanced therapies that can provide relief.",
    image: "https://images.unsplash.com/photo-1631217021380-72794b2a6a22?w=500&h=300&fit=crop",
    slug: "dry-eye-syndrome"
  },
  {
    id: "eye-nutrition-supplements",
    title: "Nutrition & Supplements",
    description: "Dietary support and supplements for eye health",
    longDescription: "Nutrition plays a crucial role in eye health. Discover the best vitamins, minerals, and nutrients that support vision, including lutein, zeaxanthin, omega-3s, and antioxidants.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    slug: "nutrition-supplements"
  },
  {
    id: "navigating-blindness",
    title: "Living with Blindness",
    description: "Support and resources for people with vision loss",
    longDescription: "Resources and guidance for people living with blindness or severe vision loss. Explore adaptive technologies, support services, and strategies for maintaining independence and quality of life.",
    image: "https://images.unsplash.com/photo-1529148482759-b8fcb8792588?w=500&h=300&fit=crop",
    slug: "living-with-blindness"
  }
];

export const editorsPicks: EyeHealthArticle[] = [
  {
    id: "20-20-20-rule",
    title: "How Does the 20-20-20 Rule Prevent Eyestrain?",
    excerpt: "The 20-20-20 rule is a simple technique to reduce eyestrain and protect your vision during prolonged screen time.",
    category: "eye-care",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a775?w=500&h=300&fit=crop"
  },
  {
    id: "optometrist-vs-ophthalmologist",
    title: "Optometrists, Ophthalmologists, and Opticians: What's the Difference?",
    excerpt: "Understanding the different types of eye care professionals and when to see each one.",
    category: "eye-care",
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop"
  },
  {
    id: "detached-retina-risk",
    title: "Who Is at Risk of a Detached Retina?",
    excerpt: "Learn about risk factors and symptoms of retinal detachment.",
    category: "eye-care",
    image: "https://images.unsplash.com/photo-1618328198882-2b51be8b0337?w=500&h=300&fit=crop"
  },
  {
    id: "styes-and-stress",
    title: "Is There a Connection Between Styes and Stress?",
    excerpt: "Explore the relationship between stress and eye infections.",
    category: "eye-care",
    image: "https://images.unsplash.com/photo-1579154204601-01d82b9c3054?w=500&h=300&fit=crop"
  },
  {
    id: "pink-eye-appearance",
    title: "Pink Eye: What Does it Look Like?",
    excerpt: "Visual guide to identifying and recognizing pink eye symptoms.",
    category: "eye-care",
    image: "https://images.unsplash.com/photo-1631217021380-72794b2a6a22?w=500&h=300&fit=crop"
  },
  {
    id: "read-eye-prescription",
    title: "How to Read Your Eye Prescription",
    excerpt: "Understand what the numbers and abbreviations on your eye prescription mean.",
    category: "eye-care",
    image: "https://images.unsplash.com/photo-1580489944761-b60bbb06ed43?w=500&h=300&fit=crop"
  }
];

export const correctiveEyeSurgery: EyeHealthArticle[] = [
  {
    id: "laser-eye-surgery",
    title: "Laser Eye Surgery: What You Should Know",
    excerpt: "Everything you need to know about LASIK and other laser eye surgery options.",
    category: "eye-surgery"
  },
  {
    id: "prk-vision-surgery",
    title: "Everything You Need to Know About PRK Vision Surgery",
    excerpt: "A comprehensive guide to photorefractive keratectomy and its benefits.",
    category: "eye-surgery"
  },
  {
    id: "lasik-duration",
    title: "How Long Does LASIK Last?",
    excerpt: "Understanding the longevity and long-term effects of LASIK surgery.",
    category: "eye-surgery"
  }
];

export const managingVisionPrescriptions: EyeHealthArticle[] = [
  {
    id: "eyeglass-prescription-meaning",
    title: "What Do the Abbreviations and Numbers Mean on Your Eyeglass Prescription?",
    excerpt: "Decode your eyeglass prescription and understand what each number means.",
    category: "vision-prescription"
  },
  {
    id: "nearsightedness-levels",
    title: "Your Guide to Nearsightedness Levels and Progression",
    excerpt: "Understand myopia levels and how to manage your vision.",
    category: "vision-prescription"
  },
  {
    id: "adjust-glasses",
    title: "Know How to Adjust Your Glasses and When to Leave It to a Professional",
    excerpt: "Tips for maintaining and adjusting your eyeglasses properly.",
    category: "vision-prescription"
  },
  {
    id: "depth-perception-issues",
    title: "Everything to Know About Depth Perception Issues",
    excerpt: "Understanding and addressing depth perception problems.",
    category: "vision-prescription"
  },
  {
    id: "do-i-need-glasses",
    title: "Do I Need Glasses?",
    excerpt: "Signs that you may need vision correction and when to see an eye doctor.",
    category: "vision-prescription"
  },
  {
    id: "contact-lens-insertion",
    title: "The Safest Way to Put in Contact Lenses",
    excerpt: "Step-by-step guide to inserting and caring for contact lenses.",
    category: "vision-prescription"
  },
  {
    id: "remove-contact-stuck",
    title: "How Do I Remove a Contact Stuck in My Eye?",
    excerpt: "Safe techniques for removing a stuck contact lens.",
    category: "vision-prescription"
  }
];

export const homeRemedies: EyeHealthArticle[] = [
  {
    id: "flush-eye",
    title: "How to Safely Flush Out Your Eye",
    excerpt: "Safe methods for removing foreign objects from your eye.",
    category: "home-remedies"
  },
  {
    id: "how-to-use-eye-drops",
    title: "How to Use Eye Drops",
    excerpt: "Proper technique for applying eye drops correctly.",
    category: "home-remedies"
  },
  {
    id: "homemade-eye-drops",
    title: "Homemade Eye Drops: Risks, Benefits, and More",
    excerpt: "Information about making and using homemade eye drop solutions.",
    category: "home-remedies"
  },
  {
    id: "warm-eye-compress",
    title: "How to Use a Warm Eye Compress to Treat Styes and Other Conditions",
    excerpt: "Using warm compresses for relief from various eye conditions.",
    category: "home-remedies"
  },
  {
    id: "burning-eyes-remedy",
    title: "How to Treat Painful, Burning Eyes at Home Naturally",
    excerpt: "Natural remedies for soothing and treating burning eyes.",
    category: "home-remedies"
  }
];

export const moreTopReads: EyeHealthArticle[] = [
  {
    id: "reduce-screen-time",
    title: "8 Tips for Reducing Screen Time",
    excerpt: "Practical strategies to reduce screen time and protect your eyes.",
    category: "top-reads"
  },
  {
    id: "eyestrain-headache",
    title: "What to Know About an Eyestrain Headache",
    excerpt: "Understanding the connection between eyestrain and headaches.",
    category: "top-reads"
  },
  {
    id: "glaucoma-eye-drops",
    title: "How Do You Know If Glaucoma Eye Drops Aren't Working?",
    excerpt: "Signs that your glaucoma medication needs adjustment.",
    category: "top-reads"
  },
  {
    id: "night-driving-glasses",
    title: "Night Driving Glasses: Do They Work?",
    excerpt: "Evaluating the effectiveness of night vision driving glasses.",
    category: "top-reads"
  },
  {
    id: "color-vision-test",
    title: "Color Vision Test",
    excerpt: "Understanding color blindness and vision testing.",
    category: "top-reads"
  },
  {
    id: "eyes-grow-age",
    title: "How Our Eyes Grow and Change As We Get Older",
    excerpt: "Age-related changes in vision and eye health.",
    category: "top-reads"
  },
  {
    id: "acupressure-eye-points",
    title: "Where Are the Acupressure Points for the Eyes?",
    excerpt: "Traditional techniques for eye wellness and relief.",
    category: "top-reads"
  },
  {
    id: "improve-eyesight",
    title: "10 Ways to Improve Your Eyesight",
    excerpt: "Natural methods and practices to enhance your vision.",
    category: "top-reads"
  }
];

export const navigatingEyeSymptoms: EyeHealthArticle[] = [
  {
    id: "itchy-eyes-causes",
    title: "8 Causes of Itchy Eyes",
    excerpt: "Understanding the various causes of eye itching and when to seek help.",
    category: "eye-symptoms"
  },
  {
    id: "eye-pain",
    title: "What You Need to Know About Eye Pain",
    excerpt: "Comprehensive guide to eye pain causes and treatments.",
    category: "eye-symptoms"
  },
  {
    id: "pressure-behind-eye",
    title: "What Causes a Feeling of Pressure Behind the Eye?",
    excerpt: "Understanding pressure sensations and their causes.",
    category: "eye-symptoms"
  },
  {
    id: "why-eyes-hurt",
    title: "Identifying and Treating the Causes of Eye Pain",
    excerpt: "Detailed information about eye pain causes and relief options.",
    category: "eye-symptoms"
  },
  {
    id: "eye-irritation",
    title: "What's Causing My Eye Irritation?",
    excerpt: "Guide to identifying common causes of eye irritation.",
    category: "eye-symptoms"
  },
  {
    id: "itchy-eye-allergies",
    title: "Itchy Eye Allergies",
    excerpt: "Understanding and managing allergic reactions affecting the eyes.",
    category: "eye-symptoms"
  }
];
