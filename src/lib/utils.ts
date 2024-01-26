import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "EMS",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/nimeshmaharjan1",
  },
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: "/",
          external: true,
        },
        {
          title: "GitHub",
          href: "/",
          external: true,
        },
        {
          title: "Discord",
          href: "/",
          external: true,
        },
        {
          title: "cal.com",
          href: "/",
          external: true,
        },
      ],
    },
    {
      title: "Lofi",
      items: [
        {
          title: "beats to study to",
          href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: true,
        },
        {
          title: "beats to chill to",
          href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: true,
        },
        {
          title: "a fresh start",
          href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: true,
        },
        {
          title: "coffee to go",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: true,
        },
      ],
    },
  ],
};
export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files);
  if (!isArray) return false;
  return files.every((file) => file instanceof File);
}
export function formatBytes(
  bytes: number,
  decimals = 0,
  sizeType: "accurate" | "normal" = "normal",
) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`;
}
