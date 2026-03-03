import { allArticles } from "@/data/allArticles";
import { breastCancerSections } from "@/data/breastCancerSections";
import { eyeHealthCategories, editorsPicks, correctiveEyeSurgery, managingVisionPrescriptions, homeRemedies, moreTopReads, navigatingEyeSymptoms } from "@/data/EyeHealth";
import { chemoToc } from "@/data/chemotherapy";
import { menopauseSections } from "@/data/menopauseSections";
import { menopauseSectionsDetailed } from "@/data/menopauseSectionsDetailed";
import { msSectionsDetailed } from "@/data/msSectionsDetailed";

import { contentToString } from "@/lib/articleUtils";

export interface SearchableItem {
  id: string;
  title: string;
  content: string;
  category: string;
  type: 'article' | 'section' | 'category' | 'page';
  url: string;
  excerpt?: string;
  imageUrl?: string;
}
export const getAllSearchableContent = (): SearchableItem[] => {
  const items: SearchableItem[] = [];
  allArticles.forEach(article => {
    items.push({
      id: article.id,
      title: article.title,
      content: article.description || contentToString(article.content) || '',
      category: article.category,
      type: 'article',
      url: (article.categorySlug ? `/${article.categorySlug}/article/${article.slug}` : `/article/${article.slug}`),
      excerpt: article.description,
      imageUrl: article.imageUrl,
    });
  });
  breastCancerSections.forEach(section => {
    section.articles.forEach(article => {
      items.push({
        id: article.id,
        title: article.title,
        content: contentToString(article.content),
        category: 'breast-cancer',
        type: 'article',
        url: `/breast-cancer/article/${article.id}`,
        excerpt: contentToString(article.content),
      });
    });
  });
  eyeHealthCategories.forEach(category => {
    items.push({
      id: category.id,
      title: category.title,
      content: category.longDescription,
      category: 'eye-health',
      type: 'category',
      url: `/eye-health/${category.slug}`,
      excerpt: category.description,
      imageUrl: category.image,
    });
  });
  [...editorsPicks, ...correctiveEyeSurgery, ...managingVisionPrescriptions, ...homeRemedies, ...moreTopReads, ...navigatingEyeSymptoms].forEach(article => {
    items.push({
      id: article.id,
      title: article.title,
      content: article.excerpt,
      category: 'eye-health',
      type: 'article',
      url: `/search?q=${encodeURIComponent(article.title)}`,
      excerpt: article.excerpt,
      imageUrl: article.image,
    });
  });
  chemoToc.forEach(item => {
    items.push({
      id: item.id,
      title: item.label,
      content: item.label,
      category: 'chemotherapy',
      type: 'section',
      url: `/chemotherapy#${item.id}`,
      excerpt: item.label,
    });
  });
  menopauseSections.forEach(section => {
    section.links.forEach(link => {
      const normalizedUrl = link.href.startsWith('/articles/')
        ? link.href.replace('/articles/', '/article/')
        : link.href;

      items.push({
        id: normalizedUrl,
        title: link.label,
        content: link.label,
        category: 'menopause',
        type: 'article',
        url: normalizedUrl,
        excerpt: link.label,
      });
    });
  });
  menopauseSectionsDetailed.forEach(section => {
    section.articles.forEach(article => {
      items.push({
        id: article.id,
        title: article.title,
        content: article.content || '',
        category: 'menopause',
        type: 'article',
        url: `/search?q=${encodeURIComponent(article.title)}`,
        excerpt: article.content,
      });
    });
  });
  msSectionsDetailed.forEach(section => {
    section.articles.forEach(article => {
      items.push({
        id: article.id,
        title: article.title,
        content: article.content || '',
        category: 'multiple-sclerosis',
        type: 'article',
        url: `/search?q=${encodeURIComponent(article.title)}`,
        excerpt: article.content,
      });
    });
  });
  const alzheimersSections = [
    {
      id: "editors-picks",
      title: "Editor's Picks",
      category: "Basics",
      articles: [
        { id: "care-guide", title: "Your Guide to Caring for Someone with Alzheimer’s Disease", content: "Learn how to care for someone with Alzheimer’s, including daily routines, safety, and emotional support." },
        { id: "memory-care", title: "What Is Memory Care and Who Is It for?", content: "Understand memory care options and who can benefit from them." },
        { id: "nursing-home", title: "Choosing a Nursing Home for a Loved One with Alzheimer’s", content: "Tips for selecting the right nursing home for Alzheimer’s care." },
      ],
    },
    {
      id: "mental-wellbeing",
      title: "Mental Well-Being for Caregivers",
      category: "Mental Health",
      articles: [
        { id: "support-group", title: "Finding an Alzheimer’s Support Group", content: "How to find and benefit from support groups." },
        { id: "caregiver-story", title: "‘I Never Thought I’d Be Caring for My Mother with Dementia,’ Plus 8 Ways to Cope", content: "Personal stories and coping strategies for caregivers." },
        { id: "finances", title: "A Caregiver’s Guide to Managing Finances for Alzheimer’s Disease", content: "Financial tips and resources for caregivers." },
        { id: "frustration", title: "Alzheimer’s, Caregiving, and Managing Frustration", content: "Advice for managing stress and frustration as a caregiver." },
      ],
    },
    {
      id: "diet-lifestyle",
      title: "Diet & Lifestyle",
      category: "Diet & Lifestyle",
      articles: [
        { id: "not-eating", title: "What Happens If a Loved One with Alzheimer's Is Not Eating?", content: "What to do if someone with Alzheimer’s loses appetite." },
        { id: "activities", title: "What You Can Do with Someone Who Has Alzheimer’s Disease: 6 Activities", content: "Engaging activities for people with Alzheimer’s." },
        { id: "diet", title: "Can Diet Prevent or Slow Down Alzheimer’s Disease?", content: "The role of diet in Alzheimer’s prevention and management." },
        { id: "at-home-activities", title: "What Are the Best At-Home Activities for Dementia Patients?", content: "Ideas for at-home activities for dementia and Alzheimer’s." },
      ],
    },
    {
      id: "treatment",
      title: "Treatment & Medications",
      category: "Treatment",
      articles: [
        { id: "dementia-treatment", title: "Your Guide to Clinical and At-Home Treatment Options for Dementia", content: "Overview of treatment options for dementia and Alzheimer’s." },
        { id: "gene-therapy", title: "What to Know About Gene Therapy for Alzheimer’s Disease", content: "Latest research on gene therapy for Alzheimer’s." },
        { id: "vitamins", title: "Vitamins and Supplements for Memory", content: "Supplements that may help with memory loss." },
        { id: "tau-protein", title: "Understanding Tau Protein and Its Role in Alzheimer’s Disease", content: "The science behind tau protein and Alzheimer’s." },
      ],
    },
    {
      id: "behavioral-changes",
      title: "Behavioral & Psychological Changes",
      category: "Behavioral Changes",
      articles: [
        { id: "sundowning", title: "What Is Sundowning?", content: "Understanding sundowning and how to manage it." },
        { id: "agitation", title: "Can You Spot the Symptoms of Agitation in Alzheimer’s Disease?", content: "Recognizing and managing agitation symptoms." },
        { id: "hallucinations", title: "What Are Alzheimer’s Hallucinations?", content: "What to know about hallucinations in Alzheimer’s." },
        { id: "brain-scan", title: "Can a Brain Scan Detect Dementia or Alzheimer’s?", content: "The role of brain scans in diagnosis." },
      ],
    },
    {
      id: "early-onset",
      title: "Early Onset Alzheimer’s Disease",
      category: "Early Onset",
      articles: [
        { id: "early-signs", title: "Signs and Symptoms of Early Onset Alzheimer’s Disease", content: "How to recognize early onset Alzheimer’s." },
        { id: "early-treatments", title: "Treatments for Early Onset Alzheimer’s Disease", content: "Treatment options for early onset cases." },
        { id: "independence", title: "How to Maintain Independence with Early Onset Alzheimer’s Disease", content: "Tips for maintaining independence." },
        { id: "questions", title: "Questions to Ask Your Doctor After an Early Alzheimer’s Diagnosis", content: "Important questions for your healthcare provider." },
      ],
    },
  ];
  alzheimersSections.forEach(section => {
    section.articles.forEach(article => {
      items.push({
        id: article.id,
        title: article.title,
        content: article.content,
        category: 'alzheimers-disease',
        type: 'article',
        url: `/search?q=${encodeURIComponent(article.title)}`,
        excerpt: article.content,
      });
    });
  });
  const pages = [
    { title: 'Home', content: 'Welcome to Six Health - Your comprehensive health resource', url: '/', category: 'page' },
    { title: 'Articles Hub', content: 'Browse all health articles and medical information', url: '/articles', category: 'page' },
    { title: 'Breast Cancer', content: 'Comprehensive information about breast cancer diagnosis, treatment, and support', url: '/breast-cancer', category: 'page' },
    { title: 'Cancer Care', content: 'Cancer treatment options and supportive care information', url: '/conditions/cancer-care', category: 'page' },
    { title: 'Chemotherapy', content: 'Understanding chemotherapy treatment and side effects', url: '/chemotherapy', category: 'page' },
    { title: 'Digestive Health', content: 'Information about digestive disorders and gastrointestinal health', url: '/digestive-health', category: 'page' },
    { title: 'Eye Health', content: 'Eye care, vision health, and eye condition information', url: '/eye-health', category: 'page' },
    { title: 'Menopause', content: 'Menopause symptoms, treatment, and health information', url: '/menopause', category: 'page' },
    { title: 'Multiple Sclerosis', content: 'MS symptoms, treatment, and management strategies', url: '/multiple-sclerosis', category: 'page' },
    { title: 'Health News', content: 'Latest health news and medical updates', url: '/health-news', category: 'page' },
    { title: 'Tools', content: 'Health calculators and assessment tools', url: '/tools', category: 'page' },
    { title: 'About', content: 'About Six Health and our mission', url: '/about', category: 'page' },
    { title: 'Contact', content: 'Get in touch with Six Health', url: '/contact', category: 'page' },
    { title: 'Privacy Policy', content: 'Privacy policy and data protection information', url: '/privacy', category: 'page' },
    { title: 'Terms of Service', content: 'Terms and conditions for using Six Health', url: '/terms', category: 'page' },
  ];

  pages.forEach(page => {
    items.push({
      id: page.url,
      title: page.title,
      content: page.content,
      category: page.category,
      type: 'page',
      url: page.url,
      excerpt: page.content,
    });
  });

  return items;
};
export const searchContent = (query: string): SearchableItem[] => {
  if (!query.trim()) return [];

  const allContent = getAllSearchableContent();
  const lowerQuery = query.toLowerCase();

  return allContent.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.content.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
};
