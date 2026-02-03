import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const conditions = [
  ["Breast Cancer", "/breast-cancer"],
  ["Cancer Care", "/cancer-care"],
  ["Alzheimer's Disease", "/conditions/alzheimers-disease"],
  ["COPD", "/copd"],
  ["Digestive Health", "/digestive-health"],
  ["Eye Health", "/eye-health"],
  ["Heart Health", "/heart-cardiovascular"],
  ["Migraine", "/migraine"],
  ["Psoriasis", "/psoriasis"],
  ["Sleep Health", "/sleep"],
  // ...add more as needed
];

const spotlight = [
  {
    title: "Controlling Ulcerative Colitis",
    icon: "/icons/colitis.svg", // Replace with your icon path
    link: "#",
  },
  {
    title: "Navigating Life with Bipolar Disorder",
    icon: "/icons/bipolar.svg",
    link: "#",
  },
  {
    title: "Mastering Geographic Atrophy",
    icon: "/icons/atrophy.svg",
    link: "#",
  },
  {
    title: "Managing Type 2 Diabetes",
    icon: "/icons/diabetes.svg",
    link: "#",
  },
];

export default function HealthConditionsMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Health Conditions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex gap-8 bg-gray-900 text-white p-8 shadow-xl rounded-lg min-w-[700px]">
              {/* Conditions List */}
              <div className="flex-1 grid grid-cols-2 gap-x-8">
                {conditions.map(([name, url]) => (
                  <NavigationMenuLink asChild key={name}>
                    <Link to={url} className="block py-1 hover:underline hover:text-primary">
                      {name}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
              {/* Spotlight */}
              <div className="min-w-[220px] border-l border-gray-700 pl-6">
                <div className="font-semibold mb-2">Condition Spotlight</div>
                {spotlight.map((item) => (
                  <NavigationMenuLink asChild key={item.title}>
                    <Link to={item.link} className="flex items-center gap-3 py-2 hover:underline hover:text-primary">
                      <img src={item.icon} alt="" className="w-8 h-8" />
                      <span>{item.title}</span>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
