import type { GlobalConfig } from "payload";
import {
  CommonSection,
  MoreWorkSection,
  SectionWithIFrame,
  SectionWithImage,
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
      fields: CommonSection,
    },
    {
      type: "group",
      name: "process",
      fields: SectionWithIFrame,
    },
    {
      type: "group",
      name: "analysis",
      fields: SectionWithIFrame,
    },
    {
      type: "group",
      name: "strategy",
      fields: SectionWithIFrame,
    },
    {
      type: "group",
      name: "exploration",
      fields: SectionWithImage,
    },
    {
      type: "group",
      name: "finalDesigns",
      fields: SectionWithImage,
    },
    {
      type: "group",
      name: "outcome",
      fields: CommonSection,
    },
    {
      type: "group",
      name: "reflections",
      fields: CommonSection,
    },
    {
      type: "group",
      name: "moreWork",
      fields: MoreWorkSection,
    },
  ],
};
