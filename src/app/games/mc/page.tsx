import { getMCScore } from '@/actions/get-mc-score'
import Back from '@/components/back'
import { type MC_Question, mc_questions } from '@/data/games/mc'

import { columns } from './columns'
import DataTable from './data-table'

const MCPage = async () => {
  const withScore: MC_Question[] = []

  for (const question_set of mc_questions) {
    const score = await getMCScore(question_set.type)

    withScore.push({
      ...question_set,
      score
    })
  }

  return (
    <>
      <Back />
      <h2 className='mb-16 mt-8 text-center text-5xl font-bold'>多項選擇題</h2>
      <DataTable columns={columns} data={withScore} />
    </>
  )
}

export default MCPage
