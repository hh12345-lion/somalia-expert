import Link from "next/link";

type CardItem = { title: string; description: string; href?: string };

function CardContent({ item, index }: { item: CardItem; index: number }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display text-sm tabular-nums text-[#E07050]">{String(index + 1).padStart(2, "0")}</span>
        {item.href ? (
          <span className="text-xs font-medium text-[#1F5C54] opacity-0 transition group-hover:opacity-100">Open →</span>
        ) : null}
      </div>
      <h3 className="font-display mt-3 break-words text-lg font-medium leading-snug text-[#0F2420] group-hover:text-[#1F5C54]">
        {item.title}
      </h3>
      <p className="prose-safe mt-2 text-sm leading-relaxed text-[#3A4542]">{item.description}</p>
    </>
  );
}

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-0 border-t border-[#B8C9C4] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className="group min-h-[44px] min-w-0 border-b border-r border-[#B8C9C4] bg-[#F7F8F6] p-5 transition hover:bg-[#E8EEEC] sm:p-6"
          >
            <CardContent item={item} index={index} />
          </Link>
        ) : (
          <div
            key={item.title}
            className="min-w-0 border-b border-r border-[#B8C9C4] bg-[#F7F8F6] p-5 sm:p-6"
          >
            <CardContent item={item} index={index} />
          </div>
        )
      )}
    </div>
  );
}
