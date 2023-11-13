import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import PageTitle from '@/components/page-title'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

import EditProfile from './edit-profile'

type ProfileProps = {
  params: {
    username: string
  }
}

const Profile = async (props: ProfileProps) => {
  const { params } = props
  const { username } = params
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })
  const currentUser = await getCurrentUser()

  if (!user) {
    notFound()
  }

  const { image, nickname, bio, email, score } = user

  return (
    <div className='flex min-h-[--content] flex-col items-center justify-center py-8'>
      <div>
        {!image && <UserIcon size={120} className='mx-auto' />}
        {image && (
          <Image
            src={image}
            width={120}
            height={120}
            className='mx-auto rounded-full'
            alt={`${username} 的個人圖片`}
          />
        )}
      </div>
      <PageTitle title={nickname ?? username} className='mb-0' />
      {bio && (
        <p className='text-center text-lg text-secondary-foreground'>{bio}</p>
      )}
      <h2 className='my-12 text-center text-3xl font-medium tracking-widest'>
        總分數: {score}
      </h2>
      {currentUser?.email === email && (
        <div className='flex justify-center'>
          <EditProfile user={currentUser} />
        </div>
      )}
    </div>
  )
}

export default Profile
