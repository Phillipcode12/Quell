import { FAQS } from '@/lib/product-content'

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-line py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions people ask first
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Still unsure about something? Reach out and we will help.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                {faq.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
