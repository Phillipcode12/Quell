'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { EmuFace } from '@/components/EmuFace'
import { COMPANY } from '@/lib/product-content'
import { SELF_CHECK_NUDGE } from '@/lib/self-check'
import { formatUsd } from '@/lib/money'
import {
  FREE_SHIPPING_BOTTLES,
  FREE_SHIPPING_THRESHOLD_CENTS,
  STANDARD_SHIPPING_CENTS,
} from '@/lib/shipping'

/**
 * A small scripted helper that points people at the right page.
 *
 * **This is deliberately not an AI chatbot, and that is the whole design.**
 *
 * Quell is an FDA-regulated over-the-counter drug. A language model on this
 * domain could be asked "will this help my blepharitis?" and produce something
 * helpful-sounding — which would be a medical claim, made on our own site, at
 * scale, with nobody reviewing it. That is a worse version of the problem
 * solved by withholding the redness claim (see RELIEVES_WITHHELD in
 * product-content.ts): the label supports what the label supports, and nothing
 * on this site should say more.
 *
 * So this can only ever emit sentences written here, reviewed by a human. It
 * has no model, no API call, no network request at all. It cannot hallucinate,
 * it cannot be prompted around, and it costs nothing to run.
 *
 * It is also self-hosted rather than a third-party widget. Tidio, Crisp and
 * similar have real free tiers, but they load external scripts and set their
 * own cookies — and the privacy policy states the site runs no third-party
 * trackers. Installing one would make that false, exactly like the Meta Pixel
 * problem recorded in PROJECT_STATE §9.
 *
 * Every answer here must stay inside what the Drug Facts panel supports. When
 * adding one, the test is not "is this true" but "does the label say this".
 */

type Topic = {
  id: string
  question: string
  answer: string
  href?: string
  linkLabel?: string
}

export const TOPICS: Topic[] = [
  {
    id: 'what',
    question: 'What is Quell?',
    answer:
      'A preservative-free lubricating eye drop — .33 fl oz (10 mL), $29.99. It is an over-the-counter drug, so no prescription is needed.',
    href: '/#buy',
    linkLabel: 'See the product',
  },
  {
    id: 'how',
    question: 'How do I use it?',
    answer: 'Apply 1 drop 3 times per day in each eye. Do not touch the tip of the bottle to any surface.',
    href: '/#how-to-use',
    linkLabel: 'How to use',
  },
  {
    id: 'prescription',
    question: 'Do I need a prescription?',
    answer: 'No. Quell is an over-the-counter drug and you can buy it without one.',
    href: '/drug-facts',
    linkLabel: 'Read the Drug Facts',
  },
  {
    id: 'ingredients',
    question: "What's in it?",
    answer:
      'The full Drug Facts panel — active ingredients, uses, warnings and directions — is on the site exactly as printed on the carton.',
    href: '/drug-facts',
    linkLabel: 'Read the Drug Facts',
  },
  {
    /**
     * Added 2026-10-02. The emu's unprompted line offers the self-check, and
     * that line goes away on its own — so without this, someone who saw it and
     * missed it had no way back to the thing they had just been offered.
     *
     * **"It is not a diagnosis" is not hedging, it is the point.** A symptom
     * questionnaire on a page selling a drug has to say what it is not, and the
     * helper is the one place on the site that answers questions in its own
     * words rather than the label's.
     */
    id: 'self-check',
    question: 'What is the dry eye self-check?',
    answer:
      'Eight questions about dry eye symptoms. It gives a symptom score and says whether the answers fit the pattern of a tear film that evaporates too quickly. It is not a diagnosis, and it is no substitute for an eye exam.',
    href: '/self-check',
    linkLabel: 'Take the self-check',
  },
  {
    id: 'shipping',
    question: 'How much is shipping?',
    // Built from the shipping constants, never typed out. This answer said
    // "over $59.00" for hours after the threshold moved to $89, because it was
    // a hardcoded string the change could not reach -- the helper was telling
    // customers a shipping rule the cart would not honour.
    answer: `${FREE_SHIPPING_BOTTLES} bottles or more ship free (orders of ${formatUsd(
      FREE_SHIPPING_THRESHOLD_CENTS,
    )} and up). Below that, shipping is a flat ${formatUsd(
      STANDARD_SHIPPING_CENTS,
    )}. We ship within the United States only.`,
    href: '/cart',
    linkLabel: 'Go to cart',
  },
  {
    id: 'track',
    question: "Where's my order?",
    answer:
      'You can track it with your order number and the email you used at checkout — no account needed.',
    href: '/orders',
    linkLabel: 'Track your order',
  },
  {
    id: 'returns',
    question: "What's your returns policy?",
    answer:
      'Unopened and in the original packaging, within 30 days. Opened drops cannot be returned, for sterility.',
    href: '/terms',
    linkLabel: 'Read the terms',
  },
  {
    id: 'contact',
    question: 'I need to speak to someone',
    answer: `Call ${COMPANY.phone}, ${COMPANY.hours}.`,
    href: '/about#contact',
    linkLabel: 'Contact details',
  },
]

