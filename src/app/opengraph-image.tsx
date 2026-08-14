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
          {/* Paths mirror QuellMark in src/components/Logo.tsx. */}
          <svg width="146" height="82" viewBox="0 0 100 56">
            <path
              d="M0 26.8 Q25 0 50 0 Q75 0 100 26.8 Q75 53.4 50 53.4 Q25 53.4 0 26.8 Z"
              fill="#00a7b5"
            />
            <path
              d="M49.4 5.6 C53.2 16 65.4 26.4 65.4 33.4 A16 16 0 1 1 33.4 33.4 C33.4 26.4 45.6 16 49.4 5.6 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4.1"
              strokeLinejoin="miter"
              strokeMiterlimit="8"
            />
            <circle
              cx="50.6"
              cy="35.6"
              r="8"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4.1"
            />
            <path
              d="M55.8 40.4 L71 51.6"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4.6"
            />
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
