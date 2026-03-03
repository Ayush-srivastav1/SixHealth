import { Link } from "react-router-dom";
export default function FeaturedDropdown() {
  const healthNews = [
    { title: "Medicare 2026 Changes", slug: "medicare-2026-changes" },
    { title: "Can 6-6-6 Walking Workout Help You Lose Weight?", slug: "can-6-6-6-walking-workout-help-you-lose-weight" },
    { title: "This Couple Lost 118 Pounds Together Without Medication", slug: "couple-lost-118-pounds-without-medication" },
    { title: "5 Science-Backed Ways to Live a Longer Life", slug: "5-science-backed-ways-to-live-a-longer-life" },
    { title: "Morning Coffee May Help You Live Longer", slug: "morning-coffee-may-help-you-live-longer" },
  ];

  const thisJustIn = [
    { title: "5 Tips for a Healthy Lifestyle", slug: "5-tips-for-a-healthy-lifestyle" },
    { title: "How to Disinfect Your House After the Flu", slug: "how-to-disinfect-your-house-after-the-flu" },
    { title: "Best Vegan and Plant-Based Meal Delivery for 2025", slug: "best-vegan-plant-based-meal-delivery-2025" },
    { title: "Does Medicare Cover Pneumonia Shots?", slug: "does-medicare-cover-pneumonia-shots" },
    { title: "Chromosomes, Genetics, and Your Health", slug: "chromosomes-genetics-and-your-health" },
  ];

  const topReads = [
    { title: "Best Multivitamins for Women", slug: "best-multivitamins-for-women" },
    { title: "Best Multivitamins for Men", slug: "best-multivitamins-for-men" },
    { title: "Best Online Therapy Services", slug: "best-online-therapy-services" },
    { title: "Online Therapy That Takes Insurance", slug: "online-therapy-that-takes-insurance" },
    { title: "Buy Ozempic Online", slug: "buy-ozempic-online" },
    { title: "Mounjaro Overview", slug: "mounjaro-overview" },
  ];

  const videoSeries = [
    { title: "Youth in Focus", slug: "youth-in-focus" },
    { title: "Healthy Harvest", slug: "healthy-harvest" },
    { title: "Through an Artist's Eye", slug: "through-an-artists-eye" },
    { title: "Future of Health", slug: "future-of-health" },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
      <div className="flex flex-col min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-xl">Health News</span>
          <span className="font-bold text-lg flex items-center gap-1">ALL <span>→</span></span>
        </div>
        <hr className="mb-6 border-gray-300" />
        <div className="space-y-3">
          {healthNews.map((item) => (
            <Link key={item.slug} to={`/featured/${item.slug}`} className="block text-lg hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col min-w-0">
        <span className="font-bold text-xl block mb-2">This Just In</span>
        <hr className="mb-6 border-gray-300" />
        <div className="space-y-3">
          {thisJustIn.map((item) => (
            <Link key={item.slug} to={`/featured/${item.slug}`} className="block text-lg hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col min-w-0">
        <span className="font-bold text-xl block mb-2">Top Reads</span>
        <hr className="mb-6 border-gray-300" />
        <div className="space-y-3">
          {topReads.map((item) => (
            <Link key={item.slug} to={`/featured/${item.slug}`} className="block text-lg hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col min-w-0">
        <span className="font-bold text-xl block mb-2">Video Series</span>
        <hr className="mb-6 border-gray-300" />
        <div className="space-y-3">
          {videoSeries.map((item) => (
            <Link key={item.slug} to={`/featured/${item.slug}`} className="block text-lg hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
