'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * An emu runs across the bottom of the screen when something is added to the
 * cart.
 *
 * On-brand rather than random: the formula contains emu oil, and the slogan is
 * "give dry eye the bird". It is a small reward for a deliberate action, so it
 * is deliberately restrained — low on the screen, gone in a few seconds.
 *
 * **This replaced a hand-drawn SVG bird on 2026-08-31**, which swung two whole
 * legs like pendulums from fixed pivots. The artwork is Phillip's.
 *
 * **Two frames, alternating — that is the entire animation.** Frame 1 is the
 * drawing as supplied: one leg extended behind, one tucked forward. Frame 2 is
 * the same two legs with their hip anchors exchanged, so the bird is caught in
 * the opposite half of its stride. Swapping between them at the step rate
 * reads as running, and nothing else moves except the body's bob.
 *
 * Two things about how frame 2 was built:
 *
 *  - **The legs are exchanged, not mirrored.** Mirroring would point the toes
 *    backwards, which is instantly wrong on a bird.
 *  - **Both frames are cropped to one shared bounding box**, so swapping them
 *    cannot shift the bird by a pixel.
 *
 * Three constraints, unchanged from the drawing this replaced:
 *
 *  - **It must never block the page.** `pointer-events-none` throughout, and it
 *    sits below the sticky header's z-index.
 *  - **It must respect `prefers-reduced-motion`.** Handled in CSS: no bird at
 *    all under `reduce`. It is decoration and carries no information, unlike
 *    the helper's nudge, which keeps its sentence.
 *  - **It must not stack up.** Adding three times restarts one emu rather than
 *    starting three.
 */

/** Both frames share this size — they are cut from one bounding box. */
const FRAME = { w: 512, h: 336 }

/** Rendered width of the bird. */
const DISPLAY_WIDTH = 230

export function CartEmu({ trigger }: { trigger: number }) {
  // The last trigger whose run has finished. Deriving visibility by comparison
  // avoids setting state during the effect — the timeout below is the only
  // writer, and it fires asynchronously.
  const [finished, setFinished] = useState(0)

  const running = trigger > 0 && trigger > finished

  useEffect(() => {
    if (!running) return
    // Slightly longer than the CSS run so the emu is fully off-screen before
    // it is removed, rather than blinking out mid-stride.
    const timer = setTimeout(() => setFinished(trigger), 4200)
    return () => clearTimeout(timer)
  }, [running, trigger])

  if (!running) return null

  return (
    <div
      // Below the header (z-50) so the cart link stays reachable, above the
      // page content so the emu is not clipped by a section background.
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      <div key={trigger} className="emu-walk">
        <div
          className="emu-run"
          style={{
            width: DISPLAY_WIDTH,
            height: (DISPLAY_WIDTH * FRAME.h) / FRAME.w,
          }}
        >
          {[1, 2].map((n) => (
            <Image
              key={n}
              className={`emu-frame emu-frame-${n}`}
              src={`/images/emu-run-${n}.png`}
              alt=""
              width={FRAME.w}
              height={FRAME.h}
              // Eager and unoptimised: the run starts the moment this mounts,
              // so a lazily-fetched frame would simply be missing for it — and
              // a lazy image inside a transformed container is never fetched at
              // all, which is how the previous version shipped legless.
              priority
              unoptimized
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
