import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getCurrentUser } from '@/lib/auth'
import { BRAND } from '@/lib/product-content'
import { appUrl } from '@/lib/site'

const title = `${BRAND.name} — ${BRAND.slogan}`
const description = `${BRAND.trademark} ${BRAND.productType}. Patented, MD-developed formula that reinforces the tear film’s oil layer to help reduce moisture loss. ${BRAND.size}.`

export const metadata: Metadata = {
  // Makes the generated opengraph-image and sitemap URLs absolute.
  metadataBase: new URL(appUrl()),
  title: {
    default: title,
    template: `%s — ${BRAND.name}`,
  },
  description,
  applicationName: BRAND.name,
  openGraph: {
    type: 'website',
    siteName: BRAND.name,
    title,
    description,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  alternates: { canonical: '/' },
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
