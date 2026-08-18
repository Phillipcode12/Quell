import Image from 'next/image'
import { Eye, Sun } from '@/components/icons'

const cases = [
  {
    icon: Eye,
    title: 'Screens',
    body: 'Concentrating on a screen cuts how often you blink, and your tear film evaporates while you stare.',
  },
  {
    icon: Sun,
    title: 'Dry air, indoors and out',
    body: 'Wind and altitude outdoors, air conditioning and central heat indoors — all of it pulls moisture off your eyes faster than you can replace it.',
  },
]

export function Lifestyle() {
  return (
    <section className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 4:5 is close to the file's native 3:4, so the crop takes only a
              sliver off the top and bottom rather than slicing the subject.
              Capped width keeps it in proportion with the copy beside it. */}
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-line">
            <Image
              src="/images/lifestyle-model-2.png"
              alt="A person outdoors in snowy mountains holding a bottle of Quell beside their eye"
              width={1086}
              height={1448}
              sizes="(max-width: 1024px) 100vw, 448px"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Dry eye relief
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
              Preservative-free eye drops lack harsh chemicals that can
              irritate, inflame, or damage the delicate surface of your eye over
              time. They provide pure relief.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
