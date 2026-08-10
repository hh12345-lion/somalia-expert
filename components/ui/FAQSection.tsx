import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-8 sm:py-12">
      <h2 className="font-display mb-6 break-words text-2xl text-[#0F2420] sm:mb-8 sm:text-3xl">{title}</h2>
      <div className="divide-y divide-[#B8C9C4] border-y border-[#B8C9C4]">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-6">
            <span className="font-display text-sm text-[#E07050]">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <h3 className="break-words text-base font-semibold text-[#0F2420] sm:text-lg">{faq.question}</h3>
              <p className="prose-safe mt-3 text-sm leading-relaxed text-[#3A4542] sm:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
