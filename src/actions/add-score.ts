'use server'

import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export const addScore = async (score: number) => {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('User not found')
  }

  await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      score: {
        increment: score
      }
    }
  })
}
