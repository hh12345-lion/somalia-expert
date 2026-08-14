"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const links = [
  { href: "/#evidence", label: "Evidence" },
  { href: "/#profiles", label: "Profiles" },
  { href: "/#regions", label: "Regions" },
  { href: "/#funding", label: "Funding" },
] as const;

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

      <div className="header-bar border-b border-[#D4D8DE] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="min-w-0">
            <span className="font-display block text-[1.35rem] leading-none tracking-tight text-[#1C1F24] sm:text-[1.55rem]">
              Somalia Expert
            </span>
            <span className="mt-0.5 block text-[10px] tracking-[0.16em] text-[#3D4A5C]">
              UK tribunal reports
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] items-center px-3 text-sm text-[#4A5058] transition hover:text-[#1C1F24]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#enquire"
              className="ml-2 inline-flex min-h-[42px] items-center rounded-full bg-[#7A3048] px-5 text-sm font-semibold text-white transition hover:bg-[#5E2438]"
            >
              Enquire
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/#enquire"
              className="inline-flex min-h-[40px] items-center rounded-full bg-[#7A3048] px-4 text-sm font-semibold text-white"
            >
              Enquire
            </Link>
            <label
              htmlFor="mobile-nav-toggle"
              className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full border border-[#D4D8DE]"
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="icon-open h-5 w-5 text-[#1C1F24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
              </svg>
              <svg className="icon-close hidden h-5 w-5 text-[#1C1F24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-b border-[#D4D8DE] bg-white peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="space-y-1 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-[44px] items-center text-[#4A5058]"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/how-to-instruct"
            className="flex min-h-[44px] items-center text-[#4A5058]"
            onClick={closeMobileMenu}
          >
            How it works
          </Link>
        </div>
      </nav>
    </header>
  );
}
