'use client'

import { useFormik } from 'formik'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { signInSchema } from '@/schemas'

type Values = {
  email: string
  password: string
}

const SignInFrom = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const onSubmit = async (values: Values) => {
    setLoading(true)

    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password
    })

    if (status?.error) {
      setLoading(false)
      toast.error('電子郵件或密碼錯誤')
      return
    }

    setLoading(false)
    router.push(callbackUrl ?? '/')
    router.refresh()
  }

  const { handleSubmit, getFieldProps, touched, errors } = useFormik<Values>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: toFormikValidationSchema(signInSchema),
    onSubmit,
    validateOnBlur: true
  })

  return (
    <form className='space-y-4 px-4 py-6' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1.5'>
        <Label htmlFor='email'>電子郵件</Label>
        <Input
          type='email'
          id='email'
          className={cn(errors.email && touched.email && 'border-red-500')}
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
          className={cn(
            errors.password && touched.password && 'border-red-500'
          )}
          required
          {...getFieldProps('password')}
        />
        {errors.password && touched.password && (
          <p className='text-sm text-red-500'>{errors.password}</p>
        )}
      </div>
      <Button type='submit' className='w-full' disabled={loading}>
        {loading && <Loader2 size={16} className='mr-2' />}
        登入
      </Button>
    </form>
  )
}

export default SignInFrom
