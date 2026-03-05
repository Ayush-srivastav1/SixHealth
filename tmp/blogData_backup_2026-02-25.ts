/* Backup of src/data/blogData.ts before merging recovered articles */

/* Cleaned blog dataset with COPD, psoriasis and newly added topic articles. */

import asthmaArticle from './blog/asthma-article';
import whatIsAsthma from './blog/asthma/what-is-asthma';
import typesOfAsthma from './blog/asthma/types-of-asthma';
import asthmaSymptomsDiagnosis from './blog/asthma/asthma-symptoms-diagnosis';
import ckdArticle from './blog/ckd-article';
import type2diabetesArticle from './blog/type2diabetes-article';
import migraineArticle from './blog/migraine-article';
import asthmaTreatmentOptions from './blog/asthma/asthma-treatment-options';
import asthmaInChildren from './blog/asthma/asthma-in-children';
import asthmaLifestyle from './blog/asthma/asthma-lifestyle';
import adultOnsetAsthma from './blog/asthma/adult-onset-asthma';
import asthmaAndAllergies from './blog/asthma/asthma-and-allergies';

export interface BlogContent {
  heading: string;
  text: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug?: string;
  description?: string;
  author?: string;
  authorRole?: string;
  reviewer?: string;
  readTime?: string;
  publishDate?: string;
  updatedDate?: string;
  excerpt?: string;
  summary?: string;
  source?: string;
  date?: string;
  imageUrl?: string;
  aliases?: string[];
  content: string;
}

