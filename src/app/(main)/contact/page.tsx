import Mdx from '@/components/mdx'
import getPage from '@/utils/get-page'

const ContactPage = () => {
  const page = getPage('contact')

  return <Mdx code={page.body.code} />
}

export default ContactPage
