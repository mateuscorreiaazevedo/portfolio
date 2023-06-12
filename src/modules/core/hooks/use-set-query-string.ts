import { useCallback } from 'react'

export const useSetQueryString = (key: string, value: string, callback: any) => {
  const setQueryString = useCallback(() => {
    const params = new URLSearchParams()
    params.set(key, value)

    return params.toString()
  }, [callback])

  return setQueryString()
}
