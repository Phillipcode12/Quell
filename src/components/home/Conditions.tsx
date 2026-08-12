import Link from 'next/link'
import { Droplet, Eye, Pharmacy, Sun } from '@/components/icons'

const conditions = [
  {
    icon: Eye,
    name: 'Glaucoma & ocular hypertension',
    body: 'Pressure-lowering drops including prostaglandin analogs and beta blockers.',
  },
  {
    icon: Droplet,
    name: 'Chronic dry eye',
    body: 'Immunomodulators that treat the inflammation suppressing tear production.',
  },
  {
    icon: Sun,
    name: 'Allergic conjunctivitis',
    body: 'Antihistamine and mast cell stabilizer drops for seasonal ocular itching.',
  },
  {
    icon: Pharmacy,
    name: 'Infection & inflammation',
    body: 'Antibiotic and corticosteroid drops for post-operative and acute care.',
  },
]

export function Conditions() {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              What we treat
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Care for the conditions behind the drops
            </h2>
          </div>

          <Link
            href="#catalog"
            className="text-sm font-semibold text-brand hover:underline"
          >
            See the full formulary →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map(({ icon: Icon, name, body }) => (
            <article
              key={name}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold leading-snug">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
