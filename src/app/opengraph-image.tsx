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
          <svg width="132" height="82" viewBox="0 0 64 40">
            <path
              d="M1.5 20C12 4.5 52 4.5 62.5 20C52 35.5 12 35.5 1.5 20Z"
              fill="#00a7b5"
            />
            <path
              d="M32 7.5c0 0 11 12.2 11 17.4a11 11 0 1 1-22 0C21 19.7 32 7.5 32 7.5Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
            />
            <circle
              cx="31"
              cy="23.5"
              r="7"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
            />
            <path
              d="M33.5 27.5 42 35.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
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
