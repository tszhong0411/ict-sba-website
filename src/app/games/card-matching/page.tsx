import Script from 'next/script'

import { AspectRatio } from '@/components/ui/aspect-ratio'

const CardMatchingPage = () => {
  return (
    <div>
      <AspectRatio ratio={16 / 9}>
        <embed src='/videos/sba.swf' className='h-full w-full' />
      </AspectRatio>

      <Script src='https://unpkg.com/@ruffle-rs/ruffle' />
    </div>
  )
}

export default CardMatchingPage
