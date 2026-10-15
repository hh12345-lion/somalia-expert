import Link from "next/link";

type HubLink = { label: string; href: string };

export function HubLinkGrid({
  title,
  links,
}: {
  title: string;
  links: HubLink[];
}) {
  return (
    <div className="rounded-2xl bg-[#E0E5EF] p-4 sm:p-6">
      <h3 className="font-display text-lg text-[#29324D]">{title}</h3>
      <ul className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] max-w-full items-center break-words py-2 text-sm font-medium text-[#757B93] hover:text-[#29324D]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
