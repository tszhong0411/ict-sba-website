import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: '網站地圖'
}

const allLinks = [
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
    href: '/games',
    sublinks: [
      {
        label: '拼字遊戲',
        href: '/games/spelling'
      },
      {
        label: '多項選擇題',
        href: '/games/mc'
      },
      {
        label: '卡片配對',
        href: '/games/card-matching'
      }
    ]
  },
  {
    label: '反饋',
    href: '/feedback'
  },
  {
    label: '其他',
    sublinks: [
      {
        label: '網站地圖',
        href: '/sitemap'
      },
      {
        label: '聯絡我們',
        href: '/contact'
      }
    ]
  },
  {
    label: '關於',
    href: '/about'
  }
]

const SitemapPage = () => {
  return (
    <div className='flex flex-col gap-4 text-2xl'>
      {allLinks.map((item) =>
        item.sublinks ? (
          <React.Fragment key={item.label}>
            <h2>{item.label}</h2>
            <div className='flex flex-col gap-4 pl-8 text-2xl'>
              {item.sublinks.map((sublink) => (
                <Link key={sublink.label} href={sublink.href}>
                  {sublink.label}
                </Link>
              ))}
            </div>
          </React.Fragment>
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
