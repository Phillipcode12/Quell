import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
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
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
