import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { GlobalConfig } from "payload";

export const Contacts: GlobalConfig = {
  slug: "contacts",
  admin: {
    group: "Site",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: "contacts",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
        {
          name: "type",
          type: "select",
          required: true,
          options: [
            { label: "Copy", value: "copy" },
            { label: "Link", value: "link" },
          ],
        },
      ],
    },
  ],
};
