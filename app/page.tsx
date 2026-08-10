import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { caseTypes } from "@/data/case-types";
import { regions } from "@/data/regions";
import {
  LEGAL_AID_ENGLAND_WALES_SUMMARY,
  LEGAL_AID_SCOTLAND_SUMMARY,
} from "@/lib/constants";

const featuredProfileSlugs = [
  "clan-minority-groups",
  "al-shabaab-targeting",
  "fgm-gender-based-violence",
  "failed-asylum-seekers-return",
] as const;

const featuredProfiles = featuredProfileSlugs
  .map((slug) => asylumProfiles.find((p) => p.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero — brand first, one composition, full-bleed coast image */}
      <section className="relative min-h-[min(88vh,760px)] overflow-hidden">
        <Image
          src="/images/hero-coast.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0F2420]/92 via-[#0F2420]/78 to-[#0F2420]/35"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(88vh,760px)] max-w-7xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <p className="animate-rise font-display text-5xl tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            SomaliaExpert
          </p>
          <div className="rule-draw mt-5 h-0.5 w-24 bg-[#E07050]" aria-hidden />
          <h1 className="animate-rise-delay font-display mt-6 max-w-2xl text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
            Country expert evidence for Somali asylum appeals in UK tribunals
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Independent reports for FTT and Upper Tribunal work — clan protection, Al-Shabaab risk, FGM, and MOJ return
            analysis that goes beyond generic CPIN positions.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center bg-[#E07050] px-7 py-3 font-semibold text-white transition hover:bg-[#C45A3C]"
            >
              Instruct an expert
            </Link>
            <Link
              href="/moj-country-guidance"
              className="inline-flex min-h-[48px] items-center justify-center border border-white/40 px-7 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              MOJ framework
            </Link>
          </div>
        </div>
      </section>

      {/* Indexed reading layout — left spine + main column */}
      <section className="border-b border-[#B8C9C4] bg-[#F7F8F6]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[11rem_1fr]">
          <aside className="hidden border-r border-[#B8C9C4] pattern-lattice px-5 py-12 lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1F5C54]">On this page</p>
            <nav className="mt-6 space-y-4 text-sm" aria-label="Page sections">
              {[
                { href: "#why", label: "Why evidence matters", n: "01" },
                { href: "#profiles", label: "Asylum profiles", n: "02" },
                { href: "#regions", label: "Regions", n: "03" },
                { href: "#funding", label: "Legal Aid", n: "04" },
                { href: "#guidance", label: "MOJ & CPIN", n: "05" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="group flex gap-2 text-[#3A4542] hover:text-[#0F2420]">
                  <span className="font-display text-[#E07050]">{item.n}</span>
                  <span className="border-b border-transparent group-hover:border-[#1F5C54]">{item.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
            <div id="why" className="scroll-mt-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E07050]">01 — Context</p>
              <h2 className="font-display mt-3 text-3xl text-[#0F2420] sm:text-4xl">
                Why Somali country evidence decides appeals
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-[#3A4542] leading-relaxed">
                <p>
                  Somalia remains one of the densest country-guidance jurisdictions in the UK system. MOJ and Others
                  [2014], OA and Others [2022], July 2025 Mogadishu CPINs, and EUAA October 2025 guidance sit alongside a
                  fast-moving Al-Shabaab picture and sharply different legal realities in Mogadishu, Somaliland, Puntland,
                  and south/central Somalia.
                </p>
                <p>
                  Home Office refusals often rest on generic CPIN extracts that ignore clan protection gaps, diaspora
                  remittance assumptions, or gender-specific risk. Tribunals in Glasgow, Edinburgh, Birmingham, London and
                  elsewhere need evidence that answers the appellant&apos;s actual profile — not a recycled country
                  summary.
                </p>
              </div>

              <div className="mt-10 grid gap-0 border border-[#B8C9C4] md:grid-cols-3">
                {[
                  {
                    t: "Practice Direction ready",
                    d: "Reports written to Immigration Tribunal Practice Direction paragraph 10 and CPR Part 35 duties — clear methodology, sources, and limits of opinion.",
                  },
                  {
                    t: "Current guidance stack",
                    d: "Experts engage MOJ, OA, 2025 Mogadishu CPINs, EUAA CG, and open-source security reporting so the tribunal sees what the CPIN left out.",
                  },
                  {
                    t: "Dual Legal Aid routes",
                    d: "Instruction packs suited to SLAB prior approval in Scotland and LAA prior authority in England and Wales — plus notes for LSANI in Northern Ireland.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.t}
                    className="border-b border-[#B8C9C4] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                  >
                    <span className="font-display text-sm text-[#E07050]">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display mt-2 text-lg text-[#0F2420]">{item.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#3A4542]">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="profiles" className="mt-16 scroll-mt-28 border-t border-[#B8C9C4] pt-16 sm:mt-20 sm:pt-20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E07050]">02 — Profiles</p>
                  <h2 className="font-display mt-3 text-3xl text-[#0F2420] sm:text-4xl">Highest-volume asylum profiles</h2>
                  <p className="mt-3 max-w-xl text-[#3A4542]">
                    Start here if you already know the risk category. Each page maps the expert questions tribunals ask.
                  </p>
                </div>
                <Link href="/asylum-profiles" className="text-sm font-semibold text-[#1F5C54] hover:text-[#E07050]">
                  All profiles →
                </Link>
              </div>
              <ol className="mt-8 divide-y divide-[#B8C9C4] border-y border-[#B8C9C4]">
                {featuredProfiles.map((p, i) => (
                  <li key={p!.slug}>
                    <Link
                      href={`/asylum-profiles/${p!.slug}`}
                      className="group flex flex-col gap-2 py-5 transition hover:bg-[#E8EEEC]/60 sm:flex-row sm:items-baseline sm:gap-6 sm:px-2"
                    >
                      <span className="font-display w-10 shrink-0 text-[#E07050]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display min-w-0 flex-1 text-xl text-[#0F2420] group-hover:text-[#1F5C54]">
                        {p!.title}
                      </span>
                      <span className="max-w-md text-sm leading-relaxed text-[#3A4542] sm:text-right">
                        {p!.metaDescription.slice(0, 110)}…
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div id="regions" className="mt-16 scroll-mt-28 border-t border-[#B8C9C4] pt-16 sm:mt-20 sm:pt-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E07050]">03 — Geography</p>
              <h2 className="font-display mt-3 text-3xl text-[#0F2420] sm:text-4xl">Region changes the legal test</h2>
              <p className="mt-3 max-w-2xl text-[#3A4542] leading-relaxed">
                A Mogadishu return analysis under MOJ is not interchangeable with Somaliland clan dynamics, Puntland
                security, or Article 15(c) arguments for south/central Somalia. Instruct against the map the appellant
                actually faces.
              </p>
              <div className="mt-8 grid gap-0 border border-[#B8C9C4] sm:grid-cols-2">
                {regions.map((r, i) => (
                  <Link
                    key={r.slug}
                    href={`/regions/${r.slug}`}
                    className="group relative min-h-[11rem] overflow-hidden border-b border-[#B8C9C4] p-6 odd:border-r last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    {i === 0 ? (
                      <Image
                        src="/images/section-tide.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-[0.12] transition duration-500 group-hover:opacity-[0.2] group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 40vw"
                      />
                    ) : null}
                    <div className="relative">
                      <span className="font-display text-sm text-[#E07050]">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display mt-2 text-xl text-[#0F2420] group-hover:text-[#1F5C54]">{r.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#3A4542]">{r.metaDescription.slice(0, 100)}…</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div id="funding" className="mt-16 scroll-mt-28 border-t border-[#B8C9C4] pt-16 sm:mt-20 sm:pt-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E07050]">04 — Funding</p>
              <h2 className="font-display mt-3 text-3xl text-[#0F2420] sm:text-4xl">Legal Aid that matches the venue</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-[#3A4542]">
                Somali appeals are frequently run from Glasgow and Edinburgh. Those cases are usually SLAB-funded — not
                LAA. SomaliaExpert is set up for both routes, and we flag what each board typically needs before
                chargeable work starts.
              </p>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="border-t-2 border-[#E07050] pt-5">
                  <h3 className="font-display text-xl text-[#0F2420]">Scotland — SLAB</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3A4542]">{LEGAL_AID_SCOTLAND_SUMMARY}</p>
                </div>
                <div className="border-t-2 border-[#1F5C54] pt-5">
                  <h3 className="font-display text-xl text-[#0F2420]">England &amp; Wales — LAA</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3A4542]">{LEGAL_AID_ENGLAND_WALES_SUMMARY}</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-[#3A4542]">
                See the{" "}
                <Link href="/how-to-instruct" className="font-semibold text-[#1F5C54] hover:text-[#E07050]">
                  instruction guide
                </Link>{" "}
                for CV, scope, hours, and fee materials boards expect. Northern Ireland solicitors should confirm LSANI
                prior approval separately.
              </p>
            </div>

            <div id="guidance" className="mt-16 scroll-mt-28 border-t border-[#B8C9C4] pt-16 sm:mt-20 sm:pt-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E07050]">05 — Guidance</p>
              <h2 className="font-display mt-3 text-3xl text-[#0F2420] sm:text-4xl">MOJ, CPIN, and how to challenge them</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-[#3A4542]">
                Use our pillar guides when you need a working map of MOJ return factors, current CPINs, and where expert
                evidence typically bites — before you draft the letter of instruction.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/moj-country-guidance"
                  className="inline-flex min-h-[48px] items-center justify-center bg-[#0F2420] px-6 py-3 font-semibold text-white hover:bg-[#1A3833]"
                >
                  MOJ country guidance
                </Link>
                <Link
                  href="/cpin-country-guidance"
                  className="inline-flex min-h-[48px] items-center justify-center border border-[#0F2420] px-6 py-3 font-semibold text-[#0F2420] hover:bg-[#E8EEEC]"
                >
                  CPIN &amp; country guidance
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex min-h-[48px] items-center justify-center px-6 py-3 font-semibold text-[#1F5C54] hover:text-[#E07050]"
                >
                  Solicitor guides →
                </Link>
              </div>
            </div>

            <div className="mt-16 border-t border-[#B8C9C4] pt-12 sm:mt-20">
              <h2 className="font-display text-2xl text-[#0F2420]">Case types at a glance</h2>
              <ul className="mt-6 columns-1 gap-x-10 sm:columns-2">
                {caseTypes.slice(0, 6).map((c) => (
                  <li key={c.slug} className="mb-3 break-inside-avoid">
                    <Link href={`/case-types/${c.slug}`} className="text-sm font-medium text-[#1F5C54] hover:text-[#E07050]">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/case-types" className="mt-4 inline-flex text-sm font-semibold text-[#0F2420] hover:text-[#E07050]">
                View all case types →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
