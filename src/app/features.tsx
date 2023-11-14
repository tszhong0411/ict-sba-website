import FeatureCard from '@/components/feature-card'
import SectionTitle from '@/components/section-title'

const Features = () => {
  return (
    <section>
      <SectionTitle className='max-w-[16rem] sm:max-w-[26rem] sm:text-5xl lg:max-w-[30rem] lg:text-6xl'>
        全新、有趣的方式學習英語
      </SectionTitle>
      <div className='grid gap-8 md:grid-cols-3'>
        <FeatureCard
          emoji='💡'
          title='提示'
          text='當詞彙遁入迷霧時，我們的拼字遊戲是您的良師益友。充滿提示和發音功能，助您輕鬆應對挑戰，讓您在詞彙的迷失中找到正確的方向。'
        />
        <FeatureCard
          emoji='📖'
          title='字典'
          text='探索無限詞彙世界。利用我們的全面字典功能，輕鬆查找和學習新單字，豐富您的語言寶庫。'
          className='md:col-span-2'
        />
        <FeatureCard
          emoji='❓'
          title='多項選擇題'
          text='挑戰您的詞彙知識。透過我們巧妙設計的多項選擇題，擴展您的詞彙範疇，享受學習的樂趣。'
          className='md:col-span-2'
        />
        <FeatureCard
          emoji='🌙'
          title='黑暗模式'
          text='眼睛疲勞？切換到黑暗模式，舒緩您的閱讀體驗。讓您專注學習，同時保護您的視力。'
          className='md:col-span-1'
        />
      </div>
    </section>
  )
}

export default Features
