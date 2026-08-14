import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#1C1F24] py-16 text-center md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-display text-7xl text-[#7A3048] sm:text-8xl" aria-hidden="true">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl text-white sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-lg text-white/70">This page does not exist or may have moved.</p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#7A3048] px-6 py-3 font-semibold text-white hover:bg-[#5E2438]"
          >
            Homepage
          </Link>
          <Link
            href="/#enquire"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Enquire
          </Link>
        </div>
      </div>
    </section>
  );
}
