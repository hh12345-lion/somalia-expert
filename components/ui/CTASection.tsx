import Link from "next/link";
import { DiscPhoto } from "@/components/brand/Brand";
import { photos } from "@/lib/photos";

export function CTASection({
  title = "Need a Somalia country report?",
  description = "Send a short case note. We match UK solicitors with country experts who can address MOJ, CPIN, and regional risk.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <span aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-peach/10" />
      <div className="relative mx-auto grid min-w-0 max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="disc-label !text-peach">Instruct an expert</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-[2.6rem]">{title}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">{description}</p>
          <Link
            href="/#enquire"
            className="mt-8 inline-flex min-h-[50px] items-center justify-center rounded-full bg-peach px-8 font-display text-sm font-bold text-navy transition hover:bg-white"
          >
            Enquire
          </Link>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <DiscPhoto photo={photos.mogadishuOldPort} aspect="aspect-[4/3]" sizes="420px" discs={false} />
        </div>
      </div>
    </section>
  );
}
