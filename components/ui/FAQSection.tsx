import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-8 sm:py-12">
      <h2 className="font-display mb-6 break-words text-2xl text-[#29324D] sm:mb-8 sm:text-3xl">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-2xl bg-white p-5 ring-1 ring-[#C6CCDC] sm:p-6">
            <h3 className="break-words text-base font-semibold text-[#29324D] sm:text-lg">{faq.question}</h3>
            <p className="prose-safe mt-3 text-sm leading-relaxed text-[#4B5168] sm:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
