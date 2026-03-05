import type { MetadataRoute } from "next";

const baseUrl = process.env.BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!baseUrl) {
    return [];
  }

  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: new URL("/", baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/work/buy-home", baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/work/car-comparison", baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/ai-practices", baseUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return routes;
}
