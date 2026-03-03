import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import WellnessDropdown from "@/components/WellnessDropdown";
import Dropdown from "@/components/Dropdown";
import FeaturedDropdown from "@/components/FeaturedDropdown";
import ConnectDropdown from "@/components/ConnectDropdown";
import { navigationCategories } from "@/data/categories";

export default function TopDropdownRow() {
  return (
    <div id="top-dropdown-row" className="flex gap-4 mb-6 justify-start items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Wellness</NavigationMenuTrigger>
            <NavigationMenuContent>
              <WellnessDropdown />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <div>
            <Dropdown title="Featured">
              <FeaturedDropdown />
            </Dropdown>
          </div>

          <div>
            <Dropdown
              title="Connect"
              items={[
                { label: "Breast Cancer", link: "/breast-cancer" },
                { label: "Multiple Sclerosis", link: "/conditions/multiple-sclerosis" },
                { label: "Depression", link: "/conditions/mental-health" },
              ]}
            />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
