import { DeleteMessage, contactService } from '@/modules/contact'
import { ButtonClipboard } from '@/modules/core'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

export default async function Contacts () {
  const isAuth = cookies().has('auth_token')
  let messages: Message[] | null | undefined

  try {
    messages = await contactService.getAllMessages(isAuth)
  } catch (error) {
    messages = undefined
  }

  if (messages?.length === 0 || messages === null || messages === undefined) {
    return (
      <div className="container h-screen flex-col w-full flex justify-center items-center">
        <div className="w-full max-w-2xl flex items-center justify-between">
          <h1 className="my-2 text-3xl font-alt first-letter:text-primary">Minhas mensagens</h1>
          <Link
            href="/admin"
            className="font-alt hover:underline text-violet-300 hover:text-violet-400 transition-colors"
          >
            Dashboard
          </Link>
        </div>
        <h1 className="my-2 text-lg font-alt">Nenhuma mensagem encontrada.</h1>
      </div>
    )
  }

  return (
    <div className="container h-screen flex-col w-full flex justify-center items-center">
      <div className="w-full max-w-2xl flex items-center justify-between">
        <h1 className="my-2 text-3xl font-alt first-letter:text-primary">Minhas mensagens</h1>
        {isAuth && <p>Usuário autenticado</p>}
        <Link
          href="/admin"
          className="font-alt hover:underline text-violet-300 hover:text-violet-400 transition-colors"
        >
          Dashboard
        </Link>
      </div>
      <div className="w-full max-w-2xl h-96 bg-zinc-800/60 rounded-lg border border-zinc-500/60 backdrop-blur-sm overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-violet-500 scrollbar-thumb-rounded-lg">
        {messages?.map(item => (
          <div className="flex-1 flex flex-col p-4 gap-2 h-full" key={item.id}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-alt text-base rounded-tl-lg bg-zinc-800/70 h-10 flex items-center justify-center hover:text-primary cursor-default hover:bg-secondary w-full px-4 transition-all">
                {item.name}
              </span>
              <ButtonClipboard
                input={{ value: item.email }}
                button={{
                  className:
                    'font-alt text-base bg-zinc-800/70 h-10 flex items-center justify-center hover:text-primary hover:bg-secondary w-full px-4 rounded-tr-lg transition-all'
                }}
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-alt text-lg bg-zinc-800/70 h-10 flex items-center hover:text-primary cursor-default hover:bg-secondary w-full px-4 transition-all">
                {item.subject}
              </h3>
              <DeleteMessage id={item.id} />
            </div>
            <p className="font-alt text-lg bg-zinc-800/70 h-10 flex-1 hover:text-primary cursor-default hover:bg-secondary w-full px-4 transition-all rounded-b-lg">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
