'use client'

import Link from 'next/link'
import React from 'react'

import { spelling_questions } from '@/data/games/spelling'

import Search from '../search'

const SpellingPage = () => {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {spelling_questions.map((question) => (
        <Link href={`/games/spelling/${question.type}`} key={question.type}>
          <div>{question.type}</div>
        </Link>
      ))}
    </>
  )
}

export default SpellingPage
