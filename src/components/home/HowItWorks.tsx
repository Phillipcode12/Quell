import { Clipboard, Pharmacy, Truck } from '@/components/icons'

const steps = [
  {
    icon: Clipboard,
    step: '01',
    title: 'Send us your prescription',
    body: 'Upload a photo, or tell us your prescriber and current pharmacy and we handle the transfer for you.',
  },
  {
    icon: Pharmacy,
    step: '02',
    title: 'A pharmacist verifies it',
    body: 'We confirm the prescription with your prescriber and screen for interactions with anything else you take.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'It ships to your door',
    body: 'Your treatment arrives in two days, and refills go out automatically before you run out.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps, then it runs itself
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            No waiting rooms, no phone tag with the pharmacy counter. Set it up
            once and refills arrive on schedule.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, body }) => (
            <li
              key={step}
              className="relative rounded-2xl border border-line bg-surface p-7"
            >
              <span className="absolute right-6 top-6 font-mono text-3xl font-semibold text-accent">
                {step}
              </span>

              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
