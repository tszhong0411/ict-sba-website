'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, UserIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { type Session } from 'next-auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { type z } from 'zod'

import { isUsernameExists } from '@/actions/credentials'
import { saveProfile } from '@/actions/save-profile'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useEdgeStore } from '@/lib/edgestore'
import { cn } from '@/lib/utils'
import { profileSchema } from '@/schemas'

type EditProfileProps = {
  user: Session['user']
}

const EditProfile = (props: EditProfileProps) => {
  const { user } = props
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [file, setFile] = React.useState<File | null>(null)
  const { edgestore } = useEdgeStore()
  const router = useRouter()

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: user.nickname ?? '',
      username: user.username,
      bio: user.bio ?? ''
    }
  })

  const saveAvatar = async (): Promise<string | null> => {
    if (file) {
      try {
        const res = await edgestore.publicFiles.upload({ file })

        return res.url
      } catch {
        toast.error('儲存時發生錯誤，請稍後再試。')
      }
    }

    return null
  }

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    setLoading(true)
    const oldUsername = user.username
    const isUsernameChanged = oldUsername !== values.username

    if (isUsernameChanged && (await isUsernameExists(values.username))) {
      setLoading(false)
      form.setError('username', { message: '此用戶名已被使用' })

      return
    }

    const avatarURL = await saveAvatar()

    try {
      await saveProfile({
        ...values,
        ...(avatarURL && {
          image: avatarURL
        })
      })
      setLoading(false)
      toast.success('個人資料已更新。')

      if (isUsernameChanged) {
        router.push(`/user/${values.username}`)
      }

      setOpen(false)
    } catch {
      toast.error('儲存時發生錯誤，請稍後再試。')
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type='button'>編輯個人資料</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>編輯個人資料</DialogTitle>
          <DialogDescription>
            在此處更改您的個人資料,完成後點 「儲存」。
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid gap-4 py-4'
          >
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='nickname' className='text-right'>
                頭像
              </Label>
              <div className='col-span-3 flex gap-2 max-sm:flex-col sm:items-center'>
                {!file && !user.image ? (
                  <UserIcon size={48} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      file ? URL.createObjectURL(file) : (user.image as string)
                    }
                    className='rounded-full'
                    width={48}
                    height={48}
                    alt='個人圖片預覽'
                  />
                )}
                <Input
                  type='file'
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name='nickname'
              render={({ field }) => (
                <FormItem className='grid grid-cols-4 items-center gap-4'>
                  <FormLabel className='text-right'>暱稱</FormLabel>
                  <div className='col-span-3 space-y-2'>
                    <FormControl>
                      <Input type='text' id='nickname' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem className='grid grid-cols-4 items-center gap-4'>
                  <FormLabel className='text-right'>用戶名</FormLabel>
                  <div className='col-span-3 space-y-2'>
                    <FormControl>
                      <Input type='text' id='username' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='bio'
              render={({ field }) => (
                <FormItem className='grid grid-cols-4 items-center gap-4'>
                  <FormLabel className='text-right'>個人簡介</FormLabel>
                  <div className='col-span-3 space-y-2'>
                    <FormControl>
                      <Textarea id='bio' {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type='submit'
                className={cn(loading && 'cursor-not-allowed opacity-50')}
                disabled={loading}
              >
                {loading && <Loader2Icon className='mr-2 animate-spin' />}
                儲存
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditProfile
