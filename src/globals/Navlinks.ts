import type { GlobalConfig } from "payload";

export const Navlinks: GlobalConfig = {
  slug: "navlinks",
  admin: {
    group: "Site",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navLinks",
      type: "array",
      label: "Nav Links",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
          admin: {
            description: "e.g. /#work, /ai-practices",
          },
        },
      ],
    },
  ],
};
