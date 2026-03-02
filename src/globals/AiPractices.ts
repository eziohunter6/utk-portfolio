import type { GlobalConfig } from "payload";
import {
  CommonSection,
  SectionWithImage,
  SectionWithImages,
  VideosField,
} from "./CommonField";

export const AiPractices: GlobalConfig = {
  slug: "ai-practices",
  admin: {
    group: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "group",
      name: "hero",
      fields: CommonSection,
    },
    {
      type: "group",
      name: "aiContent",
      fields: SectionWithImages,
    },
    {
      type: "group",
      name: "aiVideo",
      fields: [...SectionWithImage, VideosField],
    },
    {
      type: "group",
      name: "aiPrototyping",
      fields: SectionWithImages,
    },
  ],
};
