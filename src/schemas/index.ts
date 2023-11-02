import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string({
      required_error: '必填'
    })
    .email('無效的電子郵件'),
  password: z.string({
    required_error: '必填'
  })
})

export const signUpSchema = z
  .object({
    username: z.string().min(3, '至少 3 個字元'),
    email: z.string().min(1, { message: '必填' }).email('無效的電子郵件'),
    password: z.string().min(1, { message: '必填' }),
    confirmPassword: z.string().min(1, { message: '必填' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '密碼不一致',
    path: ['confirmPassword']
  })

export const searchSchema = z.object({
  search: z.string().min(1, { message: '必填' })
})
