import { TearFilmDiagram } from '@/components/TearFilmDiagram'
import { Droplet, Eye, ShieldCheck } from '@/components/icons'
import { BRAND, EMU_OIL, SCIENCE } from '@/lib/product-content'

const icons = [Droplet, Eye, ShieldCheck]

/**
 * Merged from the old Science and EmuOil sections — both explained the same
 * mechanism, so they read as one argument instead of two.
 */
export function WhyItWorks() {
  return (
    <section
      id="science"
      className="scroll-mt-24 border-b border-line bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Why it works
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

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {SCIENCE.map((item, i) => {
            const Icon = icons[i] ?? Droplet
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-surface-2 p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Emu oil
            </span>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              The reason it’s called giving your dry eye the bird
            </h3>

            <p className="mt-5 leading-relaxed text-muted">{EMU_OIL.body}</p>

            <p className="mt-6 text-lg font-semibold text-brand">
              {BRAND.slogan}
            </p>

            <p className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-200">
              <strong className="font-semibold">Allergy warning:</strong> caution
              should be used in those with egg or bird allergies. For use in the
              eyes only.
            </p>
          </div>

          <TearFilmDiagram
            beforeLabel={EMU_OIL.before}
            afterLabel={EMU_OIL.after}
          />
        </div>
      </div>
    </section>
  )
}
