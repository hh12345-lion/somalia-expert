import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  breadcrumbSchema,
  faqSchema,
  schemaGraph,
  type FAQ,
} from "@/lib/schema";

type Crumb = { label: string; href?: string };

/** Standard SEO JSON-LD: Organization + optional Breadcrumb + FAQ in one @graph block. */
export function PageJsonLd({
  breadcrumbs,
  faqs,
  extra,
}: {
  breadcrumbs?: Crumb[];
  faqs?: FAQ[];
  extra?: object | object[];
}) {
  const nodes: object[] = [organizationSchema()];
  if (breadcrumbs && breadcrumbs.length > 0) {
    nodes.push(breadcrumbSchema(breadcrumbs));
  }
  if (faqs && faqs.length > 0) {
    nodes.push(faqSchema(faqs));
  }
  if (extra) {
    nodes.push(...(Array.isArray(extra) ? extra : [extra]));
  }
  return <JsonLd data={schemaGraph(...nodes)} />;
}
