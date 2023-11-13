'use server'

import { JSDOM } from 'jsdom'

export type Word = {
  word: string
  partOfSpeech: string
  meaning: Array<{
    type: string
    definition: {
      english: string
      chinese: string
    }
    examples: Array<{ english: string; chinese: string }>
  }>
}

type Languages =
  | 'english'
  | 'english-chinese-simplified'
  | 'english-chinese-traditional'

export const getDictionary = async (query: string, language: Languages) => {
  const dom = await JSDOM.fromURL(
    `https://dictionary.cambridge.org/us/dictionary/${language}/${query}`
  )
  const document = dom.window.document

  const partOfSpeech = [...document.querySelectorAll('.pr .entry-body__el')]

  const results: Word[] = []

  for (const el of partOfSpeech) {
    const result: Word = {
      word: el.querySelector('.hw.dhw')?.textContent as string,
      partOfSpeech: el.querySelector('span.pos.dpos')?.textContent as string,
      meaning: []
    }

    const hasDifferentType = !el.querySelector(
      '.pos-body .pr.dsense.dsense-noh'
    )

    const meanings = [
      ...el.querySelectorAll(
        hasDifferentType ? '.pos-body .pr.dsense' : '.def-block.ddef_block'
      )
    ]

    for (const meaning of meanings) {
      result.meaning.push({
        type: hasDifferentType
          ? (meaning.querySelector('.guideword.dsense_gw span')
              ?.textContent as string)
          : '',
        definition: {
          english: meaning.querySelector('.def.ddef_d.db')
            ?.textContent as string,
          chinese: meaning.querySelector(
            `${
              hasDifferentType ? '.def-body.ddef_b ' : ''
            }.trans.dtrans.dtrans-se`
          )?.textContent as string
        },
        examples: [...meaning.querySelectorAll('.examp.dexamp')].map(
          (example) => ({
            english: example.querySelector('.eg.deg')?.textContent as string,
            chinese: example.querySelector('.trans.dtrans.dtrans-se.hdb')
              ?.textContent as string
          })
        )
      })
    }

    results.push(result)
  }

  return results
}

export const getPronunciation = async (
  query: string,
  language: Languages
): Promise<string> => {
  const dom = await JSDOM.fromURL(
    `https://dictionary.cambridge.org/us/dictionary/${language}/${query}`
  )
  const document = dom.window.document

  return (
    document.querySelector(
      'audio[id=audio2] > source:nth-child(2)'
    ) as HTMLSourceElement
  ).src
}
