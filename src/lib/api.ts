import { getPayload } from "./payload";

export const getHomePage = async () => {
  const payload = await getPayload();
  const home = await payload.findGlobal({
    slug: "home",
    depth: 2,
    overrideAccess: true,
  });
  return home;
};

/** Normalizes home.works (array of { work: relationship }) to flat work documents */
export const getHomePageWorks = (
  home: Awaited<ReturnType<typeof getHomePage>>,
) => {
  const items = home?.works ?? [];
  return items
    .map((item) =>
      item?.work && typeof item.work === "object" ? item.work : null,
    )
    .filter(Boolean) as NonNullable<(typeof items)[0]["work"]>[];
};

export const getNavlinks = async () => {
  const payload = await getPayload();
  const navlinks = await payload.findGlobal({
    slug: "navlinks",
    depth: 1,
    overrideAccess: true,
  });
  return navlinks;
};

export const getContacts = async () => {
  const payload = await getPayload();
  const contacts = await payload.findGlobal({
    slug: "contacts",
    depth: 1,
    overrideAccess: true,
  });
  return contacts;
};

export const getAiPracticesPage = async () => {
  const payload = await getPayload();
  const aiPractices = await payload.findGlobal({
    slug: "ai-practices",
    depth: 2,
    overrideAccess: true,
  });
  return aiPractices;
};

const KNOWN_WORK_SLUGS = ["buy-homepage", "car-comparison"] as const;

export const getWorkSlugs = async () => {
  return KNOWN_WORK_SLUGS.map((slug) => ({ slug }));
};

export const getWorkPage = async (slug: string) => {
  const payload = await getPayload();
  if (slug === "buy-homepage") {
    const data = await payload.findGlobal({
      slug: "buy-homepage",
      depth: 2,
      overrideAccess: true,
    });
    return data;
  }
  if (slug === "car-comparison") {
    const data = await payload.findGlobal({
      slug: "car-comparison",
      depth: 2,
      overrideAccess: true,
    });
    return data;
  }
  return null;
};
