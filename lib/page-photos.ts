import { photos, type Photo } from "@/lib/photos";

/** One photograph per content page, keyed by slug. */
const BY_SLUG: Record<string, Photo> = {
  // Regions
  "mogadishu-return": photos.mogadishuHarbour,
  somaliland: photos.hargeisaMarket,
  puntland: photos.garoweStreet,
  "south-central-somalia": photos.jubbaRiver,
  // Asylum profiles
  "clan-minority-groups": photos.camelMarket,
  "al-shabaab-targeting": photos.baidoaNight,
  "fgm-gender-based-violence": photos.hargeisaMarket,
  "failed-asylum-seekers-return": photos.lidoBeach,
  "diaspora-without-clan-support": photos.hargeisaMoneyMarket,
  "former-government-officials": photos.garoweSquare,
  "women-discriminatory-practices": photos.hargeisaMarket,
  "forced-recruitment-conscription": photos.beletWeyne,
  // Case types
  "ftt-asylum-appeal-somalia": photos.mogadishuOldPort,
  "upper-tribunal-somalia": photos.admiraltyChart,
  "article-15c-south-central": photos.bardereBridge,
  "deportation-removal-somalia": photos.kismayoAerial,
  "fresh-claims-somalia": photos.lidoBeach,
  "fgm-somalia-asylum": photos.hargeisaMarket,
  "somaliland-asylum": photos.berbera,
  "clan-minority-asylum": photos.camelMarket,
  // Guides
  "moj-framework-guide": photos.mogadishuHarbour,
  "clan-structure-somalia-guide": photos.camelMarket,
  "al-shabaab-asylum-guide": photos.baidoaNight,
  "somaliland-puntland-guide": photos.berbera,
  "fgm-somalia-guide": photos.hargeisaMarket,
  "instructing-somalia-expert": photos.admiraltyChart,
};

/** Photographs for section and standalone pages. */
export const sectionPhotos = {
  regions: photos.kismayoAerial,
  profiles: photos.hargeisaMarket,
  caseTypes: photos.mogadishuOldPort,
  guides: photos.admiraltyChart,
  blog: photos.lidoBeach,
  contact: photos.mogadishuHarbour,
  cpin: photos.kismayoAerial,
  moj: photos.mogadishuHarbour,
  glossary: photos.admiraltyChart,
  howToInstruct: photos.garoweSquare,
  qualifications: photos.berbera,
  services: photos.jubbaRiver,
  whatIs: photos.garoweSquare,
  legal: photos.bardereBridge,
  thankYou: photos.lidoBeach,
} satisfies Record<string, Photo>;

const POOL: Photo[] = [photos.bardereBridge, photos.jubbaRiver, photos.mogadishuOldPort, photos.kismayoAerial, photos.berbera];

export function photoFor(slug: string): Photo {
  return BY_SLUG[slug] ?? fallbackPhoto(slug);
}

/** A stable photograph for a page that has none of its own. */
export function fallbackPhoto(seed: string): Photo {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return POOL[h % POOL.length];
}
