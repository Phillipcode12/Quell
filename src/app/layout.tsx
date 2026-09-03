import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SiteHelper } from '@/components/SiteHelper'
import { PageViewTracker } from '@/components/PageViewTracker'
import { getCurrentUser } from '@/lib/auth'
import { isAdminEmail } from '@/lib/admin'
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
  /**
   * Google Search Console ownership.
   *
   * Not a secret — it is served in the page source, and it proves nothing on
   * its own. It must not be removed: Search Console rechecks periodically and
   * silently unverifies the property if it disappears, taking the search
   * performance data and indexing reports with it.
   *
   * The property is currently owned by a personal Google account, because
   * Phillip.moore@meibum.com could not become a Google Account while it held
   * an existing Drive visitor session. Add the work identity as an Owner under
   * Settings → Users and permissions once that is sorted; the property does
   * not need re-verifying to change hands.
   */
  verification: {
    google: 'DwaOWhNA6YcSvkyFzr-XcKcYmwYndFCV3M2mNuvl0FU',
  },
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const user = await getCurrentUser()
  const isAdmin = isAdminEmail(user?.email)

  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background">
        <CartProvider>
          <Header user={user} isAdmin={isAdmin} />
          <main className="flex-1">{children}</main>
          <Footer />
          <SiteHelper />
          <PageViewTracker />
        </CartProvider>
      </body>
    </html>
  )
}
