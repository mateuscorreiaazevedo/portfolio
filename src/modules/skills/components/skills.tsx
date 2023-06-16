import React from 'react'

type Props = {
  skills?: Skill[]
}

export default function Skills ({ skills }: Props) {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-2 overflow-x-hidden overflow-y-auto">
      {skills?.map(skill => (
        <div key={skill.id} className="w-full max-w-2xl h-80 bg-zinc-800/80 backdrop-blur rounded-lg">
          {skill.title}
        </div>
      ))}
    </div>
  )
}
