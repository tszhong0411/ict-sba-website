'use client'

import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { searchSchema } from '@/schemas'

import { getDictionary, Word } from './action'

type Values = {
  search: string
}

const DictionaryPage = () => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<Word[]>()

  const onSubmit = async (values: Values) => {
    setLoading(true)

    const result = await getDictionary(
      values.search,
      'english-chinese-traditional'
    )

    if (result.length === 0) {
      setLoading(false)
      return toast.error('詞語不存在')
    }

    setData(result)

    return setLoading(false)
  }

  const { handleSubmit, getFieldProps, touched, errors } = useFormik<Values>({
    initialValues: {
      search: ''
    },
    validationSchema: searchSchema,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false
  })

  return (
    <div className='min-h-[--content] px-4'>
      <h2 className='mb-6 text-center text-3xl font-semibold sm:text-4xl'>
        字典
      </h2>
      <form
        className='flex flex-col gap-1.5 sm:flex-row'
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          className={cn(
            'w-full',
            errors.search && touched.search && 'border-red-500'
          )}
          placeholder='在這裡輸入你想查詢的詞語'
          required
          {...getFieldProps('search')}
        />
        <Button className='shrink-0' type='submit'>
          搜尋
        </Button>
      </form>
      <div>
        {errors.search && touched.search && (
          <p className='text-sm text-red-500'>{errors.search}</p>
        )}
      </div>
      {loading && <p>loading...</p>}
      {data && (
        <div className='my-12 space-y-16 sm:px-4'>
          {data.map(({ word, partOfSpeech, meaning }) => (
            <div
              key={`${word}-${partOfSpeech}-${meaning[0].definition.english}`}
            >
              <h2 className='my-2 text-4xl'>{word}</h2>
              <p className='text-sm font-bold italic'>{partOfSpeech}</p>
              {meaning.map(({ type, definition, examples }) => (
                <React.Fragment key={`${type}-${definition.english}`}>
                  <Separator className='my-2 h-0.5' />
                  <div className='px-2'>
                    {type && (
                      <h3 className='mb-4'>
                        <span className='font-bold'>{word}</span>{' '}
                        <span className='text-sm font-bold italic'>
                          {' '}
                          {partOfSpeech}
                        </span>{' '}
                        ({type})
                      </h3>
                    )}
                    <div className='space-y-2'>
                      <p className='font-bold'>{definition.english}</p>
                      <p className='font-bold'>{definition.chinese}</p>
                    </div>
                    {examples.map(({ english, chinese }) => (
                      <ul
                        key={`${english}-${chinese}`}
                        className='my-4 ml-6 list-disc'
                      >
                        <li>
                          <p>{english}</p>
                          <p>{chinese}</p>
                        </li>
                      </ul>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DictionaryPage
