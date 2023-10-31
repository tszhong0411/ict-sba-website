'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type BackProps = React.ComponentPropsWithoutRef<'button'>

const Back = (props: BackProps) => {
  const router = useRouter()

  return (
    <button
      className='group mb-8 flex items-center px-2 py-4'
      onClick={() => router.back()}
      type='button'
      {...props}
    >
      <ArrowLeft
        size={20}
        className='mr-2 transition-transform duration-300 group-hover:-translate-x-1'
      />
      返回
    </button>
  )
}

export default Back
