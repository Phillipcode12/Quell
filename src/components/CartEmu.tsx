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
 * **This replaced a hand-drawn SVG bird on 2026-08-31.** The artwork is now
 * Phillip's, cut into three pieces and rigged, rather than approximated in
 * paths. What the SVG could never get right was the gait: it swung two whole
 * legs like pendulums, and an emu does not run that way. It drives the knee up
 * and forward, folds the lower leg under itself, then snaps it out to reach —
 * which needs a joint, not a swing.
 *
 * **The rig is two bones per leg.** `emu-run-thigh.png` rotates about the hip;
 * `emu-run-shank.png` is nested inside it and rotates about the knee, so the
 * knee's own rotation is added to the thigh's exactly as a real joint chain
 * behaves. Both legs use the same two sprites, half a cycle apart, so they
 * cannot drift out of agreement with each other.
 *
 * **Both legs are drawn behind the body.** The thigh sprite has a cut edge
 * where it left the feathers; the body silhouette covers it. This is the same
 * rule the old drawing learned the hard way — the neck had to be drawn *before*
 * the body or the join showed as a seam.
 *
 * Geometry comes from measuring the source artwork, and every offset below is
 * in the sprites' own pixels at export scale. The zero pose reproduces the
 * original leg exactly, seam invisible, which is how the numbers were checked.
 *
 * Three constraints, unchanged from the drawing this replaced:
 *
 *  - **It must never block the page.** `pointer-events-none` throughout, and it
 *    sits below the sticky header's z-index.
 *  - **It must respect `prefers-reduced-motion`.** Handled in CSS: no bird at
 *    all under `reduce`. It is decoration and carries no information, unlike
 *    the helper's nudge, which stays.
 *  - **It must not stack up.** Adding three times restarts one emu rather than
 *    starting three.
 */

/** Sprite sizes and joint positions, in export pixels. */
const BODY = { w: 470, h: 217, socketX: 157, socketY: 199 }
const THIGH = { w: 53, h: 46, hipX: 21, hipY: 6, kneeX: 37, kneeY: 38 }
const SHANK = { w: 150, h: 120, kneeX: 136, kneeY: 10 }

/** Rendered width of the bird. The rig is authored at BODY.w and scaled. */
const DISPLAY_WIDTH = 210

function Leg({ className }: { className: string }) {
  return (
    <div
      className={className}
      style={{ left: BODY.socketX, top: BODY.socketY }}
    >
      <div className="emu-thigh">
        <Image
          src="/images/emu-run-thigh.png"
          alt=""
          width={THIGH.w}
          height={THIGH.h}
          style={{ left: -THIGH.hipX, top: -THIGH.hipY }}
          unoptimized
          aria-hidden="true"
        />
        {/* Nested, so the knee inherits the thigh's rotation the way a joint
            chain does rather than needing it added by hand. */}
        <div
          className="emu-shank"
          style={{ left: THIGH.kneeX - THIGH.hipX, top: THIGH.kneeY - THIGH.hipY }}
        >
          <Image
            src="/images/emu-run-shank.png"
            alt=""
            width={SHANK.w}
            height={SHANK.h}
            style={{ left: -SHANK.kneeX, top: -SHANK.kneeY }}
            unoptimized
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

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
          className="emu-rig"
          style={{ ['--emu-scale' as string]: DISPLAY_WIDTH / BODY.w }}
        >
          <div className="emu-bob">
            <Leg className="emu-leg emu-leg-far" />
            <Image
              className="emu-body"
              src="/images/emu-run-body.png"
              alt=""
              width={BODY.w}
              height={BODY.h}
              priority
              unoptimized
              aria-hidden="true"
            />
            <Leg className="emu-leg emu-leg-near" />
          </div>
        </div>
      </div>
    </div>
  )
}
