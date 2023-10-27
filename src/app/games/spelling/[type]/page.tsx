'use client'

import React from 'react'

import {
  type Question_Difficulty,
  spelling_questions
} from '@/data/games/spelling'

type GamePageProps = {
  params: {
    type: string
  }
}

const GamePage = (props: GamePageProps) => {
  const {
    params: { type }
  } = props

  const [difficulty, setDifficulty] =
    React.useState<Question_Difficulty>('easy')

  console.log(spelling_questions.find((q) => q.type === type)?.questions)

  return <div />
}

export default GamePage
