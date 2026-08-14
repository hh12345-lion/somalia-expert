import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Enquire | Somalia Expert Witness UK",
  description:
    "Send a short case note to a qualified Somalia expert witness. Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Send a case note"
      subtitle="UK solicitors only. Same form as the homepage — we reply within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Enquire" }]}
      showCta={false}
    >
      <div className="mx-auto max-w-lg">
        <ContactForm idPrefix="contact" />
        <p className="mt-6 text-sm text-[#4A5058]">
          Prefer email?{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#7A3048] hover:text-[#5E2438]">
            {SITE_EMAIL}
          </a>
        </p>
      </div>
    </PageShell>
  );
}
