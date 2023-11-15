'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import PageTitle from '@/components/page-title'
import { buttonVariants } from '@/components/ui/button'
import { spelling_questions, SPELLING_TYPE_TEXT } from '@/data/games/spelling'
import { cn } from '@/lib/utils'

export const metadata = {
  title: '拼字遊戲'
}

const SpellingPage = () => {
  return (
    <>
      <PageTitle title='拼字遊戲' />
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {spelling_questions.map((question) => (
          <div key={question.type} className='relative rounded-lg border'>
            <Image
              src={`/images/games/spelling/${question.type}.png`}
              width={2250}
              height={1500}
              className='rounded-lg opacity-30'
              alt={`${SPELLING_TYPE_TEXT[question.type]}拼字的封面`}
              priority
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
