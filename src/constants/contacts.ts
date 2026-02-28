import type { TContact } from "@/lib/types";

export const CONTACTS: TContact[] = [
  {
    name: "utkarshraj***0@gmail.com",
    href: "mailto:utkarshraj***0@gmail.com",
    type: "copy",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/utkarsh-raj-0000000000/",
    type: "link",
  },
  {
    name: "Send coffee",
    href: "https://www.buymeacoffee.com/utkarshraj",
    type: "link",
  },
] as const;
