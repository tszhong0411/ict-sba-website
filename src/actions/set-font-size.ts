'use server'

import { cookies } from 'next/headers'

export const setFontSize = (fontSize: string) => {
  cookies().set('font-size', fontSize)
}
