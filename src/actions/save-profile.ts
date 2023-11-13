'use server'

import { revalidatePath } from 'next/cache'
import { type Session } from 'next-auth'

import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export const saveProfile = async (
  profile: Partial<Omit<Session['user'], 'email'>>
) => {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('User not found')
  }

  await prisma.user.update({
    where: {
      id: user.id
    },
    data: profile
  })

  revalidatePath('/', 'layout')
}
