import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./constants";

export const META_DESCRIPTION_MAX = 155;
export const META_TITLE_MAX = 60;

const TITLE_SUFFIX = ` | ${SITE_NAME}`;

/** Strip brand suffix and cap length so rendered title stays within SERP limits. */
export function normalizePageTitle(title: string): string {
  let base = title.trim();
  if (base.endsWith(TITLE_SUFFIX)) {
    base = base.slice(0, -TITLE_SUFFIX.length).trimEnd();
  }
  const maxBase = META_TITLE_MAX - TITLE_SUFFIX.length;
  if (base.length <= maxBase) return base;
  const cut = base.slice(0, maxBase);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 15 ? cut.slice(0, lastSpace) : cut).trimEnd();
}

export function renderPageTitle(title: string): string {
  return `${normalizePageTitle(title)}${TITLE_SUFFIX}`;
}

/** Keep meta descriptions within SERP-friendly length (120–155 chars). */
export function normalizeMetaDescription(description: string): string {
  const trimmed = description.trim();
  if (trimmed.length <= META_DESCRIPTION_MAX) return trimmed;
  const cut = trimmed.slice(0, META_DESCRIPTION_MAX - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 90 ? cut.slice(0, lastSpace) : cut;
  return `${base.trimEnd()}…`;
}

const OG_IMAGE_ALT = "Somalia Expert - Expert Witness Services UK";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const metaDescription = normalizeMetaDescription(description);
  const pageTitle = normalizePageTitle(title);
  const fullTitle = renderPageTitle(title);
  return {
    title: pageTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: metaDescription },
    robots: noindex
      ? { index: false, follow, googleBot: { index: false, follow } }
      : "index, follow",
  };
}
