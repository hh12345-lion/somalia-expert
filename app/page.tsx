import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
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
      <JsonLd data={homepageGraph()} />

      <div className="masthead-film h-28 sm:h-36" role="presentation" />

      <section className="panel-dusk">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,22rem)] lg:items-start lg:gap-14 lg:px-8 lg:py-16">
          <div className="min-w-0 text-white">
            <p className="text-sm tracking-[0.14em] text-white/55">UK Immigration &amp; Asylum Chamber</p>
            <h1 className="font-display mt-3 max-w-xl text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-[3.35rem]">
              Country reports for Somali asylum appeals
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Independent expert evidence for FTT and Upper Tribunal work — clan protection, Al-Shabaab risk, FGM, and
              MOJ return analysis that goes beyond a generic CPIN extract.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A3048]" aria-hidden />
                Practice Direction paragraph 10 and CPR Part 35 compliant reports
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A3048]" aria-hidden />
                MOJ, OA, July 2025 Mogadishu CPINs, and EUAA October 2025 guidance
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A3048]" aria-hidden />
                SLAB (Scotland) and LAA (England &amp; Wales) funding packs
              </li>
            </ul>
          </div>

          <aside
            id="enquire"
            className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.55)] sm:p-6"
          >
            <h2 className="font-display text-2xl text-[#1C1F24]">Send a case note</h2>
            <p className="mt-1 mb-5 text-sm text-[#4A5058]">UK solicitors only. Reply within one business day.</p>
            <ContactForm idPrefix="home" />
          </aside>
        </div>
      </section>

      <section id="evidence" className="scroll-mt-24 bg-[#F3F4F6] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#7A3048]">Why this evidence matters</p>
          <h2 className="font-display mt-2 max-w-2xl text-3xl text-[#1C1F24] sm:text-4xl">
            Somalia is not one legal picture
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-[#4A5058]">
            <p>
              MOJ and Others [2014], OA and Others [2022], July 2025 Mogadishu CPINs, and EUAA October 2025 guidance sit
              beside a fast-moving Al-Shabaab picture. Mogadishu, Somaliland, Puntland, and south/central Somalia each
              raise different tests.
            </p>
            <p>
              Refusals often rest on generic CPIN extracts that skip clan protection gaps, diaspora remittance
              assumptions, or gender-specific risk. Tribunals in Glasgow, Edinburgh, Birmingham, and London need evidence
              that answers the appellant&apos;s actual profile.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Tribunal-ready",
                d: "Methodology, sources, and limits of opinion written for Immigration Tribunal Practice Direction paragraph 10.",
              },
              {
                t: "Current stack",
                d: "Experts engage MOJ, OA, 2025 CPINs, EUAA CG, and open-source security reporting — not a recycled country note.",
              },
              {
                t: "Both Legal Aid routes",
                d: "Packs for SLAB prior approval in Scotland and LAA prior authority in England and Wales, plus LSANI notes for NI.",
              },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#D4D8DE]">
                <h3 className="font-display text-xl text-[#1C1F24]">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5058]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profiles" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[#7A3048]">Highest-volume work</p>
              <h2 className="font-display mt-2 text-3xl text-[#1C1F24] sm:text-4xl">Asylum profiles</h2>
            </div>
            <Link href="/asylum-profiles" className="text-sm font-semibold text-[#7A3048] hover:text-[#5E2438]">
              All profiles
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {featuredProfiles.map((p) => (
              <Link
                key={p!.slug}
                href={`/asylum-profiles/${p!.slug}`}
                className="rounded-2xl bg-[#F3F4F6] p-5 transition hover:bg-[#ECEEF1]"
              >
                <h3 className="font-display text-xl text-[#1C1F24]">{p!.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5058]">{p!.metaDescription.slice(0, 140)}…</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="regions" className="scroll-mt-24 overflow-hidden bg-[#ECEEF1] py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
          <div className="relative min-h-[14rem] overflow-hidden rounded-2xl sm:min-h-[18rem]">
            <Image
              src="/images/section-tide.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-[#7A3048]">Geography</p>
            <h2 className="font-display mt-2 text-3xl text-[#1C1F24] sm:text-4xl">Region changes the legal test</h2>
            <p className="mt-4 leading-relaxed text-[#4A5058]">
              A Mogadishu return analysis under MOJ is not interchangeable with Somaliland clan dynamics, Puntland
              security, or Article 15(c) arguments for south/central Somalia.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/regions/${r.slug}`}
                    className="block rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#1C1F24] hover:text-[#7A3048]"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="funding" className="scroll-mt-24 bg-[#F3F4F6] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#7A3048]">Legal Aid</p>
          <h2 className="font-display mt-2 text-3xl text-[#1C1F24] sm:text-4xl">Funding that matches the venue</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#4A5058]">
            Somali appeals are frequently run from Glasgow and Edinburgh. Those cases are usually SLAB-funded — not LAA.
            We set out what each board typically needs before chargeable work starts.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#D4D8DE]">
              <h3 className="font-display text-2xl text-[#1C1F24]">Scotland — SLAB</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5058]">{LEGAL_AID_SCOTLAND_SUMMARY}</p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#D4D8DE]">
              <h3 className="font-display text-2xl text-[#1C1F24]">England &amp; Wales — LAA</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5058]">{LEGAL_AID_ENGLAND_WALES_SUMMARY}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#4A5058]">
            See{" "}
            <Link href="/how-to-instruct" className="font-semibold text-[#7A3048] hover:text-[#5E2438]">
              how it works
            </Link>{" "}
            for CV, scope, hours, and fee materials. Northern Ireland solicitors should confirm LSANI prior approval
            separately.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/moj-country-guidance"
              className="inline-flex min-h-[44px] items-center rounded-full bg-[#1C1F24] px-5 text-sm font-semibold text-white hover:bg-[#2A3038]"
            >
              MOJ guidance
            </Link>
            <Link
              href="/cpin-country-guidance"
              className="inline-flex min-h-[44px] items-center rounded-full border border-[#1C1F24] px-5 text-sm font-semibold text-[#1C1F24] hover:bg-white"
            >
              CPIN guidance
            </Link>
            <Link
              href="/guides"
              className="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-[#7A3048] hover:text-[#5E2438]"
            >
              Solicitor guides
            </Link>
            <Link
              href="/what-is-a-somalia-expert-witness"
              className="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-[#7A3048] hover:text-[#5E2438]"
            >
              What is an expert witness?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
