import React from "react";

const latest = [
  { name: "We Tried 10 of the Best Sustainable Activewear Brands", href: "/health/fitness/best-sustainable-activewear-brands" },
  { name: "The 7 Best Vegan Ice Creams, According to a Dietitian", href: "/healthy/best-vegan-ice-cream" },
  { name: "What to Know About D.L. Eyewear", href: "/health/dl-eyewear" },
  { name: "10 Best Teeth Whitening Pens", href: "/healthy/10-best-teeth-whitening-pens" },
];

const exploreBy = [
  { name: "Vitamins & Supplements", href: "/reviews/vitamin-and-supplement-products" },
  { name: "Sleep", href: "/reviews/sleep-products" },
  { name: "Mental Health", href: "/reviews/mental-health-services-and-products" },
  { name: "Nutrition", href: "/reviews/nutrition-products" },
  { name: "At-Home Testing", href: "/reviews/at-home-testing-products" },
];

const mostPopular = [
  { name: "8 Best Prenatal Vitamins of 2026: Dietitian-Selected and Mom-Approved", href: "/health/pregnancy/best-prenatal-vitamins" },
  { name: "The 5 Best CBD Gummies for 2026: Medically Vetted and Tested", href: "/cbd/best-cbd-gummies" },
  { name: "Are Food Sensitivity Tests Trustworthy? Why They’re Not, and Other…", href: "/health/food-sensitivity-test" },
  { name: "Best Sites to Buy Viagra Online (& Why Generic Viagra Is Cheaper)", href: "/health/mens-health/viagra-online" },
];

const editorsPicks = [
  { name: "Hydrow Review: We Tried the Tesla of Rowing Machines", href: "/health/fitness/hydrow-review" },
  { name: "The 25 Best Home Gym Equipment Items", href: "/health/fitness/home-gym-equipment" },
  { name: "Our Picks for the Best Healthy Meal Delivery Services for 2025", href: "/nutrition/healthy-meal-delivery" },
  { name: "20 Best Products from The Ordinary", href: "/healthy/best-the-ordinary-products" },
  { name: "5 Hand Massagers for Pain and Stiffness Relief at Your Fingertips", href: "/health/arthritis/best-hand-massagers" },
  { name: "The 10 Best Workout Mats for Any Exercise", href: "/healthy/workout-mat" },
  { name: "The 13 Best Grocery Delivery Services", href: "/nutrition/best-grocery-delivery" },
];

