'use client'

import dayjs from 'dayjs'
import { UserIcon } from 'lucide-react'
import { type Session } from 'next-auth'
import React from 'react'
import { toast } from 'react-hot-toast'

import { deleteMessage } from '@/actions/guestbook'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export type Message = {
  id: number
  body: string
  image: string | null
  created_by: string
  updated_at: Date
}

type MessagesProps = {
  user: Session['user'] | null
  messages: Message[]
}

type UpdatedDateProps = {
  date: Date
}

const UpdatedDate = (props: UpdatedDateProps) => {
  const { date } = props
  const [formattedDate, setFormattedDate] = React.useState('')

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('YYYY-MM-DD HH:mm'))
  }, [date])

  if (!formattedDate) return <Skeleton className='h-4 w-24 rounded-md' />

  return <div className='text-xs text-muted-foreground'>{formattedDate}</div>
}

const Messages = (props: MessagesProps) => {
  const { user, messages } = props

  const [isDeleting, setIsDeleting] = React.useState(false)

  const deleteMessageHandler = async (id: number) => {
    setIsDeleting(true)
    const loading = toast.loading('刪除留言中 ...')

    try {
      await deleteMessage(id)
    } catch (error) {
      setIsDeleting(false)
      toast.dismiss(loading)
      toast.error((error as Error).message)
    }

    setIsDeleting(false)
    toast.dismiss(loading)
    toast.success('成功刪除留言')
  }

  return (
    <div className='mt-10 flex flex-col gap-4'>
      {messages.map((message) => {
        const { id, image, created_by, updated_at, body } = message

        return (
          <div key={id} className='rounded-lg border p-4'>
            <div className='mb-3 flex gap-3'>
              <Avatar>
                <AvatarImage
                  src={image ?? ''}
                  width={40}
                  height={40}
                  className='h-10 w-10 rounded-full'
                  alt={created_by}
                />
                <AvatarFallback className='bg-transparent'>
                  <UserIcon size={24} />
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col justify-center gap-px text-sm'>
                <div>{created_by}</div>
                <UpdatedDate date={updated_at} />
              </div>
            </div>
            <div className='break-words pl-[52px]'>{body}</div>
            {(user && created_by === user.name) ||
              (created_by === user?.username && (
                <div className='mt-4 flex justify-end'>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        disabled={isDeleting}
                        variant='destructive'
                        type='button'
                      >
                        刪除
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <div className='mb-2'>刪除一則留言</div>
                      <div className='flex justify-end gap-2'>
                        <AlertDialogCancel>取消</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            return deleteMessageHandler(id)
                          }}
                          className={buttonVariants({ variant: 'destructive' })}
                        >
                          刪除
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ))}
          </div>
        )
      })}
    </div>
  )
}

export default Messages
