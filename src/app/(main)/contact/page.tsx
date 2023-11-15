import Mdx from '@/components/mdx'
import getPage from '@/utils/get-page'

export const metadata = {
  title: '聯絡我們'
}

const ContactPage = () => {
  const page = getPage('contact')

  return <Mdx code={page.body.code} />
}

export default ContactPage
