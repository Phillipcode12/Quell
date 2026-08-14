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
        {/* Paths mirror QuellMark in src/components/Logo.tsx. */}
        <svg width="58" height="33" viewBox="0 0 100 56">
          <path
            d="M0 26.8 Q25 0 50 0 Q75 0 100 26.8 Q75 53.4 50 53.4 Q25 53.4 0 26.8 Z"
            fill="#00a7b5"
          />
          <path
            d="M49.4 5.6 C53.2 16 65.4 26.4 65.4 33.4 A16 16 0 1 1 33.4 33.4 C33.4 26.4 45.6 16 49.4 5.6 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4.8"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
          />
          <circle
            cx="50.6"
            cy="35.6"
            r="8"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4.8"
          />
          <path
            d="M55.8 40.4 L71 51.6"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5.2"
          />
        </svg>
      </div>
    ),
    { ...size },
  )
}
