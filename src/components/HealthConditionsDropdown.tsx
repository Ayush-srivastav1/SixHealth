import { Link } from "react-router-dom";
import { navigationCategories } from "@/data/categories";

const spotlight = [
  {
    title: "Controlling Ulcerative Colitis",
    icon: "/icons/colitis.svg",
    link: "/sponsored-topics",
  },
  {
    title: "Navigating Life with Bipolar Disorder",
    icon: "/icons/bipolar.svg",
    link: "/sponsored-topics",
  },
  {
    title: "Mastering Geographic Atrophy",
    icon: "/icons/atrophy.svg",
    link: "/sponsored-topics",
  },
  {
    title: "Managing Type 2 Diabetes",
    icon: "/icons/diabetes.svg",
    link: "/sponsored-topics",
  },
];

export default function HealthConditionsDropdown() {
  const healthCategory = navigationCategories.find(
    (cat) => cat.id === "health-conditions"
  );
  if (!healthCategory) return null;

  let allLinks = [];
  for (const link of healthCategory.extraLinks || []) {
    if (link.subLinks) {
      allLinks = allLinks.concat(link.subLinks);
    } else {
      allLinks.push(link);
    }
  }

  const colCount = 3;
  const perCol = Math.ceil(allLinks.length / colCount);
  const columns = Array.from({ length: colCount }, (_, i) =>
    allLinks.slice(i * perCol, (i + 1) * perCol)
  );

  return (
    <div
      className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-full max-w-[1200px] z-[1000] bg-white shadow-2xl rounded-lg border border-gray-200 box-border"
      style={{ margin: '0 auto', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', left: '50%', transform: 'translateX(-50%)', maxWidth: '1200px' }}
    >
      <div className="w-full px-6 py-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-1">
              {col.map((link) => (
                <Link
                  to={link.href}
                  key={link.title}
                  className="block py-1 text-black hover:underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[220px] border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xl">Condition Spotlight</span>
            <Link to="/sponsored-topics" className="font-bold text-lg flex items-center gap-1 hover:underline">ALL <span>→</span></Link>
          </div>
          {spotlight.map((item) => (
            <Link to={item.link} key={item.title} className="flex items-center gap-3 py-2 hover:underline">
              <img src={item.icon} alt={item.title} className="w-8 h-8" loading="lazy" onError={(e: any) => { e.currentTarget.src = '/placeholder.svg'; }} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
