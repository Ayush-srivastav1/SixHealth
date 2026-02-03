import React from "react";

const newsArticles = [
  {
    title: "To-Go Coffee Cups Release Thousands of Microplastics: How to Stay Safe",
    date: "JANUARY 26, 2026",
    href: "/health-news/to-go-coffee-cups-release-microplastics-study",
    img: "/images/news-coffee-cups.jpg",
    desc: "A recent study has found that to-go coffee cups may release microplastics when hot beverages are in them. Find out how to stay safe here.",
  },
  {
    title: "Physical Activity May Reduce Breast Cancer Risk, Study Shows",
    date: "JANUARY 26, 2026",
    href: "/health-news/physical-activity-may-reduce-breast-cancer-risk",
    img: "/images/news-breast-cancer.jpg",
    desc: "A recent study has found that being physically active at an earlier age may help reduce breast cancer risk later in life.",
  },
  {
    title: "And Just Like That... Sarah Jessica Parker Realized Her Vision Was Changing",
    date: "JANUARY 25, 2026",
    href: "/health-news/sarah-jessica-parker-talks-age-related-blurry-vision-treatment",
    img: "/images/news-sjp-vision.jpg",
    desc: "Sarah Jessica Parker reveals how she is addressing age-related blurry vision. The 'And Just Like That...' and 'Sex and the City' star and avid reader…",
  },
  {
    title: "What TV Gets Wrong About CPR and Why It Matters",
    date: "JANUARY 24, 2026",
    href: "/health-news/what-tv-gets-wrong-about-cpr-and-why-it-matters",
    img: "/images/news-cpr.jpg",
    desc: "Scripted television often shows CPR performed incorrectly. This can affect how the public responds to emergency situations, according to a recent…",
  },
  {
    title: "Heart Disease Deaths Decline, but Remain Leading Cause of Death in U.S.",
    date: "JANUARY 23, 2026",
    href: "/health-news/heart-disease-stroke-deaths-decline-but-remain-leading-cause-of-death",
    img: "/images/news-heart-disease.jpg",
    desc: "Deaths from heart disease and stroke are declining, but still kill more Americans than any other cause, according to new data from the American Heart…",
  },
  {
    title: "Colorectal Cancer Is Now Leading Cause of Cancer Deaths in People Under 50",
    date: "JANUARY 23, 2026",
    href: "/health-news/colorectal-cancer-leading-cause-cancer-related-death-young-adults",
    img: "/images/news-colorectal-cancer.jpg",
    desc: "Colorectal cancer is now the leading cause of death due to cancer for Americans under 50, according to a new report from the American Cancer Society…",
  },
  // Add more articles as needed
];

const HealthNewsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Health News</h1>
        <p className="mb-8 text-lg">Healthline News reports on emerging research, new treatments, diet, exercise, and trending topics in health and wellness. All articles are written by our network of editors and contributors. Everything we publish is fact checked by our <a href="/medical-team#medical-integrity-network" className="underline text-blue-600">panel of experts</a>.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {newsArticles.map((article) => (
            <a key={article.title} href={article.href} className="block bg-gray-50 hover:bg-blue-50 rounded-lg p-4 shadow-sm transition">
              <div className="mb-3">
                <img src={article.img} alt="" className="w-full h-40 object-cover rounded mb-2" />
                <div className="text-xs text-gray-500 mb-1">{article.date}</div>
                <div className="font-semibold text-lg mb-1">{article.title}</div>
                <div className="text-gray-700 text-sm mb-2">{article.desc}</div>
                <span className="text-blue-600 font-medium hover:underline">READ MORE</span>
              </div>
            </a>
          ))}
        </div>
        {/* Newsletter Signup */}
        <section className="bg-blue-50 rounded-lg p-6 text-center mb-12">
          <h2 className="text-xl font-semibold mb-2">Get our wellness newsletter</h2>
          <p className="mb-4">Filter out the noise and nurture your inbox with health and wellness advice that’s inclusive and rooted in medical expertise.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">Your <a href="/privacy-policy" className="underline">privacy</a> is important to us</p>
        </section>
      </div>
    </div>
  );
};

export default HealthNewsPage;
