import Link from 'next/link'
import React from 'react'

const nav = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/admin/skill',
    label: 'Adicionar Skill'
  },
  {
    link: '/admin/project',
    label: 'Adicionar Projeto'
  }
]

export default function Admin() {
  return (
    <section className="animate-section-2 container w-full h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-3xl first-letter:font-alt">
        Painel de Administrador
      </h1>
      <nav className="mt-10 flex items-center justify-between gap-2">
        {nav.map(item => (
          <Link
            key={item.label}
            href={item.link}
            className="bg-zinc-800 px-2 py-1 font-alt text-lg hover:-translate-y-2 transition-all rounded hover:bg-violet-500"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
