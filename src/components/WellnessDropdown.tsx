import { Link } from "react-router-dom";
import { navigationCategories } from "@/data/categories";

export default function WellnessDropdown() {
  const category = navigationCategories.find((c) => c.id === "wellness");
  if (!category || !category.extraLinks) return null;

  return (
    <div className="absolute top-0 left-0 mt-2 w-[950px] bg-[#f9f6f2] border border-gray-200 rounded-lg shadow-lg p-8 text-black">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xl">Wellness Topics</span>
            <Link to="/wellness" className="font-bold text-lg flex items-center gap-1 hover:underline">ALL <span>→</span></Link>
          </div>
          <hr className="mb-4 border-gray-400" />
          <div className="grid grid-cols-2 gap-y-3 gap-x-8">
            {category.extraLinks.map((item) => (
              <Link key={item.title} to={item.href} className="block text-lg hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xl">Product Reviews</span>
            <Link to="/reviews" className="font-bold text-lg flex items-center gap-1 hover:underline">ALL <span>→</span></Link>
          </div>
          <hr className="mb-4 border-gray-400" />
          <div className="space-y-3">
            {[
              { title: "At-Home Testing", href: "/reviews/at-home-testing" },
              { title: "Men's Health", href: "/reviews/mens-health" },
              { title: "Mental Health", href: "/reviews/mental-health" },
              { title: "Nutrition", href: "/reviews/nutrition" },
              { title: "Sleep", href: "/reviews/sleep" },
              { title: "Vitamins and Supplements", href: "/reviews/vitamins-supplements" },
              { title: "Women's Health", href: "/reviews/womens-health" },
            ].map((item) => (
              <Link key={item.title} to={item.href} className="block text-lg hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xl">Featured Programs</span>
            <Link to="/sponsored-topics" className="font-bold text-lg flex items-center gap-1 hover:underline">ALL <span>→</span></Link>
          </div>
          <hr className="mb-4 border-gray-400" />
          <div className="space-y-4">
            {[
              { title: "Your Guide to Glucose Health", icon: "/featured/glucose.png", href: "/programs/glucose-health" },
              { title: "Inflammation and Aging", icon: "/featured/inflammation.png", href: "/programs/inflammation-aging" },
              { title: "Cold & Flu Season Survival Guide", icon: "/featured/coldflu.png", href: "/programs/cold-flu" },
              { title: "She’s Good for Real", icon: "/featured/goodforreal.png", href: "/programs/good-for-real" },
            ].map((item) => (
              <Link key={item.title} to={item.href} className="flex items-center gap-4 group">
                <img src={item.icon} alt="" className="w-14 h-14 rounded-full object-cover bg-gray-200" />
                <span className="text-lg font-medium group-hover:underline">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
