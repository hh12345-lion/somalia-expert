import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { ROBOTS_DISALLOW_PATHS } from "@/lib/seo/publicUrlInventory";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...ROBOTS_DISALLOW_PATHS],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
