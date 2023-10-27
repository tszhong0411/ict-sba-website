import { Inter, Noto_Sans_TC } from 'next/font/google'

import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { getCurrentUser } from '@/lib/auth'
import { cn } from '@/lib/utils'

import Providers from './providers'
import Toaster from './toaster'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'VocabMaster | Vocabulary learning website'
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = async (props: RootLayoutProps) => {
  const { children } = props
  const user = await getCurrentUser()

  return (
    <html
      lang='en'
      className={cn(inter.variable, notoSansTC.variable)}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header user={user} />
          <main className='mx-auto max-w-7xl px-4 py-12 sm:px-8'>
            {children}
          </main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
