import { SkillForm } from '@/modules/skills'
import Link from 'next/link'
import React from 'react'

export default function Skill() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen gap-10">
      <div className="flex animate-section-2 items-center justify-between w-full max-w-3xl">
        <h1 className="text-4xl font-alt first-letter:text-primary">
          Adicionar Skill
        </h1>
        <Link
          href="/admin"
          className="font-alt text-left bg-violet-500 hover:bg-violet-600 transition-all text-white px-4 py-2 rounded-full"
        >
          Ir para dashboard
        </Link>
      </div>
      <SkillForm />
    </section>
  )
}
