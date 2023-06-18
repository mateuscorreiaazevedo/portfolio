import { cookies } from 'next/headers'
import decode from 'jwt-decode'

export function getMe(): User | null {
  const token = cookies().get('auth_token')?.value

  if (!token) return null

  const user: User = decode(token)

  return user
}
