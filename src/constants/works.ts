import type { TWork, TWorkedAt } from "@/lib/types";

export const WORKS: TWork[] = [
  {
    title: "Buy Homepage - Transactional Users",
    description: "...",
    image: "/images/work/buy-home.jpg",
    link: {
      href: "/work/buy-homepage",
    },
  },
  {
    title: "Car Comparison - Feature",
    description: "...",
    image: "/images/work/car-comparison.jpg",
    link: {
      href: "/work/car-comparison",
    },
  },
  {
    title: "Feature Discoverability - ET Prime",
    description: "...",
    image: "/images/work/et-prime.jpg",
    link: {
      href: "https://www.etprime.in",

      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  {
    title: "Payment Experience Revamp",
    description: "...",
    image: "/images/work/et-prime.jpg",
    link: {
      href: "https://www.cleartrip.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
] as const;

export const WORKED_AT: TWorkedAt[] = [
  {
    name: "Spinny",
    icon: "spinny",
    link: "https://www.spinny.com",
  },
  {
    name: "The Economic Times",
    icon: "et",
    link: "https://economictimes.indiatimes.com",
  },
  {
    name: "ClearTrip",
    icon: "cleartrip",
    link: "https://www.cleartrip.com",
  },
  {
    name: "Flipkart",
    icon: "flipkart",
    link: "https://www.flipkart.com",
  },
  {
    name: "Deloitte",
    icon: "deloitte",
    link: "https://www.deloitte.com",
  },
  {
    name: "Zostel",
    icon: "zostel",
    link: "https://www.zostel.com",
  },
] as const;
