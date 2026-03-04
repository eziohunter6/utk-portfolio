import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Media } from "@/payload-types";
import { getBase64 } from "./getBase64";
import type { TMedia } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMediaURL = async (
  media: (number | null) | Media | undefined,
): Promise<TMedia | null> => {
  if (!media || typeof media === "number") return null;

  return {
    alt: media.alt ?? "",
    src: media.url ?? "",
    thumbnail: media.thumbnail ? await getMediaURL(media.thumbnail) : null,
    type: media.mimeType?.startsWith("image/") ? "image" : "video",
    base64Preview: media.sizes?.preview?.url
      ? await getBase64(media.sizes?.preview?.url)
      : undefined,
  };
};

const isPopulated = <T extends object>(
  value: T | number | null | undefined,
): value is T =>
  value != null && typeof value === "object" && !Array.isArray(value);

export const filterPopulated = <T extends object>(
  arr: (T | number)[] | null | undefined,
): T[] => (arr ?? []).filter((item): item is T => isPopulated(item));
