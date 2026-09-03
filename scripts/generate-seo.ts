#!/usr/bin/env npx tsx
/**
 * Prints the public URL inventory used by app/sitemap.ts (dynamic sitemap).
 * Run: npm run seo:generate
 */
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { SITE_URL } from "../lib/constants";

function main() {
  const inventory = buildPublicUrlInventory(SITE_URL);

  console.log(`Canonical host: ${inventory.siteUrl}`);
  console.log(`Indexable URLs: ${inventory.entries.length}`);
  console.log("Sitemap is generated at build/runtime by app/sitemap.ts");
  console.log("Robots is generated at build/runtime by app/robots.ts");
}

main();
