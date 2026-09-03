import { SITE_EMAIL, SITE_URL, LINKEDIN_URL, SITE_NAME } from "./constants";

export type FAQ = { question: string; answer: string };
export type BreadcrumbItem = { name: string; href?: string };

export const HOMEPAGE_URL = `${SITE_URL}/`;

export function schemaGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: ({ name?: string; label?: string; href?: string })[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name ?? item.label ?? "",
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: HOMEPAGE_URL,
    email: SITE_EMAIL,
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    sameAs: [LINKEDIN_URL],
  };
}

export function professionalServiceSchema() {
  const services = [
    "Country Condition Reports",
    "Clan Analysis Reports",
    "Al-Shabaab Risk Assessment",
    "FGM Expert Reports",
    "Internal Relocation Analysis",
    "MOJ Framework Application",
    "CPIN Challenge Reports",
    "Oral Evidence at Tribunal",
  ];
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Somalia Expert Witness Services",
    url: HOMEPAGE_URL,
    serviceType: "Somalia Expert Witness",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Somalia Expert Witness Services",
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: HOMEPAGE_URL,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function homepageGraph() {
  return schemaGraph(organizationSchema(), professionalServiceSchema(), websiteSchema());
}

export function servicesItemListSchema(
  services: { id: string; name: string; description: string }[]
) {
  return {
    "@type": "ItemList",
    name: "Somalia Expert Witness Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/services#${s.id}`,
        name: s.name,
        description: s.description,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  };
}

/** @deprecated Use servicesItemListSchema inside PageJsonLd extra instead. */
export function servicesPageGraph(
  services: { id: string; name: string; description: string }[]
) {
  return schemaGraph(organizationSchema(), servicesItemListSchema(services));
}

export function articleSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
