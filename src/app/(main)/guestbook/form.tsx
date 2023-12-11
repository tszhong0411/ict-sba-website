'use client'

import { UserIcon } from 'lucide-react'
import { type Session } from 'next-auth'
import React from 'react'
import { toast } from 'react-hot-toast'

import { createMessage } from '@/actions/guestbook'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

type FormProps = {
  user: Session['user']
}

const Form = (props: FormProps) => {
  const { user } = props
  const [message, setMessage] = React.useState('')
  const [isCreating, setIsCreating] = React.useState(false)

  const createMessageHandler = async () => {
    if (!message) return toast.error('請輸入留言')

    setIsCreating(true)
    const loading = toast.loading('新增留言中...')

    try {
      await createMessage(message)
    } catch (error) {
      setIsCreating(false)
      toast.dismiss(loading)
      toast.error((error as Error).message)
    }

    setIsCreating(false)
    toast.dismiss(loading)
    toast.success('成功新增留言')

    return setMessage('')
  }

  return (
    <>
      <div className='mb-2 flex gap-3'>
        <Avatar>
          <AvatarImage
            src={user.image as string}
            width={40}
            height={40}
            alt={user.name as string}
            className='h-10 w-10'
          />
          <AvatarFallback className='bg-transparent'>
            <UserIcon size={24} />
          </AvatarFallback>
        </Avatar>
        <Textarea
          placeholder='你的留言 ...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className='flex justify-end gap-2'>
        <Button
          onClick={createMessageHandler}
          type='button'
          disabled={isCreating}
        >
          提交
        </Button>
      </div>
    </>
  )
}

export default Form
