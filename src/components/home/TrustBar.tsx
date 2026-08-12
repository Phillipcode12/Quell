import { ChatSupport, Lock, Pharmacy, Truck } from '@/components/icons'

const items = [
  {
    icon: Pharmacy,
    title: 'Licensed pharmacy',
    body: 'Every order is checked by a licensed pharmacist before it ships.',
  },
  {
    icon: Truck,
    title: 'Free two-day shipping',
    body: 'Discreet, temperature-aware packaging on all orders.',
  },
  {
    icon: ChatSupport,
    title: 'Talk to a pharmacist',
    body: 'Free counseling by message or phone, seven days a week.',
  },
  {
    icon: Lock,
    title: 'Private by design',
    body: 'Your health information is encrypted in transit and at rest.',
  },
]

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-brand">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
