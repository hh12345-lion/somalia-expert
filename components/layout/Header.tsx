"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  asylumProfilesNavLinks,
  caseTypesNavLinks,
  mobileNavGroups,
  regionsNavLinks,
  resourcesNavLinks,
} from "@/data/navigation";
import { Logo } from "@/components/brand/Brand";

type NavLink = { label: string; href: string };

const MENUS: { label: string; href: string; items: readonly NavLink[] }[] = [
  { label: "Asylum profiles", href: "/asylum-profiles", items: asylumProfilesNavLinks },
  { label: "Regions", href: "/regions", items: regionsNavLinks },
  { label: "Case types", href: "/case-types", items: caseTypesNavLinks },
  { label: "Resources", href: "/guides", items: resourcesNavLinks },
];

const RESOURCE_PATHS = resourcesNavLinks.map((l) => l.href);

function within(path: string, base: string) {
  return path === base || path.startsWith(base + "/");
}

/** The disc of the monogram, halved navy and peach, marks the current section. */
function ActiveDisc() {
  return (
    <span
      aria-hidden
      className="absolute bottom-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
      style={{ background: "linear-gradient(135deg, #29324d 0 50%, #ffc399 50% 100%)" }}
    />
  );
}

/** Client only for usePathname, so the current section is marked. Menus open with CSS. */
export function Header() {
  const pathname = usePathname() || "/";
  const linkCls = (active: boolean) =>
    `relative inline-flex h-20 items-center gap-1.5 whitespace-nowrap px-3 font-display text-[0.9rem] font-semibold transition-colors ${
      active ? "text-navy" : "text-slate hover:text-navy"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-mistline bg-white/95 backdrop-blur-md">
      {/* Keyed on the path so the mobile menu closes after each navigation. */}
      <input key={pathname} id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-label="Toggle menu" />

      <div className="header-bar mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Somalia Expert, home" className="flex min-h-[4.5rem] min-w-0 shrink items-center lg:min-h-20">
          <Logo priority className="h-6 w-auto min-[400px]:h-7 sm:h-8" />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Main">
          {MENUS.map((m) => {
            const active = m.label === "Resources" ? RESOURCE_PATHS.some((p) => within(pathname, p)) : within(pathname, m.href);
            return (
              <div key={m.label} className="nav-item relative">
                <Link href={m.href} aria-haspopup="true" aria-current={active ? "page" : undefined} className={linkCls(active)}>
                  {m.label}
                  <svg className="nav-chevron h-3 w-3 transition-transform" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  {active && <ActiveDisc />}
                </Link>
                <div className="nav-panel absolute left-0 top-full z-50 w-[min(92vw,22rem)]">
                  <div className="overflow-hidden rounded-tr-[2rem] rounded-bl-[2rem] border border-mistline bg-white shadow-[0_24px_48px_rgba(41,50,77,0.16)]">
                    <div className="flex items-center justify-between bg-navy px-5 py-3">
                      <p className="font-display text-sm font-bold text-white">{m.label}</p>
                      <Link href={m.href} className="text-xs font-semibold text-peach hover:text-white">
                        View all
                      </Link>
                    </div>
                    <ul className="max-h-[min(62vh,26rem)] overflow-y-auto py-2 pb-4">
                      {m.items.map((item) => {
                        const current = pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={current ? "page" : undefined}
                              className={`flex items-center gap-3 px-5 py-2.5 text-[1rem] ${current ? "bg-pale font-semibold text-navy" : "text-body hover:bg-paper hover:text-navy"}`}
                            >
                              <span aria-hidden className={`h-1.5 w-1.5 shrink-0 rounded-full ${current ? "bg-navy" : "bg-peach"}`} />
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
          {[{ href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }].map((l) => {
            const active = within(pathname, l.href);
            return (
              <Link key={l.href} href={l.href} aria-current={active ? "page" : undefined} className={linkCls(active)}>
                {l.label}
                {active && <ActiveDisc />}
              </Link>
            );
          })}
          <Link
            href="/#enquire"
            className="ml-3 inline-flex min-h-[46px] items-center rounded-full bg-navy px-6 font-display text-sm font-bold text-white transition hover:bg-navy-deep"
          >
            Enquire
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-navy text-white xl:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg className="icon-open h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h10" />
          </svg>
          <svg className="icon-close hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav id="mobile-menu" className="hidden border-t border-mistline bg-white peer-checked:block xl:hidden" aria-label="Mobile">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          {mobileNavGroups.map((group) => (
            <details key={group.title} className="fold border-b border-mistline" open={group.links.some((l) => l.href === pathname)}>
              <summary className="flex min-h-[54px] cursor-pointer items-center justify-between font-display text-lg font-bold text-navy">
                {group.title}
                <svg className="fold-chevron h-4 w-4 text-slate transition-transform" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </summary>
              <ul className="pb-3">
                {group.links.map((link) => {
                  const current = link.href === pathname;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={current ? "page" : undefined}
                        className={`flex min-h-[42px] items-center gap-3 px-1 ${current ? "font-semibold text-navy" : "text-body hover:text-navy"}`}
                      >
                        <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${current ? "bg-navy" : "bg-peach"}`} />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          ))}
          <ul className="border-b border-mistline py-2">
            {[{ href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={within(pathname, l.href) ? "page" : undefined}
                  className={`flex min-h-[48px] items-center font-display text-lg font-bold ${within(pathname, l.href) ? "text-navy" : "text-slate hover:text-navy"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#enquire" className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-navy px-4 font-display text-sm font-bold text-white">
            Enquire
          </Link>
        </div>
      </nav>
    </header>
  );
}
