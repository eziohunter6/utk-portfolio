import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Media } from "@/payload-types";
import type { TMedia } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMediaURL = (
  media: (number | null) | Media | undefined,
): TMedia | null => {
  if (!media || typeof media === "number") return null;

  return {
    alt: media.alt ?? "",
    src: media.url ?? "",
    thumbnail: getMediaURL(media.thumbnail),
    type: media.mimeType?.startsWith("image/") ? "image" : "video",
  };
};

const isPopulated = <T extends object>(
  value: T | number | null | undefined,
): value is T =>
  value != null && typeof value === "object" && !Array.isArray(value);

export const filterPopulated = <T extends object>(
  arr: (T | number)[] | null | undefined,
): T[] => (arr ?? []).filter((item): item is T => isPopulated(item));
