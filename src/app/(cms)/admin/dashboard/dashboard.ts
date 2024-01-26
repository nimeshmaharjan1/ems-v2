import { SidebarNavItem } from "@/lib/types";

export interface DashboardConfig {
  CMSSidebar: SidebarNavItem[];
}

export const dashboardConfig: DashboardConfig = {
  CMSSidebar: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "LayoutGrid",
      items: [],
    },
    {
      title: "Products",
      href: "/stores",
      icon: "Box",
      items: [],
    },
    {
      title: "Orders",
      href: "/purchases",
      icon: "Truck",
      items: [],
    },
    {
      title: "Category",
      href: "/billing",
      icon: "Cable",
      items: [],
    },
    {
      title: "Company",
      href: "/purchases",
      icon: "Building2",
      items: [],
    },
    {
      title: "Complaints",
      href: "/purchases",
      icon: "Bug",
      items: [],
    },
    {
      title: "Users",
      href: "/purchases",
      icon: "Users",
      items: [],
    },
    {
      title: "Settings",
      href: "/purchases",
      icon: "Settings",
      items: [],
    },
  ],
};
