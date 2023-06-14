'use client'

import { contactService } from '../service/contact-service'
import { setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { BsTrash } from 'react-icons/bs'

type Props = {
  id: string
}

export const DeleteMessage = ({ id }: Props) => {
  const router = useRouter()

  async function deleteMessage () {
    try {
      const message = await contactService.deleteMessageById(id)
      setNotification(message!, 'success')
      router.refresh()
    } catch (error) {
      setNotification((error as any).message)
    }
  }

  return (
    <button
      onClick={deleteMessage}
      className="w-20 h-10 flex items-center justify-center bg-zinc-800/60 hover:bg-red-500/60 transition-colors active:bg-red-800/60"
    >
      <BsTrash />
    </button>
  )
}
