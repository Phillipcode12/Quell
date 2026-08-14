import { ImageResponse } from 'next/og'

// Browser tab icon, drawn from the Quell eye mark rather than the default
// Next.js logo that shipped with the scaffold.
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#060606',
        }}
      >
        {/* Mirrors QuellMark. Satori has no <mask>, so the knockout is drawn
            as bands in the background colour — same result on a solid ground. */}
        <svg width="58" height="36" viewBox="0 0 100 62">
          <path
            d="M0 31 Q25 0 50 0 Q75 0 100 31 Q75 62 50 62 Q25 62 0 31 Z"
            fill="#00a7b5"
          />
          <g
            fill="none"
            stroke="#060606"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
          >
            {/* Bands are cut wider than the master mark: at 64px the measured
                carton widths collapse into mush. */}
            <path
              d="M49.5 11 C53 23 64.1 34 64.1 44.6 A14.6 14.6 0 1 1 34.9 44.6 C34.9 34 46 23 49.5 11 Z"
              strokeWidth="8.6"
            />
            <circle cx="58" cy="42.2" r="7" strokeWidth="8.6" />
            <path d="M62.5 46.6 L79 60" strokeWidth="8.6" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  )
}
