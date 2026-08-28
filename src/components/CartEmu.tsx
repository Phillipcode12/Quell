'use client'

import { useEffect, useState } from 'react'

/**
 * An emu pushes a shopping cart across the bottom of the screen when something
 * is added to the basket.
 *
 * On-brand rather than random: the formula contains emu oil, and the slogan is
 * "give dry eye the bird". It is a small reward for a deliberate action, so it
 * is deliberately restrained — a brand-teal silhouette low on the screen, gone
 * in a few seconds.
 *
 * Three constraints shape it:
 *
 *  - **It must never block the page.** `pointer-events-none` throughout, and it
 *    sits below the sticky header's z-index, so the cart link the animation is
 *    drawing attention to stays clickable while the emu walks.
 *  - **It must respect `prefers-reduced-motion`.** Handled entirely in CSS
 *    (`display: none` under `reduce`) rather than by sniffing the media query
 *    in JavaScript. CSS is the honest place for it: no state, no effect, and
 *    it responds if the preference changes mid-session.
 *  - **It must not stack up.** Adding three times in a row restarts one emu
 *    rather than starting three.
 *
 * `trigger` is a counter rather than a boolean because a boolean cannot
 * express "again". Passing it as a `key` remounts the element, which is what
 * makes the CSS animation start over from the left instead of continuing
 * mid-stride.
 */
export function CartEmu({ trigger }: { trigger: number }) {
  // The last trigger whose walk has finished. Deriving visibility by
  // comparison avoids setting state during the effect — the timeout below is
  // the only writer, and it fires asynchronously.
  const [finished, setFinished] = useState(0)

  const walking = trigger > 0 && trigger > finished

  useEffect(() => {
    if (!walking) return
    // Slightly longer than the 4s CSS animation so the emu is fully off-screen
    // before it is removed, rather than blinking out mid-stride.
    const timer = setTimeout(() => setFinished(trigger), 4200)
    return () => clearTimeout(timer)
  }, [walking, trigger])

  if (!walking) return null

  return (
    <div
      // Below the header (z-50) so the cart link stays reachable, above the
      // page content so the emu is not clipped by a section background.
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      <div key={trigger} className="emu-walk w-[170px] sm:w-[210px]">
        <svg viewBox="0 0 200 132" className="h-auto w-full">
          <g
            className="emu-bob"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cart, out in front. The handle runs back to meet the bird's
                chest — without that the two shapes read as a bird walking
                *beside* a trolley rather than pushing one. */}
            <path d="M130 64h46l-6 26h-34z" />
            <path d="M130 64l-26-11" />
            <circle cx="141" cy="98" r="5.5" />
            <circle cx="165" cy="98" r="5.5" />

            {/* Body. Wider than it is tall, and drawn as a curve rather than a
                circle — a circle reads as a ball, and the whole job of this
                shape is to say "large flightless bird" at a glance. */}
            <path
              d="M28 60c0-18 18-26 40-26s31 12 30 27c-1 17-15 29-37 29S28 78 28 60z"
              fill="var(--brand)"
              fillOpacity="0.15"
            />

            {/* Shaggy tail, trailing off the back. Drawn outside the body
                outline so it is actually visible — the previous version had
                these tucked inside the fill. */}
            <path d="M29 58c-8-3-15-1-19 3M28 68c-9-1-16 2-19 6M31 78c-8 2-14 6-16 10" />

            {/* Neck and head. Long and slightly S-curved, which along with the
                legs is what separates an emu from a generic bird. */}
            <path d="M89 44c5-13 11-23 19-30 3-3 7-4 10-4" />
            <circle cx="124" cy="10" r="6.5" fill="var(--brand)" fillOpacity="0.15" />
            <circle cx="126" cy="8" r="1.4" fill="var(--brand)" stroke="none" />
            {/* Beak */}
            <path d="M130 10l12 3-12 3" />

            {/* Legs, bending backwards at the hock. Long, as an emu's are. */}
            <g className="emu-leg-front">
              <path d="M78 88l6 15-8 15M72 118h13" />
            </g>
            <g className="emu-leg-back">
              <path d="M52 88l-5 15 7 15M48 118h13" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
