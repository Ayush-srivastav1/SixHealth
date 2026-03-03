import React from "react";

export default function PageLayout({ 
  title, 
  subtitle, 
  tabs = [], 
  activeTab, 
  onTabClick, 
  children, 
  heroColor = "#9333ea" // default purple
}) {
  return (
    <div>
      {}
      <section style={{ background: heroColor, paddingTop: '9rem', paddingBottom: '9rem' }} className="text-white text-center">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-lg mb-6">{subtitle}</p>}
        {tabs.length > 0 && (
          <nav className="flex flex-wrap justify-center gap-3">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => onTabClick && onTabClick(tab)}
                className={`px-4 py-4 rounded-full ${
                  activeTab === tab
                    ? "bg-white text-purple-700 font-bold"
                    : "bg-purple-600 hover:bg-white hover:text-purple-700"
                } transition`}
              >
                {tab}
              </button>
            ))}
          </nav>
        )}
      </section>
      {}
      <div className="site-container py-10">
        {children}
      </div>
    </div>
  );
}
