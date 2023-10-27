import React from 'react'

import { Input } from '@/components/ui/input'

type SearchProps = {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
} & React.ComponentPropsWithoutRef<'input'>

const Search = (props: SearchProps) => {
  const { searchValue, setSearchValue, ...rest } = props

  return (
    <Input
      placeholder='搜尋'
      value={searchValue}
      aria-label='搜尋'
      onChange={(e) => setSearchValue(e.target.value)}
      {...rest}
    />
  )
}

export default Search