/**
 * The unprompted line the emu offers to someone who has been reading for a
 * while, and the only thing on this widget that speaks before it is spoken to.
 *
 * **It invites the self-check, as of 2026-10-02.** It used to quote
 * `EMU_OIL.after` — the sentence printed on the carton — which was safe but
 * spent the site's one unprompted line repeating a claim already on the page
 * the reader was looking at. Phillip's call, and the better use of it: someone
 * ten seconds into reading is exactly who the self-check is for, and it is the
 * one thing on the site that asks for an email.
 *
 * **It is still not written here.** The wording lives in `lib/self-check` with
 * the rest of that feature's copy, for the same reason it used to live in
 * `product-content`: a second, slightly reworded copy is how wording drifts.
 *
 * The rule it is held to has not changed — **naming the condition is fine,
 * telling someone they have it is not.** "Dry eye self-check" says what is on
 * offer without suggesting the reader needs it, and `SiteHelper.test.ts`
 * asserts the absence of "your" word-for-word.
 */
export const NUDGE = SELF_CHECK_NUDGE

/**
 * How long someone must be on the site before the emu speaks.
 *
 * Measured from the first page of the visit rather than from this component
 * mounting, so a reload at 8 seconds does not restart the clock (see the
 * effect below). Long enough to land on someone who has started reading
 * rather than on someone who has not finished arriving.
 */
export const NUDGE_DELAY_MS = 10_000

/**
 * How long the nudge stays up before taking itself away.
 *
 * **Raised from 8 seconds to 20 on 2026-10-02, because Phillip tried to click
 * it and it vanished while he was moving the pointer towards it.**
 *
 * Eight seconds was tuned for an aside — a "did you know" that cost nothing to
 * miss. This line is now a call to action, and a call to action that disappears
 * mid-reach is worse than one that was never shown: it advertises something and
 * then takes it away.
 *
 * The countdown pauses while the pointer or keyboard focus is on it (see the
 * effect below) — but that pause can only engage once the pointer has arrived,
 * which is exactly the part eight seconds did not allow for.
 *
 * It still goes on its own. A bubble that sits in the corner until clicked is
 * nagging, and it narrows the window in which it can cover something the
 * visitor wants to tap, which is the failure this widget has caused twice (see
 * HIDDEN_ON). Twenty seconds is the compromise: long enough to notice, read and
 * reach; short enough that ignoring it costs nothing.
 */
export const NUDGE_VISIBLE_MS = 20_000

