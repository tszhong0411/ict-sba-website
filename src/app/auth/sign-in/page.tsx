import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import authOptions from '@/lib/auth'

import Content from './content'

const SignInPage = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div className='flex min-h-[--content] items-center justify-center'>
      <Content />
    </div>
  )
}

export default SignInPage
