import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { photos } from "@/lib/photos";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" subtitle="This page does not exist or may have moved." photo={photos.admiraltyChart} />
      <section className="border-t border-mistline bg-white py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex min-h-[48px] items-center rounded-full bg-navy px-7 font-display text-sm font-bold text-white hover:bg-navy-deep">
            Homepage
          </Link>
          <Link href="/#enquire" className="inline-flex min-h-[48px] items-center rounded-full border-2 border-navy px-7 font-display text-sm font-bold text-navy hover:bg-pale">
            Enquire
          </Link>
        </div>
      </section>
    </>
  );
}
