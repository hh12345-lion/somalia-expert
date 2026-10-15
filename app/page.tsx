import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { DiscPhoto } from "@/components/brand/Brand";
import { photos } from "@/lib/photos";
import { photoFor } from "@/lib/page-photos";
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

      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-12 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="min-w-0 lg:col-span-7">
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.04] text-navy sm:text-6xl lg:text-[4rem]">
              Country reports for Somali asylum appeals
            </h1>
            <div aria-hidden className="mt-8 flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-navy" />
              <span className="h-[3px] w-20 bg-peach" />
            </div>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-body">
              Independent expert evidence for FTT and Upper Tribunal work: clan protection, Al-Shabaab risk, FGM, and MOJ
              return analysis that goes beyond a generic CPIN extract.
            </p>
            <ul className="mt-8 space-y-3 text-[1.05rem] text-navy">
              {[
                "Practice Direction paragraph 10 and CPR Part 35 compliant reports",
                "MOJ, OA, July 2025 Mogadishu CPINs, and EUAA October 2025 guidance",
                "SLAB (Scotland) and LAA (England & Wales) funding packs",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: "linear-gradient(135deg, #29324d 0 50%, #ffc399 50% 100%)" }} />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#enquire" className="inline-flex min-h-[50px] items-center rounded-full bg-navy px-8 font-display text-sm font-bold text-white hover:bg-navy-deep">
                Send a case note
              </Link>
              <Link href="/how-to-instruct" className="inline-flex min-h-[50px] items-center rounded-full border-2 border-navy px-8 font-display text-sm font-bold text-navy hover:bg-pale">
                How it works
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <DiscPhoto photo={photos.mogadishuHarbour} priority aspect="aspect-[4/5]" sizes="(max-width: 1024px) 90vw, 460px" className="mx-auto w-full max-w-md" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="disc-label !text-peach">Enquire</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">Tell us the profile, the region and the hearing.</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">
              UK solicitors only. We match the brief to an expert who can address MOJ, CPIN and regional risk for that
              appellant.
            </p>
            <div className="mt-8 hidden lg:block">
              <DiscPhoto photo={photos.hargeisaMarket} aspect="aspect-[4/3]" sizes="420px" discs={false} />
            </div>
          </div>
          <aside id="enquire" className="scroll-mt-28 rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-white p-6 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.55)] sm:p-8 lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-navy">Send a case note</h2>
            <p className="mb-6 mt-1 text-body">UK solicitors only.</p>
            <ContactForm idPrefix="home" />
          </aside>
        </div>
      </section>

      <section id="evidence" className="scroll-mt-24 bg-[#F4F6FA] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#29324D]">Why this evidence matters</p>
          <h2 className="font-display mt-2 max-w-2xl text-3xl text-[#29324D] sm:text-4xl">
            Somalia is not one legal picture
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-[#4B5168]">
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
                d: "Experts engage MOJ, OA, 2025 CPINs, EUAA CG, and open-source security reporting, not a recycled country note.",
              },
              {
                t: "Both Legal Aid routes",
                d: "Packs for SLAB prior approval in Scotland and LAA prior authority in England and Wales, plus LSANI notes for NI.",
              },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#C6CCDC]">
                <h3 className="font-display text-xl text-[#29324D]">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5168]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profiles" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[#29324D]">Highest-volume work</p>
              <h2 className="font-display mt-2 text-3xl text-[#29324D] sm:text-4xl">Asylum profiles</h2>
            </div>
            <Link href="/asylum-profiles" className="text-sm font-semibold text-[#29324D] hover:text-[#1C2338]">
              All profiles
            </Link>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-8 lg:grid-cols-2">
            {featuredProfiles.map((p) => (
              <Link key={p!.slug} href={`/asylum-profiles/${p!.slug}`} className="group grid grid-cols-[7rem_1fr] items-center gap-5 sm:grid-cols-[9rem_1fr]">
                <div className="relative aspect-square overflow-hidden rounded-tr-[1.6rem] rounded-bl-[1.6rem] bg-navy">
                  <Image src={photoFor(p!.slug).src} alt={photoFor(p!.slug).alt} fill sizes="144px" className="object-cover transition duration-500 group-hover:scale-[1.05]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold text-navy">{p!.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{p!.content[0].split(". ")[0]}.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="regions" className="scroll-mt-24 overflow-hidden bg-[#E0E5EF] py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
          <DiscPhoto photo={photos.somaliCoast} aspect="aspect-[4/3]" sizes="(max-width: 1024px) 90vw, 460px" position="object-[50%_88%]" />
          <div>
            <p className="text-sm font-medium text-[#29324D]">Geography</p>
            <h2 className="font-display mt-2 text-3xl text-[#29324D] sm:text-4xl">Region changes the legal test</h2>
            <p className="mt-4 leading-relaxed text-[#4B5168]">
              A Mogadishu return analysis under MOJ is not interchangeable with Somaliland clan dynamics, Puntland
              security, or Article 15(c) arguments for south/central Somalia.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link href={`/regions/${r.slug}`} className="group flex items-center gap-3 rounded-tr-2xl rounded-bl-2xl bg-white p-2 pr-4 font-display font-semibold text-navy hover:ring-2 hover:ring-peach">
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-navy">
                      <Image src={photoFor(r.slug).src} alt="" fill sizes="56px" className="object-cover" />
                    </span>
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="funding" className="scroll-mt-24 bg-[#F4F6FA] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#29324D]">Legal Aid</p>
          <h2 className="font-display mt-2 text-3xl text-[#29324D] sm:text-4xl">Funding that matches the venue</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#4B5168]">
            Somali appeals are frequently run from Glasgow and Edinburgh. Those cases are usually SLAB-funded: not LAA.
            We set out what each board typically needs before chargeable work starts.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#C6CCDC]">
              <h3 className="font-display text-2xl text-[#29324D]">Scotland: SLAB</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5168]">{LEGAL_AID_SCOTLAND_SUMMARY}</p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#C6CCDC]">
              <h3 className="font-display text-2xl text-[#29324D]">England &amp; Wales: LAA</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5168]">{LEGAL_AID_ENGLAND_WALES_SUMMARY}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#4B5168]">
            See{" "}
            <Link href="/how-to-instruct" className="font-semibold text-[#29324D] hover:text-[#1C2338]">
              how it works
            </Link>{" "}
            for CV, scope, hours, and fee materials. Northern Ireland solicitors should confirm LSANI prior approval
            separately.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/moj-country-guidance"
              className="inline-flex min-h-[44px] items-center rounded-full bg-[#29324D] px-5 text-sm font-semibold text-white hover:bg-[#343E5C]"
            >
              MOJ guidance
            </Link>
            <Link
              href="/cpin-country-guidance"
              className="inline-flex min-h-[44px] items-center rounded-full border border-[#29324D] px-5 text-sm font-semibold text-[#29324D] hover:bg-white"
            >
              CPIN guidance
            </Link>
            <Link
              href="/guides"
              className="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-[#29324D] hover:text-[#1C2338]"
            >
              Solicitor guides
            </Link>
            <Link
              href="/what-is-a-somalia-expert-witness"
              className="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-[#29324D] hover:text-[#1C2338]"
            >
              What is an expert witness?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
