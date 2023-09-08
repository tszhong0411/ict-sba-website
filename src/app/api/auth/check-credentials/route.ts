import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export const POST = async (req: Request) => {
  const { username, email } = await req.json()

  if (!username && !email) {
    return NextResponse.json(
      {
        error: '缺少用戶名或電子郵件'
      },
      {
        status: 400
      }
    )
  }

  const usernameExists = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (usernameExists) {
    return NextResponse.json(
      {
        error: '用戶名已被使用'
      },
      {
        status: 409
      }
    )
  }

  const emailExists = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (emailExists) {
    return NextResponse.json(
      {
        error: '電子郵件已被使用'
      },
      {
        status: 409
      }
    )
  }

  return NextResponse.json({
    error: null
  })
}
