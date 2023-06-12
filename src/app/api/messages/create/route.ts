import { NextResponse } from 'next/server'
import { prismaDb } from '@/main/config'

export async function POST (req: Request) {
  const body = await req.json()

  const { name, email, subject, message } = body

  const contact = await prismaDb?.contact.create({
    data: {
      email,
      message,
      name,
      subject
    }
  })

  if (!contact) {
    return NextResponse.json(
      { error: 'Sua mensagem não foi enviada. por favor tente novamente mais tarde.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: 'Sua mensagem foi enviada com sucesso, aguarde retorno nos próximos dias.' })
}
