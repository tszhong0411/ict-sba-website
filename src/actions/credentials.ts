'use server'

import hashPassword from '@/lib/hash-password'
import prisma from '@/lib/prisma'

type Credentials = {
  username: string
  email: string
  password: string
}

export const createUser = async (credentials: Credentials) => {
  await prisma.user.create({
    data: {
      username: credentials.username,
      nickname: credentials.username,
      email: credentials.email,
      password: hashPassword(credentials.password)
    }
  })
}

export const isUsernameExists = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })

  return !!user
}

export const isEmailExists = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return !!user
}
