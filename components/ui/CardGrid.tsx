import Link from "next/link";

type CardItem = { title: string; description: string; href?: string };

function CardContent({ item }: { item: CardItem }) {
  return (
    <>
      <h3 className="font-display break-words text-xl text-[#1C1F24] group-hover:text-[#7A3048]">{item.title}</h3>
      <p className="prose-safe mt-2 text-sm leading-relaxed text-[#4A5058]">{item.description}</p>
    </>
  );
}

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className="group min-h-[44px] min-w-0 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#D4D8DE] transition hover:ring-[#7A3048] sm:p-6"
          >
            <CardContent item={item} />
          </Link>
        ) : (
          <div key={item.title} className="min-w-0 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#D4D8DE] sm:p-6">
            <CardContent item={item} />
          </div>
        )
      )}
    </div>
  );
}
