import Image from 'next/image'

/**
 * A flat, cartoon avatar for a testimonial.
 *
 * **Deliberately stylised, and it must stay that way.** These are real
 * customers quoted under substituted names. A photograph beside a quote asserts
 * "this is the person who said it" and would be untrue; a flat vector face
 * reads as an illustration, which is what it is. Do not swap these for
 * photographs or photo-real renders without deciding that question again — the
 * distinction is the whole reason this component exists rather than an `<img>`.
 *
 * The attributes come from what Phillip knows about the real customers, not
 * from guesses off the alias. Where he has not said, the entry says so rather
 * than picking.
 *
 * Drawn with plain SVG rather than an illustration library: five faces built
 * from circles, arcs and one path each is less code than any dependency that
 * would draw them, and it ships nothing to the browser.
 */

export type SkinTone = 'light' | 'tan' | 'olive' | 'brown' | 'deep'
export type HairColour = 'black' | 'darkBrown' | 'brown' | 'blonde' | 'grey'
export type HairStyle = 'short' | 'buzz' | 'long' | 'bob' | 'bun'

const SKIN: Record<SkinTone, string> = {
  light: '#F2C9A0',
  tan: '#E3AC7B',
  olive: '#D9A066',
  brown: '#A96B3F',
  deep: '#6F4326',
}

const HAIR: Record<HairColour, string> = {
  black: '#1B1B1F',
  darkBrown: '#33211A',
  brown: '#5E3A26',
  blonde: '#C6A05A',
  grey: '#9BA0A6',
}

export type AvatarSpec = {
  skin: SkinTone
  hair: HairColour
  style: HairStyle
  /** Drawn as a soft jaw shadow, not a full beard. */
  beard?: boolean
  /**
   * A supplied illustration under `public/`, which wins over the drawn face.
   *
   * Phillip is providing these one at a time, so both paths stay live: a
   * person with artwork gets it, a person without keeps the drawn fallback,
   * and the section never has a hole in it while the set is completed.
   *
   * **Illustrations only — never photographs.** See the note at the top of
   * this file: the quotes carry substituted names, so a photograph would
   * assert something untrue about a real person. A drawing does not.
   */
  image?: string
}

/** Rendered size in CSS pixels. The source art is far larger, so this is what
 *  Next uses to decide what to actually serve. */
const RENDER_PX = 44

export function Avatar({
  spec,
  name,
  className = '',
}: {
  spec: AvatarSpec
  /** Only used to caption the image for assistive tech when art is supplied. */
  name?: string
  className?: string
}) {
  if (spec.image) {
    return (
      <Image
        src={spec.image}
        alt=""
        width={RENDER_PX * 2}
        height={RENDER_PX * 2}
        className={className}
        // Decorative: the name is right beside it in text, so announcing the
        // avatar too would say the same thing twice.
        aria-hidden="true"
        title={name}
      />
    )
  }

  const skin = SKIN[spec.skin]
  const hair = HAIR[spec.hair]

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      // Decorative. The name sits beside it in text, so a screen reader that
      // announced this too would just say the same thing twice.
      aria-hidden="true"
      focusable="false"
    >
      {/* Disc behind the figure, so the avatar reads as a unit against the
          card rather than as a head floating on it. */}
      <circle cx="32" cy="32" r="32" fill="#0F1216" />

      {/* Hair drawn behind the head for the styles that fall past it. */}
      {spec.style === 'long' && (
        <path d="M14 34c0-12 8-20 18-20s18 8 18 20v18c0 2-2 3-4 2-3-2-4-8-4-14H22c0 6-1 12-4 14-2 1-4 0-4-2z" fill={hair} />
      )}
      {spec.style === 'bob' && (
        <path d="M15 33c0-11 7-19 17-19s17 8 17 19v9c0 2-2 3-3 1-2-3-3-7-3-11H21c0 4-1 8-3 11-1 2-3 1-3-1z" fill={hair} />
      )}

      {/* Shoulders. One shape, so the face is not a head on nothing. */}
      <path d="M12 64c0-10 9-16 20-16s20 6 20 16z" fill="#2A3138" />

      {/* Neck */}
      <rect x="27" y="40" width="10" height="10" rx="4" fill={skin} />

      {/* Head */}
      <circle cx="32" cy="29" r="15" fill={skin} />

      {spec.beard && (
        <path d="M19 31c0 9 6 15 13 15s13-6 13-15c0 6-6 9-13 9s-13-3-13-9z" fill={hair} opacity="0.55" />
      )}

      {/* Hair on top, drawn after the head so it sits over the hairline. */}
      {spec.style === 'short' && (
        <path d="M17 27c0-9 7-14 15-14s15 5 15 14c-2-5-7-7-15-7s-13 2-15 7z" fill={hair} />
      )}
      {spec.style === 'buzz' && (
        <path d="M18 27c0-8 6-13 14-13s14 5 14 13c-3-3-8-5-14-5s-11 2-14 5z" fill={hair} opacity="0.9" />
      )}
      {(spec.style === 'long' || spec.style === 'bob') && (
        <path d="M17 27c0-9 7-14 15-14s15 5 15 14c-2-6-7-8-15-8s-13 2-15 8z" fill={hair} />
      )}
      {spec.style === 'bun' && (
        <>
          <circle cx="32" cy="11" r="6" fill={hair} />
          <path d="M17 27c0-9 7-14 15-14s15 5 15 14c-2-6-7-8-15-8s-13 2-15 8z" fill={hair} />
        </>
      )}

      {/* Eyes — closed-arc "happy" eyes rather than dots, which is most of
          what makes a flat face read as smiling rather than blank. */}
      <path
        d="M25 29c1.2-1.6 3.8-1.6 5 0M34 29c1.2-1.6 3.8-1.6 5 0"
        stroke="#1B1B1F"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Smile */}
      <path
        d="M26 35c1.8 2.6 8.2 2.6 10 0"
        stroke="#1B1B1F"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
