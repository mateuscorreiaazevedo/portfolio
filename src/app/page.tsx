import { skillService } from '@/modules/skills'
import { MainPage } from '@/components'
import React from 'react'

export default async function Home() {
  let skills: Skill[] | undefined

  try {
    skills = await skillService.getAllSkills()
  } catch (error) {
    console.error((error as any).message)
  }

  return <MainPage skills={skills} />
}
