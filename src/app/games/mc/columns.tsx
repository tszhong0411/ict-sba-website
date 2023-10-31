'use client'

import { type ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'

import { type MC_Question } from '@/data/games/mc'

export const columns: Array<ColumnDef<MC_Question>> = [
  {
    accessorKey: 'name',
    header: '名稱',
    cell: ({ row }) => {
      const question_set = row.original
      const type = question_set.type
      const name = question_set.name

      return (
        <Link
          href={`/games/mc/${type}`}
          className='hover:text-blue-500 dark:hover:text-blue-400'
        >
          {name}
        </Link>
      )
    }
  },
  {
    accessorKey: 'score',
    header: '分數'
  }
]
