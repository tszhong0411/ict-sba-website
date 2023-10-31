import {
  type Spelling_Question_Difficulty,
  type Spelling_Question_Type,
  spelling_questions
} from '@/data/games/spelling'

const getSpellingQuestions = (
  type: Spelling_Question_Type,
  difficulty: Spelling_Question_Difficulty
) => {
  return spelling_questions
    .find((questionSet) => questionSet.type === type)
    ?.questions.filter((question) => question.difficulty === difficulty)
}

export default getSpellingQuestions
