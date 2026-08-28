import Image from 'next/image'

/**
 * The helper's emu, from artwork Phillip supplied on 2026-08-28.
 *
 * This replaced a crop taken from the carton photograph, which was doing two
 * jobs badly: it was low resolution, and it was cut from a shot with box copy
 * either side of the neck that had to be masked out patch by patch.
 *
 * The source is kept at `art/emu-helper-source.png` — deliberately outside
 * `public/`, so 1.4MB of original artwork is not served to every visitor while
 * still being in the repository to regenerate from.
 *
 * **The white studio background is keyed out by flooding inward from the
 * border, not by thresholding.** A luminance threshold is the obvious approach
 * and it is wrong here: the beak highlights and the eye glints are white too,
 * so it punches holes straight through the face. Flooding from the edge treats
 * only white that is *connected to the border* as background, which leaves
 * interior white alone. Pixels above the soft cut-off that touch the flood get
 * proportional alpha, which is what stops a white rim appearing once the bird
 * sits on the near-black page.
 *
 * Recipe, run with sharp at full resolution and then resized once:
 *
 *   flood from every border pixel where R, G and B are all >= 244
 *   set those to alpha 0; feather anything >= 232 that touches them
 *   trim to the alpha bounding box  ->  809x1322 out of 1122x1402
 *   resize to 700 tall, PNG with a palette  ->  428x700, 105KB
 *
 * The palette quantisation is not visible: compared against the full-colour
 * PNG at rendered size the two are indistinguishable, and it is a third of the
 * weight.
 */
/** Native aspect of the asset, so callers cannot distort the bird. */
const RATIO = 428 / 700

export function EmuFace({
  className,
  heightPx = 120,
}: {
  className?: string
  /** Rendered height, so Next serves an appropriately sized image. */
  heightPx?: number
}) {
  return (
    <Image
      src="/images/emu-helper.png"
      alt=""
      width={Math.round(heightPx * RATIO)}
      height={heightPx}
      className={className}
      // Decorative: every button using this already has a text label or an
      // aria-label, so announcing it again would just be noise.
      aria-hidden="true"
      priority={false}
    />
  )
}
