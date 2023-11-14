import Link from 'next/link'

import { config } from '@/config/site'

const SitemapPage = () => {
  return (
    <div className='flex flex-col gap-4 text-2xl'>
      {config.navLinks.map((item) =>
        item.submenu ? (
          item.submenu.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))
        ) : (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        )
      )}
    </div>
  )
}

export default SitemapPage
