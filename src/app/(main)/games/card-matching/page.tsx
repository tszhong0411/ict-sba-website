import Script from 'next/script'

import PageTitle from '@/components/page-title'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export const metadata = {
  title: '卡片配對'
}

const CardMatchingPage = () => {
  return (
    <div>
      <PageTitle title='卡片配對' />
      <AspectRatio ratio={16 / 9}>
        <embed src='/videos/sba.swf' className='h-full w-full' />
      </AspectRatio>

      <Script src='https://unpkg.com/@ruffle-rs/ruffle' />
    </div>
  )
}

export default CardMatchingPage
