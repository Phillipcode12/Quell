import 'server-only'
import { BRAND, COMPANY } from '@/lib/product-content'
import { carrierName, trackingUrl } from '@/lib/carriers'
import { appUrl } from '@/lib/site'

/**
 * Minimal transactional mail.
 *
 * Uses Resend when RESEND_API_KEY is set; otherwise prints the message to the
 * server console so the whole flow still works locally without an account.
 * Swap `deliver` for SendGrid/Postmark/SES if you prefer — nothing else needs
 * to change.
 */

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY)
}

function fromAddress() {
  return process.env.EMAIL_FROM ?? `${BRAND.name} <onboarding@resend.dev>`
}

/**
 * Where a customer's reply goes, which is not where the mail is sent from.
 *
 * The From address has to be on a domain verified with the mail provider —
 * quelldrop.com — because that is what SPF and DKIM authenticate. Reply-To
 * carries no such requirement: it is a header saying "answer to this", and it
 * may be any address on any domain. Nothing about meibum.com's DNS is involved
 * in setting it, which is the whole point: BlephEx's live SPF record is never
 * edited.
 *
 * This matters because quelldrop.com has no MX record, so it cannot receive
 * mail. Without a Reply-To, a customer answering their receipt is writing to a
 * mailbox that does not exist and nobody ever learns they tried.
 */
function replyToAddress() {
  const configured = process.env.EMAIL_REPLY_TO?.trim()
  return configured && configured.length > 0 ? configured : null
}

type Message = {
  to: string
  subject: string
  html: string
  text: string
}

async function deliver(message: Message) {
  if (!isEmailConfigured()) {
    console.info(
      [
        '',
        '─── EMAIL (not sent — RESEND_API_KEY is unset) ───',
        `To:      ${message.to}`,
        ...(replyToAddress() ? [`Reply-To: ${replyToAddress()}`] : []),
        `Subject: ${message.subject}`,
        '',
        message.text,
        '──────────────────────────────────────────────────',
        '',
      ].join('\n'),
    )
    return { delivered: false as const }
  }

  const replyTo = replyToAddress()

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress(),
      to: [message.to],
      // Omitted rather than sent empty when unset: an empty reply_to is not
      // the same as no reply_to, and some providers reject it.
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject: message.subject,
      html: message.html,
      text: message.text,
    }),
  })

  if (!res.ok) {
    // Never throw into a webhook or auth route over a mail failure.
    console.error(`[email] send failed (${res.status}): ${await res.text()}`)
    return { delivered: false as const }
  }

  return { delivered: true as const }
}

/** Light-background shell — dark email templates render badly in many clients. */
function layout(heading: string, bodyHtml: string) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#0f1b2d;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">
      <tr>
        <td style="background:#060606;padding:24px;text-align:center;">
          <div style="font-size:26px;font-weight:bold;color:#ffffff;letter-spacing:-0.5px;">${BRAND.name}</div>
          <div style="font-size:10px;letter-spacing:3px;color:#00a7b5;text-transform:uppercase;margin-top:6px;">${BRAND.tagline}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 24px;">
          <h1 style="margin:0 0 16px;font-size:20px;">${heading}</h1>
          ${bodyHtml}
        </td>
      </tr>
      <tr>
        <td style="padding:18px 24px;background:#f4f6f8;font-size:12px;color:#5a6b83;line-height:1.6;">
          ${COMPANY.name}, ${COMPANY.addressLines.join(', ')}<br />
          Questions? Call ${COMPANY.phone} (${COMPANY.hours}).<br /><br />
          ${BRAND.name} is an over-the-counter lubricating eye drop. Read the
          Drug Facts panel before use.
        </td>
      </tr>
    </table>
  </body>
