import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, TemplateNotice } from '@/components/PageHero'
import { BRAND, COMPANY } from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${COMPANY.name} collects, uses, and protects your information.`,
}

const LAST_UPDATED = 'August 13, 2026'

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
          This is boilerplate scaffolding, not reviewed by a lawyer. Selling a
          consumer health product still triggers real obligations — state privacy
          laws such as the CCPA/CPRA, the FTC Health Breach Notification Rule,
          and consent rules for marketing email and SMS. Have counsel review this
          before launch.
        </TemplateNotice>

        <div className="prose-page">
          <p>
            {COMPANY.name} (&quot;{BRAND.name}&quot;, &quot;we&quot;,
            &quot;us&quot;) operates this website and sells {BRAND.trademark}.
            This policy explains what we collect, why, and what choices you have.
          </p>

          <h2>1. Information we collect</h2>

          <h3>Information you give us</h3>
          <ul>
            <li>
              <strong>Account details</strong> — your name, email address, and
              password. Passwords are stored only as a salted hash, never in
              plain text.
            </li>
            <li>
              <strong>Order and shipping details</strong> — what you ordered and
              where to send it.
            </li>
            <li>
              <strong>Anything you send us</strong> — questions by phone or email
              about the product.
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
            Card details are entered directly with our payment provider,
            Authorize.net, and never pass through or rest on our servers. We keep
            only a payment reference and the outcome of the charge. See{' '}
            <a
              href="https://www.authorize.net/about-us/privacy.html"
              rel="noreferrer noopener"
            >
              Authorize.net&apos;s privacy policy
            </a>
            .
          </p>

          <h2>2. How we use your information</h2>
          <ul>
            <li>To take payment and ship your order.</li>
            <li>To answer your questions about the product.</li>
            <li>
              To meet recordkeeping obligations that apply to over-the-counter
              drug sales, including adverse event reporting.
            </li>
            <li>To detect fraud and keep accounts secure.</li>
            <li>
              To send marketing email, only where you have opted in. You can opt
              out at any time.
            </li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h2>3. When we share information</h2>
          <ul>
            <li>
              <strong>Service providers</strong> — payment processing, shipping,
              hosting, email — under contracts limiting their use of the data.
            </li>
            <li>
              <strong>Regulators</strong>, where required by law, including
              adverse event reports to the FDA.
            </li>
            <li>
              <strong>A successor entity</strong>, if the business is acquired,
              subject to this policy.
            </li>
          </ul>

          <h2>4. How long we keep it</h2>
          <p>
            Order records are retained as long as needed for tax, accounting, and
            product safety recordkeeping. Marketing preferences and other
            non-essential account data are deleted on request. [Confirm the exact
            retention periods with counsel.]
          </p>

          <h2>5. Your choices</h2>
          <ul>
            <li>Access, correct, or export the information we hold about you.</li>
            <li>
              Request deletion of anything we are not legally required to keep.
            </li>
            <li>Opt out of marketing email at any time.</li>
            <li>
              Depending on where you live, you may have additional rights under
              state or national privacy law.
            </li>
          </ul>
          <p>
            To exercise any of these, call {COMPANY.phone} ({COMPANY.hours}) or
            write to us at the address below.
          </p>

          <h2>6. Security</h2>
          <p>
            We use encryption in transit, hashed passwords, and access controls.
            No system is perfectly secure, and we will notify you and the
            relevant regulators of a breach affecting your data as required by
            law.
          </p>

          <h2>7. Children</h2>
          <p>
            This site is intended for adults. We do not knowingly create accounts
            for anyone under 18. Keep the product out of reach of children.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We will post changes here and update the date above. Material changes
            will be communicated by email before they take effect.
          </p>

          <h2>9. Contact</h2>
          <p>
            {COMPANY.name}, {COMPANY.addressLines.join(', ')} —{' '}
            {COMPANY.phone} ({COMPANY.hours}) —{' '}
            <a href={COMPANY.websiteHref} rel="noreferrer noopener">
              {COMPANY.website}
            </a>
          </p>
        </div>

        <div className="mt-12 flex gap-4 border-t border-line pt-8 text-sm">
          <Link
            href="/terms"
            className="font-medium text-brand-light hover:underline"
          >
            Terms of Service
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
