function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://somaliaexpert.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "somaliaexpert.com";
  }
}

export const LEAD_BRAND_NAME = "Somalia Expert";

export type SubmitLeadInput = {
  fullName: string;
  email: string;
  phone: string;
  organisation?: string;
  summary?: string;
};

export type SubmitLeadPayload = SubmitLeadInput & {
  caseProfile?: string;
  region?: string;
  proceedings?: string;
  funding?: string;
  deadline?: string;
  urgency?: string;
};

/** Webhook payload (n8n / Lead_notification_url) */
export function buildLeadWebhookPayload(input: SubmitLeadInput) {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim(),
    "Phone Number": input.phone.trim(),
    Firm: (input.organisation ?? "").trim(),
    "Case note": (input.summary ?? "").trim(),
    "Brand name": LEAD_BRAND_NAME,
    domain: getSiteDomain(),
  };
}

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    undefined
  );
}

/** Client-side: POST lead to /api/submit-lead */
export async function postSubmitLead(payload: SubmitLeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
