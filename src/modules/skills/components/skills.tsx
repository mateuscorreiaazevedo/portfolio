'use client'

import { Section } from '@/main/ui'
import Image from 'next/image'
import React from 'react'

type Props = {
  skills?: Skill[]
}

export default function Skills({ skills }: Props) {
  return (
    <Section>
      <div className="grid h-full w-full max-w-3xl animate-section-3 grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden p-4 pt-20 scrollbar-none lg:aspect-square lg:py-px xl:max-w-4xl xl:grid-cols-2 2xl:max-w-screen-xl">
        {skills?.map((skill, i) => (
          <div
            key={skill.id}
            className={`flex h-40 w-full items-center justify-between gap-10 bg-zinc-900/60 p-4 shadow transition-colors duration-300 hover:bg-secondary hover:backdrop-blur-sm ${
              i % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <Image
              alt=""
              src={skill.imageUrl}
              width={400}
              height={400}
              className="w-20 sm:h-full sm:w-fit"
            />
            <div className="flex flex-1 flex-col">
              <h3
                className={`${
                  i % 2 === 0 ? 'text-end' : 'text-start'
                } font-bold uppercase first-letter:text-primary md:text-3xl md:font-medium`}
              >
                {skill.title}
              </h3>
              <div
                className={`flex h-10 w-full items-center bg-zinc-700 ${
                  i % 2 !== 0
                    ? 'justify-start rounded-r-full'
                    : 'justify-end rounded-l-full'
                }`}
              >
                <div
                  style={{
                    width: `${skill.level}%`
                  }}
                  className={`flex h-10 items-center justify-center from-violet-500 via-violet-600 to-violet-700 ${
                    i % 2 !== 0
                      ? 'rounded-r-full bg-gradient-to-r'
                      : 'rounded-l-full bg-gradient-to-l'
                  }`}
                >
                  <p className="font-alt text-lg">{skill.level}%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
