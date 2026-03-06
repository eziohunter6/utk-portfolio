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

export const VideoField: Field = {
  name: "video",
  type: "upload",
  relationTo: "media",
  filterOptions: { mimeType: { contains: "video" } },
  admin: {
    description: "Select a video file",
  },
};

export const ImageField: Field = {
  name: "image",
  type: "upload",
  relationTo: "media",
  filterOptions: { mimeType: { contains: "image" } },
  admin: {
    description: "Select an image file",
  },
};

export const ImagesField: Field = {
  name: "images",
  type: "upload",
  hasMany: true,
  relationTo: "media",
  filterOptions: { mimeType: { contains: "image" } },
  admin: {
    description: "Select and order image files",
  },
  defaultValue: [],
};

export const IFrameField: Field = {
  name: "iframe",
  type: "text",
  required: true,
  defaultValue: "",
  admin: {
    description: "Iframe Embed code source",
  },
};

export const SectionWithIFrame: Field[] = [...CommonSection, IFrameField];

export const SectionWithImage: Field[] = [...CommonSection, ImageField];

export const SectionWithImages: Field[] = [...CommonSection, ImagesField];

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
