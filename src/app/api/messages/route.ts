import { prismaDb } from '@/main/config'
import { NextResponse } from 'next/server'

export async function GET () {
  // const token = req.cookies.has('auth_token')

  // if (!token) {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

  const contacts = await prismaDb?.contact.findMany()

  const messages = contacts?.map(contact => ({
    ...contact,
    createdAt: contact.createdAt.toISOString()
  }))

  return NextResponse.json({ messages }, { status: 200 })
}
