import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const FeedbackPage = () => {
  return (
    <>
      <PageTitle title='反饋' />
      <form
        action='mailto:me@honghong.me'
        method='POST'
        encType='text/plain'
        className='mx-auto max-w-2xl space-y-4'
      >
        <div className='grid items-center gap-1.5'>
          <Label htmlFor='name'>名字</Label>
          <Input type='text' id='name' name='name' />
        </div>
        <div className='grid items-center gap-1.5'>
          <Label htmlFor='feedback'>留言</Label>
          <Textarea id='feedback' name='feedback' rows={20} />
        </div>
        <Button type='submit'>提交</Button>
      </form>
    </>
  )
}

export default FeedbackPage
