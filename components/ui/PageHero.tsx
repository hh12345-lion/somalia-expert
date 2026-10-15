import { DiscPhoto, type FramePhoto } from "@/components/brand/Brand";
import { fallbackPhoto } from "@/lib/page-photos";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/** Title first, then the introduction and breadcrumbs, beside a photograph set in the halves of the monogram's disc. */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  photo,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  photo?: FramePhoto;
}) {
  const picture = photo ?? fallbackPhoto(title);
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl min-w-0 items-center gap-12 px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="min-w-0 lg:col-span-7">
          <h1 className="font-display break-words text-[2.3rem] font-bold leading-[1.06] text-navy sm:text-5xl lg:text-[3.3rem]">{title}</h1>
          <div aria-hidden className="mt-7 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-navy" />
            <span className="h-[3px] w-14 bg-peach" />
          </div>
          {subtitle && <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">{subtitle}</p>}
          {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        </div>
        <div className="lg:col-span-5">
          <DiscPhoto photo={picture} priority aspect="aspect-[4/5]" sizes="(max-width: 1024px) 90vw, 440px" className="mx-auto w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
