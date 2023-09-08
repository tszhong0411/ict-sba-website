'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import SignInFrom from './sign-in-form'
import SignUpForm from './sign-up-form'

const Content = () => {
  return (
    <Tabs defaultValue='sign-in' className='h-[340px] w-[400px]'>
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
