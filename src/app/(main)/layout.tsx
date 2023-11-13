import React from 'react'

import Breadcrumb from '@/components/breadcrumb'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <>
      <Breadcrumb />
      {children}
    </>
  )
}

export default MainLayout
