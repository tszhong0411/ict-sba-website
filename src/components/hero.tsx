'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

const Hero = () => {
  const [isBreathing, setIsBreathing] = React.useState(false)
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsBreathing(true)
      setScale(1.2)
      setTimeout(() => {
        setIsBreathing(false)
        setScale(1)
      }, 1500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative flex min-h-[calc(100vh-104px)] flex-col items-center justify-center'>
      <div className='text-center'>
        <h2 className='mb-2 text-[calc(24px*var(--font-size))] font-bold'>
          歡迎來到
        </h2>
        <h1 className='bg-gradient-to-r from-[#ff1835] to-[#ffc900] bg-clip-text text-[calc(48px*var(--font-size))] font-black text-transparent sm:text-[calc(96px*var(--font-size))]'>
          VocabMaster
        </h1>
      </div>

      <div className='my-12 flex flex-col items-center gap-12'>
        <div className='space-y-4'>
          <h2 className='text-center text-[calc(18px*var(--font-size))] font-medium sm:text-[calc(24px*var(--font-size))]'>
            學習詞彙，掌握英語！
          </h2>
          <p className='sm:text-[calc(18px*var(--font-size))]'>
            加入我們，有效提升您的英語詞彙技能。
          </p>
        </div>
        <Link
          className={cn(
            'relative flex h-11 items-center rounded-md bg-background from-[#ff1835] to-[#ffc900] px-8 text-[calc(18px*var(--font-size))] font-medium hover:bg-gradient-to-r hover:text-white',
            'after:absolute after:-inset-px after:-z-10 after:rounded-[calc(var(--radius)-1px)] after:bg-gradient-to-r after:from-[#ff1835] after:to-[#ffc900]'
          )}
          href='/games'
        >
          <motion.span
            className='absolute inset-0 -z-20 rounded-lg bg-gradient-to-br from-[#ff1835] to-[#ffc900] blur-xl'
            animate={{ scale: isBreathing ? scale : 1 }}
            transition={{ duration: 1, ease: 'linear' }}
          />
          開始學習
        </Link>
      </div>
    </div>
  )
}

export default Hero
