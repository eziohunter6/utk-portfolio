import {
  defaultRichTextValue,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
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
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Utkarsh Raj",
        },
        {
          name: "subtitle",
          type: "text",
          required: true,
          defaultValue: "Senior Product Designer",
        },
        {
          name: "content",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
          defaultValue: defaultRichTextValue,
        },
        {
          name: "workedAt",
          type: "upload",
          relationTo: "media",
          hasMany: true,
          label: "Worked At",
          required: true,
          defaultValue: [],
          filterOptions: {
            mimeType: { contains: "image" },
          },
        },
      ],
    },
    {
      type: "group",
      name: "works",
      defaultValue: {},
      fields: [
        {
          name: "extendedCases",
          type: "relationship",
          relationTo: "works",
          hasMany: true,
          defaultValue: [],
        },
        {
          name: "miniCases",
          type: "relationship",
          relationTo: "works",
          hasMany: true,
          defaultValue: [],
        },
      ],
    },
    {
      type: "group",
      name: "info",
      defaultValue: {},
      fields: [
        {
          name: "leftContent",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
          defaultValue: defaultRichTextValue,
        },
        {
          name: "rightContent",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
          defaultValue: defaultRichTextValue,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          filterOptions: { mimeType: { contains: "image" } },
        },
      ],
    },
  ],
};
