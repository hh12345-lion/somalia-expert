import { sectionPhotos } from "@/lib/page-photos";
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Enquire About a Somalia Expert",
  description:
    "Send a short case note to a qualified Somalia expert witness. Legal Aid compatible.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell photo={sectionPhotos.contact}
      title="Send a case note"
      subtitle="UK solicitors only. The same form as the homepage."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Enquire" }]}
      showCta={false}
    >
      <div className="mx-auto max-w-lg">
        <ContactForm idPrefix="contact" />
        <p className="mt-6 text-sm text-[#4B5168]">
          Prefer email?{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#29324D] hover:text-[#1C2338]">
            {SITE_EMAIL}
          </a>
        </p>
      </div>
    </PageShell>
  );
}
