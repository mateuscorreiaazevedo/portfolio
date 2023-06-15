import { prismaDb } from '@/main/config'
import { service } from '@/modules/core'

class ContactService {
  async sendMessage (data: ContactForm) {
    const response = await service.request<{ message: string; error?: string }>({
      url: '/messages/create',
      method: 'post',
      data
    })

    switch (response.statusCode) {
      case 200:
        return response.body.message
      case 500:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no servidor. Por favor tente novamente mais tarde.')
    }
  }

  async getAllMessages (isAuth: boolean) {
    if (!isAuth) {
      return null
    }

    const contacts = await prismaDb?.contact.findMany({
      orderBy: { createdAt: 'asc' }
    })

    if (contacts?.length === 0) {
      return null
    }

    const messages: Message[] | undefined = contacts?.map(contact => ({
      ...contact,
      createdAt: contact.createdAt.toISOString()
    }))

    return messages
  }

  async deleteMessageById (id: string) {
    const response = await service.request<{error?: string, message: string }>({
      url: `/messages/delete/${id}`,
      method: 'delete'
    })

    switch (response.statusCode) {
      case 200:
        return response.body.message
      case 404:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no servidor. Por favor tente novamente mais tarde.')
    }
  }
}

export const contactService = new ContactService()
