import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { guides, getGuide } from "@/data/guides";
import { getGuideRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return createMetadata({ title: g.metaTitle, description: g.metaDescription, path: `/guides/${slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const path = `/guides/${slug}`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.h1 }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={guide.faqs}
        extra={articleSchema({
          title: guide.h1,
          description: guide.metaDescription,
          path,
        })}
      />
      <PageShell title={guide.h1} breadcrumbs={crumbs}>
        {guide.sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="text-xl font-bold text-[#1C1F24]">{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-[#4A5058] leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
        {guide.faqs && guide.faqs.length > 0 && <FAQSection faqs={guide.faqs} />}
        <RelatedLinks links={getGuideRelatedLinks(slug)} />
        <Link
          href="/#enquire"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-full bg-[#7A3048] px-6 py-3 font-semibold text-white"
        >
          Enquire
        </Link>
      </PageShell>
    </>
  );
}