/**
 * Pages the helper stays off: every page whose whole job is completing a form.
 *
 * **The rule is deliberately broader than the measured failures.** Two were
 * found by measurement, both the same shape — a fixed widget in the
 * bottom-right corner taking the taps meant for the control underneath it.
 *
 * On `/cart`, at 375px, the checkout fields scroll up through the corner. With
 * each scrolled to the bottom of the viewport the emu was the top element at
 * the right-hand end of the email, last name, street, apt, city and ZIP fields
 * — and of **Continue to payment**, the one button on the site that takes
 * money.
 *
 * On `/register`, adding the confirm-password field made the form taller and
 * pushed **Create account** under the nudge bubble: only the leftmost 12px of
 * that button was still clickable.
 *
 * `/login` and `/reset-password` measured clear — but `/register` measured
 * clear too, right up until one field was added. Pixel margins are not a
 * property worth defending one page at a time, so the rule is the category
 * rather than the measurement: if the page exists to be filled in and
 * submitted, the helper stays away. Nothing is lost, because no topic here
 * answers a question about accounts or checkout.
 *
 * Reserving space at the foot of the page is not an alternative. The widget is
 * fixed to the viewport rather than the document, so mid-scroll positions
 * still pass underneath it.
 */
export const HIDDEN_ON = [
  '/cart',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  // Someone part-way through answering questions about their own symptoms is
  // the last person who should be interrupted by a mascot.
  '/self-check',
]

/** Session keys: when the visit started, and whether the emu has spoken. */
const NUDGE_START_KEY = 'quell.helper.visitStart'
const NUDGE_SEEN_KEY = 'quell.helper.nudgeSeen'

/**
 * Shown instead of an answer when someone asks something this cannot handle.
 *
 * It never guesses and never offers an opinion about a medical question — it
 * hands over to a person. Naming the limitation plainly is more useful than a
 * vague apology, and it is honest about what this thing is.
 */
export const MEDICAL_NOTICE =
  'I can only point you around the site — I can’t give medical advice or answer questions about your symptoms. Please read the Drug Facts, and speak to your doctor or pharmacist about anything health-related.'

