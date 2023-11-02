'use server'

import { revalidatePath } from 'next/cache'

import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export const saveAnswers = async ({
  answers,
  type,
  difficulty
}: {
  answers: string[]
  type: string
  difficulty: string
}) => {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('User not found')
  }

  await prisma.quiz.create({
    data: {
      answers,
      type,
      difficulty,
      userId: user.id
    }
  })

  revalidatePath('/games/spelling/[type]/[difficulty]', 'page')
}