</html>`
}

const usd = (cents: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    cents / 100,
  )

type OrderForEmail = {
  id: string
  /// The reference the customer sees everywhere: email, gateway, support call.
  orderNumber: string
  /// Read from the order, not the account — guest orders have no account, and
  /// a signed-in buyer may change their address later.
  email: string
  subtotalCents: number
  shippingCents: number
  totalCents: number
  shippingName: string | null
  shippingLine1: string | null
  shippingLine2: string | null
  shippingCity: string | null
  shippingState: string | null
  shippingPostalCode: string | null
  shippingCountry?: string | null
  createdAt?: Date
  trackingCarrier?: string | null
  trackingNumber?: string | null
  items: { quantity: number; unitPriceCents: number; product: { name: string } }[]
}

/** Greeting name, taken from the shipping address so guests are addressed too. */
function firstName(order: OrderForEmail) {
  const first = order.shippingName?.trim().split(/\s+/)[0]
  return first && first.length > 0 ? first : 'there'
}

function addressBlock(order: OrderForEmail) {
  const lines = [
    order.shippingName,
    order.shippingLine1,
    order.shippingLine2,
    [order.shippingCity, order.shippingState].filter(Boolean).join(', ') +
      (order.shippingPostalCode ? ` ${order.shippingPostalCode}` : ''),
  ].filter((l) => l && l.trim())
  return lines
}

export async function sendOrderConfirmationEmail(order: OrderForEmail) {
  const ref = order.orderNumber
  const itemLines = order.items.map(
    (i) => `${i.quantity} × ${i.product.name} — ${usd(i.unitPriceCents * i.quantity)}`,
  )
  const address = addressBlock(order)

  const html = layout(
    `Thanks, ${firstName(order)} — your order is confirmed`,
    `
      <p style="margin:0 0 16px;line-height:1.6;">
        Order <strong>#${ref}</strong> is paid and being prepared. We'll email
        you again when it ships.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #dfe6ef;margin-top:8px;">
        ${order.items
          .map(
            (i) => `<tr>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f6;">${i.quantity} × ${i.product.name}</td>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f6;text-align:right;">${usd(i.unitPriceCents * i.quantity)}</td>
            </tr>`,
          )
          .join('')}
        <tr>
          <td style="padding:8px 0;color:#5a6b83;">Subtotal</td>
          <td style="padding:8px 0;text-align:right;color:#5a6b83;">${usd(order.subtotalCents)}</td>
        </tr>
        <tr>
          <td style="padding:2px 0;color:#5a6b83;">Shipping</td>
          <td style="padding:2px 0;text-align:right;color:#5a6b83;">${order.shippingCents === 0 ? 'Free' : usd(order.shippingCents)}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;font-weight:bold;border-top:1px solid #dfe6ef;">Total</td>
          <td style="padding:10px 0;text-align:right;font-weight:bold;border-top:1px solid #dfe6ef;">${usd(order.totalCents)}</td>
        </tr>
      </table>
      ${
        address.length
          ? `<p style="margin:20px 0 0;line-height:1.6;"><strong>Shipping to</strong><br />${address.join('<br />')}</p>`
          : ''
      }
      <p style="margin:24px 0 0;">
        <a href="${appUrl()}/orders?number=${ref}" style="background:#00a7b5;color:#000000;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;display:inline-block;">Track your order</a>
      </p>
    `,
  )

  const text = [
    `Thanks, ${firstName(order)} — your order is confirmed.`,
    ``,
    `Order #${ref}`,
    ...itemLines,
    `Subtotal: ${usd(order.subtotalCents)}`,
    `Shipping: ${order.shippingCents === 0 ? 'Free' : usd(order.shippingCents)}`,
    `Total: ${usd(order.totalCents)}`,
    ...(address.length ? ['', 'Shipping to:', ...address] : []),
    ``,
    // Not /account: guests have no account, and this link has to work for them.
    `Track your order: ${appUrl()}/orders?number=${ref}`,
  ].join('\n')

  return deliver({
    to: order.email,
    subject: `Your ${BRAND.name} order #${ref} is confirmed`,
    html,
    text,
  })
}

export async function sendShippingNoticeEmail(order: OrderForEmail) {
  const ref = order.orderNumber
  const address = addressBlock(order)

  // Tracking is optional on purpose: an order must always be markable as
  // shipped even when the number is not to hand. Without it this reads exactly
  // as it did before.
  const number = order.trackingNumber?.trim() || null
  const carrier = carrierName(order.trackingCarrier)
  const url = trackingUrl(order.trackingCarrier, number)

  const trackingHtml = number
    ? `<p style="margin:0 0 16px;line-height:1.6;">
         <strong>Tracking${carrier ? ` (${carrier})` : ''}</strong><br />
         ${
           url
             ? `<a href="${url}" style="color:#00707a;">${number}</a>`
             : // No link for an unrecognised carrier — a link to the wrong
               // carrier's site reads as "your parcel is lost".
               number
         }
       </p>`
    : ''

  const html = layout(
    'Your order is on its way',
    `
      <p style="margin:0 0 16px;line-height:1.6;">
        Order <strong>#${ref}</strong> has shipped.
      </p>
      ${trackingHtml}
      ${
        address.length
          ? `<p style="margin:0 0 16px;line-height:1.6;"><strong>Shipping to</strong><br />${address.join('<br />')}</p>`
          : ''
      }
      <p style="margin:0;line-height:1.6;color:#5a6b83;">
        Apply 1 drop 3 times per day in each eye. Do not touch the tip of the
        bottle to any surface.
      </p>
    `,
  )

  const text = [
    `Your ${BRAND.name} order #${ref} has shipped.`,
    ...(number
      ? ['', `Tracking${carrier ? ` (${carrier})` : ''}: ${number}`, ...(url ? [url] : [])]
      : []),
    ...(address.length ? ['', 'Shipping to:', ...address] : []),
    '',
    'Apply 1 drop 3 times per day in each eye.',
  ].join('\n')

  return deliver({
    to: order.email,
    subject: `Your ${BRAND.name} order #${ref} has shipped`,
    html,
    text,
  })
}

