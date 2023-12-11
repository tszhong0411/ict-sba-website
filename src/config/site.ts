export const config = {
  navLinks: [
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
      label: '留言簿',
      href: '/guestbook'
    },
    {
      label: '反饋',
      href: '/feedback'
    },
    {
      label: '其他',
      submenu: [
        {
          label: '網站地圖',
          href: '/sitemap',
          description: '本網站的結構，顯示所有子頁面'
        },
        {
          label: '聯絡我們',
          href: '/contact',
          description: '聯絡我們，提供反饋或建議'
        }
      ]
    },
    {
      label: '關於',
      href: '/about'
    }
  ],
  pathTranslation: {
    dictionary: '字典',
    games: '遊戲',
    guestbook: '留言簿',
    about: '關於',
    spelling: '拼字遊戲',
    mc: '多項選擇題',
    'card-matching': '卡片配對',
    feedback: '反饋',
    sitemap: '網站地圖',
    contact: '聯絡我們'
  }
}
