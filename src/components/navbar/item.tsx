'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useSetQueryString } from '@/modules/core'
import { useEffect, useState } from 'react'

type Props = {
  value: string | null
  label: string
}

export const Item = (props: Props) => {
  const params = useSearchParams()
  const tab = useSetQueryString('tab', props.value as string)
  const { push } = useRouter()
  const [activeTab, setActiveTab] = useState<string | null>(() => {
    if (params?.has('tab')) {
      return params.get('tab') as string
    } else {
      return null
    }
  })

  function handleSetTab() {
    if (props.value === null) {
      push('/')
      setActiveTab(null)
    } else {
      push(`/?${tab}`)
      setActiveTab(tab)
    }
  }

  useEffect(() => {
    if (params?.has('tab')) {
      setActiveTab(params.get('tab') as string)
    } else {
      setActiveTab(null)
    }
  }, [params])

  return (
    <button
      disabled={activeTab === props.value}
      onClick={handleSetTab}
      className={`py-1 font-alt uppercase leading-tight transition-colors duration-200 md:py-2 ${
        activeTab === props.value
          ? 'border-b-2 border-violet-500 text-violet-500'
          : ''
      }`}
    >
      {props.label}
    </button>
  )
}
