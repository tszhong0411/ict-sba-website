import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/auth'

import Content from './content'

const SignInPage = async () => {
  const user = await getCurrentUser()

  if (user) {
    redirect('/')
  }

  return (
    <div className='flex min-h-[--content] items-center justify-center'>
      <Content />
    </div>
  )
}

export default SignInPage
