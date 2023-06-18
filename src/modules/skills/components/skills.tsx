'use client'

import { motion } from 'framer-motion'
import { Section } from '@/main/ui'
import Image from 'next/image'
import React from 'react'
import { containerSlideUpTwo, itemSlideUp } from '@/main/animations'

type Props = {
  skills?: Skill[]
}

export default function Skills({ skills }: Props) {
  return (
    <Section>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerSlideUpTwo}
        className="w-full overflow-x-hidden max-w-3xl xl:max-w-4xl 2xl:max-w-screen-xl h-full lg:aspect-square p-4 grid gap-4 grid-cols-1 overflow-y-auto pt-20 lg:pt-2 scrollbar-none"
      >
        {skills?.map((skill, i) => (
          <motion.div
            key={skill.id}
            variants={itemSlideUp}
            className={`w-full h-40 flex gap-10 items-center justify-between rounded-2xl shadow border border-violet-500/60 bg-zinc-800/60 hover:bg-secondary transition-colors duration-300 backdrop-blur-sm p-4 ${
              i % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <Image
              alt=""
              src={skill.imageUrl}
              width={400}
              height={400}
              className="sm:h-full w-20 sm:w-fit rounded-lg"
            />
            <div className="flex-1 flex flex-col">
              <h3
                className={`${
                  i % 2 === 0 ? 'text-end' : 'text-start'
                } md:font-medium md:text-3xl font-bold first-letter:text-primary uppercase`}
              >
                {skill.title}
              </h3>
              <div
                className={`w-full flex items-center bg-zinc-700 h-10 ${
                  i % 2 !== 0
                    ? 'rounded-r-full justify-start'
                    : 'rounded-l-full justify-end'
                }`}
              >
                <div
                  style={{
                    width: `${skill.level}%`
                  }}
                  className={`from-violet-500 via-violet-600 to-violet-700 flex items-center justify-center h-10 ${
                    i % 2 !== 0
                      ? 'rounded-r-full bg-gradient-to-r'
                      : 'rounded-l-full bg-gradient-to-l'
                  }`}
                >
                  <p className="text-lg font-alt">{skill.level}%</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
