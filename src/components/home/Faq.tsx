const faqs = [
  {
    q: 'Do I need a prescription?',
    a: 'Yes. Every product in our formulary is prescription-only. You can upload a photo of your prescription, or give us your prescriber and current pharmacy and we will request the transfer on your behalf.',
  },
  {
    q: 'What happens after I pay?',
    a: 'Payment reserves your order but does not release it. A licensed pharmacist verifies the prescription first — your order sits in review until that clears, and we will contact you if anything is missing.',
  },
  {
    q: 'Can you transfer a prescription from my current pharmacy?',
    a: 'In most cases, yes. Send us the pharmacy name and phone number during checkout and we will handle the request. Some controlled or compounded medications cannot be transferred.',
  },
  {
    q: 'Do you take insurance?',
    a: 'This template does not implement insurance billing. A production build would need a pharmacy benefit manager integration to run claims and apply copays at checkout.',
  },
  {
    q: 'How is my health information handled?',
    a: 'Prescription data is protected health information. It should be encrypted in transit and at rest, access-logged, and covered by a business associate agreement with every vendor that touches it. See the Privacy Policy.',
  },
  {
    q: 'What if I have a reaction or a question about my drops?',
    a: 'Message or call our pharmacists any day of the week. For a medical emergency, including sudden vision loss or eye pain, seek urgent care immediately rather than messaging us.',
  },
]

export function Faq() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions people ask first
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Still unsure about something? Our pharmacy team answers messages
            seven days a week.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
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
