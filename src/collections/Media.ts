import type { CollectionConfig } from "payload";

const MAX_SIZE = 4.5 * 1024 * 1024; // 4.5MB

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    description: "max 4.5MB",
  },
  upload: {
    formatOptions: { format: "webp" },
    imageSizes: [
      {
        name: "preview",
        width: 400,
        position: "centre",
        formatOptions: { format: "webp" },
        admin: {
          disableGroupBy: true,
          disableListColumn: true,
          disableListFilter: true,
        },
      },
    ],
    adminThumbnail: ({
      doc,
    }: {
      doc: {
        mimeType?: string | null;
        url?: string | null;
        sizes?: { preview?: { url?: string | null } };
      };
    }) => {
      if (
        typeof doc?.mimeType === "string" &&
        doc.mimeType.startsWith("video/")
      ) {
        return doc?.url ?? null;
      }
      const hasPreview = doc?.sizes?.preview?.url != null;
      return hasPreview ? "preview" : (doc?.url ?? null);
    },
    mimeTypes: ["image/*", "video/*"],
    focalPoint: true,
  },
  hooks: {
    beforeValidate: [
      ({ data, operation }) => {
        if (operation !== "create" && operation !== "update") return;
        const filesize = data?.filesize as number | undefined;
        const mimeType = data?.mimeType as string | undefined;
        if (filesize == null || mimeType == null) return;

        const maxLabel = "4.5MB";

        if (filesize > MAX_SIZE) {
          throw new Error(`File size exceeds ${maxLabel} limit.`);
        }
      },
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "prefix",
      type: "text",
      label: "Storage folder",
      defaultValue: "/media",
      admin: {
        hidden: false,
        readOnly: false,
        description:
          'Use "Logos" for company logos (e.g. Home Worked At section). Stores in a separate blob folder.',
      },
    },
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
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      filterOptions: { mimeType: { contains: "image" } },
      admin: {
        description:
          "Poster/thumbnail for videos. Upload an image to use as preview. Required for videos.",
      },
      validate: (
        value: unknown,
        {
          data,
          siblingData,
        }: {
          data?: { mimeType?: string };
          siblingData?: { mimeType?: string };
        },
      ) => {
        const mimeType = data?.mimeType ?? siblingData?.mimeType;
        const isVideo =
          typeof mimeType === "string" && mimeType.startsWith("video/");
        if (isVideo && !value) {
          return "Thumbnail is required for videos";
        }
        return true;
      },
    },
  ],
};
