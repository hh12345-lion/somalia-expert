"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";

const inputClass =
  "w-full min-w-0 rounded-lg border border-[#D4D8DE] bg-white px-3 py-2.5 text-base text-[#1C1F24] placeholder:text-[#4A5058]/50 focus:border-[#7A3048] focus:outline-none focus:ring-2 focus:ring-[#7A3048]/20 min-h-[44px]";
const labelClass = "mb-1.5 block text-sm font-medium text-[#1C1F24]";

export function ContactForm({ idPrefix = "enquiry" }: { idPrefix?: string }) {
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

  const ids = {
    name: `${idPrefix}-name`,
    firm: `${idPrefix}-firm`,
    email: `${idPrefix}-email`,
    summary: `${idPrefix}-summary`,
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-4">
      <div className="min-w-0">
        <label className={labelClass} htmlFor={ids.name}>
          Name *
        </label>
        <input id={ids.name} name="name" required autoComplete="name" className={inputClass} />
      </div>
      <div className="min-w-0">
        <label className={labelClass} htmlFor={ids.firm}>
          Firm *
        </label>
        <input id={ids.firm} name="law_firm" required autoComplete="organization" className={inputClass} />
      </div>
      <div className="min-w-0">
        <label className={labelClass} htmlFor={ids.email}>
          Work email *
        </label>
        <input id={ids.email} type="email" name="email" required autoComplete="email" className={inputClass} />
      </div>
      <div className="min-w-0">
        <label className={labelClass} htmlFor={ids.summary}>
          Case note *
        </label>
        <textarea
          id={ids.summary}
          name="summary"
          required
          rows={4}
          placeholder="Profile, region, hearing date if known."
          className={`${inputClass} min-h-[96px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          Could not send. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#7A3048] px-6 text-base font-semibold text-white transition hover:bg-[#5E2438] disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
