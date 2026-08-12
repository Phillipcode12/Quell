'use client'

import { useState } from 'react'
import { useCart } from '@/components/CartProvider'

export function AddToCartButton({ productId }: { productId: string }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  return (
    <button
      onClick={() => {
        add(productId)
        setAdded(true)
        setTimeout(() => setAdded(false), 1200)
      }}
      className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
    >
      {added ? 'Added ✓' : 'Add to cart'}
    </button>
  )
}
