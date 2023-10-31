'use server'

import { revalidatePath } from 'next/cache'

import {
  type Spelling_Question_Difficulty,
  type Spelling_Question_Type
} from '@/data/games/spelling'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export const saveAnswers = async ({
  answers,
  type,
  difficulty
}: {
  answers: string[]
  type: Spelling_Question_Type
  difficulty: Spelling_Question_Difficulty
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
