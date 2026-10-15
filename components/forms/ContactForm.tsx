"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

const inputClass =
  "w-full min-w-0 rounded-lg border border-[#C6CCDC] bg-white px-3 py-2.5 text-base text-[#29324D] placeholder:text-[#4B5168]/50 focus:border-[#29324D] focus:outline-none focus:ring-2 focus:ring-[#29324D]/20 min-h-[44px]";
const labelClass = "mb-1.5 block text-sm font-medium text-[#29324D]";

export function ContactForm({ idPrefix = "enquiry" }: { idPrefix?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const summary = String(data.get("summary") ?? "").trim();
    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: "",
      summary,
      message: summary,
    };

    const ok = await postSubmitLead(payload);
    if (ok) {
      try {
        await submitNetlifyForm("contact", {
          name: String(data.get("name") ?? "").trim(),
          law_firm: String(data.get("law_firm") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          summary: String(data.get("summary") ?? "").trim(),
        });
      } catch {
        // Sheets/webhook already stored the enquiry; don't block the visitor.
      }
      router.push("/thank-you");
    } else setStatus("error");
  }

  const ids = {
    name: `${idPrefix}-name`,
    firm: `${idPrefix}-firm`,
    email: `${idPrefix}-email`,
    summary: `${idPrefix}-summary`,
  };

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="min-w-0 space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
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
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#29324D] px-6 text-base font-semibold text-white transition hover:bg-[#1C2338] disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
