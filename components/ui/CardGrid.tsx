import Image from "next/image";
import Link from "next/link";
import { photoFor } from "@/lib/page-photos";

type CardItem = { title: string; description: string; href?: string };

function CardContent({ item, withPhoto }: { item: CardItem; withPhoto: boolean }) {
  const p = withPhoto && item.href ? photoFor(item.href.split("/").filter(Boolean).pop() ?? item.title) : null;
  return (
    <>
      {p && (
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-tr-[1.6rem] rounded-bl-[1.6rem] bg-navy">
          <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 90vw, 360px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
        </div>
      )}
      <h3 className="font-display break-words text-xl font-bold text-navy">{item.title}</h3>
      <p className="prose-safe mt-2 leading-relaxed text-body">{item.description}</p>
    </>
  );
}

/** Cards for hub pages; linked cards carry the photograph for their page. */
export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) =>
        item.href ? (
          <Link key={item.href} href={item.href} className="group block min-h-[44px] min-w-0">
            <CardContent item={item} withPhoto />
            <span className="mt-3 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy">
              <span aria-hidden className="h-2 w-2 rounded-full bg-peach transition group-hover:scale-125" />
              Read more
            </span>
          </Link>
        ) : (
          <div key={item.title} className="min-w-0 rounded-tr-[1.6rem] rounded-bl-[1.6rem] bg-paper p-6 ring-1 ring-mistline">
            <CardContent item={item} withPhoto={false} />
          </div>
        )
      )}
    </div>
  );
}
