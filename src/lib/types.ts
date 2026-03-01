import type { Contact, Navlink, Work } from "@/payload-types";

export type TNavLink = NonNullable<Navlink["navLinks"]>[number];

export type TContact = NonNullable<Contact["contacts"]>[number];

export type TWork = Work;
