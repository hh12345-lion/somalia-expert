import Link from "next/link";

export function CTASection({
  title = "Ready to instruct?",
  description = "Send a short case note. We match UK solicitors with Somalia country experts who can address MOJ, CPIN, and regional risk — usually within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-[#B8C9C4] bg-[#1F5C54] py-12 sm:py-14 md:py-16">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">Next step</p>
          <h2 className="font-display mt-3 text-3xl font-medium text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center bg-[#E07050] px-6 py-3 font-semibold text-white transition hover:bg-[#C45A3C]"
          >
            Instruct an expert
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[48px] items-center justify-center border border-white/35 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Instruction checklist
          </Link>
        </div>
      </div>
    </section>
  );
}
