import type { Metadata } from "next";
import type { Media } from "@/payload-types";

type PayloadMeta = {
  title?: string | null;
  description?: string | null;
  image?: (number | null) | Media;
};

const baseUrl = process.env.BASE_URL;

const DEFAULT = {
  title: "Utkarsh Raj | Senior Product Designer",
  description:
    "Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.",
};

type BuildMetadataFromPayloadArgs = {
  meta?: PayloadMeta | null;
  urlPath?: string;
};

export const buildMetadataFromPayload = ({
  meta,
  urlPath,
}: BuildMetadataFromPayloadArgs): Metadata => {
  const title = meta?.title ?? DEFAULT.title;
  const description = meta?.description ?? DEFAULT.description;

  const image = meta?.image;
  let ogImageUrl: string | undefined;

  if (image && typeof image === "object" && "url" in image) {
    const typedImage = image as Media;

    if (typedImage.url) {
      ogImageUrl = typedImage.url;
    } else if (typedImage.sizes?.preview?.url) {
      ogImageUrl = typedImage.sizes.preview.url ?? undefined;
    }
  }

  const fullUrl =
    baseUrl && urlPath ? new URL(urlPath, baseUrl).toString() : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    alternates: {
      canonical: fullUrl,
    },
    metadataBase: baseUrl ? new URL(baseUrl) : undefined,
    robots: {
      index: true,
      follow: true,
    },
  };
};
