import Link from 'next/link'

const GamesPage = () => {
  const games = [
    {
      name: '拼字遊戲',
      link: '/games/spelling',
      description: '一個有趣的拼字遊戲，讓你挑戰你的詞彙知識和拼字能力。'
    },
    {
      name: '多項選擇題',
      link: '/games/multiple-choice',
      description: '提供有關文法、時態的多項選擇題。'
    },
    {
      name: '卡片配對',
      link: '/games/card-matching',
      description: '詞彙卡片配對，有效提升記憶力。'
    }
  ]

  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {games.map((game) => (
        <Link
          key={game.link}
          href={game.link}
          className='space-y-4 rounded-lg border p-4 shadow-sm'
        >
          <h2 className='text-center text-3xl font-bold'>{game.name}</h2>
          <p>{game.description}</p>
        </Link>
      ))}
    </div>
  )
}

export default GamesPage
