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
    hint?: string
  }>
}

export const spelling_questions: Spelling_Question[] = [
  {
    type: 'animals',
    questions: [
      {
        answer: 'dog',
        difficulty: 'easy',
        hint: 'd _ _'
      },
      {
        answer: 'cat',
        difficulty: 'easy',
        hint: 'c _ _'
      },
      {
        answer: 'rabbit',
        difficulty: 'easy',
        hint: 'r _ _ _ _ t'
      },
      {
        answer: 'lion',
        difficulty: 'easy',
        hint: 'l _ _ _'
      },
      {
        answer: 'elephant',
        difficulty: 'easy',
        hint: 'e _ _ _ _ _ _ t'
      },
      {
        answer: 'bird',
        difficulty: 'easy',
        hint: 'b _ _ _'
      },
      {
        answer: 'fish',
        difficulty: 'easy',
        hint: 'f _ _ _'
      },
      {
        answer: 'tiger',
        difficulty: 'medium',
        hint: 't _ _ _ _'
      },
      {
        answer: 'bear',
        difficulty: 'medium',
        hint: 'b _ _ _'
      },
      {
        answer: 'parrot',
        difficulty: 'medium',
        hint: 'p _ _ _ _ _'
      },
      {
        answer: 'penguin',
        difficulty: 'medium',
        hint: 'p _ _ _ _ i n'
      },
      {
        answer: 'kangaroo',
        difficulty: 'medium',
        hint: 'k a _ _ _ _ o o'
      },
      {
        answer: 'cheetah',
        difficulty: 'hard',
        hint: 'c _ _ _ _ _ h'
      },
      {
        answer: 'giraffe',
        difficulty: 'hard',
        hint: 'g _ _ _ _ _ e'
      },
      {
        answer: 'koala',
        difficulty: 'hard',
        hint: 'k _ _ _ _'
      },
      {
        answer: 'raccoon',
        difficulty: 'hard',
        hint: 'r _ _ _ _ _ n'
      },
      {
        answer: 'dolphin',
        difficulty: 'hard',
        hint: 'd _ _ _ _ _ _'
      }
    ]
  },
  {
    type: 'fruits',
    questions: [
      {
        answer: 'apple',
        difficulty: 'easy',
        hint: 'a _ _ _ _'
      },
      {
        answer: 'banana',
        difficulty: 'easy',
        hint: 'b _ _ _ _ _'
      },
      {
        answer: 'orange',
        difficulty: 'easy',
        hint: 'o _ _ _ _ _'
      },
      {
        answer: 'grape',
        difficulty: 'easy',
        hint: 'g _ _ _ _'
      },
      {
        answer: 'watermelon',
        difficulty: 'easy',
        hint: 'w _ _ _ _ _ _ _ _'
      },
      {
        answer: 'pineapple',
        difficulty: 'easy',
        hint: 'p _ _ _ _ _ _ _ _'
      },
      {
        answer: 'strawberry',
        difficulty: 'medium',
        hint: 's _ _ _ _ _ _ _ _ _'
      },
      {
        answer: 'cherry',
        difficulty: 'medium',
        hint: 'c _ _ _ _ _'
      },
      {
        answer: 'avocado',
        difficulty: 'medium',
        hint: 'a _ _ _ _ _ _'
      },
      {
        answer: 'lime',
        difficulty: 'medium',
        hint: 'l _ _ _'
      },
      {
        answer: 'blackberry',
        difficulty: 'medium',
        hint: 'b _ _ _ _ _ _ _ _'
      },
      {
        answer: 'persimmon',
        difficulty: 'hard',
        hint: 'p _ _ _ _ _ _ _ _ _'
      },
      {
        answer: 'kumquat',
        difficulty: 'hard',
        hint: 'k _ _ _ _ _ _'
      },
      {
        answer: 'raspberry',
        difficulty: 'hard',
        hint: 'r _ _ _ _ _ _ _ _'
      },
      {
        answer: 'pomegranate',
        difficulty: 'hard',
        hint: 'p _ _ _ _ _ _ _ _ _ _'
      },
      {
        answer: 'papaya',
        difficulty: 'hard',
        hint: 'p _ _ _ _ _'
      }
    ]
  },
  {
    type: 'countries',
    questions: [
      {
        answer: 'japan',
        difficulty: 'easy',
        hint: 'j _ _ _ _'
      },
      {
        answer: 'france',
        difficulty: 'easy',
        hint: 'f _ _ _ _ _'
      },
      {
        answer: 'brazil',
        difficulty: 'easy',
        hint: 'b _ _ _ _ _'
      },
      {
        answer: 'china',
        difficulty: 'easy',
        hint: 'c _ _ _ _'
      },
      {
        answer: 'italy',
        difficulty: 'easy',
        hint: 'i _ _ _ _'
      },
      {
        answer: 'netherlands',
        difficulty: 'medium',
        hint: 'n _ _ _ _ _ _ _ _ _'
      },
      {
        answer: 'indonesia',
        difficulty: 'medium',
        hint: 'i _ _ _ _ _ _ _ _'
      },
      {
        answer: 'portugal',
        difficulty: 'medium',
        hint: 'p _ _ _ _ _ _ _'
      },
      {
        answer: 'kenya',
        difficulty: 'medium',
        hint: 'k _ _ _ _'
      },
      {
        answer: 'argentina',
        difficulty: 'medium',
        hint: 'a _ _ _ _ _ _ _ _'
      },
      {
        answer: 'philippines',
        difficulty: 'hard',
        hint: 'p _ _ _ _ _ _ _ _ _ _'
      },
      {
        answer: 'switzerland',
        difficulty: 'hard',
        hint: 's _ _ _ _ _ _ _ _ _ _'
      },
      {
        answer: 'australia',
        difficulty: 'hard',
        hint: 'a _ _ _ _ _ _ _ _'
      },
      {
        answer: 'malaysia',
        difficulty: 'hard',
        hint: 'm _ _ _ _ _ _ _'
      },
      {
        answer: 'norway',
        difficulty: 'hard',
        hint: 'n _ _ _ _ _'
      }
    ]
  }
]
