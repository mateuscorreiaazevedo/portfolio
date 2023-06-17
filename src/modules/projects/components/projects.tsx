'use client'

type Props = {
  projects?: Project[]
}

export default function Projects({ projects }: Props) {
  console.log(projects)

  return <div>Projects</div>
}
