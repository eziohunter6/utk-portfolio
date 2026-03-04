import type { Contact, Navlink, Work } from "@/payload-types";

export type TNavLink = NonNullable<Navlink["navLinks"]>[number];

export type TContact = NonNullable<Contact["contacts"]>[number];

export type TWork = Work;

export type TWorkedAt = {
  name: string;
  icon: string;
  link: string;
};

export type TMedia = {
  alt: string;
  src: string;
  thumbnail: TMedia | null;
  type: "image" | "video";
  base64Preview: string | undefined;
};
