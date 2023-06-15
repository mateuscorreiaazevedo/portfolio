import { service } from '@/modules/core'

class AuthService {
  async login (data: Login) {
    const response = await service.request<{message: string, error?: string}>({
      url: '/auth/login',
      method: 'post',
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

    switch (response.statusCode) {
      case 200:
        return response.body.message
      case 401:
        throw new Error(response.body.error)
      case 404:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro inesperado. Por favor, tente novamente mais tarde.')
    }
  }
}

export const authService = new AuthService()
