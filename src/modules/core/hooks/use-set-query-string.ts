import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const useSetQueryString = (key: string, value: string) => {
  const params = useSearchParams()

  const setQueryString = useCallback(() => {
    const params = new URLSearchParams()
    params.set(key, value)

    return params.toString()
  }, [params])

  return setQueryString()
}
