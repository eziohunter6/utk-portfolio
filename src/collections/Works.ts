import {
  defaultRichTextValue,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Works: CollectionConfig = {
  slug: "works",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "slug"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      defaultValue: "",
      admin: {
        description:
          "e.g. buy-home, car-comparison - must match work page slug",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "",
    },
    {
      name: "description",
      type: "richText",
      defaultValue: defaultRichTextValue,
      editor: lexicalEditor(),
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      defaultValue: [],
      filterOptions: { mimeType: { contains: "image" } },
    },
    {
      name: "link",
      type: "group",
      defaultValue: [],
      fields: [
        {
          name: "href",
          type: "text",
          required: true,
        },
        {
          name: "target",
          type: "select",
          options: [
            { label: "Same window", value: "_self" },
            { label: "New tab", value: "_blank" },
          ],
          defaultValue: "_self",
        },
      ],
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      defaultValue: [],
      admin: {
        description: "Tags to show under the image",
      },
      fields: [
        {
          name: "keyword",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
