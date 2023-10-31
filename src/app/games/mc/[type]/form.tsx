import { type Quiz } from '@prisma/client'
import { notFound } from 'next/navigation'

import { mc_questions } from '@/data/games/mc'

type FormProps = {
  type: string
  answers: Quiz | null
}

const Form = (props: FormProps) => {
  const { type } = props
  // const { answers } = props
  const questions = mc_questions.find(
    (questionSet) => questionSet.type === type
  )?.questions

  if (!questions || questions.length === 0) {
    notFound()
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={question.title}>
          {index + 1}. {question.title}
        </div>
      ))}
    </div>
  )
}

export default Form
