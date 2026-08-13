import Image from 'next/image'
import { Droplet, Eye, ShieldCheck } from '@/components/icons'
import { SCIENCE } from '@/lib/product-content'

const icons = [Droplet, Eye, ShieldCheck]

export function Science() {
  return (
    <section id="science" className="scroll-mt-24 border-b border-line py-20">
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

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ul className="space-y-5">
            {SCIENCE.map((item, i) => {
              const Icon = icons[i] ?? Droplet
              return (
                <li
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-line bg-surface p-6"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/info-card-science.png"
              alt="Quell information card explaining how the formula reinforces the eye's lipid layer, supports a stable tear film, and soothes the ocular surface"
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 100vw, 460px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
