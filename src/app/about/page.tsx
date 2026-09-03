import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Droplet, Leaf, Medical, NoDrop } from '@/components/icons'
import {
  BRAND,
  COMPANY,
  DRUG_FACTS,
  RELIEVES,
} from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'About us',
  description: `Who makes ${BRAND.trademark} and why the formula reinforces the tear film's oil layer rather than adding more water. Preservative-free, MD-developed, from Brentwood, Tennessee.`,
}

const values = [
  {
    icon: Medical,
    title: 'Developed by an MD',
    body: 'Quell is a patented formula developed by a physician, built around how the tear film actually fails rather than around what is cheapest to bottle.',
  },
  {
    icon: NoDrop,
    title: 'Preservative-free, on purpose',
    body: 'Preservatives are a common source of irritation for people dosing several times a day. Quell contains none.',
  },
  {
    icon: Droplet,
    title: 'Targets the oil layer',
    body: 'Most drops top up the water layer. Quell reinforces the lipid layer above it, which is what slows evaporation down.',
  },
  {
    icon: Leaf,
    title: 'Natural ingredients',
    body: 'Emu oil, manuka honey, Dead Sea salt, and Terminalia chebula sit alongside the lubricants in the inactive ingredient list.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built for the layer other drops ignore"
        subtitle={`${BRAND.trademark} — ${BRAND.productType}, from ${COMPANY.name}.`}
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose-page">
          <h2>Why emu oil</h2>
          <p>
            Emu oil is an all natural oil used by the Aboriginal people of
            Australia for thousands of years to nourish and protect the body. In
            artificial tears, it provides soothing support of the tear film’s oil
            layer to reduce moisture loss. It is also where the name of our
            slogan comes from — {BRAND.slogan.toLowerCase()}
          </p>

          <h2>Who makes Quell</h2>
          {/* Deliberately just the entity and its address. The address is
              literal rather than {COMPANY.addressLines[1]} because that renders
              "Brentwood, TN 37027, USA" with a comma before USA, and this is
              the wording Phillip asked for. The legal name still comes from the
              constant so it cannot drift.

              The carton still prints "Inc"; /drug-facts keeps MANUFACTURER
              because that page reproduces the panel as printed. */}
          <p>{COMPANY.legalName} of Brentwood, TN 37027 USA.</p>

          <h2>What Quell is</h2>
          <p>
            Quell is an over-the-counter lubricating eye drop. You do not need a
            prescription. It is intended for use as a protectant against further
            irritation, or to relieve dryness of the eye.
          </p>

          <h2>What Quell is not</h2>
          <p>
            It is not a substitute for an eye exam, and this site does not
            provide medical advice. If you have eye pain, changes in vision,
            continued irritation or redness, or symptoms that persist beyond 72
            hours, stop use and see a doctor. Caution should be used in those
            with egg or bird allergies. For use in the eyes only.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>

        {/* Was a tall photo of the brand benefits card. The card is pure text,
            so it is set as real type here. */}
        <div className="mt-14 rounded-2xl border border-line bg-surface p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            At a glance
          </h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-white">Relieves</dt>
              <dd className="mt-1 text-muted">{RELIEVES.join(', ')}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Patented</dt>
              <dd className="mt-1 text-muted">MD-developed formula</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Preservative-free</dt>
              <dd className="mt-1 text-muted">
                No preservatives to irritate eyes you dose daily
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Lubricating eye drops</dt>
              <dd className="mt-1 text-muted">
                {BRAND.size} · {DRUG_FACTS.directions.toLowerCase()}
              </dd>
            </div>
          </dl>
        </div>

        <section
          id="contact"
          className="mt-14 scroll-mt-24 rounded-2xl border border-line bg-surface p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight">Contact us</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Questions about Quell? Get in touch.
          </p>

          <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-white">Phone</dt>
              <dd className="mt-1 text-muted">
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="text-brand-light hover:underline"
                >
                  {COMPANY.phone}
                </a>
                <br />
                {COMPANY.hours}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Online</dt>
              <dd className="mt-1 text-muted">
                <a
                  href={COMPANY.websiteHref}
                  rel="noreferrer noopener"
                  className="text-brand-light hover:underline"
                >
                  {COMPANY.website}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Mailing address</dt>
              <dd className="mt-1 text-muted">
                {COMPANY.name}
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-muted">
            For a medical emergency, call your local emergency number instead of
            contacting us.
          </p>

          <Link
            href="/#buy"
            className="mt-8 inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
          >
            Buy Quell
          </Link>
        </section>
      </div>
    </>
  )
}
