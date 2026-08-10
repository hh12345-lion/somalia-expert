"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";

const inputClass =
  "w-full min-w-0 border-0 border-b border-[#B8C9C4] bg-transparent px-0 py-3 text-base text-[#0F2420] placeholder:text-[#3A4542]/55 focus:border-[#E07050] focus:outline-none focus:ring-0 min-h-[44px]";
const labelClass = "mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1F5C54]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: "",
      summary: String(data.get("summary") ?? "").trim(),
    };

    const ok = await postSubmitLead(payload);
    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-8">
      <p className="text-sm leading-relaxed text-[#3A4542]">
        Four fields. We follow up by email with availability, fees, and SLAB/LAA notes if needed.
      </p>

      <div className="min-w-0 space-y-6">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="name">
            Your name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Full name" />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="law_firm">
            Firm *
          </label>
          <input
            id="law_firm"
            name="law_firm"
            required
            autoComplete="organization"
            className={inputClass}
            placeholder="Law firm"
          />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="email">
            Work email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="name@firm.co.uk"
          />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="summary">
            Case note *
          </label>
          <textarea
            id="summary"
            name="summary"
            required
            rows={4}
            placeholder="Profile, region, hearing date if known — keep it brief."
            className={`${inputClass} min-h-[100px] resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>{" "}
          instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-[#E07050] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#C45A3C] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send instruction"}
      </button>
    </form>
  );
}
