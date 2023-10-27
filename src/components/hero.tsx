'use client'

import { motion } from 'framer-motion'
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
    <div className='relative flex min-h-[--content] flex-col items-center justify-center'>
      <div className='text-center text-lg'>
        <h2 className='mb-2 text-2xl font-bold'>歡迎來到</h2>
        <h1 className='bg-gradient-to-r from-[#ff1835] to-[#ffc900] bg-clip-text text-8xl font-black text-transparent'>
          VocabMaster
        </h1>
      </div>

      <div className='my-12 flex flex-col items-center gap-12'>
        <div className='space-y-4'>
          <h2 className='text-center text-2xl font-medium'>
            學習詞彙，掌握英語！
          </h2>
          <p className='text-lg'>加入我們，有效提升您的英語詞彙技能。</p>
        </div>
        <button
          type='button'
          className={cn(
            'relative h-11 rounded-md bg-background from-[#ff1835] to-[#ffc900] px-8 text-lg font-medium hover:bg-gradient-to-r hover:text-white',
            'after:absolute after:-inset-px after:-z-10 after:rounded-[calc(var(--radius)-1px)] after:bg-gradient-to-r after:from-[#ff1835] after:to-[#ffc900]'
          )}
        >
          <motion.span
            className='absolute inset-0 -z-20 rounded-lg bg-gradient-to-br from-[#ff1835] to-[#ffc900] blur-xl'
            animate={{ scale: isBreathing ? scale : 1 }}
            transition={{ duration: 1, ease: 'linear' }}
          />
          開始學習
        </button>
      </div>

      {/* <div className='relative mx-auto max-w-5xl'>
        <AspectRatio ratio={16 / 9}>
          <video
            src='/videos/hero-section-video.mp4'
            className='h-full w-full rounded-lg dark:brightness-90'
            autoPlay
            loop
            muted
          />
        </AspectRatio>
        <div className='absolute inset-0 left-1/2 -z-10 w-full -translate-x-1/2 bg-[radial-gradient(circle,_rgba(131,58,180,0.5)_0%,_rgba(253,29,29,0.5)_50%,_rgba(252,176,69,0.5)_100%)] blur-3xl' />
      </div> */}
    </div>
  )
}

export default Hero
