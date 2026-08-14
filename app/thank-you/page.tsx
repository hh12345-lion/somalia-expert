import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Somalia Expert",
  description: "Your enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-[#1C1F24] py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl text-white sm:text-5xl">Thank you</h1>
          <p className="mt-4 text-lg text-white/75">
            Your enquiry has been received. We will respond within one business day.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#7A3048] px-8 py-3 font-semibold text-white transition hover:bg-[#5E2438]"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F4F6] py-12">
        <div className="mx-auto max-w-2xl px-4 text-[#4A5058] sm:px-6">
          <h2 className="font-display text-2xl text-[#1C1F24]">What happens next</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li>We review your case note and match a qualified Somalia country expert.</li>
            <li>You receive a response within one business day with proposed scope and timeline.</li>
            <li>
              Legal Aid cases: confirm SLAB prior approval (Scotland) or LAA prior authority (England &amp; Wales) before
              the expert begins work.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
