import React from 'react'

import { getMessages } from '@/actions/guestbook'
import { getCurrentUser } from '@/lib/auth'

import Form from './form'
import Messages from './messages'
import SignIn from './sign-in'

export const metadata = {
  title: '留言簿'
}

const GuestbookPage = async () => {
  const user = await getCurrentUser()
  const messages = await getMessages()

  return (
    <div className='mx-auto max-w-2xl'>
      <div className='rounded-lg border p-4'>
        {!user && <SignIn />}
        {user && <Form user={user} />}
      </div>
      <Messages user={user} messages={messages} />
    </div>
  )
}

export default GuestbookPage
