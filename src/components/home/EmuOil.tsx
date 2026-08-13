import { TearFilmDiagram } from '@/components/TearFilmDiagram'
import { BRAND, EMU_OIL } from '@/lib/product-content'

export function EmuOil() {
  return (
    <section className="border-b border-line bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Emu oil
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              The reason it’s called giving your dry eye the bird
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              {EMU_OIL.body}
            </p>

            <p className="mt-7 text-xl font-semibold text-brand">
              {BRAND.slogan}
            </p>

            <p className="mt-7 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-200">
              <strong className="font-semibold">Allergy warning:</strong> caution
              should be used in those with egg or bird allergies. For use in the
              eyes only.
            </p>
          </div>

          {/* Redrawn as SVG — this was a photo of the carton's side panel. */}
          <TearFilmDiagram
            beforeLabel={EMU_OIL.before}
            afterLabel={EMU_OIL.after}
          />
        </div>
      </div>
    </section>
  )
}
