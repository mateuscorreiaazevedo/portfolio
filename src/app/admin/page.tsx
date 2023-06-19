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
    <section className="container flex h-screen w-full animate-section-2 flex-col items-center justify-center">
      <h1 className="text-3xl font-bold first-letter:font-alt">
        Painel de Administrador
      </h1>
      <nav className="mt-10 flex items-center justify-between gap-2">
        {nav.map(item => (
          <Link
            key={item.label}
            href={item.link}
            className="rounded bg-zinc-800 px-2 py-1 font-alt text-lg transition-all hover:-translate-y-2 hover:bg-violet-500"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
