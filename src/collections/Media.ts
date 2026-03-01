import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
    ],
    adminThumbnail: ({
      doc,
    }: {
      doc: { mimeType?: string | null; url?: string | null };
    }) => {
      if (
        typeof doc?.mimeType === "string" &&
        doc.mimeType.startsWith("video/")
      ) {
        return doc?.url ?? null;
      }
      return "thumbnail";
    },
    mimeTypes: ["image/*", "video/*"],
    focalPoint: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description:
          "Required for images (accessibility). For videos, use for accessibility / fallback text.",
      },
    },
    {
      name: "caption",
      type: "textarea",
      required: false,
    },
  ],
};
