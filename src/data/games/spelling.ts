export type Spelling_Question_Difficulty = 'easy' | 'medium' | 'hard'
export type Spelling_Question_Type = 'animals' | 'fruits' | 'countries'

export const SPELLING_DIFFICULTY_TEXT = {
  easy: '簡單',
  medium: '中等',
  hard: '困難'
}

export const SPELLING_TYPE_TEXT = {
  animals: '動物',
  fruits: '水果',
  countries: '國家'
}

type Spelling_Question = {
  type: Spelling_Question_Type
  questions: Array<{
    answer: string
    difficulty: Spelling_Question_Difficulty
  }>
}

export const spelling_questions: Spelling_Question[] = [
  {
    type: 'animals',
    questions: [
      {
        answer: 'dog',
        difficulty: 'easy'
      },
      {
        answer: 'cat',
        difficulty: 'easy'
      },
      {
        answer: 'rabbit',
        difficulty: 'easy'
      },
      {
        answer: 'lion',
        difficulty: 'easy'
      },
      {
        answer: 'elephant',
        difficulty: 'easy'
      },
      {
        answer: 'bird',
        difficulty: 'easy'
      },
      {
        answer: 'fish',
        difficulty: 'easy'
      },
      {
        answer: 'tiger',
        difficulty: 'medium'
      },
      {
        answer: 'bear',
        difficulty: 'medium'
      },
      {
        answer: 'parrot',
        difficulty: 'medium'
      },
      {
        answer: 'penguin',
        difficulty: 'medium'
      },
      {
        answer: 'kangaroo',
        difficulty: 'medium'
      },
      {
        answer: 'cheetah',
        difficulty: 'hard'
      },
      {
        answer: 'giraffe',
        difficulty: 'hard'
      },
      {
        answer: 'koala',
        difficulty: 'hard'
      },
      {
        answer: 'raccoon',
        difficulty: 'hard'
      },
      {
        answer: 'dolphin',
        difficulty: 'hard'
      }
    ]
  },
  {
    type: 'fruits',
    questions: [
      {
        answer: 'apple',
        difficulty: 'easy'
      },
      {
        answer: 'banana',
        difficulty: 'easy'
      },
      {
        answer: 'orange',
        difficulty: 'easy'
      },
      {
        answer: 'grape',
        difficulty: 'easy'
      },
      {
        answer: 'watermelon',
        difficulty: 'easy'
      },
      {
        answer: 'pineapple',
        difficulty: 'easy'
      },
      {
        answer: 'strawberry',
        difficulty: 'medium'
      },
      {
        answer: 'cherry',
        difficulty: 'medium'
      },
      {
        answer: 'avocado',
        difficulty: 'medium'
      },
      {
        answer: 'lime',
        difficulty: 'medium'
      },
      {
        answer: 'blackberry',
        difficulty: 'medium'
      },
      {
        answer: 'persimmon',
        difficulty: 'hard'
      },
      {
        answer: 'kumquat',
        difficulty: 'hard'
      },
      {
        answer: 'raspberry',
        difficulty: 'hard'
      },
      {
        answer: 'pomegranate',
        difficulty: 'hard'
      },
      {
        answer: 'papaya',
        difficulty: 'hard'
      }
    ]
  },
  {
    type: 'countries',
    questions: [
      {
        answer: 'japan',
        difficulty: 'easy'
      },
      {
        answer: 'france',
        difficulty: 'easy'
      },
      {
        answer: 'brazil',
        difficulty: 'easy'
      },
      {
        answer: 'china',
        difficulty: 'easy'
      },
      {
        answer: 'italy',
        difficulty: 'easy'
      },
      {
        answer: 'netherlands',
        difficulty: 'medium'
      },
      {
        answer: 'indonesia',
        difficulty: 'medium'
      },
      {
        answer: 'portugal',
        difficulty: 'medium'
      },
      {
        answer: 'kenya',
        difficulty: 'medium'
      },
      {
        answer: 'argentina',
        difficulty: 'medium'
      },
      {
        answer: 'philippines',
        difficulty: 'hard'
      },
      {
        answer: 'switzerland',
        difficulty: 'hard'
      },
      {
        answer: 'australia',
        difficulty: 'hard'
      },
      {
        answer: 'malaysia',
        difficulty: 'hard'
      },
      {
        answer: 'norway',
        difficulty: 'hard'
      }
    ]
  }
]
