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
      <h2 className='text-[calc(30px*var(--font-size))] font-bold'>{emoji}</h2>
      <h2 className='py-4 text-[calc(24px*var(--font-size))] font-bold'>
        {title}
      </h2>
      <div className='text-[calc(14px*var(--font-size))] leading-6'>{text}</div>
    </div>
  )
}

export default FeatureCard
