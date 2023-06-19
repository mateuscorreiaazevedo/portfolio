'use client'

import { BsLinkedin, BsTelegram, BsGithub, BsInstagram } from 'react-icons/bs'
import { containerSlideUp, itemSlideUp } from '@/main/animations'
import { motion } from 'framer-motion'
import React from 'react'

const contacts = [
  {
    link: 'https://linkedin.com/in/mateuscorreiaazevedo',
    label: 'Linkedin',
    icon: BsLinkedin
  },
  {
    link: 'https://github.com/mateuscorreiaazevedo',
    label: 'Github',
    icon: BsGithub
  },
  {
    link: 'https://instagram.com/mateuscorreiaazevedo',
    label: 'Instagram',
    icon: BsInstagram
  },
  {
    link: 'https://t.me/mateuscorreiaazevedo',
    label: 'Telegram',
    icon: BsTelegram
  }
]

export default function SociaLinks() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerSlideUp}
      className="space-y-2"
    >
      {contacts.map(item => (
        <motion.a
          variants={itemSlideUp}
          href={item.link}
          key={item.link}
          target="_blank"
          className="flex h-10 items-center justify-between gap-4 bg-zinc-800 px-8 text-2xl font-light transition-all hover:bg-secondary hover:text-primary lg:h-fit lg:px-4 lg:py-2"
          rel="noreferrer"
        >
          <item.icon className="fill-white" />
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  )
}
