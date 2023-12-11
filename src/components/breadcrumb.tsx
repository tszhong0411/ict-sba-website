'use client'

import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { config } from '@/config/site'
import { cn } from '@/lib/utils'

const Separator = () => <ChevronRightIcon className='mx-1' size={18} />

const Breadcrumb = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(Boolean)

  return (
    <ul className='flex items-center pb-8 pt-3 print:hidden'>
      <li className='text-foreground/60 hover:text-foreground/80'>
        <Link href='/'>首頁</Link>
      </li>
      {pathNames.map((link, index) => {
        if (!Object.keys(config.pathTranslation).includes(link)) {
          return null
        }

        const href = `/${pathNames.slice(0, index + 1).join('/')}`

        return (
          <React.Fragment key={link}>
            <Separator />
            <li
              className={cn(
                paths !== href && 'text-foreground/60 hover:text-foreground/80'
              )}
            >
              <Link href={href}>
                {
                  // bad code here
                  config.pathTranslation[
                    link as keyof typeof config.pathTranslation
                  ]
                }
              </Link>
            </li>
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Breadcrumb
