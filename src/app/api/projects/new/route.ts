import { NextRequest, NextResponse } from 'next/server'
import { prismaDb } from '@/main/config'
import decode from 'jwt-decode'

export async function POST(req: NextRequest) {
  const isAuth = req.headers.get('Authorization')
  const token = req.cookies.get('auth_token')?.value

  if (!isAuth) {
    return NextResponse.json({ error: 'Usuário não autenticado.' }, { status: 401 })
  }

  const body = await req.json()
  const { imageUrl, description, title, link } = body
  const user: User = decode(token!)

  const newProject = await prismaDb?.project.create({
    data: {
      description,
      imageUrl,
      link,
      title,
      userId: user.id
    }
  })

  if (!newProject) {
    return NextResponse.json(
      { error: 'O novo projeto não pôde ser adicionada.' },
      { status: 422 }
    )
  }

  return NextResponse.json(
    { message: 'Projeto adicionado com sucesso.' },
    { status: 201 }
  )
}
