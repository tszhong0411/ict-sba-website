'use client'

import type { FormikHelpers } from 'formik'
import { useFormik } from 'formik'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { signUpSchema } from '@/schemas'

import { createUser, isEmailExists, isUsernameExists } from './actions'

type Values = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const SignUpForm = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (values: Values, helper: FormikHelpers<Values>) => {
    const { setFieldError } = helper
    setLoading(true)

    if (await isUsernameExists(values.username)) {
      setLoading(false)
      setFieldError('username', '此用戶名已被使用')

      return
    }

    if (await isEmailExists(values.email)) {
      setLoading(false)
      setFieldError('email', '此電子郵件已被使用')

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

  const { handleSubmit, getFieldProps, touched, errors } = useFormik<Values>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    // validateOnChange: false,
    validationSchema: toFormikValidationSchema(signUpSchema),
    onSubmit
  })

  const borderRed = 'border-red-500'

  return (
    <form className='space-y-4 px-4 py-6' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1.5'>
        <Label htmlFor='username'>用戶名</Label>
        <Input
          type='text'
          id='username'
          className={cn(errors.username && touched.username && borderRed)}
          required
          {...getFieldProps('username')}
        />
        {errors.username && touched.username && (
          <p className='text-sm text-red-500'>{errors.username}</p>
        )}
      </div>
      <div className='flex flex-col gap-1.5'>
        <Label htmlFor='email'>電子郵件</Label>
        <Input
          type='email'
          id='email'
          className={cn(errors.email && touched.email && borderRed)}
          required
          {...getFieldProps('email')}
        />
        {errors.email && touched.email && (
          <p className='text-sm text-red-500'>{errors.email}</p>
        )}
      </div>
      <div className='flex flex-col gap-1.5'>
        <Label htmlFor='password'>密碼</Label>
        <Input
          type='password'
          id='password'
          className={cn(errors.password && touched.password && borderRed)}
          required
          {...getFieldProps('password')}
        />
        {errors.password && touched.password && (
          <p className='text-sm text-red-500'>{errors.password}</p>
        )}
      </div>
      <div className='flex flex-col gap-1.5'>
        <Label htmlFor='confirm-password'>確認密碼</Label>
        <Input
          type='password'
          id='confirm-password'
          className={cn(
            errors.confirmPassword && touched.confirmPassword && borderRed
          )}
          required
          {...getFieldProps('confirmPassword')}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className='text-sm text-red-500'>{errors.confirmPassword}</p>
        )}
      </div>
      <Button type='submit' className='w-full' disabled={loading}>
        {loading && <Loader2 size={16} className='mr-2' />}
        註冊
      </Button>
    </form>
  )
}

export default SignUpForm
