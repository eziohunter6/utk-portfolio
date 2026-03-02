import {
  defaultRichTextValue,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Field } from "payload";

export const CommonSection: Field[] = [
  {
    name: "title",
    type: "text",
    required: true,
    defaultValue: "",
  },
  {
    name: "content",
    type: "richText",
    required: true,
    editor: lexicalEditor(),
    defaultValue: defaultRichTextValue,
  },
];

export const SectionWithIFrame: Field[] = [
  ...CommonSection,
  {
    name: "iframe",
    type: "text",
    required: true,
    defaultValue: "",
    admin: {
      description: "Iframe Embed code source",
    },
  },
];

export const SectionWithImage: Field[] = [
  ...CommonSection,
  {
    name: "image",
    type: "upload",
    relationTo: "media",
    filterOptions: { mimeType: { contains: "image" } },
  },
];

export const SectionWithImages: Field[] = [
  ...CommonSection,
  {
    name: "images",
    type: "upload",
    hasMany: true,
    relationTo: "media",
    filterOptions: { mimeType: { contains: "image" } },
    defaultValue: [],
  },
];

export const MoreWorkSection: Field[] = [
  {
    name: "works",
    type: "relationship",
    relationTo: "works",
    hasMany: true,
    admin: {
      description: "Select and order work cards for the more work section",
    },
    defaultValue: [],
  },
];

export const VideosField: Field = {
  name: "videos",
  type: "upload",
  hasMany: true,
  relationTo: "media",
  filterOptions: { mimeType: { contains: "video" } },
  admin: {
    description: "Select and order video files",
  },
  defaultValue: [],
};
