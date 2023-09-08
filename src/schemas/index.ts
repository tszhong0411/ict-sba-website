import { object, ref, string } from 'yup'

export const signInSchema = object({
  email: string().required('必填').email('無效的電子郵件'),
  password: string().required('必填')
})

export const signUpSchema = object({
  username: string().required('必填').min(3, '至少 3 個字元'),
  email: string().required('必填').email('無效的電子郵件'),
  password: string().required('必填'),
  confirmPassword: string()
    .required('必填')
    .oneOf([ref('password')], '密碼不一致')
})

export const searchSchema = object({
  search: string().required('必填')
})
