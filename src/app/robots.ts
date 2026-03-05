import type { MetadataRoute } from "next";

const baseUrl = process.env.BASE_URL;

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = baseUrl
    ? new URL("/sitemap.xml", baseUrl).toString()
    : undefined;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: sitemapUrl,
  };
}