const sectionData = [
  {
    title: "VITAMINS AND SUPPLEMENTS",
    links: [
      { name: "7 Best Vitamin Brands for 2026, Chosen by Experts and Tested by Our…", href: "/nutrition/best-vitamin-brands" },
      { name: "Best Multivitamins for Men in 2026: Top 4 Picks From A Dietitian", href: "/nutrition/best-multivitamins-for-men" },
      { name: "The 5 Best Multivitamins for Women — and Why Cheaper Can Be Better", href: "/nutrition/multivitamins-womens-health" },
      { name: "3 Best Personalized Vitamin Subscription Services in 2026, According…", href: "/nutrition/personalized-vitamins" },
    ],
  },
  {
    title: "SLEEP",
    links: [
      { name: "10 Best Mattresses for Lower Back Pain", href: "/health/healthy-sleep/best-mattress-for-lower-back-pain" },
      { name: "Pain in the Neck? Our Picks of the 10 Best Pillows for Neck Pain", href: "/health/neck-pain/best-pillow-for-neck-pain" },
      { name: "The Best Extra-Firm Mattresses", href: "/health/healthy-sleep/best-extra-firm-mattresses" },
      { name: "The Best Comforters in 2023: Our 9 Coziest Picks", href: "/healthy/best-comforters" },
    ],
  },
  {
    title: "CBD",
    links: [
      { name: "The Best CBD Oil for 2026: 7 Tested and Vetted", href: "/cbd/best-cbd-oil" },
      { name: "4 Best CBD Gummies for Anxiety and Stress in 2026", href: "/health/best-cbd-gummies-for-anxiety" },
      { name: "The Best CBD for Sleep for 2026: 7 Products That Improved Our Sleep", href: "/health/best-cbd-for-sleep" },
    ],
  },
  {
    title: "MENTAL HEALTH",
    links: [
      { name: "8 Best Online Therapy Services: Options for Affordability, Insurance…", href: "/health/our-top-10-online-therapy-picks" },
      { name: "Affordable Therapy from Home: The Best Online Options in 2026", href: "/health/therapy-for-every-budget" },
      { name: "The Best Online Psychiatrist Platforms for 2026", href: "/health/mental-health/online-psychiatrist" },
      { name: "We Tried BetterHelp: A 2026 Review of Features, Cost, and More", href: "/health/mental-health/betterhelp-review" },
    ],
  },
  {
    title: "NUTRITION",
    links: [
      { name: "9 Best Meal Delivery Services for Weight Loss in 2025, Tested and…", href: "/nutrition/weight-loss-meal-delivery" },
      { name: "Best Meal Delivery Services for 2026: We Tested Healthy, Prepared…", href: "/nutrition/best-meal-delivery-service" },
      { name: "6 Best Gluten-Free Meal Delivery Services for 2026", href: "/nutrition/gluten-free-meal-delivery" },
    ],
  },
  {
    title: "AT-HOME TESTING",
    links: [
      { name: "We Tried 8 of the Best At-Home STD Tests for 2026", href: "/health/at-home-std-test" },
      { name: "3 Best At-Home Cortisol Tests in 2025", href: "/health/cortisol-tests" },
      { name: "5 Best At-Home Hormone Tests of 2026: Should You Use Them?", href: "/health/hormone-test-at-home" },
    ],
  },
  {
    title: "WOMEN'S HEALTH",
    links: [
      { name: "6 Best At-Home Fertility Tests for Women", href: "/health/infertility/best-at-home-fertility-test" },
      { name: "Uqora Review: Is It Effective Against UTIs?", href: "/health/womens-health/uqora-review" },
      { name: "8 UTI Home Remedies Other Than Antibiotics", href: "/health/womens-wellness-uti-antibiotics" },
      { name: "The Best Yeast Infection Pills, Creams, and Treatment Options for 2025", href: "/health/womens-health/yeast-infection-pill" },
    ],
  },
  {
    title: "MEN'S HEALTH",
    links: [
      { name: "Comparing Hims vs. Roman 2025: What to Know About These Men’s Health…", href: "/health/hims-vs-roman" },
      { name: "How Much Does Viagra Cost? Viagra Prices and Savings Tips for 2025", href: "/health/viagra-price" },
      { name: "Best Hair Loss Treatments for Men for 2026: Costs, Benefits, and More", href: "/health/hair-loss-treatments-for-men" },
    ],
  },
  {
    title: "FITNESS",
    links: [
      { name: "NordicTrack Treadmills Review", href: "/health/fitness/nordictrack-treadmill" },
      { name: "The 5 Best Recumbent Exercise Bikes for Home Workouts", href: "/health/fitness/best-recumbent-exercise-bikes" },
      { name: "The 6 Best Ellipticals", href: "/nutrition/best-elliptical" },
      { name: "The 11 Best Fitness Trackers", href: "/nutrition/best-fitness-tracker" },
    ],
  },
  {
    title: "PARENTHOOD",
    links: [
      { name: "The 7 Best Breast Pumps We’ve Tried: Electric, Manual, Hospital-Grade…", href: "/health/pregnancy/best-breast-pump" },
      { name: "From Bedtime Stories to Bilingual Tales: Our Best Baby Book Picks", href: "/healthy/best-baby-books" },
      { name: "8 Nursery Must-Haves You Can Find at Target", href: "/healthy/target-nursery-essentials" },
      { name: "9 Comfy and Functional Nursing Tops for Breastfeeding", href: "/healthy/best-nursing-tops" },
    ],
  },
  {
    title: "VISION",
    links: [
      { name: "The Best Places to Buy Contacts Online", href: "/health/contacts-online" },
      { name: "The 9 Best Places to Buy Prescription Eyeglasses Online", href: "/health/glasses-online" },
      { name: "9 Reading Glasses You Can Find Online", href: "/health/best-reading-glasses" },
      { name: "This is How to Find Out What Prescription Your Glasses Are", href: "/health/how-to-find-out-what-prescription-your-glasses-are" },
    ],
  },
  {
    title: "HEARING",
    links: [
      { name: "8 Best Hearing Aids", href: "/health/best-hearing-aid" },
      { name: "The 5 Best Hearing Aids for Tinnitus", href: "/health/hearing-aid-for-tinnitus" },
      { name: "Miracle-Ear Review: What to Know Before You Buy", href: "/health/miracle-ear" },
      { name: "Eargo Review: Is It Worth the Price?", href: "/health/eargo-review" },
    ],
  },
  {
    title: "SKIN CARE",
    links: [
      { name: "How to Get Rid of Acne: Home Remedies for Pimples", href: "/nutrition/13-acne-remedies" },
      { name: "15 Best Face Washes for Acne, According to Dermatologists", href: "/health/15-face-washes-for-acne" },
      { name: "The Best 13 Moisturizers for Dry Skin", href: "/health/moisturizer-for-dry-skin" },
      { name: "We Asked a Dermatologist What Makes the Best Eye Cream for Dark…", href: "/health/beauty-skin-care/best-eye-cream-for-dark-circles" },
    ],
  },
];

const ReviewsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">Healthline Reviews</h1>
        {}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">LATEST</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {latest.map((item) => (
              <a key={item.name} href={item.href} className="block bg-gray-100 hover:bg-blue-50 rounded-lg p-4 font-medium shadow-sm transition">
                {item.name}
              </a>
            ))}
          </div>
        </section>
        {}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">EXPLORE BY</h2>
          <div className="flex flex-wrap gap-3">
            {exploreBy.map((item) => (
              <a key={item.name} href={item.href} className="bg-green-50 hover:bg-green-100 rounded px-4 py-2 font-medium shadow-sm transition">
                {item.name}
              </a>
            ))}
          </div>
        </section>
        {}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">MOST POPULAR</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {mostPopular.map((item) => (
              <a key={item.name} href={item.href} className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg p-4 font-medium shadow-sm transition">
                {item.name}
              </a>
            ))}
          </div>
        </section>
        {}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">EDITORS' PICKS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {editorsPicks.map((item) => (
              <a key={item.name} href={item.href} className="block bg-pink-50 hover:bg-pink-100 rounded-lg p-4 font-medium shadow-sm transition">
                {item.name}
              </a>
            ))}
          </div>
        </section>
        {}
        {sectionData.map((section) => (
          <section className="mb-10" key={section.title}>
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {section.links.map((item) => (
                <a key={item.name} href={item.href} className="block bg-gray-50 hover:bg-blue-50 rounded-lg p-4 font-medium shadow-sm transition">
                  {item.name}
                </a>
              ))}
            </div>
          </section>
        ))}
        {}
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

export default ReviewsPage;
