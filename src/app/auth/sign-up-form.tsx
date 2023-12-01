'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { type z } from 'zod'

import {
  createUser,
  isEmailExists,
  isUsernameExists
} from '@/actions/credentials'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signUpSchema } from '@/schemas'

const SignUpForm = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  const [loading, setLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    setLoading(true)

    if (await isUsernameExists(values.username)) {
      setLoading(false)
      form.setError('username', { message: '此用戶名已被使用' })

      return
    }

    if (await isEmailExists(values.email)) {
      setLoading(false)
      form.setError('email', { message: '此電子郵件已被使用' })

      return
    }

    try {
      await createUser({
        username: values.username,
        email: values.email,
        password: values.password
      })

      setLoading(false)
      toast.success('註冊成功')

      await signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: callbackUrl ?? '/'
      })
    } catch {
      setLoading(false)
      toast.error('註冊失敗')

      return
    }
  }

  return (
    <Form {...form}>
      <form
        className='space-y-4 px-4 py-6'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>用戶名</FormLabel>
              <FormControl>
                <Input type='text' id='username' required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>電子郵件</FormLabel>
              <FormControl>
                <Input type='email' id='email' required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>密碼</FormLabel>
              <FormControl>
                <div className='flex items-center gap-2'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    required
                    {...field}
                  />
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    size='icon'
                    variant='ghost'
                    type='button'
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>確認密碼</FormLabel>
              <FormControl>
                <div className='flex items-center gap-2'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id='confirm=password'
                    required
                    {...field}
                  />
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    size='icon'
                    variant='ghost'
                    type='button'
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={loading}>
          {loading && <Loader2Icon size={16} className='mr-2' />}
          註冊
        </Button>
      </form>
    </Form>
  )
}

export default SignUpForm
