'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import SignInFrom from './sign-in-form'
import SignUpForm from './sign-up-form'

const Content = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tab = searchParams.get('action') || 'sign-in'
  const [activeTab, setActiveTab] = React.useState(tab)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/auth?action=${value}`)
  }

  React.useEffect(() => setActiveTab(tab), [tab])

  return (
    <Tabs
      defaultValue='sign-in'
      value={activeTab}
      onValueChange={handleTabChange}
      className='h-[340px] w-[400px]'
    >
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='sign-in'>登入</TabsTrigger>
        <TabsTrigger value='sign-up'>註冊</TabsTrigger>
      </TabsList>
      <TabsContent value='sign-in'>
        <SignInFrom />
      </TabsContent>
      <TabsContent value='sign-up'>
        <SignUpForm />
      </TabsContent>
    </Tabs>
  )
}

export default Content
