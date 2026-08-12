import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, TemplateNotice } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy — ClearSight Rx',
  description: 'How ClearSight Rx collects, uses, and protects your information.',
}

const LAST_UPDATED = 'August 12, 2026'

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated ${LAST_UPDATED}`}
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <TemplateNotice>
          This is boilerplate scaffolding for a development template. It has not
          been reviewed by a lawyer and is not compliant with HIPAA, state
          privacy laws, or the GDPR/CCPA as written. Handling prescription data
          makes you a covered entity or business associate — have counsel draft
          the real policy, and put a business associate agreement in place with
          every vendor that touches protected health information.
        </TemplateNotice>

        <div className="prose-page">
          <p>
            [Company Legal Name] (&quot;ClearSight Rx&quot;, &quot;we&quot;,
            &quot;us&quot;) operates the website at [example.com]. This policy
            explains what we collect, why we collect it, and what choices you
            have.
          </p>

          <h2>1. Information we collect</h2>

          <h3>Information you give us</h3>
          <ul>
            <li>
              <strong>Account details</strong> — your name, email address, and
              password. Passwords are stored only as a salted hash.
            </li>
            <li>
              <strong>Health information</strong> — your prescription, the
              prescriber who wrote it, and any medication or allergy history you
              share so a pharmacist can screen for interactions.
            </li>
            <li>
              <strong>Order and shipping details</strong> — what you ordered and
              where it should go.
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li>Device, browser, and IP address.</li>
            <li>Pages you visit and actions you take on the site.</li>
            <li>
              Cookies used to keep you signed in and to remember your cart.
            </li>
          </ul>

          <h3>Payment information</h3>
          <p>
            Card details are entered directly with our payment processor,
            Stripe, and are never transmitted through or stored on our servers.
            We retain only a payment reference and the outcome of the charge.
            See{' '}
            <a href="https://stripe.com/privacy" rel="noreferrer noopener">
              Stripe&apos;s privacy policy
            </a>
            .
          </p>

          <h2>2. How we use your information</h2>
          <ul>
            <li>To verify prescriptions and dispense medication safely.</li>
            <li>To process payments, shipping, and refills.</li>
            <li>To provide pharmacist counseling and respond to questions.</li>
            <li>
              To meet recordkeeping obligations that pharmacy and health law
              impose on us.
            </li>
            <li>To detect fraud and secure accounts.</li>
          </ul>
          <p>
            We do not sell your personal information, and we do not use your
            health information for advertising.
          </p>

          <h2>3. When we share information</h2>
          <ul>
            <li>
              <strong>Your prescriber and care team</strong>, to confirm or
              clarify a prescription.
            </li>
            <li>
              <strong>Service providers</strong> — payment processing, shipping,
              hosting — under contracts limiting their use of the data.
            </li>
            <li>
              <strong>Legal and regulatory bodies</strong>, where required by
              law, subpoena, or a state board of pharmacy.
            </li>
            <li>
              <strong>A successor entity</strong>, if the business is acquired,
              subject to this policy.
            </li>
          </ul>

          <h2>4. How long we keep it</h2>
          <p>
            Prescription and dispensing records are retained for the period your
            state board of pharmacy requires — commonly [5–10] years — even if
            you close your account. Marketing preferences and non-clinical
            account data are deleted on request.
          </p>

          <h2>5. Your choices</h2>
          <ul>
            <li>Access, correct, or export the information we hold about you.</li>
            <li>
              Request deletion of data we are not legally required to retain.
            </li>
            <li>Opt out of marketing email at any time.</li>
            <li>
              Depending on where you live, you may have additional rights under
              state or national privacy law.
            </li>
          </ul>
          <p>
            To exercise any of these, contact us at [privacy@example.com].
          </p>

          <h2>6. Security</h2>
          <p>
            We use encryption in transit and at rest, access controls, and audit
            logging on systems that hold health information. No system is
            perfectly secure, and we will notify you and the relevant regulators
            of a breach affecting your data as required by law.
          </p>

          <h2>7. Children</h2>
          <p>
            This service is intended for adults. We do not knowingly create
            accounts for anyone under 18 without a parent or guardian acting on
            their behalf.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We will post any changes here and update the date above. Material
            changes will be communicated by email before they take effect.
          </p>

          <h2>9. Contact</h2>
          <p>
            [Company Legal Name], [Street, City, ST ZIP] — [privacy@example.com]
            — [+1 (555) 000-0000]
          </p>
        </div>

        <div className="mt-12 flex gap-4 border-t border-line pt-8 text-sm">
          <Link href="/terms" className="font-medium text-brand hover:underline">
            Terms of Service
          </Link>
          <Link href="/about" className="font-medium text-brand hover:underline">
            About us
          </Link>
        </div>
      </div>
    </>
  )
}
