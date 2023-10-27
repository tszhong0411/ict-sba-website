import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { getServerSession, type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import hashPassword from './hash-password'
import prisma from './prisma'

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          return null
        }

        if (user.password !== hashPassword(credentials.password as string)) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          displayName: user.displayName,
          image: user.image,
          createdAt: user.createdAt,
          username: user.username
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token }) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: token.email as string
        },
        select: {
          id: true,
          email: true,
          displayName: true,
          image: true,
          createdAt: true,
          username: true
        }
      })

      if (!existingUser) {
        return token
      }

      return {
        ...token,
        ...existingUser
      }
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.displayName = token.displayName as string
      session.user.username = token.username as string
      session.user.createdAt = token.createdAt as string

      return session
    }
  },
  pages: {
    signIn: '/auth'
  },
  session: {
    strategy: 'jwt'
  }
}

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions)

  return session?.user ?? null
}

export default authOptions
