import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.AUTH_URL || "https://www.monirhrabby.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/chat"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
