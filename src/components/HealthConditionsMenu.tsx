import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navigationCategories } from "@/data/categories";

export default function HealthConditionsMenu() {
  const healthCategory = navigationCategories.find((c) => c.id === "health-conditions");
  const conditions = healthCategory?.extraLinks || [];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Health Conditions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex gap-8 bg-gray-900 text-white p-8 shadow-xl rounded-lg min-w-[900px] max-h-[500px] overflow-y-auto">
              <div className="flex-1 grid grid-cols-2 gap-x-8">
                {conditions.map((l) => (
                  <NavigationMenuLink asChild key={l.title}>
                    <Link to={l.href} className="block py-1 hover:underline hover:text-primary">
                      {l.title}
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
