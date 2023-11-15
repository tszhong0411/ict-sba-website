import Mdx from '@/components/mdx'
import getPage from '@/utils/get-page'

export const metadata = {
  title: '關於'
}

const AboutPage = () => {
  const page = getPage('about')

  return <Mdx code={page.body.code} />
}

export default AboutPage
