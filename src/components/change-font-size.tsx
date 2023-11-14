import { setFontSize } from '@/actions/set-font-size'

const ChangeFontSize = () => {
  return (
    <div className='flex items-end gap-1.5'>
      <button type='button' onClick={() => setFontSize('1')}>
        A
      </button>
      <button
        type='button'
        className='text-[20px]'
        onClick={() => setFontSize('1.3')}
      >
        A
      </button>
      <button
        type='button'
        className='text-[24px]'
        onClick={() => setFontSize('1.6')}
      >
        A
      </button>
    </div>
  )
}

export default ChangeFontSize
