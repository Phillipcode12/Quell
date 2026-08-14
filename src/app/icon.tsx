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
        <svg width="56" height="35" viewBox="0 0 64 40">
          <path
            d="M1.5 20C12 4.5 52 4.5 62.5 20C52 35.5 12 35.5 1.5 20Z"
            fill="#00a7b5"
          />
          <path
            d="M32 7.5c0 0 11 12.2 11 17.4a11 11 0 1 1-22 0C21 19.7 32 7.5 32 7.5Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.4"
          />
          <circle
            cx="31"
            cy="23.5"
            r="7"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.4"
          />
          <path
            d="M33.5 27.5 42 35.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  )
}
