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
    <div className="flex gap-8 bg-white p-8 shadow-xl rounded-lg min-w-[900px] w-full">
      <div className="flex-1 grid grid-cols-3 gap-x-8">
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
      <div className="min-w-[220px] border-l border-gray-200 pl-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-xl">Condition Spotlight</span>
          <Link to="/sponsored-topics" className="font-bold text-lg flex items-center gap-1 hover:underline">ALL <span>→</span></Link>
        </div>
        {spotlight.map((item) => (
          <Link to={item.link} key={item.title} className="flex items-center gap-3 py-2 hover:underline">
            <img src={item.icon} alt="" className="w-8 h-8" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
