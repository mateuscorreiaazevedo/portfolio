import Cookies from 'js-cookie'

export const tokenHelper = {
  get: () => Cookies.get('auth_token')
}
