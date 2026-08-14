import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#D4D8DE] bg-white">
      <div className="mx-auto flex min-w-0 max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-xl text-[#1C1F24]">Somalia Expert</p>
          <p className="mt-1 max-w-lg text-xs leading-relaxed text-[#4A5058]">
            UK-only country evidence for Somali asylum appeals. Not a law firm — we do not give legal advice.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#4A5058]">
          <a href={`mailto:${SITE_EMAIL}`} className="inline-flex min-h-[44px] items-center hover:text-[#7A3048]">
            {SITE_EMAIL}
          </a>
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-[#1C1F24]">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-[#1C1F24]">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-[#1C1F24]">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/#enquire" className="inline-flex min-h-[44px] items-center font-semibold text-[#7A3048] hover:text-[#5E2438]">
            Enquire
          </Link>
        </nav>
      </div>
    </footer>
  );
}
