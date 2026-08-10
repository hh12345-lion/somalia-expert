"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  asylumProfilesNavLinks,
  caseTypesNavLinks,
  mobileNavGroups,
  regionsNavLinks,
  resourcesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar border-b border-[#B8C9C4] bg-[#F7F8F6]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-stretch gap-0 px-0 sm:px-0 lg:px-0">
          {/* Brand spine — distinctive left block */}
          <Link
            href="/"
            className="group relative flex min-h-[64px] min-w-0 shrink items-center gap-3 border-r border-[#B8C9C4] bg-[#0F2420] px-4 py-3 text-white sm:px-5 lg:min-w-[13.5rem] lg:px-6"
          >
            <span
              className="absolute inset-y-0 left-0 w-1 bg-[#E07050] transition-all group-hover:w-1.5"
              aria-hidden
            />
            <span className="min-w-0 pl-1">
              <span className="font-display block truncate text-lg leading-none tracking-tight sm:text-xl">
                SomaliaExpert
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                Country evidence
              </span>
            </span>
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-3 sm:px-4 lg:px-5">
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
              <NavDropdown
                label="Profiles"
                href="/asylum-profiles"
                items={asylumProfilesNavLinks}
                index="01"
                blurb="Clan, Al-Shabaab, FGM, return risk"
                scrollable
              />
              <NavDropdown
                label="Regions"
                href="/regions"
                items={regionsNavLinks}
                index="02"
                blurb="Mogadishu to Somaliland frameworks"
                scrollable
              />
              <NavDropdown
                label="Case types"
                href="/case-types"
                items={caseTypesNavLinks}
                index="03"
                blurb="FTT, UT, fresh claims, removal"
                scrollable
              />
              <NavDropdown
                label="Guides"
                href="/guides"
                items={[...resourcesNavLinks]}
                index="04"
                blurb="MOJ, CPIN, instruct, glossary"
                scrollable
              />
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/how-to-instruct"
                className="hidden min-h-[40px] items-center px-2 text-[13px] font-medium text-[#1F5C54] hover:text-[#0F2420] xl:inline-flex"
              >
                How to instruct
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[40px] items-center bg-[#E07050] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#C45A3C]"
              >
                Instruct
              </Link>
              <label
                htmlFor="mobile-nav-toggle"
                className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-[#B8C9C4] lg:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg className="icon-open h-5 w-5 text-[#0F2420]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
                </svg>
                <svg className="icon-close hidden h-5 w-5 text-[#0F2420]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-[#B8C9C4] bg-[#F7F8F6] peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-5">
          {mobileNavGroups.map((group, gi) => (
            <div key={group.title} className="mb-6 border-l-2 border-[#E07050] pl-4">
              <p className="mb-2 flex items-baseline gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1F5C54]">
                <span className="font-display text-sm normal-case tracking-normal text-[#E07050]">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                {group.title}
              </p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center text-[#3A4542] hover:text-[#0F2420]"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            className="flex min-h-[44px] w-full items-center justify-center bg-[#E07050] font-semibold text-white"
            onClick={closeMobileMenu}
          >
            Instruct an expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
