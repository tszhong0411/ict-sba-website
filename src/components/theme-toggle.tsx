'use client'

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from './ui/button'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const DISPLAY_TEXT = {
    light: '明亮模式',
    dark: '黑暗模式',
    system: '跟隨系統'
  }

  const currentTheme = DISPLAY_TEXT[theme as keyof typeof DISPLAY_TEXT]

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type='button' className='gap-2' variant='ghost'>
          {currentTheme === DISPLAY_TEXT.light && <SunIcon size={18} />}
          {currentTheme === DISPLAY_TEXT.dark && <MoonIcon size={18} />}
          {currentTheme === DISPLAY_TEXT.system && <MonitorIcon size={18} />}
          {currentTheme}
          <span className='sr-only'>切換主題</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <SunIcon size={16} className='mr-2' /> 明亮模式
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <MoonIcon size={16} className='mr-2' />
          黑暗模式
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <MonitorIcon size={16} className='mr-2' /> 跟隨系統
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle
