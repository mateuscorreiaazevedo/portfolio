import { NextRequest, NextResponse } from 'next/server'
import { prismaDb } from '@/main/config'
import decode from 'jwt-decode'

export async function POST (req: NextRequest) {
  const isAuth = req.headers.get('Authorization')
  const token = req.cookies.get('auth_token')?.value

  if (!isAuth) {
    return NextResponse.json({ error: 'Usuário não autenticado.' }, { status: 401 })
  }

  const body = await req.json()
  const { imageUrl, level, title } = body
  const user: User = decode(token!)

  const newSkill = await prismaDb?.skill.create({
    data: {
      imageUrl,
      level: parseInt(level, 10),
      title,
      userId: user.id
    }
  })

  if (!newSkill) {
    return NextResponse.json({ error: 'A nova skill não pôde ser adicionada.' }, { status: 422 })
  }

  return NextResponse.json({ message: 'Skill adicionada com sucesso.' }, { status: 201 })
}
