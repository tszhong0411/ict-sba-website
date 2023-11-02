/* 
  Source: https://www.englishclub.com/esl-quizzes/grammar/ 
  Author: EnglishClub
*/
export type MC_Question = {
  type: string
  name: string
  questions: Array<{
    title: string
    options: string[]
    answer: string
  }>
  score?: string
}

export const mc_questions: MC_Question[] = [
  {
    type: 'gerunds',
    name: 'Gerunds',
    questions: [
      {
        title: 'I dislike ________ to the movies by myself.',
        options: ['going', 'to go', 'going/to go'],
        answer: 'going'
      },
      {
        title: 'We started ________ dinner without you.',
        options: ['eating', 'to eat', 'eating/to eat'],
        answer: 'eating/to eat'
      },
      {
        title: "I can't imagine ________ my own house.",
        options: ['buying', 'to buy', 'buying/to buy'],
        answer: 'buying'
      },
      {
        title: 'I used ________ that television show all the time.',
        options: ['watching', 'to watch', 'watching/to watch'],
        answer: 'to watch'
      },
      {
        title: 'I always eat breakfast before ________ to school.',
        options: ['going', 'to go', 'going/to go'],
        answer: 'going'
      },
      {
        title: 'When do you practice ________ the piano?',
        options: ['playing', 'to play', 'playing/to play'],
        answer: 'playing'
      },
      {
        title: 'My grandmother prefers ________ science fiction books.',
        options: ['reading', 'to read', 'reading/to read'],
        answer: 'reading/to read'
      },
      {
        title: 'My teacher said my essay needs ________ by tomorrow.',
        options: ['correcting', 'to correct', 'corrected'],
        answer: 'correcting'
      },
      {
        title: 'I am used ________ her in a bad mood.',
        options: ['to seeing', 'to see', 'seeing'],
        answer: 'to seeing'
      },
      {
        title: 'Our neighbor used _____ a pipe.',
        options: ['smoking', 'to smoking', 'to smoke'],
        answer: 'to smoke'
      }
    ]
  },
  {
    type: 'infinitive-or--ing',
    name: 'Infinitive or -ing',
    questions: [
      {
        title: 'We like ________ our grandmother on Sundays.',
        options: ['to visit', 'visiting', 'to visit/visiting'],
        answer: 'to visit/visiting'
      },
      {
        title: 'I might want ________ some money soon.',
        options: ['to borrow', 'borrowing', 'to borrow/borrowing'],
        answer: 'to borrow'
      },
      {
        title: 'My father hates ________ a tie to work.',
        options: ['to wear', 'wearing', 'to wear/wearing'],
        answer: 'to wear/wearing'
      },
      {
        title: "We can't afford ________ a vacation this summer.",
        options: ['to take', 'taking', 'to take/taking'],
        answer: 'to take'
      },
      {
        title: 'The company was pleased ________ your thank-you letter.',
        options: ['to receive', 'receiving', 'to receive/receiving'],
        answer: 'to receive'
      },
      {
        title: 'Would you mind ________ a window?',
        options: ['to open', 'opening', 'to open/opening'],
        answer: 'opening'
      },
      {
        title: 'My suitcase is light enough ________ this time.',
        options: ['to carry', 'carrying', 'to carry/carrying'],
        answer: 'to carry'
      },
      {
        title: 'She cannot leave the table without ________ her dinner.',
        options: ['to finish', 'finishing', 'to finish/finishing'],
        answer: 'finishing'
      },
      {
        title: 'The music will continue ________ until you turn it off.',
        options: ['to play', 'playing', 'to play/playing'],
        answer: 'to play/playing'
      },
      {
        title: 'My little brother dislikes ________ his hair brushed.',
        options: ['to have', 'having', 'to have/having'],
        answer: 'having'
      }
    ]
  }
]
