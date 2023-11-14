import { BookOpen, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { config } from '@/config/site'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const MobileNav = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='sm:hidden'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <div className='flex items-center gap-4 text-lg font-bold'>
          <BookOpen />
          VocabMaster
        </div>
        <nav className='my-6 flex flex-col gap-4 text-lg font-medium'>
          {config.navLinks.map((link) =>
            link.submenu ? (
              <Accordion type='single' key={link.label} collapsible>
                <AccordionItem value='item-1' className='border-none'>
                  <AccordionTrigger className='py-0'>
                    {link.label}
                  </AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-4 py-4 pl-4 text-lg font-medium'>
                    {link.submenu.map((sublink) => (
                      <Link
                        href={sublink.href}
                        key={sublink.href}
                        onClick={() => setOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
