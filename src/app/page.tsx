import { skillService } from '@/modules/skills'
import { MainPage } from '@/components'
import React from 'react'
import { projectService } from '@/modules/projects'

export default async function Home() {
  const [skills, projects] = await Promise.all([
    skillService.getAllSkills(),
    projectService.getAllProjects()
  ])

  return <MainPage skills={skills} projects={projects} />
}
