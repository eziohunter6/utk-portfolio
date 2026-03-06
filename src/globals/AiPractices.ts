import type { GlobalConfig } from "payload";
import {
  CommonSection,
  SectionWithImage,
  SectionWithImages,
  VideoField,
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
      fields: [
        ...SectionWithImage,
        VideosField,
        {
          name: "demoVideo",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "video" } },
          admin: {
            description: "Select a demo video file",
          },
        },
      ],
    },
    {
      type: "group",
      name: "aiPrototyping",
      fields: SectionWithImages,
    },
  ],
};
