import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { Header } from '@/components/Header'
import { getCurrentUser } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'ClearSight Rx — Prescription Eye Care',
  description:
    'Local development template for a prescription ophthalmic pharmacy storefront.',
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const user = await getCurrentUser()

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header user={user} />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-line bg-surface">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted">
              <p className="font-medium text-foreground">
                Development template — not a real pharmacy.
              </p>
              <p className="mt-2 max-w-3xl">
                This project is a local demo. It does not verify prescriptions,
                dispense medication, or provide medical advice. Dispensing
                prescription ophthalmics requires state pharmacy licensure, a
                valid prescription from a licensed prescriber, and pharmacist
                review before fulfillment.
              </p>
              <p className="mt-4">© {new Date().getFullYear()} ClearSight Rx</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
