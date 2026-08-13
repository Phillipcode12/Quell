import Image from 'next/image'
import { BRAND, EMU_OIL } from '@/lib/product-content'

export function EmuOil() {
  return (
    <section className="border-b border-line bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/box-side-emu-oil.png"
              alt="Side panel of the Quell carton explaining emu oil and showing the tear film before and after use"
              width={1086}
              height={1448}
              sizes="(max-width: 1024px) 100vw, 380px"
              className="h-auto w-full"
            />
          </div>

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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-surface-2 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Before
                </span>
                <p className="mt-3 leading-relaxed text-muted">
                  {EMU_OIL.before}
                </p>
              </div>
              <div className="rounded-2xl border border-brand/40 bg-brand/10 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  After
                </span>
                <p className="mt-3 leading-relaxed text-white">
                  {EMU_OIL.after}
                </p>
              </div>
            </div>

            <p className="mt-8 text-xl font-semibold text-brand">
              {BRAND.slogan}
            </p>

            <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-200">
              <strong className="font-semibold">Allergy warning:</strong> caution
              should be used in those with egg or bird allergies. For use in the
              eyes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
