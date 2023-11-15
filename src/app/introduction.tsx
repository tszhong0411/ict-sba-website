import SectionTitle from '@/components/section-title'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const Introduction = () => {
  return (
    <section>
      <SectionTitle className='max-w-[16rem] sm:max-w-[26rem] sm:text-5xl lg:max-w-[30rem] lg:text-6xl'>
        介紹
      </SectionTitle>
      <div className='relative mx-auto max-w-5xl'>
        <AspectRatio ratio={16 / 9}>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          <video
            src='/videos/showcase.mp4'
            className='h-full w-full rounded-lg dark:brightness-90'
            loop
            controls
          />
        </AspectRatio>
        <div className='absolute inset-0 left-1/2 -z-10 w-full -translate-x-1/2 bg-[radial-gradient(circle,_rgba(131,58,180,0.5)_0%,_rgba(253,29,29,0.5)_50%,_rgba(252,176,69,0.5)_100%)] blur-3xl' />
      </div>
    </section>
  )
}

export default Introduction
