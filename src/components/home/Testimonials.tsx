import { TESTIMONIALS, TESTIMONIALS_NOTE } from '@/lib/product-content'

/**
 * Social proof, and until now the biggest gap on the site.
 *
 * The shop has been indexed since 2026-09-01, so strangers arrive with no
 * reason to trust an unknown brand selling a $29.99 over-the-counter drug.
 * Nothing else on the page is another person saying they used it.
 *
 * **Placed before the buy panel, not after.** Someone who has just read the
 * science is deciding; the quotes belong between the argument and the price
 * rather than after the ask, where only people who already scrolled past would
 * see them.
 *
 * No star ratings and no counts. There is no rating system behind them, and a
 * row of five-star glyphs would be decoration standing in for data that does
 * not exist — the same reason `structured-data.ts` publishes no
 * `aggregateRating`.
 */

/**
 * The avatars are initials, deliberately, and this should not be changed to
 * pictures of people without a decision being made about it.
 *
 * These are real customers quoted with permission, under substituted names. A
 * photograph or a drawn face beside a quote says "this is the person who said
 * it" — and it would not be. The real customer looks like whatever they look
 * like, and inventing an appearance from an alias someone else chose invents a
 * person twice over. On a site selling a regulated drug, where a testimonial is
 * already a claim we are making, a fabricated face is the wrong kind of detail
 * to add: it is the part a reader would take as evidence.
 *
 * Initials are the ordinary convention for exactly this situation, carry the
 * warmth and colour a bare quote lacks, and assert nothing.
 */
const AVATAR_TONES = [
  'border-brand/40 bg-brand/10 text-brand',
  'border-amber-400/40 bg-amber-400/10 text-amber-300',
  'border-violet-400/40 bg-violet-400/10 text-violet-300',
  'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
]

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-b border-line bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          What people say
        </span>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-surface-2 p-6"
            >
              {/* A quotation mark rather than stars: it says "someone said
                  this" without implying a score nothing here measures. */}
              <span
                aria-hidden="true"
                className="font-serif text-4xl leading-none text-brand/50"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-white">
                {t.quote}
              </blockquote>

              <div className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-semibold ${
                    AVATAR_TONES[i % AVATAR_TONES.length]
                  }`}
                >
                  {t.name.charAt(0)}
                </span>
                <p className="text-sm font-medium text-white">{t.name}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted">{TESTIMONIALS_NOTE}</p>
      </div>
    </section>
  )
}
