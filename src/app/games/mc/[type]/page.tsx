import { getUserAnswers } from '@/actions/get-user-answers'

import Form from './form'

type MCGamePageProps = {
  params: {
    type: string
  }
}

const MCGamePage = async (props: MCGamePageProps) => {
  const {
    params: { type }
  } = props
  const answers = await getUserAnswers(type, 'n-a')

  return <Form type={type} answers={answers} />
}

export default MCGamePage
