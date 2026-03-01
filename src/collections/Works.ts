import type { CollectionConfig } from "payload";

export const Works: CollectionConfig = {
  slug: "works",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
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
      name: "description",
      type: "textarea",
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
        {
          name: "rel",
          type: "text",
          admin: {
            description: "e.g. noopener noreferrer for external links",
          },
        },
      ],
    },
  ],
};
