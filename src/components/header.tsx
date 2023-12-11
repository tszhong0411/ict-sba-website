'use client'

import { BookOpen, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import React from 'react'

import { config } from '@/config/site'
import { cn } from '@/lib/utils'

import ChangeFontSize from './change-font-size'
import MobileNav from './mobile-nav'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'

type HeaderProps = {
  user: Session['user'] | null
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>((props, ref) => {
  const { className, title, children, ...rest } = props

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...rest}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'

const Header = (props: HeaderProps) => {
  const { user } = props

  return (
    <header className='px-2 py-8 print:hidden sm:px-6'>
      <div className='relative mx-auto flex h-10 max-w-7xl items-center justify-between'>
        <div className='flex items-center gap-2'>
          <MobileNav />
          <Link
            href='/'
            className='flex items-center gap-2 font-bold max-sm:hidden'
          >
            <BookOpen />
            VocabMaster
          </Link>
        </div>
        <NavigationMenu className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 sm:flex'>
          <NavigationMenuList>
            {config.navLinks.map((link) =>
              link.submenu ? (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                      {link.submenu.map((sublink) => (
                        <ListItem
                          key={sublink.label}
                          title={sublink.label}
                          href={sublink.href}
                        >
                          {sublink.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex items-center gap-6'>
          <ChangeFontSize />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button type='button' className='flex items-center gap-2'>
                  {!user.image && <UserIcon size={24} />}
                  {user.image && (
                    <Image
                      src={user.image}
                      width={24}
                      height={24}
                      alt={`${user.username} 的個人圖片`}
                    />
                  )}
                  {user.username}
                </Button>
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
