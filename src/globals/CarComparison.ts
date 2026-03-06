import type { Field, GlobalConfig } from "payload";
import {
  CommonSection,
  ImageField,
  MoreWorkSection,
  SectionWithIFrame,
  SectionWithImage,
  SectionWithImages,
  VideoField,
} from "./CommonField";

export const CarComparison: GlobalConfig = {
  slug: "car-comparison",
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
      name: "opportunity",
      fields: SectionWithIFrame,
    },
    {
      type: "group",
      name: "problem",
      fields: [...SectionWithImage, VideoField],
    },
    {
      type: "group",
      name: "hypothesis",
      fields: CommonSection,
    },
    {
      type: "group",
      name: "exploration",
      fields: SectionWithIFrame,
    },
    {
      type: "group",
      name: "floorTesting",
      fields: [
        ...SectionWithImage,
        {
          name: "redirectImage",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
          admin: {
            description: "Select an image file for the redirect button",
          },
        },
      ],
    },
    {
      type: "group",
      name: "finalDesigns",
      fields: SectionWithImages,
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
