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

  async getAllMessages () {
    const response = await service.request<{ contacts: ContactInfo[]; error?: string}>({
      url: '/messages',
    })

    switch (response.statusCode) {
      case 200:
        return response.body.contacts
      case 500:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no servidor. Por favor tente novamente mais tarde.')
    }
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
