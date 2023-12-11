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
    email: z.string().min(1, '必填').email('無效的電子郵件'),
    password: z.string().min(1, '必填'),
    confirmPassword: z.string().min(1, '必填')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '密碼不一致',
    path: ['confirmPassword']
  })
  .refine((data) => /^[\d_a-z]+$/.test(data.username), {
    message: '含不適當的字元',
    path: ['username']
  })

export const searchSchema = z.object({
  search: z.string().min(1, '必填')
})

export const profileSchema = z
  .object({
    nickname: z.string(),
    username: z.string().min(1, '至少 1 個字元'),
    bio: z.string()
  })
  .refine((data) => /^[\d_a-z]+$/.test(data.username), {
    message: '含不適當的字元',
    path: ['username']
  })
