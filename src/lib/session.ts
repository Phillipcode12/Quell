import 'server-only'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

const COOKIE_NAME = 'quell_session'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 days

function secretKey() {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 16) {
    throw new Error(
      'AUTH_SECRET is missing or too short. Set it in .env (32+ random characters).',
    )
  }
  return new TextEncoder().encode(secret)
}

export type SessionPayload = { userId: string; email: string }

async function encrypt(payload: SessionPayload) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .sign(secretKey())
}

export async function readSession(): Promise<SessionPayload | null> {
  // Next.js 16: cookies() is async-only.
  const token = (await cookies()).get(COOKIE_NAME)?.value
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, secretKey(), {
      algorithms: ['HS256'],
    })
    if (typeof payload.userId !== 'string' || typeof payload.email !== 'string') {
      return null
    }
    return { userId: payload.userId, email: payload.email }
  } catch {
    // Expired or tampered token — treat as signed out.
    return null
  }
}

export async function createSession(payload: SessionPayload) {
  const token = await encrypt(payload)
  ;(await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  })
}

export async function destroySession() {
  ;(await cookies()).delete(COOKIE_NAME)
}

export { COOKIE_NAME }
