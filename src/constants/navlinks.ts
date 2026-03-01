import type { TNavLink } from "@/lib/types";

export const NAVLINKS: TNavLink[] = [
  {
    title: "Work",
    href: "/#work",
  },
  {
    title: "AI Practices",
    href: "/ai-practices",
  },
  {
    title: "Info",
    href: "/#info",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
] as const;
