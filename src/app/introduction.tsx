import { AspectRatio } from '@/components/ui/aspect-ratio'

const Introduction = () => {
  return (
    <section>
      <h2 className='mx-auto mb-16 mt-6 max-w-[12ch] text-center text-5xl font-extrabold !leading-[1.2] tracking-tight lg:text-6xl'>
        介紹
      </h2>
      <div className='relative mx-auto max-w-5xl'>
        <AspectRatio ratio={16 / 9}>
          <video
            src='/videos/hero-section-video.mp4'
            className='h-full w-full rounded-lg dark:brightness-90'
            autoPlay
            loop
            muted
          />
        </AspectRatio>
        <div className='absolute inset-0 left-1/2 -z-10 w-full -translate-x-1/2 bg-[radial-gradient(circle,_rgba(131,58,180,0.5)_0%,_rgba(253,29,29,0.5)_50%,_rgba(252,176,69,0.5)_100%)] blur-3xl' />
      </div>
    </section>
  )
}

export default Introduction
