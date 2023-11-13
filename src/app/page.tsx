import Hero from '@/components/hero'

import Features from './features'
import Introduction from './introduction'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='space-y-36'>
        <Features />
        <Introduction />
      </div>
    </>
  )
}

export default Home
