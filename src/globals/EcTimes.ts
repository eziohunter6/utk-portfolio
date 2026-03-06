import type { GlobalConfig } from "payload";
import { CommonSection, ImagesField } from "./CommonField";

export const EcTimes: GlobalConfig = {
  slug: "ec-times",
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
          defaultValue: "",
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
        ImagesField,
      ],
    },
    {
      type: "group",
      name: "problem",
      defaultValue: {},
      fields: CommonSection,
    },
    {
      type: "group",
      name: "challenge",
      defaultValue: {},
      fields: CommonSection,
    },
    {
      type: "group",
      name: "impact",
      defaultValue: {},
      fields: [
        ...CommonSection,
        {
          name: "redirectLink",
          type: "text",
          required: true,
          defaultValue: "",
        },
      ],
    },
  ],
};
