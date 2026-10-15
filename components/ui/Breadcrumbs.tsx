import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mt-8 font-display text-[0.82rem] text-slate">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
        {items.map((item, i) => (
          <li key={i} className="flex max-w-full items-center gap-2.5">
            {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-peach" />}
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-[44px] max-w-full items-center break-words py-1 hover:text-navy hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="break-words font-semibold text-navy">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
