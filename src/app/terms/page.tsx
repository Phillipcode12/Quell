import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { BRAND, COMPANY, DRUG_FACTS } from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms governing your purchase and use of ${BRAND.trademark}.`,
}

const LAST_UPDATED = 'August 18, 2026'

export default function TermsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Last updated ${LAST_UPDATED}`}
      />

      <div className="mx-auto max-w-3xl px-6 py-12">

        <div className="prose-page prose-fineprint">
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
            You must be at least 18 years old to buy from this site. We ship
            within the United States only.
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
              Payment is processed by Authorize.net. You authorize the charge
              when you submit an order.
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
            Unopened {BRAND.trademark} in its original packaging can be returned
            within 30 days of delivery for a refund of the product price.
            Original shipping is not refunded. For health and safety reasons,
            opened eye drops cannot be returned or resold — a bottle that has
            left our control cannot be confirmed sterile. If your order arrives
            damaged, incorrect, or with a broken tamper seal, contact us within
            30 days and we will replace it at no charge.
          </p>

          <h2>8. Acceptable use</h2>
          <p>
            Do not attempt to breach, scrape, or disrupt the service or its
            security.
          </p>

          <h2>9. Suspending or closing an account</h2>
          <p>
            We may suspend or close an account that breaches these Terms, that
            we reasonably believe is being used fraudulently, or where the law
            requires it. Where the circumstances allow, we will tell you why. You
            can close your account at any time by contacting us. Closing an
            account does not cancel an order already placed, and does not affect
            our obligation to fulfill that order or refund it.
          </p>

          <h2>10. Links to other sites</h2>
          <p>
            This site links to services we do not operate, including our payment
            provider. We link to them for your convenience and have no control
            over their content or their practices. When you are on those sites,
            their terms and privacy policies apply rather than ours.
          </p>

          <h2>11. Accuracy of this site</h2>
          <p>
            We take care to keep this site accurate, but we do not promise it is
            free of errors. Prices, stock levels, and descriptions can be wrong
            or out of date. Where a listing is wrong we may correct it, or cancel
            the order and refund you in full, before it ships.
          </p>

          <h2>12. Disclaimers and limitation of liability</h2>
          <p>
            This website is provided &quot;as is.&quot; We do not warrant that it
            will be accurate, uninterrupted, or error-free.
          </p>
          <p>
            To the fullest extent permitted by law, and except where these Terms
            say otherwise, we disclaim the implied warranties of merchantability
            and fitness for a particular purpose. {BRAND.trademark} is an
            over-the-counter lubricating eye drop and is not warranted to treat,
            cure, or prevent any condition beyond the uses stated in its Drug
            Facts panel.
          </p>
          <p>
            To the fullest extent permitted by law, we are not liable for
            indirect, incidental, or consequential losses arising from this
            website or your purchase, and our total liability for any claim will
            not exceed the greater of the amount you paid for the product or
            $100.
          </p>
          <p>
            Nothing in these Terms limits or excludes liability for death or
            personal injury caused by negligence, for fraud or fraudulent
            misrepresentation, for product liability, or for anything else that
            cannot lawfully be limited. If any part of this section is
            unenforceable where you live, the rest still applies.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            If your breach of these Terms leads a third party to bring a claim
            against {COMPANY.legalName}, you agree to cover the reasonable costs
            and damages that result. This does not apply where the claim arises
            from our own negligence, from a defect in the product, or from
            anything these Terms cannot lawfully shift onto you.
          </p>

          <h2>14. Intellectual property</h2>
          <p>
            {BRAND.trademark}, {BRAND.tagline}, the eye mark, and the site
            content are owned by {COMPANY.legalName}. You may not use them
            without written permission.
          </p>

          <h2>15. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Tennessee,
            without regard to conflict-of-laws rules.
          </p>

          <h2>16. Entire agreement, severability, and waiver</h2>
          <p>
            These Terms and our Privacy Policy are the whole agreement between
            you and {COMPANY.legalName} about this site and your purchase, and
            they replace anything said beforehand. If a court finds part of them
            unenforceable, the rest still applies. If we do not enforce a term
            straight away, we have not given up the right to enforce it later.
          </p>

          <h2>17. Contact</h2>
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
