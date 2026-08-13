import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getCurrentUser } from '@/lib/auth'
import { BRAND } from '@/lib/product-content'

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.slogan}`,
  description: `${BRAND.trademark} ${BRAND.productType}. Patented, MD-developed formula that reinforces the tear film’s oil layer to help reduce moisture loss. ${BRAND.size}.`,
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const user = await getCurrentUser()

  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background">
        <CartProvider>
          <Header user={user} />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
