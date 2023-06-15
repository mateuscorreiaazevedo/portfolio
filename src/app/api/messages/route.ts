import { NextResponse } from 'next/server'
import { prismaDb } from '@/main/config'
import { cookies } from 'next/headers'

export async function GET () {
  const isAuth = cookies().has('auth_token')

  // if (!isAuth) return NextResponse.redirect(new URL('/', req.url))
  const contacts = await prismaDb?.contact.findMany()

  if (isAuth) {
    return NextResponse.json({ contacts }, { status: 200 })
  }

  const messages = contacts?.map(contact => ({
    ...contact,
    createdAt: contact.createdAt.toISOString()
  }))

  return NextResponse.json({ messages }, { status: 200 })
}