export function SiteHelper() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState<Topic | null>(null)
  const [showMedicalNotice, setShowMedicalNotice] = useState(false)
  const [nudge, setNudge] = useState(false)
  const [nudgeHeld, setNudgeHeld] = useState(false)
  const [pastFirstScreen, setPastFirstScreen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const nudgeRef = useRef<HTMLDivElement>(null)

  /**
   * The widget stays out of the first screen entirely.
   *
   * It is fixed to the bottom-right corner, and on a short phone that corner is
   * exactly where a hero's buttons land. Measured at 375x667 — an ordinary
   * iPhone size — the widget covered **Add to cart**, all of **Why it works**,
   * and **Go to cart**. The primary buy button on the site was unreachable
   * with a thumb.
   *
   * Waiting for one screen of scrolling fixes the whole class of it rather
   * than one page's arithmetic: above the fold belongs to whatever the page is
   * selling, and a visitor who has not scrolled has not yet asked for help.
   *
   * It follows the scroll in **both** directions. Latching it on once shown
   * seemed tidier — no flicker — but scrolling down and back up is precisely
   * what someone does before deciding to buy, and it put the widget back over
   * **Add to cart**. Verified: at 375x667 the centre and right of that button
   * were unreachable again on the way back up.
   *
   * A scroll listener rather than an IntersectionObserver because there is no
   * single element to observe: every page has a different thing at the top,
   * and the rule is about the viewport, not about any one of them.
   */
  useEffect(() => {
    const check = () =>
      setPastFirstScreen(window.scrollY > window.innerHeight * 0.75)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  /**
   * The nudge fires once per visit, NUDGE_DELAY_MS after the visit began.
   *
   * The start time lives in `sessionStorage` rather than in a ref so the
   * clock survives a reload: the measure is time on the site, not time since
   * this component mounted. Client-side navigation does not remount it at all
   * — the helper is mounted in the root layout — so the timer simply keeps
   * running as someone moves between pages.
   *
   * Every access is wrapped: `sessionStorage` throws outright in some privacy
   * configurations, and a nicety must not take the page down with it. If it is
   * unreadable the nudge still appears, it just cannot remember that it has.
   */
  useEffect(() => {
    let start = Date.now()
    let alreadySeen = false
    try {
      if (sessionStorage.getItem(NUDGE_SEEN_KEY)) {
        alreadySeen = true
      } else {
        const stored = Number(sessionStorage.getItem(NUDGE_START_KEY))
        if (stored > 0) start = stored
        else sessionStorage.setItem(NUDGE_START_KEY, String(start))
      }
    } catch {
      // No session storage: fall back to a plain delay from now.
    }
    if (alreadySeen) return

    const remaining = Math.max(0, NUDGE_DELAY_MS - (Date.now() - start))
    const timer = setTimeout(() => setNudge(true), remaining)
    return () => clearTimeout(timer)
  }, [])

  /**
   * The nudge takes itself away after NUDGE_VISIBLE_MS.
   *
   * **The countdown pauses while it is being attended to** — pointer over it,
   * or keyboard focus inside it. Without that, a bubble can vanish from under
   * a cursor already travelling towards it, and the click lands on whatever
   * was behind it. That is the same failure as the two recorded in HIDDEN_ON,
   * arrived at from the opposite direction, and it would be a needless way to
   * reintroduce it.
   *
   * Auto-dismissal marks the nudge as seen, exactly like dismissing it by
   * hand: it has had its turn, and repeating it later in the visit is the
   * nagging this is meant to avoid.
   */
  useEffect(() => {
    if (!nudge || open || nudgeHeld) return
    const timer = setTimeout(dismissNudge, NUDGE_VISIBLE_MS)
    return () => clearTimeout(timer)
  }, [nudge, open, nudgeHeld])

  /**
   * What counts as "being attended to": pointer over it, or focus inside it.
   *
   * **Native listeners on the element rather than React's onMouseEnter.**
   * React synthesises enter and leave from delegated mouseover/mouseout, and
   * that synthesis could not be exercised in a browser: the pause looked
   * wired, and measuring it showed the state never changed. Native
   * `mouseenter`/`mouseleave` fire directly on the element, do not fire again
   * when the pointer crosses between the bubble and its own close button, and
   * can be triggered in a test without pretending to be a real cursor.
   *
   * `focusin`/`focusout` rather than `focus`/`blur` because those two do not
   * bubble, and the focus lands on a button inside this div rather than on the
   * div itself.
   */
  useEffect(() => {
    const el = nudgeRef.current
    if (!el) return
    const hold = () => setNudgeHeld(true)
    const release = () => setNudgeHeld(false)
    el.addEventListener('mouseenter', hold)
    el.addEventListener('mouseleave', release)
    el.addEventListener('focusin', hold)
    el.addEventListener('focusout', release)
    return () => {
      el.removeEventListener('mouseenter', hold)
      el.removeEventListener('mouseleave', release)
      el.removeEventListener('focusin', hold)
      el.removeEventListener('focusout', release)
    }
  }, [nudge, open])

  /** Spoken once. Opening the helper counts, so it never talks over itself. */
  function dismissNudge() {
    setNudge(false)
    try {
      sessionStorage.setItem(NUDGE_SEEN_KEY, '1')
    } catch {
      // Then it may speak again on the next page. Harmless.
    }
  }

  // Escape closes, and focus returns to the button that opened it.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function reset() {
    setTopic(null)
    setShowMedicalNotice(false)
  }

  if (HIDDEN_ON.includes(pathname) || !pastFirstScreen) return null

  return (
    // Sits above the emu animation (z-40) but below the sticky header (z-50),
    // so opening this never covers the nav.
    <div className="fixed bottom-4 right-4 z-[45] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Quell help"
          className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        >
          <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-3">
            <span className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-background ring-1 ring-brand/60">
              <EmuFace className="h-full w-full object-cover object-top" heightPx={88} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">Need a hand?</p>
              <p className="truncate text-xs text-muted">
                Pick a question below
              </p>
            </div>
            <button
              onClick={() => {
                setOpen(false)
                reset()
              }}
              aria-label="Close help"
              className="ml-auto rounded-md px-2 py-1 text-muted transition hover:bg-white/5 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-4">
            {showMedicalNotice ? (
              <div>
                <p className="text-sm leading-relaxed text-muted">
                  {MEDICAL_NOTICE}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/drug-facts"
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-black transition hover:bg-brand-light"
                  >
                    Read the Drug Facts
                  </Link>
                  <a
                    href={`tel:${COMPANY.phoneHref}`}
                    className="rounded-lg border border-line px-4 py-2 text-sm text-muted transition hover:border-brand hover:text-white"
                  >
                    Call {COMPANY.phone}
                  </a>
                </div>
                <button
                  onClick={reset}
                  className="mt-4 text-sm font-medium text-brand-light hover:text-white"
                >
                  ← Back to questions
                </button>
              </div>
            ) : topic ? (
              <div>
                <p className="text-sm font-semibold text-white">
                  {topic.question}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {topic.answer}
                </p>
                {topic.href && (
                  <Link
                    href={topic.href}
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-black transition hover:bg-brand-light"
                  >
                    {topic.linkLabel}
                  </Link>
                )}
                <button
                  onClick={reset}
                  className="mt-4 block text-sm font-medium text-brand-light hover:text-white"
                >
                  ← Back to questions
                </button>
              </div>
            ) : (
              <ul className="space-y-2">
                {TOPICS.map((t) => (
                  <li key={t.id}>
                    <button
                      onClick={() => setTopic(t)}
                      className="w-full rounded-lg border border-line bg-surface-2 px-3 py-2.5 text-left text-sm text-white transition hover:border-brand hover:bg-brand/10"
                    >
                      {t.question}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setShowMedicalNotice(true)}
                    className="w-full rounded-lg border border-line px-3 py-2.5 text-left text-sm text-muted transition hover:border-brand hover:text-white"
                  >
                    Something else
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}

      {/*
        The emu speaking first. It is a real button rather than a decoration:
        the whole bubble opens the helper, which is the action it invites.
        `role="status"` announces it politely to a screen reader when it
        arrives, instead of stealing focus mid-sentence.
      */}
      {nudge && !open && (
        <div
          ref={nudgeRef}
          role="status"
          aria-live="polite"
          className="helper-nudge relative w-[calc(100vw-6rem)] max-w-[15rem]"
        >
          {/* A link now, not a button that opens the panel. The line offers the
              self-check, so the obvious press should go and take it — opening a
              list of FAQs instead would be a small bait and switch. */}
          <Link
            href="/self-check"
            onClick={dismissNudge}
            className="block w-full rounded-2xl rounded-br-md border border-line bg-surface px-3.5 py-2.5 pr-8 text-left text-[13px] leading-relaxed text-white shadow-2xl transition hover:border-brand hover:bg-surface-2"
          >
            {NUDGE}
          </Link>
          {/* The tail, tucked under the bubble's bottom-right corner and
              pointing down at the bird. Two borders only, so the rotated
              square continues the bubble outline instead of reading as a
              diamond sitting on top of it. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[7px] right-5 h-3 w-3 rotate-45 border-b border-r border-line bg-surface"
          />
          <button
            onClick={dismissNudge}
            aria-label="Dismiss"
            className="absolute right-1.5 top-1.5 rounded-md px-1.5 py-0.5 text-xs text-muted transition hover:bg-white/5 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      <button
        ref={buttonRef}
        onClick={() => {
          setOpen((v) => !v)
          if (open) reset()
          dismissNudge()
        }}
        aria-expanded={open}
        aria-label={open ? 'Close help' : 'Open help'}
        // Two shapes, not one. Closed, the bird stands free in the corner:
        // the artwork is keyed out, so a frame around it would put back the
        // black rectangle the crop was chosen to escape. Open, there is no
        // bird to show — the panel above has it — so it becomes an ordinary
        // round close button rather than an unmarked hit area.
        className={
          open
            ? 'flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-xl text-brand-light shadow-lg transition hover:border-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light'
            : 'flex h-28 w-20 items-end justify-center rounded-2xl transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light'
        }
      >
        {open ? (
          <span className="font-bold">✕</span>
        ) : (
          // A shadow under the bird so it lifts off whatever is scrolling
          // past behind it, light section or dark.
          <EmuFace
            className="h-full w-full object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.65)]"
            heightPx={224}
          />
        )}
      </button>
    </div>
  )
}
