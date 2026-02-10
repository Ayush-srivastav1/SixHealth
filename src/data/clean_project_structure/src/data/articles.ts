export type Article = {
  id: string;
  title: string;
  category: string;
  sections: { heading: string; content: string }[];
};

export const articles: Article[] = [
  {
    id: "what-is-asthma",
    title: "What Is Asthma?",
    category: "asthma",
    sections: [
      { heading: "Overview", content: "Asthma is a chronic respiratory condition." }
    ]
  }
];
