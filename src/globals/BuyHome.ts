import type { GlobalConfig } from "payload";
import {
  CommonSection,
  ImageField,
  MoreWorkSection,
  SectionWithIFrame,
  SectionWithImage,
  SectionWithImages,
} from "./CommonField";

export const BuyHome: GlobalConfig = {
  slug: "buy-home",
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
      defaultValue: {},
      fields: CommonSection,
    },
    {
      type: "group",
      name: "process",
      defaultValue: {},
      fields: [...SectionWithIFrame, ImageField],
    },
    {
      type: "group",
      name: "analysis",
      defaultValue: {},
      fields: SectionWithIFrame,
    },
    {
      type: "group",
      name: "strategy",
      defaultValue: {},
      fields: SectionWithIFrame,
    },
    {
      type: "group",
      name: "exploration",
      defaultValue: {},
      fields: SectionWithImage,
    },
    {
      type: "group",
      name: "finalDesigns",
      defaultValue: {},
      fields: SectionWithImages,
    },
    {
      type: "group",
      name: "outcome",
      defaultValue: {},
      fields: CommonSection,
    },
    {
      type: "group",
      name: "reflections",
      defaultValue: {},
      fields: CommonSection,
    },
    {
      type: "group",
      name: "moreWork",
      defaultValue: {},
      fields: MoreWorkSection,
    },
  ],
};
