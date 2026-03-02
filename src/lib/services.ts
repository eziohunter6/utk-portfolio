import { defaultRichTextValue } from "@payloadcms/richtext-lexical";
import { getPayload } from "@/lib/payload";
import type { Media, Work } from "@/payload-types";
import { filterPopulated } from "./utils";

export const getNavlinks = async () => {
  const payload = await getPayload();

  const { navLinks } = await payload.findGlobal({ slug: "navlinks" });

  console.log(navLinks);

  return navLinks ?? [];
};

export const getContacts = async () => {
  const payload = await getPayload();

  const { contacts, content } = await payload.findGlobal({ slug: "contacts" });

  return { contacts: contacts ?? [], content: content ?? defaultRichTextValue };
};

export const getHomeContent = async () => {
  const payload = await getPayload();

  const {
    heroTitle,
    heroSubtitle,
    heroContent,
    workedAt,
    featuredWorks,
    leftInfoContent,
    rightInfoContent,
    infoImage,
  } = await payload.findGlobal({ slug: "home", depth: 1 });

  const works = filterPopulated<Work>(featuredWorks);
  const workedAtMedia = filterPopulated<Media>(workedAt);

  return {
    hero: {
      title: heroTitle ?? "",
      subtitle: heroSubtitle ?? "",
      content: heroContent ?? defaultRichTextValue,
      workedAt: workedAtMedia,
    },
    works: {
      extendedCases: works.filter((work) => work.type === "extended-cases"),
      miniCases: works.filter((work) => work.type === "mini-cases"),
    },
    info: {
      leftContent: leftInfoContent ?? defaultRichTextValue,
      rightContent: rightInfoContent ?? defaultRichTextValue,
      image: infoImage,
    },
  };
};

export const getBuyHomeContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "buy-homepage",
    depth: 1,
  });

  return result;
};

export const getCarComparisonContent = async () => {
  const payload = await getPayload();

  const result = await payload.findGlobal({
    slug: "car-comparison",
    depth: 1,
  });

  return result;
};
