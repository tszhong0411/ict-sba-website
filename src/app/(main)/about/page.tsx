import Mdx from '@/components/mdx'
import getPage from '@/utils/get-page'

const AboutPage = () => {
  const page = getPage('about')

  return <Mdx code={page.body.code} />
}

export default AboutPage
