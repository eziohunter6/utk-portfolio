import { lexicalEditor } from "@payloadcms/richtext-lexical";
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
          defaultValue: "Utkarsh Raj",
        },
        {
          name: "heroSubtitle",
          type: "text",
          required: true,
          defaultValue: "Senior Product Designer",
        },
      ],
    },
    {
      type: "collapsible",
      label: "About",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "aboutContent",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
        {
          name: "workedAt",
          type: "array",
          label: "Worked At",
          fields: [
            {
              name: "name",
              type: "text",
              required: true,
            },
            {
              name: "link",
              type: "text",
              required: true,
              admin: {
                description: "Company website URL",
              },
            },
            {
              name: "logo",
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
      label: "Works",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "featuredWorks",
          type: "array",
          label: "Featured Works",
          admin: {
            description: "Select and order work cards for the homepage",
          },
          fields: [
            {
              name: "work",
              type: "relationship",
              relationTo: "works",
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Info",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "infoContent",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
        {
          name: "infoImage",
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
};
