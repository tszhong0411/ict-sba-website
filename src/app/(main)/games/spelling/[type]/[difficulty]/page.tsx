import { getUserAnswers } from '@/actions/get-user-answers'
import {
  type Spelling_Question_Difficulty,
  type Spelling_Question_Type
} from '@/data/games/spelling'

import Form from './form'

type SpellingGamePageProps = {
  params: {
    type: Spelling_Question_Type
    difficulty: Spelling_Question_Difficulty
  }
}

const SpellingGamePage = async (props: SpellingGamePageProps) => {
  const {
    params: { type, difficulty }
  } = props
  const answers = await getUserAnswers(type, difficulty)

  return <Form type={type} difficulty={difficulty} answers={answers} />
}

export default SpellingGamePage
