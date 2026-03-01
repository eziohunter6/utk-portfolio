import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { GlobalConfig } from "payload";

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
      type: "collapsible",
      label: "Hero",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "heroTitle",
          type: "text",
          required: true,
          defaultValue: "AI Practices",
        },
        {
          name: "heroContent",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
      ],
    },
    {
      type: "collapsible",
      label: "AI + Content",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "contentSectionTitle",
          type: "text",
          required: true,
          defaultValue: "AI + Content",
        },
        {
          name: "contentSectionBody",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
        {
          name: "contentSectionImages",
          type: "array",
          label: "Images",
          maxRows: 4,
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: {
                mimeType: { contains: "image" },
              },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "AI + Video",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "videoSectionTitle",
          type: "text",
          required: true,
          defaultValue: "AI + Video",
        },
        {
          name: "videoSectionBody",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
        {
          name: "videos",
          type: "array",
          label: "Videos",
          fields: [
            {
              name: "src",
              type: "text",
              required: true,
              admin: {
                description: "Video URL or path e.g. /Thar.mp4",
              },
            },
            {
              name: "alt",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "dashboardImage",
          type: "upload",
          relationTo: "media",
          required: true,
          filterOptions: {
            mimeType: { contains: "image" },
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "AI + Prototyping",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "prototypeSectionTitle",
          type: "text",
          required: true,
          defaultValue: "AI + Prototyping",
        },
        {
          name: "prototypeSectionBody",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
        {
          name: "prototypeSectionImages",
          type: "array",
          label: "Images",
          maxRows: 2,
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: {
                mimeType: { contains: "image" },
              },
            },
          ],
        },
      ],
    },
  ],
};
