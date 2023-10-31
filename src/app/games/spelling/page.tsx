'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Back from '@/components/back'
import { buttonVariants } from '@/components/ui/button'
import { spelling_questions, SPELLING_TYPE_TEXT } from '@/data/games/spelling'
import { cn } from '@/lib/utils'

const SpellingPage = () => {
  return (
    <>
      <Back />
      <h2 className='mb-16 mt-8 text-center text-5xl font-bold'>拼字遊戲</h2>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {spelling_questions.map((question) => (
          <div
            key={question.type}
            className='relative h-96 w-full rounded-lg border'
          >
            <Image
              src={`/images/games/spelling/${question.type}.jpg`}
              fill
              className='rounded-lg object-cover opacity-30'
              alt={`${question.type}'s banner`}
            />
            <div className='absolute top-4 w-full p-4 text-3xl font-semibold lg:text-5xl'>
              {SPELLING_TYPE_TEXT[question.type]}
            </div>
            <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/4 flex-col gap-2 text-3xl font-semibold sm:gap-4'>
              <Link
                href={`/games/spelling/${question.type}/easy`}
                className={cn(
                  buttonVariants({
                    size: 'lg'
                  }),
                  'text-2xl max-sm:h-10 max-sm:px-4 max-sm:py-2'
                )}
              >
                簡單
              </Link>
              <Link
                href={`/games/spelling/${question.type}/medium`}
                className={cn(
                  buttonVariants({
                    size: 'lg'
                  }),
                  'text-2xl max-sm:h-10 max-sm:px-4 max-sm:py-2'
                )}
              >
                中等
              </Link>
              <Link
                href={`/games/spelling/${question.type}/hard`}
                className={cn(
                  buttonVariants({
                    size: 'lg'
                  }),
                  'text-2xl max-sm:h-10 max-sm:px-4 max-sm:py-2'
                )}
              >
                困難
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SpellingPage
