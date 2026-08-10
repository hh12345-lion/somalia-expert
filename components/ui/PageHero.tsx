import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="pattern-ink relative overflow-hidden py-12 sm:py-14 md:py-16">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-30 md:block"
        style={{
          backgroundImage: "url(/images/section-tide.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <div className="flex items-start gap-4">
          <span className="mt-2 hidden h-12 w-1 shrink-0 bg-[#E07050] sm:block" aria-hidden />
          <div className="min-w-0">
            <h1 className="font-display break-words text-3xl font-medium tracking-tight text-white min-[375px]:text-4xl sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
