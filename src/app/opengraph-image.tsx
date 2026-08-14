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
          {/* Production artwork — see src/components/Logo.tsx. */}
          <svg width="150" height="104" viewBox="38.46 24.86 169.61 117.14">
            <path
              fillRule="evenodd"
              fill="#00a7b5"
              d="M 138.132812 100.265625 C 142.015625 93.292969 140.5 82.742188 134.816406 76.183594 L 121.765625 61.425781 L 109.183594 76.183594 C 102.171875 84.273438 102.171875 97.644531 109.183594 105.734375 C 112.695312 109.777344 117.347656 111.800781 122 111.800781 C 124.542969 111.800781 127.085938 111.199219 129.441406 109.992188 L 119.925781 98.414062 L 117.851562 96.019531 L 117.730469 95.882812 C 115.429688 93.230469 115.332031 91.082031 117.632812 88.429688 L 121.871094 84.125 L 124.003906 86.546875 C 124.371094 86.96875 127.324219 89.789062 127.570312 90.289062 L 137.761719 100.800781 Z M 207.578125 87.738281 C 156.71875 26.566406 89.824219 26.566406 38.964844 87.738281 C 72.125 127.621094 112.105469 141.5 150.007812 129.375 L 137.6875 116.375 C 136.996094 116.808594 136.285156 117.210938 135.554688 117.582031 C 131.613281 119.574219 127.410156 120.507812 123.273438 120.496094 C 119.132812 120.507812 114.933594 119.574219 110.992188 117.582031 C 104.324219 114.195312 99.210938 108.125 97.136719 100.644531 C 94.625 91.519531 97.160156 81.277344 104.296875 74.140625 L 123.273438 54.976562 L 142.46875 74.175781 C 149.609375 81.3125 151.921875 91.519531 149.410156 100.644531 C 148.558594 103.71875 147.191406 106.554688 145.414062 109.0625 L 160.730469 125.222656 C 177.15625 117.738281 193.023438 105.242188 207.578125 87.738281 "
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
