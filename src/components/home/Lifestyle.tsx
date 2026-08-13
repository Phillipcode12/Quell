import Image from 'next/image'
import { Eye, Sun } from '@/components/icons'

const cases = [
  {
    icon: Eye,
    title: 'Screens',
    body: 'Long sessions in front of a monitor cut your blink rate, and the tear film evaporates while you stare.',
  },
  {
    icon: Sun,
    title: 'Wind, cold, and dry air',
    body: 'Altitude, air conditioning, and indoor heat all pull moisture off the ocular surface faster than you replace it.',
  },
]

export function Lifestyle() {
  return (
    <section className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Landscape crop keeps this in step with the sections around it —
              the source file is a tall portrait. */}
          <div className="overflow-hidden rounded-3xl border border-line">
            <Image
              src="/images/lifestyle-model-2.png"
              alt="A person outdoors in snowy mountains holding a bottle of Quell beside their eye"
              width={1086}
              height={1448}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-[300px] w-full object-cover object-top sm:h-[380px] lg:h-[440px]"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Where dry eye hits hardest
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the conditions that dry you out
            </h2>

            <ul className="mt-8 space-y-5">
              {cases.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 leading-relaxed text-muted">
              Because Quell is preservative-free, it is a drop you can reach for
              as often as the label allows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
