import type { Contact, Navlink } from "@/payload-types";

export type TNavLink = NonNullable<Navlink["navLinks"]>[number];

export type TContact = NonNullable<Contact["contacts"]>[number];

export type TWork = {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: {
    href: string;
    target?: string;
    rel?: string;
  };
};

export type TWorkedAt = {
  name: string;
  icon: string;
  link: string;
};
