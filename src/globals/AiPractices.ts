import type { GlobalConfig } from "payload";
import {
  CommonSection,
  ImageField,
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
      fields: [
        ...CommonSection,
        {
          name: "prototypes",
          label: "Prototype Images",
          type: "array",
          fields: [
            ImageField,
            {
              name: "redirectUrl",
              type: "text",
              required: true,
              admin: {
                description: "URL to navigate when image is clicked",
              },
            },
          ],
        },
      ],
    },
  ],
};
