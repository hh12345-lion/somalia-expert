/** Apex (non-www) is the live canonical host — www redirects at the edge. */
function normalizeSiteUrl(raw?: string): string {
  const fallback = "https://somaliaexpert.com";
  const candidate = (raw?.trim() || fallback).replace(/\/$/, "");
  try {
    const parsed = new URL(candidate);
    parsed.hostname = parsed.hostname.replace(/^www\./, "");
    return parsed.origin;
  } catch {
    return fallback;
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_NAME = "Somalia Expert";
export const SITE_EMAIL = "cases@somaliaexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/SomaliaExpertWitness";

/** UK-only service scope — use in page copy and footer, not promotional banners. */
export const SITE_SCOPE =
  "Somalia Expert is a UK-only service for immigration solicitors, law firms, and Legal Aid practitioners instructing Somalia country experts for First-tier Tribunal and Upper Tribunal proceedings in England, Wales, Scotland, and Northern Ireland. This service is not available outside the United Kingdom.";

/** Scottish Legal Aid Board — primary legal aid route for Scotland-based instructions. */
export const LEGAL_AID_SCOTLAND_SUMMARY =
  "In Scotland, legal aid for asylum and immigration tribunal work is administered by the Scottish Legal Aid Board (SLAB). Scottish solicitors must obtain SLAB prior approval of reasonable and necessary expert witness fees before country expert work begins. SLAB assesses disbursements under the Civil Legal Aid (Scotland) Regulations 2011 and related guidance, separately from the Legal Aid Agency (LAA) in England and Wales.";

/** Legal Aid Agency — England and Wales route (included for completeness across the UK). */
export const LEGAL_AID_ENGLAND_WALES_SUMMARY =
  "In England and Wales, Legal Aid Agency (LAA) prior authority is required for most expert witness disbursements in asylum proceedings, unless a valid exception applies. Solicitors should confirm funding before issuing a letter of instruction.";

export const COLORS = {
  primary: "#1C1F24",
  accent: "#7A3048",
  background: "#F3F4F6",
  sectionAlt: "#ECEEF1",
  border: "#D4D8DE",
  heading: "#1C1F24",
  body: "#4A5058",
  dusk: "#3D4A5C",
  wineDeep: "#5E2438",
} as const;
