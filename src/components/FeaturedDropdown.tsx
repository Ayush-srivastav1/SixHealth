import { Link } from "react-router-dom";

export default function FeaturedDropdown() {
  return (
    <div className="absolute top-0 left-0 mt-2 w-[1100px] bg-[#f9f6f2] border border-gray-200 rounded-lg shadow-lg p-8 text-black">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xl">Health News</span>
            <Link to="/health-news" className="font-bold text-lg flex items-center gap-1 hover:underline">ALL <span>→</span></Link>
          </div>
          <hr className="mb-4 border-gray-400" />
          <div className="space-y-3">
            <Link to="#" className="block text-lg hover:underline">Medicare 2026 Changes</Link>
            <Link to="#" className="block text-lg hover:underline">Can 6-6-6 Walking Workout Help You Lose Weight?</Link>
            <Link to="#" className="block text-lg hover:underline">This Couple Lost 118 Pounds Together Without Medication</Link>
            <Link to="#" className="block text-lg hover:underline">5 Science-Backed Ways to Live a Longer Life</Link>
            <Link to="#" className="block text-lg hover:underline">Morning Coffee May Help You Live Longer</Link>
          </div>
        </div>

        <div className="flex-1">
          <span className="font-bold text-xl block mb-2">This Just In</span>
          <hr className="mb-4 border-gray-400" />
          <div className="space-y-3">
            <Link to="#" className="block text-lg hover:underline">5 Tips for a Healthy Lifestyle</Link>
            <Link to="#" className="block text-lg hover:underline">How to Disinfect Your House After the Flu</Link>
            <Link to="#" className="block text-lg hover:underline">Best Vegan and Plant-Based Meal Delivery for 2025</Link>
            <Link to="#" className="block text-lg hover:underline">Does Medicare Cover Pneumonia Shots?</Link>
            <Link to="#" className="block text-lg hover:underline">Chromosomes, Genetics, and Your Health</Link>
          </div>
        </div>

        <div className="flex-1">
          <span className="font-bold text-xl block mb-2">Top Reads</span>
          <hr className="mb-4 border-gray-400" />
          <div className="space-y-3">
            <Link to="#" className="block text-lg hover:underline">Best Multivitamins for Women</Link>
            <Link to="#" className="block text-lg hover:underline">Best Multivitamins for Men</Link>
            <Link to="#" className="block text-lg hover:underline">Best Online Therapy Services</Link>
            <Link to="#" className="block text-lg hover:underline">Online Therapy That Takes Insurance</Link>
            <Link to="#" className="block text-lg hover:underline">Buy Ozempic Online</Link>
            <Link to="#" className="block text-lg hover:underline">Mounjaro Overview</Link>
          </div>
        </div>

        <div className="flex-1">
          <span className="font-bold text-xl block mb-2">Video Series</span>
          <hr className="mb-4 border-gray-400" />
          <div className="space-y-3">
            <Link to="#" className="block text-lg hover:underline">Youth in Focus</Link>
            <Link to="#" className="block text-lg hover:underline">Healthy Harvest</Link>
            <Link to="#" className="block text-lg hover:underline">Through an Artist's Eye</Link>
            <Link to="#" className="block text-lg hover:underline">Future of Health</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
