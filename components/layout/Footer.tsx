import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { LogoLight } from "@/components/brand/Brand";
import { SITE_EMAIL } from "@/lib/constants";
import { asylumProfilesNavLinks, regionsNavLinks, resourcesNavLinks } from "@/data/navigation";

function Column({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div className="min-w-0">
      <p className="disc-label !text-peach">{title}</p>
      <ul className="mt-5 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-[36px] items-center text-[1rem] text-white/75 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Navy footer with the two halves of the monogram's disc rising at its edge. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <span aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-peach/15" />
      <span aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-[26rem] w-[26rem] rounded-full border border-peach/25" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <div className="min-w-0">
            <Link href="/" aria-label="Somalia Expert, home" className="inline-block">
              <LogoLight className="h-7 w-auto sm:h-8" />
            </Link>
            <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-white/75">
              UK-only country evidence for Somali asylum appeals, from Mogadishu returns to Somaliland and the south.
              We are not a law firm and do not give legal advice.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-5 inline-flex min-h-[44px] items-center font-display text-sm font-semibold text-white underline decoration-peach decoration-2 underline-offset-[6px] hover:text-peach"
            >
              {SITE_EMAIL}
            </a>
            <div className="mt-6">
              <Link href="/#enquire" className="inline-flex min-h-[46px] items-center rounded-full bg-peach px-6 font-display text-sm font-bold text-navy hover:bg-white">
                Enquire
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            <Column title="Asylum profiles" links={asylumProfilesNavLinks.slice(0, 6)} />
            <Column title="Regions" links={[...regionsNavLinks, { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" }]} />
            <Column title="Resources" links={resourcesNavLinks} />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Somalia Expert</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Cookies", href: "/cookie-policy" },
              { label: "Terms", href: "/terms" },
              { label: "Image credits", href: "/image-credits" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex min-h-[40px] items-center hover:text-white">
                {l.label}
              </Link>
            ))}
            <CookieSettingsButton variant="footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
