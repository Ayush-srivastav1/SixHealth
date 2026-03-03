import React, { useState } from "react";

const newsletters = [
  { name: "Wellness Wire", desc: "Get expert advice on trending health topics, and hear how our editors practice wellness in their everyday lives.", freq: "THREE TIMES WEEKLY" },
  { name: "Nutrition Made Easy", desc: "Our team of registered dietitians answers life's big nutrition questions — plus, get a delicious new recipe every week!", freq: "THREE TIMES WEEKLY" },
  { name: "Product Picks", desc: "We vet and review hundreds of wellness brands, services, and products to help you live better.", freq: "TWICE MONTHLY" },
  { name: "Health News Daily", desc: "Stay on top of the latest health and wellness news with this daily dose of stories.", freq: "DAILY" },
  { name: "Eat Wise", desc: "We'll send you tips on eating wisely, news on breakthroughs, and more resources to help you stay on top of your health.", freq: "WEEKLY" },
  { name: "Diabetes Digest", desc: "Learn how to manage your diet, stay on top of your blood sugar levels, and better understand type 2 diabetes.", freq: "TWICE WEEKLY" },
  { name: "Recipe of the Month", desc: "Get recipes tailored to your unique tastes and interests every month!", freq: "MONTHLY" },
  { name: "Menopause Matters", desc: "Our newsletter will help you feel more prepared for this phase of life.", freq: "WEEKLY" },
  { name: "Sleep Smarts", desc: "Learn how to sleep well every night so that you can wake up refreshed and rested.", freq: "TWICE WEEKLY" },
  { name: "Mind Matters", desc: "We'll send expert guidance and science-backed tips to help you understand your triggers and improve your mental health.", freq: "WEEKLY" },
  { name: "Heart Health", desc: "How can you take the best care of your heart? This newsletter has everything to know.", freq: "WEEKLY" },
  { name: "Arthritis Answers", desc: "Learn how you can manage pain, swelling, and stiffness with the latest treatment options.", freq: "WEEKLY" },
  { name: "Herbal & Holistic", desc: "Stay in the know about herbal remedies, alternative therapies, holistic medicine, and much more.", freq: "TWICE WEEKLY" },
  { name: "Allergy & Asthma", desc: "Sneezing? Itchy eyes? Whether you live with allergies or asthma, we've got you covered on how to deal.", freq: "WEEKLY" },
  { name: "Chronic Pain", desc: "Our weekly newsletter features pain management techniques, tips to avoid fatigue, and more.", freq: "WEEKLY" },
  { name: "Multiple Sclerosis", desc: "Get treatment updates, self-care tips, and inspiring stories from real people living with this disease.", freq: "TWICE WEEKLY" },
  { name: "IBD Insights", desc: "We'll prepare you to deal with flare-ups whenever they appear and share lifestyle changes that can help you feel better.", freq: "TWICE WEEKLY" },
  { name: "Gut Health", desc: "We talked to your gut — it thinks you need this newsletter in your life.", freq: "WEEKLY" },
  { name: "COPD Support", desc: "Living with COPD can be challenging. This newsletter is here to support you (and your lungs).", freq: "WEEKLY" },
  { name: "Cancer Care", desc: "Everything you need to know about cancer care and treatments — for yourself or a loved one.", freq: "WEEKLY" },
  { name: "Bipolar Support", desc: "Get science-backed advice and firsthand stories from people living with bipolar disorder.", freq: "WEEKLY" },
  { name: "Migraine Relief", desc: "A migraine attack is more than 'just a headache.' Get tips from experts and people who understand migraine well.", freq: "WEEKLY" },
  { name: "Joint Health", desc: "Keep yourself healthy and moving safely with our expert-backed tips.", freq: "WEEKLY" },
  { name: "Women's Health", desc: "From pain management to fertility education, we're here to support you throughout your journey.", freq: "WEEKLY" },
  { name: "Breast Cancer", desc: "Learn more about detection, diagnosis, treatment, and experiences from experts and real people.", freq: "WEEKLY" },
  { name: "ADHD Support", desc: "Can't stay focused? Emotions running high? We're here to help.", freq: "WEEKLY" },
  { name: "Alzheimer's & Dementia", desc: "Alzheimer's can affect many parts of your life — and your loved one’s. Let us help guide you along this journey.", freq: "MONTHLY" },
  { name: "Parenting", desc: "Every month, we’ll share resources to help you navigate the many aspects of parenting.", freq: "WEEKLY" },
  { name: "Eye Health", desc: "Get tips and advice to keep your eyes healthy and functioning properly for a long time.", freq: "WEEKLY" },
  { name: "Kidney Health", desc: "Find resources to help you manage chronic kidney disease so that you can live well.", freq: "WEEKLY" },
  { name: "Healthy Living", desc: "Expert advice, tips to build healthy habits, and the latest on nutrition and fitness delivered straight to your inbox.", freq: "WEEKLY" },
  { name: "Medicare & You", desc: "Sign up for our newsletter and receive tips for preventive care, medicare coverage, and more.", freq: "WEEKLY" },
  { name: "Parkinson’s Support", desc: "Sign up for our newsletter and receive tools, support, and clarity for your journey with Parkinson’s Disease.", freq: "WEEKLY" },
  { name: "Back Health", desc: "Discover expert-backed tips to support your entire back.", freq: "WEEKLY" },
  { name: "Skin Health", desc: "Get our best tips to keep your skin healthy all day, every day.", freq: "WEEKLY" },
  { name: "Prostate Health", desc: "Find out how to keep your prostate health in check.", freq: "WEEKLY" },
  { name: "Fitness Goals", desc: "Smart approaches to reach all your fitness goals.", freq: "WEEKLY" },
];

const NewslettersPage: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const toggleNewsletter = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    alert(`Subscribed ${email} to: ${selected.join(", ")}`);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Newsletters</h1>
        <p className="mb-8 text-lg">Give your inbox a healthy dose of well-being</p>
        <h2 className="text-2xl font-semibold mb-4">1. Select all the newsletters you’d like to receive</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {newsletters.map((n) => (
            <label key={n.name} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 cursor-pointer border border-gray-200 hover:border-blue-400 transition">
              <input
                type="checkbox"
                checked={selected.includes(n.name)}
                onChange={() => toggleNewsletter(n.name)}
                className="mt-1 accent-blue-600"
              />
              <div>
                <div className="font-semibold text-lg mb-1">{n.name}</div>
                <div className="text-gray-700 text-sm mb-1">{n.desc}</div>
                <div className="text-xs text-gray-500">{n.freq}</div>
              </div>
            </label>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">2. Sign up here</h2>
        <form className="flex flex-col sm:flex-row gap-2 mb-8" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            SUBSCRIBE
          </button>
        </form>
        <p className="text-xs text-gray-500 mb-8">Your <a href="/privacy-policy" className="underline">privacy</a> is important to us</p>
      </div>
    </div>
  );
};

export default NewslettersPage;
