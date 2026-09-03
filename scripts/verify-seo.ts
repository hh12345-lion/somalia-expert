#!/usr/bin/env npx tsx
/**
 * Verifies SEO architecture: URL inventory, slug redirects, internal linking matrix.
 * Sitemap and robots are served dynamically from app/sitemap.ts and app/robots.ts.
 * Run: npm run seo:verify
 */
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { SEO_SLUG_REDIRECTS } from "../lib/seo/slug-redirects";
import { SITE_URL } from "../lib/constants";
import { asylumProfiles } from "../data/asylum-profiles";
import {
  getProfileRelatedLinks,
  getGuideRelatedLinks,
  getRegionRelatedLinks,
  getCaseTypeRelatedLinks,
} from "../data/related-links";

/** Appendix D minimum href requirements per profile slug */
const PROFILE_MATRIX: Record<string, string[]> = {
  "clan-minority-groups": [
    "/moj-country-guidance",
    "/case-types/clan-minority-asylum",
    "/guides/clan-structure-somalia-guide",
    "/regions/mogadishu-return",
  ],
  "al-shabaab-targeting": [
    "/cpin-country-guidance",
    "/case-types/article-15c-south-central",
    "/guides/al-shabaab-asylum-guide",
    "/regions/south-central-somalia",
  ],
  "fgm-gender-based-violence": ["/case-types/fgm-somalia-asylum", "/guides/fgm-somalia-guide"],
  "failed-asylum-seekers-return": [
    "/moj-country-guidance",
    "/case-types/deportation-removal-somalia",
    "/regions/mogadishu-return",
  ],
  "diaspora-without-clan-support": ["/guides/moj-framework-guide", "/regions/mogadishu-return"],
  "former-government-officials": ["/cpin-country-guidance", "/guides/al-shabaab-asylum-guide", "/regions/mogadishu-return"],
  "women-discriminatory-practices": [
    "/asylum-profiles/fgm-gender-based-violence",
    "/guides/fgm-somalia-guide",
    "/case-types/fgm-somalia-asylum",
  ],
  "forced-recruitment-conscription": [
    "/moj-country-guidance",
    "/case-types/article-15c-south-central",
    "/guides/al-shabaab-asylum-guide",
    "/regions/south-central-somalia",
  ],
};

const REQUIRED_BRIEF_REDIRECTS: Record<string, string> = {
  "/asylum-profiles/failed-asylum-seekers": "/asylum-profiles/failed-asylum-seekers-return",
  "/asylum-profiles/diaspora-no-clan": "/asylum-profiles/diaspora-without-clan-support",
  "/asylum-profiles/forced-recruitment": "/asylum-profiles/forced-recruitment-conscription",
  "/asylum-profiles/fgm-gbv": "/asylum-profiles/fgm-gender-based-violence",
  "/guides/clan-structure-guide": "/guides/clan-structure-somalia-guide",
  "/case-types/fgm-somalia": "/case-types/fgm-somalia-asylum",
};

function hrefs(links: { href: string }[]): string[] {
  return links.map((l) => l.href.split("#")[0]);
}

function hasEnquireLink(links: { href: string }[]): boolean {
  return links.some((link) => link.href === "/contact" || link.href === "/#enquire");
}

function verifyInternalLinking(): string[] {
  const errors: string[] = [];

  for (const profile of asylumProfiles) {
    const relatedLinks = getProfileRelatedLinks(profile.slug);
    const links = hrefs(relatedLinks);
    const required = PROFILE_MATRIX[profile.slug] ?? [];
    for (const path of required) {
      if (!links.includes(path)) {
        errors.push(`Profile ${profile.slug} missing required link: ${path}`);
      }
    }
    if (!links.includes("/how-to-instruct")) {
      errors.push(`Profile ${profile.slug} missing /how-to-instruct`);
    }
    if (!hasEnquireLink(relatedLinks)) {
      errors.push(`Profile ${profile.slug} missing contact/enquire link`);
    }
  }

  for (const slug of Object.keys(PROFILE_MATRIX)) {
    if (!asylumProfiles.some((p) => p.slug === slug)) {
      errors.push(`PROFILE_MATRIX references unknown profile slug: ${slug}`);
    }
  }

  getGuideRelatedLinks("moj-framework-guide");
  getRegionRelatedLinks("mogadishu-return");
  getCaseTypeRelatedLinks("clan-minority-asylum");

  return errors;
}

function verifySlugRedirects(): string[] {
  const errors: string[] = [];
  for (const [from, to] of Object.entries(REQUIRED_BRIEF_REDIRECTS)) {
    if (SEO_SLUG_REDIRECTS[from] !== to) {
      errors.push(`Missing or incorrect redirect: ${from} → ${to}`);
    }
  }
  return errors;
}

function main() {
  let failed = false;
  const inventory = buildPublicUrlInventory(SITE_URL);

  if (inventory.siteUrl.includes("://www.")) {
    failed = true;
    console.error(`SITE_URL must use apex host (no www): ${inventory.siteUrl}`);
  }
  if (inventory.allUrls.some((u) => u.includes("://www."))) {
    failed = true;
    console.error("Sitemap inventory must not contain www URLs (canonical host is apex).");
  }
  if (inventory.entries.length === 0) {
    failed = true;
    console.error("Sitemap inventory is empty.");
  }

  const linkErrors = verifyInternalLinking();
  if (linkErrors.length > 0) {
    failed = true;
    console.error("Internal linking matrix errors:");
    linkErrors.forEach((e) => console.error(`  - ${e}`));
  }

  const redirectErrors = verifySlugRedirects();
  if (redirectErrors.length > 0) {
    failed = true;
    console.error("Slug redirect errors:");
    redirectErrors.forEach((e) => console.error(`  - ${e}`));
  }

  if (failed) {
    console.error("\nSEO verification failed.");
    process.exit(1);
  }

  console.log(
    `SEO verify OK: ${inventory.entries.length} sitemap URLs on ${inventory.siteUrl}, internal linking matrix, and slug redirects.`
  );
}

main();
