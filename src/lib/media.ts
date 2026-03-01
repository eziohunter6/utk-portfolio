import type { Media as MediaType } from "@/payload-types";

export const getMediaUrl = (
  media: number | MediaType | null | undefined,
): string | null => {
  if (!media) return null;
  if (typeof media === "number") return null;
  return media.url ?? null;
};
