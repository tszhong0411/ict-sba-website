import { Inter, Noto_Sans_TC } from 'next/font/google'
import { getServerSession } from 'next-auth'

import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import authOptions from '@/lib/auth'
import { cn } from '@/lib/utils'

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
  title: 'English vocabulary learning website'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang='en' className={cn(inter.variable, notoSansTC.variable)}>
      <body>
        <Header session={session} />
        <main className='mx-auto max-w-5xl py-12'>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
