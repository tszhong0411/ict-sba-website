export type Question_Difficulty = 'easy' | 'medium' | 'hard'

type Questions = Array<{
  type: string
  questions: Array<{
    image: string
    answer: string
    difficulty: Question_Difficulty
  }>
}>

export const spelling_questions: Questions = [
  {
    type: 'animals',
    questions: [
      {
        image: '/images/games/spelling/dog.jpg',
        answer: 'dog',
        difficulty: 'easy'
      },
      {
        image: '/images/games/spelling/cat.jpg',
        answer: 'cat',
        difficulty: 'easy'
      },
      {
        image: '/images/games/spelling/rabbit.jpg',
        answer: 'rabbit',
        difficulty: 'easy'
      },
      {
        image: '/images/games/spelling/lion.jpg',
        answer: 'lion',
        difficulty: 'easy'
      },
      {
        image: '/images/games/spelling/elephant.jpg',
        answer: 'elephant',
        difficulty: 'easy'
      },
      {
        image: '/images/games/spelling/bird.jpg',
        answer: 'bird',
        difficulty: 'easy'
      },
      {
        image: '/images/games/spelling/fish.jpg',
        answer: 'fish',
        difficulty: 'easy'
      },
      {
        image: '/images/games/spelling/tiger.jpg',
        answer: 'tiger',
        difficulty: 'medium'
      },
      {
        image: '/images/games/spelling/bear.jpg',
        answer: 'bear',
        difficulty: 'medium'
      },
      {
        image: '/images/games/spelling/cheetah.jpg',
        answer: 'cheetah',
        difficulty: 'hard'
      },
      {
        image: '/images/games/spelling/giraffe.jpg',
        answer: 'giraffe',
        difficulty: 'hard'
      }
    ]
  }
]
