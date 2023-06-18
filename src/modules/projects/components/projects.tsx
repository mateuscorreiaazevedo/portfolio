'use client'

import { BsArrowRight } from 'react-icons/bs'
import { Section } from '@/main/ui'
import Image from 'next/image'

type Props = {
  projects?: Project[]
}

export default function Projects({ projects }: Props) {
  return (
    <Section>
      <div className="hidden h-screen w-full max-w-3xl animate-section-3 grid-cols-1 py-px md:grid xl:max-w-5xl">
        {projects?.map((project, index) => (
          <div
            key={project.id}
            className={`flex w-full items-center justify-center xl:w-[1024px] ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <Image
              alt={project.title}
              src={project.imageUrl}
              width={1000}
              height={1000}
              className="aspect-auto w-96 xl:w-[493px]"
            />
            <div className="flex h-full w-full flex-col items-stretch justify-between bg-transparent p-2 backdrop-blur-sm xl:w-[493px]">
              <h3 className="font-alt text-5xl uppercase text-zinc-200 xl:text-6xl">
                {project.title}
              </h3>
              <p className="font-semibold text-zinc-100">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="group/link flex items-center justify-start gap-2 font-alt text-zinc-400 transition-all hover:gap-4 hover:text-primary"
              >
                Acessar projeto
                <BsArrowRight className="group-hover/link:scale-110" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="grid h-screen w-full animate-section-3 grid-cols-1 pt-24 md:hidden">
        {projects?.map(project => (
          <div key={project.id} className="group/project relative h-80 w-full">
            <Image
              alt={project.title}
              src={project.imageUrl}
              width={1000}
              height={1000}
              className="absolute inset-0 my-auto"
            />
            <div className="invisible absolute inset-0 flex flex-col items-center justify-around bg-zinc-900/60 px-4 backdrop-blur-sm transition-all group-hover/project:visible">
              <h3 className="font-alt text-4xl uppercase text-primary">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-100">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="group/link flex items-center justify-start gap-2 font-alt text-zinc-400 transition-all hover:gap-4 hover:text-primary"
              >
                Acessar projeto
                <BsArrowRight className="group-hover/link:scale-110" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
