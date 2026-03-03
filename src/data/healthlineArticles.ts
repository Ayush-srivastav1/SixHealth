
import type { ArticleSection, Article } from "@/types/article";

const categories = [
  "Nutrition",
  "Mental Health",
  "Fitness",
  "Skin Care",
  "Sleep",
  "Women's Health",
  "Men's Health",
  "Wellness"
];

const authors = [
  "Dr. Jane Doe",
  "John Smith, MS",
  "Sarah Johnson, RD",
  "Dr. Emily Chen",
  "Michael Brown, CPT"
];

const reviewers = [
  "Dr. Alan Grant",
  "Dr. Ellie Sattler",
  "Dr. Ian Malcolm"
];

const templates = [
  {
    titlePrefix: "The Benefits of",
    contentTemplate: "is a popular topic in health circles today. Many people find that incorporating it into their routine improves their overall well-being."
  },
  {
    titlePrefix: "Understanding",
    contentTemplate: "is crucial for maintaining a healthy lifestyle. It affects various systems in the body and can have long-term impacts."
  },
  {
    titlePrefix: "How to Manage",
    contentTemplate: "can be challenging, but with the right strategies, it is manageable. Here is a comprehensive guide to help you navigate it."
  },
  {
    titlePrefix: "Top 10 Tips for",
    contentTemplate: "doesn't have to be complicated. We've compiled a list of the most effective strategies to help you succeed."
  }
];

const topics = [
  "Keto Diet", "Intermittent Fasting", "Meditation", "Yoga", "Strength Training",
  "Better Sleep", "Anxiety Relief", "Healthy Skin", "Vitamin D", "Hydration",
  "Plant-Based Diet", "Mindfulness", "Cardio", "Gut Health", "Immune System",
  "Stress Management", "Weight Loss", "Muscle Gain", "Healthy Aging", "Detox"
];

const generateArticles = (count: number): Article[] => {
  const articles: Article[] = [];

  for (let i = 0; i < count; i++) {
    const topic = topics[i % topics.length];
    const template = templates[i % templates.length];
    const category = categories[i % categories.length];
    const author = authors[i % authors.length];
    const reviewer = reviewers[i % reviewers.length];
    
    const slug = `${template.titlePrefix.toLowerCase().replace(/\s+/g, '-')}-${topic.toLowerCase().replace(/\s+/g, '-')}-${i}`;
    
    articles.push({
      id: slug,
      slug: slug,
      title: `${template.titlePrefix} ${topic}`,
      author: author,
      reviewer: reviewer,
      date: new Date(2023, i % 12, (i % 28) + 1).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: category,
      keyTakeaways: [
        `${topic} helps with overall ${category.toLowerCase()}.`,
        "Consistency is key when applying these principles.",
        "Consult with a healthcare provider before making major changes."
      ],
      content: `${topic} ${template.contentTemplate} In this article, we explore the science behind it and provide actionable advice.`,
      sections: [
        {
          id: "what-is-it",
          heading: `What is ${topic}?`,
          body: `Detailed explanation about ${topic}. It involves various mechanisms that promote better health outcomes.`
        },
        {
          id: "benefits",
          heading: "Key Benefits",
          body: `Research shows that ${topic} can improve energy levels, mental clarity, and physical stability.`
        },
        {
          id: "how-to-start",
          heading: "How to Get Started",
          body: "Start small. You don't need to overhaul your entire life overnight. Begin with small steps and build up gradually."
        },
        {
          id: "risks",
          heading: "Potential Risks",
          body: "While generally safe, it's important to be aware of potential side effects. Listen to your body and adjust as needed."
        },
        {
          id: "bottom-line",
          heading: "The Bottom Line",
          body: `${topic} is a powerful tool for health. By integrating it into your lifestyle, you can reap significant rewards.`
        }
      ],
      sourceLabel: "Trusted Source: National Institute of Health, PubMed Central"
    });
  }

  return articles;
};

export const healthlineArticles = generateArticles(120);
