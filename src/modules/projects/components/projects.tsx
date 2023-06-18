'use client'

import { Section } from '@/main/ui'

type Props = {
  projects?: Project[]
}

export default function Projects({ projects }: Props) {
  console.log(projects)

  return <Section>Projects</Section>
}
