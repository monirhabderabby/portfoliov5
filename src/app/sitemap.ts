import { MetadataRoute } from "next";

export const contentType = "application/xml"; // 👈 ensures correct header

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.AUTH_URL || "https://www.monirhrabby.info"; // fallback if env not set

  const routes = ["/", "/about-me", "/projects", "/achievements", "/contact"];

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7, // homepage has highest priority
  }));

  return sitemapEntries;
}
