import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  /** Index mark shown in the folio panel (e.g. 01) */
  index?: string;
  blurb?: string;
  scrollable?: boolean;
};

export function NavDropdown({
  label,
  href,
  items,
  index = "·",
  blurb,
  scrollable,
}: NavDropdownProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex min-h-[44px] items-center gap-2 px-2.5 py-2 text-[13px] font-medium tracking-wide text-[#3A4542] transition-colors hover:text-[#0F2420]"
      >
        <span className="font-display text-[11px] tabular-nums text-[#E07050] opacity-80">{index}</span>
        <span className="border-b border-transparent group-hover:border-sea">{label}</span>
        <svg
          className="h-3 w-3 text-sea transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div
        className={`pointer-events-none invisible absolute left-0 top-full z-50 max-w-[min(100vw-2rem,22rem)] pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 ${scrollable ? "min-w-[17rem]" : "min-w-[15rem]"}`}
      >
        <div className="folio-panel overflow-hidden border border-border bg-paper">
          <div className="flex items-start gap-3 border-b border-border bg-ink px-4 py-3 text-white">
            <span className="font-display text-2xl leading-none text-flare">{index}</span>
            <div className="min-w-0 pt-0.5">
              <Link href={href} className="block font-display text-base leading-tight hover:text-flare">
                {label}
              </Link>
              {blurb ? <p className="mt-1 text-[11px] leading-snug text-white/65">{blurb}</p> : null}
            </div>
          </div>
          <ul className={scrollable ? "max-h-[min(60vh,18rem)] overflow-y-auto py-2" : "py-2"}>
            {items.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-[44px] items-center gap-3 border-l-2 border-transparent px-4 py-2.5 text-sm text-body transition-colors hover:border-flare hover:bg-mist hover:text-ink"
                >
                  <span className="w-5 shrink-0 font-display text-[11px] tabular-nums text-sea">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-border bg-mist px-4 py-2.5">
            <Link href={href} className="text-xs font-semibold text-sea hover:text-flare">
              Open full index →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
