import { NextResponse } from 'next/server'
import { prismaDb } from '@/main/config'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  const body = await req.json()

  const { email, password } = body

  const user = await prismaDb?.user.findUnique({
    where: { email }
  })

  if (!user) {
    return NextResponse.json({ error: 'Usuário não encontrado.' }, { status: 404 })
  }

  const comparePassword = await compare(password, user.password)

  if (!comparePassword) {
    return NextResponse.json({ error: 'Senha inválida.' }, { status: 401 })
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: '30d'
    }
  )

  const cookiesExpiresInSeconds = 60 * 60 * 24 * 30 // 1 month

  return NextResponse.json(
    {
      message: 'Usuário logado com sucesso!'
    },
    {
      headers: {
        'Set-Cookie': `auth_token=${token}; Path=/; max-age=${cookiesExpiresInSeconds}`
      }
    }
  )
}
