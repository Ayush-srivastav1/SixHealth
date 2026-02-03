import React from "react";

const programs = [
  { name: "Diabetes Nutrition", comingSoon: false },
  { name: "High Cholesterol", comingSoon: false },
  { name: "Crohn’s and UC Essentials", comingSoon: false },
  { name: "Taming Inflammation in RA", comingSoon: false },
  { name: "Taming Inflammation in Psoriatic Arthritis", comingSoon: false },
  { name: "Taming Inflammation in Psoriasis", comingSoon: false },
  { name: "Staying Active with MS", comingSoon: true },
  { name: "Better Health with COPD", comingSoon: true },
  { name: "DIY Methods for Managing Depression", comingSoon: true },
  { name: "Real Life Strategies for Weight Control", comingSoon: true },
];

const testimonials = [
  {
    quote: "I have been 'thrown' into a new way of eating and am finding these lessons VERY helpful in getting my new lifestyle going in the right direction.",
    program: "High Cholesterol Program",
    title: "Very helpful",
  },
  {
    quote: "Quick, without sacrificing quality and important information; easy to understand and follow tips for a healthier lifestyle.",
    program: "High Cholesterol Program",
    title: "Quick without sacrificing quality",
  },
  {
    quote: "They are brief and are presented in a spirit-lifting way, which is so helpful when trying to wrap one's head around a new diagnosis.",
    program: "Crohn’s and UC Program",
    title: "Presented in a spirit lifting way",
  },
  {
    quote: "They are down to earth. They acknowledge that sometimes choices are hard and offer ways to make better choices in baby steps rather than all or nothing, which doesn't really work for most people.",
    program: "Type 2 Diabetes Program",
    title: "Down to earth",
  },
  {
    quote: "I feel more hopeful that I can reduce my sugar intake by following these ideas and happy that I have a healthy guide to healthier eating.",
    program: "Type 2 Diabetes Program",
    title: "I feel more hopeful",
  },
  {
    quote: "The lessons have been very informative and easy to understand. They also make me hopeful that my health condition is not as hopeless as I once thought it to be. The lessons motivate me to do everything I possibly can to live a healthy life.",
    program: "Type 2 Diabetes Program",
    title: "Very informative",
  },
];

const highlights = [
  {
    title: "Under 10 minutes a week",
    desc: "Short lessons that make a big difference.",
    img: "/images/highlight-icon2.jpg",
  },
  {
    title: "Fun and effective",
    desc: "Quizzes and graphics that make learning easy.",
    img: "/images/highlight-icon3.jpg",
  },
  {
    title: "Created by experts",
    desc: "Proven advice from specialists you can trust.",
    img: "/images/highlight-icon1.jpg",
  },
];

const features = [
  { title: "Short and Fun Quizzes", desc: "Reinforce learnings with short and fun quizzes" },
  { title: "Health Hacks", desc: "Expert-approved lifestyle tips" },
  { title: "Practical Visuals", desc: "Key concepts highlighted with engaging visuals" },
  { title: "Weekly Goals", desc: "Keep it going with up to 3 weekly goals" },
];

const LessonsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Better health, made simple.</h1>
        <p className="mb-6 text-lg">Making lifestyle changes for a chronic condition can feel overwhelming, but it doesn't have to be. Healthline Lessons guides you through small changes that make a big difference.</p>
        <div className="mb-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center">
                <img src={h.img} alt="" className="w-16 h-16 mb-2" />
                <h3 className="font-semibold text-lg mb-1">{h.title}</h3>
                <p className="text-gray-700 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {programs.map((p) => (
            <div key={p.name} className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
              <span className="font-medium text-lg">{p.name}</span>
              {p.comingSoon && <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded">COMING SOON</span>}
            </div>
          ))}
        </div>
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-4">Become the champion of your own health</h2>
          <p className="mb-6 text-lg">Managing your chronic condition can be a challenge, but Healthline Lessons is here to help. With lessons developed by health experts and inspired by real-life experience, you can climb that mountain one step at a time.</p>
          <img src="/images/food-mountain.png" alt="hiker summiting a pile of healthy foods" className="mx-auto w-64 md:w-80 mb-6" />
        </div>
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-4">Join over 300,000 others improving their health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.title} className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">{t.title}</h3>
                <p className="italic mb-2">“{t.quote}”</p>
                <span className="text-xs text-gray-600">{t.program}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-4">What you can expect from us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-purple-50 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-700 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-12 text-center">
          <h2 className="text-xl font-semibold mb-2">Created by the #1 Health Information Site</h2>
          <p className="mb-4">As the largest health information site in the U.S., Healthline Media helps empower millions of people to live stronger, healthier lives. We reach more than 94 million people each month across our brand portfolios.</p>
          <a href="https://www.healthlinemedia.com/" className="text-blue-600 font-medium hover:underline mr-4">LEARN MORE</a>
          <a href="https://www.healthlinemedia.com/partner" className="text-blue-600 font-medium hover:underline">ADVERTISE WITH US</a>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
