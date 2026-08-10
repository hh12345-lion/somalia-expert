import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Instruct a Somalia Expert Witness | SomaliaExpert UK",
  description:
    "Submit a short case note to instruct a qualified Somalia expert witness. Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Instruct an expert"
      subtitle="UK solicitors only. Short form — we reply within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="grid min-w-0 gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
        <div className="min-w-0 border-t border-[#B8C9C4] pt-8">
          <ContactForm />
        </div>
        <aside className="h-fit border-l-2 border-[#E07050] bg-[#E8EEEC] py-6 pl-5 pr-5 sm:pl-6">
          <h2 className="font-display text-xl text-[#0F2420]">What we need</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#3A4542]">
            <li>Appellant profile (clan, Al-Shabaab, FGM, return, etc.)</li>
            <li>Region of origin or proposed return</li>
            <li>Hearing date if listed</li>
            <li>Funding route (SLAB / LAA / private)</li>
          </ul>
          <p className="mt-6 text-sm text-[#3A4542]">
            Prefer email?{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#1F5C54] hover:text-[#E07050]">
              {SITE_EMAIL}
            </a>
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
