'use client'

import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import { type Session } from 'next-auth'
import { signOut } from 'next-auth/react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu'

type HeaderProps = {
  user: Session['user'] | null
}

const Header = (props: HeaderProps) => {
  const { user } = props

  const links = [
    {
      label: '首頁',
      href: '/'
    },
    {
      label: '字典',
      href: '/dictionary'
    },
    {
      label: '遊戲',
      href: '/games'
    },
    {
      label: '關於',
      href: '/about'
    }
  ]

  return (
    <header className='px-6 py-12'>
      <div className='relative mx-auto flex max-w-7xl items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 font-bold'>
          <BookOpen />
          VocabMaster
        </Link>
        <nav className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 sm:flex'>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='text-lg font-medium'
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-2'>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>{user.username}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>我的帳戶</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`/user/${user.username}`}>個人檔案</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button
                    type='button'
                    onClick={() => signOut()}
                    className='w-full'
                  >
                    登出
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='space-x-4'>
              <Link href='/auth'>登入</Link>
              <Link
                href='/auth?action=sign-up'
                className='rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 px-4 py-2 text-white'
              >
                註冊
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
