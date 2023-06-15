import { prismaDb } from '@/main/config'

export async function getMessages () {
  const contacts = await prismaDb?.contact.findMany()

  const messages = contacts?.map(contact => ({
    ...contact,
    createdAt: contact.createdAt.toISOString()
  }))

  return messages
}
