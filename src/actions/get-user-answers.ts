'use server'

import { type Quiz } from '@prisma/client'

import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export const getUserAnswers = async (
  type: string,
  difficulty: string
): Promise<Quiz | null> => {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('User not found')
  }

  return await prisma.quiz.findUnique({
    where: {
      userId_type_difficulty: {
        userId: user.id,
        type,
        difficulty
      }
    }
  })
}