/**
 * Tells the office an order needs packing.
 *
 * Internal, not customer-facing, so it is written to be *worked from*: it
 * carries everything needed to pick, pack and post without opening the admin
 * screen, and prints as a usable packing slip.
 *
 * Sent to every fulfilment address individually rather than as one message
 * with several recipients, so nobody can reply-all to a customer thread by
 * accident and no address is disclosed to the others.
 */
export async function sendNewOrderNotificationEmail(
  order: OrderForEmail,
  recipients: string[],
) {
  if (recipients.length === 0) {
    console.error(
      `[email] order ${order.orderNumber} is paid but no fulfilment recipient is configured. ` +
        `Set FULFILMENT_EMAILS (or ADMIN_EMAILS) — nobody has been told to ship it.`,
    )
    return { delivered: false as const }
  }

  const ref = order.orderNumber
  const address = addressBlock(order)
  const placed = order.createdAt
    ? order.createdAt.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    : null
  const units = order.items.reduce((sum, i) => sum + i.quantity, 0)

  const html = layout(
    `Pack order #${ref}`,
    `
      <p style="margin:0 0 16px;line-height:1.6;">
        <strong>${units} unit${units === 1 ? '' : 's'}</strong> to pack.
        ${placed ? `Placed ${placed}.` : ''}
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #dfe6ef;">
        ${order.items
          .map(
            (i) => `<tr>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f6;"><strong>${i.quantity} ×</strong> ${i.product.name}</td>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f6;text-align:right;">${usd(i.unitPriceCents * i.quantity)}</td>
            </tr>`,
          )
          .join('')}
        <tr>
          <td style="padding:10px 0;font-weight:bold;">Order total</td>
          <td style="padding:10px 0;text-align:right;font-weight:bold;">${usd(order.totalCents)}</td>
        </tr>
      </table>
      <p style="margin:20px 0 0;line-height:1.6;">
        <strong>Ship to</strong><br />
        ${address.length ? address.join('<br />') : '<em>No address on this order</em>'}
        ${order.shippingCountry ? `<br />${order.shippingCountry}` : ''}
      </p>
      <p style="margin:16px 0 0;line-height:1.6;color:#5a6b83;">
        Customer: ${order.email}
      </p>
      <p style="margin:24px 0 0;">
        <a href="${appUrl()}/admin/orders" style="background:#00a7b5;color:#000000;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;display:inline-block;">Open in admin</a>
      </p>
      <p style="margin:16px 0 0;line-height:1.6;color:#5a6b83;font-size:13px;">
        Add the tracking number when you mark it shipped — that is what the
        customer receives.
      </p>
    `,
  )

  const text = [
    `Pack order #${ref}`,
    ...(placed ? [`Placed: ${placed}`] : []),
    '',
    `${units} unit${units === 1 ? '' : 's'}:`,
    ...order.items.map((i) => `  ${i.quantity} × ${i.product.name}`),
    '',
    `Order total: ${usd(order.totalCents)}`,
    '',
    'Ship to:',
    ...(address.length ? address.map((l) => `  ${l}`) : ['  (no address on this order)']),
    ...(order.shippingCountry ? [`  ${order.shippingCountry}`] : []),
    '',
    `Customer: ${order.email}`,
    '',
    `Admin: ${appUrl()}/admin/orders`,
  ].join('\n')

  const results = await Promise.all(
    recipients.map((to) =>
      deliver({
        to,
        // The order number is in the subject so the office can search for it
        // when a customer calls.
        subject: `[${BRAND.name}] Pack order #${ref} — ${units} unit${units === 1 ? '' : 's'}`,
        html,
        text,
      }),
    ),
  )

  return { delivered: results.some((r) => r.delivered) }
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  const html = layout(
    'Reset your password',
    `
      <p style="margin:0 0 16px;line-height:1.6;">
        Someone asked to reset the password for this email address. This link
        works once and expires in 60 minutes.
      </p>
      <p style="margin:0 0 20px;">
        <a href="${resetUrl}" style="background:#00a7b5;color:#000000;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;display:inline-block;">Reset password</a>
      </p>
      <p style="margin:0;line-height:1.6;color:#5a6b83;">
        If you didn't request this, you can ignore this email — your password
        won't change.
      </p>
    `,
  )

  const text = [
    'Reset your password',
    '',
    'This link works once and expires in 60 minutes:',
    resetUrl,
    '',
    "If you didn't request this, you can ignore this email.",
  ].join('\n')

  return deliver({ to, subject: `Reset your ${BRAND.name} password`, html, text })
}
