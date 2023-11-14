'use client'

import { type Quiz } from '@prisma/client'
import { Loader2Icon } from 'lucide-react'
import { notFound } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

import { addScore } from '@/actions/add-score'
import { saveAnswers } from '@/actions/save-answers'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { mc_questions } from '@/data/games/mc'
import { cn } from '@/lib/utils'

type FormProps = {
  type: string
  answers: Quiz | null
}

type QuestionProps = {
  option: string
  index: number
}

const Form = (props: FormProps) => {
  const { type, answers } = props

  const questions = mc_questions.find(
    (questionSet) => questionSet.type === type
  )?.questions
  const [currentUserAnswers, setCurrentUserAnswers] = React.useState<
    Array<string | undefined>
  >([])
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showAnswers, setShowAnswers] = React.useState(!!answers)

  if (!questions || questions.length === 0) {
    notFound()
  }

  const submitHandler = async () => {
    setIsSubmitting(true)

    if (
      currentUserAnswers.includes(undefined) ||
      currentUserAnswers.length !== questions.length
    ) {
      setIsSubmitting(false)

      return toast.error('請先填寫答案')
    }

    try {
      let score = 0

      for (const [index, answer] of currentUserAnswers.entries()) {
        if (answer === questions[index].answer) {
          score += 10
        }
      }

      await saveAnswers({
        answers: currentUserAnswers as string[],
        type,
        difficulty: 'n-a'
      })

      await addScore(score)

      setShowAnswers(true)
    } catch {
      toast.error('儲存答案時發生錯誤')
    }

    return setIsSubmitting(false)
  }

  return (
    <div className='mx-auto flex max-w-3xl flex-col justify-center gap-8'>
      {showAnswers && !!answers && (
        <>
          {questions.map((question, index) => {
            const { answers: userAnswers } = answers
            const isCorrect = question.answer === userAnswers[index]

            return (
              <div key={question.title}>
                <div className='mb-3 text-[calc(18px*var(--font-size))]'>
                  {index + 1}. {question.title}
                </div>
                {question.options.map((option) => (
                  <div
                    key={option}
                    className='text-[calc(16px*var(--font-size))]'
                  >
                    {option}
                    {option === question.answer && ' ✅'}
                    {!isCorrect && option === userAnswers[index] && ' ❌'}
                  </div>
                ))}
              </div>
            )
          })}
        </>
      )}
      {!showAnswers && (
        <>
          {questions.map((question, index) => (
            <div key={question.title}>
              <div className='mb-3 text-[calc(18px*var(--font-size))]'>
                {index + 1}. {question.title}
              </div>
              <RadioGroup
                onValueChange={(value) => {
                  setCurrentUserAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[index] = value
                    return newAnswers
                  })
                }}
              >
                {question.options.map((option, optionIndex) => (
                  <RadioButton
                    key={option}
                    option={option}
                    index={optionIndex}
                  />
                ))}
              </RadioGroup>
            </div>
          ))}
          <Button
            onClick={submitHandler}
            className={cn(
              'w-full',
              isSubmitting && 'cursor-not-allowed opacity-50'
            )}
            variant='green'
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2Icon className='mr-2 animate-spin' />}
            提交
          </Button>
        </>
      )}
    </div>
  )
}

const RadioButton = (props: QuestionProps) => {
  const { option, index } = props
  const id = React.useId()

  return (
    <div key={option} className='flex items-center space-x-2'>
      <RadioGroupItem value={option} id={`${index}-${id}`} />
      <Label
        htmlFor={`${index}-${id}`}
        className='text-[calc(16px*var(--font-size))]'
      >
        {option}
      </Label>
    </div>
  )
}

export default Form
