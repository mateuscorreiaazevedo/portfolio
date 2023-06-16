'use client'

import { useSearchParams } from 'next/navigation'
import { Contact, Home } from '@/components'
import React from 'react'
import { Skills } from '@/modules/skills'

type Props = {
  skills?: Skill[]
}

export default function MainPage ({ skills }: Props) {
  const params = useSearchParams()
  const tab = params?.get('tab')

  return (
    <>
      {tab === null && <Home />}
      {tab === 'contact' && <Contact />}
      {tab === 'skills' && <Skills skills={skills} />}
    </>
  )
}
