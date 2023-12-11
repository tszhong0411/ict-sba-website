import Link from 'next/link'

const SignIn = () => {
  return (
    <>
      <h2 className='mb-4 text-2xl font-bold'>留言簿</h2>
      請先{' '}
      <Link className='font-semibold underline' href='/auth?action=sign-in'>
        登入
      </Link>{' '}
      以繼續留言
    </>
  )
}

export default SignIn
