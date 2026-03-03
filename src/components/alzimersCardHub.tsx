import React from "react";
import { contentToString } from "@/lib/articleUtils";
import { ArrowRight } from "lucide-react";

export interface CardSection {
  id: string;
  title: string;
  category: string;
  articles: CardArticle[];
}

export interface CardArticle {
  id: string;
  title: string;
  content: string;
}

interface CardHubProps {
  sections: CardSection[];
  onArticleClick: (id: string, title: string) => void;
}

export function CardHub({ sections, onArticleClick }: CardHubProps) {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <div key={section.id} className="mb-20">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 text-lg">
                Category: <span className="font-semibold">{section.category}</span>
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mt-4 rounded"></div>
            </div>

            {/* Article Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.articles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onArticleClick(article.id, article.title)}
                  className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-400"
                >
                  {/* Card Header with Category Color */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700"></div>

                  {/* Card Content */}
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition line-clamp-3">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {contentToString((article as unknown as { content?: unknown }).content)}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Read more</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
