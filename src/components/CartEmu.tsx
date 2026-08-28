'use client'

import { useEffect, useState } from 'react'

/**
 * A real emu's colouring, not the site palette: dark shaggy body plumage, a
 * long pale grey neck, and long tan legs.
 *
 * The plumage is deliberately lifted to a mid charcoal rather than true black.
 * The page background is #060606, so an accurate black bird would be a hole in
 * the screen — the lighter feather streaks and the pale neck and legs are what
 * carry the shape. The cart stays brand teal, so the brand colour still does
 * its job while the bird is allowed to look like a bird.
 */
const PLUMAGE = '#3a3e45'
const PLUMAGE_LIGHT = '#6e747d'
const PLUMAGE_HIGHLIGHT = '#a9b0b8'
const NECK = '#b6bcc4'
const NECK_SHADE = '#8f959d'
const LEG = '#c4b2a2'
const CROWN = '#23252b'
const EYE = '#e8a33d'
const BEAK = '#9aa0a8'

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
      <div key={trigger} className="emu-walk w-[180px] sm:w-[220px]">
        <svg viewBox="0 0 200 170" className="h-auto w-full">
          <g className="emu-bob">
            {/* Cart, out in front, in brand teal so the bird stays the
                subject. The handle runs back to meet its chest — without that
                the two shapes read as a bird walking *beside* a trolley
                rather than pushing one. */}
            <g
              fill="none"
              stroke="var(--brand)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M136 100h52l-7 28h-40z" />
              <path d="M136 100l-30-14" />
              <circle cx="149" cy="136" r="5.5" />
              <circle cx="175" cy="136" r="5.5" />
            </g>

            {/* Legs — long, tan, and mid-stride: one reaching forward, one
                trailing back, as in the reference. The thigh is thicker than
                the shank, which is what stops them reading as wire. */}
            <g className="emu-leg-back">
              <path d="M58 116l-14 22 4 24" stroke={LEG} strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M44 162l-9 4M48 162h10" stroke={LEG} strokeWidth="4.5" strokeLinecap="round" fill="none" />
            </g>
            <g className="emu-leg-front">
              <path d="M86 114l16 22-3 24" stroke={LEG} strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M99 160l10 4M95 160h10" stroke={LEG} strokeWidth="4.5" strokeLinecap="round" fill="none" />
            </g>

            {/* Shaggy plumes along the back only. They were on the belly too,
                which read as spikes growing downward out of the bird rather
                than as the loose tail plumage they are meant to be. */}
            <g fill={PLUMAGE}>
              <path d="M30 74L8 62l20 14zM26 88L2 84l25 11zM28 104L6 112l23 2z" />
            </g>

            {/* Neck is drawn BEFORE the body on purpose, so the body overlaps
                its base and the join disappears under the shoulder. Drawn
                after, it sat on top as a visible seam — a ribbon stuck to the
                side rather than a neck growing out of the bird. Its base is
                deliberately wide and extends well inside the body outline. */}
            <path
              d="M78 96c2-16 6-30 12-42 6-13 14-24 24-34l14 8c-11 11-19 23-24 36-4 12-7 24-8 36z"
              fill={NECK}
            />
            {/* Shaded edge down the back of the neck, so it reads as round
                rather than flat. */}
            <path
              d="M78 96c2-16 6-30 12-42 6-13 14-24 24-34l4 2c-11 11-19 24-24 37-4 12-7 24-8 37z"
              fill={NECK_SHADE}
            />

            {/* Body — the dark shaggy mass, tilted forward as in the running
                reference rather than sitting level. Painted over the neck base
                above. */}
            <path
              d="M22 88c2-22 22-35 46-33 22 2 36 15 34 34-2 21-18 34-42 33S20 109 22 88z"
              fill={PLUMAGE}
            />
            {/* Lighter feather marks. These do most of the work: against a
                near-black page a flat dark shape would disappear, and the
                reference's plumage is streaked rather than solid.

                Deliberately uneven in length, angle and spacing. An earlier
                pass used three evenly spaced parallel curves and the result
                read as ribs rather than feathers — regularity is what gives it
                away. */}
            <g stroke={PLUMAGE_LIGHT} strokeWidth="2.6" strokeLinecap="round" fill="none">
              <path d="M34 76c8-3 15-3 21 0M46 68c7-2 13-1 18 2M30 90c10-3 18-2 25 1M52 84c9-2 16-1 21 2M34 102c7-2 14-2 19 1M56 100c8-1 14 0 19 3" />
            </g>
            <g stroke={PLUMAGE_HIGHLIGHT} strokeWidth="1.8" strokeLinecap="round" opacity="0.65" fill="none">
              <path d="M40 71c5-2 10-2 14 0M62 76c6-1 11 0 15 2M38 96c6-2 11-1 15 1M64 108c6-1 11 0 15 2M48 112c5-1 10 0 14 2" />
            </g>

            {/* Head — small against that neck. */}
            <path
              d="M114 22c-1-8 5-15 13-15 8-1 14 5 14 12s-6 13-13 13c-7 1-13-3-14-10z"
              fill={NECK}
            />
            {/* Darker crown and nape, as in the reference. */}
            <path
              d="M115 15c3-6 9-9 15-8 5 1 9 4 10 8-4-3-9-5-14-4-5 1-9 2-11 4z"
              fill={CROWN}
            />

            {/* Eye. */}
            <circle cx="130" cy="19" r="4.4" fill={EYE} />
            <circle cx="130.5" cy="19.4" r="2.1" fill={CROWN} />
            <circle cx="131.7" cy="17.8" r="0.9" fill="#ffffff" />

            {/* Beak — short and blunt, angled slightly down. */}
            <path
              d="M140 17c6 0 11 2 12 5 0 3-5 5-12 5-3 0-4-2-4-5s1-5 4-5z"
              fill={BEAK}
            />
            <circle cx="144" cy="20" r="0.9" fill={CROWN} />
          </g>
        </svg>
      </div>
    </div>
  )
}
