import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, TemplateNotice } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service — ClearSight Rx',
  description: 'The terms governing your use of ClearSight Rx.',
}

const LAST_UPDATED = 'August 12, 2026'

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
          This is boilerplate scaffolding for a development template, not
          enforceable terms. Selling prescription medication carries obligations
          that vary by state — licensure, dispensing rules, return restrictions,
          and telehealth requirements. Have counsel draft the real agreement
          before accepting a single order.
        </TemplateNotice>

        <div className="prose-page">
          <p>
            These Terms govern your use of the website and services operated by
            [Company Legal Name] (&quot;ClearSight Rx&quot;, &quot;we&quot;,
            &quot;us&quot;). By creating an account or placing an order, you
            agree to them.
          </p>

          <h2>1. Not medical advice</h2>
          <p>
            ClearSight Rx is a pharmacy service. Nothing on this site is medical
            advice, diagnosis, or treatment, and using it does not create a
            physician-patient relationship. Always follow the directions of your
            prescriber. <strong>If you have sudden vision loss, eye pain, or an
            eye injury, seek emergency care immediately.</strong>
          </p>

          <h2>2. Prescription requirement</h2>
          <ul>
            <li>
              Every product we dispense requires a valid prescription from a
              prescriber licensed in your state.
            </li>
            <li>
              Payment does not complete an order. Orders are held until a
              licensed pharmacist verifies the prescription, and we may contact
              your prescriber to confirm it.
            </li>
            <li>
              We may refuse or cancel any order where the prescription cannot be
              verified, appears altered, has expired, has no refills remaining,
              or where dispensing would be clinically inappropriate.
            </li>
            <li>
              Submitting a prescription that is not yours, or that has been
              forged or altered, is a crime and will be reported.
            </li>
          </ul>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 18 years old and shipping to a state where we
            hold an active pharmacy license. Prescriptions for minors must be
            managed by a parent or legal guardian.
          </p>

          <h2>4. Accounts</h2>
          <p>
            You are responsible for the accuracy of the health information you
            give us and for keeping your credentials secure. Incomplete or
            inaccurate medication and allergy history can compromise the
            interaction screening a pharmacist performs. Tell us promptly if you
            suspect unauthorized access.
          </p>

          <h2>5. Pricing and payment</h2>
          <ul>
            <li>Prices are in U.S. dollars and may change without notice.</li>
            <li>
              Payment is processed by Stripe. You authorize the charge when you
              submit an order.
            </li>
            <li>
              If a prescription cannot be verified, the authorization is
              released or refunded in full.
            </li>
            <li>
              [Describe insurance and copay handling, or state that the service
              is cash-pay only.]
            </li>
          </ul>

          <h2>6. Shipping</h2>
          <p>
            Delivery estimates begin when a pharmacist releases the order, not
            when payment clears. Risk of loss passes on delivery to the address
            you provide. We are not responsible for delays caused by the carrier
            or by an incorrect address.
          </p>

          <h2>7. Returns</h2>
          <p>
            <strong>
              Dispensed prescription medication cannot be returned, resold, or
              restocked once it leaves the pharmacy.
            </strong>{' '}
            This is a matter of law in most states, not a store policy. If your
            order arrives damaged, incorrect, or compromised in transit, contact
            us within [X] days and we will replace it at no charge.
          </p>

          <h2>8. Acceptable use</h2>
          <ul>
            <li>Do not misrepresent your identity or medical history.</li>
            <li>Do not resell or redistribute medication dispensed to you.</li>
            <li>
              Do not attempt to breach, scrape, or disrupt the service or its
              security.
            </li>
          </ul>

          <h2>9. Disclaimers and limitation of liability</h2>
          <p>
            The service is provided &quot;as is&quot; to the fullest extent
            permitted by law. Nothing in these Terms limits liability for death
            or personal injury caused by negligence, for fraud, or for any
            liability that cannot lawfully be excluded — including professional
            liability arising from pharmacy practice.
          </p>
          <p>
            [Insert jurisdiction-appropriate limitation of liability, indemnity,
            and dispute resolution provisions. Note that arbitration and
            class-action waivers are restricted in some states.]
          </p>

          <h2>10. Governing law</h2>
          <p>
            These Terms are governed by the laws of [State], without regard to
            conflict-of-laws rules.
          </p>

          <h2>11. Changes</h2>
          <p>
            We may update these Terms and will post the revised version here
            with a new date. Continued use after changes take effect means you
            accept them.
          </p>

          <h2>12. Contact</h2>
          <p>
            [Company Legal Name], [Street, City, ST ZIP] — [legal@example.com] —
            [+1 (555) 000-0000]
          </p>
        </div>

        <div className="mt-12 flex gap-4 border-t border-line pt-8 text-sm">
          <Link
            href="/privacy"
            className="font-medium text-brand hover:underline"
          >
            Privacy Policy
          </Link>
          <Link href="/about" className="font-medium text-brand hover:underline">
            About us
          </Link>
        </div>
      </div>
    </>
  )
}
