'use client'

import { ThemeProvider } from 'next-themes'

import { EdgeStoreProvider } from '@/lib/edgestore'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = (props: ProvidersProps) => {
  const { children } = props

  return (
    <EdgeStoreProvider>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
    </EdgeStoreProvider>
  )
}

export default Providers
