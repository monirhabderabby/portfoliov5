import { MetadataRoute } from "next";

export const contentType = "text/plain"; // 👈 robots.txt should be plain text

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.AUTH_URL || "https://www.monirhrabby.info";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about-me", "/projects", "/achievements", "/contact"],
        disallow: ["/chat"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
