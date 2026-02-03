import { Link } from "react-router-dom";

const tools = [
  { title: "BMI Calculator", href: "/tools/bmi-calculator" },
  { title: "Pill Identifier", href: "/tools/pill-identifier" },
  { title: "Drug Interactions", href: "/tools/drug-interactions" },
  { title: "Symptom Checker", href: "/tools/symptom-checker" },
  { title: "Blood Pressure Log", href: "/tools/blood-pressure-log" },
  { title: "Glucose Tracker", href: "/tools/glucose-tracker" },
  { title: "Calorie Counter", href: "/tools/calorie-counter" },
  { title: "All Tools", href: "/tools" },
];

const featured = [
  { title: "Video Series", href: "/featured/video-series" },
  { title: "Pill Identifier", href: "/tools/pill-identifier" },
  { title: "FindCare", href: "/featured/findcare" },
  { title: "Drugs A-Z", href: "/featured/drugs-a-z" },
  { title: "Medicare Plans by State", href: "/featured/medicare-plans" },
];

const lessons = [
  { title: "Crohn’s and Ulcerative Colitis Essentials", href: "/lessons/colitis-essentials" },
  { title: "Diabetes Nutrition", href: "/lessons/diabetes-nutrition" },
  { title: "High Cholesterol", href: "/lessons/high-cholesterol" },
  { title: "Taming Inflammation in Psoriasis", href: "/lessons/psoriasis-inflammation" },
  { title: "Taming Inflammation in Psoriatic Arthritis", href: "/lessons/psoriatic-arthritis-inflammation" },
];

const newsletters = [
  { title: "Anxiety and Depression", href: "/newsletters/anxiety-depression" },
  { title: "Digestive Health", href: "/newsletters/digestive-health" },
  { title: "Heart Health", href: "/newsletters/heart-health" },
  { title: "Migraine", href: "/newsletters/migraine" },
  { title: "Nutrition Edition", href: "/newsletters/nutrition-edition" },
  { title: "Type 2 Diabetes", href: "/newsletters/type-2-diabetes" },
  { title: "Wellness Wire", href: "/newsletters/wellness-wire" },
];

const quizzes = [
  { title: "Find a Diet", href: "/quizzes/find-a-diet" },
  { title: "Find Healthy Snacks", href: "/quizzes/healthy-snacks" },
  { title: "Weight Management", href: "/quizzes/weight-management" },
  { title: "How Well Do You Sleep?", href: "/quizzes/sleep-quality" },
  { title: "Are You a Workaholic?", href: "/quizzes/workaholic" },
];

export default function ToolsDropdown() {
  return (
    <div className="bg-white p-8 shadow-xl rounded-lg min-w-[900px] w-full">
      <div className="grid grid-cols-4 gap-8">
        {/* Featured */}
        <div>
          <div className="font-bold text-xl mb-2 border-b pb-1">Featured</div>
          {featured.map((item) => (
            <Link key={item.title} to={item.href} className="block py-1 text-blue-700 hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
        {/* Lessons */}
        <div>
          <div className="flex items-center justify-between mb-2 border-b pb-1">
            <span className="font-bold text-xl">Lessons</span>
            <Link to="/lessons" className="font-bold text-lg hover:underline text-blue-600">ALL <span>→</span></Link>
          </div>
          {lessons.map((item) => (
            <Link key={item.title} to={item.href} className="block py-1 text-blue-700 hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
        {/* Newsletters */}
        <div>
          <div className="flex items-center justify-between mb-2 border-b pb-1">
            <span className="font-bold text-xl">Newsletters</span>
            <Link to="/newsletters" className="font-bold text-lg hover:underline text-blue-600">ALL <span>→</span></Link>
          </div>
          {newsletters.map((item) => (
            <Link key={item.title} to={item.href} className="block py-1 text-blue-700 hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
        {/* Lifestyle Quizzes */}
        <div>
          <div className="font-bold text-xl mb-2 border-b pb-1">Lifestyle Quizzes</div>
          {quizzes.map((item) => (
            <Link key={item.title} to={item.href} className="block py-1 text-blue-700 hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
