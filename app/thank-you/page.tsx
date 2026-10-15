import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { sectionPhotos } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero title="Thank you" subtitle="Your enquiry has been received." photo={sectionPhotos.thankYou} />
      <section className="border-t border-mistline bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-body sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy">What happens next</h2>
          <ul className="mt-5 space-y-3 leading-relaxed">
            <li>We review your case note and match a qualified Somalia country expert.</li>
            <li>We reply with a proposed scope and timeline.</li>
            <li>
              Legal Aid cases: confirm SLAB prior approval (Scotland) or LAA prior authority (England &amp; Wales) before
              the expert begins work.
            </li>
          </ul>
          <Link href="/" className="mt-10 inline-flex min-h-[48px] items-center rounded-full bg-navy px-8 font-display text-sm font-bold text-white hover:bg-navy-deep">
            Back to homepage
          </Link>
        </div>
      </section>
    </>
  );
}
