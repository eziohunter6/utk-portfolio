import type Link from "next/link";
import type { ComponentProps } from "react";

export type TNavLink = {
  title: string;
  href: string;
};

export type TContact = {
  name: string;
  href: string;
  type: "copy" | "link";
};

export type TWork = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: ComponentProps<typeof Link>;
};

export type TWorkedAt = {
  name: string;
  icon: string;
  link: string;
};
