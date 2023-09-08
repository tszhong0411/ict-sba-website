import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Session {
    user: {
      id: string
      displayName: string
      username: string
      createdAt: string
    } & DefaultSession['user']
  }
}
