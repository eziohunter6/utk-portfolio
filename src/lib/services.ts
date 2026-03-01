import { getPayload } from "@/lib/payload";

export const getNavlinks = async () => {
  const payload = await getPayload();

  const { navLinks } = await payload.findGlobal({ slug: "navlinks" });

  console.log(navLinks);

  return navLinks ?? [];
};

export const getContacts = async () => {
  const payload = await getPayload();

  const { contacts } = await payload.findGlobal({ slug: "contacts" });

  return contacts ?? [];
};
