import { TESTIMONIALS, TESTIMONIALS_NOTE } from '@/lib/product-content'
import { Avatar, type AvatarSpec } from '@/components/home/Avatar'

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
 * The avatars are drawn, not photographed, and that distinction is the point.
 *
 * These are real customers quoted under substituted names. A photograph beside
 * a quote asserts "this is the person who said it" and would be untrue. A flat
 * cartoon face reads as an illustration, which is what it is — see Avatar.tsx.
 * The attributes come from what Phillip knows about the real customers.
 */

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
          {TESTIMONIALS.map((t) => (
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
                <Avatar
                  spec={t.avatar as AvatarSpec}
                  className="h-11 w-11 shrink-0 rounded-full ring-1 ring-line"
                />
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
