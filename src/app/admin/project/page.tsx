import { NewProjectForm } from '@/modules/projects'
import Link from 'next/link'

export default function Project() {
  return (
    <section className="flex flex-col h-screen w-full gap-10 justify-center items-center">
      <div className="flex animate-section-2 items-center justify-between w-full max-w-3xl">
        <h1 className="text-4xl font-alt first-letter:text-primary">
          Adicionar Projeto
        </h1>
        <Link
          href="/admin"
          className="font-alt text-left bg-violet-500 hover:bg-violet-600 transition-all text-white px-4 py-2 rounded-full"
        >
          Ir para dashboard
        </Link>
      </div>
      <NewProjectForm />
    </section>
  )
}