export const blogData: BlogArticle[] = [
  {
    id: "couple-lost-118-pounds-without-medication",
    slug: "couple-lost-118-pounds-without-medication",
    title: "This Couple Lost 118 Pounds Together Without Medication",
    category: "Featured",
    categorySlug: "featured",
    description: "Learn how a couple achieved significant weight loss through lifestyle changes, nutrition, and consistent habits—without relying on medication.",
    author: "SixHealth Editorial Team",
    reviewer: "SixHealth Clinical Team",
    readTime: "8 min read",
    publishDate: "2026-02-22",
    content: `
<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1277" alt="Couple preparing healthy meals together" loading="lazy" style="max-width:100%; border-radius:8px;" />

<p>Losing weight can feel overwhelming, especially when quick fixes and medications dominate the conversation. However, sustainable results often come from consistent lifestyle changes rather than short-term solutions. One couple’s journey of losing a combined 118 pounds highlights the power of teamwork, healthy habits, and long-term commitment.</p> <p>Their transformation did not rely on prescription weight-loss drugs or extreme dieting. Instead, they focused on improving daily routines, building healthier eating patterns, and supporting each other through challenges.</p> <h2>Building a Foundation for Change</h2> <p>The first step in their journey was acknowledging the need for sustainable change. Rather than following restrictive diets, they focused on balanced nutrition that included whole foods, lean proteins, vegetables, fruits, and healthy fats. Portion awareness and mindful eating helped them reduce excess calorie intake without feeling deprived.</p> <p>Planning meals ahead of time and cooking at home also gave them better control over ingredients and portion sizes, making it easier to stay consistent.</p>

<img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1278" alt="Couple walking together outdoors for fitness" loading="lazy" style="max-width:100%; border-radius:8px;" />

<h2>The Role of Physical Activity</h2> <p>Regular movement became a central part of their routine. They began with simple activities such as daily walks and gradually increased intensity over time. Walking together not only supported weight loss but also strengthened accountability and motivation.</p> <p>As their fitness improved, they incorporated strength training and additional cardio sessions. Building muscle helped increase metabolism and supported long-term weight management.</p> <h2>Overcoming Challenges Together</h2> <p>Weight-loss journeys often include setbacks. Busy schedules, social events, and periods of low motivation tested their commitment. Instead of giving up, they focused on progress rather than perfection.</p> <p>Having a partner with the same goals made a significant difference. Encouragement during difficult moments and celebrating small milestones helped them stay motivated throughout the process.</p>

<img src="https://images.unsplash.com/photo-1454023492551-3d65d2c4f3c2?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1279" alt="Strength training as part of weight loss journey" loading="lazy" style="max-width:100%; border-radius:8px;" />

<h2>Health Benefits Beyond Weight Loss</h2> <p>The results extended beyond the number on the scale. They experienced improved energy levels, better sleep, enhanced mood, and reduced joint discomfort. Regular physical activity and improved nutrition also supported heart health, blood pressure control, and metabolic wellness.</p> <p>These broader health improvements reinforced their motivation to maintain their new lifestyle.</p> <h2>Creating Long-Term Habits</h2> <p>Sustainability was the key to their success. Instead of short-term restrictions, they focused on habits they could maintain long term. This included meal planning, staying active most days of the week, managing stress, and prioritizing sleep.</p> <p>They also allowed flexibility for occasional treats, which helped prevent feelings of restriction and reduced the likelihood of abandoning their routine.</p>

<img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1280" alt="Healthy lifestyle with exercise, hydration, and balance" loading="lazy" style="max-width:100%; border-radius:8px;" />

<h2>Lessons for Others Starting Their Journey</h2> <p>This story highlights that meaningful weight loss is possible without medication for many individuals. The most effective approach often combines balanced nutrition, regular physical activity, realistic goal-setting, and social support.</p> <p>For people with medical conditions or significant weight concerns, consulting a healthcare professional before starting a new program is important to ensure safety and personalized guidance.</p> <h2>Frequently Asked Questions</h2> <p><strong>Is it possible to lose significant weight without medication?</strong> Yes. Many people achieve sustainable weight loss through lifestyle changes such as improved diet, increased physical activity, and behavioral support.</p> <p><strong>How important is having a support system?</strong> Social support improves accountability, motivation, and long-term success during lifestyle changes.</p> <p><strong>How fast should healthy weight loss occur?</strong> Most experts recommend gradual weight loss of about 1–2 pounds per week for safe and sustainable results.</p> <hr/> <div style="background:#f5f7fa; padding:15px; border-radius:8px; margin-top:20px;"> <p><strong>Author:</strong> SixHealth Editorial Team</p> <p><strong>Medical Review:</strong> SixHealth Clinical Team</p> <p><strong>Last Updated:</strong> 2026</p> </div>
    `
  },
  {
    id: "can-6-6-6-walking-workout-help-you-lose-weight",
    title: "Can the 6-6-6 Walking Workout Help You Lose Weight?",
    slug: "can-6-6-6-walking-workout-help-you-lose-weight",
    category: "Featured",
    categorySlug: "featured",
    description: "Learn how the popular 6-6-6 walking routine works, its potential weight-loss benefits, and how to safely include it in your fitness plan.",
    author: "SixHealth Editorial Team",
    reviewer: "SixHealth Clinical Team",
    readTime: "8 min read",
    publishDate: "2026-02-22",
    content: `
<img src="https://images.unsplash.com/photo-1526256262350-7da4c6157f6a?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1281" alt="Person walking outdoors for exercise" loading="lazy" style="max-width:100%; border-radius:8px;" />

<p>The 6-6-6 walking workout has gained attention as a simple and structured approach to daily exercise. The routine typically involves walking at 6 a.m. or 6 p.m. for 60 minutes, with a 6-minute warm-up and a 6-minute cool-down. For many people looking for a sustainable way to lose weight, this method offers consistency without the intensity of high-impact workouts.</p> <p>Walking remains one of the most accessible forms of physical activity. When performed regularly and paired with healthy lifestyle habits, it can support weight management, improve cardiovascular health, and enhance overall well-being.</p> <h2>How the 6-6-6 Walking Method Works</h2> <p>The structure of the 6-6-6 routine is designed to promote consistency and safety. Beginning with a gradual warm-up helps prepare muscles and joints, reducing the risk of injury. The main walking session focuses on maintaining a steady, brisk pace that increases heart rate and calorie burn. Ending with a cool-down allows the body to recover gradually.</p> <p>This predictable schedule can also help build a long-term habit. Exercising at the same time each day makes it easier to stay committed and track progress.</p>

<img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1282" alt="Brisk walking in a park for cardio fitness" loading="lazy" style="max-width:100%; border-radius:8px;" />

<h2>Can Walking Support Weight Loss?</h2> <p>Weight loss occurs when the body burns more calories than it consumes. A brisk 60-minute walk can burn between 200 and 400 calories, depending on body weight, speed, and terrain. When practiced consistently, the 6-6-6 method can contribute to a calorie deficit over time.</p> <p>Walking also helps preserve muscle mass compared to some aggressive weight-loss methods. Maintaining muscle supports metabolism, which plays a key role in long-term weight management.</p> <h2>Health Benefits Beyond the Scale</h2> <p>Regular walking provides benefits that go beyond weight loss. It improves heart health, supports blood sugar control, enhances mood, and reduces stress levels. Many people also experience better sleep and increased daily energy.</p> <p>Because walking is low-impact, it is suitable for beginners, older adults, and individuals recovering from injury or managing chronic conditions.</p>

<img src="https://images.unsplash.com/photo-1576091160069-112de9d332a5?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1283" alt="Person checking fitness progress after walking workout" loading="lazy" style="max-width:100%; border-radius:8px;" />

<h2>How to Get the Best Results</h2> <p>To maximize the benefits of the 6-6-6 routine, aim for a brisk pace that slightly increases breathing while still allowing conversation. Wearing supportive footwear and choosing safe walking routes can improve comfort and reduce injury risk.</p> <p>Pairing the routine with balanced nutrition, adequate hydration, and strength training a few times per week can enhance fat loss and overall fitness.</p> <h2>Lifestyle Tips for Long-Term Success</h2> <p>Consistency matters more than intensity. Setting realistic goals, tracking daily steps, and gradually increasing pace or distance can help maintain motivation. Walking with a friend, listening to music or podcasts, and exploring different routes can make the routine more enjoyable.</p> <p>For individuals with medical conditions or those new to exercise, consulting a healthcare professional before starting a new fitness plan is recommended.</p>

<img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80&fm=webp&unique=1284" alt="Healthy lifestyle habits including outdoor walking and hydration" loading="lazy" style="max-width:100%; border-radius:8px;" />

<h2>Frequently Asked Questions</h2> <p><strong>Is the 6-6-6 walking workout suitable for beginners?</strong> Yes, the routine is low-impact and easy to modify based on your fitness level and pace.</p> <p><strong>How long before I see weight-loss results?</strong> Results vary, but consistent daily walking combined with healthy eating may lead to gradual changes within several weeks.</p> <p><strong>Do I need to walk exactly at 6 a.m. or 6 p.m.?</strong> No. The timing is flexible. The most important factor is maintaining a consistent daily schedule.</p> <hr/> <div style="background:#f5f7fa; padding:15px; border-radius:8px; margin-top:20px;"> <p><strong>Author:</strong> SixHealth Editorial Team</p> <p><strong>Medical Review:</strong> SixHealth Clinical Team</p> <p><strong>Last Updated:</strong> 2026</p> </div>
    `
  },
  {
    id: "ms-fatigue-management",
    title: "Managing Fatigue in Multiple Sclerosis",
    slug: "ms-fatigue-management",
    category: "Multiple Sclerosis",
    categorySlug: "multiple-sclerosis",
    description: "Evidence-based overview of causes and management of fatigue in multiple sclerosis.",
    author: "Editorial Team",
    reviewer: "Clinical Team",
    readTime: "12 min read",
    publishDate: "2026-02-19",
    content: `
<h2>Introduction</h2>
<p>Fatigue is one of the most common and disabling symp... (backup truncated for brevity in file) */
