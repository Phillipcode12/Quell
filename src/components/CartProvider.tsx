'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type CartLine = { productId: string; quantity: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  add: (productId: string, quantity?: number) => void
  setQuantity: (productId: string, quantity: number) => void
  remove: (productId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'quell_cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Load after mount so server and client render the same initial markup.
  //
  // react-hooks/set-state-in-effect flags this, and here it is a false
  // positive: the cart lives in localStorage, which the server cannot read.
  // Seeding it in the useState initializer instead would make the client's
  // first render disagree with the server's and throw a hydration mismatch.
  // Reading after mount is the behaviour we want, and it runs once.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      // eslint-disable-next-line react-hooks/set-state-in-effect -- see above
      if (raw) setLines(JSON.parse(raw))
    } catch {
      // Corrupt or unavailable storage — start with an empty cart.
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    // Don't persist until the stored cart has been read back, otherwise the
    // empty initial state overwrites a saved cart on the first render.
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // Ignore quota / private-mode failures.
    }
  }, [lines, hydrated])

  const add = useCallback((productId: string, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId)
      if (!existing) return [...prev, { productId, quantity }]
      return prev.map((l) =>
        l.productId === productId
          ? { ...l, quantity: Math.min(10, l.quantity + quantity) }
          : l,
      )
    })
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.productId !== productId)
        : prev.map((l) =>
            l.productId === productId
              ? { ...l, quantity: Math.min(10, quantity) }
              : l,
          ),
    )
  }, [])

  const remove = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const value = useMemo(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      add,
      setQuantity,
      remove,
      clear,
    }),
    [lines, add, setQuantity, remove, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
