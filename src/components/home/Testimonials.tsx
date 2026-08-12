import { Star } from '@/components/icons'

/**
 * PLACEHOLDER CONTENT — these are invented quotes for layout purposes only.
 *
 * Do not ship these. Published testimonials must come from real customers and
 * be substantiated: the FTC's endorsement rules (16 CFR Part 255) treat
 * fabricated or unsubstantiated reviews as deceptive advertising, and health
 * claims draw extra scrutiny. Replace every entry below with a real, permissioned
 * review before this goes anywhere near production.
 */
const testimonials = [
  {
    quote:
      'Refills used to mean a phone call and a drive across town every month. Now they just show up before I run out.',
    name: 'Sample Customer A',
    detail: 'Placeholder testimonial',
  },
  {
    quote:
      'A pharmacist actually called me back to talk through how to space out two different drops. That never happened at my old pharmacy.',
    name: 'Sample Customer B',
    detail: 'Placeholder testimonial',
  },
  {
    quote:
      'The prescription transfer took one message. I did not have to chase my eye doctor at all.',
    name: 'Sample Customer C',
    detail: 'Placeholder testimonial',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Social proof
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What this section is for
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Placeholder quotes, sized and styled so you can drop real reviews in
            later. See the note in the source before publishing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 border-t border-line pt-4 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="block text-muted">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
