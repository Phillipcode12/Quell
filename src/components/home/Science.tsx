import { Droplet, Eye, ShieldCheck } from '@/components/icons'
import { SCIENCE } from '@/lib/product-content'

const icons = [Droplet, Eye, ShieldCheck]

export function Science() {
  return (
    <section id="science" className="scroll-mt-24 border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            The science
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Most drops replace water. Quell rebuilds the oil.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Your tear film is layered. When the outer oil layer thins, the water
            underneath evaporates faster than you can replace it — which is why
            watery drops can feel like they stop working within minutes.
          </p>
        </div>

        {/* Previously a tall photo of the brand info card. The card was pure
            text, so it is set as real type here instead. */}
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {SCIENCE.map((item, i) => {
            const Icon = icons[i] ?? Droplet
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
