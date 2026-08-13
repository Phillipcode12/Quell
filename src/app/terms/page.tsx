import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, TemplateNotice } from '@/components/PageHero'
import {
  BRAND,
  COMPANY,
  DRUG_FACTS,
  MANUFACTURER,
} from '@/lib/product-content'

export const metadata: Metadata = {
  title: `Terms of Service — ${BRAND.name}`,
  description: `The terms governing your purchase and use of ${BRAND.trademark}.`,
}

const LAST_UPDATED = 'August 13, 2026'

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Last updated ${LAST_UPDATED}`}
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <TemplateNotice>
          This is boilerplate scaffolding, not enforceable terms. Selling an
          over-the-counter drug carries real obligations — FDA labeling and
          advertising rules, adverse event reporting, and state consumer
          protection law. Have counsel draft the real agreement before you take
          a live order.
        </TemplateNotice>

        <div className="prose-page">
          <p>
            These Terms govern your use of this website and your purchase of{' '}
            {BRAND.trademark}, sold by {COMPANY.name}. By creating an account or
            placing an order, you agree to them.
          </p>

          <h2>1. Not medical advice</h2>
          <p>
            {BRAND.name} is an over-the-counter lubricating eye drop. Nothing on
            this site is medical advice, diagnosis, or treatment, and using it
            does not create a doctor-patient relationship.{' '}
            <strong>
              If you have sudden vision loss, eye pain, or an eye injury, seek
              emergency care immediately.
            </strong>
          </p>

          <h2>2. Use the product as labeled</h2>
          <ul>
            <li>
              <strong>Uses:</strong> {DRUG_FACTS.uses}.
            </li>
            <li>
              <strong>Directions:</strong> {DRUG_FACTS.directions}.
            </li>
            <li>
              <strong>Warnings:</strong> {DRUG_FACTS.warnings}.
            </li>
            <li>
              Stop use and ask a doctor if you feel eye pain or changes in your
              vision, if irritation or redness continues, or if the condition
              worsens or persists for 72 hours.
            </li>
            <li>
              Keep out of reach of children. If swallowed, get medical help or
              contact a Poison Control Center immediately.
            </li>
          </ul>
          <p>
            Always read the Drug Facts panel on the carton before use. The panel
            printed on the product you receive controls if it ever differs from
            this website.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 18 years old to buy from this site and shipping
            to an address we serve. [List any states or countries you do not ship
            to.]
          </p>

          <h2>4. Accounts</h2>
          <p>
            You are responsible for the accuracy of the information you give us
            and for keeping your credentials secure. Tell us promptly if you
            suspect unauthorized access to your account.
          </p>

          <h2>5. Pricing and payment</h2>
          <ul>
            <li>Prices are in U.S. dollars and may change without notice.</li>
            <li>
              Payment is processed by Stripe. You authorize the charge when you
              submit an order.
            </li>
            <li>
              If we cannot fulfill an order, the authorization is released or
              refunded in full.
            </li>
          </ul>

          <h2>6. Shipping</h2>
          <p>
            Delivery estimates are estimates, not guarantees. Risk of loss passes
            on delivery to the address you provide. We are not responsible for
            delays caused by the carrier or by an incorrect address.
          </p>

          <h2>7. Returns</h2>
          <p>
            [State your return window and conditions here.] For health and safety
            reasons, opened eye drops generally cannot be returned or resold. If
            your order arrives damaged, incorrect, or with a broken tamper seal,
            contact us within [X] days and we will replace it at no charge.
          </p>

          <h2>8. Acceptable use</h2>
          <ul>
            <li>Do not resell or redistribute product bought from this site.</li>
            <li>
              Do not attempt to breach, scrape, or disrupt the service or its
              security.
            </li>
          </ul>

          <h2>9. Disclaimers and limitation of liability</h2>
          <p>
            The website is provided &quot;as is&quot; to the fullest extent
            permitted by law. Nothing in these Terms limits liability for death
            or personal injury caused by negligence, for fraud, or for any
            liability that cannot lawfully be excluded — including product
            liability.
          </p>
          <p>
            [Insert jurisdiction-appropriate limitation of liability, indemnity,
            and dispute resolution provisions. Note that arbitration and
            class-action waivers are restricted in some states.]
          </p>

          <h2>10. Intellectual property</h2>
          <p>
            {BRAND.trademark}, {BRAND.tagline}, the eye mark, and the site
            content are owned by {COMPANY.legalName}. You may not use them
            without written permission. The product is manufactured for{' '}
            {COMPANY.legalName} by {MANUFACTURER.name}.
          </p>

          <h2>11. Governing law</h2>
          <p>
            These Terms are governed by the laws of [State], without regard to
            conflict-of-laws rules.
          </p>

          <h2>12. Contact</h2>
          <p>
            {COMPANY.name}, {COMPANY.addressLines.join(', ')} —{' '}
            {COMPANY.phone} ({COMPANY.hours})
          </p>
        </div>

        <div className="mt-12 flex gap-4 border-t border-line pt-8 text-sm">
          <Link
            href="/privacy"
            className="font-medium text-brand-light hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/about"
            className="font-medium text-brand-light hover:underline"
          >
            About us
          </Link>
        </div>
      </div>
    </>
  )
}
