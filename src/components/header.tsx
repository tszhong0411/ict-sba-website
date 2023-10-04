'use client'

import Link from 'next/link'
import { type Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'

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
  session: Session | null
}

const Header = (props: HeaderProps) => {
  const { session } = props

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
    <header className='p-3'>
      <div className='mx-auto flex max-w-5xl items-center justify-between'>
        <nav className='flex items-center gap-6'>
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className='flex gap-2'>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>{session.user.username}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>我的帳戶</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`/user/${session.user.username}`}>個人檔案</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button type='button' onClick={() => signOut()}>
                    登出
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => signIn()}>登入 / 註冊</Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
