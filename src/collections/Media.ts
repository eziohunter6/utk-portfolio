import type { CollectionConfig } from "payload";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    description: "Images: max 5MB. Videos: max 50MB.",
  },
  upload: {
    formatOptions: { format: "webp" },
    imageSizes: [
      {
        name: "preview",
        width: 400,
        height: 300,
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

        const isVideo = mimeType.startsWith("video/");
        const maxSize = isVideo ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;
        const maxLabel = isVideo ? "50MB" : "5MB";

        if (filesize > maxSize) {
          throw new Error(
            `File size exceeds ${maxLabel} limit. Images: max 5MB. Videos: max 50MB.`,
          );
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
      type: "select",
      label: "Storage folder",
      options: [
        { label: "General", value: "" },
        { label: "Logos", value: "logos" },
        { label: "Works", value: "works" },
        { label: "Videos", value: "videos" },
        { label: "Images", value: "images" },
      ],
      defaultValue: "",
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
