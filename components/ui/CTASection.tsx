import Link from "next/link";

export function CTASection({
  title = "Need a Somalia country report?",
  description = "Send a short case note. We match UK solicitors with country experts who can address MOJ, CPIN, and regional risk — usually within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-[#D4D8DE] bg-[#ECEEF1] py-12 sm:py-14">
      <div className="mx-auto flex min-w-0 max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl text-[#1C1F24]">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4A5058] sm:text-base">{description}</p>
        </div>
        <Link
          href="/#enquire"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#7A3048] px-7 font-semibold text-white transition hover:bg-[#5E2438]"
        >
          Enquire
        </Link>
      </div>
    </section>
  );
}
