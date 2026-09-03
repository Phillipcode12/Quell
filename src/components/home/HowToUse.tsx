import { Clock, Droplet, ShieldCheck } from '@/components/icons'
import { DRUG_FACTS } from '@/lib/product-content'

const steps = [
  {
    icon: Droplet,
    step: '01',
    title: 'One drop, three times a day',
    body: DRUG_FACTS.directions + '.',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'Never touch the tip',
    body: 'Do not touch the tip of the bottle to any surface — including your eye or fingers — to avoid contaminating the solution.',
  },
  {
    icon: Clock,
    step: '03',
    title: 'Store it at room temperature',
    body: 'Store between 15° and 30°C (59° to 86°F). Quell appears as a milky brown solution; do not use it if the color changes.',
  },
]

export function HowToUse() {
  return (
    <section
      id="how-to-use"
      className="scroll-mt-32 lg:scroll-mt-24 border-b border-line bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            How to use
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple to use, every day
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, body }) => (
            <li
              key={step}
              className="relative rounded-2xl border border-line bg-surface-2 p-7"
            >
              <span className="absolute right-6 top-6 font-mono text-3xl font-semibold text-white/10">
                {step}
              </span>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-black">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
