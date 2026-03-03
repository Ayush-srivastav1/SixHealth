import { Link } from "react-router-dom";
import { navigationCategories } from "@/data/categories";

export default function ToolsDropdown() {
  const tools = navigationCategories.find((c) => c.id === "tools");
  if (!tools) return null;

  const allLinks = tools.extraLinks || [];
  const colCount = 3;
  const perCol = Math.ceil(allLinks.length / colCount);
  const columns = Array.from({ length: colCount }, (_, i) =>
    allLinks.slice(i * perCol, (i + 1) * perCol)
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-8">
        {columns.map((col, idx) => (
          <div key={idx} className="space-y-2">
            {col.map((link) => (
              <Link key={link.title} to={link.href} className="block text-lg hover:underline text-gray-900">
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <Link to="/tools" className="text-sm font-semibold text-gray-900 hover:underline">
          View all tools →
        </Link>
      </div>
    </div>
  );
}
