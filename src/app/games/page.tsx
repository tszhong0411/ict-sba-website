import Image from 'next/image'
import Link from 'next/link'

const GamesPage = () => {
  const games = [
    {
      name: '拼字遊戲',
      link: '/games/spelling',
      banner: '/images/games/spelling.png',
      description: '一個有趣的拼字遊戲，讓你挑戰你的詞彙知識和拼字能力。'
    },
    {
      name: '多項選擇題',
      link: '/games/mc',
      banner: '/images/games/mc.png',
      description: '提供有關文法、時態的多項選擇題。'
    },
    {
      name: '卡片配對',
      link: '/games/card-matching',
      banner: '/images/games/card-matching.png',
      description: '詞彙卡片配對，有效提升記憶力。'
    }
  ]

  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {games.map((game) => (
        <Link
          key={game.link}
          href={game.link}
          className='overflow-hidden rounded-lg border shadow-sm'
        >
          <Image
            src={game.banner}
            width={1280}
            height={630}
            alt={`${game.name}的封面`}
          />
          <div className='space-y-2 px-4 py-6'>
            <h2 className='text-2xl font-bold'>{game.name}</h2>
            <p>{game.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default GamesPage
