import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { buildPublicUrlInventory } from "@/lib/seo/publicUrlInventory";

export default function sitemap(): MetadataRoute.Sitemap {
  const inventory = buildPublicUrlInventory(SITE_URL);
  const lastModified = new Date();

  return inventory.entries.map((entry) => ({
    url: entry.path === "/" ? `${inventory.siteUrl}/` : `${inventory.siteUrl}${entry.path}`,
    lastModified,
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}
