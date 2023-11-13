import React from 'react'

import { cn } from '@/lib/utils'

type FeatureCardProps = {
  emoji: React.ReactNode
  title: string
  text: string
  className?: string
}

const FeatureCard = (props: FeatureCardProps) => {
  const { text, emoji, title, className } = props

  return (
    <div
      className={cn(
        'rounded-xl border border-zinc-300 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-100 px-8 py-9 dark:border-zinc-700 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900',
        className
      )}
    >
      <h2 className='text-3xl font-extrabold'>{emoji}</h2>
      <h2 className='py-4 text-2xl font-extrabold'>{title}</h2>
      <div className='text-sm leading-6'>{text}</div>
    </div>
  )
}

export default FeatureCard
