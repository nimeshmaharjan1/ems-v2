/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { type SidebarNavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function CMSSidebar({ items }: DashboardNavProps) {
  const segment = useSelectedLayoutSegment();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = icons[item.icon as keyof typeof icons];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  item.href.includes(String(segment))
                    ? "bg-accent"
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 size-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
