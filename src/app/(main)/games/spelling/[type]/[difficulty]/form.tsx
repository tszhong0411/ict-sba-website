'use client'

import { type Quiz } from '@prisma/client'
import { Loader2Icon, Volume2Icon } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

import { addScore } from '@/actions/add-score'
import { getPronunciation } from '@/actions/dictionary'
import { saveAnswers } from '@/actions/save-answers'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  SPELLING_DIFFICULTY_TEXT,
  type Spelling_Question_Difficulty,
  type Spelling_Question_Type,
  SPELLING_TYPE_TEXT
} from '@/data/games/spelling'
import { cn } from '@/lib/utils'
import getSpellingQuestions from '@/utils/get-questions'

type FormProps = {
  type: Spelling_Question_Type
  difficulty: Spelling_Question_Difficulty
  answers: Quiz | null
}

const Form = (props: FormProps) => {
  const { type, difficulty, answers } = props

  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [currentUserAnswers, setCurrentUserAnswers] = React.useState<string[]>(
    []
  )
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const questions = getSpellingQuestions(type, difficulty)
  const [showAnswers, setShowAnswers] = React.useState(!!answers)
  const [accordionValue, setAccordionValue] = React.useState<string>('')

  if (!questions || questions.length === 0) {
    notFound()
  }

  const isFirstQuestion = currentIndex === 0
  const isLastQuestion = currentIndex === questions.length - 1

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }

    setAccordionValue('')
  }

  const setCurrentAnswer = (value: string) =>
    setCurrentUserAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[currentIndex] = value
      return newAnswers
    })

  const previousQuestion = () => {
    if (currentIndex - 1 !== -1) {
      resetInput()
      if (inputRef.current) {
        inputRef.current.value = currentUserAnswers[currentIndex - 1] ?? ''
      }
      return setCurrentIndex((prev) => prev - 1)
    }
  }

  const nextQuestion = () => {
    if (currentIndex + 1 !== questions.length) {
      resetInput()
      if (inputRef.current) {
        inputRef.current.value = currentUserAnswers[currentIndex + 1] ?? ''
      }
      return setCurrentIndex((prev) => prev + 1)
    }
  }

  const submitHandler = async () => {
    setIsSubmitting(true)

    try {
      let score = 0

      for (const [index, question] of questions.entries()) {
        if (question.answer === currentUserAnswers[index]) {
          score += 10
        }
      }

      await saveAnswers({
        answers: currentUserAnswers,
        type,
        difficulty
      })

      await addScore(score)

      setShowAnswers(true)
    } catch {
      toast.error('儲存答案時發生錯誤')
    }

    setIsSubmitting(false)
  }

  const lengthOfAnswer = questions[currentIndex].answer.length

  return (
    <>
      <div className='mx-auto max-w-3xl flex-col items-center justify-center gap-8'>
        <div className='flex w-full items-center justify-center'>
          <div className='flex flex-col items-center gap-4 p-16'>
            <div className='text-2xl font-bold'>難度</div>
            <span className='text-lg'>
              {SPELLING_DIFFICULTY_TEXT[difficulty]}
            </span>
          </div>
          <Separator orientation='vertical' className='h-20' />
          <div className='flex flex-col items-center gap-4 p-16'>
            <div className='text-2xl font-bold'>類型</div>
            <span className='text-lg'>{SPELLING_TYPE_TEXT[type]}</span>
          </div>
        </div>
        {!showAnswers && (
          <div className='flex gap-4 max-sm:flex-col'>
            <Image
              src={`/images/games/spelling/${questions[currentIndex].answer}.png`}
              width={1000 / 3}
              height={1500 / 3}
              className='mx-auto rounded-md border object-cover'
              alt={`第 ${currentIndex} 題的圖片`}
              priority
            />
            <div className='flex w-full flex-col gap-4'>
              <Label htmlFor='answer'>答案</Label>
              <Input
                maxLength={lengthOfAnswer}
                size={lengthOfAnswer}
                id='answer'
                ref={inputRef}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                className='mx-auto h-16 font-mono text-4xl tracking-[14px]'
                onKeyDown={(e) => e.key === 'Enter' && nextQuestion()}
              />
              <div className='flex justify-center gap-2'>
                {!isFirstQuestion && (
                  <Button onClick={previousQuestion} className='w-full'>
                    上一題
                  </Button>
                )}
                {!isLastQuestion && (
                  <Button onClick={nextQuestion} className='w-full'>
                    下一題
                  </Button>
                )}
                {isLastQuestion && (
                  <Button
                    onClick={submitHandler}
                    className={cn(
                      'w-full',
                      isSubmitting && 'cursor-not-allowed opacity-50'
                    )}
                    variant='green'
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <Loader2Icon className='mr-2 animate-spin' />
                    )}
                    提交
                  </Button>
                )}
              </div>
              <Accordion
                type='single'
                onValueChange={setAccordionValue}
                value={accordionValue}
                collapsible
              >
                <AccordionItem value='answer'>
                  <AccordionTrigger className='px-2'>提示</AccordionTrigger>
                  <AccordionContent className='flex items-center gap-2 px-2 text-2xl font-medium'>
                    {questions[currentIndex].hint}
                    <Volume2Icon
                      size={24}
                      className='cursor-pointer'
                      onClick={async () => {
                        const audio = new Audio(
                          await getPronunciation(
                            questions[currentIndex].answer,
                            'english-chinese-traditional'
                          )
                        )

                        await audio.play()
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}
        {showAnswers && !!answers && (
          <div className='space-y-4'>
            {questions.map((question, index) => {
              const { answers: userAnswers } = answers
              const isCorrect =
                question.answer.toLowerCase() ===
                (userAnswers[index] ?? '').toLowerCase()

              return (
                <div key={question.answer} className='space-y-4 p-4'>
                  <div className='relative mx-auto'>
                    <Image
                      src={`/images/games/spelling/${questions[index].answer}.png`}
                      width={1000 / 2}
                      height={1500 / 2}
                      className='mx-auto rounded-md border object-cover'
                      alt={`第 ${index} 題的圖片`}
                    />
                  </div>
                  <div className='flex flex-col text-center'>
                    {!isCorrect && (
                      <span className='text-4xl line-through'>
                        {userAnswers[index]} ❌
                      </span>
                    )}
                    <span className='text-4xl'>{question.answer} ✅</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Form
