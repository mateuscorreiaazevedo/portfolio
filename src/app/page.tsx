'use client'

import { Home } from '@/components'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Page () {
  const params = useSearchParams()
  const tab = params?.get('tab')

  return (
    <>
      {tab === null && <Home />}
    </>
  )
}
