import { lexicalEditor } from "@payloadcms/richtext-lexical";
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
      admin: {
        description:
          "e.g. buy-homepage, car-comparison - must match work page slug",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Extended Cases", value: "extended-cases" },
        { label: "Mini Cases", value: "mini-cases" },
      ],
      admin: {
        description: "Category of the work",
      },
    },
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor(),
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: { mimeType: { contains: "image" } },
    },
    {
      name: "link",
      type: "group",
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
