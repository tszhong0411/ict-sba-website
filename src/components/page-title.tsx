import React from 'react'

import { cn } from '@/lib/utils'

type PageTitleProps = {
  title: string
} & React.ComponentPropsWithoutRef<'h2'>

const PageTitle = (props: PageTitleProps) => {
  const { title, className, ...rest } = props

  return (
    <h2
      className={cn(
        'mb-16 mt-8 text-center text-2xl font-bold md:text-4xl',
        className
      )}
      {...rest}
    >
      {title}
    </h2>
  )
}

export default PageTitle
