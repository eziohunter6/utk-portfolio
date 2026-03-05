import { getPayload } from "@/lib/payload";

export const getNavlinks = async () => {
  const payload = await getPayload();

  const { navLinks } = await payload.findGlobal({ slug: "navlinks" });

  return navLinks;
};

export const getContacts = async () => {
  const payload = await getPayload();

  const { contacts, content } = await payload.findGlobal({ slug: "contacts" });

  return { contacts, content };
};

export const getHomeContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "home",
    depth: 2,
  });

  return result;
};

export const getBuyHomeContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "buy-home",
    depth: 2,
  });

  return result;
};

export const getCarComparisonContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "car-comparison",
    depth: 2,
  });

  return result;
};

export const getAiPracticesContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "ai-practices",
    depth: 2,
  });

  return result;
};

export const getEcTimesContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "car-comparison",
    depth: 2,
  });

  return result;
};

export const getClearTripContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "car-comparison",
    depth: 2,
  });

  return result;
};
