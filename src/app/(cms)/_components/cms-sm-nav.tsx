/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type SidebarNavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Flower, Menu, icons } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const CMSLayoutSidebarSm: React.FC<{
  items: SidebarNavItem[];
}> = ({ items }) => {
  const segment = useSelectedLayoutSegment();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex lg:hidden" variant="outline" size="icon">
          <Menu className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-3 mt-1 block w-56 lg:hidden">
        <DropdownMenuLabel className="flex items-center text-base font-bold">
          <Flower className="mr-2 size-5"></Flower>
          <p>Eeshan Mahadev E.</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />{" "}
        {items.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <Link href={item.href ?? ""} key={item.title} passHref>
              <DropdownMenuItem
                className={cn(
                  "m-2 cursor-pointer",
                  item?.href?.includes(String(segment))
                    ? "bg-accent text-accent-foreground"
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
                key={item.title}
              >
                <Icon className="mr-2 size-4" />
                <span>{item.title}</span>
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CMSLayoutSidebarSm;
