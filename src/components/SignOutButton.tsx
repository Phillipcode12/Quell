'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '@/components/CartProvider'

export function SignOutButton({ className = '' }: { className?: string }) {
  const { clear } = useCart()
  const router = useRouter()

  async function signOut() {
    await fetch('/api/auth/logout', { method: 'POST' })
    clear()
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={signOut}
      className={
        className ||
        'rounded-md border border-line px-3 py-1.5 text-muted transition hover:border-brand hover:text-white'
      }
    >
      Sign out
    </button>
  )
}
