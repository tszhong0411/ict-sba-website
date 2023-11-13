import { getMCScore } from '@/actions/get-mc-score'
import PageTitle from '@/components/page-title'
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
      <PageTitle title='多項選擇題' />
      <DataTable columns={columns} data={withScore} />
    </>
  )
}

export default MCPage
