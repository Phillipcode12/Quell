import { ImageResponse } from 'next/og'
import { BRAND } from '@/lib/product-content'

// Card shown when a link to the site is pasted into a message, social post, or
// chat. Without this the preview renders as a bare grey box.
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${BRAND.trademark} — ${BRAND.slogan}`

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(900px 500px at 78% 30%, #0b3d44 0%, #060606 62%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* Mirrors QuellMark. Satori has no <mask>, so the knockout is drawn
              as bands in the background colour — the mark sits over the solid
              part of the gradient, so they match. */}
          <svg width="146" height="90" viewBox="0 0 100 62">
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
              <path
                d="M49.5 11 C53 23 64.1 34 64.1 44.6 A14.6 14.6 0 1 1 34.9 44.6 C34.9 34 46 23 49.5 11 Z"
                strokeWidth="5.7"
              />
              <circle cx="58" cy="42.2" r="6.4" strokeWidth="6" />
              <path d="M62.5 46.6 L79 60" strokeWidth="6" />
            </g>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
              Quell
            </div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 8,
                color: '#00a7b5',
                textTransform: 'uppercase',
              }}
            >
              {BRAND.tagline}
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            letterSpacing: -1.5,
            marginTop: 56,
            lineHeight: 1.1,
          }}
        >
          Give your dry eye the bird.
        </div>

        {/* Single text child: Satori rejects multi-child nodes without an
            explicit display, and JSX interpolation splits this into three. */}
        <div style={{ fontSize: 30, color: '#a3adb6', marginTop: 28 }}>
          {`${BRAND.productType} · ${BRAND.size}`}
        </div>
      </div>
    ),
    { ...size },
  )
}
