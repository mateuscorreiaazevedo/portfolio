'use client'

import { useSearchParams } from 'next/navigation'
import { Contact, Home } from '@/components'
import React from 'react'
import { Skills } from '@/modules/skills'
import { Projects } from '@/modules/projects'

type Props = {
  skills?: Skill[]
  projects?: Project[]
}

export default function MainPage({ skills, projects }: Props) {
  const params = useSearchParams()
  const tab = params?.get('tab')

  return (
    <>
      {tab === null && <Home />}
      {tab === 'contact' && <Contact />}
      {tab === 'skills' && <Skills skills={skills} />}
      {tab === 'projects' && <Projects projects={projects} />}
    </>
  )
}
