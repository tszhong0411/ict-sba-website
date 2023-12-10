import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const metadata = {
  title: '反饋'
}

const FeedbackPage = () => {
  return (
    <>
      <PageTitle title='反饋' />
      <form
        action='mailto:me@honghong.me'
        method='GET'
        encType='text/plain'
        className='mx-auto max-w-2xl space-y-4'
      >
        <div className='grid items-center gap-1.5'>
          <Label htmlFor='email'>電子郵件</Label>
          <Input type='text' id='email' name='email' />
        </div>
        <div className='grid items-center gap-1.5'>
          <Label htmlFor='subject'>標題</Label>
          <Input type='text' id='subject' name='subject' />
        </div>
        <div className='grid items-center gap-1.5'>
          <Label htmlFor='body'>留言</Label>
          <Textarea id='body' name='body' rows={20} />
        </div>
        <Button type='submit'>提交</Button>
      </form>
    </>
  )
}

export default FeedbackPage
