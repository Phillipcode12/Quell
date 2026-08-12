'use client'

import { useEffect } from 'react'
import { useCart } from '@/components/CartProvider'

/** Empties the cart once the shopper lands on the success page. */
export function ClearCartOnMount() {
  const { clear } = useCart()

  useEffect(() => {
    clear()
  }, [clear])

  return null
}
