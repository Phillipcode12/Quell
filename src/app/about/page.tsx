import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ChatSupport, Clipboard, Lock, Pharmacy } from '@/components/icons'

export const metadata: Metadata = {
  title: 'About us — ClearSight Rx',
  description: 'Who we are and how we handle prescription ophthalmic care.',
}

const values = [
  {
    icon: Pharmacy,
    title: 'Pharmacists first',
    body: 'A licensed pharmacist reviews every order before it ships. That step is not automated away, and it is not optional.',
  },
  {
    icon: Clipboard,
    title: 'No prescription, no dispense',
    body: 'We fill valid prescriptions from licensed prescribers. We do not diagnose, and we do not sell prescription products without one.',
  },
  {
    icon: Lock,
    title: 'Privacy as a default',
    body: 'Health information is sensitive by nature. We collect the minimum needed to dispense safely and protect what we hold.',
  },
  {
    icon: ChatSupport,
    title: 'Reachable humans',
    body: 'Counseling is free and unlimited. If something about your treatment is unclear, talk to our team before you guess.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built around the pharmacist, not around the checkout"
        subtitle="ClearSight Rx is a mail-order model for prescription eye care — the same clinical checks as a counter pharmacy, without the trip."
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose-page">
          <p className="text-lg leading-relaxed text-muted">
            Chronic eye conditions are managed with drops that people take every
            day, sometimes for the rest of their lives. The medication is
            usually straightforward. Staying on it is the hard part — refills
            run out, pharmacies close early, and a missed month of pressure
            control can cost vision that does not come back.
          </p>

          <h2>What we do</h2>
          <p>
            We transfer your prescription, verify it with your prescriber, screen
            it against everything else you take, and ship it on a schedule that
            keeps you from running out. When something needs a pharmacist&apos;s
            judgment, a pharmacist makes the call.
          </p>

          <h2>What we do not do</h2>
          <p>
            We are not a substitute for an eye exam. We do not diagnose
            conditions, write prescriptions, or advise you to start or stop a
            medication your prescriber put you on. For sudden vision loss, eye
            pain, or injury, seek urgent care immediately.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>

        <section
          id="contact"
          className="mt-14 scroll-mt-20 rounded-2xl border border-line bg-surface p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight">Contact us</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Our pharmacy team answers messages seven days a week. Replace the
            placeholders below with your real pharmacy details before launch.
          </p>

          <dl className="mt-6 grid gap-6 sm:grid-cols-3 text-sm">
            <div>
              <dt className="font-semibold">Pharmacy support</dt>
              <dd className="mt-1 text-muted">[support@example.com]</dd>
            </div>
            <div>
              <dt className="font-semibold">Phone</dt>
              <dd className="mt-1 text-muted">[+1 (555) 000-0000]</dd>
            </div>
            <div>
              <dt className="font-semibold">Mailing address</dt>
              <dd className="mt-1 text-muted">
                [Legal entity name]
                <br />
                [Street, City, ST ZIP]
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-muted">
            For a medical emergency, call your local emergency number instead of
            contacting us.
          </p>

          <Link
            href="/#catalog"
            className="mt-8 inline-block rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark"
          >
            Browse the formulary
          </Link>
        </section>
      </div>
    </>
  )
}
