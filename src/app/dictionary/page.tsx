'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { type z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { searchSchema } from '@/schemas'

import { getDictionary, type Word } from './action'

const DictionaryPage = () => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<Word[]>()

  const onSubmit = async (values: z.infer<typeof searchSchema>) => {
    setData([])
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

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: ''
    }
  })

  return (
    <div className='mx-auto min-h-[--content] max-w-5xl px-4'>
      <h2 className='mb-6 text-center text-3xl font-semibold sm:text-4xl'>
        字典
      </h2>
      <Form {...form}>
        <form
          className='flex w-full flex-col gap-1.5 sm:flex-row sm:items-end'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <FormItem className='sm:grow'>
                <FormLabel>搜尋</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='w-full'
                    placeholder='在這裡輸入你想查詢的詞語'
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={cn(
              'sm:w-24',
              loading && 'cursor-not-allowed opacity-70'
            )}
            type='submit'
          >
            {loading ? <Loader2 className='animate-spin' /> : '搜尋'}
          </Button>
        </form>
      </Form>
      {loading && (
        <p className='my-24 text-center text-3xl font-bold'>搜尋中...</p>
      )}
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
