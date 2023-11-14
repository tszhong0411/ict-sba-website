import React from 'react'

import { cn } from '@/lib/utils'

type SectionTitleProps = React.ComponentPropsWithoutRef<'h2'>

const SectionTitle = (props: SectionTitleProps) => {
  const { children, className, ...rest } = props

  return (
    <h2
      className={cn(
        'mx-auto mb-16 mt-6 max-w-[16rem] text-center text-3xl font-extrabold !leading-[1.2] tracking-tight sm:max-w-[26rem] sm:text-5xl lg:max-w-[30rem] lg:text-6xl',
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
