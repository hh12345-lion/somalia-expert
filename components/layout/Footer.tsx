import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#B8C9C4] bg-[#0F2420] text-white">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-9">
        <div className="min-w-0">
          <p className="font-display text-2xl tracking-tight text-white">{SITE_NAME}</p>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-white/55">
            UK-only country expert evidence for Somalia asylum appeals. Not a law firm — we do not give legal advice.
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-3 inline-flex min-h-[44px] items-center text-sm text-[#E07050] hover:text-white"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/55"
        >
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/contact" className="inline-flex min-h-[44px] items-center font-medium text-[#E07050] hover:text-white">
            Instruct
          </Link>
        </nav>
      </div>
    </footer>
  );
}
