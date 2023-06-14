import { prismaDb } from '@/main/config'
import { NextResponse } from 'next/server'

interface ParamsProps {
  params: {
    id?: string
  }
}

export async function DELETE (_: Request, { params }: ParamsProps) {
  const { id } = params

  const contact = await prismaDb?.contact.findUnique({ where: { id } })

  if (!contact) {
    return NextResponse.json({ error: 'Mensagem não encontrada.' }, { status: 404 })
  }

  await prismaDb?.contact.delete({ where: { id: contact.id } })

  return NextResponse.json({ message: 'Mensagem apagada com sucesso.' })
}
