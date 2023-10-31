'use server'

import { mc_questions } from '@/data/games/mc'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

export const getMCScore = async (type: string) => {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('User not found')
  }

  const user_answers = await prisma.quiz.findUnique({
    where: {
      userId_type_difficulty: {
        userId: user.id,
        type,
        difficulty: 'n-a'
      }
    },
    select: {
      answers: true
    }
  })

  if (!user_answers) {
    return '未完成'
  }

  const questionSet = mc_questions.find((qs) => qs.type === type)

  if (!questionSet) {
    throw new Error('Questions not found')
  }

  let score = 0

  for (const [index, answer] of user_answers.answers.entries()) {
    if (Number(answer) === questionSet.questions[index].answer) {
      score += 10
    }
  }

  return score
}
